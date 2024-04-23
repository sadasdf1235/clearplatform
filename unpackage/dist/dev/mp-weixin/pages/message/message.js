"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
const _sfc_main = {
  __name: "message",
  setup(__props) {
    const search = () => {
    };
    function intoMessageDetail() {
      common_vendor.index.navigateTo({
        url: "/pages/chat/chat"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(search),
        b: common_vendor.p({
          radius: 100,
          placeholder: "搜素"
        }),
        c: common_vendor.o(intoMessageDetail)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Project/clearplatform/pages/message/message.vue"]]);
wx.createPage(MiniProgramPage);
