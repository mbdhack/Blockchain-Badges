<!--Stylesheets-->
<link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
<link href="css/modern-business.css" rel="stylesheet">

    <!-- Custom Fonts -->
<link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<!--Scripts-->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<!--Sliding icons-->
<script type="text/javascript">
$(document).ready(function() {
$(".username").focus(function() {
$(".user-icon").css("left","-48px");
});
$(".username").blur(function() {
$(".user-icon").css("left","0px");
});
 
$(".password").focus(function() {
$(".pass-icon").css("left","-48px");
});
$(".password").blur(function() {
$(".pass-icon").css("left","0px");
});
});
</script>