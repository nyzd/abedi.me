import styles from "./card.module.css";

export function Card({ children }: any) {
    return (<div className={styles.card}>{children}</div>);
}

export function CardHead({ children }: any) {
    return (<div>{children}</div>);
}

export function CardTitle({ children }: any) {
    return (<h2>{children}</h2>);
}

export function CardDescription({ children }: any) {
    return (<p className={styles.cardDescription}>{children}</p>);
}

