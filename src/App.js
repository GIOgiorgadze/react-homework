import './App.css';
import useChangeTheme from './custumhook/useBackTheme';

function App() {
  const {theme,toggle} = useChangeTheme()
  return (
    <div style={theme}>
      <div>hello world</div>
      <h1> hi there</h1>
      <br></br>
      <button type='button' onClick={toggle}>Toggle</button>

    </div>
  );
}

export default App; 
