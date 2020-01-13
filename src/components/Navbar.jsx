import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const container = useRef()

  useEffect(() => {
    document.addEventListener("scroll", e => {
      if (window.pageYOffset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : null} `} ref={container} >
      <div className="header col-md-2">ServicePro</div>
      <div className="body col-md-4">
        <ul>
          <li href="#collapseExample" data-toggle="collapse">
            Products
          </li>
        </ul>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <div className="row">
              <div className="col-md-3">
                EXECUTIVE OFFICE CLASSIC
              </div>
              <div className="col-md-3">
                EXECUTIVE OFFICE DELUX
              </div>
              <div className="col-md-3">
                MUSIC STUDIO
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="float-right col-md-6">
        <span className="call ">Call: 0803 451 8124; 0805 851 9150</span>
        <button className="book-button" href="#collapseExample" data-toggle="collapse">Buy a Space</button>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">

          </div>
        </div>
        <button className="book-button">Plans and pricing</button>
      </div>
    </div>
  );
};

export default Navbar;
