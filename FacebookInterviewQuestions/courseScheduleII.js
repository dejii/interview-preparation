/**
 * 
 here are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.
 */

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
  let visiting = new Array(numCourses).fill(false);
  let visited = new Array(numCourses).fill(false);
  let stack = [];
  for (let i = 0; i < numCourses; i++) {
    if (!visited[i] && cycleExists(graph, i, visited, visiting, stack)) {
      return [];
    }
  }
  return stack;
};

function cycleExists(graph, course, visited, visiting, stack) {
  if (visiting[course]) return true;
  if (visited[course]) return false;
  if (!graph.has(course)) {
    visited[course] = true;
    stack.push(course);
    return false;
  }

  visited[course] = true;
  visiting[course] = true;
  for (let preq of graph.get(course)) {
    if (cycleExists(graph, preq, visited, visiting, stack)) {
      return true;
    }
  }
  visiting[course] = false;
  stack.push(course);
  return false;
}

function buildGraph(prerequisites) {
  let graph = new Map();
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
  let result = [];

  while (queue.length !== 0) {
    let course = queue.shift();
    result.push(course); // increase number of courses taken
    if (!graph.has(course)) continue;
    for (let v of graph.get(course)) {
      inDegrees[v]--;
      if (inDegrees[v] === 0) {
        queue.push(v);
      }
    }
  }
  return result.length === numCourses ? result : [];
};

let arr = [
  [1, 0],
  [2, 1],
  [2, 3],
  [3, 2]
];
// arr = [[1, 0]];
// console.log(canFinish(4, arr));

console.log(canFinishBFS(4, arr));
