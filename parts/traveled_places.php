<!DOCTYPE html>
<html>

<head>
    <!--    <title>Welcome to the New World</title>-->
    <!-- Latest compiled and minified CSS -->
    <?php include("includes/link.php"); ?>
        <link rel="stylesheet" href="../css/traveled_places.css">
        <link rel="stylesheet" href="../lib/swipebox/src/css/swipebox.min.css">
        <link rel="stylesheet" href="../css/includes/gallery.css">

        <script src="../lib/swipebox/lib/jquery-2.1.0.min.js"></script>
        <script src="../lib/swipebox/src/js/jquery.swipebox.min.js"></script>

        <script src="https://maps.googleapis.com/maps/api/js"></script>
        <script type="text/javascript">
            ;
            (function($) {

                $('.swipebox').swipebox();

            })(jQuery);

        </script>
        <script src="../js/gallery.js"></script>
        <script src="../js/map.js"></script>
</head>

<body id="body3">
    <div class="container">
        <!--Bootstrap container-->
        <div class="row">
            <!--Bootsrap row-->
            <div class="col-md-12">
                <header>
                    <h1 id="header">The World</h1>
                </header>
            </div>

            <div class="col-md-12">
                <?php include("includes/site-navigation.php"); ?>
            </div>
        </div>

        <div class="row">
            <main id="maincontent" class="center-block col-md-12">
                <div class="row">
                    <h1>Places I have been to</h1>
                    <div id="map-canvas" class="center-block"></div>
                </div>
                <div class="row">
                    <?php include("includes/gallery.php"); ?>
                </div>
            </main>
        </div>

        <div class="row">
            <hr />
            <div class="col-md-12">
                <?php include("includes/footer.php"); ?>
            </div>
        </div>
    </div>
    <!--closing Bootsrap container-->

</body>

</html>
