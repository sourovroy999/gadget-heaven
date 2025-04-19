import React, { useEffect, useState } from "react";
import { deleteProducts, getProducts } from "../Utilis/Utilis";
import SingleCart from "../Pages/SingleCart";
import { GrSort } from "react-icons/gr";

const Cart = () => {
  const [carts, setCarts] = useState([]);

  const[isButtonDisabled, setButtonDisabled]=useState(false)

//   {
//   }

const handleDisableBtn =()=>{
    // if(carts.length<1){
    //              setButtonDisabled(true)
    //         }

    setButtonDisabled(true)
    return this;
}

  // const [totalPrice, setTotalPrice]=useState([])

  useEffect(() => {
    const storedCarts = getProducts([]);
    setCarts(storedCarts);
  }, []);

  const handleDelete = (id) => {
    deleteProducts(id);
    const storedCarts = getProducts([]);
    setCarts(storedCarts);
  };


  const handleSort=()=>{
    const sorted= [...carts].sort(function(a,b) {return b.price - a.price})
    console.log('sort btn clicked', sorted);
    // setCarts(sorted)
    setCarts(sorted)
    
  }

  const handleModal=()=>{
    document.getElementById('my_modal_1').showModal()
  }

  const handlePurchase=()=>{
    console.log('purchase btn clicked');
    const storedCarts = getProducts([]);
    console.log(storedCarts);
    
    setCarts([])
}


  const prices = carts.map((prices) => prices.price);

  let sum = 0;
  for (let item of prices) {
    sum = sum + item;
  }
  console.log(sum);


  return (
    <div className="mt-5 px-6 md:px-0">
      <div className="max-w-4xl flex gap-4 flex-col md:flex-row items-center mx-auto justify-between font-bold md:px-5">

        <div className="">
          <h1>Cart</h1>
         
        </div>

        
        <div className="">total price: {sum.toFixed(2)} $</div>

        <div>
        <button onClick={()=>handleSort()}  className="btn btn-outline mr-8 rounded-3xl text-[#9538E2]">
          Sort  <GrSort />
        </button>

        {/* Purchase button *******/}

<button disabled={isButtonDisabled} className="btn btn-primary rounded-3xl  bg-[#9538E2] text-white" onClick={()=>{handleModal()}}>Purchase</button>


<dialog id="my_modal_1" className="modal font-light">
  <div className="modal-box text-center">
  <img className="mx-auto w-14 h-14" src="https://img.icons8.com/color/48/verified-account--v1.png" alt="verified-account--v1"/>
    <h3 className="font-bold text-lg">Payment Successfully</h3>
    <hr />
    <p className="py-4">Thanks for purcchasing</p>
    <p>Total:{sum.toFixed(2)} $</p>
    <div className="">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button onClick={()=>handlePurchase()} className="btn w-fit">close</button>
      </form>
    </div>
  </div>
</dialog>

      
        </div>

      </div>

      {carts.map((p) => (
        <SingleCart
          key={p.product_id}
          cartInside={p}
          handleDelete={handleDelete}
        ></SingleCart>
      ))}
    </div>
  );
};

export default Cart;
