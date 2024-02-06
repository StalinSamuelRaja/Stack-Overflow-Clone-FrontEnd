import {  Answ_API } from "./api";

export async function getAllAnswer(){
    const res=await fetch(`${Answ_API}/all`,{
        method:"GET",
    });
    const Quest= await res.json();
    return Quest
} 

export async function deleteAnswer(id){
    const res=await fetch(`${Answ_API}/delete/${id}`,{
        method:"DELETE",
        headers:{"Content-type":"application/json",},
    })
    const Quest=await res.json();
    return Quest;
}

export async function addAnswer(newQue){
    const res=await fetch(`${Answ_API}/add/${id}`,{
        method:"POST",
        body:JSON.stringify(newQue),
        headers:{"Content-type":"application/json",},
    });
    const Quest=await res.json();
    return Quest;
}

export async function editAnswer(id,editQue){
    const res=await fetch(`${Answ_API}/edit/${id}`,{
        method:"PUT",
        body:JSON.stringify(editQue),
        headers:{"Content-type":"application/json",},
    });
    const Quest=await res.json();
    return Quest;
}