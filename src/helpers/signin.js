import { User_API } from "./api";


export async function RegisternewUser(newuser) {
  const res = await fetch(`${User_API}/signup`, {
    method: "POST",
    body: JSON.stringify(newuser),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

export async function SigninUser(user){
  const res = await fetch(`${User_API}/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}