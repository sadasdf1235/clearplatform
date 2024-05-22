"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "home",
  setup(__props) {
    let scheduleList = common_vendor.ref([
      {
        img: common_assets._imports_0$2,
        title: "Daily Clean"
      },
      {
        img: common_assets.deep_clean,
        title: "Deep Clean"
      }
    ]);
    function toDetail(schedule) {
      common_vendor.index.navigateTo({
        url: "/pages/daily_clean/daily_clean?img=" + schedule.img + "&title=" + schedule.title
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.f(common_vendor.unref(scheduleList), (item, k0, i0) => {
          return {
            a: item.img,
            b: common_vendor.t(item.title),
            c: common_vendor.o(($event) => toDetail(item))
          };
        }),
        c: common_assets._imports_0$1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-07e72d3c"], ["__file", "D:/Project/clearplatform/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
