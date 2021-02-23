import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =['Anwar', 'Jafor', 'Alomgir', 'Salman']
  
 
  return (
    <div className="App">
      <header className="App-header">
        
        <p>My first react paragraph</p>
        <Person name ={nayoks[0]} nayika ="Moushumi"></Person>
        <Person name ="Jasim" nayika ="Shabana"></Person>
        <Person name ="Bapparaz" nayika ="Cheka"></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(props){
  const personStyle ={
    border: '2px solid red',
    margin: '10px'
  }
  return(
    <div style ={personStyle}>
      <h1>Nayok: {props.name}</h1>
      <h3>Hero of {props.nayika}</h3>
    </div>
  )
}

export default App;
