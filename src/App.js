import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './components/signin';
import Signup from './components/signup';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch,Route} from 'react-router-dom/cjs/react-router-dom';
function App() {
  return (
    <div className="App">    
        <BrowserRouter>
          <Switch>
             <Route path="/signup">
               <Signup/>
             </Route>
             <Route exact path="/">
               <Signin/>
             </Route>
          </Switch>
       </BrowserRouter>
    </div>
  );
}
export default App;
