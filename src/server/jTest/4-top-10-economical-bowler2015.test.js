const top10EconomicalBowler2015 = require("../4-top-10-economical-bowler2015");

describe("top10EconomicalBowler2015", () => {
  test("return an empty object when data is undifine and non array is pass", () => {
    expect(top10EconomicalBowler2015(undefined, undefined)).toEqual({});
    expect(top10EconomicalBowler2015()).toEqual({});
    expect(top10EconomicalBowler2015({}, {})).toEqual({});
  });

  test("economy of bowler in 2015", () => {
    const matchData = [
      { id: 1, season: 2015 },
      { id: 2, season: 2015 },
      { id: 3, season: 2016 },
    ];
    const deliveryData = [
      { match_id: 1, bowler: "shashi", total_runs: 1 },
      { match_id: 2, bowler: "shashi", total_runs: 2 },
      { match_id: 1, bowler: "amit", total_runs: 5 },
      { match_id: 3, bowler: "lalu", total_runs: 1 },
    ];
    const result = top10EconomicalBowler2015(matchData, deliveryData);
    const expectedResult = [{ "shashi": "9.00" }, { amit: "30.00" }];

    expect(result).toEqual(expectedResult);
  });
});
