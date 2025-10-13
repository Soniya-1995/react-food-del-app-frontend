import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from '../ContextReducer/ContextReducer'


const Card = (props) => {
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();

    let options = props.options;
    let priceOptions = Object.keys(options);
    const [qty, SetQty] = useState(1)
    const [size, SetSize] = useState("")
    const handleAddToCart = async () => {
        // for update functionality
        let food = []
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item;
            }
        }
        if (food.length !== 0) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
                return
            }
            else if (food.size !== size) {
                await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, img: props.foodItem.img, description: props.description, price: finalPrice, qty: qty, size: size })
                return
                //console.log(data);
            }
            return
        }
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, img: props.foodItem.img, description: props.description, price: finalPrice, qty: qty, size: size })
        //

    }

    let finalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        SetSize(priceRef.current.value)
    }, [])
    return (
        <div>
            <div>
                <div className="card mt-3 " style={{ "width": "16rem", "maxHeight": "450px", "boxShadow": "5px 5px 5px  gray" }}>
                    <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "150px", objectFit: "fill" }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>
                        <p className="card-text">{props.foodItem.description.length > 40 ? props.foodItem.description.slice(0, 40) : props.foodItem.description}</p>
                        <div className='container w-100'>
                            <select className='m-2  h-100 bg-warning rounded border-0' onChange={(e) => SetQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success rounded border-0' ref={priceRef} onChange={(e) => SetSize(e.target.value)}>
                                {
                                    priceOptions.map((data) => {
                                        return <option key={data} value={data}>{data}</option>
                                    })
                                }
                            </select>
                            <div className='d-inline fs-5'>
                                ₹{finalPrice}/-
                            </div>

                        </div>
                        <hr />
                        <button className={`btn btn-success justify-center ms-2`} onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
