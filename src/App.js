import logo from './logo.svg';
import './App.css';
import DisplayCompo from './compo/Display';
import { Buttontwo } from './compo/Display';

function App() {
  return (
    <div className="App">
      <DisplayCompo/>
      <Buttontwo/>
      <h1 className="heading">Styling Using Class Component And Function Component</h1>  
    </div>
  );
}

export default App;
