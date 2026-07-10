// import axios from "axios"
// import { useEffect, useState } from "react"
// import { ProductList } from "../Features/ProductsList/ProductList"


import React, { Suspense } from "react"
import { Loading } from "../Loaders/Loading"
const ProductList=React.lazy(()=>import("../Features/ProductsList/ProductList"))

export const Products=()=>{

    

    return(
        <>
            <Suspense fallback={<center><Loading/></center>}>
                <ProductList/>
            </Suspense>
        </>
    )

//     let[products,SetProducts]=useState([])


//     useEffect(()=>{
//         let productsData=fetch("https://dummyjson.com/products")
//         async function data(){
//             // let response=await productsData
//             // let jsonData=await response.json()
//             // console.log(jsonData)
//             // SetProducts(jsonData.products)
//             let pdata=await productsData
//             let {products}=await pdata.json()
//             console.log(products)
//             SetProducts(products)
//         }
//         data()
//     },[])
//     let [page,SetPage]=useState(1)
//     let limit=10
//     let pagination=products.slice((page-1)*limit,page*limit)


//     return(
//         <>
//         <center>
//             {/* <h1 className="p-4 m-4">This is Products page</h1> */}
//             <h1 className="p-4 m-4">Products</h1>
//             <div className="container" style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
//             {
//                 pagination.map((item)=>(
//                     <div key={item.id} className="border border-2 border-dark p-4 m-4 text-start" style={{width:"300px",borderRadius:"10px"}}>
//                         <img src={item.thumbnail} alt={item.title} style={{width:"100%",height:"200px",objectFit:"cover"}}/>
//                         <h2>{item.title}</h2>
//                         <p>{item.description}</p>
//                         <p>Price: ${item.price}</p>
//                     </div>

//                 ))
//             }
//             </div>
//             <div >
//                         {[1,2,3,4,5,6,7,8,9,10].map(item=>
//                         (<button className="btn btn-primary m-2" onClick={()=>SetPage(item)}>{item}</button>))}
//                     </div>
//         </center>
//         </>
//     )
}

// export const Products = () => {
//     let [userData, SetUserData] = useState([])

//     useEffect(() => {
//         async function data() {
//             let { data } = await axios.get("https://dummyjson.com/users")
//             let { users } = data
//             SetUserData(users)
//         } data()

//     },[])
//     const handleDelete = (id) => {
//     SetUserData((prev) => prev.filter((user) => user.id !== id))
//   }

  
//   const handleEdit = (user) => {
//     console.log("Editing user:", user)
    
//   }
//     return (
//         <>
//             <center>

//                 <table className="table ">
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Phone</th>
//                             <th>Edit</th>
//                             <th>Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {userData.map((user) => (
//                             <tr key={user.id}>
//                                 <td>{user.firstName} {user.lastName}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.phone}</td>
//                                 <td><button className="btn btn-primary" onClick={() => handleEdit(user)}>Edit</button></td>
//                                 <td><button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </center>
//         </>
//     )
// }