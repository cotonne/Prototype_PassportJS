pipeline {
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

         }
       }
 
       stage('Sonar'){
         steps {
           def scannerHome = tool 'SonarQube Scanner 2.8';

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
         }
       }


       stage('Mozilla Observatory') {
         steps {

         }
       }

    
       stage('Custom') {
         steps {
           // SQLMap?
           // OAuth test/vulnerability scanner?
           // Metasploit?
         }
       }

       stage('Cleanup'){
         steps {
           echo 'prune and cleanup'
           sh 'npm prune'
           sh 'rm node_modules -rf'
         }
       }

  }

}
