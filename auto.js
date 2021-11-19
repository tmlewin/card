
 // create an autocomplete function that will take in an input string and a dictionary array and return the values from the dictionary that start with the input string with trie tree structure and return an array of strings with suggestions     (if there are no suggestions, return an empty array)

 
 
 function autocomplete(input, dictionary) {
    let trie = new Trie();
    for (let word of dictionary) {
        trie.add(word);
    }
    let result = [];
    let node = trie.root;
    for (let i = 0; i < input.length; i++) {
        if (node[input[i]]) {
            node = node[input[i]];
        } else {
            return result;
        }
    }
    helper(node, input, result);
    return result;
}

function helper(node, input, result) {
    if (Object.keys(node).length === 0) {
        return;
    }
    if (node.isWord) {
        result.push(input);
    }
    for (let letter of Object.keys(node)) {
        helper(node[letter], input + letter, result);
    }
}


function Trie() {
    this.root = {};
}

Trie.prototype.add = function(word) {
    let node = this.root;
    for (let letter of word) {
        if (!node[letter]) {
            node[letter] = {};
        }
        node = node[letter];
    }
    node.isWord = true;
}


console.log(autocomplete('abc', ['a', 'ab', 'abc']))