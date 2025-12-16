import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import GokuLogo from './GokuLogo'; // Pastikan path ini benar

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Ubah state ketika scroll lebih dari 50px agar tidak terlalu sensitif
            setScrolled(window.scrollY > 50);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Overview', href: '#overview' },
        { title: 'Process', href: '#process' },
        { title: 'Results', href: '#testing' },
        { title: 'Profile', href: '#profile' },
    ];

    // Style untuk Glassmorphism saat discroll
    const glassStyle = {
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
    };

    // Style transparan saat di atas (Top)
    const transparentStyle = {
        background: 'transparent',
        boxShadow: 'none',
        border: 'none',
    };

    return (
        <>
            <motion.nav
                // Logika Animasi
                initial={{ y: -100, opacity: 0 }}
                animate={{ 
                    y: 0, 
                    opacity: 1,
                    // Jika scrolled: lebar mengecil, turun sedikit, sudut membulat
                    width: scrolled ? '90%' : '100%',
                    top: scrolled ? '20px' : '0px',
                    borderRadius: scrolled ? '50px' : '0px',
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                
                // Style Dasar (Fixed + Centering Strategy)
                style={{
                    position: 'fixed',
                    left: '50%',
                    x: '-50%', // Selalu di tengah (center anchor)
                    zIndex: 50,
                    maxWidth: '1200px', // Batas lebar maksimal agar rapi di layar lebar
                    padding: '0.75rem 2rem',
                    ...(scrolled ? glassStyle : transparentStyle)
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between', // Memisahkan kiri dan kanan mentok
                    alignItems: 'center',
                    width: '100%',
                }}>
                    
                    {/* BAGIAN KIRI: MENU & MOBILE TOGGLE */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {/* Desktop Menu */}
                        <ul className="desktop-menu" style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
                            {navLinks.map((link) => (
                                <li key={link.title}>
                                    <a
                                        href={link.href}
                                        style={{
                                            color: scrolled ? '#333' : 'white', // Text hitam saat scroll, putih saat di atas
                                            fontWeight: '600',
                                            textDecoration: 'none',
                                            textTransform: 'uppercase',
                                            fontSize: '0.9rem',
                                            letterSpacing: '0.05em',
                                            transition: 'color 0.3s'
                                        }}
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Toggle (Hamburger) */}
                        <div 
                            className="mobile-toggle" 
                            style={{ 
                                color: scrolled ? '#333' : 'white', 
                                fontSize: '1.5rem', 
                                cursor: 'pointer' 
                            }} 
                            onClick={() => setIsOpen(true)}
                        >
                            <FaBars />
                        </div>
                    </div>

                    {/* BAGIAN KANAN: LOGO */}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.5rem', 
                            textDecoration: 'none',
                            cursor: 'pointer' 
                        }}
                    >
                        {/* Teks Logo */}
                        <span style={{
                            fontFamily: 'sans-serif',
                            fontSize: '1.5rem',
                            fontWeight: '800',
                            color: scrolled ? '#333' : 'white'
                        }}>
                            {/* GOKU. */}
                        </span>
                        {/* Icon Logo */}
                        <GokuLogo width={40} height={40} />
                    </a>

                </div>
            </motion.nav>

            {/* --- MOBILE FULLSCREEN MENU --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: '#00C853', // Sesuaikan dengan warna hijau brandmu
                            zIndex: 60,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <div 
                            style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '2rem', cursor: 'pointer', color: 'white' }} 
                            onClick={() => setIsOpen(false)}
                        >
                            <FaTimes />
                        </div>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', listStyle: 'none' }}>
                            {navLinks.map((link) => (
                                <li key={link.title}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        style={{ fontSize: '2rem', fontWeight: '800', color: 'white', textTransform: 'uppercase', textDecoration: 'none' }}
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Helper CSS untuk Responsiveness */}
            <style>{`
                .desktop-menu { display: flex; }
                .mobile-toggle { display: none !important; }
                
                @media (max-width: 768px) {
                    .desktop-menu { display: none !important; }
                    .mobile-toggle { display: block !important; }
                }
            `}</style>
        </>
    );
};

export default Navbar;