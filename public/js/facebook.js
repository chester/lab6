function checkLoginState() {
    //$(".facebookLogin").hide();

    FB.getLoginStatus(function(response) {

        statusChangeCallback(response);
    });
}

function statusChangeCallback(response){
    console.log('Facebook login status changed.');
    console.log(response);

    if(response.status === 'connected') {
        console.log('Successfully logged in with facebook');
        FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
    }
}

function changeUser(response) {
    console.log(response);
    $(".facebookLogin").hide();
    $("#name").text(response.name);
    $("#photo").attr("src", response.picture.data.url);
}