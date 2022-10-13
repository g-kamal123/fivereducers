const initialState ={
    result:""
}
export const mulReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'multiply': return {...state,result:action.payload[0]*action.payload[1]};
        case 'clearmul':return {...state,result:''};
        default : return state;
    }
}