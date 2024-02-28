import { ChatAltIcon } from "@heroicons/react/solid";

export default function Widget() {
  return (
    <div className="max-w-sm mx-auto rounded-md overflow-hidden border border-gray-300 shadow-md">
      <div className="bg-warning-subtle px-4 py-2 font-semibold">
        Featured on Meta
      </div>
      <div className="px-4 py-3 bg-warning-subtle">
        {/* Adjusted height using h-auto and md:h-64 classes */}

        <div className="flex items-center gap-3 mb-2">
          <div className="avatar">
            <div className="w-6 h-6">
              <ChatAltIcon className="w-6 h-6" />
            </div>
          </div>
          <div className="text-sm">
            Sites can now request to enable a banner to warn about their policy on...
          </div>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <div className="avatar">
            <div className="w-6 h-6">
              <ChatAltIcon className="w-6 h-6" />
            </div>
          </div>
          <div className="text-sm">
            What would you like to change about the moderator election process?
          </div>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <div className="avatar">
            <div className="w-6 h-6">
              <ChatAltIcon className="w-6 h-6" />
            </div>
          </div>
          <div className="text-sm">
            Updates to the Acceptable Use Policy (AUP) – January 2024
          </div>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <div className="avatar">
            <div className="w-6 h-6">
              <img
                src="https://stack-overflow-clone-gautam.vercel.app/static/media/blacklogo.e25e45afbd5f299111eb2182aab6feca.svg"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div className="text-sm">
            Temporary policy: Generative AI (e.g., ChatGPT) is banned
          </div>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <div className="avatar">
            <div className="w-6 h-6">
              <img
                src="https://stack-overflow-clone-gautam.vercel.app/static/media/blacklogo.e25e45afbd5f299111eb2182aab6feca.svg"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div className="text-sm">
            January 2024 post from Ryan Polk, Chief Product Officer
          </div>
        </div>
      </div>
    </div>
  );
}
