import { Stardust } from './stardust.js';
import { assert } from 'meteor/practicalmeteor:chai';

describe( 'Stardust:', function () {
  let instance;
  let pipe;

  beforeEach( function() {
    instance = Stardust;
    pipe = new Stardust.pipe( {}, 'pipe1|pipe2' );
  } );

  describe( 'API', function () {

    describe( 'pipe', function () {

      it('should expose a data object', function () {
        assert.isObject(pipe.data);
      });

      it('should transform the passed pipes string to a array', function () {
        assert.isArray(pipe.pipesToUse);
      });

      it('should already have called the first pipe', function () {
        assert.equal(1, pipe.pipesToUse.length);
      });

      it('should expose a next function', function () {
        assert.isFunction(pipe.next);
      });

    } );

  } );

} );
