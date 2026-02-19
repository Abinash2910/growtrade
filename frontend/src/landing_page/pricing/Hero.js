import React from 'react'

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 text-center'>
                <h3>Charges</h3>
                <h5 className='text-muted mt-2 fs-5'>List of all charges and taxes</h5>
            </div>
            <div className='row p-5 mt-5 text-center'>
                <div className='col-4'>
                    <img src='Media/pricingEquity.svg' style={{ width: "260px", height: "auto" }}/>
                    <h3>Free equity delivery</h3>
                    <p style={{lineHeight:"1.8", fontSize:"1.1em"}}>All equity delivery investments (NSE, BSE),are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img src='Media/intradayTrades.svg' style={{ width: "260px", height: "auto" }}/>
                    <h3>Intraday and F&O trades</h3>
                    <p style={{lineHeight:"1.8", fontSize:"1.1em"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    
                </div>
                <div className='col-4'>
                    <img src='Media/pricingEquity.svg' style={{ width: "260px", height: "auto" }}/>
                    <h3>Free direct MF</h3>
                    <p style={{lineHeight:"1.8", fontSize:"1.1em"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP <br/>charges.</p>
                    
                </div>
            </div>
        </div>
     );
}

export default Hero;