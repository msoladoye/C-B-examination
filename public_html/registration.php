<?php
    require_once 'dataConn.php';
    if(isset($_POST['submit'])){
        //echo 'weldone';
        $passport = htmlspecialchars($_POST['passport']);
        $matricNumber = htmlspecialchars($_POST['matricNumber']);
        $firstName = htmlspecialchars($_POST['firstName']);
        $lastName = htmlspecialchars($_POST['lastName']);
        $otherName = htmlspecialchars($_POST['otherName']);
        $DOB = htmlspecialchars($_POST['DOB']);
        $email = htmlspecialchars($_POST['email']);
        $mobileNumber = htmlspecialchars($_POST['mobileNumber']);
        $stateOfOrigin = htmlspecialchars($_POST['stateOfOrigin']);
        $LGA = htmlspecialchars($_POST['LGA']);
        $sex = htmlspecialchars($_POST['sex']);
        $studentID = htmlspecialchars($_POST['studentID']);
        $studentPassword = htmlspecialchars($_POST['matricNumber']);
        $sql = "INSERT INTO `studentsdata` (`ID`, `passport`,`matricNumber`, `firstName`, `lastName`, `otherName`, `DOB`, `email`,"
                . " `mobileNumber`, `stateOfOrigin`, `LGA`, `sex`, `studentID`, `studentPassword`)"
                . "VALUES (NULL, '$passport','$matricNumber', '$firstName', '$lastName', '$otherName', '$DOB', '$email', "
                . "'$mobileNumber', '$stateOfOrigin', '$LGA', '$sex', '$studentID', '$studentPassword')";
        //$result = mysqli_query($conn, $sql) or die("<p>could not add information").mysqli_error($result);
        $result = mysqli_query($conn, $sql) or die('<p>error adding information '.mysqli_error($conn));
        }
        echo '<p>information added to DB';
?>

<html>
    <head>
        <title>Registration Form</title>
        <link href="css/registration.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <form action="<?php $_PHP_SELF ?>" method="POST">
            <label>FIRST NAME</label><br/>
            <input type="text" name="firstName" placeholder="Enter First Name" required/><br/>
            <label>LAST NAME</label><br/>
            <input type="text" name="lastName" placeholder="Enter Last Name"required/><br/>
            <label>OTHER NAME</label><br/>
            <input type="text" name="otherName" placeholder="Enter Other Name"required/><br/>
            <label>STUDENT ID</label><br/>
            <input type="text" name="studentID" placeholder="Enter Student ID"required/><br/>
            <label>MATRIC NUMBER</label><br/>
            <input type="text" name="matricNumber" placeholder="Enter Matric Number"required/><br/>
            <label>DATE OF BIRTH</label><br/>
            <input type="date" name="DOB" placeholder="Enter Date Of Birth"required/><br/>
            <label>E-mail</label><br/>
            <input type="email" name="email" placeholder="Enter E-mail"required/><br/>
            <label>MOBILE NUMBER</label><br/>
            <input type="phone" name="mobileNumber" placeholder="Enter Mobile Number"required/><br/>
            <label>STATE OF ORIGIN</label><br/>
            <input type="text" name="stateOfOrigin" placeholder="Enter State"required/><br/>
            <label>LGA</label><br/>
            <input type="text" name="LGA" placeholder="Enter LGA"required/><br/>
            <label>PASSPORT UPLOAD</label><br/>
            <input type="FILE" name="passport" placeholder="upload your passport"required/><br/>
            <legend style="border: 1px solid black;">SEX<br/>
                <label>Male</label><input type="radio" name="sex" value="M"required/>
                <label>female</label><input type="radio" name="sex" value="F"required/>
            </legend>
            <input type="submit" name="submit"/><br/>
        </form>
        
    </body>
</html>