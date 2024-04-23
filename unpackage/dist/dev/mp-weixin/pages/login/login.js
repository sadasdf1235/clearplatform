"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_icons2 + _easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    let loginWay = common_vendor.ref(-1);
    let formData = common_vendor.ref({
      email: "",
      password: ""
    });
    let rules = {
      password: {
        rules: [
          {
            required: true,
            errorMessage: "请输入密码"
          },
          {
            minLength: 8,
            maxLength: 12,
            errorMessage: "姓名长度在 {minLength} 到 {maxLength} 个字符"
          }
        ]
      },
      // 对email字段进行必填验证
      email: {
        rules: [{
          format: "email",
          errorMessage: "请输入正确的邮箱地址"
        }]
      }
    };
    const pasLogin = () => loginWay.value = 0;
    function submit() {
    }
    function forget() {
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(loginWay) == 1
      }, common_vendor.unref(loginWay) == 1 ? {
        b: common_vendor.o(pasLogin),
        c: common_vendor.p({
          type: "weixin",
          color: "#00c800"
        })
      } : {
        d: common_vendor.o(($event) => common_vendor.unref(formData).email = $event),
        e: common_vendor.p({
          type: "text",
          placeholder: "请输入邮箱",
          modelValue: common_vendor.unref(formData).email
        }),
        f: common_vendor.p({
          label: "邮箱",
          name: "email"
        }),
        g: common_vendor.o(($event) => common_vendor.unref(formData).password = $event),
        h: common_vendor.p({
          type: "password",
          placeholder: "请输入密码",
          modelValue: common_vendor.unref(formData).password
        }),
        i: common_vendor.o(forget),
        j: common_vendor.p({
          label: "密码",
          name: "password"
        }),
        k: common_vendor.o(submit),
        l: common_vendor.sr("form", "02eca770-1"),
        m: common_vendor.p({
          ["label-position"]: "top",
          modelValue: common_vendor.unref(formData),
          rules: common_vendor.unref(rules)
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Project/clearplatform/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
