import styles from "../styles.module.css";

export default function MainTopButtonUI({buttonName}){
    return(
        <div>
            <button className={styles.mainTopButton}>{buttonName}</button>
        </div>
    )
}