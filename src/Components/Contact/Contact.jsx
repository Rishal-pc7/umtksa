import contactHero from '../../assets/contact-hero.jpg'
import { z } from 'zod';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Card, CardContent } from '../ui/card';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import {  CheckCircle, CircleX } from 'lucide-react';
const userSchema = z.object({
    fname: z.string().min(2, "First name must be at least 2 characters.",),
    email: z.string().email("Invalid email address"),
    lname:z.string().min(1,"Surname is required."),
    mobile:z.string().min(1,"Mobile Number is required."),
    companyName:z.string().min(1,"Company Name is required."),
    subject:z.string().min(10,"Subject is required in min 10 characters"),
    message:z.string().min(10,'Min 10 characters required')
  });
  function Contact() {
    const [success,setSuccess] = useState({status:false,content:'Thank You for Contacting Us'})
    const [fail,setFail] = useState({status:false,content:''})
    useEffect(()=>{
      window.scrollTo(0,0)
  },[success,fail])
    const [formData, setFormData] = useState({ fname: '',lname:'', email: '',mobile:'',companyName:'',subject:'', message: '', });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission behavior
      try {
        // Validate form data
        userSchema.parse(formData);
  
        // Access the form event properties (e.g., for additional data or event functions)
        console.log("Form event object:", formData);
  
        // Send email if validation passes
        emailjs.send(
          'service_c4oc308',
          'template_zq3u6k4',
          formData,
          'RPlaCmGijjUk4HntH'
        ).then(() => {
        emailjs.send(
          'service_c4oc308',
          'template_1pwbt6d',
          {fname:formData.fname,
            lname:formData.lname,
            email:formData.email,
          },
          'RPlaCmGijjUk4HntH'
        ).then(() => {
          setSuccess({...success,status:true})
        })
          
        }).catch((error) => {
          setFail({status:true,content:'Failed to Send Mail '+error})
        });
  
        setErrors({});
      } catch (validationError) {
        if (validationError.errors) {
          // Extract validation errors and set them to display
          const formattedErrors = validationError.errors.reduce((acc, err) => {
            acc[err.path[0]] = err.message;
            return acc;
          }, {});
          setErrors(formattedErrors);
        }
      }
    };
        
  return (
    <div className={`${success.status && 'md:overflow-hidden h-screen relative'}`}>
        {
      success.status || fail.status ? 
      <>
      <div  className="absolute inset-0 bg-white bg-opacity-50"></div>

        <Card   className='absolute top-1/2  left-1/2 w-[95%] md:w-[50%] h-96 -translate-x-1/2 -translate-y-1/2 transform shadow-lg'>
              <CardContent className='flex h-full w-full items-center flex-col justify-end'>
              {success.status&&<CheckCircle size={48} strokeWidth={3} className='text-green-500 text-5xl'/>}
              {fail.status&&<CircleX size={48} strokeWidth={3} className='text-red-500 text-5xl' />}
              <h2 className=' text-xl text-center md:text-3xl font-bold text-gray-900 mt-4'>Thank You For Contacting Us </h2>
              <Button onClick={()=>{location.href='/contact'
                setSuccess({...success,status:false})
                setFail({...fail,status:false})}} className="w-1/2 mt-28">
                 OK
              </Button>
              </CardContent>
              
        </Card>
      </>
      :
      <>
      
        <div style={{backgroundImage:`url('${contactHero}')`}} className='w-full relative  h-[75vh] bg-cover bg-center'>
    <div className='absolute bg-slate-500 inset-0 bg-opacity-50'></div>
    <div className="flex justify-center text-white flex-col items-center h-full ">

        <p className="font-bold text-3xl md:text-5xl z-10">Contact Us</p>
        <p className="font-medium  text-center mt-5 text-xl md:text-3xl z-10 md:w-1/2">Feel free to get in touch with us</p>
        </div>

    </div>
    <div className="flex justify-center w-full h-auto md:h-screen mt-16 relative">
    
    <Card className='md:w-1/2 w-full shadow-lg h-full'>
      <CardContent>

    <form onSubmit={handleSubmit} className="space-y-4 p-4 md:p-22">
    <p className='font-bold text-xl md:text-4xl'>Get In Touch</p>

      {/* Name Field */} 
      <div className=''>
        <Label className='hidden md:block' htmlFor="name">Name</Label>
        <Label className='md:hidden' htmlFor="name">First Name</Label>

        <div className='flex flex-col md:flex-row gap-y-4 md:gap-x-2'>

        <div className="md:w-1/2">
        <Input id="name" className='h-11' name='fname' value={formData.fname} onChange={handleChange} />
        {errors.fname && (
            <p className="text-red-600 text-sm">{errors.fname}</p>
        )}
        </div>
        <div className="md:w-1/2">
        <Label className='md:hidden' htmlFor='lname'>Last Name</Label>
        <Input id="name" className='h-11' name='lname' value={formData.lname} onChange={handleChange} />
        {errors.lname && (
          <p className="text-red-600 text-sm">{errors.lname}</p>
        )}
        </div>
        </div>
      </div>

      {/* Email Field */}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" className='h-11' name='email' value={formData.email} onChange={handleChange}/>
        
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email}</p>
        )}
      </div>
      {/* Mobile Field */}
      <div>
        <Label htmlFor="mob">Mobile Number</Label>
        <Input id="mobile" className='h-11' name='mobile' placeholder='Enter number registered with whatsapp ' value={formData.mobile} onChange={handleChange} />
        
        {errors.mobile && (
          <p className="text-red-600 text-sm">{errors.mobile}</p>
        )}
      </div>
      {/* Company Name Field */}
      <div>
        <Label htmlFor="cmpname">Company Name</Label>
        <Input id="companyName" className='h-11' name='companyName' value={formData.companyName} onChange={handleChange} />
        
        {errors.companyName && (
          <p className="text-red-600 text-sm">{errors.companyName}</p>
        )}
      </div>

      
      {/* Subject Field*/}
      <div>
        <Label htmlFor="sub">Subject</Label>
        <Input id="sub" className='h-11' name='subject' value={formData.subject} onChange={handleChange} />
        
        {errors.subject && (
          <p className="text-red-600 text-sm">{errors.subject}</p>
        )}
      </div>
      {/* Message Field */}
      <div>
        <Label htmlFor="age">Message</Label>
        <Textarea className='outline-0' type="" name='message' value={formData.message} onChange={handleChange}></Textarea> 
        {errors.message && (
          <p className="text-red-600 text-sm">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button className='rounded bg-cyan-700 text-light hover:bg-cyan-600 text-white' type="submit">Submit</Button>
    </form>
      </CardContent>
    </Card>
        </div>
    <div className='flex p-12 md:p-32 gap-x-2 flex-wrap md:flex-nowrap'>
        <div className='w-full md:w-1/2'>
            <p className='font-bold text-xl md:text-4xl'>Our Location</p>
            <h1 className='font-normal text-slate-500 text-lg md:text-xl mt-4'>
            Visit us for quality construction and plumbing materials. We are dedicated to providing the best hardware solutions for your projects
            </h1>
            <p className='font-bold text-lg mt-14 md:text-xl'>Address</p>
            <h1 className='font-normal text-slate-500 text-md md:text-lg'>123 Hardware Lane, City</h1>
            <p className='font-bold text-lg mt-4 md:text-xl'>Hours</p>
            <h1 className='font-normal text-slate-500 text-md md:text-lg'>9 AM - 5 PM</h1>

        </div>
        <div className="w-full md:w-1/2 h-[25vh] mt-7 md:mt-0 md:h-[75vh]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47368.39682225005!2d-72.489385!3d42.09623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6e85bbff73363%3A0x5241d930e1909b8f!2sHilltop%20St%2C%20Springfield%2C%20MA%2001128!5e0!3m2!1sen!2sus!4v1729356198019!5m2!1sen!2sus" 
        className='w-full h-full' style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </div>


    </div>
      </>
    }
    </div>
  )
}

export default Contact