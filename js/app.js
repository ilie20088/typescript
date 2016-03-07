var b = 5;
var c = "asd";
var a = 5;
var test = (function () {
    function test() {
        this.s = "asd";
    }
    return test;
}());
