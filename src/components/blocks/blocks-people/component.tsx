import { People } from "../../../lib/schema";
import style from "./styles.module.scss";

export const BlockPeople = (props: People) => {
	return (
		<p>
			<pre>{JSON.stringify(props, null, 4)}</pre>
		</p>
	);
};
