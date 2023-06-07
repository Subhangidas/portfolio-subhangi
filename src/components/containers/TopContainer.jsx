import { Fragment } from 'react';

import CloudImage from '../utils/cloud.png';
import MountainImage from '../utils/mountain.png';

const TopContainer = () => {
  return (
    <Fragment>
      <div className='top-container'>
        <img className='top-cloud' src={CloudImage} alt='cloud'></img>
        <div className='title-text'>
          <h1>I'm Subhangi</h1>
          <h2>
            a <span className='pro'>pro</span>grammer.
          </h2>
        </div>
        <img className='bottom-cloud' src={CloudImage} alt='cloud'></img>
        <img className='mountain' src={MountainImage} alt='mountain'></img>
      </div>
    </Fragment>
  );
};

export default TopContainer;
