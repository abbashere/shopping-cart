import { connect } from 'react-redux';
import SubTotal from '../components/SubTotal';
import { applyOffer } from '../actions/actions.js';

const SubTotalContainer = connect(

	function mapStateToProps(state){
		let total = 0;
		state.cart.get("productsInCart").map(item => {
			total += item.get('p_price')*item.get('p_quantity');
		});

		var codeList = state.subTotal.get('listOfOffer');
		var discountVal = 0;
		var discount = 0;
		// Need to get exact discount value according to offerCode and set totalValue
		if( codeList.has(state.subTotal.get('offerCode')) ) {
			discountVal = codeList.get(state.subTotal.get('offerCode'));
			discount = total*(discountVal/100);
			total = total - discount;
		}else{
			// Applied False
		}
		console.log("total woith offer applied " +  total);
    return {
    	totalValue: total,
    	discountValue: discount
    };
	},

	function mapDispatchToProps(dispatch){
		return {
			 applyOffer: offerCode => dispatch(applyOffer(offerCode))

		}
	}

)(SubTotal);

export default SubTotalContainer;
