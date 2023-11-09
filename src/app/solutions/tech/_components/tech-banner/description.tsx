"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const listItem = {
  hidden: { y: "100%" },
  show: {
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Description() {
  const description =
    "Chúng tôi cung cấp các giải pháp thông minh về thiết kế thương hiệu, social media, công nghệ cho các công ty khởi nghiệp và doanh nghiệp.";
  return (
    <motion.p
      variants={container}
      initial="hidden"
      animate="show"
      className="sm:text-lg lg:text-xl max-w-xl"
    >
      {description.split(" ").map((word, index) => (
        <span key={index} className="inline-flex overflow-hidden">
          <motion.span variants={listItem} className="mr-1">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.p>
  );
}
