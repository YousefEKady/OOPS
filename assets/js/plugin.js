// Search Picker
$(document).ready(function () {
    $('.search-pick').selectpicker();
});
// Product Picker
$(document).ready(function () {
    $('.product-pick').selectpicker();
});
// Car Ad Form
$(document).ready(function () {
    var value = $(".forValue").val();
    if (value == 1) {
        $(".for-hidden-car").show();
    }
});