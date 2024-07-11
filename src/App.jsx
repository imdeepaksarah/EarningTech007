import Cards from "./components/Cards";

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          {/* <img src="public/0c346ffd-2d23-402d-b81c-3806471f3234.jpg" 
          alt=""
          className="h-24 w-24 object-contain transition duration-500 group-hover:scale-105 sm:h-72" /> */}
          <p className="text-base font-semibold text-indigo-600">All Rummy Application</p>
          <span>
            
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Earning Tech 007</h1>
          <marquee behavior="" direction=""><p className="mt-6 text-base leading-7 text-gray-600">Play rummy, earn money and get lost in the world of fun!.</p></marquee>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://t.me/earnforpaytm07"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Telegram
            </a>
            <a
              href="https://www.youtube.com/@EARNINGTECH007"
              className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Youtube
            </a>
            <a href=""
             className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
             >
            New Apps</a>
          </div>
          <Cards/>
        </div>


      </main>
    </>
  )
}
