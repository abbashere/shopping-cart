import { connect } from 'react-redux';
import ModalBox from '../components/ModalBox';
import { updateItem, setEditItemAction } from '../actions/actions.js';

const ModalContainer = connect(

  function mapStateToProps(state) {

  	var itemToEdit = state.cart.get('productsInCart').find(item => {
  		console.log("item.get('p_id') " + item.get('p_id'));
  		console.log("state.cart.get('itemId') " + state.cart.get('itemId'));
  		return item.get('p_id') === state.cart.get('itemId');
  	});
  	console.log(state.cart.get('itemId'));
  	console.log(itemToEdit);
    return { itemToEdit: itemToEdit, editItem:  state.cart.get('editItem') }; // (item to show in popup, true)
  },

  function mapDispatchToProps(dispatch) {
    return {
    	updateItem: (itemId, numberOfItem) => {
    		 dispatch(updateItem(numberOfItem, itemId));
    	},
    	editItem: (enable) => dispatch(setEditItemAction(enable))
    };
  }
)(ModalBox);

export default ModalContainer;
