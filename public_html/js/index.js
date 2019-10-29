function login(){
    document.getElementById('body-content').innerHTML = '\n\
            <p id="error"> INVALID PASSWORD OR USERNAME </p>\n\
            <h2>WELCOME TO KWARA STATE POLYTECHNIC\n\
                CBT LOGIN PAGE</h2>\n\
            <h4 style="color: white;">TYPE IN YOUR LOGIN DETAILS BELOW....</h4>\n\
            <div id="form-content">\n\
                <form action="loggedin.php" method="post" name="form">\n\
                    <div id="studentID">\n\
                        <label>Student ID:</label><br/>\n\
                        <input type="text" name="studentID" placeholder="Sudent ID" required/>\n\
                    </div>\n\
                    <div id="studentPassword">\n\
                         <label>Student Password:</label><br/> \n\
                         <input type="password" placeholder="Password" name="studentPassword" required/> <br/>\n\
                    </div>\n\
                    <button id="submit" type="submit" value="SUBMIT" name="submit" onclick="">SUBMIT</button>\n\
                    <div style="margin-left: 20px; text-align: left">\n\
                        <h5 style="font-size: 9; margin-top: 0px; color: red;">NOTE That:</h5>\n\
                        <i>\n\
                            <ul>\n\
                                <li><font color="red">Do not refresh page at any point during examination</font></li>\n\
                                <li> Options will be submitted immediately the time is up</li>\n\
                                <li> Student password required here is the same as the password used to log in to the school portal.</li>\n\
                                <li> Choose either A,B,C or D among the options</li>\n\
                                <li> when you are through before time is up, click on the submit button, and click YES to submit or NO id otherwise</li>\n\
                            </ul>\n\
                        </i>\n\
                    </div>\n\
                </form>\n\
            </div>';
}
function admin(){
    document.getElementById('body-content').innerHTML = "okay";
}