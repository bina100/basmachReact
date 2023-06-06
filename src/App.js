import './App.css';
import Counter from './components/counter';
import InputVal from './components/inputVal';
import Message from './components/message';

function App() {
  return (
    <div className="App">
      <h1>html</h1>
      <Counter/>
      <InputVal/>
      <Message txt="first 111"/>
      <Message txt="first 222"/>
    </div>
  );
}

export default App;
