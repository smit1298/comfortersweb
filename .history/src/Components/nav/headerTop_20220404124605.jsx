import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Icon } from '@iconify/react';
import './headerTop.css';
import Socials from '../socials/socials'
// import { Container, Row, Col } from 'react-bootstrap';

const Top = () => {
  return (
    <div className="container-fluid headertop">
      <div className="row">
        <div className="d-sm-flex justify-content-between align-items-center mt-1 mb-1 pt-1 pb-1">
          <div className="header-info-left ms-4">
            <ul className="list-group list-group-horizontal">
              <li className="leftList me-4">
                <Icon icon="noto:telephone-receiver" color="#000" width="15" />
                +2348130134671
              </li>
              <li className="list-group">info@ayangbayi.com</li>
            </ul>
          </div>

         <Socials></Socials>
        </div>
      </div>
    </div>
  );
};

export default Top;
