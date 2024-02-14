import LeftSideBar from "./leftSideBar";
import Questions from "./question";
import RightSidebar from "./rightSideBar/RightSidebar.jsx";
import "../App.css";
import TopBar from "./topBar";

export default function MainSpace() {
  return (
    <div>
      <TopBar />
      <div className="flex flex-row w-full  border-solid ">
        <LeftSideBar />
        <Questions />
        <RightSidebar />
      </div>
    </div>
  );
}
