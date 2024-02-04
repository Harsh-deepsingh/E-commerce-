import React from 'react'

const ImageCard = () => {
  return (
    <div className='flex items-center justify-center'>
    <div className='p-5 mb-5 flex gap-10 w-[700px] h-[600px] justify-center '>
        <img className='w-[100px] transition-[width] duration-[1s] hover:w-full  object-cover rounded-lg border-2 border-white' src='https://cdn.thewirecutter.com/wp-content/media/2021/07/cheapsunglaasses-2048px-6956.jpg?auto=webp&quality=75&crop=2:1&width=1024' />
        <img className='w-[100px] transition-[width] duration-[1s] hover:w-full  object-cover rounded-lg border-2 border-white' src='https://www.makeup.com/-/media/project/loreal/brand-sites/mdc/americas/us/articles/2020/04_april/28-fragrance-exipre/does-perfume-expire-hero-mudc-042820.jpg?cx=0.5&cy=0.5&cw=705&ch=529&blr=False&hash=64189F68C99C1C96AB4E9420CD222A94' />
        <img className='w-[100px] transition-[width] duration-[1s] hover:w-full  object-cover rounded-lg border-2 border-white' src='https://www.cnet.com/a/img/resize/b84fd97fe29bbe2ec4d397caf63db53bf8bea241/hub/2022/03/30/e841545d-e55c-47fc-b24a-003bf14e58c8/oneplus-10-pro-cnet-review-12.jpg?auto=webp&fit=crop&height=900&width=1200' />
        <img className='w-[100px] transition-[width] duration-[1s] hover:w-full  object-cover rounded-lg border-2 border-white' src='https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2102-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024' />
        <img className='w-[100px] transition-[width] duration-[1s] hover:w-full  object-cover rounded-lg border-2 border-white' src='https://cdn.thewirecutter.com/wp-content/media/2021/10/running-shoes-2048px-3128-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024' />
        <img className='w-[100px] transition-[width] duration-[1s] hover:w-full  object-cover rounded-lg border-2 border-white' src='https://hellobubble.com/cdn/shop/products/fullline_bundle.jpg?v=1607433085&width=2000' />
    </div>
    </div>
  )
}

export default ImageCard