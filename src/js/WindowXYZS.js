(function ($) {
    $.extend({
            WindowXYZS: function () {
                let body = $('body');
                body.before(
                    `<style>
.xyzs-win-region{
        position: fixed;
        z-index: 20480;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
}
/*===== win =====*/
.xyzs-win{
        width: 500px;
        margin: 0 auto;
        position: relative;
        outline: 0;
        top: 100px;
        pointer-events:auto;
    }
.xyzs-modal-content{
        border-radius: 5px;
        background-clip: padding-box;
        background-color: #fff;
        -moz-box-shadow:1px 1px 10px rgba(82, 82, 82, 0.74);;
        -webkit-box-shadow:1px 1px 10px rgba(82, 82, 82, 0.74);
        box-shadow:1px 1px 10px rgba(82, 82, 82, 0.74);
        pointer-events:auto;
        border: solid 1px #ff5c4c;
    }
.xyzs-modal-close{
        z-index: 1;
        position: absolute;
        right: 12px;
        top: 8px;
        overflow: hidden;
        cursor: pointer;
        min-width: 25px;
    }
.xyzs-icon-ios-close{
        font-size: 25px;
        color: #999;
    }
.xyzs-modal-header{
        border-bottom: 1px solid #e8eaec;
        padding: 10px 16px;
        text-align: left;
        font-size: 15px;
        font-weight: bold;
        font-family: cursive;
    }
.xyzs-modal-body{
        padding: 16px;
        font-size: 12px;
    }

.xyzs-enterprise-list{
        width: 100%;
        height: 300px;
        overflow-y: auto;
        overflow-x: hidden;
    }
.xyzs-enterprise-item{
        /*height: 20px;*/
        line-height: 20px;
        margin: 5px;
        font-size: 12px;
        padding: 5px 12px;
        border: solid 1px #dedede;
    }
.xyzs-enterprise-item-ico{
        color: #ff5c4c;
        float: right;
        font-size: 18px;
        
    }

.xyzs-scrollbar::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #F5F5F5;
        border-radius:5px
    }

.xyzs-scrollbar::-webkit-scrollbar {
        width: 10px;
        background-color: #F5F5F5;
    }

.xyzs-scrollbar::-webkit-scrollbar-thumb {
        background-color: rgba(255,92,76,0.7);
        border-radius:5px
    }
.xyzs-scrollbar::-webkit-scrollbar-thumb:hover {
        background-color: #ff5c4c;
    }
    
        </style>`
                );
                let winRegion = $('<div class="xyzs-win-region"></div>').click(function () {
                    win.hide();
                    winRegion.css({"background-color": "", 'pointer-events': 'none'});
                    return false;
                }).css('pointer-events', 'none');

                //========== 窗口 ==========
                let win = $(`
        <div class="xyzs-win">
            <div class="xyzs-modal-content">
                <div class="xyzs-modal-close">
                    <i title="关闭" class="fa fa-remove xyzs-icon-ios-close"></i>
                </div>
                <div class="xyzs-modal-header">
                    <div class="xyzs-modal-header-inner">标题</div>
                </div>
                <div class="xyzs-modal-body">
                    内容
                </div>
            </div>
        </div>
    `).click(() => false).css('pointer-events', 'auto').hide();
                win.find('.xyzs-modal-close').click(function () {
                    win.hide();
                    winRegion.css({"background-color": "", 'pointer-events': 'none'});
                });


                winRegion.append(win);

                body.append(winRegion);
                return {
                    show: function (winTitle, winDiv) {
                        console.log("---" + winTitle)
                        winRegion.css({'pointer-events': 'auto', "background-color": "rgba(55,55,55,.6)"});
                        win.show(500);
                        win.find(".xyzs-modal-header-inner").html(winTitle);
                        win.find('.xyzs-modal-body').empty().append(winDiv);
                    }
                }
            }
        }
    );
})(jQuery);
