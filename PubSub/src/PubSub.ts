module PubSub {
    var registry = {}
    var pub = function(name: string, ...args: any) {
        if (!registry[name]) return;

            registry[name].forEach(x => {
                x.apply(null, args);
            });
    }

    var sub = function(name: string, fn: any) {
        if (!registry[name]){
            registry[name] = [fn];
        } else {
            registry[name].push(fn);
        }
    }

    export var Pub = pub;
    export var Sub = sub;
}


PubSub.Sub('foo', function (...args: any) {
	args.forEach(x => {
		console.log('argument', x);
	});
});

PubSub.Pub('foo', 1, 2, 3, 4, 5);

setTimeout(() => {
   PubSub.Pub('foo', 'a', 'b', 'c');
}, 1000);