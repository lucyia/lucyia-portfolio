<?php
// the following code was taken from 
// http://www.freecontactform.com/email_form.php
// and customized
if(isset($_POST['email'])) {
	$email_to = "hi@lucyia.com";
	$email_subject = "Contact form from lucyia.com";

	function died($error) {
		echo "Sorry but there were error(s) found with the form you submitted. ";
		echo "These errors appear below.<br />";
		echo $error."<br />";
		echo "<br />Please go back and fix these errors.<br />";
		die();
	}

	// validation expected data exists
	if(!isset($_POST['first_name']) ||
		!isset($_POST['last_name']) ||
		!isset($_POST['email']) ||
		!isset($_POST['telephone']) ||
		!isset($_POST['message'])) {
		died('Sorry but there appears to be a problem with the form you submitted.');
	}

	$first_name = $_POST['first_name']; // required
	$last_name = $_POST['last_name']; // required
	$email_from = $_POST['email']; // required
	$telephone = $_POST['telephone']; // not required
	$message = $_POST['message']; // required
	
	$error_message = "";
	//$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

	//if(!preg_match($email_exp,$email_from)) {
	//	$error_message .= 'The email address you entered does not appear to be valid.<br />';
	//}
	
	//$string_exp = "/^[A-Za-z .'-]+$/";

	//if(!preg_match($string_exp,$first_name)) {
	//	$error_message .= 'The first name you entered does not appear to be valid.<br />';
	//}

	//if(!preg_match($string_exp,$last_name)) {
	//	$error_message .= 'The last name you entered does not appear to be valid.<br />';
	//}

	if(strlen($message) < 2) {
		$error_message .= 'The message you entered do not appear to be valid.<br />';
	}

	if(strlen($error_message) > 0) {
		died($error_message);
	}

	$email_message = "".clean_string($first_name)."have sent a message.\n\n";

	function clean_string($string) {
		$bad = array("content-type","bcc:","to:","cc:","href");
		return str_replace($bad,"",$string);
	}

	$email_message .= "First name: \t".clean_string($first_name)."\n";
	$email_message .= "Last name: \t".clean_string($last_name)."\n";
	$email_message .= "Email: \t".clean_string($email_from)."\n";
	$email_message .= "Phone: \t".clean_string($telephone)."\n";
	$email_message .= "Message: \t".clean_string($message)."\n";

	// create email headers
	$headers = 'From: '.$email_from."\r\n".
	'Reply-To: '.$email_from."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	@mail($email_to, $email_subject, $email_message, $headers);
?>

<!-- success html -->

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<!-- Viewport -->
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- Basic info -->
		<title>lucyia | contact</title>
		<meta name="language" content="english">
		<meta name="description" content="Personal portfolio of Lucia Kocincova a.k.a. lucyia, front-end developer and graphic designer. Code, Design, Paint.">
		<meta name="keywords" content="lucyia, portfolio, graphic design, front-end, visualization, paintings, drawings, articles">
		<meta name="robots" content="index, follow">

		<!-- Minified style sheet; including Bootstrap and custom css -->
		<link href="style.css" rel="stylesheet">

		<!-- Font -->
		<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,900,400italic,700italic' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Monoton' rel='stylesheet' type='text/css'>

		<!-- Minified js scripts; including jQuery, Bootstrap and custom code -->
		<script src="scripts-min.js" type="text/javascript"></script>

		<!-- Favicon -->
		<link rel="apple-touch-icon" sizes="57x57" href="/img/favicon/apple-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="/img/favicon/apple-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="72x72" href="/img/favicon/apple-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="76x76" href="/img/favicon/apple-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="114x114" href="/img/favicon/apple-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="120x120" href="/img/favicon/apple-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="144x144" href="/img/favicon/apple-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="152x152" href="/img/favicon/apple-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-icon-180x180.png">
		<link rel="icon" type="image/png" sizes="192x192"  href="/img/favicon/android-icon-192x192.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="96x96" href="/img/favicon/favicon-96x96.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png">
		<link rel="manifest" href="/img/favicon/manifest.json">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-TileImage" content="/img/favicon/ms-icon-144x144.png">
		<meta name="theme-color" content="#ffffff">

		<!-- Google Analytics tracking code -->
		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-73607604-1', 'auto');
		  ga('send', 'pageview');

		</script>

		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
	      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	    <![endif]-->
	</head>
	
	<body>
		<header>
			<div class="container">
				<nav class="navbar navbar-default">
					<div class="container-fluid">
						<!-- collapsed nav links -->
						<div class="navbar-header">
							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>		      
						</div>

						<!-- nav links -->
						<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul class="nav navbar-nav">
								<li>
									<a href="/portfolio.html">portfolio
									</a>
								</li>
								<li>
									<a href="/articles.html">articles
									</a>
								</li>
								<li>
									<a href="/about.html">about</a>
								</li>
								<li class="active">
									<a href="/contact.html">contact
										<span class="sr-only">(current)</span>
									</a>
								</li>
							</ul>
						</div><!-- /.navbar-collapse -->
					</div><!-- /.container-fluid -->
				</nav>
			</div>
		</header>

		<div class="container">
			<h1>contact</h1>
			<h2>thank you</h2>
			<div class="row">
				<div class="col-sm-12 contact-text-success">					
					<p>I will get in touch with you as soon as possible.</p>
				</div>
			</div>
		</div>

		<footer>
			<div class="container">
				<div class="text-center">design & code by <a href="lucyia.com">lucyia</a></div>
			</div>
		</footer>
	</body>
</html>

<?php
}
?>