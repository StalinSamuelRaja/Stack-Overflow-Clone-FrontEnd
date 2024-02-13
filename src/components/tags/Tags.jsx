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
          <h1 className="card-title text-bold text-3xl">Tags</h1>
          <h1 className="text-2xl">
            A tag is a keyword or label that categorizes your question with
            other, similar questions.
          </h1>
          <h1 className="text-2xl">
            Using the right tags makes it easier for others to find and answer
            your question.
          </h1>
          <div className="tags-list-container ">
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
