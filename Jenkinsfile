pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/SajidCurious/jk'
            }
        }
        stage('Build') {
            steps {
                sh 'echo "Building the project..."'
                sh './build.sh' // Add your actual build command
            }
        }
        stage('Test') {
            steps {
                sh 'echo "Running tests..."'
                sh './test.sh' // Add your actual test command
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo "Deploying..."'
                sh './deploy.sh' // Add your actual deployment script
            }
        }
    }
}
