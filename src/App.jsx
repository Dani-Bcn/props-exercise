import './App.css';
import  Card  from './components/card'

function App() {

  const clients = [
    {
      name: 'Mr.Hoffmann',
      age: 52,
      isPremium: false,
      country: 'de',
    },
    {
      name: 'Ms. Smith',
      age: 23,
      isPremium: true,
      country: 'en',
    },
    {
      name: 'Amélie',
      age: 25,
      isPremium: false,
      country: 'fr',
    },
    {
      name: 'Paco paquito...',
      age: 67,
      isPremium: true,
      country: 'es',
    },
  ]

  return (
    <div className="App">

      <Card clients={clients[0]}>Hotel webpage</Card>
      <Card clients={clients[1]}>Hotel webpage</Card>
      <Card clients={clients[2]}>Hotel webpage</Card>
      <Card clients={clients[3]}>Hotel webpage</Card>
    </div>
  );
}

export default App;
