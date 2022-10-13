const initialState ={
    num1:'',
    num2:''
}
export const clearReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'num1':return {...state,num1:action.payload}
        case 'num2':return {...state,num2:action.payload}
        case 'clear':return {...state,num1:'',num2:''}
        default : return state
    }
}