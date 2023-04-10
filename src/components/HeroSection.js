import CustomImage from "./CustomImage"

export default function HeroSection(){
    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg"
    ]
    return(
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">Our website makes it easy to explore new restaurants and cuisines with confidence. With detailed information on the ingredients and preparation methods used in each dish, you'll never have to guess what's in your food. Plus, our restaurant locator helps you find the perfect dining spot on Zhixue Street, whether you're in the mood for a quick bite or a leisurely meal with friends and family.</p>
            </div>
            <div className="col gallery">
                {images.map((src, index) =>
                    <CustomImage key={index} imgSrc={src} pt={"90%"}/>
                )}
            </div>
        </div>
    )
}