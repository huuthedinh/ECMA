function loadScript(src, callback) {
    const script = document.createElement("script"); // <script>
    script.src = src; // <script src="https://developer.mozilla.org"></script>
    script.onload = function () {
        callback(script);
    };
    script.onload = function () {
        callback(new Error("load failed"));
    };
    document.head.append(script); // <head><script src="https://developer.mozilla.org"></script></head>
}


// setTimeout
loadScript("https://developer.mozilla.org", function (error, script) {
    if (error) {
        console.log(error);
    } else {
        console.log(script);
    }
});
