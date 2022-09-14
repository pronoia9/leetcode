// *************************************   208. Implement Trie (Prefix Tree)   ************************************ //
// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
// Implement the Trie class:
// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
// https://leetcode.com/problems/implement-trie-prefix-tree/
//
class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

// Runtime:        418 ms, faster than 13.97%   |    463 ms, faster than 10.60%   |    230 ms, faster than 84.70%
// Memory Usage:  69.5 MB, less than   26.60%   |   69.6 MB, less than   26.22%   |   61.5 MB, less than   66.75%
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /** @param {string} word **/ /** @return {void} **/
  insert(word) {
    let curr = this.root;
    for (const c of word) {
      if (!Object.keys(curr.children).includes(c)) curr.children[c] = new TrieNode();
      curr = curr.children[c];
    }
    curr.endOfWord = true;
  }

  /** @param {string} word **/ /** @return {boolean} **/
  search(word) {
    let curr = this.root;
    for (const c of word) {
      if (!Object.keys(curr.children).includes(c)) return false;
      curr = curr.children[c];
    }
    return curr.endOfWord;
  }

  /** @param {string} prefix **/ /** @return {boolean} **/
  startsWith(prefix) {
    let curr = this.root;
    for (const c of prefix) {
      if (!Object.keys(curr.children).includes(c)) return false;
      curr = curr.children[c];
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// **************************************************************************************************************** //

const trie = new Trie();
console.log(trie.root);
console.log(trie.insert("apple"));
console.log(trie.root);
console.log(trie.search('apple'));
console.log(trie.root);
console.log(trie.search('app'));
console.log(trie.root);
console.log(trie.startsWith('app'));
console.log(trie.root);
console.log(trie.insert('app'));
console.log(trie.root);
console.log(trie.search("app"));
console.log(trie.root);

// Example 1:
// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True

// Constraints:
// 1 <= word.length, prefix.length <= 2000
// word and prefix consist only of lowercase English letters.
// At most 3 * 104 calls in total will be made to insert, search, and startsWith.

const x = { a: {}, b: {}, c: {} }

console.log(Object.keys(x).includes('a'))