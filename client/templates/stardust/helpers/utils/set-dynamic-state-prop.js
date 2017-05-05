import setDescendantProp from '../../utils/set-descendant-prop.js';

function setDynamicStateProp( state, path, value ) {
  let parts = path.split( '.' );

  if( state && parts[0] ) {
    let firstPart = parts[0];
    if( parts.length > 1 ) parts.splice( 0, parts.length - 1 );

    let dynamicProp = state.get( firstPart );
    if ( _.isObject( dynamicProp ) || _.isUndefined( dynamicProp ) && parts.length ) {
      dynamicProp = dynamicProp || {};
      let newValue = setDescendantProp( dynamicProp, parts.join('.'), value );
      state.set( firstPart, newValue );
    } else {
      state.set( firstPart, value );
    }

    return state;
  }
}

module.exports = setDynamicStateProp;
