import Products from "./Products"


function ProducsList ({list}) {
    return (
    <div className="flex">
        {list.map((products) => (
            <Products products={products}/>
        )    )}
        
     
    </div>
    );
}

export default ProducsList;