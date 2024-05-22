"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClass = void 0;
const base_class_ts_1 = require("base-class-ts");
class MyClass extends base_class_ts_1.BaseClass {
    constructor() {
        super();
        console.log("Hello world");
    }
}
exports.MyClass = MyClass;
base_class_ts_1.BaseClass.startWhenReady(MyClass);
