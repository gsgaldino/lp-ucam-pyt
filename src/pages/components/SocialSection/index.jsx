import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import './responsive.css';
import './styles.css';

export default function SocialSection(){
  return (
    <div className="Social__Section">
      <FaLinkedinIn />
      <FaFacebookF />
      <FaInstagram />
      <FaTwitter />
    </div>
  )
}
