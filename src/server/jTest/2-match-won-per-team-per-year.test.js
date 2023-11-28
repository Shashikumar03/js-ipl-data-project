const matchWonPerTeamPerYear = require("../2-match-won-per-team-per-year");

describe("matchWonPerTeamPerYear", () => {
  test("should return an empty object for undefined 0r non array", () => {
    expect(matchWonPerTeamPerYear(undefined)).toEqual({});
    expect(matchWonPerTeamPerYear({})).toEqual({});
    expect(matchWonPerTeamPerYear("invalid input")).toEqual({});
  });
  test("it should correctly count team won matches per season", () => {
    const matchData = [
      { winner: "Kolkata Knight Riders", season: 2008 },
      { winner: "Mumbai Indians", season: 2008 },
      { winner: "Mumbai Indians", season: 2009 },
      { winner: "Kings XI Punjab", season: 2009 },
      { winner: "Mumbai Indians", season: 2008 },
      { winner: "Delhi Daredevils", season: 2009 },
    ];
    const expectedResult = {
      2008: { "Kolkata Knight Riders": 1, "Mumbai Indians": 2 },
      2009: {
        "Mumbai Indians": 1,
        "Kings XI Punjab": 1,
        "Delhi Daredevils": 1,
      },
    };

    const result = matchWonPerTeamPerYear(matchData);
    expect(result).toEqual(expectedResult);
  });
});
