function belongsTo ( data ) {
  if( data && data.userId === Meteor.userId() ) return true;
}

module.exports = belongsTo;
