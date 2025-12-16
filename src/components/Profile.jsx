import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub, FaArrowRight } from 'react-icons/fa';

// --- BAGIAN IMAGE ---
// 1. Import foto lokal kamu. 
// PENTING: File 'najib.jpg' HARUS ADA di folder src/assets/images/
// Jika file belum ada, baris import ini akan bikin error (Comment dulu kalau belum ada file)
import localProfileInfo from '../assets/images/najib.jpg';

const Profile = () => {
    // URL Placeholder (Default jika foto lokal gagal load)
    const placeholderImg = "https://api.dicebear.com/9.x/avataaars/svg?seed=Rhmaaee&backgroundColor=b6e3f4";

    // State untuk mengatur gambar mana yang tampil
    // Kita set default awalnya ke localProfileInfo.
    // Jika browser gagal memuatnya (file korup/salah path), onError akan mengubahnya ke placeholder.
    const [imgSrc, setImgSrc] = useState(localProfileInfo);

    return (
        <section id="profile" className="section" style={{
            background: '#ffffff',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{
                    width: '100%',
                    maxWidth: '1000px',
                    background: '#00aa13',
                    borderRadius: '40px',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 30px 60px -15px rgba(0, 170, 19, 0.3)',
                    color: 'white',
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                {/* --- DEKORASI BACKGROUND --- */}
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '300px', height: '300px', background: 'white', opacity: 0.05, borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', bottom: '-100px', left: '-50px', width: '400px', height: '400px', border: '2px solid rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>

                {/* --- BAGIAN KIRI: FOTO --- */}
                <div className="profile-image-container" style={{
                    flex: '1 1 350px',
                    padding: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'relative',
                        width: '280px',
                        height: '320px',
                    }}>
                        {/* Frame Border */}
                        <div style={{
                            position: 'absolute', top: '20px', left: '-20px',
                            width: '100%', height: '100%',
                            border: '2px solid rgba(255,255,255,0.3)', borderRadius: '30px', zIndex: 1
                        }}></div>

                        {/* Foto Utama */}
                        <div style={{
                            width: '100%', height: '100%',
                            borderRadius: '30px', overflow: 'hidden',
                            background: '#e0f2f1', position: 'relative', zIndex: 2,
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                        }}>
                            <img
                                src={imgSrc} // Menggunakan State
                                alt="Profile"
                                // LOGIKA PENGGANTIAN GAMBAR DISINI:
                                onError={() => {
                                    setImgSrc(placeholderImg); // Jika gagal load, ganti ke placeholder
                                }}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            style={{
                                position: 'absolute', bottom: '30px', right: '-30px',
                                background: 'white', color: '#00aa13',
                                padding: '10px 20px', borderRadius: '15px',
                                fontWeight: 'bold', boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                                zIndex: 3, display: 'flex', alignItems: 'center', gap: '8px'
                            }}
                        >
                            <span>👋</span> Open for Hire
                        </motion.div>
                    </div>
                </div>

                {/* --- BAGIAN KANAN: KONTEN --- */}
                <div className="profile-content" style={{
                    flex: '1 1 400px',
                    padding: '4rem 3rem 4rem 1rem',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 10
                }}>
                    <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', opacity: 0.8, marginBottom: '1rem' }}>
                        Tentang Pembuat
                    </p>

                    <h2 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '0.5rem' }}>
                        Irham Najib Azimul Qowi
                    </h2>

                    <p style={{ fontSize: '1.2rem', fontWeight: '500', color: '#bef2c8', marginBottom: '2rem' }}>
                        UI/UX Designer & Software Engineer Student
                    </p>

                    <p style={{ fontSize: '1rem', lineHeight: '1.8', opacity: 0.9, maxWidth: '500px', marginBottom: '2.5rem', borderLeft: '4px solid rgba(255,255,255,0.3)', paddingLeft: '1.5rem' }}>
                        Mahasiswa semester 3 yang berfokus menciptakan desain yang tidak hanya estetik tapi juga memecahkan masalah. Menggabungkan logika <b>Informatika</b> dengan rasa <b>Seni</b>.
                    </p>

                    {/* Stats Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
                        <div>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>3+</h4>
                            <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>Case Studies</span>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Design</h4>
                            <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>Thinking Process</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <a href="mailto:irhamnajibazimulqowi@gmail.com" style={{
                            background: 'white', color: '#00aa13', padding: '12px 30px',
                            borderRadius: '100px', fontWeight: 'bold', textDecoration: 'none',
                            display: 'flex', alignItems: 'center', gap: '10px'
                        }}>
                            Contact Me <FaArrowRight />
                        </a>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {/* PERBAIKAN: Menambahkan prop href={href} di komponen bawah */}
                            <SocialLink href="https://www.instagram.com/kokina_aijo?igsh=b3lnOGt3anYwbG5o" icon={<FaInstagram />} />
                            <SocialLink href="https://www.linkedin.com/in/irham-najib-azimul-qowi-287073263/" icon={<FaLinkedin />} />
                            <SocialLink href="https://github.com/Irham-Najib-Azimul-Qowi" icon={<FaGithub />} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

// PERBAIKAN DISINI: Menambahkan { href } di dalam kurung kurawal (destructuring props)
// dan menambahkannya ke tag <a href={href}>
const SocialLink = ({ icon, href }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.2rem',
            transition: 'background 0.3s'
        }}
    >
        {icon}
    </a>
);

export default Profile;