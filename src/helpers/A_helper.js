import {  Answ_API } from "./api";

export async function getAllAnswer(){
    const res=await fetch(`${Answ_API}/all`,{
        method:"GET",
    });
    const Answ= await res.json();
    return Answ
} 

export async function deleteAnswer(id){
    const res=await fetch(`${Answ_API}/delete/${id}`,{
        method:"DELETE",
        headers:{"Content-type":"application/json",},
    })
    const Answ=await res.json();
    return Answ;
}

export async function addAnswer(quesId,newAns){
    const res=await fetch(`${Answ_API}/add/`,{
        method:"POST",
        body:JSON.stringify(quesId,newAns),
        headers:{"Content-type":"application/json",},
    });
    const Answ=await res.json();
    return Answ;
}



export async function editAnswer(id,editAns){
    const res=await fetch(`${Answ_API}/edit/${id}`,{
        method:"PUT",
        body:JSON.stringify(editAns),
        headers:{"Content-type":"application/json",},
    });
    const Answ=await res.json();
    return Answ;
}
