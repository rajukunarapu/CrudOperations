
function Table(props){
    return(
      <>
        <table className="table m-1">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {
                props.product.map((data)=>{
                  return(
                      <tr key={data.id} >
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.price}</td>
                        <td>{data.category}</td>

                        <td><button className="btn btn-primary m-" onClick={()=>{
                          props.edit(data)
                        }}>Edit</button></td>

                        <td><button className="btn btn-danger m-1" onClick={()=>{
                          props.delete(data.id)
                        }}>Delete</button></td>
                      </tr>
                  )
                })
            }
          </tbody>
            
        </table>
      </>
    )
  }
  
  export default Table