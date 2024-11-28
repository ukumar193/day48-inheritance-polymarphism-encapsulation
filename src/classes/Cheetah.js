import Cat from "./Cat"

class Cheetah  extends Cat{
     constructor(){
         super();
         console.log("cheetah constructor")
     }
     eatingBehaviour=()=>{
          console.log("hunts animals ")
     }
      faceingHuman=()=>{
          console.log("it jumps on humans")
      }
      sleepingBhehaviour=()=>{
          console.log("sleeps half of the day")
      }
     

}

export default Cheetah;