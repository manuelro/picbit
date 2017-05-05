import { assert } from 'meteor/practicalmeteor:chai';
import contextualize from './contextualize.js';

describe('Stardust: Helpers: Utils', function() {

  describe( 'contextualize', function () {

    let context;
    let methodsContext;
    let state;
    beforeEach( function() {
      methodsContext = { theMethodName: () => {} }
      state = {};
      context = contextualize( 'theMethodName', 'theFirstArgument', methodsContext, state );
    } );

    it( 'should produce a method execution with the method name as a property', function () {
      assert.property( context, 'theMethodName' );
    } );

    it( 'should produce a method execution with the method name as a property (is function)', function () {
      assert.isFunction( context.theMethodName );
    } );

  } );


});
