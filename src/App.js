import { useEffect, useState } from "react"
import Table from "./Table"
import { deleteData, getData , postData ,putData } from "./api"
import Form from "./Form"

function App(){

  // useState for Updating the products
  const [product,setProduct] = useState([])

  // UseState for open and closing the Form
  const [openForm,setOpenForm] = useState(false)

  // UseState for Initial form data
  const [initialForm,setForm] = useState({
    name : '',
    price : '',
    category : ''
  })

  //useState for performing PUT methode
  const [edit,setEdit] = useState(false)

  //UseEffect for intially rendering the getting the products
  useEffect(()=>{
    getProducts()
  },[])

    //getting the products
    let getProducts = async ()=>{
      let res = await getData();
      setProduct(res.data) 
    }

    //deleting the products
    let deleteProduct = async (id)=>{
      await deleteData(id);
      getProducts()
    }


    // if edit variable is true then perform PUT methode else POST methode  
    let addProduct = async (product)=>{
      let data = {
        name:product.name,
        price:product.price,
        category:product.category
      }

      if(edit){
        await putData(product.id,data)
      }

      else
        await postData(data);
      getProducts()
      setOpenForm(false)
    }


    //Editing the products 
    let editProduct = async (data)=>{
      setOpenForm(true)
      setForm(data)
      setEdit(true)
    }

    // openfrom
    let showform = ()=>{
      setOpenForm(true)
      setForm({
        name : '',
        price : '',
        category : ''
      })
    }
    
    // closeform
    let closeform = ()=>{
      setOpenForm(false)
    }


  return(
    <>
      <div className="wrapper m-5 w-50">

        <h1 className="text-primary"> CRUD operations with react js</h1>

        <button className="btn btn-primary mt-2" onClick={()=>{
          showform()
        }}>Add new</button>

        <Table product = {product} delete = {deleteProduct} edit = {editProduct} ></Table>

        {
          openForm&& <Form close = {closeform} data = {initialForm}  add = {addProduct} ></Form>
        }

      </div>
    </>
  )
}

export default App