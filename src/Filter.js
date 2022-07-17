import React from "react";
import { useState,useContext} from "react";
import { myContext } from "./app";
import "./FilterDisplayCSS.css"

const Filter = ({data })=>{
 
    const {dispatch} =useContext(myContext)
    const [search,setSearch]=useState("") 


    const onChangeEvent = (e)=>{ 
        setSearch(e.target.value)
       }

   const eventHandler =(res)=>{   

        dispatch({
          type:"disabled",
          payload:false
        })


        dispatch({
          type:"displayData",
          payload:res
           }) 
       }

   let filterFun =(Data) =>{ 
         let fillterStr=''; 

         if(Data.title_english != null){
                  fillterStr += Data.title_english.toLowerCase();
               }

         return fillterStr.includes(search.toLowerCase());
      } 

   let filteredObj=data.filter(filterFun)
  
 
    return(<div>

 
          <form>
               <div className="row">
                <div className="col-md-12">
                  <div className="filter_all">
                   <input  className="search_input"   type="search" placeholder="Search Movie Title"   onChange={onChangeEvent}  /> 
                    <div className="table_table">
                     <div className="table_all">
                      <table className=" "> 
                        <tbody >
                         { filteredObj.map((Data) =>{ 
                              return <tr className="filter_tr" key={Data.mal_id} onClick={eventHandler.bind(this,Data)}>  
                                          {Data.title_english != null ? <>                                                
                                             <td>
                                              <img src={Data.images.jpg.small_image_url}/>
                                             </td> 
                                             <td >
                                                  <p className="filter_text">{Data.title_english}</p>
                                                  <p className="filter_text">{Data.rating.substring(0,6)}</p>
                                             </td>  
                                           </> : null}
                                     </tr>

                                   }
                               ) 
                     }

                      </tbody>
                    
                   
                  
                 </table>
                 </div>
                 </div>
                </div>
              </div>
            </div>
             
                  
           </form>
          </div>
       
    )}
export default Filter






