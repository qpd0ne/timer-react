import React, {FC} from "react";
import "./BaseButton.css";

interface BaseButtonProps {
    children: string,
    onClick?: () => void,
}

const BaseButton: FC<BaseButtonProps> = ({onClick, children}) => {
    return(
        <div onClick={onClick} className="BaseButton">
            {children}
        </div>
    )
}

export default BaseButton;