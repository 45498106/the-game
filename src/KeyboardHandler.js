const { KeyState, Key } = require("./Constants");

module.exports = class KeyboardHandler {
    constructor() {
        this.lastKey = null;
        this.keyState = {
            [Key.W]: KeyState.Up,
            [Key.A]: KeyState.Up,
            [Key.S]: KeyState.Up,
            [Key.D]: KeyState.Up
        };

        this.initListeners();
    }

    getLastKey() {
        return this.lastKey;
    }

    getKeyState() {
        return this.keyState;
    }

    isKeyPressed(key) {
        return this.keyState[key] === KeyState.Down;
    }

    initListeners() {
        document.addEventListener("keydown", e => {
            let state = this.keyState[e.keyCode];
            if (state !== null && state === KeyState.Up) {
                this.keyState[e.keyCode] = KeyState.Down;
            }
        });

        document.addEventListener("keyup", e => {
            let state = this.keyState[e.keyCode];
            if (state !== null && state === KeyState.Down) {
                this.keyState[e.keyCode] = KeyState.Up;
            }
        });
    }
};
