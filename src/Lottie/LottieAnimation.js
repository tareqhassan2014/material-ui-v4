import React from "react";
import Lottie from "react-lottie";

const LottieAnimation = ({ animationData }) => {
    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return <Lottie options={defaultOptions} height={"100%"} width={"100%"} />;
};

export default LottieAnimation;
