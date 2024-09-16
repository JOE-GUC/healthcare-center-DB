"use client"
import { useState } from 'react';
import styles from '@/components/footer/footer.module.css'


const Footer = () => {

  return (
    <div>
      <footer className={styles.footer}>
        <small><p>&copy; {new Date().getFullYear()} Healthcare Center. All Rights Reserved.</p></small>
      </footer>
    </div>
  );

};

export default Footer;