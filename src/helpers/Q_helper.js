import {  Ques_API } from "./api";



export async function getAllQuestion(){
    const res=await fetch(`${Ques_API}/all`,{
        method:"GET",
    });
    const Quest= await res.json();
    return Quest
} 

export async function deleteQuestion(id){
    const res=await fetch(`${Ques_API}/delete/${id}`,{
        method:"DELETE",
        headers:{"Content-type":"application/json",},
    })
    const Quest=await res.json();
    return Quest;
}

export async function addQuestion(newQue){
    const res=await fetch(`${Ques_API}/add/`,{
        method:"POST",
        body:JSON.stringify(newQue),
        headers:{"Content-type":"application/json",},
    });
    const Quest=await res.json();
    return Quest;
}

export async function editQuestion(id,editQue){
    const res=await fetch(`${Ques_API}/edit/${id}`,{
        method:"PUT",
        body:JSON.stringify(editQue),
        headers:{"Content-type":"application/json",},
    });
    const Quest=await res.json();
    return Quest;
}