if (!String.prototype.getRightFormat) {
    Object.defineProperty(String.prototype, "getRightFormat", {
        value: function () {
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var dateText = this;
            if (dateText.length <= 15) {
                dateText = stringToDate(this);
            }
            if (isNaN(Date.parse(dateText.toString())) === false) {
                return dateText.toString();
            } else {
                var datee = dateText.toString().replace(/-/g, "/");

                if (isNaN(Date.parse(datee)) === false) {
                    return datee;
                } else {
                    return datee.replace("UTC+03:00", "UTC+3");
                }
            }
        },
        configurable: true,
        writable: true,
    })
}