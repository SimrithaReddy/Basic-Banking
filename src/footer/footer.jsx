const Footer = () => {
    return (
        <>
            <footer className="text-gray-600 body-font border-2  w-full border-blue-500 flex justify-between" id="footer">

                <div className="flex mx-40 my-20">
                    <img src="logo.png" alt="logo" className="h-20 w-20"></img>
                    <h1 className="ml-5 text-3xl">The Sparks Foundation
                        <br className="hidden lg:inline-block text-violet-800" />
                        <p className="text-sm ">...inspiring,innovating,integrating</p>
                    </h1>
                </div>
                <div className="m-20 mx-60">
                    <h1 className="text-2xl ">
                    Follow us on
                    </h1>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-500" href="https://www.facebook.com/thesparksfoundation.info/" target="_blank">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500" href="https://twitter.com/tsfsingapore?lang=en" target="_blank">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500" href="https://www.instagram.com/thesparksfoundation.info/?hl=en" target="_blank">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500" href="https://www.linkedin.com/company/the-sparks-foundation/?originalSubdomain=sg" target="_blank">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </footer>
        </>
    )
}

export default Footer;