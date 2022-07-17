import React from 'react'
import { useState,useEffect} from 'react'
import Axios from 'axios'
import Filter from './Filter'
import AnimeDetails from './AnimeDetails'
 


  


const Animation = () => {
  
 
 

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
      <div className=' ' style={{backgroundColor:"  rgb(27, 22, 22)" ,margin:"30px" }} >
          <div className='row'>
            <div className='col-md-8'>
            <AnimeDetails />

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




















   
 

