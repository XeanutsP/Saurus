module.exports = {
    theme:{
        extend:{
            keyframes:{
                "fade-in": {
                    "0%": {
                        opacity: '0 0.5'
                    },
                    "100%": {
                        opacity: '0.5 1'
                    }
                }
            },
            animation: {
                "fade-in": "fade-in 5.s ease-out"
            }
        }
    }
}