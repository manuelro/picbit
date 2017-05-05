Stardust = {};

Stardust.pipes = {};

Stardust.pipe = function( data, pipesToUse ){
  this.data = data;
  this.pipesToUse = pipesToUse.split('|').reverse();

  this.next = ( value ) => {
    let currentPipe = this.pipesToUse.pop();
    if( currentPipe
      && Stardust.pipes[ currentPipe ]
      && typeof Stardust.pipes[ currentPipe ] === 'function' ) {
        return Stardust.pipes[ currentPipe ].call( this, value );
      } else {
        return value;
      }
  }

  return this.next();
}

module.exports.Stardust = Stardust;
