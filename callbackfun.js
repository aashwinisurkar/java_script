function one () {
   
    console.log("you call me first");
  

}
function two (second) {
    second();
    console.log("call me second")
 
}
two(one); //jisko 1st call kare vahi pahle run karega
