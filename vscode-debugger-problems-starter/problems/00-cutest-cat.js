/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.

*/

function cutestCat(cats) {
  let cutestRating = 0;
  let cutestName = ""
  let i = 0;

  while (i < cats.length) {
    const catRating = cats[i]["cuteness"];
    if (catRating > cutestRating) {
      cutestRating = catRating;
      cutestName = cats[i]["name"]
    }
    i++;
  }

  const cutestCat = {"name": cutestName, "cuteness": cutestRating}

  return cutestCat;
}


const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]

console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }