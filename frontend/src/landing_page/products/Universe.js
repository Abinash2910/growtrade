import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="mt-5 text-muted" style={{fontSize:"19px"}}>
          <p>Want to know more about our technology stack? Check out the <a href="">GrowTrade.tech</a> blog.</p></div>
        <h4 className="mt-5 mb-4">The GrowTrade Universe</h4>
        <p className="" style={{fontSize:"19px"}}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 P-3 mt-5">
          <div className="mb-3">
            <img src="Media/zerodhaFundhouse.png" />
          </div>
          <p className="text-samll text-muted" style={{fontSize:"13px"}}>
            Our asset management venture <br/>that is creating simple and transparent
            index <br/> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 P-3 mt-5">
          <div className="mb-3">
            <img src="Media/sensibullLogoo.png" />
          </div>
          <p className="text-samll text-muted"style={{fontSize:"13px"}}>
            Options trading platform that lets you <br/>create strategies, analyze
            positions, and examine data <br/>points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4  P-3 mt-5">
          <div className="mb-4">
            <img src="Media/goldenpiLogo.png" />
          </div>
          <p className="text-samll text-muted "style={{fontSize:"13px"}}>
            Investment research platform <br/> that offers detailed insights on
            stocks,<br/> sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 P-3 mt-5">
          <div className="mb-3">
            <img src="Media/streakk.png" />
          </div>
          <p className="text-samll text-muted mb-5"style={{fontSize:"13px"}}>
            Systematic trading platform <br/>that allows you to create and backtest <br/>
            strategies without coding.
          </p>
        </div>
        <div className="col-4 P-3 mt-5">
          <div className="mb-3">
            <img src="Media/smallcaseLogo.png" />
          </div>
          <p className="text-samll text-muted mb-5"style={{fontSize:"13px"}}>
            Thematic investing platform <br/>that helps you invest in diversified <br/>
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4  P-3 mt-5">
          <div className="mb-3">
            <img src="Media/dittoLogo.png" />
          </div>
          <p className="text-samll text-muted mb-5"style={{fontSize:"13px"}}>
            Personalized advice on life<br/> and health insurance. No spam <br/>and no
            mis-selling. Sign up for free
          </p>
        </div>
        
        <button className='p-2 btn btn-primary fs-5 mb-5 mt-2' style={{width:"20%", margin: "0 auto"}}onClick={() => navigate("/signup")}>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
