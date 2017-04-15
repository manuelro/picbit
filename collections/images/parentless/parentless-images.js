import { Image } from '../';

ParentlessImage = Image.inherit({
  name: 'ParentlessImage',
  fields: {
    edited: { type: Boolean, default: false }
  }
});

module.exports = { ParentlessImage }
