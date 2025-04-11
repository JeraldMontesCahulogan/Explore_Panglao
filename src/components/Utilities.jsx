const Utilities = () => {
  return (
    <div className="container mx-auto scrollbar-none">
      {/* ------------------------------------------------------------------------------------------------------ */}
      <h2 className="m-4 hover:text-gray-600 ">Spacing Section</h2>
      <p className="m-4">
        Tailwind helps us space things out with margin and padding.
      </p>
      <button className="mb-4 mx-4">Learn more </button>
      <button>sign up</button>
      <hr className="border-t-2 border-gray-300 my-4" />

      {/* ------------------------------------------------------------------------------------------------------ */}
      <div className="container mx-auto">
        <p className="text-2xl font-bold uppercase mb-6 text-gray-700">
          Button, Hover, Transition, Transform
        </p>
        <div className="my-4 p-2 bg-emerald-500 border border-emerald-600 rounded-md shadow-md hover:bg-emerald-600 transition duration-300 transform hover:-translate-y-1">
          hover me
        </div>
        <div className="my-4 p-2 bg-emerald-500 border border-emerald-600 rounded-md hover:bg-emerald-600 transition duration-300 transform hover:-translate-y-1">
          hover me
        </div>
        <hr className="border-t-2 border-gray-300 my-4" />
      </div>
      {/* ------------------------------------------------------------------------------------------------------ */}
      <div className="container mx-auto">
        <div className="border border-gray-900 p-8 text-gray-700 mx-10">
          <h1 className="text-3xl font-bold mb-4 uppercase text-center text-gray-600">
            Container
          </h1>
          <li className="mb-4 ">
            Center all components inside and set max width based on screen size,
            adjust for different screen sizes making it responsive
          </li>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab
            facilis quod temporibus praesentium. Repellendus eligendi itaque id
            eius doloribus non eum, pariatur veniam earum ut facilis culpa ipsam
            omnis.
          </p>
        </div>
        <hr className="border-t-2 border-gray-300 my-4" />
      </div>
      {/* ------------------------------------------------------------------------------------------------------ */}
      <div className="container mx-auto mt-10">
        <p className="text-2xl font-bold uppercase mb-6 text-gray-700">
          Flex, Responsive, Columns
        </p>

        <div className="space-y-4 md:flex md:space-x-4 md:space-y-0">
          <div className="bg-blue-400 text-blue-800 p-4 rounded-md md:flex-shrink">
            shrink
          </div>
          <div className="bg-blue-400 text-blue-800 p-4 rounded-md md:flex-grow">
            grow
          </div>
          <div className="bg-blue-400 text-blue-800 p-4 rounded-md md:flex-grow">
            grow
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 my-4" />
        {/* ------------------------------------------------------------------------------------------------------ */}
        <div>
          <p className="text-2xl font-bold uppercase my-6 text-gray-700">
            navigation
          </p>

          <div className="h-64">
            <div className="md:flex items-stretch h-full">
              <div className="bg-teal-400 md:w-1/5 hidden md:block p-10">
                sidebar
              </div>
              <div className="bg-teal-500 flex-grow p-10 h-full">content</div>
            </div>
          </div>
          <hr className="border-t-2 border-gray-300 my-4" />
        </div>
        {/* ------------------------------------------------------------------------------------------------------ */}
      </div>
      {/* ------------------------------------------------------------------------------------------------------ */}
      <div className="space-y-4 container mx-auto">
        <p className="text-2xl font-bold uppercase my-6 text-gray-700">grid</p>
        <div className="bg-blue-300 rounded-md container mx-auto p-10 grid grid-cols-3 gap-4">
          <div className="bg-blue-200 p-3 rounded-md">card1</div>
          <div className="bg-blue-200 p-3 rounded-md">card2</div>
          <div className="bg-blue-200 p-3 rounded-md">card3</div>
          <div className="bg-blue-200 p-3 rounded-md">card4</div>
          <div className="bg-blue-200 p-3 rounded-md">card5</div>
          <div className="bg-blue-200 p-3 rounded-md">card6</div>
        </div>
        <div className="bg-teal-300 rounded-md container mx-auto p-10 grid grid-cols-3 grid-rows-3 gap-4">
          <div className="bg-teal-200 p-3 rounded-md">card1</div>
          <div className="bg-teal-200 p-3 rounded-md row-span-2">card2</div>
          <div className="bg-teal-200 p-3 rounded-md">card3</div>
          <div className="bg-teal-200 p-3 rounded-md row-span-2">card4</div>
          <div className="bg-teal-200 p-3 rounded-md row-span-2">card5</div>
          <div className="bg-teal-200 p-3 rounded-md">card6</div>
        </div>
        <div className="bg-orange-300 rounded-md container mx-auto p-10 grid grid-cols-4 grid-rows-3 gap-4">
          <div className="bg-orange-200 p-3 rounded-md row-span-3">image</div>
          <div className="bg-orange-200 p-3 rounded-md col-span-2 row-span-2">
            content
          </div>
          <div className="bg-orange-200 p-3 rounded-md">something</div>
          <div className="bg-orange-200 p-3 rounded-md row-start-3 col-start-2 col-span-3">
            footer
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 my-4" />
      </div>
      {/* ------------------------------------------------------------------------------------------------------ */}
    </div>
  );
};

export default Utilities;

