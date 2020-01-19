/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
/**
 * 
 There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example 1:

Input: 2, [[1,0]] 
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
 */
function buildGraph(prerequisites) {
  let graph = new Map();
  // build graph pointing prequisites to courses
  for (let [course, prerequisite] of prerequisites) {
    if (!graph.has(prerequisite)) {
      graph.set(prerequisite, []);
    }
    let p = graph.get(prerequisite);
    p.push(course);
    graph.set(prerequisite, p);
  }
  return graph;
}

var canFinishBFS = function(numCourses, prerequisites) {
  let graph = buildGraph(prerequisites);

  let inDegrees = new Array(numCourses).fill(0);

  // calculate inDegrees
  // inc all adjacent nodes by 1
  for (let [_, adj] of graph) {
    for (let v of adj) {
      inDegrees[v]++;
    }
  }
  let queue = [];
  for (let i = 0; i < inDegrees.length; i++) {
    if (inDegrees[i] === 0) {
      queue.push(i);
    }
  }
  let count = 0;

  while (queue.length !== 0) {
    let course = queue.shift();
    count++; // increase number of courses taken
    if (!graph.has(course)) continue;
    for (let v of graph.get(course)) {
      inDegrees[v]--;
      if (inDegrees[v] === 0) {
        queue.push(v);
      }
    }
  }
  return count === numCourses;
};

let arr = [
  [1, 0],
  [2, 1],
  [2, 3],
  [3, 2]
];
arr = [[1, 0]];
// console.log(canFinish(4, arr));

var canFinishDFS = function(numCourses, prerequisites) {
  // build course graph from course to prequisites
  let graph = new Map();
  for (let [course, prerequisite] of prerequisites) {
    if (!graph.has(course)) {
      graph.set(course, []);
    }
    let p = graph.get(course);
    p.push(prerequisite);
    graph.set(course, p);
  }
  console.log(graph);
  let visiting = new Array(numCourses).fill(false);
  let visited = new Array(numCourses).fill(false);
  for (let i = 0; i < numCourses; i++) {
    if (!visited[i] && cycleExists(graph, i, visited, visiting)) {
      return false;
    }
  }
  return true;
};

function cycleExists(graph, course, visited, visiting) {
  if (visiting[course]) return true;
  if (visited[course]) return false;
  if (!graph.has(course)) return false;

  visited[course] = true;
  visiting[course] = true;
  for (let preq of graph.get(course)) {
    if (cycleExists(graph, preq, visited, visiting)) {
      return true;
    }
  }
  visiting[course] = false;
  return false;
}

console.log(canFinishDFS(4, arr));
