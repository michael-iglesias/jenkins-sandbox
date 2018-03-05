pipeline {
    agent any
    tools {nodejs "NodeJS Env"}

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
        stage('Cypress E2E Tests') {
            steps {
                sh 'docker --version'
                sh 'export phantomjs=/usr/bin/phantomjs'
                sh 'phantomjs t.js'

                sh 'http-server -p 1111 . > http.log 2>&1 &'
                sh 'npm run test:cypress'
                sh 'fuser -k 1111/tcp'
            }
        }
    }
}
