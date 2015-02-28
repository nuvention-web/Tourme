<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// Echo session variables that were set on previous page
$_SESSION["loc"] = $_POST["location"];
$_SESSION["time"] =  $_POST["optradio"];
echo "location is ".$_SESSION["loc"]."<br>";
echo "time is ".$_SESSION["time"].".";
?>



</body>
</html>


<script>


</script>
