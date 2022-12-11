import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import References from './pages/References';
import CardDetail from './components/CardDetail';
// import Collapse from './components/Collapse';
import Error from './components/Error';
import { createGlobalStyle } from 'styled-components'


// style ajouté sur l'emsemble des pages
const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', Helvetica, sans-serif;
    }
    body {
      margin: 0;
    }
`
  ReactDOM.render(
    <React.StrictMode>
        <Router>
          <GlobalStyle/>
            <Header/>
              <Switch>
                <Route exact path="/" >
                    <Home/>
                </Route>
                <Route path="/references" >
                    <References />
                </Route>
                <Route path="/cardDetail/:cardId/:imgIdx/" >
                    <CardDetail />
                </Route>  
                <Route>
                  <Error /> 
                </Route>
              </Switch>
          </Router>     
    </React.StrictMode>,
    document.getElementById('root')
  )

  