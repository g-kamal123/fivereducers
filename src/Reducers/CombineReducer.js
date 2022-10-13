import { combineReducers } from "redux";
import { addReducer } from "./AddReducer";
import { subReducer } from "./SubReducer";
import { mulReducer } from "./MulReducer";
import { divReducer } from "./DivReducer";
import { clearReducer } from "./ClearReducer";
export const rootReducer = combineReducers({
    addReducer,
    subReducer,
    mulReducer,
    divReducer,
    clearReducer
})