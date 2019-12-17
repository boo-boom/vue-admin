const TokenKey = "token";

export function getToken() {
  return localStorage.getItem(TokenKey);
}
