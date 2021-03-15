import './App.css';
import RenderUniquePixels from './Components/renderUniquePixels';

function App() {
  return (
    <div className="App">
      <RenderUniquePixels imageWidth={256} imageHeight={128} />
    </div>
  );
}

export default App;
