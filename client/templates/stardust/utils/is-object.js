function isObject( obj ) {
  return ( Object.prototype.toString.call(obj) === '[object Object]' && !!obj );
}

module.exports = isObject;
