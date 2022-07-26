import React from 'react'
import { useReducer,createContext} from "react"
import {NavBar } from './Navbar'   
import Animation from './Animation';
import Watchlist from './Watchlist/Watchlist';

import { BrowserRouter as Router,Route} from 'react-router-dom'
import Reducer from './Reducer'

export const myContext=createContext()
 
const App = ()=>{ 
  const[state,dispatch]=useReducer(Reducer,{data:[],disaBlied:false,watchArray:[],displayData:null}) 
  return ( 
    <myContext.Provider value={{state,dispatch}}> 
      <Router>
          <NavBar /> 
          <Route path="/" exact component={Animation} />
          <Route path="/Watchlist" component={Watchlist} />
      </Router>
    </myContext.Provider>

     
  )
}
 
 

export default App
