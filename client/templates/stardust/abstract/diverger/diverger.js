import diverger from '../../utils/diverger.js';

let tpl = Template.tplDiverger;

tpl.helpers( {
  constructTemplateName( data ) {
    return diverger( data );
  }
} );
