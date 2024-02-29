import LeftSideBar from "./leftSideBar";
import Questions from "./question";
import RightSidebar from "./rightSideBar/RightSidebar.jsx";
import "../App.css";
import TopBar from "./topBar";
import Footergrid from "./footer.jsx";

export default function MainSpace() {
  return (
    <div>
      <TopBar />
      <div className="flex flex-col sm:flex-row w-full border-solid ">
        {/* LeftSideBar */}
        <div className="hidden sm:block sm:w-1/4 mx-2">
          <LeftSideBar />
        </div>
        {/* Questions */}
        <div className="sm:w-3/4 px-4 py-6 bg-white rounded-lg shadow-md">
          <Questions />
        </div>
        {/* RightSidebar */}
        <div className=" sm:w-1/4 mx-2">
          <RightSidebar />
        </div>
      </div>
      <Footergrid/>
    </div>
  );
}
