let tpl = Template.inputText;

function invokeMethod ( value ) {
  if ( this.data.context && this.data.methodName )
    this.data.context[ this.data.methodName ]( value );
}

tpl.onCreated ( function () {
  invokeMethod.call( this, this.data.value );
} );

tpl.events ( {
  'keyup' ( { target }, instance ) {
    invokeMethod.call( instance, target.value );
  }
} );
