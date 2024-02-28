import { Link } from "react-router-dom";

export default function LeftSideBar() {
  return (
    <div className="flex basis-1/4">
      <ul className="menu bg-base-100 text-base rounded-box w-full sm:w-20 mx-2">
        <li>
          <Link className="text" to="/ques/all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-7 sm:w-auto sm:h-auto"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                clipRule="evenodd"
              />
            </svg>
            Home
          </Link>
        </li>
        <li>
          <Link className="text" to="/tags">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-7 sm:w-auto sm:h-auto"
            >
              <path
                fillRule="evenodd"
                d="M4.5 2A2.5 2.5 0 0 0 2 4.5v3.879a2.5 2.5 0 0 0 .732 1.767l7.5 7.5a2.5 2.5 0 0 0 3.536 0l3.878-3.878a2.5 2.5 0 0 0 0-3.536l-7.5-7.5A2.5 2.5 0 0 0 8.38 2H4.5ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clipRule="evenodd"
              />
            </svg>
            Tags
          </Link>
        </li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-7 sm:w-auto sm:h-auto"
            >
              <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
            </svg>
            Users
          </a>
        </li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-7 sm:w-auto sm:h-auto"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 0 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clipRule="evenodd"
              />
            </svg>
            Questions
          </a>
        </li>
        {window.innerWidth > 768 && ( // Only render if screen width is larger than 768px
          <li>
            <div className="hidden sm:block card flex flex-col w-full sm:w-60 bg-base-100 shadow-xl">
              <div className="card-body max-w-sm">
                <h2 className="card-title">
                  Stack Overflow for Teams –
                  <div className="badge bg-orange-600 text-base-100">NEW</div>
                </h2>
                <p>Start collaborating and sharing organizational knowledge.</p>
                <figure>
                  {" "}
                  {/* No need for additional alignment for images */}
                  <img
                    src="https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e"
                    alt="Shoes"
                    className="w-full" // Make image full width
                  />
                </figure>
                <div className="card-actions justify-end">
                  {" "}
                  {/* No need for additional alignment for buttons */}
                  <button className="btn bg-orange-600 text-white">
                    Create a Free team
                  </button>
                  <button className="btn badge-outline">why teams?</button>
                </div>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}
