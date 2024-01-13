'use client';

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4 " >
        {/*input*/}
       <div className='relative flex items-center'>
        <Input  type='name' id='name' placeholder='Name' />
        <User className="absolute text-primary right-6" size={20} />

        </div>
         {/*input*/}
       <div className='relative flex items-center'>
        <Input type='email' id='email' placeholder='Email' />
        <MailIcon className="absolute text-primary  right-6" size={20} />

        </div>
         {/*input*/}
       <div className='relative flex items-center'>
        <Textarea placeholder='Type your Message here.' />
        <MessageSquare className="absolute text-primary top-4 right-6" size={20} />

        </div>
        <Button className='bg-primary hover:bg-primary flex gap-x-1 items-center max-w-[166px]' >
            Contact Us Now
            <ArrowRightIcon size={20}/>
        </Button>
    </form>
  );
};

export default Form;