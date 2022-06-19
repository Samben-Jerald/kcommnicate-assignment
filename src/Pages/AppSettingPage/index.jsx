import React, { useState } from 'react';
import Button from '../../Component/Button';
import ChatBox from '../../Images/Frame 18.svg';
import '../../Scss/Pages/_appSetting.scss';

const AppSetting = () => {
  const URL = appId =>
    `https://my-json-server.typicode.com/prochnost55/mockJSONApi/appId/${appId}`;

  const [appId, setAppId] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);
  const displayMessage =
    !response || error ? (
      <p className="error">Invalid app Id</p>
    ) : (
      <p className="success">Change saved successfully</p>
    );

  const onChangeInputHandler = e => {
    const { value } = e.target;
    setAppId(value);
  };

  const saveChangesHandler = e => {
    if (appId) {
      setAppId('');
      fetch(URL(appId))
        .then(res => {
          if (error) {
            setError(false);
          }
          return res.json();
        })
        .then(({ success }) => {
          success = JSON.parse(success);
          if (!success) setError(!success);
          else setResponse(success);
        })
        .catch(err => {
          setError(true);
        });
    }
  };

  return (
    <>
      <main>
        <section className="appsetting">
          <h1>
            Adding live chat on your wordpress website is as easy as it gets.
          </h1>
          <p>
            Leverage the chatbot & live chat to interact with your website
            visitor and customers 24/7 by following these steps:
          </p>
          <div className="appsetting__content">
            <div className="appsetting__content_1">
              <ul>
                <li>
                  <a href="/">Login</a> to your kommunicate app and navigate to
                  the <a href="/">Settings &rarr; Install</a> section and copy
                  the APP_ID to update below
                </li>
              </ul>
              <div className="appsetting__card">
                <h3>
                  Enter your APP_ID to enable chat-based support in your product
                </h3>
                <input
                  type="text"
                  placeholder="APP_ID"
                  onChange={onChangeInputHandler}
                  value={appId}
                />
                <Button onClick={saveChangesHandler}>Save Changes</Button>
                {(response || error) && displayMessage}
              </div>
              <ul>
                <li>Voila! Live chat is now active on your website.</li>
                <li>
                  Open the website, refresh it and check out the chat plugin.
                  You will find it in the bottom-right corner.
                </li>
                <li>
                  You might need to clear cache if your using any cache plugin
                  to see your updates.
                </li>
              </ul>
            </div>
            <div className="chatbox">
              <img src={ChatBox} alt="chatbox" className="chatbox__image" />
            </div>
          </div>
        </section>
      </main>
      <hr />
      <footer className="appsetting__footer">
        <p>
          For support, please contact us via chat on our website or reach out to
          <a href="/"> support@kommunicate.io.</a>
        </p>
      </footer>
    </>
  );
};

export default AppSetting;
