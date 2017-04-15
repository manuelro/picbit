let tpl = Template.navList;

tpl.onCreated ( function () {

} );

tpl.helpers ( {
  getClass () {
    let classes = ['c-nav-list'];
    this.isRoot === "true" ? classes.push('c-nav-list--root') : classes.push('c-nav-list--nested');
    return classes.join(' ');
  },
  isRoot () {
    return this.isRoot === "true";
  }
} );
tpl.events ( { } );
