
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

## License

  MIT
