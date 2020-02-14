//Second Step of a Redux App
const initialState = {
    counter: 0,
    results: []
}

const Reducer = (state = initialState, action) => {
   switch(action.type) {
       case 'INCREMENT': 
         return {
           ...state,
           counter: state.counter + 1
         }
       
       case 'DECREMENT': 
         return {
          ...state,
           counter: state.counter - 1
         }
         
       case 'ADDFIVE': 
         return {
          ...state,
           counter: state.counter + action.value
         }
       
       case 'DELFIVE': 
         return {
          ...state,
           counter: state.counter - action.value
         }
       
       case 'STORE_RESULT':
         return {
           ...state,
           results: state.results.concat({id: new Date(), value: state.counter}) //Add the state counter into the results array
         }  
       
       case 'DELETE_RESULT':
         //Returns a new array which returns all the elements which are not equal to the id which was clicked
         const updatedArray = state.results.filter(results => results.id !== action.resultID);
         return {
           ...state,
           results: updatedArray
         }    
     }
   return state;
};

//   if(action.type === 'INCREMENT'){
//       return {
//           counter: state.counter + 1
//       }
//   }

//   if(action.type === 'DECREMENT'){
//     return {
//         counter: state.counter - 1
//     }
//  }
 
//  if(action.type === 'ADDFIVE'){
//     return {
//         counter: state.counter + action.value
//     }
// }
 
// if(action.type === 'DELFIVE'){
//     return {
//         counter: state.counter - action.value
//     }
// }

export default Reducer;