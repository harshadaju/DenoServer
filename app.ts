addEventListener("fetch", (event) => {
  const response = new Response("Hello Amju!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
