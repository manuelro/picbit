import { Meteor } from 'meteor/meteor';
import { ParentedImage } from './';

Meteor.methods({
  'parentedImages.insert'( parentedImage ){
    if ( !parentedImage ) parentedImage = {}
    parentedImage.userId = this.userId;
    
    let newParentedImage = new ParentedImage( parentedImage );
    return newParentedImage.save();
  },
});
