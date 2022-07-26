let realmPlayers = [
  {
    id: 1,
    username: 'Hexutin',
    paid: false,
  },
  {
    id: 2,
    username: 'Alluensse',
    paid: false,
  },
  {
    id: 3,
    username: 'Luukala',
    paid: false,
  },
  {
    id: 4,
    username: 'Crahmnor',
    paid: false,
  },
  {
    id: 5,
    username: 'Freefall_',
    paid: false,
  },
  {
    id: 6,
    username: 'Champpa',
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
