let tpl = Template.checkboxButton;

tpl.onCreated( function () {
} );

tpl.helpers ( {
  isChecked () {
    let instance = Template.instance();
    return instance.data.initialValue ? 'checked' : '';
  }
} );

tpl.events ( {
  'change' ( event, instance ) {
    if ( instance.data.parentState ) {
      instance.data.parentState.set( instance.data.parentStateProperty, event.target.checked );
    }
  }
} )
