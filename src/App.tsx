import './style.css';
import logoPeepo from "./peepoesnobe.png";
import MenuBar from './components/MenuBar';
import Router from './Router';
import CarrinhoDrawer from './components/CarrinhoDrawer';
import IconeLogin from './components/IconeLogin';

function App() {
  return (
    <div className='body'>
      <div>
        <header>
          <div className="logo">
            <a href='/'><img src={logoPeepo} alt="peepo esnobe" /></a>
            <div className="item-usuario">
              <IconeLogin />
            </div>
            <div className="item-carrinho">
              <CarrinhoDrawer />
            </div>
          </div>
          <MenuBar />
        </header>
      <Router />
      </div>
    </div>
  );
}

export default App;
