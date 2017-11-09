
var PubSub = {
    registry: {},
    Pub: function (name, ...args) {
        if (!this.registry[name]) return;

        this.registry[name].forEach(x => {
            x.apply(null, args);
        });
    },

    Sub: function (name, fn) {
        if (!this.registry[name]) {
            this.registry[name] = [fn];
        } else {
            this.registry[name].push(fn);
        }
    }

};

PubSub.Sub('foo', function (...args) {
    console.log('this is foo1');
    args.forEach(x => {
        console.log('argument', x);
    });
});

PubSub.Sub('foox', function (...args) {
    console.log('this is foo2');
    args.forEach(x => {
        console.log('argumentX...', x);
    });
});

PubSub.Pub('foo', 1, 2, 3, 4, 5);

setTimeout(() => {
    PubSub.Pub('foox', 'a', 'b', 'c');
}, 1000);

PubSub.Pub('foox', 1, 2, 3, 4, 5);