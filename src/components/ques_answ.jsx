import { useState } from "react";
import AddAnswer from "./addAnswer";

export default function QuesAnsw() {
  
const [ans,setAns]=useState("")
  return (
    <div className=" flex  basis-1/2 border-0  border-2 border-black-500">
      
          <div className="flex-row w-full card-body border-0 p-3 m-2 rounded-0 size-fit mt-20  opacity-100 text-neutral">
            <div className="card w-full bg-base-100 shadow-xl">
             
              <div className="card-body  flex flex-col">
                <h2 className="card-title">What is JavaScript</h2>
                <p>js</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary border-0 btn-outline">2 months ago</button>
                  
                </div>
                <hr></hr>
                
                <AddAnswer />
              </div>
             
          
            </div>
          </div>
        </div>
   
  );
}
