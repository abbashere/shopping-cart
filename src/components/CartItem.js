import React, { Component, PropTypes } from 'react'

export default class CartItem extends Component {
  static propTypes = {
    item: PropTypes.object
  };

  constructor(props) {
    super(props);
    this._handelChange =  this._handelChange.bind(this);
    this._onEditClick = this._onEditClick.bind(this);
    this.state = {numOfItem:1};
  }

  _handelChange (e){
    this.props.updateItem(e.target.value, this.props.item.get('p_id'));
  }

  _onEditClick (){
    this.props.editItem(true, this.props.item.get('p_id'));
    // callback for popup
  }

  render() {
    const item = this.props.item;
    return(
        <div>
          <div className="content-section">
          <div className="item-section default-border-bottom">
            <div className="left-section" >
              <img src="../images/T1.jpg" alt=""/>
            </div>
            <div className="right-top">
              <div className="section product-description margin-right275">
                <h4 className="product-description-text">{item.get('p_name')}</h4>
                <p className="product-description-text">Style #: {item.get('p_style')}</p>
                <p className="product-description-text">Color: {item.get('p_variation')}</p>
              </div>
              <div className="section margin-right30">
                <span className="product-description-text size-text">Size:</span> S
              </div>
              <div className="section margin-right30">
                <label className="label-qty">QTY: </label>
                <input type="text" value={item.get('p_quantity')} onChange={this._handelChange} />
              </div>
              <div className="section price">
                {item.get('p_price')}
              </div>
            </div>
            <div className="right-bottom">
              <p className="action"><a href="#" onClick={this._onEditClick}>Edit</a><span className="pipe">|</span><a href="#">X Remove</a><span className="pipe">|</span><a href="#">Save for later Use</a></p>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}




