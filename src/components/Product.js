import React, { useEffect, useState } from 'react'


const Product = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMount = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const res = await fetch("https://fakestoreapi.com/products");
            if (componentMount) {
                setData(await res.clone().json());
                setFilter(await res.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMount = false;
            }
        }


        getProducts();

    }, []);
    
    const Loading = () => {
        return (<>
            loading........
        </>)
    }
    const ShowProducts = () => {
        return (<>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className="btn btn-outline-dark me-2" onClick={setFilter(data)}>All</button>
                <button className="btn btn-outline-dark me-2" >Men's</button>
                <button className="btn btn-outline-dark me-2">Women's</button>
                <button className="btn btn-outline-dark me-2">Jewelery's</button>
                <button className="btn btn-outline-dark me-2">Eltronic's</button>

            </div>
            {filter.map((product) => {
                //console.log(product);
                return (
                    <>
                        <div className="col-md-3 mb-4" >
                            <div className="card h-100 text-center p-4" key={product.id} >
                                <img className="card-img-top" src={product.image} alt={product.title}
                                height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0,12)}.....</h5>
                                    <p className="card-text lead fw-bold">
                                        ${product.price}
                                    </p>
                                    <a href="#" className="btn btn-outline-dark">
                                       Buy Now
                                    </a>
                                </div>
                            </div>
                        </div>

                    </>
                )
            })}
        </>
        )

    }
    return (
        <div>
            <div className="container  my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='dispaly-6 fw-bolder  text-center'>Latest Products</h1><hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}

                </div>
            </div>
        </div>
    )
}

export default Product
