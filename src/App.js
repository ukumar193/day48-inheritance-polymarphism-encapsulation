import './App.css';
import Cat from './classes/Cat';
import Cheetah from './classes/Cheetah';

function App() {
  let meow = new Cat();
  meow.eatingBehaviour ();
  meow.sleepingBhehaviour();
  meow.faceingHuman();
  meow.noOfLegs=2;
  
  

  let chirutha =new Cheetah();
  chirutha.eatingBehaviour();
  chirutha.faceingHuman();
  chirutha.sleepingBhehaviour();
  

  return (
    <div className="App">
      <h2>Learning Inheritance,polymorphism,encapsulation,composition</h2>
    </div>
  );
}

export default App;
