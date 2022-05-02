import React from 'react';
import TypedText from '../components/TypedText';

const Home = () => {
  return (
    <div className="home">
      <TypedText string={[`Bienvenue sur ma page.`,`Bienvenue chez moi.<br />^1600 C'est ici que naissent mes rêves.`]} />
    </div>
  );
};

export default Home;