

const Observable = value => {
    const listeners = [];
    return {
        onChange: callback => {
            listeners.push(callback);
            callback(value, value);
        },
        getValue: ()       => value,
        setValue: newValue => {
            if (value === newValue) return;
            const oldValue = value;
            value = newValue;
            listeners.forEach(callback => callback(value, oldValue));
        }
    }
};


//  will benachrichtigt werden wenn etwas hinzu kommt (onAdd) und wenn etwas gelöscht wird (onDelete)

const ObservableList = list => {
    const addListeners = [];
    const delListeners = [];
    return {
        onAdd: listener => addListeners.push(listener),
        onDel: listener => delListeners.push(listener),
        add: item => {
            list.push(item);
            addListeners.forEach( listener => listener(item))
        },
        del: item => {
            const i = list.indexOf(item);
            if (i >= 0) { list.splice(i, 1) } // essentially "remove(item)"
            delListeners.forEach( listener => listener(item));
        },
        count:   ()   => list.length, // wir gross ist List
        countIf: pred => list.reduce( (sum, item) => pred(item) ? sum + 1 : sum, 0) // nur die, die bestimmte eigenschaft haben
    }
};

// currently missing: a way to unregister listeners -> might lead to memory leak
