var gulp = require("gulp");
var ts 	 = require("gulp-typescript");

var tsSrc = "ts/**/*.ts";
var appJsSrc = "js/app.js";

gulp.task("watch", function(){

	return gulp.src(tsSrc)
		.pipe(ts({
			target: "ES5",
			outDir: "js"
		}))
		.pipe(gulp.dest(appJsSrc));
});


gulp.task("default",["watch"]);