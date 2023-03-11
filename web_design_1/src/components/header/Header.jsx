import "./header.css"
const Header = () => {
    return (
        <>
            <div className="container utils-display-flex">
                <div><img src="https://www.nicepng.com/png/detail/300-3005793_statue-of-unity-logo.png" alt="icon" /></div>
                <div>
                    <div className="dropdown">
                        <button className="dropbtn">About SoU <span>&#x25bc;</span></button>
                        <div className="dropdown-content">
                            <button className='items'>Projects</button>
                            <button className='items'>Projects Features</button>
                            <button className='items'>Facts</button>
                            <button className='items'>MileStones</button>
                            <button className='items'>Organization</button>
                            <button className='items'>Contact US</button>
                            <button className='items'>Feedback Form</button>
                        </div>
                    </div>
                </div>
                <div> <div className="dropdown">
                    <button className="dropbtn">Visitors Guide <span>&#x25bc;</span></button>
                    <div className="dropdown-content">
                        <button className='items'>Weather Information</button>
                        <button className='items'>How to Reach</button>
                        <button className='items'>Visiting Hours</button>
                        <button className='items'>Where to Stay</button>
                        <button className='items'>What to Visit</button>
                        <button className='items'>Safety & Security</button>
                        <button className='items'>Do's And Dont's</button>
                    </div>
                </div>
                </div>

                <div> <div className="dropdown">
                    <button className="dropbtn">Sardar Vallabhbhai Patel <span>&#x25bc;</span></button>
                    <div className="dropdown-content">
                        <button className='items'>Life of Sardar Patel</button>
                        <button className='items'>Sardar Timeline</button>
                        <button className='items'>Books And References</button>
                        <button className='items'>Sardar Patel Quotes</button>
                    </div>
                </div>

                </div>

                <div> <div className="dropdown">
                    <button className="dropbtn">Media Section <span>&#x25bc;</span></button>
                    <div className="dropdown-content">
                        <button className='items'>SoU Content Kit</button>
                        <button className='items'>News</button>
                        <button className='items'>Gallery</button>
                    </div>
                </div>
                </div>

                <div> <div className="dropdown">
                    <button className="dropbtn">Ekta Nagar Attraction <span>&#x25bc;</span></button>
                    <div className="dropdown-content">
                        <button className='items'>Theme Based Garden</button>
                        <button className='items'>Narmada Ghat</button>
                        <button className='items'>Infotainment</button>
                        <button className='items'>Eco-Tourism Sector</button>
                        <button className='items'>Adventure Sports</button>
                        <button className='items'>Night Toursim</button>
                        <button className='items'>Shopping</button>
                        <button className='items'>Eating</button>
                    </div>
                </div>
                </div>
                <div> <div className="dropdown">
                    <button className="dropbtn">FAQs </button>

                </div>

                </div>
                <div> <div className="dropdown">
                    <button className="dropbtn">Archives <span>&#x25bc;</span></button>
                    <div className="dropdown-content">
                        <button className='items'>Run for Unity</button>
                        <button className='items'>Digital Outreach</button>
                        <button className='items'>Loha Campaign</button>

                    </div>
                </div></div>
                <div> <div className="dropdown">
                    <button className="dropbtn">Tender </button>

                </div>

                </div>
                <div> <div className="dropdown">
                    <button className="dropbtn">Latest </button>

                </div>

                </div>
            </div>
            <div className="tags utils-display-flex-center">
                <button>Book Tickets</button>
                <button>Visiting Hours </button>
                <button>Statue Of Unity Offical App</button>
                <button>Statue of Unity Offical App</button>
                <button>Visitors Comments</button>

            </div>


        </>
    )
}

export default Header