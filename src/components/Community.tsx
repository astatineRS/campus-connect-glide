
import React from 'react';
import { Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Community = () => {
  return (
    <section id="community" className="py-20 relative overflow-hidden">
      <div className="absolute -right-20 bottom-1/3 w-80 h-80 bg-syinq-blue/5 rounded-full blur-3xl"></div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-block bg-syinq-blue/10 p-3 rounded-2xl mb-4">
            <Users className="h-6 w-6 text-syinq-blue" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Community Forum –
            <span className="text-syinq-blue"> Where Campus Talks</span>
          </h2>
          <p className="text-lg text-syinq-gray">
            Connect with peers, share information, and stay updated on campus events.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto reveal-on-scroll">
          <div className="relative">
            <div className="flex justify-center mb-8">
              <button className="p-2 bg-white rounded-full shadow-sm mr-4 hover:bg-syinq-lightgray transition-colors">
                <ChevronLeft className="h-5 w-5 text-syinq-dark" />
              </button>
              <button className="p-2 bg-white rounded-full shadow-sm hover:bg-syinq-lightgray transition-colors">
                <ChevronRight className="h-5 w-5 text-syinq-dark" />
              </button>
            </div>
            
            <div className="flex space-x-6 overflow-x-auto pb-8 snap-x">
              <ForumCard 
                title="Lost my Student ID"
                author="Alex Chen"
                avatar="AC"
                time="2 hours ago"
                replies={8}
                color="blue"
                tag="Help"
              />
              
              <ForumCard 
                title="Fresher's Party Updates 🎉"
                author="Mia Johnson"
                avatar="MJ"
                time="Yesterday"
                replies={24}
                color="green"
                tag="Event"
                featured={true}
              />
              
              <ForumCard 
                title="Need a roommate urgently"
                author="James Smith"
                avatar="JS"
                time="3 days ago"
                replies={15}
                color="gray"
                tag="Housing"
              />
              
              <ForumCard 
                title="Study group for finals"
                author="Emma Wilson"
                avatar="EW"
                time="1 week ago"
                replies={32}
                color="blue"
                tag="Academic"
              />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="apple-button-secondary">
              View All Posts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ForumCardProps {
  title: string;
  author: string;
  avatar: string;
  time: string;
  replies: number;
  color: 'blue' | 'green' | 'gray';
  tag: string;
  featured?: boolean;
}

const ForumCard = ({ title, author, avatar, time, replies, color, tag, featured = false }: ForumCardProps) => {
  const colorClasses = {
    blue: {
      bg: 'bg-syinq-blue',
      text: 'text-syinq-blue',
      light: 'bg-syinq-blue/10',
    },
    green: {
      bg: 'bg-syinq-green',
      text: 'text-syinq-green',
      light: 'bg-syinq-green/10',
    },
    gray: {
      bg: 'bg-syinq-gray',
      text: 'text-syinq-gray',
      light: 'bg-syinq-gray/10',
    },
  };
  
  return (
    <div 
      className={cn(
        "min-w-[280px] max-w-[280px] snap-start",
        "bg-white rounded-2xl shadow-sm border border-gray-100",
        "transition-all duration-300 hover:shadow-md hover:-translate-y-1",
        featured && "ring-2 ring-syinq-blue/20"
      )}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <span className={cn("text-xs px-2 py-1 rounded-full", colorClasses[color].light, colorClasses[color].text)}>
            {tag}
          </span>
          {featured && (
            <span className="bg-syinq-blue/10 text-syinq-blue text-xs px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <h3 className="font-semibold text-lg mb-4">{title}</h3>
        
        <div className="flex items-center mt-6">
          <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium", colorClasses[color].bg)}>
            {avatar}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">{author}</p>
            <p className="text-xs text-syinq-gray">{time}</p>
          </div>
          <div className="ml-auto text-xs bg-syinq-lightgray py-1 px-2 rounded-full text-syinq-gray">
            {replies} replies
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
