import { useEffect, useState } from "react";
import ProducsList from "../components/ProductsList";
import Categories from "../button/Categories";





function ProductsPage () {
    const [allProducts, setallProducts] = useState ([]);
    const [category, setCategory] = useState(null)

    console.log(category)
    useEffect (() => {
        if(category){
            console.log("in iff")
            fetch(`https://academy-products.herokuapp.com/api/products/category/${category}`)
            .then((res)=>res.json())
            .then ((data) => {
                console.log(data);
                setallProducts(data.data)
            },[]); 
             
        }else{
            console.log("in else")
        fetch("https://academy-products.herokuapp.com/api/products/")
        .then((res)=>res.json())
        .then ((data) => {
            console.log(data);
            setallProducts(data.data)
        },[]); 
    }
    },
    [category]);
    return <div>
        <Categories setCategory={setCategory}/>
        <ProducsList list={allProducts} />
    </div>
}

export default ProductsPage;