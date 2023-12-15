var appres = new Vue({
    el: '#commercialForm',
    data: {
        FullName: null,
        Email: null,
        BusinessName: "",
        CorporateName: "",
        VatId: null,
        Address: null,
        Phone: null,
        City: null,
        Province: null,
        District: null,
        TaxOffice: null,
        citys: [],
        districts: [],
        taxOffices: [],
        errors: []

    },
    methods: {
        checkForm: function (e) {
            this.errors = [];
            this.FullName = this.FullName.trim();
            nameValidation(this.FullName, this.errors);
            validateEmail(this.Email, this.errors);

            var countryData = iti.getSelectedCountryData();
            var phone = document.querySelector("#phone").value;
            if (phone != null && phone != "") {
                this.Phone = "+" + countryData.dialCode + document.querySelector("#phone").value;
                document.querySelector("#phoneReal").value = this.Phone;
            } else {
                this.errors.push(localR.GetValueFromLangKeyList("Landing_Corporate_Form_Phone_Error"));
            }
            if (!iti.isValidNumber())  {
                var errorCode = iti.getValidationError();
                this.errors.push(phoneErrorSelector(errorCode));
            }


            if (this.errors.length === 0) {
                grecaptcha.execute('6LcWPxQaAAAAAAghQo1IEAamjB8la3HT_95OoEYJ', { action: 'commercial' })
                    .then(function (token) { $('input[name=__reCAPTCHAVerificationToken]').val(token); })
                    .then(function () {
                        ShowLoading();
                        var data = $('#commercialForm').serialize();
                        window.scrollTo(0, 0);

                        $.ajax({
                            url: $('#commercialForm').attr("action"),
                            type: "POST",
                            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                            data: data,
                            success: function (data) {
                                $('#commercialForm').html("");
                                $('.commercial-form-container h2').html(localR.GetValueFromLangKeyList("Landing_Corporate_Request_Received"));
                            },
                            error: function (data, x, y) {
                                console.log(data, x, y, data.responseJSON);
                                $('.btn-continue').removeAttr('disabled');
                                $('#commercialForm').html("");
                                $('.commercial-form-container h2').html(localR.GetValueFromLangKeyList("Landing_Corporate_Request_Error"));
                                HideLoading();
                            }
                        });
                    });


            }

            e.preventDefault();
        }
    },
    watch:
    {
        City(newValue) {
            var vm = this;
            var cityArr = vm.citys.filter(x => x.id === newValue);
            if (cityArr != null && cityArr.length > 0) {
                this.Province = cityArr[0].name;

                $.get("/api/asset/city/" + newValue + "/district", function (data, status) {
                    if (status && data != null) {
                        vm.districts = data[0].districts;
                        vm.taxOffices = data[0].taxOffices;
                    }
                });
            }
        }
    },
    created: function () {
        var vm = this;


    },
    mounted: function () {
        var vm = this;
        $.get("/api/asset/city", function (data, status) {
            if (status)
                vm.citys = data;
        });
    }
});
var input = document.querySelector("#phone");
if (input != null) {
    var errorMap = ["Invalid phone number", "Invalid country code", "Phone number too short", "Phone number too long", "Invalid phone number"];
    var iti = window.intlTelInput(input, {
        preferredCountries: ['tr', 'es'],
        separateDialCode: true,
        utilsScript: "/js/lib/intlTelinput/utils.js"
    });
    iti.setCountry(ct);
}
