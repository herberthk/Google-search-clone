// Make environment variables strongly typed
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      GOOGLE_SEARCH_API_KEY: string;
      GOOGLE_SEARCH_CTX_KEY: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
