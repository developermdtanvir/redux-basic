import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';
function App() {
  const element = <h1>Hello World</h1>;

  console.log(element);
  return (
    <div className="App">
     <h1 className='text-3xl font-bold underline'>Hello world redux addToCart commaing Heare</h1>
     <Cart />
     <Shop />
    </div>
  );
}



export default App;
