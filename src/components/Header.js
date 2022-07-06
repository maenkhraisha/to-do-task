import Button from './Button';
import Clock from './Clock';
import logo from './img/logo.gif';

const Header = ({ title, onToggol, showForm }) => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className='logo'/>
      <Clock />
      <Button
        text={showForm ? 'Close' : 'Add'}
        color={showForm ? 'orange' : 'green'}
        onClick={onToggol}
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task List',
};

export default Header;
