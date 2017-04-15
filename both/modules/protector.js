function protector(params){
  if (!this.userId || this.userId !== params.userId) throw new Meteor.Error('not-authorized');
}

module.exports = { protector }
