// ***************************************   1108. Defanging an IP Address   ************************************** //
// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".
// https://leetcode.com/problems/defanging-an-ip-address/
//
// Runtime:         68 ms, faster than 83.67%
// Memory Usage:  41.9 MB, less than   57.87%
const defangIPaddr = (address) => address.replaceAll('.', '[.]');
// **************************************************************************************************************** //

console.log(defangIPaddr('1.1.1.1'));
console.log(defangIPaddr('255.100.50.0'));

// Example 1:
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// Example 2:
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

// Constraints:
// The given address is a valid IPv4 address.