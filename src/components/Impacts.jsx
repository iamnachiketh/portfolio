import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc";
import { impacts } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ImpactCard = ({ index, metric, label, detail }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt
        options={{
          max: 35,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-6 rounded-2xl sm:w-[280px] w-full min-h-[220px] flex flex-col justify-between"
      >
        <div>
          <p className="text-white font-black text-[36px] leading-none">
            {metric}
          </p>
          <h3 className="text-white font-bold text-[18px] mt-3">{label}</h3>
        </div>
        <p className="mt-4 text-secondary text-[14px] leading-[22px]">
          {detail}
        </p>
      </Tilt>
    </motion.div>
  );
};

const Impacts = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What stands out</p>
        <h2 className={styles.sectionHeadText}>Impact.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Production outcomes from owning backend modules end to end: scale,
        speed, and recognition that show how the work lands in the real world.
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-7">
        {impacts.map((impact, index) => (
          <ImpactCard key={impact.label} index={index} {...impact} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Impacts, "impact");
