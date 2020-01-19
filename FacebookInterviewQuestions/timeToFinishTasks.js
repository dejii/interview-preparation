/**
 * Given a list of tasks (which have a name and an execution time) and a list
 *  of dependencies between those tasks (graph),
 *  find the total time it takes for a certain task to finish.
For example:
Tasks: A B C D E
Time: 5 2 4 1 3
Dependencies:
A cannot execute until B and C have finished
B cannot execute until D and E have finished
C cannot execute until E has finished

Find the total time it takes A to execute.
Answer: time(E) + time(C) + time(D) + time(B) + time(A) = 15

I suggested a topological sort, but the interviewer said that the sum will still be the same, so I don't need to sort the tasks. He wanted me to do a BFS.
 */

function buildGraph(tasks) {
  let graph = new Map();
  for (let [task, prerequisite] of tasks) {
    if (!graph.has(prerequisite)) {
      graph.set(prerequisite, []);
    }
    let temp = graph.get(prerequisite);
    temp.push(task);
    graph.set(prerequisite, temp);
  }
  return graph;
}

function solution(tasks, map) {
  let graph = buildGraph(tasks);
  console.log(graph);
  let inDegreeMap = new Map();
  for (let [task, adj] of graph) {
    inDegreeMap.set(task, 0);
    for (let v of adj) {
      if (!inDegreeMap.has(v)) {
        inDegreeMap.set(v, 0);
      }
      inDegreeMap.set(v, inDegreeMap.get(v) + 1);
    }
  }

  let queue = [];
  for (let [task, deg] of inDegreeMap) {
    if (deg === 0) {
      queue.push(task);
    }
  }

  let result = [];
  let sum = 0;
  while (queue.length !== 0) {
    let current = queue.shift();
    result.push(current);
    sum += map.get(current);

    if (!graph.has(current)) continue;
    for (let adj of graph.get(current)) {
      inDegreeMap.set(adj, inDegreeMap.get(adj) - 1);

      if (inDegreeMap.get(adj) === 0) {
        queue.push(adj);
      }
    }
  }
  console.log(result);
  console.log(sum);
}

let tasks = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["B", "E"],
  ["C", "E"]
];
let map = new Map();
map.set("A", 5);
map.set("B", 2);
map.set("C", 4);
map.set("D", 1);
map.set("E", 3);
console.log(solution(tasks, map));
