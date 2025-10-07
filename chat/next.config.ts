const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config: any, options: any) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "chat",
        filename: "static/ssr/remoteEntry.js",
        exposes: {
          "./ChatPage": "./ChatPage.tsx",
        },
        shared: {
          react: { singleton: true, requiredVersion: false },
          "react-dom": { singleton: true, requiredVersion: false },
          next: { singleton: true, requiredVersion: false },
        },
      })
    );
    return config;
  },
};
