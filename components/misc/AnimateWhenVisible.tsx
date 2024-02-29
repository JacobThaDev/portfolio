import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimationProps {
    children:any;
    once?:boolean;
    delay?:number;
    direction?:"vertical"|"horizontal",
    duration?:number;
}

const AnimateWhenVisible = ({ 
    children, 
    once = true, 
    delay = 0, 
    direction = "vertical",
    duration = 1
}: AnimationProps) => {

    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: once,
        rootMargin: "0px 0px -300px 0px"
    });

    const variants = {
        horizontal: {
            visible: {
                x:0,
                opacity: 1,
                scale: 1,
                transition: { 
                    type: "fade-in-cubic",
                    delay: delay,
                    duration: duration
                }
            },
            hidden: { 
                x:-50,
                opacity: 0,
                transition: { 
                    type: "fade-out-cubic",
                    duration: (duration - (duration * 0.25)) // 25% faster out than in
                }
            }
        },
        vertical: {
            visible: {
                y:0,
                opacity: 1,
                scale: 1,
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
                    type: "fade-out-cubic",
                    duration: (duration - (duration * 0.25)) // 25% faster out than in
                }
            }
        }
        
    };

    return (
        <motion.div ref={ref}
                animate={inView ? "visible" : "hidden"}
                initial="hidden"
                variants={direction == "horizontal" ? variants.horizontal : variants.vertical}
                exit="hidden"
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 1, damping: 20, stiffness: 100 }}>
            {children}
        </motion.div>
    );
}

export default AnimateWhenVisible;