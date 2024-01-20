import { getEnvVariable } from "./env";
export const DOMAIN = getEnvVariable("NEXT_PUBLIC_VERCEL_URL");
export const BASE_URL = `${DOMAIN}/api/v1`;
