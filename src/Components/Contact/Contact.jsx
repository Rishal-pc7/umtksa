import contactHero from '../../assets/contact-hero.jpg'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
const userSchema = z.object({
    fname: z.string().min(2, "First name must be at least 2 characters.",),
    email: z.string().email("Invalid email address"),
    lname:z.string().min(1,"Surname is required.",),
    message:z.string().min(10,'Min 10 characters required')
  });
function Contact() {
      const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm({
          resolver: zodResolver(userSchema),
        });
        const onSubmit = (data) => {
            console.log("Form Data:", data);
          };
  return (
    <>
        <div style={{backgroundImage:`url('${contactHero}')`}} className='w-full relative  h-[75vh] bg-cover bg-center'>
    <div className='absolute bg-black inset-0 bg-opacity-45'></div>
    <div className="flex justify-center text-white flex-col items-center h-full ">

        <p className="font-bold text-3xl md:text-5xl z-10">Contact Us</p>
        <p className="font-medium  text-center mt-5 text-xl md:text-3xl z-10 md:w-1/2">Feel free to get in touch with us</p>
        </div>

    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-12 md:p-32">
    <p className='font-bold text-xl md:text-4xl'>Get In Touch</p>

      {/* Name Field */} 
      <div className=''>
        <Label htmlFor="name">Name</Label>
        <div className='flex gap-x-1 md:gap-x-2'>

        <div className="w-1/2">
        <Input id="name" {...register("fname")} />
        {errors.fname && (
            <p className="text-red-600 text-sm">{errors.fname.message}</p>
        )}
        </div>
        <div className="w-1/2">
        <Input id="name" {...register("lname")} />
        {errors.lname && (
            <p className="text-red-600 text-sm">{errors.lname.message}</p>
        )}
        </div>
        </div>
      </div>

      {/* Email Field */}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" {...register("email")} />
        
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <Label htmlFor="age">Message</Label>
        <Textarea className='outline-0' type="" {...register("message")}></Textarea> 
        {errors.message && (
          <p className="text-red-600 text-sm">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button className='rounded bg-cyan-700 text-light hover:bg-cyan-600 text-white' type="submit">Submit</Button>
    </form>
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
  )
}

export default Contact