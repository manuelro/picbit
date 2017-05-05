function contextualize( generatedMethodName, firstArgument, methodsContext, state ) {
  let result = {};

  result[ generatedMethodName ] = function ( secondArgument ) {
    methodsContext[ generatedMethodName ]( firstArgument, secondArgument, state );
  }

  return result;
}

module.exports = contextualize;
