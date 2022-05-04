// You are given an integer array jobs, where jobs[i] is the amount of time it takes to complete the ith job.

// There are k workers that you can assign jobs to. Each job should be assigned to exactly one worker. The working time of a worker is the sum of the time it takes to complete all jobs assigned to them. Your goal is to devise an optimal assignment such that the maximum working time of any worker is minimized.

// Return the minimum possible maximum working time of any assignment.

//[Javascript] Easy to understand code, backtracking

// var minimumTimeRequired = function (A, k) {
//     const N = A.length;
//     let res = Infinity;
//     const worker = Array(k).fill(0);
  
//   const dfs = (idx = 0) => {
//       if (idx === N) {
//         res = Math.min(res, Math.max(...worker));
//         return;
//       }
  
//       for (let i = 0; i < k; i++) {
//         if (worker[i] + A[idx] > res) continue;
//         worker[i] += A[idx];
//         dfs(idx + 1);
//         worker[i] -= A[idx];
//         if (!worker[i]) break;
//       }
//     };
//     dfs();
//     return res;
//   };


//   Find minimum time to finish all jobs with given constraints
//   Difficulty Level : Hard
//   Last Updated : 10 May, 2021
//   Given an array of jobs with different time requirements. There are K identical assignees available and we are also given how much time an assignee takes to do one unit of the job. Find the minimum time to finish all jobs with following constraints.
   
  
//   An assignee can be assigned only contiguous jobs. For example, an assignee cannot be assigned jobs 1 and 3, but not 2.
//   Two assignees cannot share (or co-assigned) a job, i.e., a job cannot be partially assigned to one assignee and partially to other.
//   Input :
  
//   K:     Number of assignees available.
//   T:     Time taken by an assignee to finish one unit 
//          of job
//   job[]: An array that represents time requirements of 
//          different jobs



    // Javascript program to find minimum time
    // to finish all jobs with given
    // number of assignees
     
    // Utility function to get
    // maximum element in job[0..n-1]
    function getMax(arr, n)
    {
      let result = arr[0];
      for (let i=1; i<n; i++)
        if (arr[i] > result)
            result = arr[i];
        return result;
    }
       
    // Returns true if it is possible to
    // finish jobs[] within given time 'time'
    function isPossible(time, K, job, n)
    {
        // cnt is count of current
        // assignees required for jobs
        let cnt = 1;
           
        // time assigned to current assignee
        let curr_time = 0;
       
        for (let i = 0; i < n;)
        {
            // If time assigned to current assignee
            // exceeds max, increment count of assignees.
            if (curr_time + job[i] > time) {
                curr_time = 0;
                cnt++;
            }
               
            // Else add time of job to current
            // time and move to next job.
            else
            {
                curr_time += job[i];
                i++;
            }
        }
       
        // Returns true if count
        // is smaller than k
        return (cnt <= K);
    }
       
    // Returns minimum time required to
    // finish given array of jobs
    // k --> number of assignees
    // T --> Time required by every assignee to finish 1 unit
    // m --> Number of jobs
    function findMinTime(K, T, job, n)
    {
        // Set start and end for binary search
        // end provides an upper limit on time
        let end = 0, start = 0;
        for (let i = 0; i < n; ++i)
            end += job[i];
               
        // Initialize answer
        let ans = end;
       
        // Find the job that takes maximum time
        let job_max = getMax(job, n);
       
        // Do binary search for
        // minimum feasible time
        while (start <= end)
        {
            let mid = parseInt((start + end) / 2, 10);
       
            // If it is possible to finish jobs in mid time
            if (mid >= job_max && isPossible(mid, K, job, n))
            {
                // Update answer
                ans = Math.min(ans, mid);
                   
                end = mid - 1;
            }
   
            else
                start = mid + 1;
        }
       
        return (ans * T);
    }
     
    let job = [3, 1, 1, 3, 1, 0,1];
    let n = job.length;
    let k = 4, T = 5;
    console.log(findMinTime(k, T, job, n));
 

    //TimeComplexity: O(n*k)
    //SpaceComplexity: O(n)


