import Header from './components/Header';
import Login from './components/Login'
import Register from './components/Register';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <Main />
      </div> 
       
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
