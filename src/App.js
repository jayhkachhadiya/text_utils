import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Navbar title="Thrill of hill" offer="special offer" />
      <div className='container'>
        <Textform  heading="Enter the text"/>
      </div>
    </>
  );
}

export default App;