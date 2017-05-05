let tpl = Template.loaderMiddleware;

let subscription;
let entity;
let methodName;
let state = new ReactiveDict();
let data;

tpl.onCreated( function(){
  Tracker.autorun( () => {
    subscription = this.subscribe( this.data.subscriptionName );
  } );

  entity = window[ this.data.entityName ];

  methodName = this.data.methodName || 'find';
} );

tpl.helpers( {
  getContext() {
    let instance = Template.instance();
    return { instance, subscription, state, data: entity[ methodName ]() }
  }
} );
