// var reverse =arr.reverse()

// function reverse(array){
//   var result = []
//   for( var i= array.lengh; i >=0 ;i--){
//     result.push(array[i])
//   } 
//   return result
// }
// var a =[1,2,3,4,5]
// console.log(reverse(a))


//  function find(array, item){
//   for( var i =0; i <array.length;i++){
//     if(array[i] == item ){
//     return true
//     }
//   }
//   return false
// }
// var a =[1,2,3,4,5]

// console.log(findIndex(a, 3))

//  

//  function concat(array1, array2){
//      var result = []
//      for( var i =0; i<array1.length; i++){
//        result.push(array1[i])  
//      }
//      for( var i=0; i<array2.length; i++){
//       result.push(array2[i])
//      }
//      return result
//  }
// var a =[1,2,3,4,5]

   
// console.log(concat(a, a))



// function concat(array, item){
//      var result = []
//      for( var i =0; i<array.length; i++){
//      if(array[i] > item) 
//        result.push(array[i])
//       }
//      }
//      return result
//  }
// var a =[1,2,3,4,5]

// console.log(largerthan(a, 3))

// function square(array){
//   var result = ""
//   for(var i =0; i< array.length; i++){
//       result.push(array[i]*array[i])
//   }
//   return result
  
// }
// var a =[1,6,2]
// console.log(square(a))


// var a = [1, 6, 2 ]

// console.log(square(a))


// function square(x) {
//     return x*x
// }
// var a = [1, 6, 2 ]
// console.log(a.map(square))
var containerDiv = document.getElementById("container")
var charArray = containerDiv.innerHTML.split('')

function divWrapper(x, index){

    return  `<div class="title" style="animation-delay: ${index}s">${x}</div>`

}

var result = charArray.map(divWrapper).join('')

containerDiv.innerHTML= result