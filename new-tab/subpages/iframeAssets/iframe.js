setTimeout(() => {
    if (sessionStorage.getItem("link") != "") {
        console.log(sessionStorage.getItem("link"))
        window.open(sessionStorage.getItem("link")) && window.close()
    } else {
        alert("error"+"\nError type: no link\nSessionStorage.getItem('link') = " + sessionStorage.getItem("link"))
    }

}, 500);