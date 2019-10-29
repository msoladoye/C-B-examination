<?php
    require_once 'dataConn.php';
    $matricNumber = $_COOKIE['mattricNum'];
    $studentID = $_COOKIE['userName'];
    function phpAction($matNum, $stuID, $con){
        //$selected = array(4);
        $sqlAns = 'SELECT * FROM `studentsdata`';
        $resultAns = mysqli_query($con, $sqlAns);            
        while($rowAns = mysqli_fetch_array($resultAns)){
            if($matNum == $rowAns['matricNumber'] && $stuID == $rowAns['studentID']){
                $selected = array();
                for($i = 0; $i <= 39; $i++){
                    $j = $i + 1;
                    $selected[$i] = $_COOKIE['name'.+$i];
                    $sqlInsert = "UPDATE `studentresult` SET `$j` = '$selected[$i]' WHERE `matricNumber` = '$matNum'";
                    $query = mysqli_query($con, $sqlInsert) or die('<p> could not submit answers to the database').  mysqli_error($query);
                }
            }
        }
        echo '<p>options submited';
    }
    //mysqli_close($conn);
    ?>
    <html>
    <head>
        <title>SUBMITTING OPTIONS</title>
        <link href="css/submit.css" rel="stylesheet" type="text/css"/>
        <link type="text/css" rel="stylesheet" href="css/style.css"/>
    </head>
    <body>
        <div id="header">
            <div id="logo"><img src="image/kplogo.jpg" alt="kwaraploy logo"/></div>
            <div id="banner">
                <pre style="vertical-align: central;">
                    <h1>KWARA STATE POLYTECHNIC ILORIN</h1>
                    <h3>P.M.B 1375, ILORIN </h3>
                </pre>
            </div>
        </div>
        <div id="submitted-alert">
            <script>
                addEventListener('keydown', function (e){
                   if(e.altKey && e.keyCode === 37){
                       alert('no going back');
                       e.preventDefault();
                   } 
                });
                var z = 20;
                function backHome(){
                    if(z === 0){
                        
                        window.location = 'index.php';
                    }else{
                        z = z - 1;
                      document.getElementById('submitted-alert').innerHTML = '<?php phpAction($matricNumber,$studentID, $conn);?><p>Redirecting to Login page in....' + z +'s';  
                    //document.write('<p>Redirecting to Login page in....' + z);
                    }
                }
                //document.write('<p>Redirecting to Login page in....');
                setInterval(backHome, 1000);
            </script>
        </div>
        <div id="footer">
                <div id="left-footer">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                        <li><a href="#">Link 4</a></li>
                        <li><a href="#">Link 5</a></li>
                        <li><a href="#">Link 6</a></li>
                        <li><a href="#">Link 7</a></li>
                        <li><a href="#">Link 8</a></li>
                        <li><a href="#">Link 9</a></li>
                        <li><a href="#">Link 5</a></li>
                        <li><a href="#">Link 6</a></li>
                        <li><a href="#">Link 7</a></li>
                        <li><a href="#">Link 8</a></li>
                        <li><a href="#">Link 9</a></li>
                    </ul>
                </div>
                <center><div id="right-footer">
                    <ul>
                        <li><a href="index.html">Contact US</a></li>
                        <li><a href="#">About our company</a></li>
                        <li><a href="#">Product and services</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                    <p>
                        &copy copyright SoladoyeOla Web Samples 2017
                    </p>
                </div></center>
            </div>
    </body>
</html>