pipeline {
  agent any
  tools {nodejs "18.7.0"}
  stages {
    stage('Build') {
      steps {
        sh 'npm version'
      }
    }
  }
}