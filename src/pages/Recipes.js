import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Tuna Burger",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
            description: "Tuna burgers, covered, on an oiled rack over medium direct heat until a thermometer reads 160° and juices run clear, about 6 minutes on each side. During the last minute of cooking, top each patty with 2 triangles American cheese and 1 triangle Swiss cheese. Serve on buns.",
        }, 
        {
            title: "Sandwich",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
            description: "Grill burgers, covered, on an oiled rack over medium direct heat until a thermometer reads 160° and juices run clear, about 6 minutes on each side. During the last minute of cooking, top each patty with 2 triangles American cheese and 1 triangle Swiss cheese. Serve on buns.",
        },
        {
            title: "Fried Rice",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
            description: "Grill burgers, covered, on an oiled rack over medium direct heat until a thermometer reads 160° and juices run clear, about 6 minutes on each side. During the last minute of cooking, top each patty with 2 triangles American cheese and 1 triangle Swiss cheese. Serve on buns.",
        },
        {
            title: "Fried Noodle",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
            description: "Grill burgers, covered, on an oiled rack over medium direct heat until a thermometer reads 160° and juices run clear, about 6 minutes on each side. During the last minute of cooking, top each patty with 2 triangles American cheese and 1 triangle Swiss cheese. Serve on buns.",
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
            description: "Grill burgers, covered, on an oiled rack over medium direct heat until a thermometer reads 160° and juices run clear, about 6 minutes on each side. During the last minute of cooking, top each patty with 2 triangles American cheese and 1 triangle Swiss cheese. Serve on buns.",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
            description: "Grill burgers, covered, on an oiled rack over medium direct heat until a thermometer reads 160° and juices run clear, about 6 minutes on each side. During the last minute of cooking, top each patty with 2 triangles American cheese and 1 triangle Swiss cheese. Serve on buns.",
        },
        {
            title: "Tuna Burger",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
            description: "Grill burgers, covered, on an oiled rack over medium direct heat until a thermometer reads 160° and juices run clear, about 6 minutes on each side. During the last minute of cooking, top each patty with 2 triangles American cheese and 1 triangle Swiss cheese. Serve on buns.",
        }, 
        {
            title: "Sandwich",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
            description: "Grill burgers, covered, on an oiled rack over medium direct heat until a thermometer reads 160° and juices run clear, about 6 minutes on each side. During the last minute of cooking, top each patty with 2 triangles American cheese and 1 triangle Swiss cheese. Serve on buns.",
        },
        {
            title: "Fried Rice",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
            description: "Grill burgers, covered, on an oiled rack over medium direct heat until a thermometer reads 160° and juices run clear, about 6 minutes on each side. During the last minute of cooking, top each patty with 2 triangles American cheese and 1 triangle Swiss cheese. Serve on buns.",
        },
        {
            title: "Fried Noodle",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
            description: "Grill burgers, covered, on an oiled rack over medium direct heat until a thermometer reads 160° and juices run clear, about 6 minutes on each side. During the last minute of cooking, top each patty with 2 triangles American cheese and 1 triangle Swiss cheese. Serve on buns.",
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
            description: "Grill burgers, covered, on an oiled rack over medium direct heat until a thermometer reads 160° and juices run clear, about 6 minutes on each side. During the last minute of cooking, top each patty with 2 triangles American cheese and 1 triangle Swiss cheese. Serve on buns.",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
            description: "Grill burgers, covered, on an oiled rack over medium direct heat until a thermometer reads 160° and juices run clear, about 6 minutes on each side. During the last minute of cooking, top each patty with 2 triangles American cheese and 1 triangle Swiss cheese. Serve on buns.",
        },
        {
            title: "Tuna Burger",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
            description: "Grill burgers, covered, on an oiled rack over medium direct heat until a thermometer reads 160° and juices run clear, about 6 minutes on each side. During the last minute of cooking, top each patty with 2 triangles American cheese and 1 triangle Swiss cheese. Serve on buns.",
        }, 
        {
            title: "Sandwich",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
            description: "Grill burgers, covered, on an oiled rack over medium direct heat until a thermometer reads 160° and juices run clear, about 6 minutes on each side. During the last minute of cooking, top each patty with 2 triangles American cheese and 1 triangle Swiss cheese. Serve on buns.",
        },
        {
            title: "Fried Rice",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
            description: "Grill burgers, covered, on an oiled rack over medium direct heat until a thermometer reads 160° and juices run clear, about 6 minutes on each side. During the last minute of cooking, top each patty with 2 triangles American cheese and 1 triangle Swiss cheese. Serve on buns.",
        },
        {
            title: "Fried Noodle",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
            description: "Grill burgers, covered, on an oiled rack over medium direct heat until a thermometer reads 160° and juices run clear, about 6 minutes on each side. During the last minute of cooking, top each patty with 2 triangles American cheese and 1 triangle Swiss cheese. Serve on buns.",
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
            description: "Grill burgers, covered, on an oiled rack over medium direct heat until a thermometer reads 160° and juices run clear, about 6 minutes on each side. During the last minute of cooking, top each patty with 2 triangles American cheese and 1 triangle Swiss cheese. Serve on buns.",
        },
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
            description: "Grill burgers, covered, on an oiled rack over medium direct heat until a thermometer reads 160° and juices run clear, about 6 minutes on each side. During the last minute of cooking, top each patty with 2 triangles American cheese and 1 triangle Swiss cheese. Serve on buns.",
        },
    ]
    return(
        <div>
            <PreviousSearches />
            <div className="recipes-container">
            {/* <RecipeCard />*/}
                {recipes.map((recipe, index) => 
                    <RecipeCard key={index} recipe={recipe} />
                )}
            </div>
        </div>
    )
}