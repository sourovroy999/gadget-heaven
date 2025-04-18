import toast from "react-hot-toast";

// get
export const getProducts=()=>{
    let products=[]
    let storedProducts=localStorage.getItem('products')
    if(storedProducts){
        products=JSON.parse(storedProducts)
    }

    return products;
}

// save
export const saveProducts= product =>{
    console.log(product);
    
    let products=getProducts()
    const isExist=products.find(b=>b.product_id ===product.product_id)

    if(isExist){
        return toast.error('already bookmarked')
    }
    products.push(product)
    localStorage.setItem('products', JSON.stringify(products))
    toast.success('Bookmarked Successfully')
}



// delete

export const deleteProducts= id =>{
    let products=getProducts()
    const remaining=products.filter(b=>b.product_id !== id)
    localStorage.setItem('products', JSON.stringify(remaining))
    toast.success('Product removed from bookmark')
}