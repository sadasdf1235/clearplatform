"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "release",
  setup(__props) {
    const items = [
      {
        value: "USA",
        name: "清除挡板"
      },
      {
        value: "CHN",
        name: "洗碗",
        checked: "true"
      },
      {
        value: "BRA",
        name: "清洁储藏室"
      },
      {
        value: "JPN",
        name: "擦冰箱"
      },
      {
        value: "ENG",
        name: "整理冰箱"
      },
      {
        value: "FRA",
        name: "扔垃圾"
      },
      {
        value: "FRS",
        name: "拖地板"
      }
    ];
    function checkboxChange() {
    }
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.f(items, (item, k0, i0) => {
          return {
            a: item.value,
            b: item.checked,
            c: common_vendor.t(item.name),
            d: item.value
          };
        }),
        c: common_vendor.o(checkboxChange)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5bdbf39a"], ["__file", "D:/Project/clearplatform/pages/release/release.vue"]]);
wx.createPage(MiniProgramPage);
