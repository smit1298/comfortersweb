import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Icon } from "@iconify/react";
// import "./headerTop.css";

const social = () => {
  return(
    <div className="container-flui">
      <div className="row">
        <div className="header-info-right mx-4">
          <ul className="header-social list-group list-group-horizontal ms-2">
            <li className="list-group ms-2">
              <a href="http://">
                <Icon icon="jam:facebook-circle" color="#000" width="25" />
              </a>
            </li>
            <li className="list-group ms-2">
              <a href="http://">
                <Icon icon="jam:twitter-circle" color="#000" width="25" />
              </a>
            </li>
            <li className="list-group ms-2">
              <a href="http://">
                <Icon icon="jam:linkedin-circle" color="#000" width="25" />
              </a>
            </li>
            <li className="list-group ms-2">
              <a href="http://">
                <Icon icon="la:instagram" color="#000" width="25" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default social;

