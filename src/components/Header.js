import Button from './Button';
import Clock from './Clock';

const Header = ({ title, onToggol, showForm }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
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
