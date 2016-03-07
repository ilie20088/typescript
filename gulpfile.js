var gulp = require("gulp");
var ts 	 = require("gulp-typescript");
var connect = require("gulp-connect");

var tsSrc = ["ts/**/*.ts"];
var appJsSrc = "js";

gulp.task("watch", ['ts'], function(){
	gulp.watch(tsSrc, ['ts']);
});

gulp.task("ts", function(){
	return gulp.src(tsSrc)
		.pipe(ts({
			target: "ES5",
			// out: "app.js"
		}))
		.pipe(gulp.dest(appJsSrc));
});

gulp.task("server",function(){
	connect.server();
});



gulp.task("default",["watch", "server"]);