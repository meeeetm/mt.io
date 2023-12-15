function lower(capitals) {
    if (typeof capitals != "undefined" && capitals != null)
        capitals = capitals.map(function (obj) {
            if (typeof obj['Name'] != "undefined") {
                obj['name'] = obj['Name'];
                delete obj['Name'];
                obj['value'] = obj['Value'];
                delete obj['Value'];
            }
            return obj;
        });
    return capitals;
}

var UesProvider = function () {
    var self = this;
    var key = UesKey || "7501a9dc1ea943d97836f1320d847a5a";
    var serviceUesUrl = UesUrlClient;
    var UesUrlClientLastVod = "?publicKey=" + key;
    var UesUrlClientLastLive = "?publicKey=" + key;
    this.token = "";

    var checkSummary = false;
    var checkAddList = false;
    var checkRemoveList = false;


    this.formDataToken = {

    };

    var device = "desktop";
    if (jscd.mobile) {
        device = "mobile";
    };

    var formDataGeneral = {
        appName: jscd.browser,
        device: device,
        medium: "browser",
        os: jscd.os,
        sessionID: SessionId
    };

    this.GetUesToken = function () {


        self.token = utoken;
        localStorage.setItem("u_tkn", utoken);
        return utoken;
    };

    this.CreateSession = function (liveCheck, item, itemDurationInfo) {


        var public = UesUrlClientLastVod;
        var itemInfo;
        if (liveCheck) { public = UesUrlClientLastLive; }
        var itemTags = {
            genre: CreateGenresForSession(item),
            contentType: CreateContentTypeForSession(item),
            tags: CreateTagsForSession(item)
        };
        var formData = Object.assign({}, self.formDataToken, formDataGeneral, itemTags, itemDurationInfo);

        var url = serviceUesUrl + "view_update/" + public + "&cumulativeDuration=true";
        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(formData),

            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                itemInfo = data;

            },
            failure: function (errMsg) {

            }
        });


        return itemInfo;
    }


    this.AddToHistory = function (item, itemDurationInfo, success) {

        var public = UesUrlClientLastVod;
        var itemTags = {
            genre: CreateGenresForSession(item),
            contentType: CreateContentTypeForSession(item),
            tags: CreateTagsForSession(item)
        };
        var formData = Object.assign({}, self.formDataToken, formDataGeneral, itemTags, itemDurationInfo);
        var result;
        var url = serviceUesUrl + "add_to_history/" + public;
        $.ajax({
            type: "POST",
            url: url,
            async: true,
            timeout: 1000,
            data: JSON.stringify(formData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                success();
                return data;

            },
            failure: function (errMsg) {

            },
            completed: function (data) {
                return data;

            }
        });
    }

    this.GetSummary = function (liveCheck, id) {
        var public = UesUrlClientLastVod;
        if (liveCheck) public = UesUrlClientLastLive;

        var url = serviceUesUrl + "get_summary/" + public;
        var getSummaryData = {
            contentID: id
        };
        var formData = Object.assign({}, self.formDataToken, getSummaryData);
        var itemInfo;
        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(formData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            timeout: 3000,

            async: false,
            success: function (data) {
                if (data.errorCode == "INVALID_JWT") {
                    if (!checkSummary) {
                        checkSummary = true;
                        self.GetUesToken();
                        itemInfo = self.GetSummary(liveCheck, id);
                    }
                } else {
                    itemInfo = data;
                }
            },
            failure: function (errMsg) {
            }
        });

        return itemInfo;
    }


    this.AddToList = function (liveCheck, formDataReq, item) {
        var public = UesUrlClientLastVod;
        if (liveCheck) public = UesUrlClientLastLive;
        if (item != null)
            var itemTags = {
                genre: CreateGenresForSession(item),
                contentType: CreateContentTypeForSession(item),
                tags: CreateTagsForSession(item)
            };
        var formData = Object.assign({}, self.formDataToken, itemTags, formDataReq);

        var url = serviceUesUrl + "add_to_list/" + public;
        var itemInfo;
        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(formData),

            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (data) {
                if (data.errorCode == "INVALID_JWT") {
                    if (!checkAddList) {
                        checkAddList = true;
                        self.GetUesToken();
                        itemInfo = self.AddToList(liveCheck, formDataReq, item);
                    }

                } else {
                    itemInfo = data;
                }
            },
            failure: function (errMsg) {
            }
        });
        return itemInfo;

    }


    this.RemoveToList = function (liveCheck, formDataReq) {
        var public = UesUrlClientLastVod;
        if (liveCheck) public = UesUrlClientLastLive;
        var formData = Object.assign({}, self.formDataToken, formDataReq);

        var url = serviceUesUrl + "remove_from_list/" + public;


        var itemInfo;
        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(formData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (data) {
                if (data.errorCode == "INVALID_JWT") {
                    if (!checkRemoveList) {
                        checkRemoveList = true;
                        self.GetUesToken();
                        itemInfo = self.RemoveToList(liveCheck, formDataReq);
                        return itemInfo;

                    }

                } else {
                    itemInfo = data;
                }
            },
            failure: function (errMsg) {
            }
        });
        return itemInfo;

    }

    this.UpdateList = function (listName, liveCheck) {

        var public = UesUrlClientLastVod;
        if (liveCheck) public = UesUrlClientLastLive;
        var formDataReq = {
            name: listName,
            pageIndex: 1,
            pageSize: 100
        };
        var formData = Object.assign({}, self.formDataToken, formDataReq);
        var url = serviceUesUrl + "get_list/" + public;
        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(formData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (data) {
                if (data.result != null) {
                    var result = data.result.items.map(function (a) { return a.contentID; });
                    localStorage.setItem(listName, result);
                }


            },
            failure: function (errMsg) {
            }
        });

    }
    this.GetList = async function (liveCheck, formDataReq, uniqueContainers) {
        var public = UesUrlClientLastVod;
        if (liveCheck) public = UesUrlClientLastLive;
        var response = null;
        formDataReq.tags = lower(formDataReq.tags);
        var formData = Object.assign({}, self.formDataToken, formDataReq);

        var url = serviceUesUrl + "get_list/" + public;
        if (uniqueContainers == true)
            url += "&uniqueContainers=true";
        let result;

        try {
            result = await $.ajax({
                type: "POST",
                timeout: 3000,
                url: url,
                data: JSON.stringify(formData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",

            });

            return result;
        } catch (error) {
            console.error(error);
        }
    }
    this.GetListContainers = async function (formDataReq) {
        var public = UesUrlClientLastVod;
        var response = null;
        formDataReq.tags = lower(formDataReq.tags);
        var formData = Object.assign({}, self.formDataToken, formDataReq);
        if (formDataReq.name == "unfinished") {
            formData = Object.assign({}, formData, { contentType: ["Episode", "MovieContainer"] })
        }
        var url = serviceUesUrl + "get_list_containers/" + public;

        let result;

        try {
            result = await $.ajax({
                type: "POST",
                timeout: 3000,
                url: url,
                data: JSON.stringify(formData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",

            });

            return result;
        } catch (error) {
            console.error(error);
        }
    }
    //this.GetList = function (liveCheck, formDataReq, uniqueContainers) {
    //    var public = UesUrlClientLastVod;
    //    if (liveCheck) public = UesUrlClientLastLive;
    //    var response = null;
    //    formDataReq.tags = lower(formDataReq.tags);
    //    var formData = Object.assign({}, self.formDataToken, formDataReq);

    //    var url = serviceUesUrl + "get_list/" + public;
    //    if (uniqueContainers == true)
    //        url += "&uniqueContainers=true";

    //    $.ajax({
    //        type: "POST",
    //        timeout: 3000,
    //        url: url,
    //        data: JSON.stringify(formData),
    //        contentType: "application/json; charset=utf-8",
    //        dataType: "json",
    //        async: false,
    //        success: function (data) {
    //            if (data.result != null) {
    //                response = data.result.items;



    //            }
    //        },
    //        failure: function (errMsg) {
    //        }
    //    });
    //    return response;
    //}


    this.GetUserTopGenres = function () {
        var public = UesUrlClientLastVod;
        var response = null;
        var formData = Object.assign({}, self.formDataToken);

        var url = serviceUesUrl + "get_user_top_genres/" + public;


        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(formData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            timeout: 3000,
            async: true,
            success: function (data) {
                if (data.result != null) {
                    response = data.result;
                }
            },
            failure: function (errMsg) {
            }
        });
        return response;
    }


    var init = function () {
        self.formDataToken = {
            token: utoken,
            sessionID: SessionId
        };
    }

    init();
};

if (AuthCheck) {
    var ues = new UesProvider();
};


