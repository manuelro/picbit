Router.route('/', {
  name: 'home',
  layoutTemplate: 'Layout',
});

Router.route('/latest', {
  name: 'latest',
  layoutTemplate: 'Layout',
});

Router.route('/dashboard', {
  name: 'auth.dashboard',
  layoutTemplate: 'Layout',
});

Router.route('/account', {
  name: 'auth.account',
  layoutTemplate: 'Layout',
});

Router.route('/images', {
  name: 'auth.image',
  layoutTemplate: 'Layout',
});

Router.route('/images/add', {
  name: 'auth.image.add',
  layoutTemplate: 'Layout',
});

Router.route('/images/:id', {
  name: 'auth.image.edit',
  layoutTemplate: 'Layout',
});

Router.route('/groups', {
  name: 'auth.group',
  layoutTemplate: 'Layout',
});

Router.route('/groups/add', {
  name: 'auth.group.add',
  layoutTemplate: 'Layout',
});

Router.route('/groups/:id', {
  name: 'auth.group.edit',
  layoutTemplate: 'Layout',
});

Router.route('/apis', {
  name: 'auth.api',
  layoutTemplate: 'Layout',
});

Router.route('/apis/add', {
  name: 'auth.api.add',
  layoutTemplate: 'Layout',
});

Router.route('/apis/:id', {
  name: 'auth.api.edit',
  layoutTemplate: 'Layout',
});
