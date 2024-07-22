import React from 'react';
import './Feature1.css';


const Feature1 = () => {

    return (
      
      <div>
        <div className="feature1">
          <div className="row">
            <div className="text-col">
              <h2>Enjoy on Your TV</h2>
              <p>
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
            </div>
            <div className="img-col">
              <img src="header-card/feature-1.png" alt="" />
            </div>
          </div>
        </div>

        {/* Feature2 */}
        <div className="feature1">
          <div className="row">
            <div className="img-col">
              <img src="header-card/feature-2.png" alt="" />
            </div>
            <div className="text-col">
              <h2>Download your shows to watch offline</h2>
              <p>
                Save your favourites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3 */}

        <div className="feature1">
          <div className="row">
            <div className="text-col">
              <h2>Watch everywhere</h2>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <div className="img-col">
             <img src="header-card/feature-3.png" alt="" />
            </div>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="feature1">
          <div className="row">
            <div className="img-col">
              <img src="header-card/feature-4.png" alt="" />
            </div>
            <div className="text-col">
              <h2>Create profiles for kids</h2>
              <p>
                Send children on adventures with their favourite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Feature1;