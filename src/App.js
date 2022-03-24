import {Navbar, Welcome, Services, Footer, Loader} from './components'
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar/>
      <Services />
      </div>
        <Welcome />
      <Footer/>
    </div>
  );
}

export default App;
