import eventSpy from './event-spy';

let tpl = Template.changeSpy;

tpl.events( {
  'change' ( event, instance ) {
    eventSpy( event, instance.data );
  }
} );
