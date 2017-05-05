import getDescendantProp from './get-descendant-prop.js';
import { assert } from 'meteor/practicalmeteor:chai';

describe( 'Stardust:', function () {

  describe( 'Utils:', function () {

    describe( 'getDescendantProp', function () {

      let obj;
      beforeEach( function() {
        obj = { person: { name: 'John' }, address: { street: 'San Jose' } };
      } );

      it( 'should access an object property using dot notation (first level)', function () {
        let actual = getDescendantProp(obj, 'person');
        let expected = obj.person;

        assert.equal( actual, expected );
      } );

      it( 'should access an object property using dot notation (second level)', function () {
        let actual = getDescendantProp(obj, 'person.name');
        let expected = obj.person.name;

        assert.equal( actual, expected );
      } );

      it( 'should access an object property using dot notation (third level)', function () {
        let actual = getDescendantProp(obj, 'person.address.street');
        let expected = obj.person.address.street;

        assert.equal( actual, expected );
      } );

      it( 'should return the object if no levels are provided', function () {
        let actual = getDescendantProp(obj);
        let expected = obj;

        assert.equal( actual, expected );
      } );

    } );

  } );

} );
