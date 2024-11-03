import {FaLongArrowAltRight} from 'react-icons/fa'
export const Herosection = ()=>{
    return (
        <main className="hero-section main">
        <div className="container grid grid-two-cols">
            <div className="hero-content">
                <h1 className="heading-xl">Explore the World, One Country at a Time</h1>
                <p className="paragraph">
                    Discover tthe history, culture, and beauty of every nation, Sort, search and filter throught countries to find the details.
                </p>
                <button className="btn btn-darken btn-inline bg-white-box">
                    Start Exploring <FaLongArrowAltRight/>
                </button>
            </div>
            <div className="hero-image">
                <img src="/images/travelling.jpg" alt="travelling" className='banner-image' />
            </div>
        </div>
    </main>
    )
}