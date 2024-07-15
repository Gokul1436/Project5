import React from 'react'
import'./Top.css'
import Navbar from './Navbar'

const Topselling = () => {
  return (
    <>
    <div>
       <Navbar />
       <div className="top">
        <h1 className='top-header'>TOPSELLERS</h1><br/>
        <div className="container car">
         
         
          <div className="card" style={{width:"18rem"}}>
            <img src="src/assets/product2 (4).jpeg" class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
            </div>
          </div>


          <div className="card" style={{width:"18rem"}}>
            <img src="src/assets/product 4.jpeg" class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
            </div>
          </div>


          <div className="card" style={{width:"18rem"}}>
            <img src="src/assets/product2 (3).jpeg" class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
            </div>
          </div>


          <div className="card" style={{width:"18rem"}}>
            <img src="src/assets/product2 (1).jpeg" class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
            </div>
          </div> 
          <br/>

        </div>
        <br/>


        <div className="container car">
         
         
         <div className="card" style={{width:"18rem"}}>
           <img src="src/assets/pro1 (1).jpeg" class="card-img-top" alt="..." />
           <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
           </div>
         </div>


         <div className="card" style={{width:"18rem"}}>
           <img src="src/assets/pro1 (2).jpeg" class="card-img-top" alt="..." />
           <div className="card-body cf">
             <h5 className="card-title">Card title</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
           </div>
         </div>


         <div className="card" style={{width:"18rem"}}>
           <img src="src/assets/pro1 (3).jpeg" class="card-img-top" alt="..." />
           <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
           </div>
         </div>


         <div className="card" style={{width:"18rem"}}>
           <img src="src/assets/pro1 (4).jpeg" class="card-img-top" alt="..." />
           <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
           </div>
         </div> 
         <br/>

       </div>

      

      </div>
      <br/><hr className='hr'/><br/>


    </div>




   
    </>
  )
}

export default Topselling