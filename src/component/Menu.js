import React, {Fragment, useEffect,useState } from "react"
import { FaHeart } from "react-icons/fa";
import Footer from "./Footer";
import Nav from "./Navbar"
import * as userServices from '../services/userServices';
import { toast } from "react-toastify";


const userService = userServices.default


const Menu =() => {
const[categories,setCategories]=useState([])
const[chickenProducts,setChickenProducts]=useState([])
const[beefProducts,setBeefProducts]=useState([])
const[saladProducts,setSaladProducts]=useState([])
const[drinksProducts,setDrinksProducts]=useState([])
const[searchedProducts,setSearchedProducts]=useState([])
const[showSearch,setShowSearch]=useState(false)
const[dishName,setDishName]=useState("")
useEffect(()=>{
    getMenues()
    get_Chicken_Menues()
    get_Beef_Menues()
    get_Salad_Menues()
    get_Drinks_Menues()
},[])
toast.configure();


    function getMenues(){
        userService.menues().then((res)=>{
            setCategories(res.data.data)
        })
    }

    function get_Chicken_Menues(){
        userService.chicken_menu().then((res)=>{
           setChickenProducts(res.data.data.product)
        })
    }

    function get_Beef_Menues(){
        userService.beef_menu().then((res)=>{
            setBeefProducts(res.data.data.product)
        })
    }

    function get_Salad_Menues(){
        userService.salad_menu().then((res)=>{
            setSaladProducts(res.data.data.product)
        })
    }

    function get_Drinks_Menues(){
        userService.drinks_menu().then((res)=>{
            setDrinksProducts(res.data.data.product)
        })
    }
    
    function search(){
        userService.search_menu(dishName).then((res)=>{
            setShowSearch(true)
            setSearchedProducts(res.data.data.product)
        })
    }

// --------------------add too cart ----------------------------- 
    function add_item(id){
        userService.post_cart(id).then((res)=>{
            console.log(res.data)
            toast.success("added to cart", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }
// -------------------add too favourit -------------------
    
    function add_favorite(id){
        userService.post_favorite(id).then((res)=>{
            console.log(res.data)
            toast.success("added to favourite", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        })
    }

    // ---------------------------------------------------

    return(
        <Fragment>
        <Nav
        setDishName={setDishName}
        dishName={dishName}
        search={()=>search()}
        />
        
        <section className="con-menu">
            <h1 className="heading"><span>Our</span> Menu </h1>
            <ul className="title-menu">
            
                {categories.map((item)=>{
                    return(
                        <li><a href="#chicken">{item.cat_name}</a></li>
                    )
                })}
            </ul>
            

            <div className="allMenu">
            {/*--search  Meal--*/}
        {
            showSearch === true ?
        
            <div className="menlink">
            <h4 className="heading">search Meal</h4>
            <div className="chicken" id="chicken">
            
             
                    {searchedProducts.map((product)=>{
                        return(
                            <div className="script">
                            <img src={product.dish_image} alt="" width="250" height="170"/>
                            <h3>{product.dish_name}</h3>
                            <h3 className="price">price: {product.dish_price}</h3>
                            <p>{product.dish_discription} </p>
                            <button className="add-to-cart" onClick={()=>add_item(product.id)}>Add To Cart</button>
                            <button  className="icons" onClick={()=>add_favorite(product.id)}><FaHeart /></button>
                            </div>
                        )
                    })}
                
                
        </div>
        </div>
            
            :null
        }


                {/*--chicken Meal--*/}
                <div className="menlink">
                <h4 className="heading">chicken Meal</h4>
                <div className="chicken" id="chicken">
                {chickenProducts.map((product)=>{

                    return(
                        <div className="script">
                        <img src={product.dish_image} alt="" width="250" height="170"/>
                        <h3>{product.dish_name}</h3>
                        <h3 className="price">price: {product.dish_price}</h3>
                        <p>{product.dish_discription} </p>
                        <input className="add-to-cart" type="submit" name="" value="Add To Cart" onClick={()=>add_item(product.id)}/>
                        <button  className="icons" onClick={()=>add_favorite(product.id)}><FaHeart/></button>
                        </div>
                        )
                    }
                    )}
            </div>
            </div>

            {/*--meat Meal--*/}
            <h4 className="heading">Meat Meal</h4>
            <div className="meat" id="meat">
            {beefProducts.map((product)=>{

                return(
                    <div className="script">
                    <img src={product.dish_image} alt="" width="250" height="170"/>
                    <h3>{product.dish_name}</h3>
                    <h3 className="price">price: {product.dish_price}</h3>
                    <p>{product.dish_discription}</p>
                    <input className="add-to-cart" type="submit" name="" value="Add To Cart" onClick={()=>add_item(product.id)}/>
                    <button  className="icons" onClick={()=>add_favorite(product.id)}><FaHeart/></button>
                </div>
                    )
                }
                )}
            </div>


            {/*--salat--*/}
            <h4 className="heading">Vegetables</h4>
            <div className="Salad" >
                <div className="Salad-c" id="Salad">
                {saladProducts.map((product)=>{

                    return(
                        <div className="script">
                            <img src={product.dish_image} alt="" width="250" height="170"/>
                            <h3>{product.dish_name}</h3>
                            <h3 className="price">price: {product.dish_price}</h3>
                            <p>{product.dish_discription}</p>
                            <input className="add-to-cart" type="submit" name="" value="Add To Cart" onClick={()=>add_item(product.id)}/>
                            <button  className="icons" onClick={()=>add_favorite(product.id)}><FaHeart/></button>
                        </div>
                    )
                }
                )}
                </div>
            </div>

           { /*--drinks--*/}
           <h4 className="heading">Drinks</h4>
            <div className="drinks" id="drinks">


            {drinksProducts.map((product)=>{

                return(
                    <div className="script">
                        <img src={product.dish_image} alt="" width="250" height="170"/>
                        <h3>{product.dish_name}</h3>
                        <h3 className="price">price: {product.dish_price}</h3>
                        <p>{product.dish_discription}</p>
                        <input className="add-to-cart" type="submit" name="" value="Add To Cart" onClick={()=>add_item(product.id)}/>
                        <button  className="icons" onClick={()=>add_favorite(product.id)}><FaHeart /></button>
                    </div>
                )
            }
            )}
                
                
            </div>
        </div>
        <Footer/>
        
    </section>
    </Fragment>
    )
}

export default Menu