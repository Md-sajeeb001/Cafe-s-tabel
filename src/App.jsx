import Banner from "./components/Banner/Banner"
import Hearder from "./components/header/Hearder"
import Carts from "./components/MainContainer/Carts"
import Sidebar from "./components/MainContainer/Sidebar"

function App() {

  return (
    <div className="lg:container md:container lg:px-0 px-4  mx-auto">
      <div className="md:px-2">
      <Hearder></Hearder>
      </div>
      <Banner></Banner>

      <section className=" flex lg:flex-row flex-col gap-4 px-2 sm:px-0 my-4">
        <div className="lg:w-2/3 w-full">
          <Carts></Carts>
        </div>

        <div className="lg:w-1/3 w-full bg-blue-300">
          <Sidebar></Sidebar>
        </div>
      </section>
    </div>
  )
}

export default App
