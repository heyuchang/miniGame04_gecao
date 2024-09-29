System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, v3, UITransform, Prefab, instantiate, constants, msgac, UserData, eventManager, GParam, MapWrap, resManager, RedPointLogicMgr, _crd, reg, RED_POINT_NAME, RED_POINT_LABEL_NAME, RPointMask, RedpointPos, INVALID_VALUE_ZERO, INVALID_VALUE, INVALID_STRING_VALUE;

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgac(extras) {
    _reporterNs.report("msgac", "../data/msgac", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../model/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventManager(extras) {
    _reporterNs.report("eventManager", "./eventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGParam(extras) {
    _reporterNs.report("GParam", "./GParam", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapWrap(extras) {
    _reporterNs.report("MapWrap", "./MapWrap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresManager(extras) {
    _reporterNs.report("resManager", "./resManager", _context.meta, extras);
  }

  _export({
    RedPointLogicMgr: void 0,
    RPointMask: void 0,
    RedpointPos: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      v3 = _cc.v3;
      UITransform = _cc.UITransform;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      constants = _unresolved_2.constants;
    }, function (_unresolved_3) {
      msgac = _unresolved_3.msgac;
    }, function (_unresolved_4) {
      UserData = _unresolved_4.UserData;
    }, function (_unresolved_5) {
      eventManager = _unresolved_5.eventManager;
    }, function (_unresolved_6) {
      GParam = _unresolved_6.default;
    }, function (_unresolved_7) {
      MapWrap = _unresolved_7.MapWrap;
    }, function (_unresolved_8) {
      resManager = _unresolved_8.resManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0faa7hvRx1OMqT4CCzxOcdG", "RedPointLogicMgr", undefined);

      __checkObsolete__(['_decorator', 'Node', 'find', 'isValid', 'AnimationClip', 'js', 'v3', 'sp', 'Vec3', 'UITransform', 'Prefab', 'instantiate']);

      reg = /^[0-9]+.?[0-9]*$/;

      _export("RED_POINT_NAME", RED_POINT_NAME = "red_point");

      _export("RED_POINT_LABEL_NAME", RED_POINT_LABEL_NAME = "label");

      (function (RPointMask) {
        RPointMask[RPointMask["RPM_Client"] = 300] = "RPM_Client";
        RPointMask[RPointMask["RPM_PropWear"] = 301] = "RPM_PropWear";
        RPointMask[RPointMask["RPM_BlessProp"] = 302] = "RPM_BlessProp";
      })(RPointMask || _export("RPointMask", RPointMask = {}));

      (function (RedpointPos) {
        RedpointPos[RedpointPos["Main"] = 0] = "Main";
        RedpointPos[RedpointPos["right"] = 1] = "right";
      })(RedpointPos || _export("RedpointPos", RedpointPos = {}));

      /** 无效值 */
      _export("INVALID_VALUE_ZERO", INVALID_VALUE_ZERO = 0);

      _export("INVALID_VALUE", INVALID_VALUE = -1);

      _export("INVALID_STRING_VALUE", INVALID_STRING_VALUE = "-1");

      _export("RedPointLogicMgr", RedPointLogicMgr = class RedPointLogicMgr {
        constructor() {
          this._redPointMask = void 0;
          this._waitSends = void 0;
          this._waitChecks = void 0;
          this._updateHandler = INVALID_VALUE;
          this._unlockMasks = void 0;
          this._targets = void 0;
          this._targetWraps = void 0;
          this._masks = void 0;
        }

        static ins() {
          if (this._instance == null) {
            this._instance = new RedPointLogicMgr();

            this._instance.initGame();
          }

          return this._instance;
        }
        /** 红点数值 */


        /** 更新 */
        update() {
          this.updateCheck();
          this.updateVisit();
          this.checkState();
        }

        initGame() {
          this.initEvent();
          this._redPointMask = new (_crd && MapWrap === void 0 ? (_reportPossibleCrUseOfMapWrap({
            error: Error()
          }), MapWrap) : MapWrap)();
          this._waitSends = [];
          this._waitChecks = [];
          this._unlockMasks = [];
          this._targets = new (_crd && MapWrap === void 0 ? (_reportPossibleCrUseOfMapWrap({
            error: Error()
          }), MapWrap) : MapWrap)();
          this._targetWraps = new (_crd && MapWrap === void 0 ? (_reportPossibleCrUseOfMapWrap({
            error: Error()
          }), MapWrap) : MapWrap)();
          this._masks = new (_crd && MapWrap === void 0 ? (_reportPossibleCrUseOfMapWrap({
            error: Error()
          }), MapWrap) : MapWrap)();
          this.stopUpdate(); // 本地红点检测

          let keys = Object.keys(RPointMask);

          for (let key of keys) {
            if (!reg.test(key)) continue;

            this._waitChecks.push(parseInt(key));
          }

          this.checkState(); // this.onCMSUserChange$tip();
        }

        initEvent() {
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).on((_crd && msgac === void 0 ? (_reportPossibleCrUseOfmsgac({
            error: Error()
          }), msgac) : msgac).redPointEvent, this.onCMSGRPValueSetting, this); //eventManager.off(this)
          // GCtrl.ES.on(CMsg.rPoint.valueSetting, this, this.onCMSGRPValueSetting.bind(this), PRIORITY_VIEW);
          // GCtrl.ES.on(CMsg.client.bag.onBagItemChange, this, this.updateState.bind(this), PRIORITY_VIEW);
          // GCtrl.ES.on(CMsg.client.hero.onAddHero, this, this.updateState.bind(this), PRIORITY_VIEW);
        }

        updateState() {
          let keys = Object.keys(RPointMask);

          for (let key of keys) {
            if (!reg.test(key)) continue;

            let checkIndex = this._waitChecks.indexOf(parseInt(key));

            if (checkIndex === INVALID_VALUE) {
              this._waitChecks.push(parseInt(key));
            }
          }

          this.checkState();
        } //在需要红点的地方用该方法进行注册


        on(target, nodes) {
          let targetIt = this._targets.get(target.uuid);

          if (!targetIt) {
            targetIt = [];

            this._targets.set(target.uuid, targetIt);

            this._targetWraps.set(target.uuid, target);
          }

          targetIt.push(...nodes);

          for (let node of nodes) {
            let value = false;

            for (let cMask of node.mask) {
              let maskIt = this._masks.get(cMask);

              if (!maskIt) {
                maskIt = [];

                this._masks.set(cMask, maskIt);
              }

              if (maskIt.indexOf(target) == INVALID_VALUE) {
                maskIt.push(target);
              }

              value = value || this._redPointMask.get(cMask);
            }

            this.setRPointView(target, node.subPath, value, node.effectType, node.posType, node.cb);
          }
        }
        /**注销红点 */


        off(target) {
          let targetIt = this._targets.get(target.uuid);

          if (!targetIt) return;

          for (let node of targetIt) {
            for (let cMask of node.mask) {
              let maskIt = this._masks.get(cMask);

              if (maskIt) {
                let index = maskIt.indexOf(target);
                if (index != INVALID_VALUE) maskIt.splice(index, 1);
                if (maskIt.length == 0) this._masks.delete(cMask);
              }
            }
          }

          this._targets.delete(target.uuid);

          this._targetWraps.delete(target.uuid);
        }

        loginOut() {
          this.stopUpdate();
          (_crd && eventManager === void 0 ? (_reportPossibleCrUseOfeventManager({
            error: Error()
          }), eventManager) : eventManager).offWithSender(this); //	GCtrl.ES.off(this); 

          this._waitChecks = [];
          this._waitSends = [];

          this._targets.clear();

          this._targetWraps.clear();

          this._masks.clear();
        }

        sendValueSettingMsg(mask, value, forceStop) {
          let target = {
            mask: mask,
            value: value,
            forceStop: forceStop
          }; //eventManager.send(mask)

          this.onCMSGRPValueSetting(this, new (_crd && GParam === void 0 ? (_reportPossibleCrUseOfGParam({
            error: Error()
          }), GParam) : GParam)(target)); //GCtrl.ES.emit(CMsg.rPoint.valueSetting, GCtrl.param(target));
        }

        sendValuesSettingMsgs(mask, value, forceStop) {
          for (let i = 0; i < mask.length; i++) {
            this.sendValueSettingMsg(mask[i], value, forceStop);
          }
        }
        /**定时检测红点 */


        timingCheck() {//需要定时检测的红点
          //GameMgr.redMgr.sendValueSettingMsg(RPointMask.RPM_DrawFree, false);
        }
        /**
          * 红点值变更
          * @param _ 
          * @param param 
          */


        onCMSGRPValueSetting(_, param) {
          let rp = param.get(); // 如果传过来的红点为True，则表示必定红点；如果为false,则需要重新计算

          if (rp.value == true) {
            // 如果等待计算项中存在该红点，则删除
            let checkIndex = this._waitChecks.indexOf(rp.mask);

            if (checkIndex != INVALID_VALUE) {
              this._waitChecks.splice(checkIndex, 1);
            } // 如果当前的值为true，则不需要更新


            if (this._redPointMask.get(rp.mask)) return;

            this._redPointMask.set(rp.mask, rp.value); // 更新更新待推送的红点


            if (this._waitSends.indexOf(rp.mask) != INVALID_VALUE) return;

            this._waitSends.push(rp.mask);
          } else {
            if (rp.forceStop == true) {
              let checkIndex = this._waitChecks.indexOf(rp.mask);

              if (checkIndex != INVALID_VALUE) {
                this._waitChecks.splice(checkIndex, 1);
              }

              this._redPointMask.set(rp.mask, rp.value); // 更新更新待推送的红点


              if (this._waitSends.indexOf(rp.mask) != INVALID_VALUE) return;

              this._waitSends.push(rp.mask);
            } // 重新检测红点的值
            // 如果当前待检测列表中存在该枚举，等待检测，否则加入待检测列表
            else if (this._waitChecks.indexOf(rp.mask) == INVALID_VALUE) {
              this._waitChecks.push(rp.mask);
            }
          }

          this.checkState();
        }

        startUpdate() {
          if (this._updateHandler != INVALID_VALUE) {
            return;
          }

          this._updateHandler = setInterval(this.update.bind(this), 100);
        }

        stopUpdate() {
          if (INVALID_VALUE == this._updateHandler) return;
          clearInterval(this._updateHandler);
          this._updateHandler = INVALID_VALUE;
        }

        checkState() {
          if (this._waitChecks.length > 0 || this._waitSends.length > 0) {
            if (this._updateHandler == INVALID_VALUE) this.startUpdate();
          } else if (this._waitChecks.length == 0 && this._waitSends.length == 0) {
            if (this._updateHandler != INVALID_VALUE) this.stopUpdate();
          }
        }
        /**更新状态 */


        updateCheck() {
          if (this._waitChecks.length == 0) return;

          let mask = this._waitChecks.shift();

          let value = true;

          if (value) {
            value = false;

            switch (mask) {
              case RPointMask.RPM_Client:
                {
                  //	value = GameMgr.userMgr.checkVipRedPoint(mask === RPointMask.RPM_Vip_Frist);
                  break;
                }

              case RPointMask.RPM_PropWear:
                {
                  value = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                    error: Error()
                  }), UserData) : UserData).getInstance().checkBestPropToWear();
                  break;
                }

              case RPointMask.RPM_BlessProp:
                {
                  value = (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
                    error: Error()
                  }), UserData) : UserData).getInstance().checkPropCanBless();
                  break;
                }

              default:
                value = false;
                break;
            }
          }

          if (this._redPointMask.get(mask) == value) return;

          this._redPointMask.set(mask, value); // 更新更新待推送的红点


          if (this._waitSends.indexOf(mask) != INVALID_VALUE) return;

          this._waitSends.push(mask);
        }
        /**表现更新 */


        updateVisit() {
          if (this._waitSends.length == 0) return;

          let mask = this._waitSends.shift();

          let mask_value = this._redPointMask.get(mask); // 取出所有需要变更的节点


          let maskIter = this._masks.get(mask);

          if (!maskIter || maskIter.length == 0) return;

          for (let obj of maskIter) {
            let targetIt = this._targets.get(obj.uuid);

            if (!targetIt) return;

            for (let node of targetIt) {
              if (!node) {
                continue;
              }

              if (node.mask.indexOf(mask) == INVALID_VALUE) continue;
              if (mask_value == true) this.setRPointView(obj, node.subPath, mask_value, node.effectType, node.posType, node.cb);else {
                // 如果为false则需要取组合值
                let value = false;

                for (let cMask of node.mask) {
                  if (this._redPointMask.get(cMask)) {
                    value = true;
                    break;
                  }
                }

                this.setRPointView(obj, node.subPath, value, node.effectType, node.posType, node.cb);
              }
            }
          }
        }

        setRPointView(parent, subPath, value, effectType, posType, cb) {
          let node = parent;

          if (subPath) {
            if (typeof subPath == 'string') {
              node = find(subPath, parent);
            } else {
              node = subPath;
            }
          }

          if (!node) return; //switch (effectType) {
          //	case RedpointEffect.REDPOINT: {

          let aniNode = node.getChildByName(RED_POINT_NAME);

          if (!value) {
            if (aniNode) aniNode.active = false;
            return;
          } else {
            if (aniNode) {
              aniNode.active = true;
              return;
            }
          }

          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadAsset((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.prefab, "redpoint/gth", Prefab, () => {}, (err, prefab) => {
            let red = instantiate(prefab);
            let uiTransform = node.getComponent(UITransform) || node.addComponent(UITransform);

            switch (posType) {
              case RedpointPos.Main:
                {
                  red.position = v3(uiTransform.width * (1 - uiTransform.anchorX), uiTransform.height * (1 - uiTransform.anchorY) - 20, 1);
                  break;
                }

              case RedpointPos.right:
                red.position = v3(uiTransform.width * (1 - uiTransform.anchorX) - 30, uiTransform.height * (1 - uiTransform.anchorY) - 0, 1);
                break;

              default:
                {
                  red.position = v3(uiTransform.width * (1 - uiTransform.anchorX) - 25, uiTransform.height * (1 - uiTransform.anchorY) - 10, 1);
                  break;
                }
            } //	red.getComponent(UITransform).setSiblingIndex(8888)


            red.name = RED_POINT_NAME;
            node.addChild(red); // let sk = red.addComponent(sp.Skeleton);
            // sk.setAnimation(0, 'gth', false);
            // sk.setCompleteListener(function () {
            // 	sk.addAnimation(0, 'gth', false, 1.5);
            // })
            //sk.timeScale = 0.7
          }); //break;
          //}
          //}

          cb && cb(node);
        }
        /**获取该节点红点应处于的状态 */


        getMaskRedpointState(masks) {
          for (let i = 0; i < masks.length; i++) {
            let value = this._redPointMask.get(masks[i]);

            if (value) return value;
          }

          return false;
        }

      });

      RedPointLogicMgr._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=284edd0129f7048aead749f00e3fc8e7590810fe.js.map