Meteor.publish( 'images', function( filters ){
  if ( !filters ) filters = {};
  return Image.find( filters );
} );
