type MetaType = {
	id: string;
	title: string;
	date: string;
	tags: string[];
};

type BlogppostType = {
	meta: MetaType;
	content: ReactElement<any, string | JSXElementConstructor<any>>;
};
