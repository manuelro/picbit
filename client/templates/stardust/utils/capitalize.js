function capitalize( string ) {
  if( string && string.length ) {
    let firstLetter = string[0].toUpperCase();
    let rest = '';
    if( string.length > 1 ) rest = string.slice( 1 );
    return `${firstLetter}${rest}`;
  }
}

module.exports = capitalize;
