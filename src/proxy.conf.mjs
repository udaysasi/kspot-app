export default [
    {
        context: [
            "/ui-api",
            "/public",
            "/management",
            "/endpoints",
            "/auth",
            "/oauth2",
            "/saml2",
            "/msgraph",
            "/websocket",
            "/login",
        ],
        // target: "https://kloudgeo.internal.kloudspot.com/advanced/",
        // target: "http://localhost:8082/",
        target: "https://walker.kloudspot.com/advanced/",
        // target: "https://insightload.internal.kloudspot.com/advanced/",
        secure: true,
        changeOrigin: true,
        ws: true,
        xfwd: true,
    },
];
