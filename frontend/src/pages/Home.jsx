import React from 'react';
import Button from '../components/common/Button';

const Home = () => {
  return (
    <div className="page home-page">
      <h1>Welcome to IDR</h1>
      <p>Handcrafted luxury watches featuring rare gemstones.</p>
      <Button onClick={() => alert('Explore Collection clicked')}>
        Explore Collection
      </Button>
    </div>
  );
};

export default Home;
