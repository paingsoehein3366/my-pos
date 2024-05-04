interface Config {
      apiBaseUrl: string,
}

export const config: Config = {
      apiBaseUrl: import.meta.env.REACT_APP_API_BASE_URL || ""
}