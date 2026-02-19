
import React from 'react';

function Brokerage() {
    return (
        <div className="container mt-5">
            {/* Tabs Navigation */}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="equity-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#equity"
                        type="button"
                        role="tab"
                    >
                        Equity
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="currency-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#currency"
                        type="button"
                        role="tab"
                    >
                        Currency
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="commodity-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#commodity"
                        type="button"
                        role="tab"
                    >
                        Commodity
                    </button>
                </li>
            </ul>

            {/* Tabs Content */}
            <div className="tab-content mt-3" id="myTabContent">
                {/* Equity Table */}
                <div className="tab-pane fade show active" id="equity" role="tabpanel">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Equity delivery</th>
                                <th>Equity intraday</th>
                                <th>F&amp;O - Futures</th>
                                <th>F&amp;O - Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Brokerage</td>
                                <td>Zero Brokerage</td>
                                <td>0.03% or ₹20/executed order whichever is lower</td>
                                <td>0.03% or ₹20/executed order whichever is lower</td>
                                <td>Flat ₹20 per executed order</td>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>0.1% on buy &amp; sell</td>
                                <td>0.025% on the sell side</td>
                                <td>0.02% on the sell side</td>
                                <td>
                                    <ul>
                                        <li>0.125% of the intrinsic value on exercised options</li>
                                        <li>0.1% on sell side (on premium)</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Transaction charges</td>
                                <td>NSE: 0.00297% <br /> BSE: 0.00375%</td>
                                <td>NSE: 0.00297% <br /> BSE: 0.00375%</td>
                                <td>NSE: 0.00173% <br /> BSE: 0</td>
                                <td>NSE: 0.03503% (on premium) <br /> BSE: 0.0325% (on premium)</td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI charges</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                            </tr>
                            <tr>
                                <td>Stamp charges</td>
                                <td>0.015% or ₹1500 / crore on buy side</td>
                                <td>0.003% or ₹300 / crore on buy side</td>
                                <td>0.002% or ₹200 / crore on buy side</td>
                                <td>0.003% or ₹300 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Link Section */}
                    <div className="mt-5 text-center" style={{ fontSize:"20px"}}>
                        <a href="#"  style={{textDecoration:"none"}} className="text-primary">
                            Calculate your costs upfront
                        </a>{" "}
                        using our brokerage calculator
                    </div>
                </div>

                {/* Currency Table */}
                <div className="tab-pane fade" id="currency" role="tabpanel">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Currency futures</th>
                                <th>Currency options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Brokerage</td>
                                <td>0.03% or ₹20/executed order whichever is lower</td>
                                <td>₹20/executed order</td>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>No STT</td>
                                <td>No STT</td>
                            </tr>
                            <tr>
                                <td>Transaction charges</td>
                                <td>NSE: 0.00035% <br /> BSE: 0.00045%</td>
                                <td>NSE: 0.0311% <br /> BSE: 0.001%</td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI charges</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                            </tr>
                            <tr>
                                <td>Stamp charges</td>
                                <td>0.0001% or ₹10 / crore on buy side</td>
                                <td>0.0001% or ₹10 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Commodity Table */}
                <div className="tab-pane fade" id="commodity" role="tabpanel">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Commodity futures</th>
                                <th>Commodity options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Brokerage</td>
                                <td>0.03% or ₹20/executed order whichever is lower</td>
                                <td>₹20/executed order</td>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>0.01% on sell side (Non-Agri)</td>
                                <td>0.05% on sell side</td>
                            </tr>
                            <tr>
                                <td>Transaction charges</td>
                                <td>MCX: 0.0021% <br /> NSE: 0.0001%</td>
                                <td>MCX: 0.0418% <br /> NSE: 0.001%</td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI charges</td>
                                <td>
                                    Agri: ₹1 / crore <br />
                                    Non-agri: ₹10 / crore
                                </td>
                                <td>₹10 / crore</td>
                            </tr>
                            <tr>
                                <td>Stamp charges</td>
                                <td>0.002% or ₹200 / crore on buy side</td>
                                <td>0.003% or ₹300 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Charges for Account Opening */}
            <div className="mt-5">
                <h4>Charges for account opening</h4>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Type of account</th>
                            <th>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Online account</td>
                            <td><span className="badge bg-success">FREE</span></td>
                        </tr>
                        <tr>
                            <td>Offline account</td>
                            <td><span className="badge bg-success">FREE</span></td>
                        </tr>
                        <tr>
                            <td>NRI account (offline only)</td>
                            <td>₹ 500</td>
                        </tr>
                        <tr>
                            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                            <td>₹ 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Demat AMC Section */}
            <div className="mt-5">
                <h4>Demat AMC (Annual Maintenance Charge)</h4>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Value of holdings</th>
                            <th>AMC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Up to ₹4 lakh</td>
                            <td><span className="badge bg-success">FREE*</span></td>
                        </tr>
                        <tr>
                            <td>₹4 lakh – ₹10 lakh</td>
                            <td>₹ 100 per year, charged quarterly*</td>
                        </tr>
                        <tr>
                            <td>Above ₹10 lakh</td>
                            <td>₹ 300 per year, charged quarterly</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-muted">
                    * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA).
                    BSDA account holders cannot hold more than one demat account. To learn more about BSDA,{" "}
                    <a href="#" className="text-primary"  style={{textDecoration:"none"}}>click here.</a>
                </p>
            </div>

            {/* Charges for Optional Value Added Services */}
            <div className="mt-5">
                <h4>Charges for optional value-added services</h4>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Billing Frequency</th>
                            <th>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tickertape</td>
                            <td>Monthly / Annual</td>
                            <td>Free: 0 | Pro: 249/2399</td>
                        </tr>
                        <tr>
                            <td>Smallcase</td>
                            <td>Per transaction</td>
                            <td>Buy &amp; Invest More: 100 | SIP: 10</td>
                        </tr>
                        <tr>
                            <td>Kite Connect</td>
                            <td>Monthly</td>
                            <td>Connect: 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Charges Explained Section */}
            <div className="mt-5">
                <h4>Charges explained</h4>
                <div className="row">
                <div className="col-6 p-5 text-muted" style={{marginLeft: "-40px"}}>

                <h5>Securities/Commodities transaction tax</h5>
                <p style={{ fontSize:"14px"}}>
                    Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. 
                    Charged only on selling side when trading intraday or on F&amp;O.
                </p>
                <p style={{ fontSize:"14px"}}>
                    When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
                </p>

                <h5>Transaction/Turnover Charges</h5>
                <p style={{ fontSize:"14px"}}>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                <p style={{ fontSize:"14px"}}>
                    BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. 
                    (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)
                </p>
                <p style={{ fontSize:"14px"}}>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                <p>
                    BSE has revised transaction charges for group A, B and other non exclusive scrips 
                    (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis.
                </p>
                <h5>Call & trade</h5>
                <p style={{ fontSize:"14px"}}>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
                <h5>Stamp charges</h5>
                <p style={{ fontSize:"14px"}}>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
                <h5>NRI brokerage charges</h5>
                <p style={{ fontSize:"14px"}}>
                    <ul>
                        <li>₹100 per order for futures and options.</li>
                        <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                    </ul>
                </p>
                <h5>Account with debit balance</h5>
                <p style={{ fontSize:"14px"}}>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                <h5>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h5>
                <p style={{ fontSize:"14px"}}>
                    <ul>
                        <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                        <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                        <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                    </ul>
                </p>
                <h5>Margin Trading Facility (MTF)</h5>
                <p style={{ fontSize:"14px"}}>
                    <ul>
                        <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                        <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                        <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                    </ul>
                </p>
                </div>
                <div className="col-6 p-5 text-muted" style={{marginLeft: "40px"}}>
                <h5>GST</h5>
                <p style={{ fontSize:"14px"}}>
                    Tax levied by the government on the services rendered. 18% of (brokerage + SEBI charges + transaction charges).
                </p>

                <h5>SEBI Charges</h5>
                <p style={{ fontSize:"14px"}}>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>

                <h5>DP (Depository participant) charges</h5>
                <p style={{ fontSize:"14px"}}>
                    ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, 
                    irrespective of quantity.
                </p>
                <p style={{ fontSize:"14px"}}>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                <p style={{ fontSize:"14px"}}>Debit transactions of mutual funds &amp; bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                <h5>Pledging charges</h5>
                <p style={{ fontSize:"14px"}}>₹30 + GST per pledge request per ISIN.</p>
                <h5>AMC (Account maintenance charges)</h5>
                <p style={{ fontSize:"14px"}}>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here</p>
                <p style={{ fontSize:"14px"}}>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here</p>
                <h5>Corporate action order charges</h5>
                <p style={{ fontSize:"14px"}}>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
                <h5>Off-market transfer charges</h5>
                <p style={{ fontSize:"14px"}}>₹25 per transaction.</p>
                <h5>Physical CMR request</h5>
                <p style={{ fontSize:"14px"}}>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
                <h5>Payment gateway charges</h5>
                <p style={{ fontSize:"14px"}}>₹9 + GST (Not levied on transfers done via UPI)</p>
                <h5>Delayed Payment Charges</h5>
                <p style={{ fontSize:"14px"}}>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more.</p>
                <h5>Trading using 3-in-1 account with block functionality</h5>
                <p style={{ fontSize:"14px"}}> 
                    <ul>
                        <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
                        <li>Intraday Brokerage: 0.05% per executed order.</li>
                    </ul>
                </p>
            </div>
            </div>
            </div>
            {/* Disclaimer Section */}
            <div>
                <h4>Disclaimer</h4>
                <p style={{ fontSize:"14px"}}>
                    For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges.
                </p>
                <p style={{ fontSize:"14px"}}>
                    All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens.
                </p>
            </div>
        </div> 
    );
}

export default Brokerage;

