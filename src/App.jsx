
import './App.css'
import Navbar from './Compounts/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <div>
        <div className="container-fuild main">
          <img src="/src/assets/king.png" alt="" className='king' />
          <h1 className="display sol">SPARKEL WITH<br /> <spam>AESTHETIC</spam></h1>
          <p className='head-para'>Best timeless elegance with DEZZO JEWEL' s exquisite jewelry, where every piece tells<br/> a story of luxury and sophistication."</p>
          <button className="btn btn-warning home-btn">View More</button>

        </div>



        {/* topsellinhg */}
        <div className="top">
          <h1 className='top-header'>TOPSELLERS</h1>
          <hr className='tophr' /><br />
          <div className="container car">


            <div className="card" style={{ width: "18rem" }}>
              <img src="src/assets/product2 (4).jpeg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Gold Chains</h5>
                <p className="card-text">Delicate and charming, these chains are designed for little ones.
                </p>
                <button className='btn btn-warning to-btn'>Explore</button>
              </div>
            </div>


            <div className="card" style={{ width: "18rem" }}>
              <img src="src/assets/product 4.jpeg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Gold Chains</h5>
                <p className="card-text">Delicate and charming, these chains are designed for little ones.
                </p>
                <button className='btn btn-warning to-btn'>Explore</button>
              </div>
            </div>


            <div className="card" style={{ width: "18rem" }}>
              <img src="src/assets/product2 (2).jpeg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Gold Chains</h5>
                <p className="card-text">Delicate and charming, these chains are designed for little ones.
                </p>
                <button className='btn btn-warning to-btn'>Explore</button>
              </div>
            </div>


            <div className="card" style={{ width: "18rem" }}>
              <img src="src/assets/pro1 (4).jpeg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Gold Chains</h5>
                <p className="card-text">Delicate and charming, these chains are designed for little ones.
                </p>
                <button className='btn btn-warning to-btn'>Explore</button>
              </div>
            </div>
            <br />

          </div>
          <br />


          <div className="container car">


            <div className="card" style={{ width: "18rem" }}>
              <img src="src/assets/pro1 (1).jpeg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Earrings</h5>
                <p className="card-text">Adorable and safe, these earrings feature playful designs perfect for young fashionistas.</p>
                <button className='btn btn-warning to-btn'>Explore</button>
              </div>
            </div>


            <div className="card" style={{ width: "18rem" }}>
              <img src="src/assets/pro1 (2).jpeg" class="card-img-top" alt="..." />
              <div className="card-body cf">
                <h5 className="card-title">Diamond chains</h5>
                <p className="card-text">Adorable and safe, these earrings feature playful designs perfect for young fashionistas.</p>
                <button className='btn btn-warning to-btn'>Explore</button>
              </div>
            </div>


            <div className="card" style={{ width: "18rem" }}>
              <img src="src/assets/pro1 (3).jpeg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Earrings</h5>
                <p className="card-text">Adorable and safe, these earrings feature playful designs perfect for young fashionistas.</p>
                <button className='btn btn-warning to-btn'>Explore</button>
              </div>
            </div>


            <div className="card" style={{ width: "18rem" }}>
              <img src="src/assets/pro1 (3).jpeg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Earrings</h5>
                <p className="card-text">Adorable and safe, these earrings feature playful designs perfect for young fashionistas.</p>
                <button className='btn btn-warning to-btn'>Explore</button>

              </div>
            </div>
            <br />

          </div>



        </div>
        <br /><br />


        {/* <div className="container">

          <div ></div>
          <br/><br/>
          <img src="src/assets/off (1).jpeg" className="off" alt="" />
        </div> */}

      </div>



      <div className="container new">
        <h1 className='bg'>Vist oru customer  <spam>Gallery</spam></h1>
        <div className="con">

          <video controls width="100%" height={"500px"}>
            {/* <source src="/video-example.webm" type="video/webm" /> */}
            <source src="/src/assets/Glint and Glow Jewellery presentation.mp4"  className="video"type="video/mp4"
            />
            Sorry, your browser doesn't support videos.
          </video>



        </div>
      </div>
     
      <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   <br/>   




      <div className="container-fuild">
        <div className="navbar">
          <nav>
            <button className='btn btn-warning nv1'>Men</button>
            <button className='btn btn-warning nv'>Women</button>
            <button className='btn btn-warning nv'>kids</button>
          </nav>
        </div>

        <div className="conntainer">
          <h1 className='men-header'>Mens section</h1>
          <hr className='menhr' />
          <div className="card1">



            <div class="card mb-3 me1" style={{ maxWidth: "450px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="src/assets/ring1 (1).jpeg" class=" men-img img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Platinum Rings</h5>
                    <p class="card-text"> Timeless elegance and unmatched durability, crafted for the modern man who values both style and resilience.</p>
                    <p className="card-text price " style={{ display: "inline-block" }}><small >Price 59,000</small></p>
                    <button className='btn btn-warning buy' style={{ display: "inline-block" }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>


            <div class="card mb-3 me1" style={{ maxWidth: "450px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="src/assets/ring1 (2).jpeg" class=" men-img img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Platinum Rings</h5>
                    <p class="card-text"> Timeless elegance and unmatched durability, crafted for the modern man who values both style and resilience.</p>
                    <p className="card-text price " style={{ display: "inline-block" }}><small >Price 64,000</small></p>
                    <button className='btn btn-warning buy' style={{ display: "inline-block" }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>





            <div class="card mb-3 me1" style={{ maxWidth: "450px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="src/assets/ring1 (3).jpeg" class=" men-img img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Platinum Rings</h5>
                    <p class="card-text"> Timeless elegance and unmatched durability, crafted for the modern man who values both style and resilience.</p>
                    <p className="card-text price " style={{ display: "inline-block" }}><small >Price 75,000</small></p>
                    <button className='btn btn-warning buy' style={{ display: "inline-block" }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>





            <div class="card mb-3 me1" style={{ maxWidth: "450px", maxHeight: "3000px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="src/assets/ring1 (4).jpeg" class="img-fluid men-img rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Diamond Bracelets</h5>
                    <p class="card-text">Radiant and timeless, these bracelets add a touch of sparkle and grace, perfect for elevating any outfit with a hint of glamour.</p>
                    <p className="card-text price " style={{ display: "inline-block" }}><small >Price 121,000</small></p>
                    <button className='btn btn-warning buy' style={{ display: "inline-block" }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>


            <div class="card mb-3 me1" style={{ maxWidth: "450px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="src/assets/ring1 (5).jpeg" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Diamond Bracelets</h5>
                    <p class="card-text">Radiant and timeless, these bracelets add a touch of sparkle and grace, perfect for elevating any outfit with a hint of glamour.</p>
                    <p className="card-text price " style={{ display: "inline-block" }}><small >Price 132,000</small></p>
                    <button className='btn btn-warning buy' style={{ display: "inline-block" }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>





            <div class="card mb-3 me1" style={{ maxWidth: "450px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="src/assets/ring1 (6).jpeg" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Diamond Bracelets</h5>
                    <p class="card-text">Radiant and timeless, these bracelets add a touch of sparkle and grace, perfect for elevating any outfit with a hint of glamour.</p>
                    <p className="card-text price " style={{ display: "inline-block" }}><small >Price 180,000</small></p>
                    <button className='btn btn-warning buy' style={{ display: "inline-block" }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>





          </div>
        </div>


        {/* end of mens */}



        <div className="conntainer">
          <h1 className='men-header'>Women section</h1>
          <hr className='menhr' />
          <div className="card1">



            <div class="card mb-3 me1" style={{ maxWidth: "450px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="src/assets/ring1 (21).jpeg" class=" men-img img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Gold Watches</h5>
                    <p class="card-text">Exquisite timepieces that combine luxury and precision, perfect for making a sophisticated statement at any occasion.</p>
                    <p className="card-text price " style={{ display: "inline-block" }}><small >Price 180,000</small></p>
                    <button className='btn btn-warning buy' style={{ display: "inline-block" }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>


            <div class="card mb-3 me1" style={{ maxWidth: "450px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="src/assets/ring1 (22).jpeg" class=" men-img img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Gold Watches</h5>
                    <p class="card-text">Exquisite timepieces that combine luxury and precision, perfect for making a sophisticated statement at any occasion.</p>
                    <p className="card-text price " style={{ display: "inline-block" }}><small >Price 180,000</small></p>
                    <button className='btn btn-warning buy' style={{ display: "inline-block" }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>





            <div class="card mb-3 me1" style={{ maxWidth: "450px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="src/assets/ring1 (17).jpeg" class=" men-img img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Gold Watches</h5>
                    <p class="card-text">Exquisite timepieces that combine luxury and precision, perfect for making a sophisticated statement at any occasion.</p>
                    <p className="card-text price " style={{ display: "inline-block" }}><small >Price 180,000</small></p>
                    <button className='btn btn-warning buy' style={{ display: "inline-block" }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>





            <div class="card mb-3 me1" style={{ maxWidth: "450px", maxHeight: "3000px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="src/assets/ring1 (11).jpeg" class="img-fluid men-img rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Women's Bracelets</h5>
                    <p class="card-text">Elegant and stylish, these bracelets range from delicate bangles to bold cuffs, adding a touch of sophistication and charm to any look.</p>
                    <p className="card-text price " style={{ display: "inline-block" }}><small >Price 164,000</small></p>
                    <button className='btn btn-warning buy' style={{ display: "inline-block" }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>


            <div class="card mb-3 me1" style={{ maxWidth: "450px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="src/assets/ring1 (10).jpeg" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Women's Bracelets</h5>
                    <p class="card-text">Elegant and stylish, these bracelets range from delicate bangles to bold cuffs, adding a touch of sophistication and charm to any look.</p>
                    <p className="card-text price " style={{ display: "inline-block" }}><small >Price 87,000</small></p>
                    <button className='btn btn-warning buy' style={{ display: "inline-block" }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>





            <div class="card mb-3 me1" style={{ maxWidth: "450px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="src/assets/ring1 (13).jpeg" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Women's Bracelets</h5>
                    <p class="card-text">Elegant and stylish, these bracelets range from delicate bangles to bold cuffs, adding a touch of sophistication and charm to any look.</p>
                    <p className="card-text price " style={{ display: "inline-block" }}><small >Price 37,000</small></p>
                    <button className='btn btn-warning buy' style={{ display: "inline-block" }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>





          </div>
        </div>




        {/* end of women */}







        <div className="conntainer">
          <h1 className='men-header'>Kids section</h1>
          <hr className='menhr' /> 
          <div className="card1">



            <div class="card mb-3 me1" style={{ maxWidth: "450px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="src/assets/ring1 (15).jpeg" class=" men-img img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Gold Chains</h5>
                    <p class="card-text">Delicate and charming, these chains are designed for little ones, adding a touch of elegance to their everyday outfits.</p>
                    <p className="card-text price " style={{ display: "inline-block" }}><small >Price 120,000</small></p>
                    <button className='btn btn-warning buy' style={{ display: "inline-block" }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>


            <div class="card mb-3 me1" style={{ maxWidth: "450px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="src/assets/ring1 (18).jpeg" class=" men-img img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Gold Chains</h5>
                    <p class="card-text">Delicate and charming, these chains are designed for little ones, adding a touch of elegance to their everyday outfits.</p>
                    <p className="card-text price " style={{ display: "inline-block" }}><small >Price 220,000</small></p>
                    <button className='btn btn-warning buy' style={{ display: "inline-block" }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>





            <div class="card mb-3 me1" style={{ maxWidth: "450px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="src/assets/ring1 (19).jpeg" class=" men-img img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Gold Chains</h5>
                    <p class="card-text">Delicate and charming, these chains are designed for little ones, adding a touch of elegance to their everyday outfits.</p>
                    <p className="card-text price " style={{ display: "inline-block" }}><small >Price 132,000</small></p>
                    <button className='btn btn-warning buy' style={{ display: "inline-block" }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>





            <div class="card mb-3 me1" style={{ maxWidth: "450px", maxHeight: "3000px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="src/assets/ring1 (20).jpeg" class="img-fluid men-img rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Earrings</h5>
                    <p class="card-text">Adorable and safe, these earrings feature playful designs perfect for young fashionistas, ensuring comfort and style.</p>
                    <p className="card-text price " style={{ display: "inline-block" }}><small >Price 90,000</small></p>
                    <button className='btn btn-warning buy' style={{ display: "inline-block" }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>


            <div class="card mb-3 me1" style={{ maxWidth: "450px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="src/assets/ring1 (16).jpeg" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Earrings</h5>
                    <p class="card-text">Adorable and safe, these earrings feature playful designs perfect for young fashionistas, ensuring comfort and style.</p>
                    <p className="card-text price " style={{ display: "inline-block" }}><small >Price 173,000</small></p>
                    <button className='btn btn-warning buy' style={{ display: "inline-block" }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>





            <div class="card mb-3 me1" style={{ maxWidth: "450px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="src/assets/ring1 (14).jpeg" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Earrings</h5>
                    <p class="card-text">Adorable and safe, these earrings feature playful designs perfect for young fashionistas, ensuring comfort and style.</p>
                    <p className="card-text price " style={{ display: "inline-block" }}><small >Price 124,000</small></p>
                    <button className='btn btn-warning buy' style={{ display: "inline-block" }}>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>





          </div>
        </div>


        {/* end of kids */}

        <hr className='hr' />
      </div>






      <div className="container-fluid">

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="src/assets/off (1).jpeg" class="d-block w-80 bb" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="src/assets/off (2).jpeg" class="d-block w-80 bb" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="src/assets/off (3).jpeg" class="d-block w-80 bb" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon vf" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon vf" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>



      {/* end of scrol */}



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

export default App
