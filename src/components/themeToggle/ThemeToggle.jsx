'use client';

import React, { useContext } from 'react';
import styles from './themetoggle.module.css';
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
	const { toggle, theme } = useContext(ThemeContext);

	console.log(theme);

	return (
		<div
			className={styles.container}
			onClick={toggle}
			style={
				theme === 'dark' ? { backgroundColor: 'white' } : { backgroundColor: '#0f172a' }
			}
		>
			<Image src="/moon.png" alt="" height={14} width={14} />
			<div
				className={styles.ball}
				style={
					theme === 'dark'
						? { left: 1, background: '#0f172a' }
						: { right: 1, background: 'White' }
				}
			></div>
			<Image src="/sun.png" alt="" height={14} width={14} />
		</div>
	);
};

export default ThemeToggle;
