import './App.css';
import Counter from './components/counter';
import InputVal from './components/inputVal';
import Message from './components/message';
import ImagesList from './h_m_components/ImagesList';
import PluseMinus from './h_m_components/PluseMinus';
import SelectBox from './h_m_components/SelectBox';
import SelectImg from './h_m_components/SelectImg';

function App() {
  return (
    <div className="App">
      <h1>html</h1>
      <Counter/>
      <InputVal/>
      <Message txt="first 111"/>
      <Message txt="first 222"/>
      <PluseMinus/>
      <ImagesList/>
      <SelectBox/>
      <SelectImg/>
    </div>
  );
}

export default App;
