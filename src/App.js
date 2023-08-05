
import './App.css';
import { Card } from './components/Card';
import { Navbar } from './components/Navbar';
import data from "./data"

function App() {
  return (
    <div className="App">
     <Navbar />
     <div className='cards'>
     {
      data.map((place)=>{
        return (
          <Card 
            {...place}
          />
        )
      })
     }
     </div>
    </div>
  );
}

export default App;
