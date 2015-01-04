/*global describe, it*/
"use strict";

var fs = require("fs"),
	es = require("event-stream"),
	should = require("should");

require("mocha");

delete require.cache[require.resolve("../")];

var gutil = require("gulp-util"),
	balmung = require("../");

describe("gulp-balmung", function () {

  // set timeout limit to 30s.
  this.timeout(30000);

	it("should resize and optimize", function (done) {
    var original = fs.statSync('test/fixtures/buki_l.png');
		var stream = balmung({
      config: {
        datadir: 'test',
        settings: {},
        src: 'test/fixtures/',
        dst: 'test/expected/'
      }
    });

		stream.on("finish", function() {
      var actual = fs.statSync('test/expected/buki_l_30.png');
      (actual.size).should.be.below(original.size);

      [
        'test/expected/buki_l_10.png',
        'test/expected/buki_l_13.png',
        'test/expected/buki_l_15.png',
        'test/expected/buki_l_20.png',
        'test/expected/buki_l_30.png'
      ].forEach(fs.statSync);

      done();
		});

	});

});
