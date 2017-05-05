function resolver () {
  let Entity;
  let subscription = new ReactiveVar();

  function global ( namespace ) {
    return window[ namespace ];
  }

  function init ( entityName, subscriptionName ) {
    Tracker.autorun( () => {
      subscription = Meteor.subscribe( subscriptionName );
    } );
    Entity = global ( entityName );
  }

  function yield ( result ) {
    return {
      subscription: subscription,
      entity: result,
    }
  }

  function one ( id, entityName, subscriptionName ) {
    init( entityName, subscriptionName );
    return yield ( Entity.findOne( id ) );
  }

  function many ( entityName, subscriptionName ) {
    init( entityName, subscriptionName );
    return yield ( Entity.find() );
  }

  return { global, one, many }
}

module.exports = resolver;
