import React,{useContext} from 'react'
import { useState,useEffect} from 'react'
import Axios from 'axios'
import Filter from './Filter/Filter'
import AnimeDetails from './AnimeDetails/AnimeDetails'
 import AnimationDefault from './AnimationDefault/AnimationDefault'
import { myContext } from "./app";
 

const Animation = () => {
  
   

  const {state}=useContext(myContext)

  const watchListLocatStorage = localStorage.getItem("watchlist") 
  const watchListData=  JSON.parse(watchListLocatStorage)
 

     const [data,setData]=useState({datA:[]}) 
        var url="https://api.jikan.moe/v4/anime"; 
       

        useEffect(()=>{

            Axios.get(url).then((res)=>{ 
                setData({...data,datA : res.data.data}) 
       }).catch(()=>{})

        },)
 

          

  return (
    <div>
       <div>
      <div className=' ' style={{backgroundColor:"  rgb(27, 22, 22)" ,margin:"30px"  }}>
          <div className='row'>
            <div className='col-md-8'>
            {state.displayData != null ? <>
              <AnimeDetails /> 
            </> :  
                         <AnimationDefault data={data.datA}/>

}

            </div>
            <div className='col-md-4'>
            <Filter data={data.datA}    />

            </div>
          </div>
        </div>  
        </div>
      
        
       
    
        
  </div>)
}

export default Animation




















   
 

