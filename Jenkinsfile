pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                yarn
            }
        }
        stage('Test') {
            steps {
                npm run test
            }
        }
        stage('Code Coverage') {
            steps {
                npm run test --coverage
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
