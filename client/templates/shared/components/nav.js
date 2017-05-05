let items = [
  { text: 'Home', isRoot: true, route: 'home', name: 'home', auth: false },
  { text: 'Latest', isRoot: true, route: 'latest', name: 'latest', auth: false },
  { text: 'Account', isRoot: true, route: 'auth.account', name: 'account', auth: true },
  { text: 'Images', isRoot: true, route: 'auth.image', name: 'images', auth: false,
    children: [
      { text: 'Upload', route: 'auth.image.add', name: 'images', auth: false }
    ]
  },
];

let tpl = Template.nav;

tpl.onCreated ( function () {
  this.state = new ReactiveDict();
} );

tpl.helpers ( {
  getItems () {
    return items;
  }
} );

tpl.events ( {
  'click .c-nav-link' ( event, instance ) {
    instance.state.set( 'isActive', false );
  }
} );
