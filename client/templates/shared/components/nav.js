let items = [
  { text: 'Home', isRoot: true, route: 'home', name: 'home', auth: false },
  { text: 'Latest', isRoot: true, route: 'latest', name: 'latest', auth: false },
  { text: 'Dashboard', isRoot: true, route: 'auth.dashboard', name: 'dashboard', auth: true },
  { text: 'Account', isRoot: true, route: 'auth.account', name: 'account', auth: true },
  { text: 'Images', isRoot: true, route: 'auth.image', name: 'images', auth: false,
    children: [
      { text: 'Upload', route: 'auth.image.add', name: 'images', auth: false }
    ]
  },
  { text: 'Groups', isRoot: true, route: 'auth.group', name: 'groups', auth: true,
    children: [
      { text: 'Add', route: 'auth.group.add', name: 'group' }
    ]
  },
  { text: 'Apis', isRoot: true, route: 'auth.api', name: 'apis', auth: true,
    children: [
      { text: 'Add', route: 'auth.api.add', name: 'api' }
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
