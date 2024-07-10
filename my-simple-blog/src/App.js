import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import NavBar from './component/NavBar';
import BlogHome from './component/BlogHome';
import TicTapToe from './component/TicTapToe';
import Dodgegobelin from './component/Dodgegobelin';



function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <BlogHome/>
      <TicTapToe/>
      <Dodgegobelin/>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
