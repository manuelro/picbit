Accounts.onCreateUser( function ( options, user ) {
  user.profile = {};
  return user;
} );
