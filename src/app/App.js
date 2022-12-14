import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Stopwatch from './components/Stopwatch';
import ContestantsList from './components/ContestantsList';

function App() {

  return (
    <div className="App">
      <header>
        <h6 className='subheader'>WINNERS KEEP, LOSERS WHEEP</h6>

        <h2 className='header'>DEFINE THE WINNER</h2>
      </header>
      <Stopwatch />
      <ContestantsList />
    </div>
  );
}

export default App;
