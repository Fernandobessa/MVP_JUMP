const INITIAL_STATE = {value:''}

export default function(state=INITIAL_STATE,action){
    switch(action.type) {
        case  'EXPORT_SESSION':
            return {...state}
        case 'END_SESSION':
            return {...state}
        case 'SEARCH':
            return {...state,value: action.payload}
        case 'CHANGE_SRC':
            return {...state,value: action.payload}
        case 'GET_DATA':
            return {...state, list: action.payload}    
        default: 
            return state
    }
}

