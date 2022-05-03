// import logo from './logo.svg';
import './App.css';
import CreateBox from './CreateBox';
// import EverySecond from './CurrentTime';
import CurrentTime from './CurrentTime';



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='App'>
      <div className='App-Container'>  
        <header className='App-Header'>
          <h1>Hello World</h1>
        </header>
        <main className='App-Main-Container'>
          <CreateBox name = 'zamir'/>
          <div>
          {setInterval(CurrentTime, 1000)}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
