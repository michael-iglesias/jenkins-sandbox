pipeline {
    agent any
    tools {nodejs "version-name-set-in-configure-system"}

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
