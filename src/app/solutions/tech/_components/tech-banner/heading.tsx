"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const container = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
  },
};

export default function Heading() {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-4xl sm:text-5xl md:text-5xl font-medium max-w-xl"
    >
      Thúc đẩy sự phát triển thông qua giải pháp công nghệ
      {/* <TypeAnimation
        sequence={["SMART", 1000, "TECH", 1000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-primary"
      /> */}
    </motion.h1>
  );
}
