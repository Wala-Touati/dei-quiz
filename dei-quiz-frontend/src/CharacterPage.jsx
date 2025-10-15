import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { characterData } from "./data/characters";

export default function CharacterPage() {
    const { name } = useParams();
    const navigate = useNavigate();
    const char = characterData[name];

    if (!char) {
        return (
            <div style={{ textAlign: "center", padding: 30 }}>
                <h2>Character not found</h2>
                <button 
                    onClick={() => navigate(-1)}
                    style={{ 
                        color: "#FF8C42", 
                        textDecoration: "underline",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1em"
                    }}
                >
                    Back to quiz
                </button>
            </div>
        );
    }

    return (
        <div style={{ 
            textAlign: "center", 
            padding: 30, 
            maxWidth: 600, 
            margin: "0 auto",
            fontFamily: "'Nunito', 'Inter', sans-serif",
            background: "linear-gradient(to bottom, #fbe9e7, #fffaf8)",
            minHeight: "100vh"
        }}>
            <h1 style={{ 
                fontFamily: "'Pacifico', cursive", 
                color: "#FF8C42",
                fontSize: "2.5em",
                marginBottom: 20
            }}>
                The {name}
            </h1>
            
            <div style={{ 
                background: "rgba(255, 255, 255, 0.9)", 
                padding: 30, 
                borderRadius: 20, 
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                marginBottom: 30
            }}>
                <img
                    src={`/assets/${name.toLowerCase().replace(/\s+/g, "-")}.png`}
                    alt={name}
                    style={{
                        width: 150,
                        height: 150,
                        objectFit: "contain",
                        marginBottom: 20
                    }}
                />
            </div>

            <div style={{ 
                display: "grid", 
                gridTemplateColumns: "1fr 1fr", 
                gap: 30, 
                marginBottom: 30 
            }}>
                <div style={{ 
                    background: "rgba(76, 175, 80, 0.1)", 
                    padding: 20, 
                    borderRadius: 15,
                    border: "2px solid rgba(76, 175, 80, 0.3)"
                }}>
                    <h3 style={{ color: "#4CAF50", marginBottom: 15 }}>Strengths</h3>
                    <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
                        {char.strengths.map((strength, index) => (
                            <li key={index} style={{ 
                                padding: "8px 0", 
                                borderBottom: "1px solid rgba(76, 175, 80, 0.2)",
                                color: "#5e4033"
                            }}>
                                • {strength}
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{ 
                    background: "rgba(244, 67, 54, 0.1)", 
                    padding: 20, 
                    borderRadius: 15,
                    border: "2px solid rgba(244, 67, 54, 0.3)"
                }}>
                    <h3 style={{ color: "#F44336", marginBottom: 15 }}>Weaknesses</h3>
                    <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
                        {char.weaknesses.map((weakness, index) => (
                            <li key={index} style={{ 
                                padding: "8px 0", 
                                borderBottom: "1px solid rgba(244, 67, 54, 0.2)",
                                color: "#5e4033"
                            }}>
                                • {weakness}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div style={{ marginTop: 40 }}>
                <button 
                    onClick={() => navigate(-1)}
                    style={{ 
                        display: "inline-block",
                        padding: "12px 30px",
                        background: "#FF8C42",
                        color: "white",
                        textDecoration: "none",
                        borderRadius: 25,
                        fontSize: "1.1em",
                        fontWeight: 600,
                        boxShadow: "0 4px 8px rgba(255, 140, 66, 0.3)",
                        transition: "transform 0.2s",
                        border: "none",
                        cursor: "pointer"
                    }}
                    onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                    onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                >
                    Back to quiz
                </button>
            </div>
        </div>
    );
}