import { assert } from 'meteor/practicalmeteor:chai';
import getDynamicStateProp from './get-dynamic-state-prop.js';
import { ReactiveDict } from 'meteor/reactive-dict';

describe('Stardust: Helpers: Utils', function() {

  describe( 'getDynamicStateProp', function () {

    let obj;
    let state;
    let path;
    beforeEach( function() {
      obj = { name: 'John', address: { street: 'San Jose' } };
      state = new ReactiveDict();
      state.set( 'person', obj );
      paths = {
        firstLevel: 'person.name',
        secondLevel: 'person.address.street',
      }
    } );

    it( 'should obtain a property by using a path (one level)', function () {
      let actual = getDynamicStateProp( state, paths.firstLevel );
      let expected = obj.name;

      assert.equal( actual, expected );
    } );

    it( 'should obtain a property by using a path (two levels)', function () {
      let actual = getDynamicStateProp( state, paths.secondLevel );
      let expected = obj.address.street;

      assert.equal( actual, expected );
    } );

  } );


});
