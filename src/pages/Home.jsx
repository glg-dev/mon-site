import React from 'react';
import TypedText from '../components/TypedText';

const Home = () => {
  return (
    <div className="home">
      <TypedText string={[`Bienvenue sur ma page.`,`Bienvenue chez moi.<br />^1600 C'est ici que naissent mes rêves.`]} />
      <div className="network">
        <button>
          <a href="https://github.com/glg-dev" target="_blank" rel='noopener noreferrer'>
            <i className='fab fa-github'></i>
          </a>
        </button>
        <button>
          <a href="https://www.linkedin.com/in/ga%C3%ABl-lecoq-965484235/" target="_blank" rel='noopener noreferrer'>
            <i className='fab fa-linkedin'></i>
          </a>
        </button>
        <button>
          <a href="./assets/CV.pdf" target='_blank' rel='noopener noreferrer'>Voir mon CV</a>
        </button>
      </div>
    </div>
  );
};

export default Home;