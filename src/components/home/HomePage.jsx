import { Fragment } from 'react';
import './HomePage.css';

import TopContainer from '../containers/TopContainer';
import MidContainer from '../containers/MidContainer';
import BottomContainer from '../containers/BottomContainer';

const HomePage = () => {
  return (
    <Fragment>
      <TopContainer />
      <MidContainer />
      <BottomContainer />
    </Fragment>
  );
};

export default HomePage;
