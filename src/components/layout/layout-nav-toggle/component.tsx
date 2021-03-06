import style from "./styles.module.scss";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";

interface Props {
	onClick: () => void;
	isOpen: boolean;
}

export const LayoutNavToggle = ({
	isOpen,
	onClick: handleClick,
}: Props): React.ReactElement => {
	return (
		<button
			className={`${style.container} ${isOpen ? style.open : style.closed}`}
			onClick={handleClick}
			aria-label={isOpen ? "Close Menu" : "Open Menu"}
		>
			{isOpen ? <RiCloseFill /> : <RiMenuFill />}
		</button>
	);
};
