import { handleCurrency, slugify } from "../../../utility";
import style from "./styles.module.scss";
import { handleSanityImageFixed } from "../../../utility/handle-sanity-image";
import { ProductCard } from "../../product";
import { handleThemeColor } from "../../../utility/handle-theme-color";
import { Product } from "../../../lib/groq";

export type Props = {
	title: string;
	products?: Product[];
};

export const BlockProducts = ({ title, products = [] }: Props) => {
	return (
		<ul className={style.list} id={slugify(title)}>
			{products.map(
				({
					title,
					cost,
					thumbnail,
					url,
					brand,
					// description,
					// expiresAt,
					notice,
				}) => {
					const thumb = handleSanityImageFixed({
						asset: thumbnail,
						width: 160,
						height: 160,
					});
					if (!thumb) {
						return null;
					}

					const noticeTheme = handleThemeColor(notice?.theme);
					const price = handleCurrency(cost);
					return (
						<li key={title + brand} className={style.item}>
							<ProductCard
								title={title}
								subtitle={brand}
								noteText={notice?.label}
								noteTheme={noticeTheme}
								price={price}
								thumb={thumb}
								link={url}
							/>
						</li>
					);
				},
			)}
		</ul>
	);
};
