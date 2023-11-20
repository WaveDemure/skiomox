const iframeLink = "./subpages/iframe.html"
const listOfItems = [
    {
        "name": "Roblox (nowgg)",
        "link": "https://now.gg/play/roblox-corporation/5349/roblox",
        "image": "./assets/games/roblox.png"
    }
]
var idx = 0;

window.onload = function() {
    listOfItems.forEach(game => {
        var gamediv = document.createElement("div");
        gamediv.id = idx;
        gamediv.className = game.name;
        document.getElementById("gamesDiv").appendChild(gamediv);

        var button = document.createElement("a")
        button.backgroundColor = document.body.style.backgroundColor;
        button.onclick = function () {
            sessionStorage.setItem("link", game.link)
            sessionStorage.setItem("title", game.name)

            location.href = iframeLink;  
        };
        gamediv.appendChild(button);

        var text = document.createElement("p")
        text.className = "games-para"
        text.innerHTML = game.name
        gamediv.appendChild(text)

        var image = document.createElement("img")
        image.src = game.image;
        image.className = "btn-image"
        button.appendChild(image)

        console.log("Name: "+game.name+" , Game Link: "+ game.link+" , idx: "+idx);
        idx++;
    });
}