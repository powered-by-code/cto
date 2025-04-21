export const env = {
  NEXT_PUBLIC_POSTHOG_KEY: "phc_v9StNLLaqHFGHJddZN3JSXE4oTD6F5LDk7ZptWQ5osS",
  NEXT_PUBLIC_DOMAIN: "https://cubeunity.com",
};

export const initEnv = () => {
  const keys = Object.keys(env);
  keys.forEach((key) => {
    process.env[key] = env[key as keyof typeof env];
  });
};
