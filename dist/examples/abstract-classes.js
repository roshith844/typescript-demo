"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
// can't make objects from abstract classes
// const hc = new TakePhoto("something", "somethingElse") 
class socialMediaApp extends TakePhoto {
    constructor(cameraMode, filter) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getSepia() {
        console.log('implimented getSepia');
    }
}
