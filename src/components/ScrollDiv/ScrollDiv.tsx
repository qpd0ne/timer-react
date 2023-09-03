import React, { FC, ReactNode } from "react";

interface ScrollDivProps {
    className: "classic_scroll",
    children?: ReactNode,
}

const ScrollDiv: FC<ScrollDivProps> = ({className, children}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default ScrollDiv;