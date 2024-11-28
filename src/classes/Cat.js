class Cat {

      constructor(){
          console.log("inside cat constructor");
          this.noOfEyes =2;
          this.noOfLegs =4;
          this.noOfTails=1;
      }
      eatingBehaviour =()=>{
          console.log("Cat-Hunts rats and drinks milk");
      }
      sleepingBhehaviour =()=>{
          console.log("at corners of house");
      }
      faceingHuman =()=>{
          console.log("cat runs away from human");
      }

}
export default Cat;