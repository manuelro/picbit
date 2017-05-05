import { assert } from 'meteor/practicalmeteor:chai';
import contextualizeMeteorMethod from './contextualize-meteor-method.js';

describe('Stardust: Helpers: Utils', function() {

  describe( 'contextualizeMeteorMethod', function () {

    let context;
    beforeEach( function() {
      context = contextualizeMeteorMethod( 'call', 'someMethod' );
    } );

    it( 'should produce a method execution context using Meteor global var', function () {
      assert.isObject( context );
    } );

    it( 'should contain a property with Meteor method name', function () {
      assert.property( context, 'call' );
    } );

  } );


});
