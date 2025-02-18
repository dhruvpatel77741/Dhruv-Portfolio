import React from "react";
import dynamic from "next/dynamic";

type Props = {
  animationPath: string | object; 
};

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

const GreetingLottie = ({ animationPath }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    ...(typeof animationPath === "string"
      ? { path: animationPath }
      : { animationData: animationPath }), 
  };

  return (
    <div onClick={() => null}>
      <Lottie options={defaultOptions as any} />
    </div>
  );
};

export default GreetingLottie;
