let realmPlayers = [
  {
    id: 1,
    username: 'Player 1',
    paid: false,
  },
  {
    id: 2,
    username: 'Player 2',
    paid: false,
  },
  {
    id: 3,
    username: 'Player 3',
    paid: false,
  },
];

export function getPlayers() {
  return realmPlayers;
}

export function getPlayer(username) {
  if (!username) return;

  return realmPlayers.filter((player) => player.username.toLowerCase() === username.toLowerCase());
}
