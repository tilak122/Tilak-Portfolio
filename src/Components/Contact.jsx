/*import React from 'react';

const Contact = () => {
  return (
    <div id='Contact' className='w-full py-10 bg-[#CDEA68] rounded-3xl px-5 md:px-20'>
      <div className='w-full border-b-[1px] border-zinc-700 pb-5'>
        <h1 className='text-[10vw] md:text-[5vw] tracking-tighter font-["Oswald"] text-center md:text-left'>Contact</h1>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-evenly mt-10 gap-10 md:gap-0'>
        <div className='text-center md:text-left'>
          <h1 className='text-xl md:text-3xl font-["Boldon"] font-semibold tracking-tight'><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent?compose=DmwnWrRsqXlqDJsPTwTjFDTvWJRSlZQWRbGGvJNjDGrLQNSXqXZKjTNLMvRHhgmZxBFZRVbDWCmV">tilakasthana007@gmail.com</a></h1>
        </div>
        <div className='flex flex-col items-center gap-5'>
          <a href="https://www.instagram.com/tilak_asthana/" className='text-[8vw] md:text-[3vw] tracking-tighter font-["Oswald"]'>Instagram</a>
          <a href="https://www.linkedin.com/in/tilak-asthana-8831b4317/" className='text-[8vw] md:text-[3vw] tracking-tighter font-["Oswald"]'>LinkedIn</a>
          <a href="https://github.com/dashboard" className='text-[8vw] md:text-[3vw] tracking-tighter font-["Oswald"]'>Github</a>
        </div>
        <div className='text-center md:text-right'>
          <h1 className='text-xl md:text-3xl font-["Boldon"] font-semibold tracking-tight'>Phone: 6306212432</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;*/
import React from 'react';

const Contact = () => {
  return (
    <div id="Contact" className="w-full py-16 bg-gradient-to-r from-[#CDEA68] via-green-300 to-[#CDEA68] rounded-3xl px-6 md:px-20 shadow-2xl">
      {/* Title */}
      <div className="w-full border-b-2 border-zinc-700 pb-8">
        <h1 className="text-[10vw] md:text-[5vw] tracking-tighter font-['Oswald'] text-center md:text-left text-zinc-900">
          Contact
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-12">
        {/* Email */}
        <div className="text-center md:text-left">
          <h1 className="text-lg md:text-2xl font-semibold tracking-tight text-zinc-800 hover:text-zinc-900 transition-all duration-300">
            <a 
              href="mailto:tilakasthana007@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:decoration-wavy"
            >
              tilakasthana007@gmail.com
            </a>
          </h1>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-6">
          {[
            { name: "Instagram", url: "https://www.instagram.com/tilak_asthana/" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/tilak-asthana-8831b4317/" },
            { name: "GitHub", url: "https://github.com/tilakasthana" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[8vw] md:text-[2.5vw] font-['Oswald'] tracking-tight text-zinc-800 hover:text-zinc-900 hover:scale-105 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Phone */}
        <div className="text-center md:text-right">
          <h1 className="text-lg md:text-2xl font-semibold tracking-tight text-zinc-800">
            Phone no: 
            <span className="block mt-1 text-green-900">6306212432</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;

