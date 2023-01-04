abstract class TakePhoto {
     constructor( public cameraMode: string,
          public filter : string){
}
abstract getSepia(): void // all functions should be abstract functions
}


// can't make objects from abstract classes
// const hc = new TakePhoto("something", "somethingElse") 
class socialMediaApp extends TakePhoto{
     constructor ( public cameraMode: string,
          public filter : string){
               super(cameraMode, filter)
          }
          getSepia(): void {
               console.log('implimented getSepia')
          }
}