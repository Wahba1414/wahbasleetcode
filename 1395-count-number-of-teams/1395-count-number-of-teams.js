/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams_old = function (rating) {
  let total = 0;
  let details = [];

  function getAllPossibilities(i) {
    let combin = [rating[i]];

    for (let j = i + 1; j < rating.length; j++) {
      combin.push(rating[j]);

      for (let k = j + 1; k < rating.length; k++) {

        if ((rating[k] > rating[j] && rating[j] > rating[i]) ||
          (rating[k] < rating[j] && rating[j] < rating[i])) {
          total++;
          details.push([rating[i], rating[j], rating[k]]);
        }

      }

      combin.pop();

    }

  }

  for (let i = 0; i < rating.length; i++) {
    getAllPossibilities(i);
  }

  console.log(details);
  return total;

};

var numTeams = function (rating) {
  let total = 0;


  for (let i = 1; i < rating.length; i++) {
    let ascLeft = 0;
    let ascRight = 0;

    let desLeft = 0;
    let desRight = 0;

    // Left
    for (let j = 0; j < i; j++) {
      if (rating[j] < rating[i]) {
        ascLeft++;
      } else {
        desLeft++;
      }
    }

    for (let j = i + 1; j < rating.length; j++) {
      if (rating[j] > rating[i]) {
        ascRight++;
      } else {
        desRight++;
      }
    }

    total += ascLeft * ascRight + desLeft * desRight;



  }


  return total;

};