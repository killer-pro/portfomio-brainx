
import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Get in touch with our team for collaboration opportunities
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-4 flex items-center flex-col ">
              <div className="flex items-center ">
                <Mail className="h-5 w-5 text-indigo-600 mr-3 " />
                <span>mouhamadoudc@ept.sn</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-indigo-600 mr-3" />
                <span>+221706530776</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-indigo-600 mr-3" />
                <span>Ecole polythechnique de Thies , route tivaouane</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
