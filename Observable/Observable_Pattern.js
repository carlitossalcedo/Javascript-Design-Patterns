var Book = function (name, price) {
	var priceChangingHandlers = [],
		priceChangedHandlers = [];

	this.name = (val) => {
		return name;
	};

	this.price = (val) => {
		if (val &&  val !== price) {
			// Call first handler to check while price is changing
			for(var i = 0; i < priceChangingHandlers.length; i ++){
				if(!priceChangingHandlers[i](this, val)){
					return price;
				}
			}
			
			// After first handler returned properly update the value
			price = val;

			// Execute the second handlers for After price changed
			priceChangedHandlers.forEach((handler) => {
				handler(this);
			});
		}
		return price;
	};

	this.onPriceChanging = (handler) => {
		priceChangingHandlers.push(handler);
	};

	this.onPriceChanged = (handler) => {
		priceChangedHandlers.push(handler);
	};
};

var book = new Book('Name Book Test ', 23.99);

// Create first handler for Price changing
book.onPriceChanging((b, price) => {
	if (price > 100) {
		console.error('\x1b[31m%s\x1b[0m', 'Error, price has gone too high', price);
		return false;
	}

	return true;
});

// Create first handler for Price changed
book.onPriceChanged((b) => {
	console.log('The book price has changed to: $', b.price());
});

console.log('The name is: ', book.name());

console.log('The price is: $', book.price());

book.price(19.99);

book.price(200);