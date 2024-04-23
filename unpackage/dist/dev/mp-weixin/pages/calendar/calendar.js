"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_calendar2 = common_vendor.resolveComponent("uni-calendar");
  _easycom_uni_calendar2();
}
const _easycom_uni_calendar = () => "../../uni_modules/uni-calendar/components/uni-calendar/uni-calendar.js";
if (!Math) {
  _easycom_uni_calendar();
}
const _sfc_main = {
  __name: "calendar",
  setup(__props) {
    const change = () => {
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(change),
        b: common_vendor.p({
          insert: true,
          lunar: true,
          ["start-date"]: "2019-3-2",
          ["end-date"]: "2019-5-20"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Project/clearplatform/pages/calendar/calendar.vue"]]);
wx.createPage(MiniProgramPage);
