
import './App.css';
import Home from './components/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProductDetail from './components/product/ProductDetail';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
 return(
    <Router>
      <Header/>
      <Route path="/"  component={Home} exact/>
      <Route path="/:id"  component={ProductDetail} exact/>
      <Footer/>
    </Router>
 )
}

export default App;
