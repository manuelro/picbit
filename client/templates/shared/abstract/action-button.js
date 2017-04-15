let tpl = Template.actionButton;

function invokeMethod() {
  if( this.data.useParams ) {
    if ( this.data.pick )
      this.data.context[ this.data.methodName ]( this.data.params[ this.data.pick ] );
    else
      this.data.context[ this.data.methodName ]( this.data.params );
  } else {
      this.data.context[ this.data.methodName ]();
  }
}

tpl.events ( {
  'click' ( event, instance ) {
    invokeMethod.call( instance );
  }
} );
