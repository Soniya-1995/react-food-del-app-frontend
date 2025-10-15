import React, { useState, useEffect } from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import Card from '../../Component/Cards/Card'
import './home.css'

const BASE_URL = import.meta.env.VITE_BACKEND_URL;


const Home = () => {
  const [foodCat, SetFoodCat] = useState([]);
  const [foodItem, SetFoodItem] = useState([]);
  const [search,SetSearch] = useState('');

  const loadData = async () => {
    let response = await fetch(`${BASE_URL}/allfooditem`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    //console.log(response);
    SetFoodItem(response);

  }

  const catData = async () => {
    let response1 = await fetch(`${BASE_URL}/allcategory`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response1 = await response1.json();
    //console.log(response1);
    SetFoodCat(response1);
  }
  useEffect(() => {
    loadData();
    catData();
  }, [])


  return (
    <div>
      <Navbar />
       <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{objectFit:"contain !important"}} >

  <div className="carousel-inner" id='carousel'>
    <div className='carousel-caption' style={{zIndex:"10"}}>
         <div class="d-flex justify-content-center" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{SetSearch(e.target.value)}}/>
      {/*<button class="btn btn-outline-success text-white" type="submit">Search</button>*/}
    </div>
    </div>
    
    <div className="carousel-item active">
      <img src="https://media.istockphoto.com/id/1401165547/photo/rajasthani-dish-cusine-meal-called-dal-baati-churma.jpg?s=612x612&w=0&k=20&c=RsA_SlkeDOz2KAa-ywkqVWCOA7cUbHjjAP4oTN2PN4A=" style={{filter:"brightness(30%)"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://blog.swiggy.com/wp-content/uploads/2024/10/Image-6_Besan-Chilla-with-filling-1024x538.png"  style={{filter:"brightness(30%)"}} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.picxy.com/cache/2021/11/2/c2e75ef3762e54b14662b1e9589c184a.jpg"  style={{filter:"brightness(30%)"}} className="d-block w-100" alt="..."/>
    </div>
     <div className="carousel-item">
      <img src="https://assets.cntraveller.in/photos/640f282d25a3b7de0fbdba8b/1:1/w_1080,h_1080,c_limit/Jodhpur%20Rajasthan%20Cuisine.png"  style={{filter:"brightness(30%)"}} className="d-block w-100" alt="..."/>
    </div>
     <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/585328296/photo/raj-kachori.jpg?s=612x612&w=0&k=20&c=gZNfQfhbVjp7Zyb9_NAzqC8U5lD_0xnuaNCLXyCUTD8="  style={{filter:"brightness(30%)"}} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      <div className='container'>
        {
          foodCat.length > 0
            ? foodCat.map((i) => {
              return (
                <div className='row mb-3'>
                <div key={i._id} className='fs-3 m-3'>
                  {i.CategoryName}
                </div>
                <hr />
                 {
                foodItem.length >0 
                ?foodItem.filter((item)=> (item.CategoryName == i.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                .map(filterItems=>{
                  return(
                    <div key ={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                           <Card 
                                foodItem = {filterItems}
                                options = {Array.isArray(filterItems.options) ? filterItems.options[0] : filterItems.options || {}}
                           />
                    </div>
                  )
                })
                :<div>No such data found</div>
              }
               
                </div>
              )
              
            }) : ""

        }
        
       
      </div>
      <Footer />
    </div>
  )
}

export default Home
