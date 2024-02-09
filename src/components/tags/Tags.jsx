import LeftSidebar from "../leftSideBar";
import TagsList from "./TagsList";
import { tagsList } from "./tagList";
import "./Tags.css";
import TopBar from "../topBar";

const Tags = () => {
  return (
    <div>
      <TopBar />

      <div className="flex flex-row w-full  border-solid">
        <LeftSidebar />
        <div className="home-container-2 mr-10 ">
          <h1 className="tags-h1">Tags</h1>
          <p className="tags-p">
            A tag is a keyword or label that categorizes your question with
            other, similar questions.
          </p>
          <p className="tags-p">
            Using the right tags makes it easier for others to find and answer
            your question.
          </p>
          <div className="tags-list-container">
            {tagsList.map((tag) => (
              <TagsList tag={tag} key={tag.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
