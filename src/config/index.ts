export const baseUrl = process.env.BASR_URL || "";
export const testEnvMessage = process.env.NEXT_PUBLIC_TEST || "";
export const buildId = process.env.NEXT_BUILD_ID || "";
export const jsonBaseUrl = `${baseUrl}/_next/data/${buildId}`;
