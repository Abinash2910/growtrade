import "./Footer.css";

import React from 'react'

function Footer() {
    return ( 
        <footer style={{ backgroundColor: "rgb(250, 250, 250)"}}>
        <div className="container border-top">
            <div className="row mt-4">
                <div className="col">
                    <img src="Media/pic3.png" style={{ width: "50% "}}/>
                    <p></p>
                    <p style={{ fontSize:"13px"}} > 
                        &copy;2010-2024, Not GrowTrade Broking Ltd.All rights reserved
                    </p>
                </div>
                <div className="col">
                    <p>Company</p>
                    <div  style={{ fontSize:"14px"}}>
                    <a href="" style={{textDecoration:"none"}}>About</a>
                    <br/>
                    <a href="" style={{textDecoration:"none"}}>Products</a>
                    <br/>
                    <a href="" style={{textDecoration:"none"}}>Pricing</a>
                    <br/>
                    <a href="" style={{textDecoration:"none"}}>Referral programme</a>
                    <br/>
                    <a href="" style={{textDecoration:"none"}}>Careers</a>
                    <br/>
                    <a href="" style={{textDecoration:"none"}}>GrowTrade.tech</a>
                    <br/>
                    <a href="" style={{textDecoration:"none"}}>Press & media</a>
                    <br/>
                    <a href="" style={{textDecoration:"none"}}>Zerodisa cares (CSR)</a></div>
                    
                    
                </div>
                <div className="col">
                    <p>Support</p>
                    <div style={{ fontSize:"14px"}}>
                    <a href="" style={{textDecoration:"none"}}>Contact</a>
                    <br/>
                    <a href="" style={{textDecoration:"none"}}>Support portal</a>
                    <br/>
                    <a href="" style={{textDecoration:"none"}}>Z-Connect blog</a>
                    <br/>
                    <a href="" style={{textDecoration:"none"}}>List of charges</a>
                    <br/>
                    <a href="" style={{textDecoration:"none"}}>Downloads & resources</a>
                    <br/>
                    </div>
                    
                </div>
                <div className="col">
                    <p>Account</p>
                    <div style={{ fontSize:"14px"}}>
                    <a href="" style={{textDecoration:"none"}}>Open an account</a>
                    <br/>
                    <a href="" style={{textDecoration:"none"}}>Fund transfer</a>
                    <br/>
                    <a href="" style={{textDecoration:"none"}}>60 day challenge</a>
                    <br/>
                    </div>
                    
                </div>
            </div>
            <div className='mt-5 text-muted' style={{ fontSize:"11px"}}>
            <p>GrowTrade Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through GrowTrade Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through GrowTrade Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: GrowTrade Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@growtrade.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

            <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

            <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

           
     <div className="d-flex justify-content-center gap-4 my-3 text-secondary">
      <a href="https://www.nseindia.com" className="footer-link" target="_blank" rel="noreferrer">NSE</a>
        <a href="https://www.bseindia.com" className="footer-link" target="_blank" rel="noreferrer">BSE</a>
        <a href="https://www.mcxindia.com" className="footer-link" target="_blank" rel="noreferrer">MCX</a>


      <a href="/terms-and-conditions" className="footer-link">
  Terms & Conditions
</a>

<a href="/policies-and-procedures" className="footer-link">
  Policies & Procedures
</a>

<a href="/privacy-policy" className="footer-link">
  Privacy Policy
</a>

<a href="/disclosure" className="footer-link">
  Disclosure
</a>

<a href="/investors-attention" className="footer-link">
  For Investor's Attention
</a>

<a href="/investor-charter" className="footer-link">
  Investor Charter
</a>

    </div>
            </div>
        </div>
        </footer>
     );
}

export default Footer;