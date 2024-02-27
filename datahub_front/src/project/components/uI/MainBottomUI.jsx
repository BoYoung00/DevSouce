import styles from "../styles.module.css";

export default function MainBottomUI({stepNum, bigText, smallText, buttonText, circleColor}){
    return(
        <div className={styles.mainBox}>
            <div className={styles.mainCircle} style={{background : circleColor}}>
                <div className={styles.mainStepText}>Step {stepNum}</div>
                <div className={styles.mainBigText}>{bigText}</div>
            </div>
            <div className={styles.mainSmallText}>
                <span className={styles.mainBlueText}>Step {stepNum}. </span>{smallText}
            </div>
            <button className={styles.mainBottomButton}>{buttonText}</button>
        </div>
    )
}

// 프로젝트 생성
// 백 데이터 설계 (백엔드)
// 프론트 클라이언트 설계 (프론트엔드)
// 디브소스로 데이터 및 코드 협업관리