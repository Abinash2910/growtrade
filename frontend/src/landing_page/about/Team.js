import React from 'react'

function Team() {
    return ( 
        <div className="container">
      <div className="row p-2 mt-5 ">
        <h2 className="text-center">
          People
        </h2>
      </div>
       <div className="row p-2 text-muted" style={{lineHeight:"1.8", fontSize:"1.1em"}}>
        <div className="col-6 p-5 text-center">
          <img src='Media/abimodified.png' style={{width:"80%"}}/>
          <h4 className='mt-4'>Abinash Behera</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
            <p>
             Abinash bootstrapped and founded GrowTrade in 2025 to overcome the hurdles he faced during his decade long stint as a trader. Today, GrowTrade has changed the landscape of the Indian broking industry.    
            </p>
            <p>
             What started as a simple idea during my MCA journey has grown into a platform helping people trade with confidence.
            </p>
            <p>
                Playing basketball is his zen.
            </p>
            <p> Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
        </div>
       
      </div>
    </div>
     );
}

export default Team;