pipeline {
    agent any
    tools {nodejs "9.7.1"}

    stages {
        stage('Build') {
            steps {
                sh 'npm install -g yarn'
                sh 'yarn install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Code Coverage') {
            steps {
                sh 'npm run test --coverage'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
