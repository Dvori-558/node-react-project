import React, { useState } from 'react'
import { Image } from 'primereact/image';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

const Home = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    
    const categoryData = [
        { id: "guitars", label: "🎸 גיטרות", desc: "מגוון רחב של גיטרות אקוסטיות וחשמליות" },
        { id: "pianos", label: "🎹 קלידים", desc: "פסנתרות ודיגיטליות באיכות גבוהה" },
        { id: "windInstrument", label: "🎷 כלי נשיפה", desc: "חליליות, סקסופונים וכלים מסורתיים" },
        { id: "drums", label: "🥁 תופים", desc: "סטים מקצועיים וחובבנים" },
        { id: "bow", label: "🎻 כלי מיתר", desc: "כינורות וויולות בעיצוב מרהיב" }
    ];

    return (
        <div style={{ background: '#ffffff', minHeight: '100vh' }}>
            <style>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .float-text {
                    animation: float 4s ease-in-out infinite;
                }
                .category-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
            `}</style>

            {/* Hero Section with Logo */}
            <div 
                style={{
                    background: 'linear-gradient(135deg, #1e1b4b 0%, #2d1b69 50%, #4c0519 100%)',
                    minHeight: '600px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    textAlign: 'center',
                    padding: '3rem 2rem'
                }}
            >
                {/* Background decoration */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(102,126,234,0.2) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }} />
                
                <div style={{ maxWidth: '900px', color: 'white', zIndex: 1 }}>
                    {/* Logo */}
                    <div style={{ marginBottom: '2rem' }}>
                        <img 
                            src="http://localhost:1234/logo.png" 
                            alt="Logo"
                            style={{
                                maxWidth: '120px',
                                height: 'auto',
                                margin: '0 auto',
                                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))'
                            }}
                        />
                    </div>

                    <h1 className="float-text" style={{
                        fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                        fontWeight: 900,
                        marginBottom: '1rem',
                        textShadow: '0 10px 30px rgba(0,0,0,0.5)',
                        letterSpacing: '1px',
                        lineHeight: '1.2'
                    }}>
                        🎵 מוזיקה ללב 🎵
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
                        marginBottom: '2.5rem',
                        opacity: 0.95,
                        lineHeight: '1.8',
                        letterSpacing: '0.5px'
                    }}>
                        כלים מוזיקליים איכותיים לכל מוזיקאי<br/>
                        מהתחילים ועד למקצוענים
                    </p>
                    <Link to="/category/all" style={{ textDecoration: 'none' }}>
                        <Button 
                            label="חקור את הקטלוג" 
                            icon="pi pi-play" 
                            className="p-button-rounded p-button-lg"
                            style={{
                                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                color: 'white',
                                border: 'none',
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                padding: '1.2rem 3rem',
                                boxShadow: '0 15px 35px rgba(245, 87, 108, 0.4)',
                                transition: 'all 0.3s'
                            }}
                        />
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '5rem 2rem' }}>
                {/* Section Title */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: 900,
                        color: '#1e1b4b',
                        marginBottom: '1rem'
                    }}>
                        קטגוריות פופולריות
                    </h2>
                    <div style={{
                        width: '80px',
                        height: '5px',
                        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                        margin: '0 auto 1.5rem auto',
                        borderRadius: '10px'
                    }} />
                    <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                        בחר בקטגוריה ותגלה עולם של אפשרויות
                    </p>
                </div>

                {/* Categories Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem',
                    marginBottom: '4rem'
                }}>
                    {categoryData.map((cat, idx) => (
                        <Link key={cat.id} to={`/category/${cat.id}`} style={{ textDecoration: 'none' }}>
                            <div 
                                style={{
                                    background: 'white',
                                    borderRadius: '25px',
                                    overflow: 'hidden',
                                    boxShadow: hoveredCard === idx 
                                        ? '0 30px 60px rgba(0, 0, 0, 0.2)' 
                                        : '0 10px 40px rgba(0, 0, 0, 0.08)',
                                    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    cursor: 'pointer',
                                    transform: hoveredCard === idx ? 'translateY(-20px) scale(1.03)' : 'translateY(0) scale(1)',
                                    border: hoveredCard === idx 
                                        ? '2px solid #f093fb' 
                                        : '2px solid #f0f0f0'
                                }}
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Image Container - FULL COVERAGE */}
                                <div style={{
                                    height: '280px',
                                    overflow: 'hidden',
                                    background: '#f5f5f5',
                                    position: 'relative'
                                }}>
                                    <img 
                                        src={`http://localhost:1234/${cat.id}.webp`} 
                                        alt={cat.label}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                            opacity: hoveredCard === idx ? 0.8 : 1,
                                            transform: hoveredCard === idx ? 'scale(1.08)' : 'scale(1)',
                                            transition: 'all 0.5s ease'
                                        }}
                                    />
                                    {/* Dark overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: hoveredCard === idx 
                                            ? 'linear-gradient(135deg, rgba(240, 147, 251, 0.15) 0%, rgba(245, 87, 108, 0.15) 100%)' 
                                            : 'linear-gradient(135deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 100%)',
                                        transition: 'background 0.5s'
                                    }} />
                                </div>

                                {/* Content */}
                                <div style={{ padding: '2rem' }}>
                                    <h3 style={{
                                        fontSize: '1.6rem',
                                        fontWeight: 900,
                                        color: '#1e1b4b',
                                        marginBottom: '0.8rem'
                                    }}>
                                        {cat.label}
                                    </h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#666',
                                        marginBottom: '1.5rem',
                                        lineHeight: '1.6'
                                    }}>
                                        {cat.desc}
                                    </p>
                                    <Button 
                                        label="צפה בקטגוריה"
                                        icon="pi pi-arrow-left"
                                        style={{
                                            width: '100%',
                                            background: hoveredCard === idx 
                                                ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' 
                                                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            border: 'none',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            padding: '0.9rem 1rem',
                                            fontSize: '1rem',
                                            boxShadow: hoveredCard === idx 
                                                ? '0 10px 30px rgba(245, 87, 108, 0.3)' 
                                                : '0 5px 15px rgba(102, 126, 234, 0.2)',
                                            transition: 'all 0.5s',
                                            borderRadius: '50px'
                                        }}
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA Section */}
                <div 
                    style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                        borderRadius: '30px',
                        padding: '4rem 3rem',
                        textAlign: 'center',
                        color: 'white',
                        marginTop: '4rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-10%',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.1)',
                        pointerEvents: 'none'
                    }} />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>
                            🚀 גלו את הקטלוג המלא
                        </h3>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95 }}>
                            37 מוצרים מעוררי השראה מחכים לך
                        </p>
                        <Link to="/category/all" style={{ textDecoration: 'none' }}>
                            <Button 
                                label="לכל המוצרים"
                                icon="pi pi-search"
                                className="p-button-lg"
                                style={{
                                    background: 'white',
                                    color: '#667eea',
                                    border: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '1.1rem',
                                    padding: '1.2rem 2.8rem',
                                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.25)',
                                    borderRadius: '50px'
                                }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
