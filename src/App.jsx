import broadwalk from "./assets/boardwalk.png"

function App() {

  return (
    <main className="min-h-screen flex flex-col justify-between md:text-xl">
      <header className="bg-main text-white w-full py-6 md:py-10 flex flex-col items-center">
        <div className="max-w-[800px] w-[90%]">
          <h1 className="text-4xl md:text-5xl font-black">CSS is a lot of fun</h1>
        </div>
      </header>

      <section className="w-full text-main py-6 md:py-10 flex-1 flex flex-col items-center">
        <div className="max-w-[800px] w-[90%]">
          <h2 className="text-2xl md:text-3xl font-black text-accent">Section One Title.</h2>
          <img src={broadwalk} alt="foggy boardwalk with man walking away in the distance" className="min-w-full my-3 sm:my-6 object-cover object-right-bottom" />
          <p>Netus et malesuada fames ac. <a href="#" className="text-accent underline hover:text-highlight focus:text-highlight  ">Sed cras ornare arcu</a> dui vivamus. <strong>Elementum integer enim neque</strong> volutpat ac tincidunt vitae semper.</p>
        </div>
      </section>

      <section className="bg-main text-white/80 w-full py-6 md:py-10 flex flex-col items-center">
        <div className="max-w-[800px] w-[90%]">
          <h2 className="text-2xl md:text-3xl font-black text-accent mb-2 md:mb-4">Section Two Title.</h2>
          <p className="mb-2 md:mb-4">Netus et malesuada fames ac. Sed cras ornare arcu dui vivamus. Elementum integer enim neque volutpat ac tincidunt vitae semper.</p>
          <p className="mb-6 md:mb-8">Lorem <a href="#" className="text-accent underline hover:text-highlight focus:text-highlight  ">ipsum dolor sit amet</a>, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt <strong className="text-white">ut labore et dolore</strong>. </p>
          <a href="#" className="inline-block bg-accent font-black py-2 px-7 hover:bg-highlight hover:text-main focus:bg-highlight focus:text-main">contact us</a>
          <a href="#" className="inline-block bg-white text-main font-black py-2 px-7 ml-4 hover:bg-white/70 focus:bg-white/70">more info</a>
        </div>
      </section>
    </main>
  )
}

export default App
