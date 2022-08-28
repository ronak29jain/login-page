import './App.css';
import Navigation from './components/Navigation/Navigation';
import Body from './components/Body/Body';

import { AuthContextProvider } from './context/Authcontext';

function App() {
  
  return (
    <div className="App">
      <AuthContextProvider >
        <Navigation />
        <Body />
      </AuthContextProvider>
    </div>
  );
}

export default App;