
import React, { useEffect, useRef } from 'react';
import { ChevronDown, Zap, Shield, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
// Import lottie without type checking
// @ts-ignore
import lottie from 'lottie-web';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('carpooling');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: any;
    if (animationContainer.current) {
      // Import the animation data
      import('@/assets/campus-animation.json').then((animationData) => {
        anim = lottie.loadAnimation({
          container: animationContainer.current!,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: animationData.default
        });
      }).catch(err => {
        console.error("Failed to load animation data:", err);
        // Fallback if animation fails to load
        if (animationContainer.current) {
          animationContainer.current.innerHTML = `
            <div class="flex items-center justify-center h-full">
              <div class="bg-syinq-lightgray rounded-xl p-8 relative overflow-hidden">
                <div class="absolute -right-10 -top-10 w-40 h-40 bg-syinq-blue/10 rounded-full"></div>
                <div class="absolute -left-10 -bottom-10 w-40 h-40 bg-syinq-green/10 rounded-full"></div>
                <div class="relative z-10 flex flex-col items-center">
                  <div class="text-3xl font-bold mb-2">Syinq</div>
                  <div class="text-sm text-syinq-gray mb-4">Campus Life Simplified</div>
                  <div class="bg-white p-3 rounded-lg shadow-sm w-56 mb-3">
                    <div class="text-xs text-left">
                      <div class="font-semibold mb-1">Hey! Need a ride to campus tomorrow?</div>
                      <div class="text-syinq-blue">Found 3 matches near you 🚗</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
        }
      });
    }

    return () => {
      if (anim) {
        anim.destroy();
      }
    };
  }, []);

  // Staggered delay variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50
      }
    }
  };

  const featureVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section className="min-h-screen pt-20 md:pt-24 flex flex-col justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-40 h-40 bg-syinq-blue rounded-full opacity-5 -ml-20"></div>
      <div className="absolute top-1/4 right-0 w-60 h-60 bg-syinq-green rounded-full opacity-5 -mr-20"></div>
      
      <div className="section-container flex flex-col md:flex-row items-center">
        {/* Left Text Column */}
        <motion.div 
          className="w-full md:w-1/2 text-left mb-12 md:mb-0 md:pr-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            variants={itemVariants}
          >
            One App. <br className="md:hidden" />
            <span className="bg-gradient-to-r from-syinq-blue to-syinq-green bg-clip-text text-transparent">
              For Every Campus Move.
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-syinq-gray max-w-xl mb-10"
            variants={itemVariants}
          >
            Carpool. Connect. Exchange. All in one safe, student-powered platform.
          </motion.p>
          
          {/* Feature Icons */}
          <motion.div 
            className="grid grid-cols-3 gap-4 md:gap-6 mb-10"
            variants={containerVariants}
          >
            <motion.div 
              className="flex flex-col items-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              variants={featureVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-full bg-syinq-blue/10 flex items-center justify-center mb-2">
                <Zap className="h-6 w-6 text-syinq-blue" />
              </div>
              <span className="text-sm font-medium">Fast</span>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              variants={featureVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-full bg-syinq-green/10 flex items-center justify-center mb-2">
                <Shield className="h-6 w-6 text-syinq-green" />
              </div>
              <span className="text-sm font-medium">Secure</span>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              variants={featureVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-full bg-syinq-gray/10 flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-syinq-gray" />
              </div>
              <span className="text-sm font-medium">Social</span>
            </motion.div>
          </motion.div>
          
          {/* Explore Button */}
          <motion.button 
            onClick={scrollToFeatures}
            className={cn(
              "apple-button group flex items-center",
              "px-8 py-4 text-lg"
            )}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Features
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              <ChevronDown className="ml-2" />
            </motion.div>
          </motion.button>
        </motion.div>
        
        {/* Right Animation Column */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative rounded-2xl overflow-hidden bg-white shadow-md">
            {/* Lottie Animation Container */}
            <div ref={animationContainer} className="w-full aspect-video"></div>
            
            {/* Message Notification */}
            <div className="absolute bottom-6 right-6 bg-white rounded-xl p-3 shadow-lg max-w-[200px] transform transition-all duration-300 hover:scale-105">
              <p className="text-xs font-medium mb-1">Hey! Need a ride to campus tomorrow?</p>
              <p className="text-xs text-syinq-blue">Found 3 matches near you 🚗</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Coming Soon Section */}
      <motion.div 
        className="mt-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="text-lg font-medium mb-4">Coming Soon</p>
        
        <div className="flex justify-center space-x-4 mb-6">
          <button className="apple-button-secondary bg-gray-200 text-syinq-gray flex justify-center items-center space-x-3 opacity-70 cursor-not-allowed">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5649 12.3664C17.5077 9.71861 19.6909 8.21003 19.7785 8.15272C18.6266 6.42874 16.8136 6.18516 16.175 6.15772C14.6239 5.99949 13.1299 7.03974 12.3425 7.03974C11.5414 7.03974 10.3209 6.17617 9.01344 6.20361C7.35146 6.23104 5.81609 7.14646 4.96891 8.59132C3.22435 11.5357 4.52736 15.8511 6.18934 18.224C7.02765 19.3731 8.02084 20.6682 9.32385 20.6133C10.5991 20.5584 11.0629 19.7904 12.5865 19.7904C14.0964 19.7904 14.5328 20.6133 15.8494 20.5858C17.2073 20.5584 18.0593 19.4367 18.866 18.2767C19.8181 16.9542 20.2134 15.6592 20.2271 15.5906C20.1972 15.5768 17.6258 14.5913 17.5649 12.3664Z" />
              <path d="M15.585 4.42178C16.2647 3.58566 16.7285 2.44139 16.6127 1.28271C15.640 1.32456 14.4332 1.94537 13.7261 2.76707C13.1024 3.48967 12.5451 4.68463 12.6746 5.78261C13.7671 5.86736 14.8777 5.2466 15.585 4.42178Z" />
            </svg>
            <span>App Store</span>
          </button>
          
          <button className="apple-button-secondary bg-gray-200 text-syinq-gray flex justify-center items-center space-x-3 opacity-70 cursor-not-allowed">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.2037 10.5163L3.78453 19.7774C3.78453 19.7774 3.78453 19.7774 3.76461 19.7774C4.17607 20.3386 4.90717 20.739 5.71805 20.739C6.1096 20.739 6.46138 20.6592 6.79323 20.4995L6.87269 20.4597L16.035 15.0862L12.2037 10.5163Z" />
              <path d="M20.2157 9.37245C19.725 8.97205 19.1547 8.73228 18.5647 8.63242L18.5051 8.59254C17.9152 8.49267 17.3252 8.57261 16.7949 8.8323L16.7353 8.85224L12.0051 11.5941L16.0944 16.4641L20.1837 14.0226C20.6744 13.7629 21.0659 13.3625 21.3182 12.8623C21.5507 12.3621 21.6699 11.8419 21.6501 11.3019V11.2619C21.6103 10.562 21.065 9.83232 20.2157 9.37245Z" />
              <path d="M3.08691 3.94169C3.00745 4.1216 2.96762 4.32139 2.96762 4.5411V19.4186C2.96762 19.6583 3.0274 19.8781 3.12677 20.078L11.8434 10.516L3.08691 3.94169Z" />
              <path d="M12.1042 10.4767L16.5732 7.89507L12.5038 3.4217L5.71802 3.26196C4.90714 3.26196 4.19597 3.64244 3.78451 4.20361C3.76459 4.2235 3.76459 4.2235 3.76459 4.24338L12.1042 10.4767Z" />
            </svg>
            <span>Play Store</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
