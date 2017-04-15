import Color from 'color';

function getEnumAsArray (enumObject) {
  let result = [];
  for(let enumItem in enumObject){
    result.push({key: enumItem, value: enumObject[enumItem] });
  }

  return result;
}

Template.registerHelper( 'isActiveLink', (route, classToReturn) => {
  let reg = new RegExp('^/' + route);
  const isActive = reg.test(Iron.Location.get().path);

  if(isActive && classToReturn) {
    return classToReturn;
  } else if(isActive && !classToReturn){
    return true;
  }else {
    return false;
  }

} );

Template.registerHelper( 'instance', function () {
  let instance = Template.instance();
  return instance;
} );

Template.registerHelper( 'compare', function (params) {
  let first = params.hash.first;
  let second = params.hash.second;
  return first === second;
} );

Template.registerHelper( 'getArraySlice', function (params) {
  let array = params.hash.array;
  let start = params.hash.start;
  let end = params.hash.end;

  return array.slice(start, end);
} );

Template.registerHelper( 'getArrayItemByIndex', function ( array, index ) {
  return array[ index ];
} );

Template.registerHelper( 'getArrayItemByReference', function ( referenceArray, sourceArray, stringToMatch ) {
  let indexInReference = referenceArray.indexOf( stringToMatch );
  return sourceArray[ indexInReference ];
} );

Template.registerHelper( 'getParentState', function ( array, index ) {
  let instance = Template.instance();
  return instance.state;
} );

Template.registerHelper( 'getProperty', function ( from, prop ) {
  let context = window[ from ];
  if ( context ) return context[ prop ];
} );

Template.registerHelper( 'color', function ( colorValue, prop, value ) {
  let color = Color( colorValue );
  if (color[ prop ] && color[ prop ]( value )) return color[ prop ]( value ).string();
} );

Template.registerHelper( 'router', function () {
  let route = Router.current();
  return { route }
} );

Template.registerHelper( 'resolver', function () {
  let instance = Template.instance();
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
} );

Template.registerHelper( 'cdy', function () {
  let parts = [
    'http://res.cloudinary.com',
    'dtnfkr6ra',
    'image/upload'
  ]

  let getUrl = function ( publicId, ...params ) {
    let paramsArray = [];

    function concatParams () {
      let props = params[0].hash;
      let propArray = [];

      for (let prop in props) {
        paramsArray.push( [prop, props[prop]].join( '_' ) );
      }
    }

    concatParams();

    parts.push(paramsArray.join( ',' ));
    parts.push( [ publicId, 'jpg' ].join( '.' ) );

    return parts.join('/');
  }


  return { getUrl }
} );

Template.registerHelper( 'pipe', function ( pipe ) {
  function capitalize ( text ) {
    return text.toUpperCase();
  }

  return { capitalize }
} );

Template.registerHelper( 'not', function ( value ) {
  return !value;
} );

Template.registerHelper( 'and', function ( ...values ) {
  console.log( values );
} );

Template.registerHelper( 'conditional', function ( condition, payload ) {
  if ( condition ) return payload;
} );

Template.registerHelper( 'log', function ( value ) {
  console.log( value );
} );

Template.registerHelper( 'ref', function ( name ) {
  return window[ name ];
} );

Template.registerHelper( 'addState', function () {
  let instance = Template.instance();
  if ( !instance.state ) instance.state = new ReactiveDict();
} );

Template.registerHelper( 'getStatePropContext', function ( state, propName ) {
  function setStateProp ( value ) {
    state.set( propName, value );
  }
  return { setStateProp }
} );

Template.registerHelper( 'makeBundle', function ( context, ...props ) {
  props.pop();
  let isReactiveDict = context instanceof ReactiveDict;
  let bundle = {};

  for ( let prop of props ) {
    bundle[ prop ] = isReactiveDict ? context.get( prop ) : params[ prop ];
  }

  return bundle;
} );

Template.registerHelper( 'eval', function () {
  let gt = ( ...values ) => values[0] > values[1];
  let gte = ( ...values ) => values[0] >= values[1];
  let lt = ( ...values ) => values[0] < values[1];
  let lte = ( ...values ) => values[0] <= values[1];
  let eq = ( ...values ) => values[0] == values[1];
  let eqs = ( ...values ) => values[0] === values[1];

  return { gt, gte, lt, lte, eq, eqs }
} );
