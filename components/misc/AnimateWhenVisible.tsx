import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimationProps = {
    children:any;
    once?:boolean;
    delay?:number;
    direction?:"fade-in"|"fade-up"|"fade-down"|"fade-left"|"fade-right"|"fade-up-left"|"fade-up-right"|"fade-down-left"|"fade-down-right",
    duration?:number;
}

const AnimateWhenVisible = ({ 
    children, 
    once = true, 
    delay = 0, 
    direction = "fade-right",
    duration = 1
}: AnimationProps) => {

    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: once,
        rootMargin: "0px 0px -150px 0px"
    });

    const variants = {
        "fade-in": {
            visible: {
                opacity: 1,
                transition: { 
                    type: "fade-in",
                    delay: delay,
                    duration: duration
                }
            },
            hidden: { 
                opacity: 0,
                transition: { 
                    type: "fade-out",
                    duration: (duration - (duration * 0.25)) // 25% faster out than in
                }
            }
        },
        "fade-up": {
            visible: {
                y:0,
                opacity: 1,
                transition: { 
                    type: "fade-in",
                    delay: delay,
                    duration: duration
                }
            },
            hidden: { 
                y:50,
                opacity: 0,
                transition: { 
                    type: "fade-out",
                    duration: (duration - (duration * 0.25)) // 25% faster out than in
                }
            }
        },
        "fade-down": {
            visible: {
                y:0,
                opacity: 1,
                transition: { 
                    type: "fade-in",
                    delay: delay,
                    duration: duration
                }
            },
            hidden: { 
                y:-50,
                opacity: 0,
                transition: { 
                    type: "fade-out",
                    duration: (duration - (duration * 0.25)) // 25% faster out than in
                }
            }
        },
        "fade-left": {
            visible: {
                x:0,
                opacity: 1,
                transition: { 
                    type: "fade-in",
                    delay: delay,
                    duration: duration
                }
            },
            hidden: { 
                x:50,
                opacity: 0,
                transition: { 
                    type: "fade-out",
                    duration: (duration - (duration * 0.25)) // 25% faster out than in
                }
            }
        },
        "fade-right": {
            visible: {
                x:0,
                opacity: 1,
                transition: { 
                    type: "fade-in",
                    delay: delay,
                    duration: duration
                }
            },
            hidden: { 
                x: -50,
                opacity: 0,
                transition: { 
                    type: "fade-out",
                    duration: (duration - (duration * 0.25)) // 25% faster out than in
                }
            }
        },
        "fade-down-right": {
            visible: {
                x: 0,
                y: 0,
                opacity: 1,
                transition: { 
                    type: "fade-in",
                    delay: delay,
                    duration: duration
                }
            },
            hidden: { 
                x:-50,
                y:-50,
                opacity: 0,
                transition: { 
                    type: "fade-out",
                    duration: (duration - (duration * 0.25)) // 25% faster out than in
                }
            }
        },
        "fade-down-left": {
            visible: {
                x: 0,
                y: 0,
                opacity: 1,
                transition: { 
                    type: "fade-in",
                    delay: delay,
                    duration: duration
                }
            },
            hidden: { 
                x: 50,
                y: -50,
                opacity: 0,
                transition: { 
                    type: "fade-out",
                    duration: (duration - (duration * 0.25)) // 25% faster out than in
                }
            }
        },
        "fade-up-right": {
            visible: {
                x: 0,
                y: 0,
                opacity: 1,
                transition: { 
                    type: "fade-in",
                    delay: delay,
                    duration: duration
                }
            },
            hidden: { 
                x:-50,
                y:50,
                opacity: 0,
                transition: { 
                    type: "fade-out",
                    duration: (duration - (duration * 0.25)) // 25% faster out than in
                }
            }
        },
        "fade-up-left": {
            visible: {
                x: 0,
                y: 0,
                opacity: 1,
                transition: { 
                    type: "fade-in",
                    delay: delay,
                    duration: duration
                }
            },
            hidden: { 
                x: 50,
                y: 50,
                opacity: 0,
                transition: { 
                    type: "fade-out",
                    duration: (duration - (duration * 0.25)) // 25% faster out than in
                }
            }
        },
    };
    
    return (
        <motion.div ref={ref}
                animate={inView ? "visible" : "hidden"}
                initial="hidden"
                variants={variants[direction]}
                exit="hidden"
                viewport={{ once: true, amount: 0.8 }}
                transition={{ type:"spring", duration: 1, damping: 0, stiffness: 100 }}>
            {children}
        </motion.div>
    );
}

export default AnimateWhenVisible;