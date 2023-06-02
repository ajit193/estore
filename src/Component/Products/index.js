import './_products.scss';

const Products = () => {
    const productData = [
        {
            pName: "jacket",
            price: 45,
            img: "image1.jpg",
        },
        {
            pName: "Purse",
            price: 50,
            img: "image2.jpg",
        },
        {
            pName: "Dress",
            price: 25,
            img: "image3.jpg",
        },
        {
            pName: "Boots",
            price: 40,
            img: "image4.jpg",
        },
        {
            pName: "Denim",
            price: 45,
            img: "image5.jpg",
        },
        {
            pName: "Bag",
            price: 30,
            img: "image6.jpg",
        }
    ]
    return (
        <div className='products-container'>

            {

                productData.map((product,key) =>{
                    return(

                        <div className='mx-5 p-3 product-card'>
                        <div className='product-images-container'>
                            <img src={require('../../assets/images/'+ product.img)} />
                        </div>
                        <div className='product-info'>
                            <h5><a href="#">{product.pName}</a> </h5>
                            <p className='product-price'>${product.price}</p>
                        </div>
                    </div>

                    )
                })

            }
           
        </div>
    )
}

export default Products;