const listOfItems = [
    {
        "name": "exp",
        "link": "https://example.com",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURkjADH8adMZoLwD6ozLVHAmnO98fkYr292CNkS3G&s"
    },
    {
        "name": "test",
        "link": "https://example.com",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURkjADH8adMZoLwD6ozLVHAmnO98fkYr292CNkS3G&s"
    },
    {
        "name": "test2",
        "link": "https://example.com",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURkjADH8adMZoLwD6ozLVHAmnO98fkYr292CNkS3G&s"
    },
    {
        "name": "tes5t",
        "link": "https://example.com",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURkjADH8adMZoLwD6ozLVHAmnO98fkYr292CNkS3G&s"
    },
    {
        "name": "te123st",
        "link": "https://example.com",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURkjADH8adMZoLwD6ozLVHAmnO98fkYr292CNkS3G&s"
    },
    {
        "name": "teasdst",
        "link": "https://example.com",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURkjADH8adMZoLwD6ozLVHAmnO98fkYr292CNkS3G&s"
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
            location.href = game.link;  
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