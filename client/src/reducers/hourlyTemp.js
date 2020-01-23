const initialState = {
    hourlyTemp: null
}

export default (state= initialState, action) => {
   //const { hourlyTempp } = action.payload;

   switch(action.type) {
       case 'HOURLY_TEMP': 
       return {...state,
        hourlyTemp: action.payload
       }
       default:
           return state
   }
}