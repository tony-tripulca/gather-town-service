module.exports = {
  apps: [
    {
      name: "LearnerService.1.2",
      namespace: "skhillz-learner-service",
      script: "./src/index.js",
      watch: ["./src", "./src/*.js"],
      output: "./logs/out.log",
      error: "./logs/error.log",
    },
  ],
};
