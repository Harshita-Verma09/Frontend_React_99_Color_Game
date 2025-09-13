import React, { useEffect, useState } from "react";

const getRandomHexColor = (): string => {
    return (
        "#" +
        Math.floor(Math.random() * 0xffffff)
            .toString(16)
            .padStart(6, "0")
            .toUpperCase()
    );
};


const ColorGame: React.FC = () => {
    const [colors, setColors] = useState<string[]>([]);
    const [target, setTarget] = useState<string>("#FFFFFF");
    const [score, setScore] = useState<number>(0);

    const hexToRgb = (hex: string): string => {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `RGB(${r}, ${g}, ${b})`;
    };

    const generateRound = () => {
        const arr: string[] = [];
        while (arr.length < 3) {
            const c = getRandomHexColor();
            if (!arr.includes(c)) arr.push(c);
        }
        setColors(arr);
        setTarget(arr[Math.floor(Math.random() * arr.length)]);
    };

    useEffect(() => {
        generateRound();
    }, []);

    const handleClick = (color: string) => {
        if (color === target) setScore((s) => s + 1);
        else setScore((s) => s - 1);
        setTimeout(generateRound, 500);
    };

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <h2 style={styles.title}>Color Guess Game</h2>

                <p style={styles.text}>
                    Target Color: <span style={styles.hex}>{target}</span>
                </p>

                {/* Hint */}
                <p style={styles.hint}> Hint: {hexToRgb(target)}</p>

                <div style={styles.boxRow}>
                    {colors.map((c, i) => (
                        <div
                            key={i}
                            onClick={() => handleClick(c)}
                            style={{ ...styles.colorBox, background: c }}
                        />
                    ))}
                </div>

                <p style={styles.score}>Score: {score}</p>
            </div>
        </div>
    );
};

export default ColorGame;

/* ---------- Styles ---------- */
const styles: { [key: string]: React.CSSProperties } = {
    page: {
        minHeight: "100vh",
        background: "linear-gradient(160deg, #0f172a, #1e293b)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, sans-serif",
        padding: 20,
    },
    card: {
        background: "#111827",
        padding: 30,
        borderRadius: 16,
        textAlign: "center",
        width: 420,
        boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
        border: "1px solid rgba(255,255,255,0.1)",
    },
    title: {
        margin: 0,
        marginBottom: 16,
        fontSize: 24,
        fontWeight: 700,
        color: "#60a5fa",
    },
    text: {
        fontSize: 16,
        marginBottom: 6,
    },
    hex: {
        fontWeight: "bold",
        background: "#1f2937",
        padding: "4px 10px",
        borderRadius: 8,
        color: "#fbbf24",
    },
    hint: {
        fontSize: 14,
        color: "#9ca3af",
        marginBottom: 20,
    },
    boxRow: {
        display: "flex",
        justifyContent: "center",
        gap: 18,
        marginBottom: 20,
    },
    colorBox: {
        width: 90,
        height: 90,
        borderRadius: 12,
        cursor: "pointer",
        border: "2px solid rgba(255,255,255,0.15)",
        transition: "transform 0.2s, box-shadow 0.2s",
    },
    score: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: 600,
        color: "#34d399",
    },
};
