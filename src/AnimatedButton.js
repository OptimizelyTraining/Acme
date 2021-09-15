import { motion } from "framer-motion"
import { useState } from "react"

const AnimatedButton = ({ handleButonClick, scaleAmount }) => {
    const [buttonText, setButtonText] = useState("Click if you like!");

    function buttonClicked(){
        setButtonText("Success!");
        handleButonClick();
    }

    return (
        <div>
            <motion.button whileHover={{ scale: scaleAmount }} onClick={ () => buttonClicked() }>
                {buttonText}</motion.button>
        </div>
    )
}
export default AnimatedButton