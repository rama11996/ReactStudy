import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import Header from './components/Header';

function App() {
  return (
    <div >
        <Header/> 
        <Menu/>
    </div>
  );
}

export default App;
