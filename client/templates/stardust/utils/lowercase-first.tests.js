import lowercaseFirst from './lowercase-first.js';
import { assert } from 'meteor/practicalmeteor:chai';

describe( 'Stardust:', function () {

  describe( 'Utils:', function () {

    describe( 'lowercaseFirst', function () {

      it( 'should lowercaseFirst the first letter of a word', function () {

        let actual = lowercaseFirst('Stardust');
        let expected = 'stardust';

        assert.equal( actual, expected );

      } );

      it( 'should return when an empty string is passed', function () {

        let actual = lowercaseFirst();
        let expected = null;

        assert.equal( actual, expected );

      } );

    } );

  } );

} );
