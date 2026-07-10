import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ProductList = () => {

    let [categoryList, setCategoryList] = useState([])
    let [products, setProducts] = useState([])
    let [category, setCategory] = useState("")
    let [search, setSearch] = useState("")
    let [page,setPage]=useState(1)
    let [btnlen,setBtnlen]=useState(0)
    let perpage=10


    useEffect(() => {
        async function categorydata() {
            let { data } = await axios.get('https://dummyjson.com/products/category-list')
            // console.log(data)
            setCategoryList(data)
        }
        categorydata()
    }, [])

    useEffect(() => {
        async function threeApi() {
            let api;
            if (category) {
                api = `https://dummyjson.com/products/category/${category}`
            }
            else if (search) {
                api = `https://dummyjson.com/products/search?q=${search}`
            }
            else {
                api = 'https://dummyjson.com/products'
            }
            let { data } = await axios.get(api)
            
            let allproducts=data.products || []
            setBtnlen(allproducts.length)

            let pagination=allproducts.slice((page-1)*perpage,page*perpage)


            // setProducts(data.products)
            setProducts(pagination)
            
            
        } threeApi()
    }, [search, category,page,perpage])
    let viewbtns=Math.ceil(btnlen/perpage)

    return (
        <>
            <div className="container">
                <div className="row justify-content-between mb-4 mt-3">
                    <div className="col-5">
                        <input type="text" className="form-control" placeholder="search item..." value={search} onChange={(e) => {
                            setCategory('')
                            setSearch(e.target.value)
                            setPage(1)
                        }} />
                    </div>
                    <div className="col-5">
                        <select name="" id="" className="form-control" onChange={(e)=>{
                            setCategory(e.target.value)
                            setSearch('')
                            setPage(1)
                        }}>
                            <option value="">All Categories</option>
                                {
                                    categoryList.map((item)=>(
                                        <option value={item} key={item}>{item}</option>
                                    ))
                                }
                                
                        </select>
                    </div>
                </div>
            </div>


            <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {
                    products.map((item) => (
                        <div key={item.id} className="border border-2 border-dark p-4 m-4 text-center" style={{ width: "300px", borderRadius: "10px" }}>
                            <Link className="nav-link text-dark" to={`/products/${item.id}`}>
                            <img src={item.thumbnail} alt={item.title} height={150} />
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <mark>{item.price}</mark>
                            </Link>
                        </div>
                    ))
                }
            </div>

            <div className="container text-center mb-3 mt-3" >
                {
                    viewbtns>0 &&
                    Array.from({length:viewbtns},(_,i)=>i+1).map(btn=>(
                        <button className="btn btn-primary m-2" key={btn} onClick={()=>{setPage(btn)}}>{btn}</button>
                    ))
                }
            </div>
        </>
    )
}

export default ProductList