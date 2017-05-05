import picker from '../../utils/picker';

let tpl = Template.docResolver;

let data;
let entity;
let subscription;
let bag = {};

tpl.onCreated ( function () {
  data = this.data;

  entity = window[ data.entityName ];
  if ( this.data.carry ) bag = picker( this.data, this.data.carry );

  Tracker.autorun( () => {
    subscription = this.subscribe( data.subscriptionName );
  } );
} );

tpl.helpers ( {
  getContext () {
    let context = { bag };
    if ( data.entityId ) {
      context.data = entity.findOne( data.entityId );
    } else {
      context.data = entity.find();
    }

    return context;
  }
} );
