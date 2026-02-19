import React from 'react'

function LeftSection({
    imageURL,
    productName,
    productDesription,
    link1Text,
    link2Text,
    link3Text,
    googlePlay,
    appStore,
    
}) {
    return <div className='container mt-5'>
        <div className='row'>
            
            <div className='col-6'>
                <img src={imageURL}/>
            </div>
            
            <div className='col-6 p-5 mt-5' >
                <div style={{marginLeft:"130px", marginTop:"-30px"}}>
                <h4 className='mb-3'>{productName}</h4>
                <p style={{lineHeight:"1.8", fontSize:"1.1em"}}>{productDesription}</p>
                <div>
                    {link1Text &&(
                <a href={link1Text}style={{textDecoration:"none", fontSize:"1.1em"}}>TryDemo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>)}
                    {link2Text &&(
                <a href={link2Text}style={{marginLeft: "70px" , textDecoration:"none" ,fontSize:"1.1em"}}>LearnMore <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>)}
                    {link3Text &&(
                <a href={link3Text}style={{textDecoration:"none", fontSize:"1.1em"}}>Coin<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>)}
                
                </div>
                <div className='mt-4'>  
                <a href={googlePlay}><img src="Media/googlePlayBadge.svg"/></a>
                <a href={appStore}><img src="Media/appstoreBadge.svg" style={{marginLeft: "50px"}}/></a>
                </div>
                </div>
            </div>
            
        </div>
    </div>
}

export default LeftSection;