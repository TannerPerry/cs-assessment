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
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphArr = alphabet.split()
    for(let i = 0; i < alphArr.length; i++) {
        if(str.includes(alphArr[i])){
            return false
        } else {
            return true
        }
    }
  }

  console.log(pangram(myStr))