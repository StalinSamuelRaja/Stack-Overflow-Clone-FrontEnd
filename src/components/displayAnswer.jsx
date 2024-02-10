import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { deleteAnswer, showAnswer } from "../helpers/A_helper";

export default function Answer({ ans, questionId }) {
  const [ansStore, setAnsStore] = useState([]);
  async function answer() {
    const ansvalue = await showAnswer(questionId);
    if(Array.isArray(ansvalue))
    setAnsStore(ansvalue);

    console.log(ansvalue);
  }
  useEffect(() => {
    
    answer()
  }, [ans]);

  async function handleDelete(id){
   await deleteAnswer(id)
   answer()
  }

  console.log(ansStore)
    return (
    <div>
      <h1 className="card-title">Answer</h1>

      {ansStore && ansStore.map((answer) => (
          <div key={answer._id}>
            <p>{answer.answer}</p>
        <button onClick={()=>handleDelete(answer._id)}>Delete</button>
            <hr />
          </div>
        ))}
    </div>
  );
}
