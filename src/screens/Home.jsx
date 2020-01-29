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
                We have professional and inspiring work environments
                to suit businesses of all sizes and budget.
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
                Avoid set-up costs, capital investment and ongoing hassles:
                we eliminate the burden of a property management.
              </p>
            </div>
            <div className="content">
              <p>
                You get one contract, simple reporting, a dedicated account manager and 24/7 customer service.
              </p>
            </div>
            <div className="content">
              <p>
                Add or reduce on flexible terms depending on your current needs and future requirements.
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
          <button type="button" className="read-more" data-toggle="modal" data-target="#exampleModal">READ MORE</button>
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">OFFICE WORK SPACE</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row solution-item">
        <div className="col-md-4 solution-content">
          <div className="header">CO WORKING</div>
          <div className="description">The sociable way to work.</div>
          <div className="body-text">
            Desk space in a sociable shared office space – first come first served,
            or you can reserve your own desk.
          </div>
          <button className="read-more">READ MORE</button>
        </div>
        <div className="col-md-8 image-container">
          <img src={require("../assets/images/working.JPG")} alt="Office" />
        </div>
      </div>
      <div className="row solution-item">
        <div className="col-md-8 image-container">
          <img src={require("../assets/images/conference.JPG")} alt="Office" />
        </div>
        <div className="col-md-4 solution-content">
          <div className="header">CONFERENCE ROOM</div>
          <div className="description">Get together in a professional environment.</div>
          <div className="body-text">
            <ul>
              <li>For Meetings, Pitches or Presentations</li>
              <li>For Training, Interviewing or Events</li>
              <li>Flexible use (from an hour to a full day – and more)</li>
            </ul>
          </div>
          <button className="read-more">READ MORE</button>
        </div>
      </div>
      <div className="row solution-item">
        <div className="col-md-4 solution-content">
          <div className="header">VISITORS LOUNGE/CYBER CENTER</div>
          <div className="description">Give your guest the perfect relaxation spot.</div>
          <div className="body-text">
            Fully-furnished, relaxation spot for you and your guest, that way you stay friendly.
          </div>
          <button className="read-more">READ MORE</button>
        </div>
        <div className="col-md-8 image-container">
          <img src={require("../assets/images/visitor.JPG")} alt="Office" />
        </div>
      </div>
    </div>
    <div className="about">
      <div className="about-header">ABOUT US</div>
      <div className="row about-body">
        <div className="col-md-5 about-body-left">
          {/*<img src={require("../assets/images/office.JPG")} alt="office" />*/}
          <p className="p-left">
            We are a company that offers <strong>young entrepreneurs</strong> and <strong>business owners</strong>
            <br />a <strong>wide range of office solutions</strong>to take advantage of.
        These services are <strong>highly cost effective</strong> and has also proven to be of high value.</p>

          <p className="p-left">
            We enable people and businesses to <strong>work where they want, when they want and how they want</strong>.</p>
        </div>
        <div className="col-md-5 about-body-right">
          {/*<img src={require("../assets/images/office.JPG")} alt="office" />*/}
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
