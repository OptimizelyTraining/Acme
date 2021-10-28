import { useState, useEffect } from "react";
import AnimatedButton from "./AnimatedButton";

const FsFeature = ({userId}) => {
    const [decision, setDecision] = useState(null);
    const [theUser, setTheUser] = useState(null);

    useEffect(() => {
               
    }, [userId]);

    const handleButonClick = () => {
        
    }

    return ( 
        <div className="feature">
            <h2>Full Stack Example Feature</h2>
            <div>User ID is: {userId}</div>
            <AnimatedButton handleButonClick={handleButonClick} 
                textColor="black"
                backColor="lightgray"
                scaleAmount={3} />
        </div>
     );
}
 
export default FsFeature;