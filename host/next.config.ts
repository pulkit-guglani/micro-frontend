const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config: any, options: any) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        remotes: {
          chat: "chat@http://localhost:3001/_next/static/ssr/remoteEntry.js",
          assessment:
            "assessment@http://localhost:3002/_next/static/ssr/remoteEntry.js",
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
