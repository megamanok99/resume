import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages';
import SinginPage from './pages/signin';

function App() {
  return (
    <BrowserRouter>
    <Switch>

      <Route path='/' component={Home} exact/>
      <Route path='/singin' component={SinginPage} exact/>
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
