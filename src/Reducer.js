
const Reducer=(state,action)=>{

    
       switch(action.type){ 
                    case "displayData": 
                      return {...state,displayData:action.payload}
             
                    case "disabled": 
                      return {...state,disaBlied:action.payload}     
                  }
                }
export default Reducer
