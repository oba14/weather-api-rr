const initialState = {
    temp: null
}

export const temp = (state= initialState, action) => {
   //const { temp } = action.payload;

   switch(action.type) {
       case 'HOURLY_TEMP': 
       return {...state
       }

       default:
           return state
   }
}
