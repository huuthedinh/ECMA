const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script"); // <script>
        script.src = src; // <script src="https://developer.mozilla.org"></script>
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error("load failed"));
        document.head.append(script); // <head><script src="https://developer.mozilla.org"></script></head>
    });
};

loadScript("https://github.com/nvm-sh/nvm")
    .then((script) => console.log(script))
    .catch((error) => console.log(error));