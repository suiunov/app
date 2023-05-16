

const searches = ['pizza', 'burger', 'pasta', 'french fries', 'sandwich', 'fried rice', 'ice cream', 'fried noodle', 'pudding', 'soup']


export default function PreviousSearches({setSearch, product}){
    
    console.log(product)
    return(
        <div className="previous-searches  ">
            <h2>Top Searches</h2>
            <div className="previous-searches-container">
                {searches.map((search, index) => (<div key={index} style={{animationDelay: index*.1+"s"}} className="search-item">
                    {search}
                </div>))}
                {/* <div className="search-box">
                    <input type="text" placeholder="Search..." onChange={(e)=> setSearch(e.target.value)} />
                        <button className="btn">
                            <FontAwesomeIcon icon={faSearch}/>
                        </button>
                </div>  */}
            </div>
        </div>
    )
}

 