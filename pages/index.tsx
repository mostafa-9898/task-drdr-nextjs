import { useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios"

// types
import { GetStaticProps } from "next";
import { IProducts } from "@/src/types/product";

// icons
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

// component
import Product from "@/src/components/Product";

// context
import { CartContext } from "@/src/context/cartContext";



export default function Home({ products }: IProducts) {

  const { state } = useContext(CartContext)

  const router = useRouter();
  const cartHandler = () => {
    router.push('/cart')
  }

  return (
    <main>


      {/* --------------- navbar --------------- */}
      <nav className="flex justify-between p-4 bg-slate-300 ">

        {/* ------ menu button ------ */}
        <div>
          <GiHamburgerMenu size={22} />
        </div>

        {/* ------ cart button ------ */}
        <div className='relative cursor-pointer' onClick={cartHandler}>
          <FaShoppingCart size={22} />
          <div className='absolute top-[-7px] right-[-8px] bg-purple-900
            w-4 h-4 rounded-[50%] flex items-center justify-center
            '>
            <span className='text-xs text-white'>{state.selected.length}</span>
          </div>
        </div>

      </nav>



      {/* --------------- content --------------- */}
      <section className="p-5 max-h-[600px] min-h-[600px] flex flex-col gap-5 overflow-auto">
        {products?.map((item) => <Product key={item.id} product={item} />)}
      </section>

      <button className="w-full py-4 text-xl font-normal text-white bg-purple-800 rounded-xl"
        onClick={cartHandler}
      >
        تکمیل خرید
      </button>


    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const resp = await axios.get('http://localhost:4000/products');
  const data: IProducts = resp.data

  return {
    props: { products: data },
    revalidate: 3600 //1h
  }
}
