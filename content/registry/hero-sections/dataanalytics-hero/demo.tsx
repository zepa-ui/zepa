"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const textMaskReveal = {
  hidden: { y: "110%" },
  visible: (delay: number) => ({
    y: 0,
    transition: { duration: 0.85, ease, delay },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay },
  }),
};

const Hero2 = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Gradient background with grain effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease }}
        className="absolute -right-60 -top-10 z-0 flex flex-col items-end blur-xl"
      >
        <div className="z-1 h-[10rem] w-[60rem] rounded-full bg-gradient-to-b blur-[6rem] from-purple-600 to-sky-600"></div>
        <div className="z-1 h-[10rem] w-[90rem] rounded-full bg-gradient-to-b blur-[6rem] from-pink-900 to-yellow-400"></div>
        <div className="z-1 h-[10rem] w-[60rem] rounded-full bg-gradient-to-b blur-[6rem] from-yellow-600 to-sky-500"></div>
      </motion.div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-noise opacity-[0.04]"></div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Badge */}
        <motion.div
          custom={0.15}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-12 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
        >
          <span className="text-sm font-medium text-white">
            Join the revolution today!
          </span>
          <ArrowRight className="h-4 w-4 text-white" />
        </motion.div>

        {/* Hero section */}
        <div className="container mx-auto mt-12 px-4 text-center">
          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                custom={0.28}
                variants={textMaskReveal}
                initial="hidden"
                animate="visible"
              >
                Unbeatable Pricing for
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                custom={0.4}
                variants={textMaskReveal}
                initial="hidden"
                animate="visible"
              >
                Dynamic Email Tools
              </motion.span>
            </span>
          </h1>

          <motion.p
            custom={0.55}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
          >
            Delivering unmatched email campaigns every day at unbeatable rates.
            Our tool redefines cost-effectiveness. Now!!!
          </motion.p>

          <motion.div
            custom={0.68}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <button className="h-12 rounded-full bg-white px-8 text-base font-medium text-black transition hover:bg-white/90">
              Start Your 7 Day Free Trial
            </button>
            <button className="h-12 rounded-full border border-gray-600 px-8 text-base font-medium text-white transition hover:bg-white/10">
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
              mass: 0.8,
              delay: 0.5,
            }}
            className="relative mx-auto my-20 w-full max-w-6xl"
          >
            <div className="absolute inset-0 rounded shadow-lg bg-white blur-[10rem] bg-grainy opacity-20" />

            <img
              src="https://kikxai.netlify.app/_next/image?url=%2Fassets%2Fhero-image.png&w=1920&q=75"
              alt="Hero Image"
              className="relative h-auto w-full rounded shadow-md grayscale"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export { Hero2 };
export default Hero2;
