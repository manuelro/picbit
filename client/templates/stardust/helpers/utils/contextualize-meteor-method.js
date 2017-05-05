function contextualizeMeteorMethod( meteorMethodName, methodToCall ) {
  let result = {};

  result[ meteorMethodName ] = function functionName( valueToPass ) {
    Meteor[ meteorMethodName ]( methodToCall, valueToPass );
  }

  return result;
}

module.exports = contextualizeMeteorMethod;
