import react from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.logo}>
					<Image src="/logo.png" alt="dev.ankush" width={50} height={50} />
					<h1 className={styles.logoText}>QuillSnap</h1>
				</div>
				<p className={styles.desc}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rem
					minima quos magnam totam eaque excepturi deserunt enim id doloribus.
					Nesciunt illum praesentium pariatur aut sapiente, dolore placeat iure
					odit?
				</p>
				<div className={styles.icons}>
					<Image src="/facebook.png" alt="" width={18} height={18} />
					<Image src="/instagram.png" alt="" width={18} height={18} />
					<Image src="/twitter.png" alt="" width={18} height={18} />
				</div>
			</div>
			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Links</span>
					<Link href="/">Homepage</Link>
					<Link href="/">Blog</Link>
					<Link href="/">About</Link>
					<Link href="/">Contact</Link>
				</div>
				<div className={styles.list}>
					<span className={styles.listTitle}>Tags</span>
					<Link href="/">Travel</Link>
					<Link href="/">Culture</Link>
					<Link href="/">Food</Link>
					<Link href="/">Coding</Link>
				</div>
				<div className={styles.list}>
					<span className={styles.listTitle}>Social</span>
					<Link href="/">Facebook</Link>
					<Link href="/">Instagram</Link>
					<Link href="/">Twitter</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
