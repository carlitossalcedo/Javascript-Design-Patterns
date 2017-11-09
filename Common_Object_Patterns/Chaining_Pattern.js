
var Calc = function (start) {
	var that = this;
	this.add = (x) => {
		start = start + x;
		return that;
	}

	this.multiply = (x) => {
		start = start * x;
		return that;
	}

	this.equals = (callback) => {
		callback(start);
		return that;
	}
}

new Calc(0)
.add(1)
.add(2)
.multiply(3)
.equals((result) => {
	console.log(result);
});
