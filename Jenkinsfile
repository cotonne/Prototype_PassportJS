pipeline {
  agent any
  environment {
    TARGET = 'target'
  }
  stages {
       stage('Checkout'){
          steps {
            checkout scm
          }
       }

       stage('Test'){
         steps {
           print "Environment will be : ${env.NODE_ENV}"

           sh 'node -v'
           sh 'npm prune'
           sh 'npm install'
           sh 'npm test'
         }
       }

       stage('Audit') {
         steps {
           sh 'npm audit'
         }
       }
 
       stage('Sonar'){
         steps {
           //def scannerHome = tool 'SonarQube Scanner 2.8';

           withSonarQubeEnv('My SonarQube Server') {
             sh "${scannerHome}/bin/sonar-scanner"
           }
         }
       }

       stage('Deploy'){
         steps {
           echo 'Push to Dev'
           sh './pushToDev.sh'
           }
       }


       stage('OWASP Zap') {
         steps {
           sh 'zap-cli quick-scan --self-contained http://${env.TARGET}'
         }
       }


       stage('Mozilla Observatory') {
         steps {
           sh 'httpobs-local-scan --http-port 8080 ${env.TARGET}'
         }
       }

    
//       stage('Custom') {
//         steps {
//           // SQLMap?/MongoDBMap
//           // OAuth test/vulnerability scanner?
//           // Metasploit?
//         }
//       }

       stage('Cleanup'){
         steps {
           echo 'prune and cleanup'
           sh 'npm prune'
           sh 'rm node_modules -rf'
         }
       }

  }

}
