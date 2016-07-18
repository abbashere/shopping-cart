import React, { Component } from 'react';
import CartItem from './CartItem';

export default class CartList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var props = this.props;
    console.log(this.props.itemsList);
    const ListItemsJSX = this.props.itemsList.map(item => {
      console.log("item.p_id" + item);
      return (<CartItem
        key={item.get('p_id')}
        updateItem={props.updateItem}
        editItem={props.editItem}
        item={item} />);
    });
    return  (
      <div>
        {ListItemsJSX}
      </div>
    );
  }
}
