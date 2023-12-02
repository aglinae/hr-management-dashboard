import SearchPanel from './search-panel/search-panel';
import AccountPanel from './account-panel/accountPanel';
import IconComponent from './icon-component/Icon-component';
import './header.css';
const Header = () => {
  return (
    <section className="section-header">
      <header className="header">
        <IconComponent />
        <SearchPanel />
        <AccountPanel />
      </header>
    </section>
  );
};
export default Header;
