<?php
    if(isset($_POST['sub'])){
        echo '<p>'.$_FILES['image']['tmp_name'];
        echo '<p>'.$_FILES['image']['name'];
        echo '<p>'.$_FILES['image']['type'];
        echo '<p>'.$_FILES['image']['size'];
        echo '<p>'.$_FILES['image']['error'];
        $dir = "image/";
        $file = $dir.basename($_FILES['image']['name']);
        $upladOK = 1;
        $fileType = strtolower(pathinfo($file, PATHINFO_EXTENSION));
        $image_size = getimagesize($_FILES['image']['tmp_name']);
        if($image_size !== FALSE){
            echo '<p>its an image '.$image_size['mime'].' .'.$upladOK;
            //echo '<img src="'.$file.'">';
        }
        if(file_exists($file)){
            echo '<p>File already exixt in the path';
            $upladOK = 0;
        }
        if($_FILES['image']['size'] > 50000){
            echo '<p>file too large';
            $upladOK = 0;
        }
        if($fileType !== 'jpg' && $fileType !== 'png' && $fileType !== 'gif' && $fileType !== 'jpeg'){
            echo '<p>please choose a valid image format';
            $upladOK = 0;
        }
        if($upladOK !== 1){
            echo '<p>File not uploaded';
        }else{
            if(move_uploaded_file($_FILES['image']['tmp_name'], $file)){
                echo '<p>the file'.  basename($_FILES['image']['name']).' has been uploaded';
            }else{
                echo '<p> there was an error uploading file';
            }
        }
    }
?>
<html>
    <body>
        <form action="<?php $_php_SELF ?>" method="POST" enctype="multipart/form-data">
            <input type="file" name="image"/>
            <input type="submit" name="sub"/> 
        </form>
    </body>
</html>