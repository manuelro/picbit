import getDynamicStateProp from './get-dynamic-state-prop.js';

function getStateProp ( path, state ) {
  state = state || this.state;
  if( state instanceof ReactiveDict ) return getDynamicStateProp( state, path );
}

module.exports = getStateProp;
