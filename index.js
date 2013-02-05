
/**
 * Module dependencies.
 */

var Dropload = require('dropload')
  , events = require('events');

/**
 * Expose `DropAnywhere`.
 */

module.exports = DropAnywhere;

/**
 * Make the document droppable and invoke `fn(err, upload)`.
 *
 * @param {Function} fn
 * @api public
 */

function DropAnywhere(fn) {
  if (!(this instanceof DropAnywhere)) return new DropAnywhere(fn);
  var self = this;
  this.el = document.createElement('div');
  this.el.id = 'drop-anywhere';
  this.events = events(this.el, this);
  this.docEvents = events(document.body, this);
  this.events.bind('drop', 'remove');
  this.events.bind('dragleave', 'remove');
  this.docEvents.bind('dragenter', 'add');
  this.drop = Dropload(this.el);
  this.drop.on('error', fn);
  this.drop.on('upload', function(upload){ fn(null, upload) });
}

/**
 * Add the element.
 */

DropAnywhere.prototype.add = function(){
  document.body.appendChild(this.el);
};

/**
 * Remove the element.
 */

DropAnywhere.prototype.remove = function(){
  document.body.removeChild(this.el);
};

/**
 * Unbind.
 *
 * @api public
 */

DropAnywhere.prototype.unbind = function(){
  this.docEvents.unbind();
  this.events.unbind();
  this.drop.unbind();
};
