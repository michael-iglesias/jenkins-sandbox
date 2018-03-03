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
        stage('PhantomJS') {
            steps {
                sh 'export phantomjs=/usr/bin/phantomjs'
                sh 'phantomjs t.js'
                sh 'npm run test:casper'
            }
        }
    }
}
