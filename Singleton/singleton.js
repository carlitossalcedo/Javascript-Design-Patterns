/*The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton.
Singletons are useful in situations where system-wide actions need to be coordinated from a single central place. An example is a database connection pool. 
The pool manages the creation, destruction, and lifetime of all database connections for the entire application ensuring that no connections are 'lost'.
Singletons reduce the need for global variables which is particularly important in JavaScript because it limits namespace pollution and associated risk of name collisions. 
The Module pattern (see our JavaScript + jQuery Design Pattern Framework) is JavaScript's manifestation of the Singleton pattern.
Several other patterns, such as, Factory, Prototype, and Façade are frequently implemented as Singletons when only one instance is needed.*/
var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
function run() {
 
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
	console.log(instance1);
	console.log(instance2);
    console.log("Same instance? ", (instance1 === instance2));  
}

run();