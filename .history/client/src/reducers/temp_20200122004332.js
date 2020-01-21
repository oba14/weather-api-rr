const initialState = {
    nearbyTemp: null,
    temp: null
}

export const temp = (state= initialState, action) => {
   //const { temp } = action.payload;
    console.log('REDUCER', action.payload);
    
   switch(action.type) {
       case 'NEARBY_TEMP': 
       return {
           ...state, 
            nearbyTemp: action.payload
       }

       default:
           return state
   }
}
