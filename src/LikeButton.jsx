import { useState } from "react";
export default function LikeButton(){
    let [isLiked,setIsLiked] = useState(false);
    let [click,setClick]=useState(0);


    let toggleLike = ()=>{
        setIsLiked(!isLiked);
        setClick(click+1);
    }
    let style={
        color: "red"

    }
    return(
        <div>
            <p>Click = {click}</p>
        <p onClick={toggleLike}>

            {(isLiked)  ? 
                <i className="fa-solid fa-heart" style={style}></i>
             : 
                <i className="fa-regular fa-heart"></i>
            
}
        </p>
        </div>
    );
}