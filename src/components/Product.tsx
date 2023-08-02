import { useContext } from 'react';
import Image from 'next/image';

// icon
import { FaPlus } from 'react-icons/fa';

// types
import { IProdcutProp } from '../types/product';

// context
import { CartContext } from '../context/cartContext';


const Product = ({ product }: IProdcutProp) => {

    const { dispatch } = useContext(CartContext);

    return (
        <section className='flex min-h-[100] border-2 
        border-gray-400 rounded-2xl p-2 gap-3
        '>

            {/* ---------- image ---------- */}
            <Image src={product.image} alt='قرص' width={80} height={80} />

            {/* ---------- content ---------- */}
            <div className='flex justify-between w-full pb-2 pl-2'>

                <div className='flex flex-col justify-between'>
                    <h2 className='font-medium'>{product.title}</h2>
                    <p className='text-xs font-medium text-gray-400'>تومان {product.price}</p>
                </div>

                <div className='flex items-end cursor-pointer'
                    onClick={() => dispatch({ type: 'ADD', payload: product })}
                >
                    <p className='text-sm font-bold text-purple-800'>افزودن</p>
                    <FaPlus color="#6b21a8" />
                </div>

            </div>

        </section>
    );
}

export default Product;