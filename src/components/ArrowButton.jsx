import React from "react";

const ArrowButton = ({href}) => {
    return(
        <a href={href} className="button style2 down anchored animate-bounce hover:bg-white/25">Next</a>
    )
}

export default ArrowButton;