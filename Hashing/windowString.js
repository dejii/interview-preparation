function windowString(A, B) {
  var store = {};
  var bMap = {};
  for (var i = 0; i < B.length; i++) {
    if (!bMap[B[i]]) {
      bMap[B[i]] = 1;
    } else {
      bMap[B[i]]++;
    }
  }

  for (var i = 0; i < A.length; i++) {
    for (var j = i; j < A.length; j++) {
      var substr = A.substring(i, j + 1);
      if (isInWindow(substr, B, bMap)) {
        store[i] = [substr, i, j + 1];
        break;
      }
    }
  }
  //   console.log(store);
  var candidates = [];
  for (var key in store) {
    candidates.push(store[key]);
  }

  candidates = candidates.sort(function(x, y) {
    if (x[0].length === y[0].length) {
      return x[1] - y[1];
    }
    return x[0].length - y[0].length;
  });
  var i = 0;
  while (candidates[i] && candidates[i][0].length < B.length) {
    i++;
  }
  //   console.log(candidates.length);
  candidates = candidates.slice(i);
  return candidates.length > 0 ? candidates[0][0] : "";
}

function isInWindow(substr, B, bMap) {
  var sMap = {};
  for (var i = 0; i < substr.length; i++) {
    if (!sMap[substr[i]]) {
      sMap[substr[i]] = 1;
    } else {
      sMap[substr[i]]++;
    }
  }
  for (var k = 0; k < B.length; k++) {
    if (sMap[B[k]] && bMap[B[k]] && bMap[B[k]] <= sMap[B[k]]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
// var S = "ADOBECODEBANC";
// var T = "ABC";
var S =
  "xiEjBOGeHIMIlslpQIZ6jERaAVoHUc9Hrjlv7pQpUSY8oHqXoQYWWll8Pumov89wXDe0Qx6bEjsNJQAQ0A6K21Z0BrmM96FWEdRG69M9CYtdBOrDjzVGPf83UdP3kc4gK0uHVKcPN4HPdccm9Qd2VfmmOwYCYeva6BSG6NGqTt1aQw9BbkNsgAjvYzkVJPOYCnz7U4hBeGpcJkrnlTgNIGnluj6L6zPqKo5Ui75tC0jMojhEAlyFqDs7WMCG3dmSyVoan5tXI5uq1IxhAYZvRQVHtuHae0xxwCbRh6S7fCLKfXeSFITfKHnLdT65K36vGC7qOEyyT0Sm3Gwl2iXYSN2ELIoITfGW888GXaUNebAr3fnkuR6VwjcsPTldQSiohMkkps0MH1cBedtaKNoFm5HbH15kKok6aYEVsb6wOH2w096OwEyvtDBTQwoLN87JriLwgCBBavbOAiLwkGGySk8nO8dLHuUhk9q7f0rIjXCsQeAZ1dfFHvVLupPYekXzxtWHd84dARvv4Z5L1Z6j8ur2IXWWbum8lCi7aErEcq41WTo8dRlRykyLRSQxVH70rUTz81oJS3OuZwpI1ifBAmNXoTfznG2MXkLtFu4SMYC0bPHNctW7g5kZRwjSBKnGihTY6BQYItRwLUINApd1qZ8W4yVG9tnjx4WyKcDhK7Ieih7yNl68Qb4nXoQl079Vza3SZoKeWphKef1PedfQ6Hw2rv3DpfmtSkulxpSkd9ee8uTyTvyFlh9G1Xh8tNF8viKgsiuCZgLKva32fNfkvW7TJC654Wmz7tPMIske3RXgBdpPJd5BPpMpPGymdfIw53hnYBNg8NdWAImY3otYHjbl1rqiNQSHVPMbDDvDpwy01sKpEkcZ7R4SLCazPClvrx5oDyYolubdYKcvqtlcyks3UWm2z7kh4SHeiCPKerh83bX0m5xevbTqM2cXC9WxJLrS8q7XF1nh";
var T = "dO4BRDaT1wd0YBhH88Afu7CI4fwAyXM8pGoGNsO1n8MFMRB7qugS9EPhCauVzj7h";
// var S = 'AAAAA';
// var T = 'AA'
console.log(windowString(S, T));
