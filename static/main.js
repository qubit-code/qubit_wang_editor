define(['jquery'], function ($) {
    var Controller = {
        init: function(){
            // $(".editor").each(function(){
            //     let that = $(this);
            //     let name = $(this).attr("name");
            //     $(this).css("display","none");
            //     ESA.clog(name+"开始处理editor");
            //     let editor_name = "esa_editor_"+name;
            //     // let textarea_name = "esa_editor_textarea_"+name;
            //     $(this).parent().prepend("<div id='"+editor_name+"'></div>")
            //     require(['/static/addons/qubit_wang_editor/wangEditor.min.js'],function(wangEditor){
            //         var editor = new wangEditor("#"+editor_name);
            //         // editor.customConfig.uploadImgServer = window.Config.upload_file_url;
            //         editor.config.uploadFileName = 'files[]';
            //         editor.config.uploadImgServer = window.ESAConfig.attachment.upload;
            //         editor.config.uploadImgHooks = {
            //             customInsert: function (insertImg, result, editor) {
            //                 insertImg(result.data[0].path);
            //             }
            //         }
            //         editor.config.onchange = function (html) {
            //             // 监控变化，同步更新到 textarea
            //             that.val(html);
            //         }
            //         editor.create();
            //         // 初始化 textarea 的值
            //         editor.txt.html(that.val());
            //     })
                
            // })
            // v5版本
            $(".editor").each(function(){
                let that = $(this);
                let name = $(this).attr("name");
                $(this).css("display","none");
                let editor_name = "esa_editor_"+name;
                // let textarea_name = "esa_editor_textarea_"+name;
                $(this).parent().prepend("<div id='"+editor_name+"' style='border: 1px solid #ccc;'><div id='"+editor_name+"-toolbar-container' style='border-bottom: 1px solid #ccc;'></div><div id='"+editor_name+"-editor-container' style='height:500px'></div></div>")
                require(['/static/addons/qubit_wang_editor/wangEditor.v5.js','css!/static/addons/qubit_wang_editor/wangEditor.v5.css'],function(wangEditor){
                    console.log(that.val())
                        const editorConfig = {
                            placeholder: '此处输入...',
                            onChange(editor) {
                              const html = editor.getHtml()
                              that.val(html);
                              // 也可以同步到 <textarea>
                            },
                            MENU_CONF: {}
                        }
                        
                        
                        class ImageSelecterMenu {
                        
                            constructor() {
                                this.title = '选择图片' // 自定义菜单标题
                                this.iconSvg = '<svg viewBox="0 0 1024 1024"><path d="M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z"></path></svg>' // 可选
                                this.tag = 'button'
                            }
                        
                            // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
                            getValue(editor) {
                                return ''
                            }
                        
                            // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
                            isActive(editor) {
                                return false
                            }
                        
                            // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
                            isDisabled(editor) {
                                return false
                            }
                        
                            // 点击菜单时触发的函数
                            exec(editor, value) {
                                parent.ESA.fun.open(ESAConfig.pop.attachment,"图片选择器",{
                                    maxmin  : false,
                                    data    : {mimetype:"image/*"}, 
                                    callback: function(data){
                                        if(typeof data != "undefined"){
                                            $.each(data,function(key,value){
                                                editor.insertNode({
                                                    type: 'image',
                                                    src: value.show,
                                                    alt: key,
                                                    href: value.src,
                                                    children: [{text:""}]
                                                })
                                            })
                                        }
                                    }
                                });
                            }
                        }
                        
                        const imageSelecterConf = {
                            key: 'imageSelecterMenu',
                            factory() {
                            return new ImageSelecterMenu()
                            }
                        }
                        wangEditor.Boot.registerMenu(imageSelecterConf)
                        
                        const editor = wangEditor.createEditor({
                            selector: '#'+editor_name+'-editor-container',
                            html: that.val(),
                            config: editorConfig,
                            mode: 'default', // or 'simple'
                        })
                        
                        const toolbarConfig = {
                            // insertKeys: {
                            //     index: 22,
                            //     keys: ['imageSelecterMenu'], // show menu in toolbar
                            // },
                            // excludeKeys: ["uploadImage","uploadVideo"],
                            toolbarKeys: [
                                "headerSelect",
                                "blockquote",
                                "|",
                                "bold",
                                "underline",
                                "italic",
                                {
                                    "key": "group-more-style",
                                    "title": "更多",
                                    "iconSvg": "<svg viewBox=\"0 0 1024 1024\"><path d=\"M204.8 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z\"></path><path d=\"M505.6 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z\"></path><path d=\"M806.4 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z\"></path></svg>",
                                    "menuKeys": [
                                        "through",
                                        "code",
                                        "sup",
                                        "sub",
                                        "clearStyle"
                                    ]
                                },
                                "color",
                                "bgColor",
                                "|",
                                "fontSize",
                                "fontFamily",
                                "lineHeight",
                                "|",
                                "bulletedList",
                                "numberedList",
                                "todo",
                                {
                                    "key": "group-justify",
                                    "title": "对齐",
                                    "iconSvg": "<svg viewBox=\"0 0 1024 1024\"><path d=\"M768 793.6v102.4H51.2v-102.4h716.8z m204.8-230.4v102.4H51.2v-102.4h921.6z m-204.8-230.4v102.4H51.2v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z\"></path></svg>",
                                    "menuKeys": [
                                        "justifyLeft",
                                        "justifyRight",
                                        "justifyCenter",
                                        "justifyJustify"
                                    ]
                                },
                                {
                                    "key": "group-indent",
                                    "title": "缩进",
                                    "iconSvg": "<svg viewBox=\"0 0 1024 1024\"><path d=\"M0 64h1024v128H0z m384 192h640v128H384z m0 192h640v128H384z m0 192h640v128H384zM0 832h1024v128H0z m0-128V320l256 192z\"></path></svg>",
                                    "menuKeys": [
                                        "indent",
                                        "delIndent"
                                    ]
                                },
                                "|",
                                "emotion",
                                "insertLink",
                                {
                                    "key": "group-image",
                                    "title": "图片",
                                    "iconSvg": "<svg viewBox=\"0 0 1024 1024\"><path d=\"M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z\"></path></svg>",
                                    "menuKeys": [
                                        "insertImage",
                                        "imageSelecterMenu"
                                    ]
                                },
                                {
                                    "key": "group-video",
                                    "title": "视频",
                                    "iconSvg": "<svg viewBox=\"0 0 1024 1024\"><path d=\"M981.184 160.096C837.568 139.456 678.848 128 512 128S186.432 139.456 42.816 160.096C15.296 267.808 0 386.848 0 512s15.264 244.16 42.816 351.904C186.464 884.544 345.152 896 512 896s325.568-11.456 469.184-32.096C1008.704 756.192 1024 637.152 1024 512s-15.264-244.16-42.816-351.904zM384 704V320l320 192-320 192z\"></path></svg>",
                                    "menuKeys": [
                                        "insertVideo",
                                        // "uploadVideo"
                                    ]
                                },
                                "insertTable",
                                "codeBlock",
                                "divider",
                                "|",
                                "undo",
                                "redo",
                                "|",
                                "fullScreen"
                            ]
                        }
                
                        const toolbar = wangEditor.createToolbar({
                            editor,
                            selector: '#'+editor_name+'-toolbar-container',
                            config: toolbarConfig,
                            mode: 'default', // or 'simple'
                        })
                })
                
            })
        }
    }
    return Controller;
})