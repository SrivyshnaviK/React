import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Tick from './Render'
import Comment from './Extract';
import Ticks from './FunctionalClock';
import Clock from './ClassClock';
import Toggle from './EventHandling';
import LoggingButton from './LoggingButton';
import LoginControl from './Conditional';
import Mailbox from './Inline';
import Page from './PreventRendering';
import NumberList from './KeysAndLists';
import Blog from './KeysAndLists';
import Reservation from './Form';
import Calculator from './LiftingStateUp';
import SignUpDialog from './Composition';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
  },
};
const messages = ['React', 'Re: React', 'Re:Re: React'];
const numbers = [1, 2, 3, 4, 5];
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

function App() {
  return (
    <div className="App">
    <Welcome />
    <Tick />
    <Comment {...comment}/>
    <Ticks />
    <Clock />
    <Toggle />
    <LoggingButton />
    <LoginControl />
    <Mailbox unreadMessages={messages} />
    <Page />
  {/* <NumberList numbers={numbers}/> */}
    <Blog posts={posts} />
    <Reservation />
    <Calculator />
    <SignUpDialog />
    </div>
  );
}
export default App;
