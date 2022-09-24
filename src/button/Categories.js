function Categories ({setCategory}) {
return   <div className="container">
<button className="btn" type="button" onClick={() => {setCategory(1)}}>Phones</button>
<button className="btn" type="button" onClick={() => {setCategory(2)}}>Televisions</button>
<button className="btn" type="button" onClick={() => {setCategory(3)}}>Notebooks</button>
<button className="btn" type="button" onClick={() => {setCategory(4)}}>Headphones</button>
<button className="btn" type="button" onClick={() => {setCategory(5)}}>Cameras</button>
</div>;
}
    

export default Categories