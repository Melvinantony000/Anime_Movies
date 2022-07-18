import React from 'react'
import "./AnimationDefaultCSS.css"


const AnimationDefault = ({data}) => {

 
  return (
    <div className='row_row'>
      <div className='posters'>
        {data.map((res)=>{
          return(
            <div className=' 'key={res.mal_id}>
              {res.title_english != null ? <>
          <img className='poster' alt='poster' src={res.images.jpg.large_image_url}/>
          <p className='title_text'>{res.title_english}</p>
          </>:null}
           </div>

          )})}
        
      </div>
     </div>
  )
}

export default AnimationDefault
