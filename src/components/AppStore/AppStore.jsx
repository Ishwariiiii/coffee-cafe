import React from 'react'
import appBanner from "../../assets/appBanner.jpg"
import appStore from "../../assets/appStore.png"
import playStore from "../../assets/playStore.png"
// import appBanner from "../../assets/appBanner1.jpeg"

const backgroundStyle={
    backgroundImage: `url(${appBanner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const AppStore = () => {
  return (
    <>
    <div style={backgroundStyle} className='py-14'>
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'>
                <div data-aos="fade-up"  className='space-y-6 max-w-xl mx-auto'>
                    {/* text content */}
                    <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold pl-3 text-white/90'>Coffe is available for Android and  IOS</h1>
                    {/* logo section */}
                    <div className='flex flex-wrap justify-center sm:justify-start items-center'>
                        <a href='#'>
                            <img src={appStore} alt='' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                        </a>
                        <a href='#'>
                            <img src={playStore} alt='' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                        </a>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AppStore