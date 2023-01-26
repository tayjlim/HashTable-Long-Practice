class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null)
  }

  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue;
  }

  hashMod(key) {

    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    let index = this.hashMod(key)
    let newpair = new KeyValuePair(key,value);
    let curr = this.data[index];
    while(curr && curr.key !== key){
      curr=curr.next// we get to the end this way
    }
    if(curr){
      curr.value = value
    }
    else{
      newpair.next = this.data[index];
      this.data[index] = newpair;
      this.count++
    }

  }


  read(key) {
    let index = this.hashMod(key)
    let curr = this.data[index]
    while(curr){
      if(curr.key === key)
      {

        return curr.value
      }

      curr=curr.next
    }

    return undefined

  }


  resize() {
    this.count = 0
  this.capacity*=2;//doulbe the cap
  let temp = this.data; // place holder
  this.data = new Array (this.capacity).fill(null) // new empty double sized array
  for(let obj of temp){
    let curr = obj
    while(curr){
      this.insert(curr.key,curr.value)
      curr = curr.next
    }
    }
  }


  delete(key) {

  }
}


module.exports = HashTable;
