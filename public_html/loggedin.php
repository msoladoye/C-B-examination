<?php
    //dataconn.php is the file connecting to the database
    require_once 'dataconn.php';
    //confirming if the values in username and password matches any in the database
    if($_REQUEST['submit']){
        $studentID = $_REQUEST['studentID'];
        $studentPassword = $_REQUEST['studentPassword'];
        $sql = 'SELECT * FROM `studentsdata`';
        $result = mysqli_query($conn, $sql);
        $error = 'yes'; 
        while($row = mysqli_fetch_array($result)){
                if($row['studentID'] === $studentID && $row['studentPassword'] === $studentPassword){
                    $error = 'no';
                    $firstName = $row['firstName'];
                    $lastName = $row['lastName'];
                    $otherName = $row['otherName'];
                    $studentID = $row['studentID'];
                    $matricNumber = $row['matricNumber'];
                    setcookie('userName', $studentID, time()+(86400) ,'/');
                    setcookie('mattricNum', $matricNumber, time()+(86400) ,'/');
                    $passport_src = 'passport/'.$otherName.'.jpg';
                    $passport_alt = $otherName."'s passport"; 
                }
            }
        //returns you to the login page if no match
        if($error == 'yes'){
            setcookie('error','yes', time()+10, '/');
            header('Location: studentLogin.php');
        }
    }
