import { Fragment } from 'react';

import CatTyping from '../utils/cat-typing.gif';
import ProfilePic from '../utils/subhangi-circle.png';
import ProfileComponent from '../profile/ProfileComponent';

const MidContainer = () => {
  return (
    <Fragment>
      <div className='middle-container'>
        <ProfileComponent profilePic={ProfilePic} />
        <hr></hr>
        <div className='skills'>
          <h2>My Skills</h2>
          <div className='parent'>
            <div className='typing'>
              <img src={CatTyping} alt='typing cat'></img>
            </div>
            <div className='coding'>
              <h3>Design &amp; Development</h3>
              <ul>
                <li>C</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>ReactJS</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
          <hr></hr>
          <div className='contact-me'>
            <h2>Bare Minimum Project</h2>
            <h3>
              This portfolio build is my first step towards learning ReactJS,
              and I will be building more projects on ReactJS to expand my
              knowledge in this field.
            </h3>
            <p className='contact-message'></p>
            <a className='btn' href='mailto:dassubhangi929@gmail.com'>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MidContainer;
