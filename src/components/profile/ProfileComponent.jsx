const ProfileComponent = (props) => {
  return (
    <div className='profile'>
      <img src={props.profilePic} alt='subhangi-profile-alt'></img>
      <h2>Hello.</h2>
      <p className='intro'>
        I am Subhangi Das, a passionate front-end developer with an insatiable
        thirst for knowledge and a love for exploring new technologies. With a
        keen interest in front-end development and an ongoing exploration of
        ReactJS.
      </p>
    </div>
  );
};

export default ProfileComponent;
