const TagsList = ({ tag }) => {
  return (
    <div className="card mr-3 sm:mr-5 md:mr-6 lg:mr-8 xl:mr-10 mb-3 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 w-full sm:w-44 bg-base-100 shadow-xl">
      <div className="card-body p-4">
        <h2 className="card-title text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">{tag.tagName}</h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">{tag.tagDesc}</p>
      </div>
    </div>
  );
};

export default TagsList;
