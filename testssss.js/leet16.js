// You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

// We will send a signal from a given node k. Return the time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

 

// Example 1:


// Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
// Output: 2
// Example 2:

// Input: times = [[1,2,1]], n = 2, k = 1
// Output: 1
// Example 3:

// Input: times = [[1,2,1]], n = 2, k = 2
// Output: -1
 

// Constraints:

// 1 <= k <= n <= 100
// 1 <= times.length <= 6000
// times[i].length == 3
// 1 <= ui, vi <= n
// ui != vi
// 0 <= wi <= 100
// All the pairs (ui, vi) are unique. (i.e., no multiple edges.)


// Solution 1:
// Time Complexity: O(n)
// Space Complexity: O(n)
// Runtime: 68 ms, faster than 61.67% of JavaScript online submissions for Network Delay Time.
// Memory Usage: 35.9 MB, less than 100.00% of JavaScript online submissions for Network Delay Time.



/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 
var networkDelayTime = function(times, n, k) {
    let graph = new Map()
    for(let i = 0; i < times.length; i++){
        let [u, v, w] = times[i]
        if(!graph.has(u)){
            graph.set(u, [])
        }
        graph.get(u).push([v, w])
    }
    let dist = new Array(n+1).fill(Infinity)
    dist[k] = 0
    let queue = [k]
    while(queue.length > 0){
        let u = queue.shift()
        let neighbors = graph.get(u)
        if(!neighbors){
            continue
        }
        for(let i = 0; i < neighbors.length; i++){
            let [v, w] = neighbors[i]
            if(dist[v] > dist[u] + w){
                dist[v] = dist[u] + w
                queue.push(v)
            }
        }
    }
    let max = 0
    for(let i = 1; i < dist.length; i++){
        if(dist[i] === Infinity){
            return -1
        }
        max = Math.max(max, dist[i])
    }
    return max
};