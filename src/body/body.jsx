import { Link } from "react-router-dom";

const Body = () => {
    return (
        <>
            <section className="text-gray-600 body-font mt-0 mb-0 p-0">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center mb-0 p-0">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-0 md:mb-0 mb-0 p-0">
                        <img className="object-cover object-center rounded" alt="hero" src="grip_bank.jpg"  />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-violet-800">The Sparks Foundation
                            <br className="hidden lg:inline-block text-violet-800" />Mission and Vision Statement
                        </h1>
                        <p className="mb-8 leading-relaxed">The sparks foundation is working to bring parity in education, making sure children have equal opportunity at success, irrespective of the financial background.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href="https://www.thesparksfoundationsingapore.org/" target="_blank">
                            Know More</a></button>

                            <Link to="/users">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 pl-10 ml-7 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Bank</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            
            </>
    )
}

export default Body;