import React, {useState} from "react";

type RatingPropsType = {
}
export function Rating(props: RatingPropsType) {

    let [starValue, setStarValue] = useState(0);

   return (
        <div>
            <Star selected={starValue > 0} setStarValue={()=> setStarValue(1)}/>
            <Star selected={starValue > 1} setStarValue={()=> setStarValue(2)}/>
            <Star selected={starValue > 2} setStarValue={()=> setStarValue(3)}/>
            <Star selected={starValue > 3} setStarValue={()=> setStarValue(4)}/>
            <Star selected={starValue > 4} setStarValue={()=> setStarValue(5)}/>
        </div>
    )
}

type starProps={
    selected: boolean
    setStarValue: () => void;
}
function Star({selected, setStarValue}: starProps) {
    return (
        <span onClick={()=>setStarValue()}>
            {selected ? "★" : "☆"}
        </span>
    )
}