class Point {
    constructor(val, x, y, distance) {
      this.val = val; // Group of point
      this.x = x; // X-coordinate of point
      this.y = y; // Y-coordinate of point
      this.distance = distance; // Distance from test point
    }
  }
  
  // Used to sort an array of points by increasing order of distance
  const compare = (a, b) => {
    if (a.distance < b.distance) {
      return -1;
    } else if (a.distance > b.distance) {
      return 1;
    }
    return 0;
  };
  
  // This function finds classification of point p using
  // k nearest neighbour algorithm. It assumes only two
  // groups and returns 0 if p belongs to group 0, else
  // 1 (belongs to group 1).
  const classifyAPoint = (arr, n, k, p) => {
    // Fill distances of all points from p
    arr = arr.map((point) => {
      point.distance = Math.hypot(point.x - p.x, point.y - p.y);
      return point;
    });
  
    // Sort the Points by distance from p
    arr.sort(compare);
  
    // Now consider the first k elements and only two groups
    let freq = arr.slice(0, k).reduce((acc, point) => {
      acc[point.val] = (acc[point.val] || 0) + 1;
      return acc;
    }, {});
  
    // Return the most frequent class
    return freq[0] > freq[1] ? 0 : 1;
  };
  
  // Driver code
  const n = 17; // Number of data points
  const arr = new Array(n);
  for (let i = 0; i < 17; i++) {
    arr[i] = new Point();
  }
  arr[0].x = 1;
  arr[0].y = 12;
  arr[0].val = 0;
  
  arr[1].x = 2;
  arr[1].y = 5;
  arr[1].val = 0;
  
  arr[2].x = 5;
  arr[2].y = 3;
  arr[2].val = 1;
  
  arr[3].x = 3;
  arr[3].y = 2;
  arr[3].val = 1;
  
  arr[4].x = 3;
  arr[4].y = 6;
  arr[4].val = 0;
  
  arr[5].x = 1.5;
  arr[5].y = 9;
  arr[5].val = 1;
  
  arr[6].x = 7;
  arr[6].y = 2;
  arr[6].val = 1;
  
  arr[7].x = 6;
  arr[7].y = 1;
  arr[7].val = 1;
  
  arr[8].x = 3.8;
  arr[8].y = 3;
  arr[8].val = 1;
  
  arr[9].x = 3;
  arr[9].y = 10;
  arr[9].val = 0;
  
  arr[10].x = 5.6;
  arr[10].y = 4;
  arr[10].val = 1;
  
  arr[11].x = 4;
  arr[11].y = 2;
  arr[11].val = 1;
  
  arr[12].x = 3.5;
  arr[12].y = 8;
  arr[12].val = 0;
  
  arr[13].x = 2;
  arr[13].y = 11;
  arr[13].val = 0;
  
  arr[14].x = 2;
  arr[14].y = 5;
  arr[14].val = 1;
  
  arr[15].x = 2;
  arr[15].y = 9;
  arr[15].val = 0;
  
  arr[16].x = 1;
  arr[16].y = 7;
  arr[16].val = 0;
  
  // Testing Point
  const p = {
    x: 2.5,
    y: 7,
    val: -1, // uninitialized
  };
  
  // Parameter to decide group of the testing point
  const k = 3;
  
  console.log(
    "The value classified to unknown point is " + classifyAPoint(arr, n, k, p)
  );
  