
import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-syinq-dark mb-4">Syinq</h3>
            <p className="text-syinq-gray mb-6 max-w-md">
              One app for everything you need on campus. Carpooling, marketplace, and community forum 
              designed exclusively for university students.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Instagram size={18} />} />
              <SocialLink icon={<Twitter size={18} />} />
              <SocialLink icon={<Facebook size={18} />} />
              <SocialLink icon={<Linkedin size={18} />} />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-syinq-dark mb-4">Platform</h4>
            <ul className="space-y-3">
              <FooterLink text="Carpooling" />
              <FooterLink text="Marketplace" />
              <FooterLink text="Community" />
              <FooterLink text="Security" />
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-syinq-dark mb-4">Company</h4>
            <ul className="space-y-3">
              <FooterLink text="About Syinq" />
              <FooterLink text="Contact Us" />
              <FooterLink text="Terms & Privacy" />
              <FooterLink text="FAQ" />
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-syinq-gray mb-4 md:mb-0">
            © {new Date().getFullYear()} Syinq. All rights reserved.
          </p>
          
          <p className="text-sm text-syinq-gray flex items-center">
            Made with <Heart className="h-3 w-3 text-red-500 mx-1" /> for campuses everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <a 
      href="#" 
      className="w-10 h-10 rounded-full bg-syinq-lightgray flex items-center justify-center text-syinq-dark hover:bg-syinq-blue hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ text }: { text: string }) => {
  return (
    <li>
      <a href="#" className="text-syinq-gray hover:text-syinq-blue transition-colors">
        {text}
      </a>
    </li>
  );
};

export default Footer;
