import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLightbulb, FaSitemap, FaPencilRuler, FaProjectDiagram, FaUserFriends } from 'react-icons/fa';

// --- IMPORT IMAGE PLACEHOLDERS ---
// Pastikan file foto sudah ada di folder src/assets/images/
import imgRemaja from '../assets/images/persona-remaja.jpg';
import imgDewasa from '../assets/images/persona-dewasa.jpg';
import imgOrangTua from '../assets/images/persona-orangtua.jpg';

const DesignProcess = () => {
    // State untuk Tabs pada Phase 2
    const [activeTab, setActiveTab] = useState('crazy8');

    // Data Personas (Phase 1)
    const personas = [
        { 
            category: "Remaja / Mahasiswa",
            age: "18 - 22 Tahun",
            needs: "Ingin harga murah & promo.",
            pain: "Uang saku terbatas, tidak suka ribet.",
            image: imgRemaja,
            seed: "Felix" 
        },
        { 
            category: "Dewasa / Pekerja",
            age: "24 - 40 Tahun",
            needs: "Kecepatan & ketepatan waktu.",
            pain: "Sering telat karena driver lama ketemu.",
            image: imgDewasa,
            seed: "Aneka"
        },
        { 
            category: "Orang Tua / Lansia",
            age: "50+ Tahun",
            needs: "Tampilan jelas & tombol besar.",
            pain: "Bingung dengan UI modern yang kompleks.",
            image: imgOrangTua,
            seed: "Grandma"
        }
    ];

    // Data Tabs (Phase 2)
    const tabs = [
        { 
            id: 'crazy8', label: "Crazy 8's", icon: <FaPencilRuler />, 
            desc: "Sketsa cepat 8 ide dalam 8 menit untuk eksplorasi layout kreatif.",
            embed: "https://embed.figma.com/board/chMnJzBSnzV8seGfzB1iLD/Crazy-s-8?node-id=0-1&embed-host=share" 
        },
        { 
            id: 'ia', label: "Info Architecture", icon: <FaSitemap />, 
            desc: "Struktur navigasi aplikasi agar user tidak tersesat.",
            embed: "https://embed.figma.com/board/Xip14Qfqg4Xjqr3P5RXsKP/Information-Architecture?node-id=0-1&embed-host=share" 
        },
        { 
            id: 'userflow', label: "User Flow", icon: <FaProjectDiagram />, 
            desc: "Langkah demi langkah perjalanan user dari Login hingga Finish Order.",
            embed: "https://embed.figma.com/board/qwO5G7nR6DF1SwdesyJ7jT/Untitled?node-id=0-1&embed-host=share" 
        }
    ];

    return (
        <React.Fragment>
            
            {/* --- PHASE 1: RESEARCH & PERSONAS --- */}
            <section id="process" className="section" style={{ padding: '100px 20px', background: '#f8fafc' }}>
                <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    
                    {/* Header Phase 1 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3rem' }}>
                        <div style={{ 
                            background: '#dcfce7', color: '#166534', padding: '8px 16px', 
                            borderRadius: '100px', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '1rem',
                            display: 'flex', alignItems: 'center', gap: '8px'
                        }}>
                            <span style={{ background: '#16a34a', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>1</span>
                            PHASE ONE
                        </div>
                        <h2 className="title" style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#1e293b' }}>
                            Research & Define
                        </h2>
                        <p style={{ maxWidth: '600px', color: '#64748b', fontSize: '1.1rem' }}>
                            Menggali akar masalah melalui Empathy Map dan memvalidasi kebutuhan pengguna lewat User Persona.
                        </p>
                    </div>

                    {/* 1. Canvas Embed (Empathy Map) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ 
                            position: 'relative', borderRadius: '24px', overflow: 'hidden', 
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                            border: '4px solid white', background: 'white', marginBottom: '5rem'
                        }}
                    >
                        <div style={{ background: 'white', padding: '15px 25px', display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid #f1f5f9' }}>
                            <div style={{ display: 'flex', gap: '6px' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></div>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }}></div>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }}></div>
                            </div>
                            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#64748b', marginLeft: '10px' }}>Canva Whiteboard - Empathy Map</span>
                        </div>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                            <iframe
                                loading="lazy"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                src="https://www.canva.com/design/DAG0jJ1Kuww/RZU2CzM-hJtLmh78pdskYQ/view?embed"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* 2. USER PERSONAS SECTION */}
                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#00aa13', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                <FaUserFriends /> TARGET AUDIENCE
                            </div>
                            <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#1e293b' }}>User Personas</h3>
                        </div>

                        <div className="grid-responsive" style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(3, 1fr)', 
                            gap: '2rem' 
                        }}>
                            {personas.map((p, idx) => (
                                <motion.div 
                                    key={idx}
                                    whileHover={{ y: -10 }}
                                    style={{ 
                                        background: 'white', borderRadius: '20px', overflow: 'hidden',
                                        boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0',
                                        textAlign: 'center' // Align text center
                                    }}
                                >
                                    {/* ----- PERUBAHAN UTAMA DISINI ----- */}
                                    {/* Image Area - KECIL & LINGKARAN */}
                                    <div style={{ 
                                        width: '100px', // Ukuran fix kecil
                                        height: '100px', // Ukuran fix kecil
                                        borderRadius: '50%', // Membuat lingkaran
                                        overflow: 'hidden',
                                        margin: '2rem auto 1rem', // Posisi di tengah horizontal
                                        border: '3px solid #f0fdf4', // Border halus
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.05)' // Shadow halus
                                    }}>
                                        <img 
                                            src={p.image} 
                                            alt={p.category}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            onError={(e) => {
                                                e.target.onerror = null; 
                                                e.target.src=`https://api.dicebear.com/9.x/avataaars/svg?seed=${p.seed}`; 
                                            }}
                                        />
                                    </div>
                                    {/* ---------------------------------- */}

                                    {/* Content Area */}
                                    <div style={{ padding: '0 1.5rem 2rem' }}>
                                        <span style={{ 
                                            fontSize: '0.8rem', fontWeight: 'bold', color: 'white', 
                                            background: '#00aa13', padding: '4px 10px', borderRadius: '50px' 
                                        }}>
                                            {p.category}
                                        </span>
                                        <h4 style={{ margin: '1rem 0 0.5rem 0', fontWeight: 'bold', fontSize: '1.1rem' }}>{p.age}</h4>
                                        <div style={{ fontSize: '0.9rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <p style={{ margin: 0 }}><strong>Needs:</strong> {p.needs}</p>
                                            <p style={{ margin: 0, color: '#ef4444' }}><strong>Pain:</strong> {p.pain}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
                
                {/* CSS Helper untuk Grid 3 Kolom */}
                <style>{`
                    @media (max-width: 768px) {
                        .grid-responsive {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}</style>
            </section>


            {/* --- PHASE 2: IDEATION (TABS INTERFACE) --- */}
            <section className="section" style={{ padding: '100px 20px', background: '#ffffff' }}>
                <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    
                    {/* Header Phase 2 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3rem' }}>
                         <div style={{ 
                            background: '#e0f2fe', color: '#0369a1', padding: '8px 16px', 
                            borderRadius: '100px', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '1rem',
                            display: 'flex', alignItems: 'center', gap: '8px'
                        }}>
                            <span style={{ background: '#0284c7', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>2</span>
                            PHASE TWO
                        </div>
                        <h2 className="title" style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#1e293b' }}>
                            Ideation & Structure
                        </h2>
                        <p style={{ maxWidth: '600px', color: '#64748b', fontSize: '1.1rem' }}>
                            Menerjemahkan temuan riset menjadi struktur visual. Dari coretan kasar hingga diagram alur yang rapi.
                        </p>
                    </div>

                    {/* CUSTOM TABS COMPONENT */}
                    <div style={{ 
                        background: 'white', borderRadius: '24px', 
                        border: '1px solid #e2e8f0', overflow: 'hidden',
                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)'
                    }}>
                        {/* Tab Navigation (Top) */}
                        <div style={{ display: 'flex', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', overflowX: 'auto' }}>
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    style={{
                                        flex: 1, padding: '1.5rem', border: 'none',
                                        background: activeTab === tab.id ? 'white' : 'transparent',
                                        color: activeTab === tab.id ? '#00aa13' : '#64748b',
                                        fontWeight: activeTab === tab.id ? '700' : '500',
                                        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                                        borderBottom: activeTab === tab.id ? '3px solid #00aa13' : '3px solid transparent',
                                        transition: 'all 0.3s', minWidth: '150px'
                                    }}
                                >
                                    {tab.icon} {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content (Bottom) */}
                        <div style={{ padding: '2rem', background: 'white' }}>
                            <AnimatePresence mode="wait">
                                {tabs.map((tab) => (
                                    activeTab === tab.id && (
                                        <motion.div
                                            key={tab.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <div style={{ padding: '8px', background: '#dcfce7', borderRadius: '8px', color: '#16a34a' }}>
                                                    <FaLightbulb />
                                                </div>
                                                <p style={{ margin: 0, color: '#475569', fontSize: '1rem' }}>{tab.desc}</p>
                                            </div>
                                            <div style={{ 
                                                width: '100%', height: '600px', 
                                                borderRadius: '16px', overflow: 'hidden', 
                                                border: '1px solid #e2e8f0', background: '#f1f5f9'
                                            }}>
                                                <iframe 
                                                    style={{ width: '100%', height: '100%', border: 'none' }} 
                                                    src={tab.embed} allowFullScreen
                                                ></iframe>
                                            </div>
                                        </motion.div>
                                    )
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
};

export default DesignProcess;