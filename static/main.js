define(['jquery'], function ($) {
    var Controller = {
        init: function(){
            $(".editor").each(function(){
                let that = $(this);
                let name = $(this).attr("name");
                $(this).css("display","none");
                ESA.clog(name+"开始处理editor");
                let editor_name = "esa_editor_"+name;
                // let textarea_name = "esa_editor_textarea_"+name;
                $(this).parent().prepend("<div id='"+editor_name+"'></div>")
                require(['/static/addons/qubit_wang_editor/wangEditor.min.js'],function(wangEditor){
                    var editor = new wangEditor("#"+editor_name);
                    // editor.customConfig.uploadImgServer = window.Config.upload_file_url;
                    editor.config.uploadFileName = 'files[]';
                    editor.config.uploadImgServer = window.ESAConfig.attachment.upload;
                    editor.config.uploadImgHooks = {
                        customInsert: function (insertImg, result, editor) {
                            insertImg(result.data[0].path);
                        }
                    }
                    editor.config.onchange = function (html) {
                        // 监控变化，同步更新到 textarea
                        that.val(html);
                    }
                    editor.create();
                    // 初始化 textarea 的值
                    editor.txt.html(that.val());
                })
                
            })
        }
    }
    return Controller;
})