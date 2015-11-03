var dir = "../images/gallery/";
var fileextension = [".png", ".PNG", ".jpg", ".JPG", ".gif", ".GIF"];
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
        //Lsit all png file names in the page
        $(data).find("a:contains(" + (fileextension[0]) + "), a:contains(" + (fileextension[1]) + "), a:contains(" + (fileextension[2]) + "), a:contains(" + (fileextension[3]) + "), a:contains(" + (fileextension[4]) + "), a:contains(" + (fileextension[5]) + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http:///personal_website/parts/", "").replace("http:///", "").replace("http:///~lli/xiaoli_1924/personal_website/parts/", "");
            $("#gallery").append($("<a href='" + dir + filename + "' class='swipebox' title='" + filename + "'><img src='" + dir + "thumb/" + filename + "' alt='image'></a>"));
        });
    }
});
