let tpl = Template.navListItem;

tpl.onCreated ( function () {

} );

tpl.helpers ( {
  getClass () {
    let classes = ['c-nav-list__item'];
    this.isRoot ? classes.push('c-nav-list__item--root') : classes.push('c-nav-list__item--nested');
    return classes.join(' ');
  }
} );
tpl.events ( { } );
