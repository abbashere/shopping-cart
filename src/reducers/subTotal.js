import Immutable, { Map } from 'immutable';

const subTotalData = Immutable.fromJS({
	offerCode: "",
	listOfOffer: {'GET5': 5, 'JF10': 10},
	OfferApplied: false
});

const subTotal = (state = subTotalData, action) => {
	console.log("state.subTotalData "+state.subTotalData);
	switch(action.type){
		case 'ADD_OFFER':
			return state.set('offerCode', action.offerCode);
		default:
			return state;
	}

};
export default subTotal;
