import SearchPanel from './search-panel/search-panel';
import './header.css';
import TalentCore from '../../images/TalentCore.svg';
const Header = () => {
  return (
    <section className="section-header">
      <header className="header">
        <img src={TalentCore} alt="img Talent Core" />
        <SearchPanel />
      </header>
    </section>
  );
};
export default Header;
