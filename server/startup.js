import http from 'http';

Meteor.startup(() => {
  Cloudinary.config(Meteor.settings.cloudinary);
});
