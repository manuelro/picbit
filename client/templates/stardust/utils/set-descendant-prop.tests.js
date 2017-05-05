import setDescendantProp from './set-descendant-prop.js';
import { assert } from 'meteor/practicalmeteor:chai';

describe( 'Stardust:', function () {

  describe( 'Utils:', function () {

    describe( 'setDescendantProp', function () {

      let obj;
      beforeEach( function() {
        obj = {};
      } );

      it( 'should set a property using dot notation', function () {
        let actual = setDescendantProp(obj, 'person');
        assert.property( actual, 'person' );
      } );

      it( 'should set a property using dot notation (two levels)', function () {
        let actual = setDescendantProp(obj, 'person.name');

        assert.property( actual, 'person' );
        assert.property( actual.person, 'name' );
      } );

    } );

  } );

} );
