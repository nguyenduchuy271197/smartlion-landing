"use client";

import { ProcessStep } from "./tech-process";
import { motion, Variants } from "framer-motion";

interface TechProcessStepProps {
  step: ProcessStep;
  index: number;
}

const motionVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5,
    },
  },
};

export default function TechProcessStep({ step, index }: TechProcessStepProps) {
  return (
    <motion.li
      variants={motionVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className="relative mb-[calc(var(--stepper-size)*2)] sm:mb-[calc(var(--stepper-size))] pl-[var(--stepper-size)]"
    >
      <span className="absolute flex items-center justify-center w-[var(--stepper-size)] aspect-[1/1] bg-primary rounded-full -left-[calc(var(--stepper-size)/2)] ring-8 ring-white text-5xl text-primary-foreground font-bold">
        {index + 1}
      </span>
      <div className="space-y-2 sm:space-y-6 max-h-[var(--stepper-size)] pt-2">
        <h3 className="font-medium leading-tight text-2xl sm:text-4xl">
          {step.headline}
        </h3>
        <ul className="sm:text-xl list-disc pl-8 space-y-2">
          {step.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
}
