import LeftSideBar from "./leftSideBar";

import RightSidebar from "./rightSideBar/rightSideBar";
import "../App.css";
import QuesAnsw from "./ques_answ";

export default function View_QA() {
  return (
    <div className='flex flex-row w-full  border-solid '>
        <LeftSideBar />
        <QuesAnsw  />
        <RightSidebar />
     </div>
  );
}
