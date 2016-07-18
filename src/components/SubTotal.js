import React, { Component, PropTypes } from 'react';

export default class SubTotal extends Component {

	constructor(props){
		super(props);
		this._handelChange = this._handelChange.bind(this);
	}

	_handelChange (e){
			e.preventDefault();
			this.props.applyOffer(this.refs.offer.value);
	}

	render(){
		var props = this.props;
		return (
			<div className="subtotal">
				<div className="subtotal-left">
					<p>Need Help Or Any Question?</p>
				</div>
				<div className="subtotal-right">
					<div className="button-section">
						<label>ENTER PROMOTION CARD OR GIFT CARD</label>
						<div>
							<input ref="offer" type="text" />
							<a href="#" onClick={this._handelChange} > Add offer </a>
						</div>
					</div>

					<div className="subtotal-section"><span>SUBTOTAL  {props.totalValue} </span></div>
					<div className="subtotal-promotion"><span>PROMOTION CODE JF10 APPLIED  {props.discountValue} </span></div>
				</div>
				<div className="clear"></div>
			</div>
		)
	}
}
