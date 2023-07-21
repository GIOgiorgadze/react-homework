import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import router from './routers/router';

function App() {

  return (
    <div className="App">
         <RouterProvider router={createBrowserRouter(router)} />
    </div>
  );
}

export default App;
