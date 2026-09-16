$(document).ready(function () {

    $(document)
        .ajaxStart(function () {
            $('.loading').show();
        })
        .ajaxStop(function () {
            $('.loading').hide();
        });

    $("button[type='submit']").on('click', function () {
        $(".loading").show();
    });

});