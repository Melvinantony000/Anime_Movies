


const Reducer=(state,action)=>{

    
       switch(action.type){


        case "displayData": 
        return {...state,displayData:action.payload}



        case "add": 
             const watchVar =state.watchArray.push(action.payload)
             
            return{...state,watchVar}
            

       
        case "remove": 

             const filFun =(res)=>{
                if(res.mal_id === action.payload.mal_id){
                    return false;
                }else{
                    return true;
                }
             }
           const removeObj=state.watchArray.filter((filFun))
           console.log(removeObj)
        localStorage.setItem("watchlist",JSON.stringify(removeObj))
        return{...state,watchArray:removeObj}

 
        case "disabled":

            return {...state,disaBlied:action.payload}    

          
            
    }}


export default Reducer
