import './styles/App.css';
import Nav from './components/nav'
import Home from './components/home'
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Nav />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
