// import logo from './logo.svg';
import './App.css';
import CreateBox from './CreateBox';
// import EverySecond from './CurrentTime';
import CurrentTime from './CurrentTime';



function App() {
  return (
    <div className='App'>
        <header className='App-Header'>
          <h1>Hello World</h1>
        </header>
        <main className='App-Main-Container'>
          <CreateBox name = 'zamir'/>
          <div>
            <CurrentTime time = {new Date().toLocaleTimeString()} />
          {/* {setInterval(CurrentTime, 1000)} */}
          </div>
        </main>
    </div>
  );
}

export default App;
