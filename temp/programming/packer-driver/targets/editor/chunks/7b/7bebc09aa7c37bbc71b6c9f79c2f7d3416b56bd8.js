System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, myLog, constants, resManager, AudioManager, _crd, audioManager;

  function _reportPossibleCrUseOfmyLog(extras) {
    _reporterNs.report("myLog", "../../common/myLog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresManager(extras) {
    _reporterNs.report("resManager", "./resManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
    }, function (_unresolved_2) {
      myLog = _unresolved_2.myLog;
    }, function (_unresolved_3) {
      constants = _unresolved_3.constants;
    }, function (_unresolved_4) {
      resManager = _unresolved_4.resManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2976bjwcONEkaYppxD7Xhz0", "audioManager", undefined);

      __checkObsolete__(['AudioClip', 'AudioSource']);

      AudioManager = class AudioManager {
        constructor() {
          this.musicAudioSource = void 0;
          this.effectAudioSource = void 0;
          this.audioClips = {};
          this.musicVolume = 1;
          this.effectVolume = 1;
          this.musicName = "";
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new AudioManager();
          }

          return this._instance;
        }

        setMusicAudioSource(audioSource) {
          this.musicAudioSource = audioSource;
        }

        setEffectAudioSource(audioSource) {
          this.effectAudioSource = audioSource;
        }

        initData(data) {
          if (!data) {
            data = {};
          }

          if (data.musicVolume != undefined) {
            this.musicVolume = data.musicVolume;
          }

          if (data.effectVolume != undefined) {
            this.effectVolume = data.effectVolume;
          }
        }

        getSaveData(now) {
          let data = {};
          data.musicVolume = this.musicVolume;
          data.effectVolume = this.effectVolume;
          return data;
        }

        loadAllAudio(onProgress, onComplete) {
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadAssetByBundleDir((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.audio, "", AudioClip, (percent, item) => {
            if (percent > 0.96) {
              // 解决提前回调百分百导致的音频资源还未缓存到audioClips
              percent = 0.96;
            }

            if (onProgress) {
              onProgress(percent);
            }
          }, assetArr => {
            for (let i in assetArr) {
              let asset = assetArr[i];
              let name = asset.name;

              if (!name) {
                continue;
              }

              this.audioClips[name] = asset;
            }

            if (onComplete) {
              onComplete();
            }
          });
        }

        loadAudios(pathArr, onProgress, onComplete) {
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadAssetByPathArr((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.audio, pathArr, AudioClip, percent => {
            if (percent > 0.96) {
              // 解决提前回调百分百导致的音频资源还未缓存到audioClips
              percent = 0.96;
            }

            if (onProgress) {
              onProgress(percent);
            }
          }, assetArr => {
            for (let i in assetArr) {
              let asset = assetArr[i];
              let name = asset.name;

              if (!name) {
                continue;
              }

              this.audioClips[name] = asset;
            }

            if (onComplete) {
              onComplete();
            }
          });
        }

        loadAudio(path, onComplete) {
          (_crd && resManager === void 0 ? (_reportPossibleCrUseOfresManager({
            error: Error()
          }), resManager) : resManager).loadAsset((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).bundles.audio, path, AudioClip, null, (err, asset) => {
            if (err) {
              if (onComplete) {
                onComplete();
              }

              return;
            }

            this.audioClips[asset.name] = asset;

            if (onComplete) {
              onComplete(asset);
            }
          });
        }

        getMusiceVolume() {
          return this.musicVolume;
        }

        setMusicVolume(val) {
          val = Math.round(val * 1000) / 1000;
          this.musicVolume = val;
          this.musicAudioSource.volume = val;

          if (val <= 0) {
            this.musicAudioSource.pause();
            return;
          }

          this.playMusic(this.musicName);
        }

        async playMusic(musicName) {
          if (!musicName) {
            return;
          }

          this.musicName = musicName;

          if (this.musicVolume <= 0) {
            return;
          }

          let clip = await this.getAudioClip(musicName);

          if (!clip) {
            return;
          }

          if (this.musicAudioSource.playing) {
            if (this.musicAudioSource.clip == clip) {
              return;
            }

            this.musicAudioSource.stop();
          }

          this.musicAudioSource.clip = clip;
          this.musicAudioSource.loop = true;
          this.musicAudioSource.play();
        }

        gameOnShow(force = false) {
          if (!this.musicAudioSource || this.musicVolume <= 0) {
            return;
          }

          (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
            error: Error()
          }), myLog) : myLog).i("===========gameOnShow:", this.musicAudioSource.playing, this.musicAudioSource.state);

          if (!this.musicAudioSource.playing || force) {
            (_crd && myLog === void 0 ? (_reportPossibleCrUseOfmyLog({
              error: Error()
            }), myLog) : myLog).i("=======call playing");
            this.musicAudioSource.play();
          }
        }

        getEffectVolume() {
          return this.effectVolume;
        }

        setEffectVolume(val) {
          val = Math.round(val * 1000) / 1000;
          this.effectVolume = val;
          this.effectAudioSource.volume = val;
        }

        async playEffect(effectName) {
          if (!effectName || this.effectVolume <= 0) {
            return;
          }

          let clip = await this.getAudioClip(effectName);

          if (!clip) {
            return;
          }

          this.effectAudioSource.playOneShot(clip);
        }

        getAudioClip(name) {
          return new Promise(resolve => {
            let clip = this.audioClips[name];

            if (clip) {
              resolve(clip);
              return;
            }

            this.loadAudio(name, clip => {
              resolve(clip);
            });
          });
        }

      };
      AudioManager._instance = void 0;

      _export("audioManager", audioManager = AudioManager.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7bebc09aa7c37bbc71b6c9f79c2f7d3416b56bd8.js.map