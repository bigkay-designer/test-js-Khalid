// We import the object from the data file. Inside that object there is a function to get players data
const data = require('./data');
/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

// Your code
console.log('=========== Test 1 ===========');

(displayPlayers = () => {
  const players = [];
  //Mapping through the imported data
  data.getPlayers().map((player) => {
    players.push(player);

    // Loggin the player number/position

    console.log(`PLAYER ${players.length}`);

    // Looping through the players with Object.keys then forEach
    Object.keys(player).forEach((key) => {
      console.log(`${key.toUpperCase()}: ${player[key]}`);
    });
    /// Divder
    console.log('--------------------');
  });
})();
/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */

// Your code
console.log('=========== Test 2 ===========');
// IIFE function
(namesOfPlayers = () => {
  const playerNames = [];
  //Mapping through the imported data
  data.getPlayers().map((player) => {
    //Sorting player names, ordered by name length descending.
    playerNames.push(player.name);
    const sortArr = playerNames.sort((a, b) => b.length - a.length);
    console.log(sortArr);
  });
})();

/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, all of them has 0.11 scoringChance, the result will be 1.1 average goals
 * Output example -> Goals per match: 2.19
 */

// Your code
console.log('=========== Test 3 ===========');

// IIFE function
(findAverage = () => {
  const goals = [];
  //Mapping through the imported data
  data.getPlayers().map((player) => {
    //Pushing the scoringChance into the goals array
    goals.push(parseInt(player.scoringChance));
    //Summing the scoringChance
    const sum = goals.reduce((acc, cv) => acc + cv, 0);
    //Finding the average number
    const average = Math.floor(sum / goals.length);
    console.log(`Goals per match: ${average}`);
  });
})();

/**
 * Test 4
 *
 * Write a function that accepts a name, and logs the position of the player with that name
 */

// Your code
console.log('=========== Test 4 ===========');

const findName = (playerName) => {
  const players = [];
  //Mapping through the imported data
  data.getPlayers().map((player) => {
    players.push(player.name);
  });

  //Finding the index of the input player.
  const searchName = players.find((player, index) => {
    if (player.toLowerCase() === playerName || player === playerName) {
      console.log(index);
    } else {
      // console.log(`Can't find player`);
    }
  });
  return searchName;
};

findName('timo');
/**
 * Test 5
 * Write a function that splits all the players randomly into 2 teams, Team A and Team B. Both teams should have same number of players.
 * The function should log the match score, using the average number of goals like the Test 3 and rounding to the closest integer
 * Example:
 *      Team A has 4 players, 2 with 50 scoringChance and 2 with 70 scoringChance.
 *      The average score for the team would be 2.4 (50+50+70+70 / 100), and the closest integer is 2, so the Team A score is 2
 */

// Your code
console.log('=========== Test 5 ===========');

(SplitPLayers = () => {
  /// Players initial array
  const players = [];

  //Mapping through the imported data
  data.getPlayers().map((player) => {
    players.push(player);
  });

  // Getting the length of players inside the mapped data.
  const arrLength = players.length;
  //Creating two randomm teams. TeamA and TeamB
  // const teamA = players.slice(0, arrLength / 2);
  // const teamB = players.slice(arrLength / 2);
  const middleIndex = Math.ceil(arrLength / 2);
  const teamA = players.splice(0, middleIndex);
  const teamB = players.splice(-middleIndex);
  // Storing the teams scoringChance
  const ArrScoreA = [];
  const ArrScoreB = [];

  // Team A average scoringChance function
  teamA.map((player) => {
    ArrScoreA.push(parseInt(player.scoringChance));
    const sum = ArrScoreA.reduce((acc, v) => acc + v, 0);
    const average = Math.round(sum / ArrScoreA.length);
    console.log(`TeamA => ${average}`);
  });

  // Team B average scoringChance function
  teamB.map((player) => {
    ArrScoreB.push(parseInt(player.scoringChance));
    const sum = ArrScoreB.reduce((acc, v) => acc + v, 0);
    const average = Math.round(sum / ArrScoreB.length);
    console.log(`TeamB ==> ${average}`);
  });
})();
