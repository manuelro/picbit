let tpl = Template.creatorMiddleware;

tpl.helpers( {
  getContext() {
    let instance = Template.instance();

    function create( paramsToPass ) {
      Meteor.call( instance.data.meteorMethodName, paramsToPass, ( err, res ) => {
        if( err ) return instance.state.set( 'error', err );
        if( instance.data.routeToRedirect ) Router.go( instance.data.routeToRedirect, { id: res } );
      } );
    }

    return { instance, create }
  }
} );
