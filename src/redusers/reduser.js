
const initState = {
  hasError: false,
}

const reduser = (state = initState, action) => {

  switch (action.type) {
    case 'ERR':
      return state = {
        hasError: true
      };    
      
    default:
      return state;
  }
};

export default reduser;