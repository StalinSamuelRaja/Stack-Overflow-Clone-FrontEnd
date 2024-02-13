import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { deleteAnswer, showAnswer } from "../helpers/A_helper";
import { Rate } from "antd";

export default function Answer({ ans, questionId }) {
  const [ansStore, setAnsStore] = useState([]);
  useEffect(() => {
    async function answer() {
      const ansvalue = await showAnswer(questionId);
      if (Array.isArray(ansvalue)) setAnsStore(ansvalue);
      // console.log(ansvalue);
    }
  });

  const [rating, setRating] = useState(null);

  async function handleDelete(id) {
    await deleteAnswer(id);
    // answer();
  }
  useEffect(() => {
    answer();
  }, [ans]);
  async function answer() {
    const ansvalue = await showAnswer(questionId);
    if (Array.isArray(ansvalue)) setAnsStore(ansvalue);

    // console.log(ansvalue);
  }
  // console.log(ansStore);

  return (
    <div>
      <h1 className="card-title font-bold">Answer</h1>

      {ansStore &&
        ansStore.map((answer) => (
          <div key={answer._id}>
            <p >{answer.answer}</p>
            <p className="text-end"><h1 className="font-semibold">Created by:</h1> {answer.createdBy}</p>
            <p className="text-end"><h1 className="font-semibold">Created on:</h1> {new Date(answer.createdAt).toLocaleDateString()}</p>
            <div className="flex justify-start">
              {[...Array(1)].map((star, index) => {
                const currentRating = index + 1;
                return (
                  <label>
                    <input
                      type="hidden"
                      name="rating"
                      value={currentRating}
                      onClick={() => setRating(currentRating)}
                    />
                    <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
                  </label>
                );
              })}
              
            </div>
            <button
              className="btn btn-xs btn-error btn-outline m-2"
              onClick={() => handleDelete(answer._id)}
            >
              Delete
            </button>
            <hr />
          </div>
        ))}
    </div>
  );
}
