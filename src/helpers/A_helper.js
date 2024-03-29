import { Answ_API } from "./API.js";

export async function getAllAnswer() {
  const res = await fetch(`${Answ_API}/all`, {
    method: "GET",
  });
  const Answ = await res.json();
  return Answ;
}

export async function deleteAnswer(id) {
  const res = await fetch(`${Answ_API}/delete/${id}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  });
  const Answ = await res.json();
  return Answ;
}

export async function addAnswer(quesId, newAns, setAns) {
  const res = await fetch(`${Answ_API}/add/`, {
    method: "POST",
    body: JSON.stringify({ quesId, ...newAns }),

    headers: { "Content-type": "application/json" },
  });
 
  setAns((e)=>!e)
}

export async function showAnswer(quesId) {
    console.log(quesId)
  const res = await fetch(`${Answ_API}/showans/${quesId}`, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });
  const Answ = await res.json();
 
  // console.log(Answ)
  return Answ.answer
}

export async function editAnswer(id, editAns) {
  const res = await fetch(`${Answ_API}/edit/${id}`, {
    method: "PUT",
    body: JSON.stringify(editAns),
    headers: { "Content-type": "application/json" },
  });
  const Answ = await res.json();
  return Answ;
}
