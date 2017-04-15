import { Image } from '../';

ParentedImage = Image.inherit({
  name: 'ParentedImage',
  fields: {
    userId: { type: String },
    isPrivate: { type: Boolean, optional: true }
  },
  meteorMethods: {
    update ( image ) {
      for ( let prop in image ) this[ prop ] = image[ prop ];
      return this.save();
    }
  }
});

module.exports = { ParentedImage }
