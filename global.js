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

const ARE_WE_HOME = document.documentElement.classList.contains("home");

for (let p of pages) {
    let url = p.url;
    let title = p.title;
    // Create link and add it to nav
    if (!ARE_WE_HOME && !url.startsWith("http")) {
        url = "../" + url;
    }
    // nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );

    // Step 3.2:  Highlighting the current page and opening external links in a new tab
    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    nav.append(a);

    a.classList.toggle("current", a.host === location.host && a.pathname === location.pathname);
}

// Step: 4.3
document.body.insertAdjacentHTML("afterbegin", `
    <label class="color-scheme">
        Theme:
        <select>
            <option value="light dark">light dark</option>
            <option value="light">light</option>
            <option value="dark">dark</option>
        </select>
    </label>`
);

// Step: 4.4
let select = document.querySelector("select");

select.addEventListener("input", function (event) {
    document.documentElement.style.setProperty("color-scheme", event.target.value);
});

// Step: 4.5
localStorage.colorScheme = event.target.value;

if (localStorage.colorScheme) {
    document.documentElement.style.setProperty("color-scheme", localStorage.colorScheme);
    select.value = localStorage.colorScheme;
}