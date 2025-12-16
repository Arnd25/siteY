import React from 'react';
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import { LuAlignJustify } from "react-icons/lu";

interface IMobileButtonProps {
    className?: string;
    onOpenMenu?: () => void;
}

const MobileButton = ({ className, onOpenMenu }: IMobileButtonProps) => {
    return (
        <div className={cn(className, "")}>
            <ul className="flex items-center gap-x-2">
                <li className="block md:hidden">
                    <Button onClick={onOpenMenu} variant={"outline"} size={"icon"} className="size-12 border-none text-white bg-indigo-950">
                        <LuAlignJustify />
                    </Button>
                </li>
            </ul>
        </div>
    );
};

export default MobileButton;
