# gulp-balmung

> balmung plugin for [gulp](https://github.com/wearefractal/gulp)

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

[travis-url]: http://travis-ci.org/HAKASHUN/gulp-balmung
[travis-image]: https://secure.travis-ci.org/HAKASHUN/gulp-balmung.png?branch=master

[coveralls-url]: https://coveralls.io/r/HAKASHUN/gulp-balmung
[coveralls-image]: https://coveralls.io/repos/HAKASHUN/gulp-balmung/badge.png

[depstat-url]: https://david-dm.org/HAKASHUN/gulp-balmung
[depstat-image]: https://david-dm.org/HAKASHUN/gulp-balmung.png
