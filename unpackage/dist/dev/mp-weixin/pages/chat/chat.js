"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_easyinput2 + _easycom_uni_icons2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "chat",
  setup(__props) {
    let message = common_vendor.ref("");
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$3,
        b: common_vendor.f(10, (item, k0, i0) => {
          return {};
        }),
        c: common_assets._imports_1,
        d: common_assets._imports_2,
        e: common_vendor.o(($event) => common_vendor.isRef(message) ? message.value = $event : message = $event),
        f: common_vendor.p({
          placeholder: "你的消息",
          modelValue: common_vendor.unref(message)
        }),
        g: common_vendor.p({
          size: "24",
          color: "#2f80ed",
          type: "mic-filled"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0a633310"], ["__file", "D:/Project/clearplatform/pages/chat/chat.vue"]]);
wx.createPage(MiniProgramPage);
