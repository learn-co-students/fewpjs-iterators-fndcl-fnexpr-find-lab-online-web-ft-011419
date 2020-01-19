const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(array) {
let answer = array.find( (obj)=>
  obj.result === "W")

   if (answer){
   return answer.year}
   else {
     return  undefined
   }
  }
