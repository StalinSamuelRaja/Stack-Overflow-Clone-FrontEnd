import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { showAnswer } from "../helpers/A_helper";

export default function Answer({ ans, questionId }) {
  const [ansStore, setAnsStore] = useState([]);

  useEffect(() => {
    async function answer() {
      const ansvalue = await showAnswer(questionId);
      setAnsStore(ansvalue);
      console.log(ansvalue);
    }
    answer()
  }, [ans]);

  return (
    <div>
      <h1 className="card-title">Answer</h1>
      {ansStore && ansStore && ansStore.map((question) => (
          <div>
            <p>{answer.answer}</p>

            <hr />
          </div>
        ))}
    </div>
  );
}