?>
<html>
    <head>
        <script>
            function redirect(){
                window.location = "submit.php";
            }
            var selected = [39];
        </script>
        <link type="text/css" rel="stylesheet" href="css/loggedincss.css"/>
        <script src="js/question10.js" type="text/javascript"></script>
        <script src="js/question20.js" type="text/javascript"></script>
        <script src="js/question30.js" type="text/javascript"></script>
        <script src="js/question40.js" type="text/javascript"></script>
        <script src="js/script.js" type="text/javascript"></script>
        <title>Examination</title>
    </head>
    <body>
        <div id="container">
            <div id="header">
                <div id="logo"><img src="image/kplogo.jpg" alt="kwaraploy logo"/></div>
                <div id="banner">
                    <pre style="vertical-align: central;">
                        <h1>KWARA STATE POLYTECHNIC ILORIN</h1>
                        <h3>P.M.B 1375, ILORIN </h3>
                    </pre>
                </div>
                <div id="passport">
                    <img src="<?php echo $passport_src;?>" width="100%" height="100%" alt="<?php echo $passport_alt;?>"/>
                </div>
            </div>
            <div id="profile">
                <center>
                    <table>
                        <tr>
                            <th>First Name</th><th>Last Name</th><th> Other Name</th><th>Student ID</th><th>Matric Number</th>
                        </tr>
                        <tr>
                            <td><?php echo '<p>'.$firstName; ?></td><td><?php echo '<p>'.$lastName; ?></td><td><?php echo '<p>'.$otherName; ?></td><td><?php echo '<p>'.$studentID; ?></td><td><?php echo '<p>'.$matricNumber; ?></td>
                        </tr>
                    </table>
                </center>
            </div>
            <div id="questions_container">
                <div id="course">
                    <center>
                        <table>
                            <tr>
                                <th>COURSE TITLE</th><th>COURSE CODE</th><th>TIME</th><th>COURSE UNIT</th><th>TIME LEFT</th>
                            </tr>
                            <tr>
                                <td>TECHNICAL ENGLISH</td><td>OTM 211</td><td>1hr 30min</td><td>4</td><td><p id="countdown"></p></td>
                            </tr>
                        </table>
                    </center>
                </div>
                <div id="questions">       
                    <form method="post" action="#" name="myform">
                        <div id="question">
                            <script>q1();</script>
                        </div>
                        <div id="paging">
                            <a href="#" onclick="q1();" id="l1">1</a>
                            <a href="#" onclick="q2();" id="l2">2</a>
                            <a href="#" onclick="q3()" id="l3">3</a>
                            <a href="#" onclick="q4()" id="l4">4</a>
                            <a href="#" onclick="q5()" id="l5">5</a>
                            <a href="#" onclick="q6()" id="l6">6</a>
                            <a href="#" onclick="q7()" id="l7">7</a>
                            <a href="#" onclick="q8()" id="l8">8</a>
                            <a href="#" onclick="q9()" id="l9">9</a>
                            <a href="#" onclick="q10()" id="l10">10</a>
                            <a href="#" onclick="q11();" id="l11">11</a>
                            <a href="#" onclick="q12();" id="l12">12</a>
                            <a href="#" onclick="q13()" id="l13">13</a>
                            <a href="#" onclick="q14()" id="l14">14</a>
                            <a href="#" onclick="q15()" id="l15">15</a>
                            <a href="#" onclick="q16()" id="l16">16</a>
                            <a href="#" onclick="q17()" id="l17">17</a>
                            <a href="#" onclick="q18()" id="l18">18</a>
                            <a href="#" onclick="q19()" id="l19">19</a>
                            <a href="#" onclick="q20()" id="l20">20</a>
                            <a href="#" onclick="q21();" id="l21">21</a>
                            <a href="#" onclick="q22();" id="l22">22</a>
                            <a href="#" onclick="q23()" id="l23">23</a>
                            <a href="#" onclick="q24()" id="l24">24</a>
                            <a href="#" onclick="q25()" id="l25">25</a>
                            <a href="#" onclick="q26()" id="l26">26</a>
                            <a href="#" onclick="q27()" id="l27">27</a>
                            <a href="#" onclick="q28()" id="l28">28</a>
                            <a href="#" onclick="q29()" id="l29">29</a>
                            <a href="#" onclick="q30()" id="l30">30</a>
                            <a href="#" onclick="q31();" id="l31">31</a>
                            <a href="#" onclick="q32();" id="l32">32</a>
                            <a href="#" onclick="q33()" id="l33">33</a>
                            <a href="#" onclick="q34()" id="l34">34</a>
                            <a href="#" onclick="q35()" id="l35">35</a>
                            <a href="#" onclick="q36()" id="l36">36</a>
                            <a href="#" onclick="q37()" id="l37">37</a>
                            <a href="#" onclick="q38()" id="l38">38</a>
                            <a href="#" onclick="q39()" id="l39">39</a>
                            <a href="#" onclick="q40()" id="l40">40</a>
                        </div>
                    </form>
                    <div style="background-color: white; margin-top: -10px;" onclick="confirm()"><button>SUBMIT</button></div>
                </div>
                <div id="displayConfirm"></div>
            </div>
        </div>
        <script language="javascript">
            //function to be called when submit button is clicked
            function confirm(){
                document.getElementById('displayConfirm').innerHTML = '\n\
                <head>\n\
                    <style>\n\
                        #confirm{\n\
                        padding: 2%;\n\
                        width: 540px;\n\
                        height: 190px;\n\
                        border: 1px solid greenyellow;\n\
                        background-color: white;\n\
                        position: absolute;\n\
                        text-align: center;\n\
                        font-size: 35px;\n\
                        left: 25%;\n\
                        top: 150px;\n\
                    }\n\
                    </style>\n\
                </head>\n\
                <body>\n\
                    <div id="confirm">\n\
                        ARE YOU SURE YOU WANT TO SUBMIT?<br/>\n\
                        <input type="button" name="confirm" onclick="yes()" value="YES"/>\n\
                        <input type="button" name="confirm" onclick="no()" value="NO"/>\n\
                    </div>\n\
                </body>';
            };
            //action to carryout when no is clicked from submit pop-up
            function no(){
                document.getElementById('displayConfirm').innerHTML = '<style>\n\
                    #confirm{\n\
                        display: none;\n\
                    }\n\
                    </style>';
            }
            //action to carryout when yes is clicked from submit pop-up
            function yes(){
                no();
                for(var i = 0; i < selected.length; i++){
                    document.cookie = "name"+ i + "=" + selected[i];
                }
                redirect();
            }
        </script>
    </body>    
</html>
<?php
    mysqli_close($conn);