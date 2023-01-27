function anagrams(str1, str2) {
  const set1 = new Set(str1.split(''));
  const set2 = new Set(str2.split(''));
  if(set1.size === set2.size && [...set1].every((char) => set2.has(char))) return true
  return false;
}

// function anagrams(str1, str2) {
//   if(str1.length !== str2.length) return false;
//   let obj1 = {};
//   let obj2 = {};
//   for(let i = 0; i < str1.length; i++){
//     let char = str1[i];
//     if(!obj1[char]) {
//       obj1[char] = 1;
//     } else {
//       obj1[char] += 1;
//     }
//   }
//   for(let i = 0; i < str2.length; i++) {
//     let char = str2[i];
//     if(!obj2[char]) {
//       obj2[char] = 1;
//     } else {
//       obj2[char] += 1;
//     }
//   }
//   let keys1 = Object.keys(obj1);
//   let keys2 = Object.keys(obj2);
//   for(let key in obj1) {
//     if(obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }


function commonElements(arr1, arr2) {
  let obj1 = {};
  let obj2 = {};
  let both = arr1.concat(arr2);

  for(let ele of arr1) {
    if(!obj1[ele]) {
      obj1[ele] = 1;
    } else {
      obj1[ele] += 1;
    }
  }

  for(let ele of arr2) {
    if(!obj2[ele]) {
      obj2[ele] = 1;
    } else {
      obj2[ele] += 1;
    }
  }

}

function duplicate(arr) {
  let obj = {};
  for(let ele of arr){
    if(!obj[ele]){
      obj[ele] =1;
    }else{
      obj[ele] ++
    }
  }
  for(let key in obj){
    if(obj[key]>1){
      return Number(key)
    }
  }
}

function twoSum(nums, target){
  let hashTable = {};
  for (let num of nums){
      if (hashTable[target - num]) {
          return true;
      }
      hashTable[num] = true;
  }
  return false;
}

function wordPattern(pattern, strings) {

}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
