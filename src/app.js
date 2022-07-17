import React from 'react'
import { useReducer,createContext} from "react"
import {NavBar } from './Navbar'   
import Animation from './Animation';
import Watchlist from './Watchlist';

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Reducer from './Reducer'

export const myContext=createContext()
 
const App = ()=>{ 
  const[state,dispatch]=useReducer(Reducer,{data:[],disaBlied:false,watchArray:[],displayData:null}) 
  return ( 
    <myContext.Provider value={{state,dispatch}}> 
      <Router >
          <NavBar /> 
         <Switch>
          <Route path="/Animation" component={Animation} />
          <Route path="/Watchlist" component={Watchlist} />
        </Switch>
      </Router>
    </myContext.Provider>

     
  )
}
 
 

export default App
