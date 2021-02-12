function getinput(ti) {
    let inputVal = ti.value;
    switch(inputVal) {
        case "git":
        case "github":
            window.location.href = "https://github.com/guiszk";
            break;
        case "gitlab":
            window.location.href = "https://gitlab.com/guiszk";
            break;
        case "mail":
        case "email":
            window.location.href = "mailto:guiszk@protonmail.com";
            break;
        case "palettemaker":
            window.location.href = "https://github.com/guiszk/palettemaker";
            break;
        case "extractpanels":
            window.location.href = "https://github.com/guiszk/extractpanels";
            break;
        case "wallgen":
            window.location.href = "https://github.com/guiszk/wallgen";
            break;
        case "tvshow":
            window.location.href = "https://github.com/guiszk/tvshow";
            break;
        case "vault":
            window.location.href = "https://github.com/guiszk/vault";
            break;
        case "dots":
            window.location.href = "https://gitlab.com/guiszk/dots";
            break;
        case "listening":
        case "listening to":
            window.location.href = "./listening.html";
            break;
        case "my":
        case "music":
        case "my music":
            window.location.href = "./music.html";
            break;
        case "back":
            window.location.href = "./index.html"
            break;
        default:
            let text = "commands&colon;<br>&#91;project name&#93;<br>github<br>gitlab<br>email<br>listening<br>music<br>back";
            document.getElementById("stdout").innerHTML = text;
    }
}
