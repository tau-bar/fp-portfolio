import React from 'react';
import FullPage from './components/full-page/full-page.component'
import './App.css';
import { Switch, Route } from 'react-router-dom'


const App = () => (
    <div className="App">
    <Switch>
        <Route exact path='/github' component={() => { 
        window.location.href = 'https://github.com/tau-bar'; 
        return null;
        }}/>
        <Route exact path='/linkedin' component={() => { 
          window.location.href = 'https://www.linkedin.com/in/taubar/'; 
          return null;
          }}/>
        <Route exact path='/portfolio' component={() => { 
            window.location.href = 'https://drive.google.com/file/d/10MtxH776DprpWr6ULYnRr4MEymjTAzLM/view?usp=sharing'; 
            return null;
            }}/>
        <Route exact path='/instagram' component={() => { 
              window.location.href = 'https://www.instagram.com/tau.bar/'; 
              return null;
            }}/>
        <Route exact path='/twitter' component={() => { 
              window.location.href = 'https://twitter.com/taubar_'; 
            return null;
            }}/>
        <Route exact path='/trident' component={() => { 
              window.location.href = 'https://tridentdigital.herokuapp.com'; 
            return null;
            }}/>
        <Route exact path='/zulibakes' component={() => { 
              window.location.href = 'https://zulibakeshop.herokuapp.com/'; 
            return null;
            }}/>
    </Switch>
      <FullPage/>
    </div>
  );


export default App;
