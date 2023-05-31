// Adjust the height of each section to fit the viewport height
function resizeSections() {
	var windowHeight = window.innerHeight;
	var sections = document.getElementsByTagName("section");
	for (var i = 0; i < sections.length; i++) {
		sections[i].style.height = windowHeight + "px";
	}
}

window.addEventListener("resize", resizeSections);
resizeSections();

function scrollToSection(sectionId) {
	const section = document.querySelector(sectionId);
	if (section) {
		section.scrollIntoView({ behavior: "smooth" });
	}
}
