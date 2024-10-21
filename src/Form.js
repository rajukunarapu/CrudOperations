import { useState } from "react"

function Form(props){

  const[product,setProduct] = useState(props.data)

  let changeFormData = (e)=>{
    const {name,value} = e.target
    setProduct({...product,[name]:value})
  }

    return(
      <>
        <div className="form-overlay">

          <form>
            
            <div className="form-group">
              <label>Product Name:</label>
              <input type="text" className="form-control mt-2" value={product.name}
               onChange={
                changeFormData
              } 
              placeholder="Enter the product name ..." name="name" />
            </div>

            <div className="form-group">
              <label className="mt-3">Product Price:</label>
              <input type="number" className="form-control mt-2" value={product.price}
              onChange={
                changeFormData
              } 
              placeholder="Enter the product price ..." name="price"/>
            </div>
            
            <div className="form-group">
              <label className="mt-3">Category:</label>
              <select className="form-control mt-2" name="category" value={product.category} 
              onChange={
                changeFormData
              }>
                <option value='-1'></option>
                <option value={"mobile"}>Mobile</option>
                <option value={"laptop"}>Laptop</option>
                <option value={"tv"}>Tv</option>
              </select>
            </div>

            <button className="btn btn-danger m-1 mt-3 float-end" onClick={(e)=>{
              e.preventDefault()
              props.close()
            }}>Cancel</button>

            <button className="btn btn-primary m-1 mt-3 float-end" onClick={(e)=>{
              e.preventDefault()
              props.add(product)
            }} >Send</button>

          </form>

        </div>
      </>
    )
  }
  
  export default Form