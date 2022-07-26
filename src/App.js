import './App.css';
import MessageForm from './components/message-form/MessageForm.component';
import PaidPlayersForm from './components/paid-players-form/PaidPlayersForm.component';

function App() {
  return (
    <div>
      <PaidPlayersForm />
      <MessageForm />
    </div>
  );
}

export default App;
