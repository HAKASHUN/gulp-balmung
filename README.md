# gulp-balmung
> [gulp](https://github.com/wearefractal/gulp) plugin to run balmung image optimizer.

## Usage

First, install `gulp-balmung` as a development dependency:

```shell
npm install --save-dev gulp-balmung
```

Then, add it to your `gulpfile.js`:

```javascript
var balmung = require("gulp-balmung");

gulp.task('balmung', function() {
  return balmung({
    config: {
        src: 'content/images',
        dst: 'output/images'
    }
  });
});

```

## API

### balmung(options)

#### options.config
Type: `Object`  

See the balmung [configuration](https://github.com/suguru/balmung#configuration).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-balmung
[npm-image]: https://badge.fury.io/js/gulp-balmung.png
