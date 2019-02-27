import React from 'react';
import { Details } from './component/Details/Details';
import {About} from './component/About/About';
import {Home} from './component/Home/Home';
import FooterPage from './component/Footer/Footer';
import Navigation from "./component/Nav/Nav";
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Head from './component/TitleHead/TitleHead';
import Display from './component/Display/Display';
import Result from './component/Result/Result';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div class="app">
        <div >
         <Head></Head>
          <Navigation />
      </div>
      <div >
        <BrowserRouter>
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Home' component={Home}/>
          <Route path='/details' component={Details}/>
          <Route path='/about' component={About}/>
          <Route path='/form' component={Display}/>
          </Switch>
          </BrowserRouter> 
          <Result></Result>
      </div>
      <div>
      <FooterPage />
      </div>
      </div>

    );
  }
}

export default App;