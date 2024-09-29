System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, Component, sp, _decorator, _dec, _class, _crd, ccclass, property, AnimationCtrl;

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
        constructor(...args) {
          super(...args);
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

        playAnimation(name, isLoop = true, completeCb) {
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

        async playAnimationOnce(name, endCb) {
          return new Promise((resolve, reject) => {
            if (!name) {
              resolve();

              if (endCb) {
                endCb();
              }

              return;
            }

            if (this.spineSkeleton) {
              if (this.lastAni == undefined) {
                this.lastAni = this.spineSkeleton.animation;
              }

              if (this.lastLoop == undefined) {
                this.lastLoop = this.spineSkeleton.loop;
              }
            }

            this.playAnimation(name, false, () => {
              if (this.spineSkeleton) {
                this.playAnimation(this.lastAni, this.lastLoop);
                this.lastAni = undefined;
                this.lastLoop = undefined;
              }

              resolve();

              if (endCb) {
                endCb();
              }
            });
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=92753d12f2a39a2fc938551c2b42e4a1026872a7.js.map