import React from 'react'

const FooterBottom = () => {
    return (
        <>
            <div className="bg-black-light py-3 font-urbanist">
                <div className="flex justify-between items-center max-w-[92%] m-auto text-white 700px:flex-col  ">
                    <div className="flex gap-5 text-sm 700px:mb-10">
                        <p>@2023 Estatein. All Rights Reserved</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div className="flex gap-3">

                        <img src="img/fb.png" alt="" className='bg-black-dark p-2 rounded-full' />
                        <img src="img/linkdin.png" alt="" className='bg-black-dark p-2 rounded-full' />
                        <img src="img/ticon.png" alt="" className='bg-black-dark p-2 rounded-full' />
                        <img src="img/yt.png" alt="" className='bg-black-dark p-2 rounded-full' />

                    </div>

                </div>
            </div>
        </>
    )
}

export default FooterBottom