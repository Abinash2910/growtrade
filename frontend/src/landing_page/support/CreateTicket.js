
import React from 'react';
import { FaPlus, FaUser, FaPaperPlane, FaRupeeSign, FaChartPie, FaCoins } from 'react-icons/fa';

function CreateTicket() {
  return (
    <div className="container py-4">
      {/* Main Section */}
      <div className="row">
        {/* Left Accordion Section */}
        <div className="col-md-8">
          <div className="accordion" id="supportAccordion">
            
            {/* Account Opening */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#accountOpening"
                >
                  <FaPlus className="me-2 text-primary" /> Account Opening
                </button>
              </h2>
              <div
                id="accountOpening"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul className="ms-3" style={{ listStyleType: 'disc', wordSpacing: '4px' }}>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Resident individual</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Minor</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Non Resident Indian (NRI)</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Company, Partnership, HUF and LLP</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Glossary</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Zerodha Account */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#zerodhaAccount"
                >
                  <FaUser className="me-2 text-primary" /> Your Zerodha Account
                </button>
              </h2>
              <div
                id="zerodhaAccount"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul className="ms-3" style={{ listStyleType: 'disc', wordSpacing: '4px' }}>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Your Profile</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Account modification</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Client Master Report (CMR) and Depository Participant (DP)</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Nomination</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Transfer and conversion of securities</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Kite */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#kite"
                >
                  <FaPaperPlane className="me-2 text-primary" /> Kite
                </button>
              </h2>
              <div
                id="kite"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul className="ms-3" style={{ listStyleType: 'disc', wordSpacing: '4px' }}>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">IPO</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Trading FAQs</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Margin Trading Facility (MTF) and Margins</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Charts and orders</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Alerts and Nudges</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">General</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Funds */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#funds"
                >
                  <FaRupeeSign className="me-2 text-primary" /> Funds
                </button>
              </h2>
              <div
                id="funds"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul className="ms-3" style={{ listStyleType: 'disc', wordSpacing: '4px' }}>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Add money</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Withdraw money</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Add bank accounts</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">eMandates</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Console */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#console"
                >
                  <FaChartPie className="me-2 text-primary" /> Console
                </button>
              </h2>
              <div
                id="console"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul className="ms-3" style={{ listStyleType: 'disc', wordSpacing: '4px' }}>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Portfolio</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Corporate actions</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Funds statement</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Reports</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Profile</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Segments</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Coin */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#coin"
                >
                  <FaCoins className="me-2 text-primary" /> Coin
                </button>
              </h2>
              <div
                id="coin"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul className="ms-3" style={{ listStyleType: 'disc', wordSpacing: '4px' }}>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Mutual funds</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">National Pension Scheme (NPS)</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Fixed Deposit</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Features on Coin</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">Payments and Orders</a>
                    </li>
                    <li className="text-primary">
                      <a href="#" className="text-decoration-none">General</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-md-4">
          {/* Notices */}
          <div className="p-3 mb-3 border-start border-4 border-warning bg-light">
            <ul className="mb-0">
              <li>
                <a href="#">Exclusion of F&O contracts on 8 securities from August 29, 2025</a>
              </li>
              <li>
                <a href="#">Revision in expiry day of Index and Stock derivatives contracts</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="card">
            <div className="card-body">
              <h6 className="fw-bold">Quick links</h6>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none">1. Track account opening</a></li>
                <li><a href="#" className="text-decoration-none">2. Track segment activation</a></li>
                <li><a href="#" className="text-decoration-none">3. Intraday margins</a></li>
                <li><a href="#" className="text-decoration-none">4. Kite user manual</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
