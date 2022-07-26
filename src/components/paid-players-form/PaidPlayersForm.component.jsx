import { useState, useEffect } from 'react';
import './PaidPlayers.styles.css';
import { getPlayers } from '../../data';

const PaidPlayersForm = () => {
  const [playerData, setPlayerData] = useState(
    JSON.parse(localStorage.getItem('players')) || getPlayers()
  );

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(playerData));
  }, [playerData]);

  function handlePaidChange(e) {
    const { name } = e.target;
    const newState = playerData.map((player) => {
      if (player.username.toLowerCase() === name.toLowerCase()) {
        return { ...player, paid: !player.paid };
      }

      return player;
    });

    setPlayerData(newState);
  }

  async function handlePaidPlayersSubmit(e) {
    e.preventDefault();

    const paidPlayers = playerData
      .filter((player) => !player.paid)
      .map((player) => player.username);

    if (paidPlayers && paidPlayers.length === 0) {
      alert("Can't send data! Everyone has paid their share of the server");
    }

    const response = await fetch('http://localhost:3000/paid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paidPlayers),
    });
    const data = await response.json();

    if (data.status === 200) {
      alert('Payment notification sent successfully!');
    }
  }

  const playerItems = playerData.map((player) => {
    return (
      <div key={player.id} className="player-item">
        <label name={player.username}>{player.username}</label>
        <input
          onChange={handlePaidChange}
          type="checkbox"
          checked={player.paid}
          name={player.username}
        />
      </div>
    );
  });

  return (
    <div className="paid-players-form-container">
      <h2 className="text-center">Players who have paid</h2>
      <form onSubmit={handlePaidPlayersSubmit}>
        {playerItems}
        <button className="primary-button send-button">Send</button>
      </form>
    </div>
  );
};

export default PaidPlayersForm;
