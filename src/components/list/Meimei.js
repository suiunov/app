import RestsCard from "./RestsCard"

export default function Meimei(){
    const rests = [
        
        {
            name: "Hong Ya",
            img: "/img/top-chiefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Taiwan",
        },
        {
            name: "Zero",
            img: "/img/top-chiefs/img_2.jpg",
            recipesCount: "05",
            cuisine: "Taiwan",
        },
        {
            name: "onenjoy",
            img: "/img/top-chiefs/img_3.jpg",
            recipesCount: "13",
            cuisine: "Taiwan",
        },
        {
            name: "Meimei",
            img: "/img/top-chiefs/img_4.jpg",
            recipesCount: "7am-1pm",
            cuisine: "Taiwan"
        }
    ]
    const lunch = [
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
            name: "Moms Kitchen",
            img: "/img/restaurants/hongya.jpg",
            recipesCount: "09",
            cuisine: "Taiwanese"
        }
    ]
        
    return(
        <div className="section rests">
            <h1 className="title">Breakfast</h1>
            <div className="lists-rests-container">
                { rests.map (chief => <RestsCard key={chief.name} chief={chief} />) }
            </div>
            <br></br>
            <h1 className="title">Lunch/Dinner</h1>
            <div className="lists-rests-container">
                { lunch.map (chief => <RestsCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}