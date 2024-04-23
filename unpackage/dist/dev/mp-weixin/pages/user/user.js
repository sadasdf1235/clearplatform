"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    function release() {
      common_vendor.index.navigateTo({
        url: "/pages/release/release"
      });
    }
    function login() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(login),
        b: common_vendor.p({
          type: "reload"
        }),
        c: common_vendor.o(release),
        d: common_vendor.p({
          type: "right"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Project/clearplatform/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
