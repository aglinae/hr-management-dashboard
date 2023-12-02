import './search-panel.css';
import searchIcon from '../../../images/icons/search-normal.svg';
const SearchPanel = () => {
  return (
    <div className="search-panel">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for jobs, candidates and more..."
          className="search-input"
        />
        <button className="search-btn">
          <img
            src={searchIcon}
            className="search-icon"
            alt="image Search Icon"
          />
        </button>
      </div>
    </div>
  );
};
export default SearchPanel;
