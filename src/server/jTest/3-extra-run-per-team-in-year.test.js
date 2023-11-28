const extraRunConcededByTeam2016 = require("../3-extra-run-per-team-in-year-2016");

describe("extraRunConcededByTeam2016", () => {
  test("should return an empty object for undefined or non-array", () => {
    expect(extraRunConcededByTeam2016(undefined, undefined)).toEqual({});
    expect(extraRunConcededByTeam2016()).toEqual({});
    expect(extraRunConcededByTeam2016({}, {})).toEqual({});
  });
  test("check extra run conceeded by each team", () => {
    const matchData = [{ id: 1, season: "2016" }];

    const deliveryData = [
      { match_id: 1, bowling_team: "TeamA", extra_runs: "5" },
      { match_id: 1, bowling_team: "TeamB", extra_runs: "10" },
      { match_id: 2, bowling_team: "TeamA", extra_runs: "8" },
      { match_id: 2, bowling_team: "TeamC", extra_runs: "7" },
      { match_id: 3, bowling_team: "TeamB", extra_runs: "12" },
    ];

    const expectedResult = {
      TeamA: 5,
      TeamB: 10,
    };

    expect(extraRunConcededByTeam2016(matchData, deliveryData)).toEqual(
      expectedResult
    );
  });
});
