'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';

export function ThemeToggle() {
  const { setTheme } = useTheme();

  const menuItemVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm'>
          <Icons.Sun className='rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100' />
          <Icons.Moon className='absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' forceMount>
        <motion.div
          variants={menuItemVariants}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <DropdownMenuItem onClick={() => setTheme('light')}>
            <Icons.Sun className='mr-2 h-4 w-4' />
            <span>Light</span>
          </DropdownMenuItem>
        </motion.div>
        <motion.div
          variants={menuItemVariants}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            <Icons.Moon className='mr-2 h-4 w-4' />
            <span>Dark</span>
          </DropdownMenuItem>
        </motion.div>
        <motion.div
          variants={menuItemVariants}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          <DropdownMenuItem onClick={() => setTheme('system')}>
            <Icons.Laptop className='mr-2 h-4 w-4' />
            <span>System</span>
          </DropdownMenuItem>
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
