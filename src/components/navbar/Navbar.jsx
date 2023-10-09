import react from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
			<div className={styles.container}>
				<div className={styles.social}>
					<Image src="/facebook.png" alt="facebook" width={24} height={24} />
					<Image src="/instagram.png" alt="instagram" width={24} height={24} />
					<Image src="/twitter.png" alt="twitter" width={24} height={24} />
				</div>
				<div className={styles.logo}>Writers Paradice</div>
				<div className={styles.links}>
					<Link href="/">Homepage</Link>
					<Link href="/">Contact</Link>
				    <Link href="/">About</Link>
                </div>
			</div>
		);
}

export default Navbar