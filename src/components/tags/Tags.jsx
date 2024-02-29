import React from "react";

import TagsList from "./TagsList";
import { tagsList } from "./tagList";
import TopBar from "../topBar";
import Footergrid from "../footer";

const Tags = () => {
  return (
    <div>
      <TopBar />

      <div className="flex flex-col lg:flex-row w-full border-solid ">
        
        <div className="home-container-2 lg:ml-10 mt-5 lg:mt-0 flex-grow mx-10">
          <h1 className="text-3xl font-bold mb-4">Tags</h1>
          <p className="text-xl mb-4">
            A tag is a keyword or label that categorizes your question with
            other, similar questions.
          </p>
          <p className="text-xl mb-4">
            Using the right tags makes it easier for others to find and answer
            your question.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {tagsList.map((tag) => (
              <TagsList tag={tag} key={tag.id} />
            ))}
          </div>
        </div>
      </div>
      <Footergrid/>
    </div>
  );
};

export default Tags;
