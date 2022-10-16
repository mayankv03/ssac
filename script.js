$(document).ready(function(){

    $(".js-form-item").on("click", function () {
        $(this).addClass('form-item--input-filled');
    });
    $(".form-item__input").on("blur", function () {
        if($(this).val() !== '') {
            $(this).parent('.js-form-item').addClass('form-item--input-filled');
        }
    });
    $(".form-item__input").on("blur", function () {
        if($(this).val() === '') {
            $(this).parent('.js-form-item').removeClass('form-item--input-filled');
        }
    });
    
    $("#filladdress").on("click", function(){
        if (this.checked) { 
               $("#Padd").val($("#Radd").val()).parent('.js-form-item').addClass('form-item--input-filled');
               $("#Pcit").val($("#Rcit").val()).parent('.js-form-item').addClass('form-item--input-filled');
               $("#Psta").val($("#Rsta").val()).parent('.js-form-item').addClass('form-item--input-filled'); 
               $("#Pzip").val($("#Rzip").val()).parent('.js-form-item').addClass('form-item--input-filled');                    
        }
        else {
            $("#Padd").val('').parent('.js-form-item').removeClass('form-item--input-filled');         
            $("#Pcit").val('').parent('.js-form-item').removeClass('form-item--input-filled');         
            $("#Psta").val('').parent('.js-form-item').removeClass('form-item--input-filled');         
            $("#Pzip").val('').parent('.js-form-item').removeClass('form-item--input-filled');         
        }
   });
});

