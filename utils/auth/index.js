const {
  API_URI
} = process.env;

const headers = {
  "Content-Type": "application/json"
}

export const createUser = req => fetch(`${API_URI}/auth/register`, {
  method: "POST",
  headers,
  body: JSON.stringify(req.body)
});

export const getLogin = req => fetch(`${API_URI}/auth/login`, {
  method: "POST",
  headers,
  body: JSON.stringify(req.body)
});