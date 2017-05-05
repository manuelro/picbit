import isObject from './is-object';

const setDescendantProp = ( obj, path, value, notation ) => {
  notation = notation || '.';
  let parts = path.split( notation );

  parts.reduce( ( prev, curr, index, array ) => {
    let isLast = ( index === array.length - 1 );
    if( isLast ) return prev[ curr ] = value;

    return isObject( prev[ curr ] ) ? prev[ curr ] : prev[ curr ] = {};
  }, obj );

  return obj;
}

module.exports = setDescendantProp;
