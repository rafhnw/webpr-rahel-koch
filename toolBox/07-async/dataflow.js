export { DataFlowVariable, Scheduler }

// execute asynchronous tasks in strict sequence, aka "reactive stream", "flux architecture"
const Scheduler = () => {
    let inProcess = false;
    const tasks = []; // will es an den anfang machen
    function process() {
        // schaut in lokaler varable nach, ob ich am arbeiten bin oder nicht, falls ich am arbeiten bin mache ich ein return
        // wenn ich schon am arbeiten bin, dann passiert garnichts
        if (inProcess) { return; }
        if (tasks.length === 0) { return; } // guard clause
        inProcess = true; // habe etwas zu tun, signalisiere, dass ich am arbeiten bin
        const task = tasks.pop(); // hole mit pop das letzte element aus der taskliste


        // rufe in asynchron auf, kein zugriff auf reject
        new Promise( (resolve, reject) => {
            task(resolve);
        }). then ( () => {
            inProcess = false;
            process();
        });
    }

    // wenn tasks failed? tasks wird nur dann ausgeführt, wenn vorgänger ausgeführt
    function add(task) {
        tasks.unshift(task);
        process();
    }
    return {
        add: add,
        addOk: task => add( ok => { task(); ok(); }) // convenience
    }
};

// a dataflow abstraction that is not based on concurrency but on laziness
// is a function with callback
const DataFlowVariable = howto => {
    let value = undefined;
    return () => undefined === value
                 ? value = howto()
                 : value;
};

