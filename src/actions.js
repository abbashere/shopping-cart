const uid = () => Math.random().toString(34).slice(2);

export function updateItem(numberOfitem, id){
  return {
    type: 'ITEM_INCREMENT',
    numberOfitem,
    id
  };
}

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
      text: text
    }
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  };
}
