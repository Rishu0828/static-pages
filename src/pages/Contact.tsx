import React from 'react';
import ContactImg from '@/assets/banner/Contact.png';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact: React.FC = () => {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-transparent text-white z-50 text-black dark:text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Section: Info + Image */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-base mb-2">
              For any queries, please reach out to us. Our support team will get back to you within 24 hours.
            </p>
            <p className="text-sm font-medium">📧 Support@dal.com</p>
            <p className="text-sm font-medium">📞 9241943339</p>
          </div>
          <div className="w-full max-w-md">
            <img src={ContactImg} alt="Contact" className="w-full h-auto object-contain rounded-xl" />
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="w-full max-w-md">
          <div>
            <h1 className="text-xl font-bold italic mb-4">Send us a message</h1>
          </div>

          <form className="flex flex-col gap-6">
            {/* Name */}
            <Input
              placeholder="Name"
              className="border-0 border-b border-white bg-transparent rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-300"
            />

            {/* Email */}
            <Input
              type="email"
              placeholder="Email"
              className="border-0 border-b border-white bg-transparent rounded-none focus-visible:ring-0 focus-visible:ring-offset-0  placeholder:text-gray-300"
            />

            {/* Phone */}
            <Input
              type="tel"
              placeholder="Phone"
              className="border-0 border-b border-white bg-transparent rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-300"
            />

            {/* Message */}
            <Textarea
              placeholder="Your Message"
              rows={4}
              className="border border-white bg-transparent rounded-md focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-300 resize-none"
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full mt-4">
              Submit
            </Button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
