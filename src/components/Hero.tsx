
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('carpooling');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-20 md:pt-24 flex flex-col justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-40 h-40 bg-syinq-blue rounded-full opacity-5 -ml-20"></div>
      <div className="absolute top-1/4 right-0 w-60 h-60 bg-syinq-green rounded-full opacity-5 -mr-20"></div>
      
      <div className="section-container flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
          One App. <br className="md:hidden" />
          <span className="bg-gradient-to-r from-syinq-blue to-syinq-green bg-clip-text text-transparent">
            For Every Campus Move.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-syinq-gray max-w-2xl mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Carpool. Connect. Exchange. All in one safe, student-powered platform.
        </p>
        
        {/* Hero Image/Animation */}
        <div className="relative w-full max-w-3xl mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative aspect-[16/9] bg-gradient-to-b from-syinq-lightgray to-white rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="flex justify-center space-x-8 mb-6">
                  <div className="animate-float" style={{ animationDelay: '0s' }}>
                    <div className="w-16 h-16 bg-syinq-blue/10 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-syinq-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="mt-2 text-sm text-syinq-dark">Fast</p>
                  </div>
                  <div className="animate-float" style={{ animationDelay: '0.3s' }}>
                    <div className="w-16 h-16 bg-syinq-green/10 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-syinq-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="mt-2 text-sm text-syinq-dark">Secure</p>
                  </div>
                  <div className="animate-float" style={{ animationDelay: '0.6s' }}>
                    <div className="w-16 h-16 bg-syinq-gray/10 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-syinq-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="mt-2 text-sm text-syinq-dark">Social</p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-48 h-24 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                    <div className="text-center">
                      <p className="text-xs text-syinq-gray">Campus Experience</p>
                      <p className="text-base font-semibold text-syinq-dark">Simplified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <button 
          onClick={scrollToFeatures}
          className={cn(
            "apple-button group animate-fade-in flex items-center",
            "mt-8 px-8 py-4 text-lg"
          )}
          style={{ animationDelay: '0.3s' }}
        >
          Explore Features
          <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
