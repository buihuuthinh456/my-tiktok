import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Sidebar: React.FC = () => {
    return <aside className={cx("wrapper")}>Sibar</aside>;
};

export default Sidebar;
