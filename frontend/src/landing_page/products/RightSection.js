import React from 'react'

function RightSection({
    imageURL,
    productName,
    productDesription,
    link1Text,
    link2Text,
}) {
    return ( 
        <div className='container'>
        <div className='row'>
            <div className='col-6 p-5' >
                <div style={{marginTop:"160px",marginLeft:"-30px"}}>
                <h4 className='mb-3'>{productName}</h4>
                <p style={{ lineHeight:"1.8", fontSize:"1.1em"}}>{productDesription}</p>
                <div>
                    {link1Text &&(
                <a href={link1Text}style={{textDecoration:"none", fontSize:"1.1em"}}>LearnMore<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>)}
                    {link2Text &&(
                <a href={link2Text}style={{ textDecoration:"none" ,fontSize:"1.1em"}}>KiteConnect<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>)}
                </div>
                
            </div>
            </div>
            <div className='col-6 mt-5'>
                <div style={{marginLeft:"-30px"}}>
                <img src={imageURL}/>
                </div>
            </div>
            </div>
            
        </div>
     );
}

export default RightSection;