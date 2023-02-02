import './App.css';
import AllRoutes from './Components/Shared/AllRoutes';
import {AuthContextProvider} from './context/AuthContextProvider';



function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <AllRoutes />
      </AuthContextProvider>
    </div>
  );
}

export default App;
