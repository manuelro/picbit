import resolver from './resolver.js';
import setState from './set-state.js';
import getState from './get-state.js';
import setStateProp from './set-state-prop.js';
import getStateProp from './get-state-prop.js';
import contextualize from './contextualize.js';
import contextualizeMeteorMethod from './contextualize-meteor-method.js';
import getInstance from './get-instance.js';
import redirect from './redirect.js';
import belongsTo from './belongs-to.js';

Template.registerHelper( 'stardust', function () {
  let instance = Template.instance();

  return {
    utils: {
      resolver: resolver.bind( instance ),
      setState: setState.bind( instance ),
      getState: getState.bind( instance ),
      setStateProp: setStateProp.bind( instance ),
      getStateProp: getStateProp.bind( instance ),
      contextualize: contextualize,
      contextualizeMeteorMethod: contextualizeMeteorMethod,
      getInstance,
      redirect,
      belongsTo
    }
  }
} );
