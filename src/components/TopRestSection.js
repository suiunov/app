import RestsCard from "./RestsCard"

export default function TopRestSection(){
    const rests = [
        {
            name: "Vietnam",
            img: "/img/top-chiefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Vietnam",
        },
        {
            name: "Japan",
            img: "/img/top-chiefs/img_2.jpg",
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Thailand",
            img: "/img/top-chiefs/img_3.jpg",
            recipesCount: "13",
            cuisine: "Thailand",
        },
        {
            name: "Meimei",
            img: "/img/top-chiefs/img_4.jpg",
            recipesCount: "08",
            cuisine: "Taiwanese"
        },
        {
            name: "HongYa",
            img: "/img/restaurants/hongya.jpg",
            recipesCount: "09",
            cuisine: "Taiwanese"
        },
        {
            name: "Red",
            img: "/img/top-chiefs/img_6.jpg",
            recipesCount: "04",
            cuisine: "Vietnam"
        }
    ]
        
    return(
        <div className="section rests">
            <h1 className="title">List of Restaurants</h1>
            <div className="top-rests-container">
                { rests.map (chief => <RestsCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}