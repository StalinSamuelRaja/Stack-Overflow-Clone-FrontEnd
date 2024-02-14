// View_QA.jsx

import { useState } from "react";
import AddAnswer from "./addAnswer";
import TopBar from "./topBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatequestioninfo } from "../reducers/questionreducer";
import LeftSideBar from "./leftSideBar";
import RightSidebar from "./rightSideBar/RightSidebar";
import QuesAnsw from "./ques_answ";

export default function View_QA() {
  const { questioninfo } = useSelector((state) => state.Questiondata.data);
  const question = questioninfo && questioninfo.Quest[0];
  return (
    <div>
      <TopBar />
      <div className="flex flex-row w-full  border-solid ">
        <LeftSideBar />
        <QuesAnsw questionId={question && question._id} />
        <RightSidebar />
      </div>
    </div>
  );
}
