export default function ImproveSkills(){
    const list = [
        "Food ingredients",
        "Vegetarian food options",
        "Dietary Restrictions",
        "Pork-free food options",
        "Restaurant locations"
    ]

    return(
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/img_10.jpg" alt=" " />
            </div>
            <div className="col typography">
                <h1 className="title">Learn about our website</h1>
                { list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                ))}
            </div>
        </div>
    )
}