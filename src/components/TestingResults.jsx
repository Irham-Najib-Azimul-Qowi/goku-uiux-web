import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaQuoteLeft, FaBell, FaBoxOpen, FaCog, FaLayerGroup } from 'react-icons/fa';

// --- IMPORT FOTO TESTER ---
import testerPhoto from '../assets/images/novandy.jpg';

const TestingResults = () => {
    // State untuk interaksi Hover
    const [hoveredId, setHoveredId] = useState(null);

    // Data Tasks
    const tasks = [
        { id: 1, task: "Membuka aplikasi & Memahami Beranda", note: "Tampilan sederhana dan mudah dipahami", status: "Berhasil" },
        { id: 2, task: "Input Lokasi & Tujuan", note: "Alur jelas, tidak membingungkan", status: "Berhasil" },
        { id: 3, task: "Cek Estimasi Harga & Order", note: "Informasi harga tampil jelas", status: "Berhasil" },
        { id: 4, task: "Menunggu Driver", note: "Loading dan status mudah dimengerti", status: "Berhasil" },
        { id: 5, task: "Finish Order", note: "Alur lurus dan konsisten hingga akhir", status: "Berhasil" },
    ];

    // Data Improvements
    const improvements = [
        { text: "Menambahkan fitur Notifikasi", icon: <FaBell />, sub: "Agar user tau status terkini" },
        { text: "Fitur Pengantaran Barang", icon: <FaBoxOpen />, sub: "Ekspansi layanan pengiriman" },
        { text: "Perbaikan Menu Pengaturan", icon: <FaCog />, sub: "Mempermudah akses pengaturan" }
    ];

    return (
        <section id="testing" className="section" style={{ background: '#ffffff', overflow: 'hidden' }}>
            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>

                {/* --- 1. HEADER --- */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{
                        color: '#00aa13', background: '#f0fdf4',
                        padding: '8px 20px', borderRadius: '100px',
                        fontSize: '0.85rem', fontWeight: 'bold', border: '1px solid #dcfce7'
                    }}>
                        USABILITY TEST
                    </span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '1rem', color: '#1a1a1a' }}>
                        Validation Results
                    </h2>
                </div>

                {/* --- 2. TESTER PROFILE (FULL WIDTH - POSISI BARU) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        background: '#ffffff', borderRadius: '24px', padding: '2.5rem',
                        border: '1px solid #e5e7eb', position: 'relative',
                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)',
                        marginBottom: '3rem', // Jarak ke Grid Task & Plan
                        display: 'flex', // Layout Horizontal
                        alignItems: 'center',
                        gap: '2.5rem'
                    }}
                    className="tester-card" // Class untuk responsive nanti
                >
                    {/* FOTO TESTER (KIRI) */}
                    <div style={{ flexShrink: 0 }}>
                        <div style={{
                            width: '250px', height: '140px',
                            borderRadius: '24px', // Persegi dengan sudut tumpul
                            overflow: 'hidden',
                            border: '4px solid #f0fdf4',
                            boxShadow: '0 10px 25px -5px rgba(0, 170, 19, 0.2)'
                        }}>
                            <img
                                src={testerPhoto}
                                alt="Novandy Triarto Wahyono"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://api.dicebear.com/9.x/avataaars/svg?seed=Novandy";
                                }}
                            />
                        </div>
                    </div>

                    {/* DETAIL & FEEDBACK (KANAN) */}
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
                            <h4 style={{ margin: 0, fontWeight: '800', fontSize: '1.5rem', color: '#1f2937' }}>
                                Novandy Triarto W.
                            </h4>
                            <span style={{ background: '#f3f4f6', color: '#4b5563', padding: '4px 12px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600' }}>
                                Mahasiswa Semester 3
                            </span>
                            <span style={{ background: '#f0fdf4', color: '#15803d', padding: '4px 12px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600' }}>
                                Politeknik Negeri Madiun
                            </span>
                        </div>

                        <div style={{ position: 'relative' }}>
                            <FaQuoteLeft style={{ fontSize: '1.5rem', color: '#00aa13', opacity: 0.3, position: 'absolute', top: '-8px', left: '-5px' }} />
                            <p style={{ position: 'relative', zIndex: 1, fontSize: '1.15rem', fontStyle: 'italic', lineHeight: '1.6', color: '#374151', margin: 0, paddingLeft: '2rem' }}>
                                "Tampilannya sederhana dan alurnya gampang dipahami. Cocok untuk pengguna baru seperti saya yang tidak suka aplikasi ribet."
                            </p>
                        </div>
                    </div>
                </motion.div>


                {/* --- 3. GRID 50:50 (TASK COMPLETION & NEXT PLAN) --- */}
                <div className="grid-responsive" style={{
                    marginBottom: '5rem'
                }}>

                    {/* === KOLOM KIRI: DATA TASKS === */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                            <h4 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0, color: '#1f2937', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaCheckCircle color="#00aa13" /> Task Completion
                            </h4>
                            <span style={{ background: '#dcfce7', color: '#166534', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                                5/5 Berhasil
                            </span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {tasks.map((t) => (
                                <motion.div
                                    key={t.id}
                                    layout
                                    onMouseEnter={() => setHoveredId(t.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    style={{
                                        background: 'white',
                                        border: hoveredId === t.id ? '1px solid #00aa13' : '1px solid #e5e7eb',
                                        borderRadius: '16px', padding: '1.2rem',
                                        cursor: 'default', position: 'relative',
                                        boxShadow: hoveredId === t.id ? '0 10px 20px -5px rgba(0,0,0,0.05)' : 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{
                                                width: '26px', height: '26px', borderRadius: '50%',
                                                background: hoveredId === t.id ? '#00aa13' : '#f3f4f6',
                                                color: hoveredId === t.id ? 'white' : '#9ca3af',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem',
                                                transition: 'all 0.3s'
                                            }}>
                                                {t.id}
                                            </div>
                                            <span style={{ fontWeight: '600', color: '#1f2937' }}>{t.task}</span>
                                        </div>
                                        <FaCheckCircle style={{ color: '#00aa13' }} />
                                    </div>
                                    <AnimatePresence>
                                        {hoveredId === t.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
                                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                                style={{ paddingLeft: '38px', fontSize: '0.9rem', color: '#059669', overflow: 'hidden' }}
                                            >
                                                "{t.note}"
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* === KOLOM KANAN: PLAN FOR NEXT ITERATION === */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                            <div style={{ background: '#fee2e2', padding: '8px', borderRadius: '8px', color: '#dc2626' }}>
                                <FaCog />
                            </div>
                            <h4 style={{ margin: 0, fontWeight: '800', fontSize: '1.25rem', color: '#1f2937' }}>Plan for Next Iteration</h4>
                        </div>

                        <div style={{
                            background: 'white', borderRadius: '24px', padding: '2rem',
                            border: '1px solid #e5e7eb',
                            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)'
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {improvements.map((item, idx) => (
                                    <div key={idx} style={{
                                        display: 'flex', alignItems: 'center', gap: '1rem',
                                        padding: '1rem', borderRadius: '12px',
                                        background: '#fff', border: '1px solid #f3f4f6'
                                    }}>
                                        <div style={{
                                            width: '45px', height: '45px', borderRadius: '12px',
                                            background: '#f0fdf4', color: '#00aa13',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem'
                                        }}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h5 style={{ margin: 0, fontWeight: '700', fontSize: '1rem', color: '#1f2937' }}>{item.text}</h5>
                                            <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: '#6b7280' }}>{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- 4. EMBED PROTOTYPE PERBAIKAN --- */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center' }}
                >
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '10px',
                        background: '#e0f2fe', color: '#0369a1',
                        padding: '8px 24px', borderRadius: '100px',
                        fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1.5rem'
                    }}>
                        <FaLayerGroup /> HIGH-FIDELITY
                    </div>
                    <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem', color: '#1e293b' }}>
                        Design Iteration V2
                    </h3>
                    <p style={{ maxWidth: '700px', margin: '0 auto 3rem', color: '#64748b', fontSize: '1.1rem' }}>
                        Visualisasi hasil perbaikan berdasarkan feedback: Penambahan fitur notifikasi, pengaturan yang lebih lengkap, dan akses impor barang.
                    </p>

                    <div style={{
                        width: '100%', height: '650px',
                        background: '#f1f5f9', borderRadius: '24px',
                        overflow: 'hidden', border: '4px solid white',
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)', position: 'relative'
                    }}>
                        <iframe
                            style={{ width: '100%', height: '100%', border: 'none' }}
                            src="https://embed.figma.com/board/SY3ycnGst9An62Ztmq6UqA/Perbaikan?node-id=21-22&embed-host=share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default TestingResults;