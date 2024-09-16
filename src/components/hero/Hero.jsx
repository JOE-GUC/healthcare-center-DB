"use client";
import React from 'react';
import styles from './hero.module.css';
import Link from 'next/link';

export default function Home() {
    return (
        <div className={styles.pageContainer}>
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        <b>Welcome to <br /> Our Healthcare Center</b>
                    </h1>
                    <p className={styles.heroText}>
                        Your health is our priority. We provide comprehensive healthcare services to ensure you and your family remain healthy and safe.
                    </p>
                    <Link href="/dashboard?section=Appointments">
                        <button className={styles.ctaButton}>Book an Appointment</button>
                    </Link>        
                </div>
            </section>

            <section className={styles.aboutSection}>
                <h2 className={styles.sectionTitlex}>About Us</h2>
                <div className={styles.aboutContent}>
                    <p>
                        At <strong>Our Healthcare Center</strong> we are committed to providing exceptional care to all our patients.
                        Our highly skilled team of healthcare professionals delivers personalized medical services tailored to meet your specific needs.
                        With cutting-edge facilities and a compassionate approach, we aim to ensure a healthier, happier community.
                    </p>
                    <p>
                        Our mission is to provide accessible, affordable, and quality healthcare services while promoting wellness and
                        preventative care. We pride ourselves on our commitment to excellence in every aspect of our service delivery.
                    </p>
                    <p>
                        Whether you are seeking routine checkups, emergency care, or specialized treatments, you can trust that
                        you are in safe hands at Our Healthcare Center.
                    </p>
                </div>
            </section>
            <section className={styles.servicesSection}>
                <h2 className={styles.sectionTitle}>Our Services</h2>
                <div className={styles.imageGrid}>
                    <div className={styles.gridItem}>
                        <img src="/images (1).jpeg/" alt="General Checkups" className={styles.serviceImage} />
                        <p className={styles.imageCaption}>General Checkups</p>
                    </div>
                    <div className={styles.gridItem}>
                        <img src="/images (1).jpeg/" alt="General Checkups" className={styles.serviceImage} />
                        <p className={styles.imageCaption}>General Checkups</p>
                    </div>
                    <div className={styles.gridItem}>
                        <img src="/images (2).jpeg/" alt="Specialist Consultation" className={styles.serviceImage} />
                        <p className={styles.imageCaption}>Specialist Consultation</p>
                    </div>
                    <div className={styles.gridItem}>
                        <img src="/images (5).jpeg/" alt="Emergency Care" className={styles.serviceImage} />
                        <p className={styles.imageCaption}>Emergency Care</p>
                    </div>
                    <div className={styles.gridItem}>
                        <img src="/download.jpeg/" alt="Laboratory Services" className={styles.serviceImage} />
                        <p className={styles.imageCaption}>Laboratory Services</p>
                    </div>
                </div>
            </section>


            <section className={styles.mapSection}>
                <h2 className={styles.sectionTitle}>Find Us</h2>
                <p className={styles.mapText}>We are conveniently located near the Douala Airport, Cameroon. Visit us today or contact us for more information!</p>
                <div className={styles.mapContainer}>
                    <iframe
                        title="Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.770516924013!2d9.715524614758702!3d4.008356447151745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105c8a285b154457%3A0x72a7381e2fb22ec1!2sDouala%20International%20Airport!5e0!3m2!1sen!2scm!4v1694107484447!5m2!1sen!2scm"
                        width="100%"
                        height="400"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </div>
    );
}
