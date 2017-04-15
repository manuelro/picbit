import { Meteor } from 'meteor/meteor';
import { ParentlessImage } from './';

Meteor.methods({
  'parentlessImages.insert'( parentlessImage ){
    let newParentlessImage = new ParentlessImage( parentlessImage );
    return newParentlessImage.save();
  },
});
