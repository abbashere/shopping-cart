import { combineReducers } from 'redux';
import cart from './cart';
import subTotal from './subTotal';

export default combineReducers({
	cart,
	subTotal
});
