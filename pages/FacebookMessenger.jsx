import React, { useEffect } from 'react';

export const FacebookMessenger = () => {
  useEffect(() => {
    // Load the Facebook SDK asynchronously
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '666725098365525', // Replace with your Facebook App ID
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v12.0', // Replace with the desired version of the Facebook SDK
      });
    };

    // Load the SDK asynchronously
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  return (
    <div
      className="fb-page"
      data-href="https://www.facebook.com/YourPage"
      data-tabs="messages"
      data-width=""
      data-height=""
      data-small-header="true"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote
        cite="https://www.facebook.com/YourPage"
        className="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/YourPage">Your Page Name</a>
      </blockquote>
    </div>
  );
};
