import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                background: '#00aa13',
                color: 'white',
                paddingTop: '80px'
            }}>

            {/* Massive Background Pattern */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

            <div className="container relative z-10">
                <div className="grid-2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            background: 'rgba(255,255,255,0.2)',
                            border: '1px solid rgba(255,255,255,0.3)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '50px',
                            marginBottom: '2rem',
                            fontWeight: '600'
                        }}>
                            🚀 UI/UX CASE STUDY
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(4rem, 10vw, 8rem)',
                            lineHeight: '0.9',
                            marginBottom: '2rem',
                            color: 'white'
                        }}>
                            GoKu
                        </h1>
                        <p style={{
                            fontSize: '1.5rem',
                            marginBottom: '3rem',
                            opacity: 0.9,
                            fontWeight: '300',
                            maxWidth: '500px'
                        }}>
                            Revolusi Transportasi Online. <br />
                            <strong style={{ fontWeight: '700' }}>Tap. Ride. and Fly.</strong>
                        </p>

                        {/* <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#overview" className="btn btn-white">
                                View Case Study
                            </a>
                            <a href="#process" style={{ padding: '1rem 2rem', border: '2px solid rgba(255,255,255,0.5)', borderRadius: '100px', fontWeight: '600', color: 'white' }}>
                                Design Process
                            </a>
                        </div> */}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, type: 'spring' }}
                        className="hero-image"
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        {/* Abstract Representation of the App */}
                        <div style={{
                            width: '100%',
                            maxWidth: '320px', // Responsive width
                            aspectRatio: '1/2', // Maintain aspect ratio
                            height: 'auto',
                            maxHeight: '640px',
                            background: 'white',
                            borderRadius: '50px',
                            boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)',
                            padding: '12px',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            overflow: 'hidden',
                            border: '8px solid white',
                            margin: '0 auto' // Center on mobile
                        }}>
                            {/* PERUBAHAN 1: Background diganti dari 'black' ke 'white' atau '#FFFFFF' */}
                            <div style={{ width: '100%', height: '100%', background: '#FFFFFF', borderRadius: '38px', overflow: 'hidden' }}>
                                <iframe
                                    style={{ border: 'none', width: '100%', height: '100%' }}
                                    // PERUBAHAN 2: Menambahkan '&hide-ui=1' di akhir URL
                                    src="https://embed.figma.com/proto/yXsZnToLxo94aod1IAOc8J/UIUX-Transportation?node-id=486-724&p=f&scaling=scale-down-width&content-scaling=fixed&page-id=486%3A478&starting-point-node-id=486%3A724&show-proto-sidebar=0&embed-host=share&hide-ui=1"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            {/* Floating Interact Hint */}
                            {/* <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                style={{
                                    position: 'absolute',
                                    bottom: '30px', 
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'rgba(0,0,0,0.8)',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    pointerEvents: 'none',
                                    zIndex: 20 
                                }}
                            >
                                Try me!
                            </motion.div> */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;