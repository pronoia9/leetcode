// *******************************************   207. Course Schedule   ******************************************* //
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.
// https://leetcode.com/problems/course-schedule/
///
/** @param {number} numCourses **/ /** @param {number[][]} prerequisites **/ /** @return {boolean} **/
//
//// Breadth? first search BFS
// Depth first search DFS
// O(n + p) time
{
  const canFinish = (numCourses, prerequisites) => {
    const preMap = new Map();
    const visitSet = new Set(); // all courses along the  curr DFs path

    // map each course to prepreq list
    for (const [course, prereq] of prerequisites) {
      if (!preMap.has(prereq)) preMap.set(prereq, []);
      preMap.set(course, [...(preMap.get(course) || []), prereq]);
    }

    const dfs = (crs) => {
      if (visitSet.has(crs)) return false;
      if (!preMap.get(crs)) return true;

      visitSet.add(crs);
      preMap.get(crs).forEach((preq) => {
        if (!dfs(preq)) return false;
      });

      visitSet.delete(crs);
      preMap.set(crs, []);
      return true;
    };

    for (let crs = 0; crs < numCourses; crs++) {
      if (!dfs(crs)) return false;
    }
    return true;
  };
}
//
// Runtime:        145 ms, faster than 30.11%   |    178 ms, faster than 16.81%   |    143 ms, faster than 31.58%
// Memory Usage:  49.7 MB, less than   21.79%   |   47.8 MB, less than   46.89%   |   47.6 MB, less than   52.63%
const canFinish = (numCourses, prerequisites) => {
  const preMap = new Map();
   for (const [course, prereq] of prerequisites) {
     if (!preMap.has(prereq)) preMap.set(prereq, []);
     preMap.set(course, [...(preMap.get(course) || []), prereq]);
   }
  
  const visitedState = { unknown: 0, checkingPreReqs: 1, preReqMet: 2, };
  const visitedStateByCourse = Array.from({ length: numCourses }, () => visitedState.unknown);
  
  const dfs = (course) => {
    const state = visitedStateByCourse[course];
    if (state === visitedState.checkingPreReqs) return false;
    else if (state === visitedState.preReqMet) return true;
    else if (state === visitedState.unknown) {
      visitedStateByCourse[course] = visitedState.checkingPreReqs;
      const preReqs = preMap.get(course);
      for (let i = 0; i < preReqs.length; i++) if (!dfs(preReqs[i])) return false; 
      visitedStateByCourse[course] = visitedState.preReqMet;
      return true;
    }
  };

  for (let course = 0; course < numCourses; course++) if (!dfs(course)) return false;
  return true;
};
// **************************************************************************************************************** //

console.log(canFinish(5, [[0, 1], [0, 2], [1, 3], [1, 4], [3, 4]]));
// console.log(canFinish(2, [[1, 0]]));
console.log(canFinish(2, [[1, 0], [0, 1]]));

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.

// Example 2:
// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

// Constraints:
// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.