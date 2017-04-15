let tpl = Template.entityResolver;

let data;
let Entity;
let filters;

function pickProps ( pool, pickedString ) {
  if ( !pickedString ) return {};

  let pickedArray = pickedString.split(',');
  let result = {};

  for ( item of pickedArray ) {
    result[item] = pool[item];
  }

  return result;
}

tpl.onCreated ( function () {
  data = this.data;
  Entity = window[ data.entityName ];
  filters = pickProps( data, data.filters );

  Tracker.autorun( () => this.subscribe( data.subscriptionName, filters ) );
} );

tpl.helpers ( {
  getEntity () {
    if ( data.searchTerm && data.searchProperty && data.searchProperty.length ) {
      let needle = data.searchTerm;
      let haystack = data.searchProperty;

      filters[ haystack ] = new RegExp( needle, 'i' );
    }

    if ( data.id || data._id ) {
      return Entity.findOne( data.id );
    } else {
      if ( _.isEmpty(filters) ) {
        return data.many
          ? Entity.find()
          : Entity.findOne();
      } else {
        return data.many
          ? Entity.find( filters )
          : Entity.findOne( filters );
      }
    }
  },
  checkProp ( entity ) {
    return entity[ data.check ];
  },
  getBag () {
    if( data.carry ) return pickProps( data, data.carry );
  }
} );
