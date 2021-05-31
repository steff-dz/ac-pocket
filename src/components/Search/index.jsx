import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const searchIcon = (
    <FontAwesomeIcon icon={faSearch} size="2x" color="white" />
  );
  return <div className="pr-4">{searchIcon}</div>;
};

export default Search;
