import "./Tags.css";

const TagsList = ({ tag }) => {
  return (
    <div className="card mr-10 w-96 bg-base-100 shadow-xl">
  <div className="card-body p-4">
    <h2 className="card-title">{tag.tagName}</h2>
    <p>{tag.tagDesc}</p>
  </div>
</div>
  );
};

export default TagsList;