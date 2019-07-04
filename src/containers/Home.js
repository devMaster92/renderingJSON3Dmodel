import React from 'react';
import PageLayout from '../layouts/PageLayout';
import Three from '../components/Three';
import './Home.scss';

const Home = () => (
  <PageLayout>
    <h1 className='site-title'>Three.js React example</h1>
    <Three />
  </PageLayout>
);

export default Home;