import Button from '../UI/Button'

export default function Hero () {
  return (
    <div className="overlay">
      <div className="hero">
        <div className="max-w-6xl mx-auto p-4 ">
          <div className="flex items-center justify-center h-screen flex-col hero-content">
            <h1 className="text-white text-4xl font-semibold text-center lg:text-7xl">Let&apos;s Help you find <br/> Your Ideal Home</h1>
            <Button className='bg-primary text-white mt-4 py-2 px-4 text-lg flex items-center gap-2 shadow-box-shadow-4 cursor-pointer lg:py-5 lg:mt-6'>
              Make an enquiry
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}