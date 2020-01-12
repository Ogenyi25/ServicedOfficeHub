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
    <div className="about">
      <div className="about-header">ABOUT US</div>
      <div className="row about-body">
        <div className="col-md-5 about-body-left">
          <img src={require("../assets/images/office.JPG")} alt="office" />
          <p className="p-left">
            We are a company that offers <strong>young entrepreneurs</strong> and <strong>business owners</strong>
            <br />a <strong>wide range of office solutions</strong>to take advantage of.
        These services are <strong>highly cost effective</strong> and has also proven to be of high value.</p>

          <p className="p-left">
            We are a company that offers <strong>young entrepreneurs</strong> and <strong>business owners</strong>
            <br />a <strong>wide range of office solutions</strong>to take advantage of.
        These services are <strong>highly cost effective</strong> and has also proven to be of high value.</p>
        </div>
        <div className="col-md-5 about-body-right">
          <img src={require("../assets/images/office.JPG")} alt="office" />
          <p className="p-right">
            We are a company that offers <strong>young entrepreneurs</strong> and <strong>business owners</strong>
            <br />a <strong>wide range of office solutions</strong>to take advantage of.
            These services are <strong>highly cost effective</strong> and has also proven to be of high value.
          </p>

          <p className="p-right">
            We are a company that offers <strong>young entrepreneurs</strong> and <strong>business owners</strong>
            <br />a <strong>wide range of office solutions</strong>to take advantage of.
            These services are <strong>highly cost effective</strong> and has also proven to be of high value.
          </p>
        </div>
      </div>
    </div>

    <div className="footer-container">
      <div className="row">
        <div className="col-md-3 products">
          <h5 className="products-header">PRODUCTS</h5>
          <ul>
            <li className="products-list">Virtual Office</li>
            <li className="products-list">The Serviced Office Cubicle</li>
            <li className="products-list">The Executive Office Classic</li>
            <li className="products-list">The Executive Office Delux</li>
            <li className="products-list">Visitors Lounge/Cyber Center</li>
            <li className="products-list">Conference Room</li>
            <li className="products-list">Audio Music Studio</li>
          </ul>
        </div>
        <div className="col-md-3 partners">
          <h5 className="partners-header">PARTNERS</h5>
          <ul>
            <li className="partners-list">The Executive Office Delux</li>
          </ul>
        </div>
        <div className="col-md-3 contacts">
          <h5 className="contact-header">CONTACT</h5>
          <p className="contact-list"><i class="fa fa-envelope" aria-hidden="true"></i>
            {" "} servicedofficehub@gmail.com</p>
          <p className="contact-list"><i class="fa fa-phone" aria-hidden="true"></i>
            {" "} 0803 451 8124, 0805 851 9150</p>
          <p className="contact-list"><i class="fa fa-map-marker" aria-hidden="true"></i>
            {" "} Ayibaebi Wa’ri,<br />
              Plot 67 Cascurina Close (Estate Close),
              Off Bayelsa Court,
              Gaduwa Estate,
              Gudu District,<br />
              Abuja.
              FCT.</p>
              <a href=""><i class="fa fa-facebook social" aria-hidden="true"></i></a>
              <a href=""><i class="fa fa-twitter social" aria-hidden="true"></i></a>
              <a href=""><i class="fa fa-instagram social" aria-hidden="true"></i></a>
              <a href=""><i class="fa fa-envelope social" aria-hidden="true" href=""></i></a>
        </div>

      </div>
      <div className="foot-note">
        <h6>Copyright © 2020. Created by ServicedOfficeHub</h6>
      </div>
    </div>
  </div>
);

export default Home;
