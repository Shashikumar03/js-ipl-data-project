const teamWonTossAndMatch = require("../5-team-won-toss-and-match");

describe("teamWonTossAndMatch", () => {
  test("should return an empty array for an undefine or non array", () => {
    expect(teamWonTossAndMatch({})).toEqual({});
    expect(teamWonTossAndMatch(undefined)).toEqual({});
  });

  test("team won toss and match", () => {
    const matchData = [
      { toss_winner: "shashi", winner: "shashi" },
      { toss_winner: "shashi", winner: "amit" },
      { toss_winner: "dipu", winner: "shashi" },
      { toss_winner: "shashi", winner: "shashi" },
      { toss_winner: "amit", winner: "amit" },
    ];
    const result = teamWonTossAndMatch(matchData);
    console.log(result);
    const expectResult = {
      shashi: 2,
      amit: 1,
    };
    expect(result).toEqual(expectResult);
  });
});
