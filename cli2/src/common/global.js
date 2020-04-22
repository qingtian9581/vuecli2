//systemName
global.systemName = 'ers_usp';
//服务地址
global.serviceUrl = process.env.BASE_API;
//APIKey
global.APIKey = '6c49e43-f89f-08e4-edd8f84883928c093';

// key_scheme
global.AUTH_TOKEN_SCHEME = 'ata-token';
global.AUTH_APP_KEY_SCHEME = 'ata-app-key';
global.AUTH_TEMP_TOKEN_SCHEME = 'ttoken';

//ajax请求返回code
global.resultCode = {
    //操作成功
    Success: 10,
    //警告异常,message记录警告信息
    AlertException: 20,
    //错误异常。message记录错误信息
    ErrorException: 30,
    //部分成功
    PartiallySuccess: 11,
    //略过
    SkipOver: 40,
    //操作不成功
    NotSuccess: 50,
    //无权限
    NoPermission: 60
};
global.displayRuleType = {
    not_null: 0,
    contain: 1
};
global.usetype = {
    ordinary: 1,
    thirdParty: 2,
    orderUser: 3
};

global.tipKeyCode = {
    exam_reg_success: 'exam_reg_success',
    region_reg_success: 'region_reg_success',
    subject_reg_success: 'subject_reg_success'
};

global.globalProvider = {

    serviceUrl: function (url) {
        return serviceUrl + url
    },
    setDocumentTitle: function (title) {
        document.title = title;
        let ua = navigator.userAgent;
        if (/\bMicroMessenger\/([\d\.]+)/.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
            var i = document.createElement('iframe');
            i.src = '/favicon.ico';
            i.style.display = 'none';
            i.onload = function () {
                setTimeout(function () {
                    i.remove();
                }, 9);
            };
            document.body.appendChild(i);
        }
    },
    initScript: function (src) {
        var myScript = document.createElement("script");
        myScript.type = "text/javascript";
        myScript.src = src;
        document.body.appendChild(myScript);
    },
    isGuideDomain: function (domain) {
        //导游域名
        let guideDomain = ['dyhn','dygd','dygz','dysh','dysc','dycq','dyah','dyzj','dyyn','dybj','dybt','dyfj','dygs','dygx','dyhainan','dyhebei','dyhenan','dyhlj','dyhubei','dyjl','dyjs','dyjx','dynm','dynx','dyqh','dysd','dyshanxi','dysx','dytj','dyxz','dyxj','dyln'];
        if(guideDomain.indexOf(domain)>-1){
            return true;
        }else{
            return false;
        }
    }
};

