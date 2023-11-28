const { matchPerYear } = require("../1-matches-per-year.js");

describe("matchPerYear", () => {
  test("should return an empty object for undefined or non-array input", () => {
    expect(matchPerYear(undefined)).toEqual({});
    expect(matchPerYear("invalid input")).toEqual({});
    expect(matchPerYear({})).toEqual({});
  });

  test("should correctly count matches per year for valid input", () => {
    const matchData = [
      { season: "2008" },
      { season: "2009" },
      { season: "2008" },
      { season: "2008" },
      { season: "2010" },
    ];

    const result = matchPerYear(matchData);

    expect(result).toEqual({
      2008: 3,
      2009: 1,
      2010: 1,
    });
  });

  test("should handle an empty array and return an empty object", () => {
    const result = matchPerYear([]);

    expect(result).toEqual({});
  });
});
