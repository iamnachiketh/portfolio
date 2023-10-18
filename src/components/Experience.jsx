import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component"
import {motion} from "framer-motion";
import {styles} from "../styles"
import SectionWrapper from '../hoc';
import {experiences} from "../constants/index"
import {textVariant} from "../utils/motion"
import 'react-vertical-timeline-component/style.min.css'

const ExperienceCard = ({exp})=>{
  console.log(exp);
  return(
    <VerticalTimelineElement
    contentStyle={{background:"#1d1836", color:"#fff"}}
    contentArrowStyle={{borderRight:"7px solid #232631"}}
    date={exp.date}
    iconStyle={{background:exp.iconBg}}
    icon={
      <div>
        <img 
        src={exp.icon}
        alt={exp.company_name}
        className='w-[100%] h-[100%]
        object-contain'
        />
      </div>
    }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{exp.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}>{exp.company_name}</p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
         {exp.points.map((point,index)=>{
          return(
            <li className='text-white-100 text-[14px]
            pl-1 tracking-wider'>
             {point}
            </li>
          )
         })}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>What I have done so Far</p>
    <h2 className={styles.sectionHeadText}>Work Experience</h2>
    </motion.div>
    <div className='flex mt-20 flex-col'>
     <VerticalTimeline>
      {experiences.map((exp,index)=>{
        return(<ExperienceCard key={index} exp={exp}/>)
      })}
     </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience,'work');