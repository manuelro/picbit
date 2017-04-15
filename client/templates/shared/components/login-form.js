let tpl = Template.loginForm;

let instance;

function unsetError () {
  if ( instance.state.get('error') )
    instance.state.set( 'error', null );
}

function signup () {
  function callback( err ) {
    if ( err ) return instance.state.set( 'error', err );
    unsetError();
    Router.go( 'home' );
  }

  Accounts.createUser( this, callback );
}

function login () {
  function callback ( err ) {
    if ( err ) return instance.state.set( 'error', err );
    unsetError();
    Router.go( 'home' );
  }

  Meteor.loginWithPassword( this.email, this.password, callback );
}

function verifyInput ( info, cb ) {
  if ( info.email && info.email.length && info.password && info.password.length )
    cb();
  else
    instance.state.set( 'error', { reason: 'Email address and password are required.' } );
}

tpl.onCreated ( function () {
  this.state = new ReactiveDict();
  instance = this;
} );

tpl.helpers ( {
  context () {
    function setEmail ( value ) {
      instance.state.set( 'email', value );
      unsetError();
    }

    function setPassword ( value ) {
      instance.state.set( 'password', value );
      unsetError();
    }

    return { setEmail, setPassword }
  },
  inputAttrs () {
    return {
      required: 'required',
      autocomplete: 'off'
    }
  }
} );

tpl.events ( {
  'submit' ( event ) {
    event.preventDefault();
    let info = {};
    info.email = instance.state.get( 'email' );
    info.password = instance.state.get( 'password' );

    let callback = instance.state.get( 'isNewAccount' ) ? signup : login;

    verifyInput( info, callback.bind( info ) );
  },
  'click .e-logout' () {
    console.log( Meteor.logout() );
  }
} );
