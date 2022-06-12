# School_management_system

Backend default port: 3000
Base address: http://<HOST_NAME>:3000/

route categories

1. login route
2. admin route
3. teacher route
4. student route

Login route

      login details for admin

      name : "Principal"
      email_id : "principal@gmail.com"
      password : "Principal@123"

      1. /auth/login/?email_id=<email_id>&password=<password>

        this will send the user object and auth_token as response
  
 admin route
   
   1. /admin/teacher/?name=<teacherName>&email_id=<email>&password=<password>
      request header =>  authorization : Bearer <auth_token>
      will create new login for teacher
      
   2. /admin/student/?name=<studentName>&email_id=<email>&password=<password>
      request header =>  authorization : Bearer <auth_token>
      will create new login for student
      
   3. /admin/class/?className=<classname>
      request header =>  authorization : Bearer <auth_token>
      will create new class
      

  
