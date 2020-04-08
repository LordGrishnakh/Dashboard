import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: {
    id: '',
    data: {
      fName: '',
      lName: '',
      age: 0,
      email: ''
    }
  },
  selected: false
};

const rootReducer = (state=initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SELECT_USER:
      return {
        ...state,
        selected: true,
        user: action.payload
      }
  
    default:
      return state
  }
};

export default rootReducer;