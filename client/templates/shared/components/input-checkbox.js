let tpl = Template.inputCheckbox;

tpl.helpers ( {
  isChecked () {
    if ( this.isChecked ) return 'checked';
  }
} );

tpl.events ( {
  change ( { target }, instance ) {
    if ( this.context && this.methodName )
      this.context[ this.methodName ]( target.checked );
  }
} );
