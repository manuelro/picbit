function picker ( object, props, shouldSimplify ) {
  if( !props ) return {};

  let propsArray = props.split(',');
  let result = {};

  for(item of propsArray) {
    if( object[item] ) result[item] = object[item];
  }

  if( shouldSimplify ) {
    if( Object.keys( result ).length ) {
      let propName = Object.keys( result )[0];
      let propValue = result[ propName ];
      result = propValue;
    } else {
      result = undefined;
    }
  }

  return result;
}

module.exports = picker;
