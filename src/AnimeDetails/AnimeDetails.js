import React,{useContext,  useEffect} from "react";
import {myContext} from "../app"
import "./AnimeDetailsCSS.css"
 
const AnimeDetails = ()=>{

    const {dispatch} =useContext(myContext) 
    const {state}=useContext(myContext)

    
 
    const buttonHandler = (res)=>{ 

    if((localStorage.getItem('watchlist') == null)){
        localStorage.setItem("watchlist",'[]')
    }
        const updated_data=JSON.parse(localStorage.getItem("watchlist"));
        updated_data.push(res)

       localStorage.setItem("watchlist",JSON.stringify(updated_data))
    
        dispatch({
            type:"disabled",
            payload:true

            })
    }  
    return<div>
             {state.displayData != null ? <>
             <div className="anime_glob">
             <div className="row p-3">
                <div className="col-md-6">
                <img className=" img_tag" src={state.displayData.images.jpg.large_image_url} alt="Card image cap"/>

                <button className="watchList_Btn" type="button" onClick={()=>{window.open(`${state.displayData.trailer.url},asd`)}} >Watch Trailer</button>
                      
                     <button className="watchList_Btn" disabled = {state.disaBlied} onClick={buttonHandler.bind(this,state.displayData)}>Add to Watchlist</button>

                   
                     
                </div>
                <div className="col-md-6">
                 

                     <h5 className="movie_title">{state.displayData.title_english}</h5>
 

                     <p className="detail_year">{`Year: ${state.displayData.aired.prop.from.year}`}</p>
                     <p className="release_rating">{`Ratings: ${state.displayData.rating.substring(0,6)} Release: ${state.displayData.aired.prop.from.day}-${state.displayData.aired.prop.from.month}-${state.displayData.aired.prop.from.year}`}</p>

                     <p className="episodes_anime">{`Episodes: ${state.displayData.episodes}`}</p>
                     <div className="synopsis_synopsis">
                     <p className="synopsis_text">{`Synopsis: ${state.displayData.synopsis}`}</p>

                     </div>

                     

                </div>
                </div>
                </div>
            
           
          </> : null}
          
          </div>
}
export default AnimeDetails



 