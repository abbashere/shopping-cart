import { connect } from 'react-redux';
import CartList from '../components/CartList';
import { updateItem, setEditItemAction } from '../actions/actions.js';

const CartListContainer = connect(

  function mapStateToProps(state) {
    return { itemsList: state.cart.get('productsInCart') };
  },

  function mapDispatchToProps(dispatch) {
    return {
    	updateItem: (numberOfItem, id ) => { // need to pass it to child for callback
    		dispatch(updateItem(numberOfItem, id));
    	},
      editItem: (enable, itemId) => {
        console.log('enable, itemId ');
        console.log(enable, itemId);
        dispatch(setEditItemAction(enable, itemId))
      }
    };
  }
)(CartList);

export default CartListContainer;
