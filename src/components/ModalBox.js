import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

export default class ModalBox extends Component {

	constructor(props) {
		super(props);
		this._onSaveClick = this._onSaveClick.bind(this);
		this._onChange = this._onChange.bind(this);
		this._onClose = this._onClose.bind(this);
		this.state = {
			itemQuantityValue: props.itemToEdit.get('p_quantity')
		}
	}


  /*getInitialState() {
    return {
    	editItem: false,
    	updateValue: ''
    }
  }*/

  _onClose() {
  	this.props.editItem(false) ;
  }
/*
  open() {
    this.setState({ editItem: true });
  },*/

  _onChange(e) {
  	this.setState({itemQuantityValue: e.target.value});
  }

  _onSaveClick (e) {
  	this.props.updateItem(this.props.itemToEdit.get('p_id'), this.state.itemQuantityValue);
  	this._onClose();
  }



  render() {
  	console.log();
    return (
        <Modal show={this.props.editItem} onHide={this._onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="model-left">
              <p className="product-name">{this.props.itemToEdit.get("p_name")}</p>
              <p>{this.props.itemToEdit.get("p_price")}</p>
              <input name='updatedValue' type='text' value={this.state.itemQuantityValue} onChange={this._onChange} />
            </div>
            <div className="model-right">
                <img src={"../images/" + this.props.itemToEdit.get('p_img') + ".jpg"} alt=""/>
            </div>
            <div className="clear"></div>
          </Modal.Body>
          <Modal.Footer>
          	<Button onClick={this._onSaveClick}>Save</Button>
            <Button onClick={this._onClose}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}
