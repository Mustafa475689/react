import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { AddCard } from './components/addcard';
import { SideBar } from './components/sidebar';

function App() {
  return (
    <>
<Header />
<SideBar />
<AddCard />
    </>
  );
}

export default App;
