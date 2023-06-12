import './App.css';
import logo1 from './images/scooby-do.jpg';
import logo2 from './images/shaggy.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="section1">
            <h1>Scooby Doo's adventures</h1>
            <img src={logo1} alt='scooby-doo'></img>
            <ul className='list'>
              <li>Opened 120 cases</li>
              <li>Eate vast of hamburgers</li>
              <li>catch 25 monsters</li>
            </ul>
        </div>  
        <div className="section2">
            <h1>Shegy's advetures</h1>
            <img src={logo2} alt='shaggy' ></img>
            <ul className='list l2'>
              <li>Opened 110 cases</li>
              <li>Eate vast of hamburgers</li>
              <li>catch 18 monsters</li>
            </ul>
        </div>  
      </header>
    </div>
  );
}

export default App;
