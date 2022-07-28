pipeline {
  agent any
  tools {nodejs "18.7.0"}
  stages {
    stage('Build') {
      steps {
        npm install
        // npx wdio run wdio.conf.js
      }
    }
  }
}