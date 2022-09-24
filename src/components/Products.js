function Products ({products}) {
    const {brand, img, price, title}=products;
    return <div>
        <p className="brand">{brand}</p>
        <p>{title}</p>
        <img className="img" src={img} alt={'product image'} />
        <p className="price">{price}</p>

</div>
}

export default Products;