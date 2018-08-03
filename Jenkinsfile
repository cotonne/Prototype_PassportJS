pipeline {

       stage('Checkout'){

          checkout scm
       }

       stage('Test'){

         env.NODE_ENV = "test"

         print "Environment will be : ${env.NODE_ENV}"

         sh 'node -v'
         sh 'npm prune'
         sh 'npm install'
         sh 'npm test'

       }

       stage('Audit') {


       }
 
       stage('Sonar'){
         def scannerHome = tool 'SonarQube Scanner 2.8';

         withSonarQubeEnv('My SonarQube Server') {
           sh "${scannerHome}/bin/sonar-scanner"
         }
       }

       stage('Deploy'){
         echo 'Push to Dev'
         sh './pushToDev.sh'
       }


       stage('OWASP Zap') {

       }


       stage('Mozilla Observatory') {

       }

    
       stage('Custom') {
         // SQLMap?
         // OAuth test/vulnerability scanner?
         // Metasploit?
       }

       stage('Cleanup'){

         echo 'prune and cleanup'
         sh 'npm prune'
         sh 'rm node_modules -rf'

         mail body: 'project build successful',
                     from: 'xxxx@yyyyy.com',
                     replyTo: 'xxxx@yyyy.com',
                     subject: 'project build successful',
                     to: 'yyyyy@yyyy.com'
       }



}
