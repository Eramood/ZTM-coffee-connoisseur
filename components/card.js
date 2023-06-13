import Link from "next/link";
import Image from 'next/image';
import cls from 'classnames'
import styles from "./card.module.css";
const Card = (props) => { 
  const {href,name,imURL}=props;

  return (
    <Link href={href} >
      <div className={styles.cardLink}>
        <div className={cls("glass",styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{name}</h2>
         </div>
      
          <div className={styles.cardImageWrapper}>
            <Image
              className={styles.cardImage}
              src={imURL} 
              width={260} height={160} 
              alt={`coffe img ${href}`}
            />
          </div>
        </div>
      </div>
    </Link>
  );
  
};
export default Card;