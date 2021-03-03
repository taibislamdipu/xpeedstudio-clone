import './App.css';
import MainHeader from './components/Navbar/MainHeader/MainHeader';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <hr />
      <MainHeader></MainHeader>
    </div>
  );
}

export default App;
