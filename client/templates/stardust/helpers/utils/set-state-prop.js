import setDynamicStateProp from './set-dynamic-state-prop';

function setStateProp ( path, value, state ) {
  state = state || this.state;
  if( state instanceof ReactiveDict ) return setDynamicStateProp( state, path, value );
}

module.exports = setStateProp;
