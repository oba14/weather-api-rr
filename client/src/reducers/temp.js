const initialState = {
    nearbyTemp: null,
    temp: null,
    citySearched: ''
}

export default (state= initialState, action) => {
   //const { temp } = action.payload;
    
   switch(action.type) {
       case 'NEARBY_TEMP': 
       return {
           ...state, 
            nearbyTemp: action.payload
       }

       case 'CITY_SEARCHED':
        return {
            ...state, 
             nearbyTemp: action.payload,
             citySearched: action.citySearched
        }
       default:
           return state
   }
}
