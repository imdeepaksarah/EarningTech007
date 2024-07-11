import React from 'react'
import Product from './Product'

const Cards = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Rummy Collection</h2>
    </header>

    <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      
<Product/>
      
    </ul>
  </div>
  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Subscribe Now | Join Telegram</h2>
  <marquee behavior="" direction=""><a href="" className=' bg-red-600  text-sm font-semibold text-white shadow-sm'>@Join Now </a> click now this button and more updates</marquee>
</section>
  )
}

export default Cards
