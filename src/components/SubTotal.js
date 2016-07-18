import React, { Component, PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';

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
					<p className="text-span">Call Customer Service at 1800-555-5555</p>
					<p className="text-span underline"><a href="#">Chat one of our stylist</a></p>
					<p className="text-span underline"><a href="#">See return and Excahange policy</a></p>
				</div>
				<div className="subtotal-right">
					<div className="button-section">
						<label className="offer-text">ENTER PROMOTION CARD OR GIFT CARD</label>
						<div className="offer-section">
							<input ref="offer" type="text" />
							<Button onClick={this._handelChange}> APPLY </Button>
						</div>
						<div className="clear"></div>
					</div>
						<ul>
							<li className="subtotal-sections"><span className="text">SUBTOTAL</span><span className="value"> {props.nonDiscountedTotal}</span></li>
							<li className="subtotal-sections"><span className="text">PROMOTION CODE JF10 APPLIED</span> <span className="value">{props.discountValue}</span></li>
							<li className="subtotal-sections">
								<span className="text">ESTIMITAED SHIPPING*<br/><span className="text-span">You qualify for free shipping</span></span>
								<span className="value">Free</span>
							</li>
							<li className="subtotal-sections main-subtotal">
								<span className="text">ESTIMITAED TOTAL*<br/><span className="text-span">Tax will apply during checkout</span></span>
								<span className="value">{props.totalValue}</span>
							</li>
						</ul>
				</div>
				<div className="clear"></div>
			</div>
		)
	}
}
