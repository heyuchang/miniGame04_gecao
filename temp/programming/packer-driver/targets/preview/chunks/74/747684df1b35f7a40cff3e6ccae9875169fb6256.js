System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, Component, sp, _decorator, _dec, _class, _crd, ccclass, property, AnimationCtrl;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      Component = _cc.Component;
      sp = _cc.sp;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "517fcBVlr9DKIQaityUmdFx", "AnimationCtrl", undefined);

      __checkObsolete__(['Animation', 'AnimationState', 'Component', 'Node', 'sp', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AnimationCtrl", AnimationCtrl = (_dec = ccclass('AnimationCtrl'), _dec(_class = class AnimationCtrl extends Component {
        constructor() {
          super(...arguments);
          this.spineSkeleton = void 0;
          this.animationComponent = void 0;
          this.lastAni = void 0;
          this.lastLoop = void 0;
          this.animationEndCallback = void 0;
        }

        onLoad() {
          if (!this.spineSkeleton) {
            this.spineSkeleton = this.getComponent(sp.Skeleton);
          }

          if (!this.spineSkeleton) {
            this.spineSkeleton = this.getComponentInChildren(sp.Skeleton);
          }

          if (!this.spineSkeleton) {
            this.animationComponent = this.getComponent(Animation);
          }

          if (!this.animationComponent) {
            this.animationComponent = this.getComponentInChildren(Animation);
          }

          if (this.animationComponent) {
            this.animationComponent.on(Animation.EventType.FINISHED, this.animationFinished, this);
          }
        }

        setSpineSkeletonNode(node) {
          this.spineSkeleton = node.getComponent(sp.Skeleton);
        }

        setAnimationNode(node) {
          this.animationComponent = node.getComponent(Animation);
        }

        pauseAnimation() {
          if (!this.spineSkeleton) {
            return;
          }

          this.spineSkeleton.paused = true;
        }

        resumeAnimation() {
          if (!this.spineSkeleton) {
            return;
          }

          this.spineSkeleton.paused = false;
        }

        animationFinished(eventName, animationState) {
          if (eventName == Animation.EventType.FINISHED) {
            if (this.animationEndCallback) {
              this.animationEndCallback(animationState.name);
            }
          }
        }

        playAnimation(name, isLoop, completeCb) {
          if (isLoop === void 0) {
            isLoop = true;
          }

          if (!name) {
            return;
          }

          if (this.spineSkeleton) {
            this.spineSkeleton.loop = isLoop;
            this.spineSkeleton.setAnimation(0, name, isLoop);

            if (completeCb) {
              this.spineSkeleton.setCompleteListener(() => {
                // 每次循环结束都会回调
                completeCb(name);
              });
            } else {
              // 置空回调
              this.spineSkeleton.setCompleteListener(null);
            }

            return;
          }

          if (this.animationComponent) {
            this.animationEndCallback = completeCb;
            this.animationComponent.play(name);
            return;
          }
        }

        playAnimationOnce(name, endCb) {
          var _this = this;

          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              if (!name) {
                resolve();

                if (endCb) {
                  endCb();
                }

                return;
              }

              if (_this.spineSkeleton) {
                if (_this.lastAni == undefined) {
                  _this.lastAni = _this.spineSkeleton.animation;
                }

                if (_this.lastLoop == undefined) {
                  _this.lastLoop = _this.spineSkeleton.loop;
                }
              }

              _this.playAnimation(name, false, () => {
                if (_this.spineSkeleton) {
                  _this.playAnimation(_this.lastAni, _this.lastLoop);

                  _this.lastAni = undefined;
                  _this.lastLoop = undefined;
                }

                resolve();

                if (endCb) {
                  endCb();
                }
              });
            });
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=747684df1b35f7a40cff3e6ccae9875169fb6256.js.map