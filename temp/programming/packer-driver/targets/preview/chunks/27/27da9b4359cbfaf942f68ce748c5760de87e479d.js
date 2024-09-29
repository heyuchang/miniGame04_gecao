System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, _decorator, cocosUtil, utilTools, constants, designManager, resManager, BaseLayer, Weapon, _dec, _class, _crd, ccclass, property, WeaponSystem;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfcocosUtil(extras) {
    _reporterNs.report("cocosUtil", "../../../utils/cocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresManager(extras) {
    _reporterNs.report("resManager", "../../manager/resManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../base/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeapon(extras) {
    _reporterNs.report("Weapon", "../item/weapon/Weapon", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      cocosUtil = _unresolved_2.cocosUtil;
    }, function (_unresolved_3) {
      utilTools = _unresolved_3.utilTools;
    }, function (_unresolved_4) {
      constants = _unresolved_4.constants;
    }, function (_unresolved_5) {
      designManager = _unresolved_5.designManager;
    }, function (_unresolved_6) {
      resManager = _unresolved_6.resManager;
    }, function (_unresolved_7) {
      BaseLayer = _unresolved_7.BaseLayer;
    }, function (_unresolved_8) {
      Weapon = _unresolved_8.Weapon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b004fNa2AhH0YD5gpIzN4C+", "WeaponSystem", undefined);

      __checkObsolete__(['Node', 'Prefab', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WeaponSystem", WeaponSystem = (_dec = ccclass('WeaponSystem'), _dec(_class = class WeaponSystem extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          this.weaponArr = void 0;
        }

        onLoad() {
          super.onLoad();
          this.weaponArr = [];
        }

        onEnable() {
          super.onEnable();
        }

        initData(data) {
          // test
          // return;
          // 初始武器
          this.addWeapon(1, data.weaponId);
        }

        getSaveData() {
          var weaponData = {};
          weaponData.arr = this.weaponArr;
          return weaponData;
        }

        loadSaveData(data) {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(data.arr, info => {
            this.addWeapon(0, info.id);
          });
        }

        loadWeaponPrefab(path) {
          return new Promise((resolve, reject) => {
            (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
              error: Error()
            }), resManager) : resManager).loadAsset((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).bundles.weapon, path, Prefab, null, (err, prefab) => {
              if (err) {
                reject();
                return;
              }

              resolve(prefab);
            });
          });
        }

        getWeaponInfoByType(type) {
          for (var i in this.weaponArr) {
            var tmp = this.weaponArr[i];
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.weapon, tmp.id);

            if (row.type == type) {
              return tmp;
            }
          }

          return null;
        }
        /**
         * 添加武器
         * @param type 武器类型 
         * @param weaponId 可选，强制设置武器id
         */


        addWeapon(type, weaponId) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (weaponId === void 0) {
              weaponId = 0;
            }

            if (weaponId > 0) {
              type = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.weapon, weaponId).type;
            }

            var info = null;
            var uiIndex = 0;

            for (var i in _this.weaponArr) {
              var tmp = _this.weaponArr[i];

              var _row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.weapon, tmp.id);

              if (_row.type == type) {
                info = tmp;
                uiIndex = parseInt(i);
                break;
              }
            }

            if (info) {
              // 升级
              var _row2 = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).tableName.weapon, info.id + 1);

              if (!_row2 || _row2.lv > (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).design.maxLv) {
                // 已满级
                return;
              }

              info.id++;
            } else {
              if (_this.weaponArr.length >= (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
                error: Error()
              }), constants) : constants).design.weaponNum) {
                // 武器槽位已满
                return;
              } // 新增


              info = {};
              info.id = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
                error: Error()
              }), designManager) : designManager).getFirstIdByType(type);

              _this.weaponArr.push(info);

              uiIndex = _this.weaponArr.length - 1;
            }

            if (weaponId > 0) {
              info.id = weaponId;
            }

            var weaponLayer = _this.node.children[uiIndex];

            if (!weaponLayer) {
              return;
            }

            (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
              error: Error()
            }), utilTools) : utilTools).forArr(weaponLayer.children, node => {
              var weaponUtil = node.getComponent(_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
                error: Error()
              }), Weapon) : Weapon).weaponUtil;

              if (weaponUtil && weaponUtil.forceDestroy) {
                weaponUtil.forceDestroy();
              }

              node.destroy();
            });
            info.uiIndex = uiIndex;
            var id = info.id;
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.weapon, id);
            var prefab = yield _this.loadWeaponPrefab(row.prefab);

            if (id != info.id || !(_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).isValid(_this)) {
              return;
            }

            var node = (_crd && cocosUtil === void 0 ? (_reportPossibleCrUseOfcocosUtil({
              error: Error()
            }), cocosUtil) : cocosUtil).instantiate(prefab);
            var weapon = node.addComponent(_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
              error: Error()
            }), Weapon) : Weapon);
            node.parent = weaponLayer;
            weapon.init(info);
          })();
        }

        updateLogic(dt) {
          // 武器
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.node.children, (weaponNode, index) => {
            if (!weaponNode.active) {
              return;
            }

            var node = weaponNode.children[0];

            if (!node) {
              return;
            }

            node.getComponent(_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
              error: Error()
            }), Weapon) : Weapon).updateLogic(dt);
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=27da9b4359cbfaf942f68ce748c5760de87e479d.js.map