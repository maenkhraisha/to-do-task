import Button from "./Button";
import Clock from "./Clock";


const Header = ({title}) => {
    const onClick = () => {
        console.log('click in the header');
    }
  return (
    <header className="header">
      <h1>{title}</h1>
      <Clock />
      <Button text='Add' color='green' onClick={onClick}/>
    </header>
  )
};

Header.defaultProps = {
    title : 'Task List'
}



export default Header;
