function setState ( shouldReturn ) {
  if( !this.state && ReactiveDict ) this.state = new ReactiveDict();
  if( shouldReturn ) return this.state;
}

module.exports = setState;
