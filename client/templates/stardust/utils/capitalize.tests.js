import capitalize from './capitalize.js';
import { assert } from 'meteor/practicalmeteor:chai';

describe( 'Stardust:', function () {

  describe( 'Utils:', function () {

    describe( 'capitalize', function () {

      it( 'should capitalize the first letter of a word', function () {

        let actual = capitalize('stardust');
        let expected = 'Stardust';

        assert.equal( actual, expected );

      } );

      it( 'should return when an empty string is passed', function () {

        let actual = capitalize();
        let expected = null;

        assert.equal( actual, expected );

      } );

    } );

  } );

} );
