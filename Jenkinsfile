pipeline {
  agent any
  tools {nodejs "18.7.0"}
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npx wdio run wdio.conf.js'
      }
    }
  }
}