import React, { Component } from 'react';
import CartListContainer from '../containers/CartListContainer';
import SubTotalContainer from '../containers/SubTotalContainer';
import ModalContainer from '../containers/ModalContainer';


 const AppWrapper = (props) => {
  console.log('props.editItem ' + props.editItem);
  return (
    <div className="container">
     <div className="top-header">
        <h4>YOUR SHOPPING BAG</h4>
      </div>
       <div className="header">
        <div className="items">
          3 Items
        </div>
        <div className="size">
          Size
        </div>
        <div className="qty">
          Qty
        </div>
        <div className="price">
          Price
        </div>
        <div className="clear"></div>
      </div>
      <CartListContainer />
      <SubTotalContainer />
      {props.editItem && (<ModalContainer />)}
    </div>
  );
};

export  default AppWrapper;
