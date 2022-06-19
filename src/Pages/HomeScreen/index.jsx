import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Scss/Pages/_homepage.scss';
import HeaderImage from '../../Images/image 27.svg';
import Button from '../../Component/Button';

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className="header">
        <div className="header__part1">
          <h1>Congratulations</h1>
          <p>
            You have integrated kcommunicate to your business. Delight your
            customers with intelligent chat and support
          </p>
          <Button
            onClick={() => {
              navigate({
                pathname: '/app-setting',
              });
            }}
          >
            Update App Id
          </Button>
          <div className="header__part1__contact">
            <span>Need help?</span>
            <a href="/app-setting">Contact us</a>
          </div>
        </div>
        <div className="header__part2">
          <img src={HeaderImage} alt="kcommunicate header" />
          <span>Kcommunicate feature and capabilities</span>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
