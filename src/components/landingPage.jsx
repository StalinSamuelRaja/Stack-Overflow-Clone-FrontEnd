import { Link } from "react-router-dom";
import TopBar from "./topBar";
import TextAnime from "./textAnime";


export default function LandingPage() {
  return (
    <div className="bg-black min-h-screen">
      <TopBar />

      <div className="flex flex-col md:flex-row md:justify-center md:items-center md:space-x-8 mt-8">
        <div className="m-8 md:mr-0 md:ml-12">
          <div className="max-w-md bg-yellow-200 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 text-orange-500 mx-auto mb-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Find the best answer to your technical question, help others
                answer theirs
              </h2>

              <div className="flex justify-end">
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg mr-2">
                  Join the community
                </button>
                <Link className="text-gray-800 mt-2 underline" to="/ques/all">
                  Search content
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="m-8 md:ml-0 md:mr-12">
          <div className="max-w-md bg-blue-500 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 text-blue-300 mx-auto mb-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Want a secure, private space for your coding skills and
                technical knowledge?
              </h2>

              <div className="flex justify-end">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Discover Teams
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 mx-4 mb-44 md:mx-0 text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Every <span className="md:inline-block"><TextAnime /></span> has a tab open to Stack Overflow
      </h1>
    </div>
    
    </div>
  );
}
