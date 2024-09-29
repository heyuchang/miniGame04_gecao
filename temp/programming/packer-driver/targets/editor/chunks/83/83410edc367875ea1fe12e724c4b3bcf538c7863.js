System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, sp, SpriteFrame, Texture2D, myLog, ResManager, ResLoader, AssetConfig, _crd, resManager;

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../common/myLog", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
      sp = _cc.sp;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "455cfmCB5pAb4qrTZDbg6Un", "resManager", undefined);

      __checkObsolete__(['Asset', 'assetManager', 'AssetManager', 'sp', 'SpriteFrame', 'Texture2D']);

      ResManager = class ResManager {
        constructor() {}

        static get instance() {
          if (!this._instance) {
            this._instance = new ResManager();
          }

          return this._instance;
        }
        /**
         * 从bundle中加载某个资源，优先使用缓存中的
         * @param bundleName bundle名称
         * @param path 资源路径
         * @param assetType 资源类型
         * @param onProgress 加载进度回调
         * @param onComplete 加载完成回调
         */


        loadAsset(bundleName, path, assetType, onProgress, onComplete) {
          if (assetType == SpriteFrame) {
            path += "/spriteFrame";
          } else if (assetType == Texture2D) {
            path += "/texture";
          }

          let bundle = assetManager.getBundle(bundleName);

          if (bundle && bundle.get(path, assetType)) {
            if (onComplete) {
              onComplete(null, bundle.get(path, assetType));
            }

            return;
          }

          let loadAssetFunc = () => {
            bundle.load(path, assetType, (finish, total) => {
              if (onProgress) {
                onProgress(finish / total);
              }
            }, (err, asset) => {
              if (err) {
                (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
                  error: Error()
                }), myLog) : myLog).e("ResManager.loadAsset error:" + err.message, "bundleName:" + bundleName, "path:" + path, err);

                if (onComplete) {
                  onComplete(err);
                }

                return;
              }

              if (onComplete) {
                onComplete(null, asset);
              }
            });
          };

          if (!bundle) {
            assetManager.loadBundle(bundleName, (err, retBundle) => {
              if (err) {
                if (onComplete) {
                  onComplete(err);
                }

                return;
              }

              bundle = retBundle;
              loadAssetFunc();
            });
            return;
          }

          loadAssetFunc();
        }
        /**
         * 加载某个bundle中的批量同类型资源
         * @param bundleName bundle名称
         * @param pathArr 资源路径数组
         * @param assetType 资源类型
         * @param onProgress 进度回调
         * @param onComplete 完成回调
         */


        loadAssetByPathArr(bundleName, pathArr, assetType, onProgress, onComplete) {
          let total = pathArr.length;

          if (total <= 0) {
            if (onComplete) {
              onComplete([]);
            }

            return;
          }

          let lastPercent = 0;
          let onePercent = 1 / total;
          let assetPercents = new Map();
          let count = 0;
          let arr = [];

          for (let i = 0; i < total; i++) {
            let path = pathArr[i];
            this.loadAsset(bundleName, path, assetType, p => {
              assetPercents.set(path, p);

              if (onProgress) {
                let percent = 0;
                assetPercents.forEach(p => {
                  percent = percent + onePercent * p;
                });

                if (percent >= lastPercent) {
                  lastPercent = percent;
                  onProgress(percent);
                }
              }
            }, (err, asset) => {
              count++;

              if (!err && asset) {
                asset.path = path;
                arr.push(asset);
              }

              if (count >= total) {
                if (onComplete) {
                  onComplete(arr);
                }
              }
            });
          }
        }
        /**
         * 加载bundle某个目录下的所有同类型资源
         * @param bundleName bundle名称
         * @param dir 目录
         * @param assetType 资源类型
         * @param onProgress 进度回调
         * @param onComplete 完成回调
         */


        loadAssetByBundleDir(bundleName, dir, assetType, onProgress, onComplete) {
          let bundle = assetManager.getBundle(bundleName);

          let loadAssetFunc = () => {
            bundle.loadDir(dir, assetType, (finish, total, item) => {
              if (onProgress) {
                onProgress(finish / total, item);
              }
            }, (err, assetArr) => {
              if (err) {
                (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
                  error: Error()
                }), myLog) : myLog).e("ResManager.loadAssetByBundleDir loadDir error:" + err.message, err);
              }

              if (onComplete) {
                onComplete(assetArr);
              }
            });
          };

          if (!bundle) {
            assetManager.loadBundle(bundleName, (err, retBundle) => {
              if (err) {
                (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
                  error: Error()
                }), myLog) : myLog).e("ResManager.loadAssetByBundleDir loadBundle error:" + err.message, err);
                return;
              }

              bundle = retBundle;
              loadAssetFunc();
            });
            return;
          }

          loadAssetFunc();
        }
        /**
         * 单纯加载一批bundle
         * @param nameArr bundle名称数组 
         * @param onProgress 进度回调
         * @param onComplete 完成回调
         */


        loadBundleArr(nameArr, onProgress, onComplete) {
          let total = nameArr.length;

          if (total <= 0) {
            if (onComplete) {
              onComplete();
            }

            return;
          }

          let count = 0;
          let arr = [];

          for (let i = 0; i < total; i++) {
            let bundleName = nameArr[i];
            assetManager.loadBundle(bundleName, (err, retBundle) => {
              count++;

              if (!err) {
                arr.push(retBundle);
              }

              if (count >= total) {
                if (onComplete) {
                  onComplete(arr);
                }
              }

              if (onProgress) {
                onProgress(count / total);
              }
            });
          }
        } // 强制释放某资源


        releaseAsset(asset) {
          assetManager.releaseAsset(asset);
        }
        /**
         * 加载资源清单数组
         * @param assetConfigArr 资源清单数组
            [
                {
                    bundle : "common",
                    path : "",
                    type : Prefab
                }
            ]
         * @param isAddRef 是否增加引用计数
         * @param onProgress 进度回调
         * @param onComplete 完成回调
         */


        loadAssetConfigArr(assetConfigArr, isAddRef = false, onProgress, onComplete) {
          let total = 0;

          if (assetConfigArr && assetConfigArr.length > 0) {
            total = assetConfigArr.length;
          }

          if (total <= 0) {
            if (onComplete) {
              onComplete();
            }

            return;
          }

          let index = 0;
          let loadedAssetArr = [];

          let tmpFunc = () => {
            let asset = assetConfigArr[index];

            if (!asset) {
              // 全部加载完成
              if (onComplete) {
                onComplete(loadedAssetArr);
              }

              return;
            }

            this.loadAsset(asset.bundle, asset.path, asset.type, null, (error, loadedAsset) => {
              if (!error && loadedAsset) {
                loadedAssetArr.push(loadedAsset);

                if (isAddRef) {
                  loadedAsset.addRef();
                }

                asset.asset = loadedAsset;
              }

              index++;
              tmpFunc();

              if (onProgress) {
                onProgress(index / total);
              }
            });
          };

          tmpFunc();
        }

        loadSpriteFrame(bundleName, path, cb) {
          this.loadAsset(bundleName, path, SpriteFrame, null, (err, sp) => {
            if (cb) {
              cb(err, sp);
            }
          });
        }

        loadSpineData(bundleName, path, cb) {
          this.loadAsset(bundleName, path, sp.SkeletonData, null, (err, sp) => {
            if (cb) {
              cb(err, sp);
            }
          });
        }

      };
      ResManager._instance = void 0;

      _export("resManager", resManager = ResManager.instance);

      _export("ResLoader", ResLoader = class ResLoader {
        constructor() {
          this.loadedAssetArr = [];
        }

        addAsset(asset) {
          if (!asset) {
            return;
          }

          if (this.loadedAssetArr.indexOf(asset) == -1) {
            asset.addRef();
            this.loadedAssetArr.push(asset);
          }
        }

        releaseAllAsset() {
          this.loadedAssetArr.forEach(asset => {
            asset.decRef();
          });
          this.loadedAssetArr = [];
        }

      });

      _export("AssetConfig", AssetConfig = class AssetConfig {
        constructor() {
          this.bundle = void 0;
          this.path = void 0;
          this.type = void 0;
          this.asset = void 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=83410edc367875ea1fe12e724c4b3bcf538c7863.js.map