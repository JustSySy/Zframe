var app_config = {
    domain:"",
    //api_domain:"http://edu.qizoubixia.top/",
    api_domain:"http://47.91.224.145/",
    version:"1.0.2",
    scroll_elem:".page",
    Zupload:{
        //upurl:"http://edu.qizoubixia.top/api/UploadImage/upimg",
        //qiniu_token:"http://edu.qizoubixia.top/api/UploadImage/qiniu_token",
        upurl:"http://47.91.224.145/api/UploadImage/upimg",
        qiniu_token:"http://47.91.224.145/api/UploadImage/qiniu_token",
        qiniu_up:1,
        before:function(){Ztoast.loding();},
        complete:function(res){
            Ztoast.close();
            if(this.options.success)this.options.success(res['x:path']);
        },
        error:function(res){
            Ztoast.close();
            Ztoast.msg('上传失败！')
        },
    }
};