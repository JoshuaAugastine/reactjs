import image from"./pngtree-eagle-bird-transparent-on-white-background-png-image_6656458.png";

function Img(){
    return(
        <div style={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",
    height:600,width:600}}>Hello World</div>
    )
}
export {Img};