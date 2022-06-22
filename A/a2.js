function alternatingSums(a) {
  const team1 = a.reduce((sum, num, index) => ((index + 1) % 2 !== 0 ? sum += num : sum), 0);
  const team2 = a.reduce((sum, num, index) => ((index + 1) % 2 === 0 ? sum += num : sum), 0);

  return [team1, team2];
}

// Test
const a = [60, 40, 55, 75, 64];
const output = alternatingSums(a);
console.log(output);

