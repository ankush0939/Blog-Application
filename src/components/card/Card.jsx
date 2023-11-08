import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image src="/p1.jpeg" alt="" fill className={styles.image}/>
			</div>
			<div className={styles.textContainer}>
				<div content={styles.detail}>
					<span className={styles.date}>11.02.203 - </span>
					<span className={styles.category}>CULTURE</span>
				</div>
				<Link href="/">
					<h1 className={styles.cardTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
				</Link>
				<p className={styles.desc}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor harum
					culpa vero exercitationem, quam expedita provident quas nam doloremque
					esse asperiores sed iure sint sequi hic aut atque voluptas ducimus.
				</p>
				<Link href="/" className={styles.link}>Read More</Link>
			</div>
		</div>
	);
};

export default Card;
