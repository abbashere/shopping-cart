import Immutable, { Map } from 'immutable';

const dummy = Immutable.fromJS({
  "productsInCart": [{
      "p_id": "1",
      "p_name": "Cotton Tshirt",
      "p_variation": "solid green",
      "p_style": "MS13KT1906",
      "p_img":"T1",
      "p_quantity": "1",
      "p_originalprice": "11.0",
      "p_price": "11.0",
      "c_currency": "$",
      "p_selected_color": {
        "name": "blue",
        "hexcode": "#1169BD"
      },
      "p_selected_size": {
        "name": "small",
        "code": "s"
      },
      "p_available_options": {
        "colors": [{
          "name": "green",
          "hexcode": "#A3D2A1"
        }, {
          "name": "yellow",
          "hexcode": "#F9F8E6"
        }, {
          "name": "red",
          "hexcode": "#ED99A8"
        }],
        "sizes": [{
          "name": "small",
          "code": "s"
        }, {
          "name": "medium",
          "code": "m"
        }, {
          "name": "large",
          "code": "l"
        }, {
          "name": "extra large",
          "code": "xl"
        }]
      }
    },
    {
      "p_id": "2",
      "p_name": "Cotton pant",
      "p_variation": "solid green",
      "p_style": "MS13KT1906",
      "p_img":"T2",
      "p_quantity": "1",
      "p_originalprice": "11.0",
      "p_price": "22.0",
      "c_currency": "$",
      "p_selected_color": {
        "name": "blue",
        "hexcode": "#1169BD"
      },
      "p_selected_size": {
        "name": "small",
        "code": "s"
      },
      "p_available_options": {
        "colors": [{
          "name": "green",
          "hexcode": "#A3D2A1"
        }, {
          "name": "yellow",
          "hexcode": "#F9F8E6"
        }, {
          "name": "red",
          "hexcode": "#ED99A8"
        }],
        "sizes": [{
          "name": "small",
          "code": "s"
        }, {
          "name": "medium",
          "code": "m"
        }, {
          "name": "large",
          "code": "l"
        }, {
          "name": "extra large",
          "code": "xl"
        }]
      }
    }

  ],
  editItem: false,
  itemId: 0
});

 const cart = (state = dummy, action) => {
  let arr = [];
  switch(action.type) {
    case 'ITEM_INCREMENT':
    // need to update immutable state here
    // var result = map.find(function(obj){return obj.get('id') === 4;});
    var productList = state.get('productsInCart');
      productList = productList.update(
        productList.findIndex(function(item) {
          return item.get("p_id") === action.id;
        }), function(item) {
          return item.set("p_quantity", action.numberOfitem);
        }
      );
    return state.set('productsInCart', productList);

    case 'ADD_TODO':
      arr = state.get('productsInCart');
      arr = arr.push(Map(action.payload));
      return state.set('productsInCart', arr);

    case 'TOGGLE_TODO':
      arr = state.get('productsInCart').map(t => {
        if(t.get('id') === action.id) {
          return t.update('isDone', isDone => !isDone);
        } else {
          return t;
        }
      });
      return state.set('productsInCart', arr);
    case 'EDIT_ITEM':
      return state.set('editItem', action.enable).set('itemId', action.id || 0);
    default:
      return state;
  }
};
export default cart;

