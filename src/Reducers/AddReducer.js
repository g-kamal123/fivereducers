const initialState ={
    result:""
}
export const addReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'add': return {...state,result:action.payload[0]+action.payload[1]};
        case 'clearadd': return {...state,result:""}
        default : return state;
    }
}