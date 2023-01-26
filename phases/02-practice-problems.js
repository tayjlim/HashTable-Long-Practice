function anagrams(str1, str2) {
  if(str1.length !== str2.length) return false;
  let obj1 = {};
  let obj2 = {};
  for(let i = 0; i < str1.length; i++){
    let char = str1[i];
    if(!obj1[char]) {
      obj1[char] = 1;
    } else {
      obj1[char] += 1;
    }
  }
  for(let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if(!obj2[char]) {
      obj2[char] = 1;
    } else {
      obj2[char] += 1;
    }
  }

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  for(let key in obj1) {
    if(obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}


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
  // Your code here
}


function twoSum(nums, target) {
  // Your code here
}


function wordPattern(pattern, strings) {
  // Your code here
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
