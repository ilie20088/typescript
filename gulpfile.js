var gulp = require("gulp");
var ts 	 = require("gulp-typescript");

var tsSrc = ["ts/**/*.ts"];
var appJsSrc = "js";

gulp.task("watch", function(){
	gulp.watch(tsSrc, ['ts']);
});

gulp.task("ts", function(){
	return gulp.src(tsSrc)
		.pipe(ts({
			target: "ES5",
			// out: "app.js"
		}))
		.pipe(gulp.dest(appJsSrc));
})




gulp.task("default",["watch"]);