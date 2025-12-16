import React from 'react';
import { motion } from 'framer-motion';
import { FaUserEdit, FaClock, FaFigma, FaBolt, FaUniversalAccess, FaLeaf } from 'react-icons/fa';

const ProjectOverview = () => {
    // Variabel animasi untuk muncul bertahap
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <>
            {/* --- SECTION 1: INTRO & STATS (Clean White) --- */}
            <section id="overview" className="section" style={{ background: '#fff' }}>
                <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>

                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            style={{
                                textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem',
                                color: '#00aa13', fontWeight: 'bold', display: 'block', marginBottom: '1rem'
                            }}
                        >
                            Project Overview
                        </motion.span>
                        <motion.h2
                            initial="hidden" whileInView="visible" variants={fadeInUp}
                            className="title"
                            style={{ fontSize: '3rem', color: '#1a1a1a', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.2' }}
                        >
                            Speed. Simplicity. <span style={{ color: '#00aa13' }}>Green.</span>
                        </motion.h2>
                        <motion.p
                            initial="hidden" whileInView="visible" variants={fadeInUp}
                            style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}
                        >
                            GOKU hadir sebagai antitesis dari "Super App". Kami membuang fitur yang tidak perlu dan fokus pada satu hal:
                            <b> Mengantar Anda ke tujuan secepat mungkin.</b>
                        </motion.p>
                    </div>

                    {/* Stats Grid (Bento Style) */}
                    <div className="stats-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {/* Card 1: Role */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            style={{
                                background: '#f9fafb', padding: '2.5rem', borderRadius: '24px',
                                position: 'relative', overflow: 'hidden', border: '1px solid #f3f4f6'
                            }}
                        >
                            <FaUserEdit style={{ position: 'absolute', right: '-10px', bottom: '-10px', fontSize: '6rem', color: '#e5e7eb', opacity: 0.5 }} />
                            <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#9ca3af', letterSpacing: '1px', marginBottom: '0.5rem' }}>My Role</h3>
                            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>UI/UX Designer</p>
                        </motion.div>

                        {/* Card 2: Timeline */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            style={{
                                background: '#f9fafb', padding: '2.5rem', borderRadius: '24px',
                                position: 'relative', overflow: 'hidden', border: '1px solid #f3f4f6'
                            }}
                        >
                            <FaClock style={{ position: 'absolute', right: '-10px', bottom: '-10px', fontSize: '6rem', color: '#e5e7eb', opacity: 0.5 }} />
                            <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#9ca3af', letterSpacing: '1px', marginBottom: '0.5rem' }}>Timeline</h3>
                            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>24 Weeks</p>
                        </motion.div>

                        {/* Card 3: Tools */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            style={{
                                background: '#f0fdf4', padding: '2.5rem', borderRadius: '24px', // Aksen hijau muda
                                position: 'relative', overflow: 'hidden', border: '1px solid #dcfce7'
                            }}
                        >
                            <FaFigma style={{ position: 'absolute', right: '-10px', bottom: '-10px', fontSize: '6rem', color: '#00aa13', opacity: 0.1 }} />
                            <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#166534', letterSpacing: '1px', marginBottom: '0.5rem' }}>Tools</h3>
                            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#14532d', margin: 0 }}>Figma & FigJam</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: PROBLEM & GOAL (Immersive Dark/Green) --- */}
            <section className="section" style={{ background: '#111' }}>
                <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div className="grid-responsive">

                        {/* Left: The Context (Problem) */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                                <span style={{ height: '2px', width: '40px', background: '#00aa13' }}></span>
                                <span style={{ color: '#00aa13', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>The Context</span>
                            </div>
                            <h2 style={{ fontSize: '3.5rem', color: 'white', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.1' }}>
                                Why <span style={{ color: '#00aa13' }}>GOKU?</span>
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: '#d1d5db', lineHeight: '1.8', marginBottom: '2rem' }}>
                                Banyak aplikasi transportasi saat ini terjebak dalam fenomena <b>"Super App Fatigue"</b>. Pengguna dibombardir dengan ratusan fitur (pesan makan, bayar tagihan, belanja) padahal mereka hanya butuh tumpangan.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: '#d1d5db', lineHeight: '1.8' }}>
                                Akibatnya? Aplikasi jadi berat, lambat, dan membingungkan—terutama bagi pengguna lanjut usia.
                            </p>
                        </div>

                        {/* ... kode sebelumnya ... */}

                        {/* Right: The Goal (Solution Card) */}
                        <div style={{ position: 'relative' }}>
                            {/* Dekorasi Glow di belakang kartu */}
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: '#00aa13', filter: 'blur(80px)', opacity: 0.3, zIndex: 0 }}></div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    padding: '3rem',
                                    borderRadius: '30px',
                                    color: 'white', // Pastikan parent color putih
                                    position: 'relative', zIndex: 1
                                }}
                            >
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem', color: 'white' }}>Design Goals</h3>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                                    {/* Goal 1 */}
                                    <li style={{ display: 'flex', gap: '1.5rem' }}>
                                        <div style={{ minWidth: '50px', height: '50px', background: '#00aa13', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'white' }}>
                                            <FaBolt />
                                        </div>
                                        <div>
                                            {/* PERBAIKAN DISINI: Menambahkan color: 'white' */}
                                            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'white' }}>
                                                Speed First
                                            </h4>
                                            <p style={{ fontSize: '0.9rem', color: '#d1d5db', margin: 0 }}>
                                                Memangkas waktu pemesanan hingga 50% dengan mengurangi langkah (clicks).
                                            </p>
                                        </div>
                                    </li>

                                    {/* Goal 2 */}
                                    <li style={{ display: 'flex', gap: '1.5rem' }}>
                                        <div style={{ minWidth: '50px', height: '50px', background: '#00aa13', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'white' }}>
                                            <FaUniversalAccess />
                                        </div>
                                        <div>
                                            {/* PERBAIKAN DISINI: Menambahkan color: 'white' */}
                                            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'white' }}>
                                                Inclusive Design
                                            </h4>
                                            <p style={{ fontSize: '0.9rem', color: '#d1d5db', margin: 0 }}>
                                                UI besar & kontras tinggi, ramah untuk lansia dan pengguna non-tech savvy.
                                            </p>
                                        </div>
                                    </li>

                                    {/* Goal 3 */}
                                    <li style={{ display: 'flex', gap: '1.5rem' }}>
                                        <div style={{ minWidth: '50px', height: '50px', background: '#00aa13', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'white' }}>
                                            <FaLeaf />
                                        </div>
                                        <div>
                                            {/* PERBAIKAN DISINI: Menambahkan color: 'white' */}
                                            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'white' }}>
                                                Fresh Identity
                                            </h4>
                                            <p style={{ fontSize: '0.9rem', color: '#d1d5db', margin: 0 }}>
                                                Visual hijau yang menyegarkan, berbeda dari kompetitor yang sudah ada.
                                            </p>
                                        </div>
                                    </li>

                                </ul>
                            </motion.div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    );
};

export default ProjectOverview;