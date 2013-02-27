
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
  this.callback = fn;
  this.el = document.createElement('div');
  this.el.id = 'drop-anywhere';
  this.events = events(this.el, this);
  this.docEvents = events(document.body, this);
  this.events.bind('click', 'hide');
  this.events.bind('drop', 'hide');
  this.events.bind('dragleave', 'hide');
  this.docEvents.bind('dragenter', 'show');
  this.drop = Dropload(this.el);
  this.drop.on('error', fn);
  this.handle('upload');
  this.handle('text');
  this.handle('html');
  this.handle('url');
  this.add();
}

/**
 * Handle the given item `type`.
 *
 * @param {String} type
 * @api private
 */

DropAnywhere.prototype.handle = function(type){
  var self = this;
  this.drop.on(type, function(item){
    self.callback(null, {
      type: type,
      item: item
    });
  });
};

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
 * Show the dropzone.
 */

DropAnywhere.prototype.show = function(){
  this.el.className = 'show';
};

/**
 * Hide the dropzone.
 */

DropAnywhere.prototype.hide = function(){
  this.el.className = '';
};

/**
 * Unbind.
 *
 * @api public
 */

DropAnywhere.prototype.unbind = function(){
  this.remove();
  this.docEvents.unbind();
  this.events.unbind();
  this.drop.unbind();
};
