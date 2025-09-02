const formateDate = (dateString: string): string => {
	const date = new Date(dateString);
	const datePart = date.toLocaleDateString("ru-RU", {
		year: "2-digit",
		month: "2-digit",
		day: "2-digit",
	});
	const timePart = date.toLocaleTimeString("ru-RU", {
		timeStyle: "short",
	});
	return `${datePart} в ${timePart}`;
};

export default formateDate;
