import picker from '../../utils/picker.js';
import { Stardust } from '../../stardust.js';

function eventSpy ( event, data ) {
  if( data.targetId ) {
    if( !$( event.target ).is( '#'+data.targetId ) ) return;
  }

  if( data.targetClass ) {
    if( !$( event.target ).hasClass( data.targetClass ) ) return;
  }

  if( data.stopPropagation ) {
    event.stopPropagation();
  }

  if( data.preventDefault ) {
    event.preventDefault();
  }

  let paramsToPass;

  if( data.dataToPass ){
    paramsToPass = data.dataToPass;
  } else {
    if( data.pipesToUse ) {
      paramsToPass = Stardust.pipe( event, data.pipesToUse );
    } else {
      paramsToPass = picker( event.target, data.paramsToPass, true );
    }
  }

  let methodsToCall = data.methodsToCall.split(',');

  for (let item of methodsToCall) {
    if ( data.methodsContext[ item ]
      && typeof data.methodsContext[ item ] === 'function' ) {
      data.methodsContext[ item ]( paramsToPass );
    }
  }
}

module.exports = eventSpy;
