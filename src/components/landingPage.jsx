import { Link } from "react-router-dom";
import TopBar from "./topBar";
import TextAnime from "./textAnime";

export default function LandingPage() {
  return (
    <div >
      <TopBar />

      <div className="flex" id="bg_base">
        
        <div className="flex-row">
          <div className="card ml-72 m-48 w-96 bg-warning-subtle text-info-content">
            <div className="card-body">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-9 h-9 ml-32"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <h2 className="card-title">
                Find the best answer to your technical question, help others
                answer theirs
              </h2>

              <div className="card-actions justify-end">
                <button className="btn bg-orange-600 text-secondary-content">
                  join the community
                </button>
                <Link className="link mt-2" to="/ques/all">
                  search content
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-row">
          <div className="card ml-74 mt-48 w-96  bg-primary-content text-info-content">
            <div className="card-body">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-9 h-9 ml-32"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <h2 className="card-title">
                Want a secure, private space for your Coding skills and
                technical knowledge?
              </h2>

              <div className="card-actions justify-end">
                <button className="btn btn-primary text-secondary-content">
                  Discover Teams
                </button>
              </div>
              
            </div>
            
          </div>
          <div className="flex-col mt-10 mr-48">
         <div className="">
          <h1 className="text-5xl text-white  align-bottom">
            


           Every {<TextAnime />} has a tab open to stack overflow </h1>
          </div>
         </div>
        </div>
      
      </div>
      
     
      
    </div>
    
  );
}
