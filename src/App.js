import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import ProductDetails from './components/ProductDetails';

function App() {
  return (

      <Router>
      <Header/>
        <Switch>
          <div className="app">
          <Route exact path="/" component={Home}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Products" component={Products}/>
          <Route path="/products/:productId" component={ProductDetails} />
          </div>
        </Switch>
      </Router>


  );
}

export default App;