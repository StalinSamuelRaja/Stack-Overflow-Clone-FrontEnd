import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen size is mobile on component mount
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };
    handleResize(); // Call initially to set the initial state
    window.addEventListener("resize", handleResize); // Add event listener for window resize
    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);

  return (
    <div>
      <TopBar />
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left sidebar (only shown on screens larger than mobile) */}
        {!isMobile && <LeftSideBar />}

        {/* Main content */}
        <div className="lg:flex-grow">
          <QuesAnsw questionId={question && question._id} />
        </div>

        <div className="sm:w-1/4 mx-6">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
