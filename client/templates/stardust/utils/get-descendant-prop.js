const getDescendantProp = ( obj, path ) => {
  if( path )
    return path.split('.').reduce( ( acc, part ) => acc && acc[ part ], obj );
  else
    return obj;
}

module.exports = getDescendantProp;
