const initialState = {
    hourlyTemp: null
}

export const hourlyTemp = (state= initialState, action) => {
   //const { hourlyTempp } = action.payload;

   switch(action.type) {
       case 'HOURLY_TEMP': 
       return {...state
       }
       default:
           return state
   }
}