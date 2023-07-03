import { useContext } from "react";
import { FaFire, FaCalendarAlt } from "react-icons/fa";
import { DataContext } from "../../../Contexts/DataContext";
import actionTypes from "../../../utils/commands";

const SortByHeader = () => {
  const {
    data: { sortBy },
    dataDispatch,
  } = useContext(DataContext);

  const handleSortBy = (str) => {
    dataDispatch({
      type: actionTypes.SET_SORT,
      payload: str,
    });
  };
  return (
    <section className="w-70 sort-by-header-main flex-row flex-center gap-8">
      <button
        className={`bor-rad-5 flex-grow p-10 no-border m-pointer ${
          sortBy === "like" && "bg-accent text-gap-5"
        }`}
        onClick={() => handleSortBy("like")}
      >
        <FaFire className="fa-icon m-right-5" />
        Trending
      </button>
      <button
        className={`bor-rad-5 flex-grow p-10 no-border m-pointer ${
          sortBy === "time" && "bg-accent text-gap-5"
        }`}
        onClick={() => handleSortBy("time")}
      >
        <FaCalendarAlt className="fa-icon m-right-5" />
        Latest
      </button>
    </section>
  );
};

export default SortByHeader;
