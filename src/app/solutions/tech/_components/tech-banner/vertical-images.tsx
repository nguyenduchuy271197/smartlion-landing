"use client";

import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function VerticalImages() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const springY = useSpring(y, { stiffness: 5, damping: 10 });
  return (
    <motion.div
      className="w-[500px] flex flex-col gap-8"
      style={{
        y: springY,
      }}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants={listItem}
        className="w-[300px] h-[150px] bg-primary odd:ml-auto rounded-lg"
      ></motion.div>
      <motion.div
        variants={listItem}
        className="w-[300px] h-[150px] bg-primary odd:ml-auto rounded-lg"
      ></motion.div>
      <motion.div
        variants={listItem}
        className="w-[300px] h-[150px] bg-primary odd:ml-auto rounded-lg"
      ></motion.div>
      <motion.div
        variants={listItem}
        className="w-[300px] h-[150px] bg-primary odd:ml-auto rounded-lg"
      ></motion.div>
      <motion.div
        variants={listItem}
        className="w-[300px] h-[150px] bg-primary odd:ml-auto rounded-lg"
      ></motion.div>
      <motion.div
        variants={listItem}
        className="w-[300px] h-[150px] bg-primary odd:ml-auto rounded-lg"
      ></motion.div>
      <motion.div
        variants={listItem}
        className="w-[300px] h-[150px] bg-primary odd:ml-auto rounded-lg"
      ></motion.div>
      <motion.div
        variants={listItem}
        className="w-[300px] h-[150px] bg-primary odd:ml-auto rounded-lg"
      ></motion.div>
    </motion.div>
  );
}
