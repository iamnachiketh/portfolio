import React from "react";
import { styles } from "../styles";
import SectionWrapper from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas/index";
import { motion } from "framer-motion";
import { socials } from "../constants";

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Connect.</h3>
        <p className="mt-4 text-secondary text-[16px] leading-[28px] max-w-md">
          Open to backend roles and collaborations. Reach out directly — I
          respond fastest over email or LinkedIn.
        </p>

        <div className="mt-10 flex flex-col gap-5">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex flex-col gap-1 bg-tertiary p-4 rounded-xl hover:bg-[#1d1836] transition-colors"
            >
              <span className="text-secondary text-[13px] uppercase tracking-wider">
                {item.label}
              </span>
              <span className="text-white font-medium text-[16px]">
                {item.value}
              </span>
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
