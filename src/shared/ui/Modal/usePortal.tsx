export const usePortal = (id: string = "portal-root") => {
	let container = document.getElementById(id);

	if (!container) {
		container = document.createElement("div");
		container.id = id;
		document.body.appendChild(container);
	}

	return container;
};
