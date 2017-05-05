Meteor.publish( 'images.all', function( filters ){
  if ( !filters ) filters = {};
  return Image.find( filters );
} );

Meteor.publish( 'images.mixed', function( filters ){
  if ( !filters ) filters = {};
  return Image.find( filters );
} );

Meteor.publish( 'images.parented', function( filters ){
  if ( !filters ) filters = {};
  return Image.find( filters );
} );

Meteor.publish( 'images.latest', function( filters ){
  if ( !filters ) filters = {};
  return Image.find( filters );
} );
