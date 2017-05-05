let tpl = Template.editorMiddleware;

tpl.helpers( {
  getContext() {
    let instance = Template.instance();

    function edit( paramsToPass ) {
      if( this.instance.data.data && this.instance.data.data.callMethod ) {
        this.instance.state.set( 'saving', true );
        this.instance.data.data.callMethod( 'update', paramsToPass, ( err, res ) => {
          this.instance.state.set( 'saving', false );
          if( err ) return this.instance.state.set( 'error', err );
        } );
      }
    }

    return { instance, edit }
  }
} );
