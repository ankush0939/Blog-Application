import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = ({ key, item }) => {
	return (
		<div className={styles.container} key={key}>
			<div className={styles.imageContainer}>
				<Image src="/p1.jpeg" alt="" fill className={styles.image} />
			</div>
			<div className={styles.textContainer}>
				<div content={styles.detail}>
					<span className={styles.date}>
						{item.createdAt.substring(0, 10)} -{' '}
					</span>
					<span className={styles.category}>{item.catSlug}</span>
				</div>
				<Link href="/">
					<h1 className={styles.cardTitle}>{item.title}</h1>
				</Link>
				<p className={styles.desc}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor harum
					culpa vero exercitationem, quam expedita provident quas nam doloremque
					esse asperiores sed iure sint sequi hic aut atque voluptas ducimus.
				</p>
				<Link href="/" className={styles.link}>
					Read More
				</Link>
			</div>
		</div>
	);
};

export default Card;
