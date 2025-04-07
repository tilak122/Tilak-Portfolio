import React from 'react';

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

export default Contact;
