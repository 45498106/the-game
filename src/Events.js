const EventEmitter = require("events");

class Events extends EventEmitter {
    constructor() {
        super();

        this.queue = [];
    }
    emit(type, ...rest) {
        console.log("Event:", type, rest);
        this.queue.push({
            type,
            when: new Date(),
            args: rest
        });
        console.log(this.queue);
        super.emit(type, ...rest);
    }
};

const events = new Events();

module.exports = events;