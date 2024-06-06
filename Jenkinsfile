pipeline {
    agent any

    environment {
        GIT_URL = "https://github.com/dpcomm/cba_app.git"
    }
    stages {
        stage('Pull') {
            steps {
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
                git url: "${GIT_URL}", branch: "master", poll: true, changelog: true
                sh "sudo cp /home/joeykim/cba/ws_data/.env /var/lib/jenkins/workspace/cba_ws"
                sh "sudo cp -r /home/joeykim/cba/ws_data/data /var/lib/jenkins/workspace/cba_ws"
            }
        }
        stage('Wipe') {
            steps {
                sh "docker-compose stop"
                sh "docker system prune -a -f"
                sh "docker volume prune -f"
            }
        }
        stage('Build') {
            steps {
                sh "sudo docker-compose build"
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }

        stage('Finish') {
            steps{
                sh 'docker stop react-builder'
                sh 'docker images -qf dangling=true | xargs -I{} docker rmi {}'
            }
        }
    }
}