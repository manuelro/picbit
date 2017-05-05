import diverger from './diverger.js';

import { assert } from 'meteor/practicalmeteor:chai';

describe( 'Stardust:', function () {

  describe( 'Utils:', function () {

    describe( 'diverger', function () {

      let data;
      beforeEach( function(){
        data = {
          data: { type: 'test' },
          prefixToAdd: 'some',
          propToUse: 'type',
          suffixToAdd: 'diverger',
        }
      } );

      it( 'should diverge based uppon passed data', function () {

        let actual = diverger(data);
        let expected = 'someTestDiverger';

        assert.equal( actual, expected );

      } );

      it( 'should diverge based uppon passed data (no prefix)', function () {

        data.prefixToAdd = null;
        let actual = diverger(data);
        let expected = 'testDiverger';

        assert.equal( actual, expected );

      } );

      it( 'should diverge based uppon passed data (no suffix)', function () {

        data.suffixToAdd = null;
        let actual = diverger(data);
        let expected = 'someTest';

        assert.equal( actual, expected );

      } );

    } );

  } );

} );
