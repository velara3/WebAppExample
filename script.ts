import {BaseClass} from "base-class-ts"

export class MyClass extends BaseClass {

    constructor() {
        super();
        console.log("Hello world")
    }
}

BaseClass.startWhenReady(MyClass);