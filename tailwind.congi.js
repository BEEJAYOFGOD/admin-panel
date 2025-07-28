/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./index.html"],
    theme: {
        extend: {
            animation: {
                "gradient-x": "gradientX 6s ease infinite",
            },
            keyframes: {
                gradientX: {
                    "0%, 100%": {
                        "background-position": "0% 50%",
                    },
                    "50%": {
                        "background-position": "100% 50%",
                    },
                },
            },
        },
    },
    plugins: [],
};
