import eventSpy from './event-spy';

let tpl = Template.keyupSpy;

tpl.events( {
  'keyup' ( event, instance ) {
    eventSpy( event, instance.data );
  }
} );
