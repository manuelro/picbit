import { Stardust } from '../../stardust.js';

function jqueryElementPipe( value ) {
  return this.next( $(this.data.target).val() );
}

Stardust.pipes.jqueryElementPipe = jqueryElementPipe;

module.exports = jqueryElementPipe;
