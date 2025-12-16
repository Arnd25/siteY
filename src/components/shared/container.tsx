import React from 'react';
import {cn} from "@/lib/utils";

interface IContainerProps {
    className?: string;
    children?: React.ReactNode;
}


const Container = ({ className, children }: IContainerProps) => {
    return (
        <div className={cn(className, "max-w-[1480px] mx-auto  ")}>
            {children}
        </div>
    );
};

export default Container;