"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "daily_clean",
  setup(__props) {
    common_vendor.onLoad((option) => {
      schedule = option;
    });
    common_vendor.ref(0);
    let schedule = common_vendor.ref({
      img: "",
      title: ""
    });
    const items = [
      {
        value: "USA",
        name: "铺床叠被"
      },
      {
        value: "CHN",
        name: "清洁所以屏幕"
        // checked: 'true'
      },
      {
        value: "BRA",
        name: "洗碗"
      },
      {
        value: "JPN",
        name: "清理洗漱台"
      },
      {
        value: "ENG",
        name: "清理碎屑"
      },
      {
        value: "FRA",
        name: "拖地"
      }
    ];
    function checkboxChange(e) {
    }
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$2,
        b: common_assets._imports_0$1,
        c: common_vendor.f(items, (item, k0, i0) => {
          return {
            a: item.value,
            b: item.checked,
            c: common_vendor.t(item.name),
            d: item.value
          };
        }),
        d: common_vendor.o(checkboxChange)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-92265648"], ["__file", "D:/Project/clearplatform/pages/daily_clean/daily_clean.vue"]]);
wx.createPage(MiniProgramPage);
