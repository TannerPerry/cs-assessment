let numArr = [1, 2, 3, -6]

function sumZero(arr) {
let answer = 0
for(let i = 0; i < arr.length; i++) {
    answer += arr[i]
}
if(answer === 0) {
return true
}else{
    return false
}
}
console.log(sumZero(numArr))

function findLongestWord(str) {
    let strSplit = str.split(' ')
    let longestWord = 0
    for(let i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longestWord){
            longestWord = strSplit[i].length;
        }
    }
    return longestWord;
}
let myStr = "The quick brown fox jumped over the lazy dog"

  console.log(findLongestWord(myStr))

  function pangram(str){
      str = str.toLowerCase()
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphArr = alphabet.split('')
    let allLet = false
    for(let i = 0; i < alphArr.length; i++) {
        if(str.includes(alphArr[i])){
            allLet =  true
        } else {
            allLet = false
        }
       
    }
    return allLet

  }

  console.log(pangram(myStr))

  function uniquChar(str){
    let len = str.length
    if(len > 26){
        return false
    }
    for(let i = 0; i < str.length; i++) {
        if(str.lastIndexOf(str[i]) !== i) {
            return false;
        }
    }
    return true

  }
  console.log(uniquChar(myStr))