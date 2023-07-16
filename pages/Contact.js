import React from 'react';

const ContactButton = () => {
  const ContactMe = () => {
    const email = 'chiedozie.ehileme@gmail.com';
    const emailToLink  = `mailto:${email}`;

    window.open(emailToLink);
    
  };

  return (
    <button
      className="bg bg-gradient-to-r from-blue-500 to-blue-400 bg-blue-500 text-white px-10 py-2 rounded-lg ml-8 font-bold"
      onClick={ContactMe}
    >
      Contact Me
    </button>
  );
};

export default ContactButton;
