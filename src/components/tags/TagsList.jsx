import Footergrid from "../footer";

const TagsList = ({ tag }) => {
  return (
    <div className="card mr-3 sm:mr-5 md:mr-6 lg:mr-8 xl:mr-10 mb-3 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 w-full sm:w-44 bg-base-100 shadow-xl">
      <div className="card-body p-2 sm:p-4">
        <h2 className="card-title text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">{tag.tagName}</h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-lg">{tag.tagDesc}</p>
      </div>
      
    </div>
  );
};

export default TagsList;
