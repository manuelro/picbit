let tpl = Template.typeSplitter;

tpl.onCreated ( function () {
  
} );

tpl.helpers ( {
  getTemplateName () {
    let instance = Template.instance();
    if ( instance.data.templateName && instance.data.templateName.length ) {
      return instance.data.templateName;
    } else {
      if ( instance.data.entity && instance.data.entity.type )
        return [ instance.data.prefix, instance.data.entity.type ].join('');
    }
  },
  getBag () {
    let instance = Template.instance();
    if( instance.data.carry ) {
      let carryArray = instance.data.carry.split(',');
      let carryObject = {};

      for (carry of carryArray) {
        carryObject[carry] = instance.data[carry];
      }

      return carryObject;
    }
  }
} );

tpl.events ( {} );
