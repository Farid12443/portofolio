tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                inter: ["Inter", "sans-serif"]
            },
            colors: {
                primary: {
                    400: "#06b6d4",
                    500: "#6366F1", // value terakhir diambil
                    600: "#4F46E5"
                },
                secondary: {
                    400: "#818cf8",
                    500: "#6366f1",
                    DEFAULT: "#38BDF8"
                },
                accent: {
                    400: "#10b981",
                    500: "#059669"
                },
                dark: {
                    700: "#334155",
                    800: "#1F2937", // nilai pertama
                    900: "#0F172A" // nilai terakhir diambil
                },
                light: {
                    DEFAULT: "#F9FAFB",
                    100: "#F8FAFC",
                    200: "#E2E8F0",
                    300: "#94A3B8"
                },
                "primary-dark": "#00a1ff",
                "bg-dark": "#021024",
                "bg-darker": "#010a18",
                "text-light": "#aaa"
            },
            boxShadow: {
                "glow-cyan": "0 0 15px rgba(6, 182, 212, 0.5)",
                "glow-purple": "0 0 15px rgba(129, 140, 248, 0.5)",
                "glow-emerald": "0 0 15px rgba(16, 185, 129, 0.5)"
            },
            animation: {
                fadeInUp: "fadeInUp 0.8s forwards"
            },
            keyframes: {
                fadeInUp: {
                    from: {
                        opacity: "0",
                        transform: "translateY(20px)"
                    },
                    to: { opacity: "1", transform: "translateY(0)" }
                }
            }
        }
    }
};
