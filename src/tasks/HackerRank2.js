// didnt work because of nodejs

export async function getTeams(year, k) {
  let pageNumber = 1;
  let maxPageNumber = 2;

  const allMatches = [];
  const teamsMatches = [];
  while (pageNumber <= maxPageNumber) {
    const res = await fetch(
      `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${pageNumber}`
    );
    const data = await res.json();

    const matches = data.data;
    matches.forEach((item) => {
      teamsMatches.push(item.team1);
      teamsMatches.push(item.team2);
    });
    maxPageNumber = data.total_pages;

    pageNumber++;
  }

  const countMatches = {};
  for (let team of teamsMatches) {
    if (team in countMatches) {
      countMatches[team] += 1;
    } else {
      countMatches[team] = 1;
    }
  }

  const result = [];
  for (let team in countMatches) {
    if (countMatches[team] > k) result.push(team);
  }
}
