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
          <div className="collapse" id="collapseExample">
            <div className=" row card card-body">
              <div className="col-md-3">
                OFFICE
              </div>
              <div className="col-md-3">
                CHURCH
              </div>
              <div className="col-md-3">
                CAR
              </div>
            </div>
          </div>
        </ul>
      </div>
      <div className="float-right col-md-6">
        <span className="call ">Call: +234803 451 8124; +234 805 851 9150</span>
        <button className="book-button" href="#collapseExample" data-toggle="collapse">Buy a Space</button>
        <div className="collapse" id="collapseExample">
            <div className="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        <button className="book-button">Plans and pricing</button>
      </div>
    </div>
  );
};

export default Navbar;
