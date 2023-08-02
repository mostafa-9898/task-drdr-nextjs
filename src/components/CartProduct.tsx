
// types
import { IProdcutProp } from '../types/product';

const CartProduct = ({ product }: IProdcutProp) => {

    return (
        <section>

            <div className='flex gap-3 pb-6 border-b-2'>
                <img src={product.image} alt='قرص' width={80} height={80} />
                <h2 className='font-medium'>{product.title}</h2>
            </div>

            <div className='flex flex-col gap-3 pt-6'>
                <div className='flex items-center justify-between'>
                    <h2 className='font-medium text-gray-600'>تعداد کالا</h2>
                    <h2 className='text-sm font-medium text-gray-600'> {product.quantity} عدد</h2>
                </div>
                <div className='flex items-center justify-between'>
                    <h2 className='font-medium text-gray-600'>فیمت</h2>
                    <h2 className='text-sm font-medium text-gray-600'>{product.price} تومان</h2>
                </div>
            </div>

        </section>
    );
}

export default CartProduct;