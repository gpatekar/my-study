# study-angular
Learning angular 2

Node Update
- sudo npm cache clean -f (force) (clear you npm cache)
- sudo npm install -g n install "n" (this might take a while)
- sudo n stable (upgrade to lastest version)


Environment Setting
angular.json file
"configurations": {
  "production": { ... },
  "staging": {
    "fileReplacements": [
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.staging.ts"
      }
    ]
  }
}
"serve": {
  "builder": "@angular-devkit/build-angular:dev-server",
  "options": {
    "browserTarget": "your-project-name:build"
  },
  "configurations": {
    "production": {
      "browserTarget": "your-project-name:build:production"
    },
    "staging": {
      "browserTarget": "your-project-name:build:staging"
    }
  }
},

environment file:
export const environment = {
    production: false,
    ENV_NAME: 'loc', 
    // URL Settings
    apiUrl: 'https://safety-stage.c2expert.com/api', 
    // URL Settings
    URL_BASE_API: 'http://localhost:9907/api/v1',
    URL_BASE_SYS_ADMIN: 'http://localhost:9907/sysAdmin/v1',
    URL_SOCKET: 'http://localhost:9918',
};
