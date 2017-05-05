import eventSpy from './event-spy';

let tpl = Template.clickSpy;

tpl.events( {
  'click' ( event, instance ) {
    eventSpy( event, instance.data );
  }
} );
