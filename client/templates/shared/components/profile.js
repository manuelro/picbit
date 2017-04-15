let tpl = Template.profile;
let user = new ReactiveVar();

tpl.onCreated( function () {
  Tracker.autorun( () => {
    user.set( Meteor.users.findOne( Meteor.userId() ) );
  } );
} );

tpl.helpers ( {
  getEmail () {
    if ( user.get() ) return user.get().emails[ 0 ];
  },
  getProfile () {
    if ( user.get() ) return user.get().profile;
  },
  getAttrs () {
    let email = { disabled: true }
    return { email }
  },
  getPropContext ( propName ) {
    setProfileProperty = ( value ) => {
      if ( user.get() ) {
        let _user = user.get();
        _user.profile[ propName ] = value;
        Meteor.users.update( _user._id, { $set: { profile: _user.profile } } );
      }
    }

    return { setProfileProperty }
  }
} );
