const initialState ={
    result:""
}
export const divReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'divide': return {...state,result:action.payload[0]/action.payload[1]};
        case 'cleardiv':return {...state,result:''};
        default : return state;
    }
}