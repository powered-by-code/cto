"use client"

import posthog from "posthog-js"
import { PostHogProvider as PHProvider, usePostHog } from "posthog-js/react"
import { Suspense, useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

import { env } from "@/env"

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: window.location.origin,
      ui_host: "https://us.i.posthog.com",
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') {
          // Log successful initialization
          console.log('PostHog initialized successfully');
        }
      },
      autocapture: true,
      capture_pageview: true,
      capture_pageleave: true,
      debug: process.env.NODE_ENV === "development",
    })
  }, [])

  return (
    <PHProvider client={posthog}>
      <SuspendedPostHogPageView />
      {children}
    </PHProvider>
  )
}

function PostHogPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const posthog = usePostHog()

  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname
      const search = searchParams.toString()
      if (search) {
        url += "?" + search
      }
      posthog.capture("$pageview", { "$current_url": url })
    }
  }, [pathname, searchParams, posthog])

  return null
}

function SuspendedPostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  )
}
