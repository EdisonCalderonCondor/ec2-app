module.exports = {
  apps : [{
    name: "EC2 APP",
    script: "index.js",
    instances: "max",
    max_memory_restart: "256M",
    env: {
      NODE_ENV: "development"
    },
    env_production: {
      NODE_ENV: "production"
    }
  }]
};