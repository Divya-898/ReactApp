import { combineReducers } from "redux";
import { productReducer, selectedProductReducer,addReducer } from "./productReducer";
import {inc_dec} from '../../counterAction/CounterReducer'
import cardItem from "../../Redux1/Services/Reducer/reducer";
const reducers =  combineReducers({
    allProducts: productReducer,
    product:selectedProductReducer,
    abc: inc_dec,
    cardItem,
    addcart:addReducer,
});
export default reducers;