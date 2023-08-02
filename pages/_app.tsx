import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// context
import CartContextProvider from '@/src/context/cartContext'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="max-w-md" style={{ direction: "rtl" }}>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </main>
  )
}
