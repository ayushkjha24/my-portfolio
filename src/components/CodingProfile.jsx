import gfg from "../assets/websites/gfg.png";
import leetcode from "../assets/websites/leetcode.png";
import hackerrank from "../assets/websites/hackerrank.png";
import codechef from "../assets/websites/codechef.png";

import { motion } from  "framer-motion";
const iconVariants = (duration)  => ({
    initial: {y:-10 },
    animate : {
      y:[10,-10],
      transition: {
        duration : duration,
        ease:"linear",
        repeat: Infinity,
        repeatType:"reverse",
      },
    },
});

const CodingProfile = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
    <motion.h2 
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}}
    className="my-20 text-center font-bold text-4xl">My Coding Profile</motion.h2>
    <motion.div 
    whileInView={{ opacity:1,x:0 }}
    initial={{ opacity:0,x:-100 }} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
      <motion.div
        variants = {iconVariants(2.5)}
        initial="initial"
        animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <a href="https://www.geeksforgeeks.org/user/ayushkjzc3x/"><img src={ gfg } alt="geeksforgeeks" height={50} width={100} /></a>
      </motion.div>
      <motion.div
        variants = {iconVariants(2.5)}
        initial="initial"
        animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <a href="https://leetcode.com/u/ayushkjha24/"><img src={ leetcode } alt="leetcode" height={50} width={100}/></a>
      </motion.div>
      <motion.div
        variants = {iconVariants(2.5)}
        initial="initial"
        animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <a href="https://www.hackerrank.com/profile/ayushkjha_2004"><img src={ hackerrank } alt="leetcode" height={20} width={70}/></a>
      </motion.div>
      <motion.div
        variants = {iconVariants(2.5)}
        initial="initial"
        animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <a href="https://www.codechef.com/users/ayushkjha2004"><img src={ codechef } alt="leetcode" height={20} width={70}/></a>
      </motion.div>
      </motion.div>
      </div>
  );
};

export default CodingProfile