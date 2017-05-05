function constructTemplateName ( ...parts ) {
  parts.pop();

  for ( let index of parts.keys() ) {
    let part = parts [ index ];
    if( part && typeof part === 'string' ) {
      if ( index === 0 )
        parts[ index ] = [ part.charAt( 0 ).toLowerCase(), part.slice( 1 ) ].join('');
      else
        parts[ index ] = [ part.charAt( 0 ).toUpperCase(), part.slice( 1 ) ].join('');
    }
  }

  return parts.join( '' );
}

module.exports = constructTemplateName;
