// import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
function App() {
  console.log(process.env.REACT_APP_ACCESS_KEY)
  // console.log(process.env.UNSPLASH_ACCESS_KEY)
  // console.log(process.env.REACT_APP_TEST)
  return (
    <div className="App">
      <Search/>
    </div>
  );
}

export default App;
