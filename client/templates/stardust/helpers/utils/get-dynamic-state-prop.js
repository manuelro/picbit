import getDescendantProp from '../../utils/get-descendant-prop';

function getDynamicStateProp( state, path ) {
  let parts = path.split( '.' );

  if( state && parts[0] ) {
    let firstPart = parts[0];
    let dynamicProp = state.get( firstPart );

    if( parts.length > 1 ) {
      parts.splice( 0, parts.length - 1 );
    } else {
      return dynamicProp;
    }

    if ( _.isObject( dynamicProp ) ) {
      return getDescendantProp( dynamicProp, parts.join('.') );
    } else {
      return dynamicProp;
    }
  }
}

module.exports = getDynamicStateProp;
