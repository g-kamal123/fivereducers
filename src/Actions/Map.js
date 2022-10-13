export const mapToState =(state)=>{
    return{
        ...state
    }
}
const thunkfunction =()=>{
    const res =(dispatch)=>{
        dispatch({
            type:'clearadd'
        })
        dispatch({
            type:'clearsub'
        })
        dispatch({
            type:'clearmul'
        })
        dispatch({
            type:'cleardiv'
        })
        dispatch({
            type:'clear'
        })
    }
    return res
}
const Action =(type,payload)=>{
    return{
        type,
        payload
    }
}
export const mapToDispatch =(dispatch)=>{
    return {
        setNum1:(e)=>dispatch({
            type:'num1',
            payload:e
        }),
        setNum2:(e)=>dispatch({
            type:'num2',
            payload:e
        }),
        operation:(action,arr)=>dispatch(Action(action,arr)),
        clear:()=>dispatch(thunkfunction())
    }
}