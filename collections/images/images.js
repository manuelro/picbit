import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

const Images = new Mongo.Collection('images');

Image = Class.create({
  name: 'Image',
  collection: Images,
  typeField: 'type',
  fields: {
    name: { type: String, optional: true, index: 'text' },
    description: { type: String, optional: true },
    tags: { type: Object, default: () => [] },
    public_id: { type: String },
    url: { type: String },
    format: { type: String },
    width: { type: Number },
    height: { type: Number },
  },
  meteorMethods: {
    setName ( name ) {
      this.name = name;
      return this.save();
    },
    setDescription ( description ) {
      this.description = description;
      return this.save();
    },
    addTag ( tag ) {
      this.tags.push( tag );
      return this.save();
    },
    removeTag ( index ) {},
    update ( data ) {
      Object.assign( this, data );
      return this.save();
    },
    drop () {
      return this.remove();
    }
  }
});

module.exports = { Image }
