import react, { useEffect, useState } from 'react'

const Home = ()=>{

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{setProducts(json)})
    }, [])
    console.log(products)
    return(
        <div>
            <div className='nav-sec'>
               <h1>Products</h1>
               <img className='cartss-logo' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/256/external-cart-100-most-used-icons-flaticons-lineal-color-flat-icons.png" alt="" />
            
            </div>
            <div className="product-box">

                {products.map((productList,index)=>
                    <div className="product-container" key={productList.id}>
                        <div className="product-image">
                            <img src={productList.image} alt="" />
                        </div>
                        <div className="product-title">
                        <p> {productList.title}</p>
                        </div>
                        <div className="product-price">
                            <p>{productList.price}$</p>
                        </div>
                        <div className="add-to-cart">
                            <button>Add to cart</button>
                        </div>
                    </div>

                )}

                
                

            </div>

        </div>
    )
}

export default Home