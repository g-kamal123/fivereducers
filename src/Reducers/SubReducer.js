const initialState ={
    result:""
}
export const subReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'minus': return {...state,result:action.payload[0]-action.payload[1]};
        case 'clearsub': return {...state,result:''}
        default : return state;
    }
}