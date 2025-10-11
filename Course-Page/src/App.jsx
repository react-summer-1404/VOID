import { useState } from 'react'
import './assets/style/App.css'


function App() {

  return (
    <>
      <h1>App-Page updated</h1>
      <div class="max-w-sm mx-auto p-4 bg-white rounded-2xl shadow-lg text-center transition hover:-translate-y-1">
  <img
    src="https://images7.alphacoders.com/133/thumb-440-1338193.webp"
    alt="Product"
    class="rounded-xl mb-4 mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-full"
  />
  <h2 class="text-lg sm:text-xl md:text-2xl font-semibold mb-2">کفش اسپرت</h2>
  <p class="text-gray-600 text-sm sm:text-base mb-4">قیمت: ۴۵۰ هزار تومان</p>
  <button
    class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl transition text-sm sm:text-base"
  >
    افزودن به سبد خرید
  </button>
</div>

    </>
  )
}

export default App
