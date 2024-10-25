export default function WidgetTags() {
  const tags = [
    "c",
    "css",
    "express",
    "firebase",
    "html",
    "java",
    "javascript",
    "mern",
    "mongodb",
    "mysql",
    "next.js",
    "node.js",
    "php",
    "python",
    "reactjs",
  ];

  return (
    <div className="card bg-base-100 shadow-xl rounded-3 w-full md:w-4/5 h-auto md:h-3/4 mt-0">
      <div className="card-header bg-[#2A7FB2] text-[#ffffff] opacity-100 font-semibold">Related Tags</div>

      <div className="tags p-3 flex flex-wrap">
        {tags.map((tag, index) => (
          <a key={index} role="button" className="btn btn-sm m-1 bg-[#AFE2F3]">
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
}
