import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfileCard from './components/ProfileCard';
import CounterApp from './components/CounterApp';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Posts from './components/Posts';
import LoginForm from './components/LoginForm';
function App() {
  return (
    <>
  
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Greeting name="Priya"topic="React Components"/>
        <Greeting name="Rohan"topic="JSX & Props"/>
        <div style={{display:"flex",justifyContent:"center"}}>
      <ProfileCard
      name="arjun kumar"
      role="fd"
      image="https://randomuser.me/api/portraits/men/32.jpg"
      />
      <ProfileCard 
      name="sneha"
      role="ui des"
      image="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
    <CounterApp />
    <UserForm />
    <UserList />
  <Posts />
  <LoginForm />     
      <div>
      <Header />
      <main>
        <h2>Welcome to My React App</h2>
        <p>This is my first modular React layout</p>
      </main>
      <Footer />
    </div>
      </header>
    </div>
  
</>
  
 
  );
}

export default App;
