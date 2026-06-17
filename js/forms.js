/**
 * Form handling for static site.
 * Update FORM_ENDPOINTS with your server-side handler URLs (e.g. PHP mail scripts).
 */
var FORM_ENDPOINTS = {
    enquiryform: 'api/enquiry.php',
    Contactform: 'api/contact.php',
    careerForm: 'api/career.php'
};

function OnlyNumbersAllowed(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k >= 48 && k <= 57) || k == 8 || k == 0 || k == 32);
}

function OnlyAlphabetsAllowed(e) {
    var textInput = $('#' + e.id).val();
    textInput = textInput.replace(/[^a-z A-Z.]+/g, "");
    $('#' + e.id).val(textInput);
}

$(function () {
    if ($('#enquiry-form').length > 0) {
        $('#enquiry-form').parsley();
    }
    if ($('#contact-form').length > 0) {
        $('#contact-form').parsley();
    }
    if ($('#career-form').length > 0) {
        $('#career-form').parsley();
    }
});

$('#submitbtn3').click(function (e) {
    e.preventDefault();

    if ($('#enquiry-form').parsley().validate()) {
        var botTrapValue = $('#txtEnquiryBait').val();

        if (botTrapValue !== "") {
            $("#submitbtn3").text('submit');
            var fakeHtml = '<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Success!</strong> Thank you for the details. We are looking forward to meeting you there.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
            $("#msg").html(fakeHtml);
            $("#msg").show();
            setTimeout(function () { $("#msg").hide(); }, 15000);
            $("#enquiry-form")[0].reset();
            return;
        }

        var formdata = new FormData();
        formdata.append('fname', $('#fname').val());
        formdata.append('cname', $('#cname').val());
        formdata.append('mobile', $('#mobile').val());
        formdata.append('email', $("#email").val());
        formdata.append('designation', $('#designation').val());
        formdata.append('message', $('#message').val());

        $(this)[0].innerHTML = 'Please wait......';
        AjaxCall3(formdata, $(this).attr('id'));
    }
});

function AjaxCall3(formdata, btnId) {
    $.ajax({
        type: "POST",
        data: formdata,
        url: FORM_ENDPOINTS.enquiryform,
        contentType: false,
        processData: false,
        success: function (result) {
            $("#" + btnId).text('submit');
            var html = '';
            if (result == "Success" || result.success) {
                html = '<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Success!</strong> Thank you for the details. We are looking forward to meeting you there.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
                $("#msg").html(html);
                setTimeout(function () { $("#msg").hide(); }, 15000);
                $("#enquiry-form")[0].reset();
            } else {
                html = '<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Oops !</strong> Something went wrong please try again.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
                $("#msg").html(html);
            }
        },
        error: function () {
            $("#" + btnId).text('submit');
            $("#msg").html('<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Oops !</strong> Something went wrong please try again.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
        }
    });
}

$('#submitbtn1').click(function (e) {
    e.preventDefault();
    if ($('#contact-form').parsley().validate()) {
        var botTrap = $('#txtWebsiteAddress').val();
        if (botTrap !== "") {
            $("#submitbtn1").text('submit');
            var fakeHtml = '<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Success!</strong> Thank you for the details.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
            $("#msg").html(fakeHtml);
            $("#contact-form")[0].reset();
            return;
        }

        var formdata = new FormData();
        formdata.append('fname', $('#fname').val());
        formdata.append('cname', $('#cname').val());
        formdata.append('message', $('#message').val());
        formdata.append('mobile', $('#mobile').val());
        formdata.append('email', $("#email").val());
        formdata.append('designation', $('#designation').val());
        var isChecked = $('#agreeCheckbox').is(':checked') ? 'Yes' : 'No';
        formdata.append('agreeCheckbox', isChecked);

        $(this)[0].innerHTML = 'Please wait......';
        AjaxCall1(formdata, $(this).attr('id'));
    }
});

function AjaxCall1(formdata, btnId) {
    $.ajax({
        type: "POST",
        data: formdata,
        url: FORM_ENDPOINTS.Contactform,
        contentType: false,
        processData: false,
        success: function (result) {
            $("#" + btnId).text('submit');
            var html = '';
            if (result == "Success" || result.success) {
                html = '<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Success!</strong> Thank you for the details. We are looking forward to meeting you there.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
                $("#msg").html(html);
                setTimeout(function () { $("#msg").hide(); }, 15000);
                $("#contact-form")[0].reset();
            } else {
                html = '<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Oops !</strong> Something went wrong please try again.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
                $("#msg").html(html);
            }
        },
        error: function () {
            $("#" + btnId).text('submit');
            $("#msg").html('<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Oops !</strong> Something went wrong please try again.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
        }
    });
}

$('#btnsubmit2').click(function (e) {
    e.preventDefault();
    if ($('#career-form').parsley().validate()) {
        var formdata = new FormData();
        formdata.append('fname', $('#fname').val());
        formdata.append('message', $('#message').val());
        formdata.append('position', $('#position').val());
        formdata.append('mobile', $('#mobile').val());
        formdata.append('email', $("#email").val());
        var isChecked = $('#agreeCheckbox').is(':checked') ? 'Yes' : 'No';
        formdata.append('agreeCheckbox', isChecked);

        $(this)[0].innerHTML = 'Please wait......';
        AjaxCall2(formdata, $(this).attr('id'));
    }
});

function AjaxCall2(formdata, btnId) {
    $.ajax({
        type: "POST",
        data: formdata,
        url: FORM_ENDPOINTS.careerForm,
        contentType: false,
        processData: false,
        success: function (result) {
            $("#" + btnId).text('submit');
            var html = '';
            if (result == "Success" || result.success) {
                html = '<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Success!</strong> Thank you for the details. We are looking forward to meeting you there.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
                $("#msg").html(html);
                setTimeout(function () { $("#msg").hide(); }, 15000);
                $("#career-form")[0].reset();
            } else {
                html = '<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Oops !</strong> Something went wrong please try again.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
                $("#msg").html(html);
            }
        },
        error: function () {
            $("#" + btnId).text('submit');
            $("#msg").html('<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Oops !</strong> Something went wrong please try again.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
        }
    });
}
