import Apps from './../../assets/apps.png';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import './Header.sass';
export default function Header() {
  return (
    <div className="header">
      <p className="tools-styles">Почта</p>
      <p className="tools-styles">Картинки</p>
      <img className="apps" src={Apps} alt="apps for you" />
      <AccountCircleTwoToneIcon className="account-circle" />
    </div>
  );
}
