
# drop-anywhere

  Drag and drop files anywhere to upload.

## Installation

    $ component install component/drop-anywhere

## Example

```js
var dropAnywhere = require('drop-anywhere');

var drop = dropAnywhere(function(err, upload){
  console.log('upload %s', upload.file.name);
});
```

## API

### DropAnywhere#unbind()

  Unbind event handlers.

## Example CSS

  The classname `.show` is used to actually display the dropzone,
  so you must style it accordingly with `display: block`, something
  like:

```css
@-webkit-keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
body {
  text-align: center;
}
#drop-anywhere {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.8);
  line-height: 500px;
  text-align: center;
  color: white;
  display: none;
}
#drop-anywhere::before {
  content: 'Drop to upload!';
}
#drop-anywhere.show {
  display: block;
  -webkit-animation: show 300ms;
}
  ```

## License

  MIT
