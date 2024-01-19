import React from 'react'

const Info = () => {
  return (
    <div className='bg-white mt-10 p-5 list-none grid grid-cols-2 gap-4 '>
        <div className='mt-5 font-semibold m-10'>
            <h6 className='font-bold mb-4'>ABOUT US</h6>
            <li className='mb-3'>Join Our Club</li>
            <li className='mb-3'>Career</li>
            <li className='mb-3'>Investor Relations</li>
        </div>

        <div className='mt-5 font-semibold m-10'>
            <h6 className='font-bold mb-4'>CUSTOMER SERVICE</h6>
            <li className='mb-3'>Store Pickup Details</li>
            <li className='mb-3'>Frequently Asked Question</li>
            <li className='mb-3'>Contact</li>
            </div>

        <div className='mt-5 font-semibold m-10'>
            <h6 className='font-bold mb-4'>OTHER</h6>
            <li className='mb-3'>Privacy Policy</li>
            <li className='mb-3'>Terms of Service</li>
            <li className='mb-3'>Refund and Price Match</li>
        </div>

        <div className='mt-5 font-semibold m-10'>
            <h6 className='font-bold mb-4'>SPECIALS</h6>
            <li className='mb-3'>Alberta Specials</li>
            <li className='mb-3'>BC Specials</li>
            <li className='mb-3'>Case Discount</li>
        </div>
        <div className='w-[1000px] mt-5 font-semibold m-10 grid grid-cols-2 '>
            <div>
                <p>© 2024 Liqour. All rights reserved.</p>
            </div>
            <div className='flex justify-end gap-3'>
            <a href="https://www.linkedin.com/in/harshdeepsingh9828" target="_blank" rel="noopener noreferrer">
                <img className='w-[27px]' src='https://img.freepik.com/premium-vector/black-facebook-logo-social-media-logo_197792-7352.jpg?w=740'/>
                </a>
                <a href="https://www.linkedin.com/in/harshdeepsingh9828" target="_blank" rel="noopener noreferrer">
                <img className='w-[22px] h-6 mt-[1px]' src='https://img.freepik.com/premium-photo/3d-render-camera-icon-isolated-white-background-camera-logo-web-site-app-ui-logo_640106-982.jpg?w=740'/>
                </a>
                <a href="https://www.linkedin.com/in/harshdeepsingh9828" target="_blank" rel="noopener noreferrer">
                <img className='w-[23px] mb-[1px]' src='https://img.freepik.com/premium-vector/linkedin_628407-1657.jpg?w=740'/>
                </a>
                </div>
        </div>
    </div>
  )
}

export default Info
