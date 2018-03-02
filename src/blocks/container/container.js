$(document).ready(function(){
    $("[data-index]").click(function(){
        $("[data-tab]").addClass("hidden");
        $("[data-tab="+$(this).attr("data-index")+"]").removeClass("hidden");
        $(".button_service.button_service-active").removeClass("button_service-active");
        $(this).addClass("button_service-active")
    })
})
