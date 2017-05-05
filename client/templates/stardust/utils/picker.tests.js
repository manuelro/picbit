import picker from './picker.js';
import { assert } from 'meteor/practicalmeteor:chai';

describe( 'Stardust:', function () {

  describe( 'Utils:', function () {

    describe( 'picker', function () {

      let obj;
      beforeEach( function () {
        obj = { address: 'Street', name: 'John', lastname: 'Doe' }
      } );

      it( 'should generate an object selecting the properties passed as params', function () {
        let actual = picker(obj, 'name');
        
        assert.property( actual, 'name' );
      } );

      it( 'should generate an object selecting the properties passed as params (two properties)', function () {
        let actual = picker(obj, 'name,address');

        assert.property( actual, 'name' );
        assert.property( actual, 'address' );
      } );

    } );

  } );

} );
