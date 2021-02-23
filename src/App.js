import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =['Anwar', 'Jafor', 'Alomgir', 'Salman']
  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ]
  
 
  return (
    <div className="App">
      <header className="App-header">
        
        <p>My first react paragraph</p>
        <Product product ={products[0]}></Product>
        <Product product ={products[1]}></Product>
        
        <Person name ={nayoks[0]} nayika ="Moushumi"></Person>
        <Person name ="Jasim" nayika ="Shabana"></Person>
        <Person name ="Bapparaz" nayika ="Cheka"></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Product(props){
  const ProductStyle ={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height:'200px',
    width: '200px',
    float: 'left'
  }
  //destructing
  const {name,price} = props.product;
  console.log(name, price)

  return(
    <div style={ProductStyle}>
      <h3>Name:{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )

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
