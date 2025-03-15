import React from 'react';
import { Phone, MapPin, Link as LinkIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#332f2f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>+91 95973 42871</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>137, Tamil Sangam Rd, Salem, Tamil Nadu 636007</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Location</h3>
            <div className="h-48 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.458437482548!2d78.150848!3d11.661887600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf127193d0099%3A0x67ab0ee0c4e7c243!2sGaneshaa%20Sutra!5e0!3m2!1sen!2sin!4v1741935705248!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex items-center space-x-2">
              <LinkIcon className="h-5 w-5" />
              <a 
                href="https://linktr.ee/ganeshaasutra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#599c56] transition-colors"
              >
                Find us on Linktree
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;