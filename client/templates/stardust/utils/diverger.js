import capitalize from './capitalize.js';
import lowercaseFirst from './lowercase-first.js';

function diverger( data ) {
  let prefixToAdd = data.prefixToAdd || '';
  let propToUse = data.propToUse || '';
  let dataToDiverge = data.data || {};
  let propFromData = dataToDiverge[ propToUse ] || '';
  let suffixToAdd = data.suffixToAdd || '';

  let partsArray = [];

  if( prefixToAdd.length ) prefixToAdd = lowercaseFirst( prefixToAdd );

  propFromData = prefixToAdd.length
    ? capitalize( propFromData ) : lowercaseFirst( propFromData );

  if( suffixToAdd.length ) suffixToAdd = capitalize( suffixToAdd );

  return [ prefixToAdd, propFromData, suffixToAdd ].join('');
}

module.exports = diverger;
