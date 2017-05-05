import { _ } from 'meteor/underscore';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import { Tracker } from 'meteor/tracker';

const withDiv = function withDiv(callback) {
  const el = document.createElement('div');
  document.body.appendChild(el);
  try {
    callback(el);
  } finally {
    document.body.removeChild(el);
  }
};

export const withRenderedTemplate = function withRenderedTemplate(template, data, callback) {
  withDiv(( tplElement ) => {
    const  tplContext = _.isString( template ) ? Template[ template ] : template;
    let rendered = Blaze.renderWithData( tplContext, data, tplElement );
    Tracker.flush();
    callback( tplElement, tplContext );
  });
};
