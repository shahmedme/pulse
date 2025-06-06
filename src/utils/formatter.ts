import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const formatDate = (date: string) => {
	const now = dayjs();
	const postDate = dayjs(date);
	const diffHours = now.diff(postDate, "hour");

	if (
		diffHours < 24 &&
		now.format("YYYY-MM-DD") === postDate.format("YYYY-MM-DD")
	) {
		return `Today ${postDate.format("h:mmA")}`;
	} else if (diffHours < 6) {
		return `${diffHours} Hours ago`;
	} else {
		return postDate.format("DD MMM, YYYY");
	}
};
