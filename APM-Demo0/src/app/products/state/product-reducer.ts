export function productReducer (state, action) {
  switch (action.type) {
    case 'TOGGLE_PRODUCT_SHOW':
          return {
            ... state,
            'product_checked': action.payload
          };
    default:
      return state;
  }
}
