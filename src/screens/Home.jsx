import React from "react";
import Navbar from "../components/Navbar";

const Home = () => (
  <div className="home">
    <Navbar />
    <div className="welcome-note">
      <h2 className="welcome-note-body">
        STAY CONNECTED WITH MODERN WORKSPACE <br />
        AT SERVICED OFFICEHUB
      </h2>
      <p className="description">Here to take you on a jolly good ride</p>
      <div className="row">
        <div className="search-input">
          <input type="text" />
        </div>
        <button className="search-submit">SEARCH</button>
      </div>
    </div>
    <div className="home-content">
      <h3 className="content-head">WHY CHOOSE SERVICED OFFICEHUB WORKSPACE?</h3>
      <div className="row content-body">
        <div className="col-md-4 order-2 order-md-1 ">
          <h5>WORKSPACES THAT SUIT YOUR BUSINESS</h5>
          <div>
            <div className="content">
              <p>
                We have the perfect network of workspace and co-working space
              </p>
            </div>
            <div className="content">
              <p>
                We have the perfect network of workspace and co-working space
              </p>
            </div>
            <div className="content">
              <p>
                We have the perfect network of workspace and co-working space
              </p>
            </div>
            <div className="content">
              <p>
                We have the perfect network of workspace and co-working space
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 image-container order-1 order-md-2 ">
          <img src={require("../assets/images/office.JPG")} alt="Office" />
          <img src={require("../assets/images/music.JPG")} alt="Music room" />
        </div>
        <div className="col-md-4 order-3 order-md-3 ">
          <h5>WE MAKE THINGS SIMPLE FOR YOU</h5>
          <div>
            <div className="content">
              <p>
                We have the perfect network of workspace and co-working space
              </p>
            </div>
            <div className="content">
              <p>
                We have the perfect network of workspace and co-working space
              </p>
            </div>
            <div className="content">
              <p>
                We have the perfect network of workspace and co-working space
              </p>
            </div>
            <div className="content">
              <p>
                We have the perfect network of workspace and co-working space
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="solutions-container">
      <div className="solution-header">OUR SOLUTION</div>
      <div className="row solution-item">
        <div className="col-md-8 image-container">
          <img src={require("../assets/images/office.JPG")} alt="Office" />
        </div>
        <div className="col-md-4 solution-content">
          <div className="header">OFFICE SPACE</div>
          <div className="description">Have a great day at work.</div>
          <div className="body-text">
            Fully-furnished, IT-enabled workspace that can grow with your
            business - for one person or an entire team.
          </div>
          <button className="read-more">READ MORE</button>
        </div>
      </div>
      <div className="row solution-item">
        <div className="col-md-4 solution-content">
          <div className="header">OFFICE SPACE</div>
          <div className="description">Have a great day at work.</div>
          <div className="body-text">
            Fully-furnished, IT-enabled workspace that can grow with your
            business - for one person or an entire team.
          </div>
          <button className="read-more">READ MORE</button>
        </div>
        <div className="col-md-8 image-container">
          <img src={require("../assets/images/office.JPG")} alt="Office" />
        </div>
      </div>
      <div className="row solution-item">
        <div className="col-md-8 image-container">
          <img src={require("../assets/images/office.JPG")} alt="Office" />
        </div>
        <div className="col-md-4 solution-content">
          <div className="header">OFFICE SPACE</div>
          <div className="description">Have a great day at work.</div>
          <div className="body-text">
            Fully-furnished, IT-enabled workspace that can grow with your
            business - for one person or an entire team.
          </div>
          <button className="read-more">READ MORE</button>
        </div>
      </div>
      <div className="row solution-item">
        <div className="col-md-4 solution-content">
          <div className="header">OFFICE SPACE</div>
          <div className="description">Have a great day at work.</div>
          <div className="body-text">
            Fully-furnished, IT-enabled workspace that can grow with your
            business - for one person or an entire team.
          </div>
          <button className="read-more">READ MORE</button>
        </div>
        <div className="col-md-8 image-container">
          <img src={require("../assets/images/office.JPG")} alt="Office" />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
