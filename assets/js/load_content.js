$(document).ready(function () {
  //set links to trigger variable
  let trigger = $("#main-body ul li a");

  //fire on click
  trigger.on("click", function () {
    //set $this for re-use. set target from data attribute
    let $this = $(this);
    target = $this.data("target");

    if (target == "pay-creditcard") {
      //load target page into container for pay with credit card form
      let container = $("#form-content");
      container.load(target + ".html");
      //stop normal link behavior
      return false;
    } else if (target == "forgot-password") {
      //load target page into container for reset password form
      let container = $("#form-content");
      container.load(target + ".html");
      //stop normal link behavior
      return false;
    } else {
      //load target page into container for pocket login form
      let container = $("#login-form");
      container.load(target + ".html");
      //stop normal link behavior
      return false;
    }
  });
});
