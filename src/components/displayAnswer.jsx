import { useSelector } from "react-redux";

export default function Answer() {
  const { answerinfo } = useSelector((state) => state.Answerdata.data);
  return (
    <div>
     
          <div >
            <h1 className="card-title">{answer}</h1>
            <hr />
          </div>
        
    </div>
  );
}
