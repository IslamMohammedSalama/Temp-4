/* Helight Columns Using JavaScript */
// Method One

// document
// 	.querySelectorAll(".projects table tbody td")
// 	.forEach((cell) => {
// 		cell.addEventListener("mouseover", () => {
// 			const columnIndex = cell.cellIndex + 1; // Get column index (1-based)
// 			document
// 				.querySelectorAll(`.projects table tbody tr > *:nth-child(${columnIndex})`)
// 				.forEach((el) => el.classList.add("highlight-column"));
// 		});

// 		cell.addEventListener("mouseout", () => {
// 			const columnIndex = cell.cellIndex + 1;
// 			document
// 				.querySelectorAll(`.projects table tbody tr > *:nth-child(${columnIndex})`)
// 				.forEach((el) => el.classList.remove("highlight-column"));
// 		});
// 	});


// Method Two
document.addEventListener("DOMContentLoaded", () => {
	// Select all table cells in .projects table
	const cells = document.querySelectorAll(".projects table tbody td");

	// Mouseenter handler
	const handleMouseEnter = (event) => {
		const cell = event.target;
		const columnIndex = cell.cellIndex + 1; // Convert to 1-based index

		// Highlight all cells in the column
		document
			.querySelectorAll(
				`.projects table tbody tr > *:nth-child(${columnIndex})`
			)
			.forEach((el) => el.classList.add("highlight-column"));
	};

	// Mouseleave handler
	const handleMouseLeave = (event) => {
		const cell = event.target;
		const columnIndex = cell.cellIndex + 1;

		// Remove highlight from all cells in the column
		document
			.querySelectorAll(
				`.projects table tbody tr > *:nth-child(${columnIndex})`
			)
			.forEach((el) => el.classList.remove("highlight-column"));
	};

	// Add event listeners to all cells
	cells.forEach((cell) => {
		cell.addEventListener("mouseenter", handleMouseEnter);
		cell.addEventListener("mouseleave", handleMouseLeave);
	});
});
