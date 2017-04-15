let tpl = Template.navButton;

tpl.onCreated( function () {

} );

tpl.helpers ( {
  getClass () {
    let isActiveLinkHelper = Blaze._globalHelpers['isActiveLink'];
    let classes = ['c-nav-link'];

    this.isRoot ? classes.push('c-nav-link--root') : classes.push('c-nav-link--nested');
    if( isActiveLinkHelper(this.name) ) classes.push('c-nav-link--is-active');

    return classes.join(' ');
  }
} );

tpl.events ( {} );
