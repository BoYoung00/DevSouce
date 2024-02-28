import MainBottomLayout from "../layout/MainBottomLayout";
import MainTopLayout from "../layout/MainTopLayout";
import Header from "../../../components/Layout/Header/Header";
import styles from "../mainStyles.module.css";

export default function MainPage(){
    return(
        <div className={styles.mainPage}>
            <div>
                <Header />
                <MainTopLayout />
                <MainBottomLayout />
            </div>
        </div>
    )
}