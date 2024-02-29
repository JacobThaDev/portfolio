import React from "react";

interface ContainerProps {
    children?: React.ReactNode;
    props?:any;
    className?:any
}

const Container = ({ children, className, ...props }: ContainerProps) => {

    return(
        <div {...props} className={`container max-w-[1300px] ${className}`}>
            {children}
        </div>
    )

}

export default Container;