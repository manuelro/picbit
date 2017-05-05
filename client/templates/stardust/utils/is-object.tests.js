import isObject from './is-object.js';
import { assert } from 'meteor/practicalmeteor:chai';

describe( 'Stardust:', function () {

  describe( 'Utils:', function () {

    describe( 'isObject', function () {

      it( 'should assert if the passed param is an object (with empty object)', function () {

        let actual = isObject( {} );
        let expected = true;

        assert.equal( actual, expected );

      } );

      it( 'should assert if the passed param is an object (with empty array)', function () {

        let actual = isObject( [] );
        let expected = false;

        assert.equal( actual, expected );

      } );

    } );

  } );

} );
