import { headerItems } from '../../data/data.jsx';
import AppContainer from '../../components/app/appContainer';
import './headerComponent.scss';

const HeaderComponent = () => {
  return (
    <header className="header">
      <AppContainer>
        <nav className="header-nav">
          {headerItems.map((headerItem) => renderItems(headerItem))}
          <div className="header-settings">
            {headerItems
              .filter((headerItem) => headerItem.type === 'settings')
              .map((settingsItem) => (
                <button key={settingsItem.id} className="header-settings__item">
                  <img src={settingsItem.image} alt={settingsItem.alt} />
                </button>
              ))}
          </div>
        </nav>
      </AppContainer>
    </header>
  );
};

const renderItems = (headerItem) => {
  switch (headerItem.type) {
    case 'logo':
      return (
        <div key={headerItem.id} className={`header-${headerItem.type}`}>
          <a className="header-logo__link" href="#">
            <img src={headerItem.image} alt={headerItem.alt} />
          </a>
        </div>
      );
    case 'search':
      return (
        <div key={headerItem.id} className={`header-${headerItem.type}`}>
          <div className="header-search__wrapper">
            <input
              type="text"
              className="header-search__input"
              placeholder={headerItem.title}
              maxLength={45}
            />
            <button className="header-search__btn">
              <img src={headerItem.image} alt={headerItem.alt} />
            </button>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default HeaderComponent;
