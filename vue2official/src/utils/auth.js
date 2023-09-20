import { localCache } from "@/utils/cache";

const TokenKey = "token";

export function getToken() {
  return localCache.get(TokenKey);
}

export function setToken(token) {
  return localCache.set(TokenKey, token);
}

export function removeToken() {
  return localCache.remove(TokenKey);
}
