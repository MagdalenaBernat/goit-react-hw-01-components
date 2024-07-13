import { Profile } from './Profile/Profile.jsx' 
import { Statistics } from './Statistics/Statistics.jsx'

export const App = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >      
        React homework
      </div>
      <Profile username="username" tag="tag" location="location" avatar="avatar" stats="stats" />
      <Statistics title="" stats="stats" />
    </>
  );
};
