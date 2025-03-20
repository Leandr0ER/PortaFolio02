
//const ARE_WE_HOME = document.documentElement.classList.contains("home");

let pages = [
    {url: "", title: "Home"},
    {url: "projects/", title: "Projects"},
    {url: "resume/", title: "Resume"},  
    {url: "contact/", title: "Contact"},
    {url: "https://github.com/Leandr0ER/PortaFolio02", title: "Github"}      
    //{url: "https://github.com/Mike-Kowalsky", title: "Projects"}
    // add the rest of your pages here
];

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
	let url = p.url;
	let title = p.title;

	if (!ARE_WE_HOME && !url.startsWith("http")) {
		url = "../" + url;
	}	
	
	let a = document.createElement("a");
	a.href = url;
	a.textContent = title;

	if (a.host === location.host && a.pathname === location.pathname) {
		a.classList.add("current");
	}

	if (a.host !== location.host){
		a.target = "_blank";
	}

	nav.append(a);
}


document.body.insertAdjacentHTML("afterbegin", `
    <label class="color-scheme">
        Theme:
        <select>
            <option value="light dark"> Automatic </option>
			<option value="light"> Light </option>
			<option value="dark"> Dark </option>
        </select>
    </label>`
);

let select = document.querySelector("select");


select.addEventListener("input", function (event) {
    document.documentElement.style.setProperty("color-scheme", event.target.value);
	
	localStorage.colorScheme = event.target.value;
});


if (localStorage.colorScheme) {
    document.documentElement.style.setProperty("color-scheme", localStorage.colorScheme);
    select.value = localStorage.colorScheme;
}