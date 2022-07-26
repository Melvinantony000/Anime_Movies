import React, { useState,useEffect } from "react";
 import "./WatchlistCSS.css"

const Watchlist =()=>{

    if((localStorage.getItem('watchlist') == null)){
      localStorage.setItem("watchlist",'[]')
      }
    const watchListLocatStorage = localStorage.getItem("watchlist") 
    const watchListData=  JSON.parse(watchListLocatStorage)
    
    const [state,setState]=useState("")
    
    const  removeHandler = (res)=>{ 
 
     var watchData=JSON.parse(localStorage.getItem("watchlist"));

     const filFun =(responce)=>{

         if(watchData === null){
            localStorage.setItem("watchlist","[]")
          }
         if(responce.mal_id === res.mal_id){
           return false;
         }else{
         return true;
    }
    }
     const removeObj=watchData.filter((filFun))
     localStorage.setItem("watchlist",JSON.stringify(removeObj))
     setState(res)
        } 

        useEffect(()=>{

        },[state])

     return(
     <div className="head_tag">
                 <p className="head_text">Watchlist</p>

        <div className="main_tag">

            <div className="row">
                     {  
                    watchListData.map((res)=>{
                return(
                        <div className="col-md-3" key={res.mal_id}>
                    <div className="card card_style"  >
                    <img className="card-img-top img_style" src={res.images.jpg.large_image_url} alt="Card image cap"/>
                    <div className="card-body  ">
                      <h5 className="card-title text_text">{res.title_english}</h5>
                       <button  className="button" disabled={false} onClick={removeHandler.bind(this,res)}>Remove</button> 

                     </div>
                  </div> 
                        </div>
                        )
                    })}  
            </div>
        </div> 
           <div style={{height:"390px"}}></div>
    </div>
     )
}
export default Watchlist


 



 