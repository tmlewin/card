// import './style.css';


// node1 , node2 node 3
/* Class representing a Trie data structure */
 class Trie {
  /**
   * Creates a Trie
   * @return {Object} Trie
   */
  constructor() {
    this.isWord = false;
    this.prefixes = 0;
    this.children = {};
  }

  /**
   * Insert a string into the Trie
   * @param  {String} str String to add
   * @param  {Number} pos Optional position in Trie
   * @return {}
   */
  insert(str) {
    let current = this;
    for (let letters of str) {
      if (!current.children[letters]) {
        current = current.children[letters] = new Trie();
        current.prefixes = letters;
      } else {
        current = current.children[letters];
        current.prefixes = letters;
      }
    }
    current.isWord = true;
  }

  /**
   * Return all words in Trie with a given prefix
   * @param  {String} str Prefix to search for
   * @return {Array} Array of strings that match for prefix
   */
  getAllWords(word = '', words=[]) {
    if (this.isWord) {
      words.push(word)
    }
    for(let key in this.children){
      this.children[key].getAllWords(word + key, words)
    }
    return words

  }
  // traverse(word) {
  //   let node = this.children;
  //   for (let c of word) {
  //     node = node[c];
  //     if (node == null) return null;
  //   }
  //   return node;
  // }

  // search(word) {
  //   const node = this.traverse(word);
  //   return node 
  // }
  autocomplete(str) {
    let current = this
    let i = 0
    while(i < str.length) {
      current = current.children[str[i]]
      i++
    }
    if (current === undefined) {
      return `This word is unavailable`
      
    }
    let result = current.getAllWords()
    for (let i = 0; i < result.length; i++){
      result[i] = str + result[i]
    }
    return result

  }

}

// tests
const trie = new Trie();
trie.insert('cow');
trie.insert('cat');
trie.insert('dog');
trie.insert('dad');
//console.log(trie.getAllWords())
console.log(trie.autocomplete('c'));
//console.log(trie)

