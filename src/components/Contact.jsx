import React,{useRef,useState} from 'react';
import {styles} from "../styles";
import SectionWrapper from '../hoc'; "../hoc/index"
import {slideIn} from "../utils/motion";
import {EarthCanvas} from "./canvas/index";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [Form, setForm] = useState({
    name:'',
    email:'',
    message:''
  });
  const [Loading,setLoading] = useState(false);
  const handleChange = (e)=>{
      const {name,value} = e.target;
      setForm({...Form,[name]:value})
  };
  const handleSubmit = (e)=>{
   e.preventDefault();
   setLoading(true);
   emailjs.send('','',{
    from_name:Form.name,
    to_name:'Nachiketha',
    from_email:Form.email,
    to_email:'4nm20cs113@nmamit.in',
    message:Form.message
   },'').then(()=>{
    setLoading(false);
    alert('Thank you I will get back to you as soon as possible !!');
    setForm({
      name:'',
      email:'',
      message:''
    })
   },(error)=>{
     setLoading(false);
     alert("Something went wrong !!");
     console.log(error);
   })

  }
  return (
    <div className='xl:mt-12 xl:flex-row 
    flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn("left","tween",0.2,1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form 
        ref={formRef}
        className='mt-12 flex flex-col gap-8'
        onSubmit={handleSubmit}
        >
          <label className='flex flex-col'>
            <span className='mb-4 text-white font-medium'>Your Name</span>
            <input 
            placeholder="What's your name"
            onChange={handleChange}
            name='name'
            type='text'
            value={Form.name}
            className='bg-tertiary py-6 px-4
            boder-none placeholder:text-secondary text-white 
            rounded-lg outline-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 text-white font-medium'>Your Email</span>
            <input 
            placeholder="What's your email"
            onChange={handleChange}
            name='name'
            type='text'
            value={Form.email}
            className='bg-tertiary py-6 px-4
            boder-none placeholder:text-secondary text-white 
            rounded-lg outline-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 text-white font-medium'>Your Message</span>
            <textarea
            rows="7"
            placeholder="Write your message here"
            onChange={handleChange}
            name='message'
            type='text'
            value={Form.message}
            className='bg-tertiary py-6 px-4
            boder-none placeholder:text-secondary text-white 
            rounded-lg outline-none font-medium'
            />
          </label>
          <button type='submit'
          className='bg-tertiary py-3 px-8 outline-none
          w-fit text-white font-bold shadow-md shadow-primary
          rounded-xl'
          >
            {Loading? "Sending...":"Send"}
          </button>

        </form>
      </motion.div>
      <motion.div
      variants={slideIn("right","tween",0.2,1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
    <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");