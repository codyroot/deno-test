
addEventListener("fetch", (event) => {
    event.respondWith(
        new Response("Hello keule", {
            status: 200,
            headers: { "content-type": "text/plain" },
        }),
    );
});