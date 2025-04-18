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





//wishlist///////

//get wishlist
export const getWishProducts=()=>{
    let products=[]
    let storedProducts=localStorage.getItem('wishes')
    if(storedProducts){
        products=JSON.parse(storedProducts)
    }

    return products;
}

// save
export const saveWishProducts= product =>{
    console.log(product);
    
    let products=getWishProducts()
    const isExist=products.find(b=>b.product_id ===product.product_id)

    if(isExist){
        return toast.error('already added to the Wish Lists')
    }
    products.push(product)
    localStorage.setItem('wishes', JSON.stringify(products))
    toast.success('Added to Wish List Successfully')
}

// delete

export const deleteWishProducts= id =>{
    let products=getWishProducts()
    const remaining=products.filter(b=>b.product_id !== id)
    localStorage.setItem('wishes', JSON.stringify(remaining))
    toast.success('Product removed from wish List')
}