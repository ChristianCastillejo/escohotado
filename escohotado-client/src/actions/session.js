function login(loginParams) {
  return fetch(`${baseUrl}/auth`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(loginParams)
  }).then(res => res.json());
}
