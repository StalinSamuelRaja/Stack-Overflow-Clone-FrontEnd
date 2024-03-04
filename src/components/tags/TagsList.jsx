import Footergrid from "../footer";

const TagsList = ({ tag }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-body p-2 sm:p-4">
        <span className="badge bg-primary me-1">{tag.tagName}</span>
        <p className="card-text">{tag.tagDesc}</p>
      </div>
    </div>
  );
};

export default TagsList;