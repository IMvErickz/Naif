'use client'

import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Menu } from 'lucide-react';
import Link from 'next/link';


const DropdownMenuDemo = () => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Menu />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="min-w-[220px] bg-[#1D868C] rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                    sideOffset={5}
                >
                    <DropdownMenu.Item>
                        <Link href='/about'>
                            <span className="text-white font-arial text-xl">Quem Somos</span>
                        </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        <Link href='/objective'>
                            <span className="text-white font-arial text-xl">Objetivo</span>
                        </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        <Link href='/contact'>
                            <span className="text-white font-arial text-xl">Contato</span>
                        </Link>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default DropdownMenuDemo;