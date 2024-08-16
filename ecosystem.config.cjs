module.exports = {
  apps: [
    {
      name: "GatherTownService",
      namespace: "gather-town-service",
      script: "./src/index.js",
      watch: ["./src", "./src/*.js"],
      output: "./logs/out.log",
      error: "./logs/error.log",
    },
  ],
};
