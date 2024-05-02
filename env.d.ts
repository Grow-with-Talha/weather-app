interface ImportMetaEnv {
  readonly VITE_WEATHER_API_KEY: string;
  // Add other environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
