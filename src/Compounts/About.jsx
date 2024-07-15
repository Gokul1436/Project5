import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
<>
<Navbar/>
<div className="container-fluid">
        <img src='/src/assets/akka (1).jpeg' className='akka' />
        <img src='/src/assets/akka (2).jpeg' className='akka' />
        <img src='/src/assets/akka (3).jpeg' className='akka' />
        <img src='/src/assets/akka (4).jpeg' className='akka' />
        <img src='/src/assets/akka (5).jpeg' className='akka' />
      </div>





      <div className="container-fluid">
        <div className="footer">
          <div className="row">
            <div className="col-3">
              <h3 className='sss'> About DEZZO JEWELS</h3>
              <p className='ss'>Dezzo jewels store,cnp,Tamilnadu</p>
              <p className='ss'>phone:+91 9876543210</p>
              <p className='ss'>Email:dezzojewels@gmail.com</p>
              <img src="/src/assets/icon.png" className="icon"alt="" />
            </div>
            <div className="col-3">
              <h3 className='sss'>Information</h3>
              <ul>
                <li className='li'>About us</li>
                <li className='li'>blog</li>
                <li className='li'>conduct</li>
                <li className='li'>service</li>
                <li className='li'>collection</li>

              </ul>

            </div>
            <div className="col-3">
            <h3 className='sss'>My Account </h3>
              <ul>
                <li className='li'>My Account</li>
                <li className='li'>Contant</li>
                <li className='li'>Wishlist</li>
                <li className='li'>Portfilio</li>
                <li className='li'>Checkout</li>

              </ul>
            </div>
            <div className="col-3">
            <h3 className='sss'>Top Rated Prodect</h3>
            <div className="row">
              <div className="col-3">
              <img src="/src/assets/pro1 (1).jpeg" className='rat1' alt="" />
              </div>
              <div className="col-6">
              <h4 className='q'>Womens </h4>
              <h5 className='q'> Earrings:</h5>
              <h5 className='qq'> Rs.72000</h5>
              </div>
            </div><br/>
            <div className="row">
              <div className="col-3">
              <img src="/src/assets/pro1 (3).jpeg" className='rat1' alt="" />
              </div>
              <div className="col-6">
              <h4 className='q'>Womens </h4>
              <h5 className='q'> Earrings:</h5>
              <h5 className='qq'> Rs.89000</h5>
              </div>
            </div>
            
            
          
            
            </div>
          </div>

        </div>
      </div>
</>
  )
}

export default About