'use client'

import { useState } from 'react'

interface TagFilterProps {
  tags: string[]
  onFilterChange: (selectedTags: string[]) => void
}

export default function TagFilter({ tags, onFilterChange }: TagFilterProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const toggleTag = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag]
    
    setSelectedTags(newSelectedTags)
    onFilterChange(newSelectedTags)
  }

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            selectedTags.includes(tag)
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  )
} 