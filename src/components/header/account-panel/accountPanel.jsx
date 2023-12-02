import '../account-panel/account-panel.css';
import Avatar from '../../../images/icons/avatar.svg';
import Setting from '../../../images/icons/setting.svg';
import Notification from '../../../images/icons/notification.svg';

const AccountPanel = () => {
  return (
    <div className="header-settings">
      <button className="header-settings__item">
        <img src={Setting} alt="Setting Image" />
      </button>
      <button className="header-settings__item">
        <img src={Notification} alt="Notification image" />
      </button>
      <button className="header-settings__item">
        <img src={Avatar} alt="Avatar girl" />
      </button>
    </div>
  );
};
export default AccountPanel;
