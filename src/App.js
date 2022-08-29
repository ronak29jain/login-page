import './App.css';
import Body from './components/Body/Body';

import { AuthContextProvider } from './context/Authcontext';

function App() {
  
  return (
    <div className="App">
      <AuthContextProvider >
        <Body />
      </AuthContextProvider>
    </div>
  );
}

export default App;