System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, macro, Node, UITransform, _decorator, utilTools, constants, designManager, mapModel, BaseLayer, Skill, _dec, _class, _crd, ccclass, property, SkillSystem;

  function _reportPossibleCrUseOfutilTools(extras) {
    _reporterNs.report("utilTools", "../../../utils/utilTools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconstants(extras) {
    _reporterNs.report("constants", "../../data/constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdesignManager(extras) {
    _reporterNs.report("designManager", "../../manager/designManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmapModel(extras) {
    _reporterNs.report("mapModel", "../../model/mapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseLayer(extras) {
    _reporterNs.report("BaseLayer", "../base/BaseLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkill(extras) {
    _reporterNs.report("Skill", "../item/skill/Skill", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
      macro = _cc.macro;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      utilTools = _unresolved_2.utilTools;
    }, function (_unresolved_3) {
      constants = _unresolved_3.constants;
    }, function (_unresolved_4) {
      designManager = _unresolved_4.designManager;
    }, function (_unresolved_5) {
      mapModel = _unresolved_5.mapModel;
    }, function (_unresolved_6) {
      BaseLayer = _unresolved_6.BaseLayer;
    }, function (_unresolved_7) {
      Skill = _unresolved_7.Skill;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1c8eWHl3BPAKKbFdyYWh5P", "SkillSystem", undefined);

      __checkObsolete__(['find', 'macro', 'Node', 'UITransform', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SkillSystem", SkillSystem = (_dec = ccclass('SkillSystem'), _dec(_class = class SkillSystem extends (_crd && BaseLayer === void 0 ? (_reportPossibleCrUseOfBaseLayer({
        error: Error()
      }), BaseLayer) : BaseLayer) {
        constructor() {
          super(...arguments);
          this.skillArr = [];
          this.skill2Arr = [];
          this.hasOpenScheculeAddHp = false;
        }

        onLoad() {
          super.onLoad();
        }

        onEnable() {
          super.onEnable();
        }

        onDestroy() {
          super.onDestroy();
        }

        getSaveData() {
          var skillData = {};
          skillData.skillArr = this.skillArr;
          skillData.skill2Arr = this.skill2Arr;
          return skillData;
        }

        loadSaveData(data) {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(data.skillArr, info => {
            this.addSkill(0, info.id);
          });
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(data.skill2Arr, info => {
            this.addSkill2(0, info.id);
          });
        } // 添加主动技能


        addSkill(type, skillId) {
          if (skillId === void 0) {
            skillId = 0;
          }

          if (skillId > 0) {
            type = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill, skillId).type;
          }

          var info = this.getSkillInfoByType(type);

          if (info) {
            // 升级
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill, info.id + 1);

            if (!row || row.lv > (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.maxLv) {
              // 已满级
              return;
            }

            info.id++;
          } else {
            if (this.skillArr.length >= (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.skillNum) {
              // 数量已满
              return;
            } // 新增


            info = {};
            info.id = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getFirstIdByType(type);
            this.skillArr.push(info);
          }

          if (skillId > 0) {
            info.id = skillId;
          }

          var name = this.getSkillNodeNameByType(type);
          var node = find(name, this.node);

          if (node) {
            var skillUtil = node.getComponent(_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).skillUtil;

            if (skillUtil && skillUtil.forceDestroy) {
              skillUtil.forceDestroy();
            }

            node.destroy();
            node.parent = null;
          }

          node = new Node(name);
          node.addComponent(UITransform);
          node.parent = this.node;
          var skill = node.addComponent(_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
            error: Error()
          }), Skill) : Skill);
          skill.init(info);

          if (skill.skillUtil) {
            skill.skillUtil.timeCount = skill.row.cd;
          }
        }

        getSkillInfoByType(type) {
          for (var i in this.skillArr) {
            var tmp = this.skillArr[i];
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill, tmp.id);

            if (row.type == type) {
              return tmp;
            }
          }

          return null;
        }

        getSkillNodeNameByType(type) {
          return "skill" + type;
        }

        getSkillCompomentByType(type) {
          var name = this.getSkillNodeNameByType(type);
          var node = find(name, this.node);

          if (node) {
            return node.getComponent(_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill);
          }

          return null;
        }

        getSkill2InfoByType(type) {
          for (var i = 0; i < this.skill2Arr.length; i++) {
            var info = this.skill2Arr[i];
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill2, info.id);

            if (type == row.type) {
              return info;
            }
          }

          return null;
        } // 添加被动技能


        addSkill2(type, skillId) {
          if (skillId === void 0) {
            skillId = 0;
          }

          if (skillId > 0) {
            type = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill2, skillId).type;
          }

          var info = this.getSkill2InfoByType(type);

          if (info) {
            // 升级
            var _row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill2, info.id + 1);

            if (!_row || _row.lv > (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.maxLv) {
              // 已满级
              return;
            }

            info.id++;
          } else {
            if (this.skill2Arr.length >= (_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).design.skillNum) {
              // 数量已满
              return;
            } // 新增


            info = {};
            info.id = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getFirstIdByType(type);
            this.skill2Arr.push(info);
          }

          if (skillId > 0) {
            info.id = skillId;
          }

          var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
            error: Error()
          }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
            error: Error()
          }), constants) : constants).tableName.skill2, info.id);

          switch (row.type) {
            case 6:
              // 通知力场技能刷新大小
              var skill = this.getSkillCompomentByType(7);

              if (skill) {
                skill.skillUtil.initBulletScale();
              }

              break;

            case 7:
              // 每5秒回血
              if (!this.hasOpenScheculeAddHp) {
                this.hasOpenScheculeAddHp = true;
                this.schedule(this.playerHpAdd, 5, macro.REPEAT_FOREVER);
              }

              break;

            case 8:
              // 提高生命上限
              (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
                error: Error()
              }), mapModel) : mapModel).player.addHpMaxPercent(row.p1);
              break;

            default:
              break;
          }
        }

        playerHpAdd() {
          var hp = this.getSkill2Val(7);
          (_crd && mapModel === void 0 ? (_reportPossibleCrUseOfmapModel({
            error: Error()
          }), mapModel) : mapModel).player.addHp(hp);
        }

        getSkill2Val(type) {
          var info = this.getSkill2InfoByType(type);

          if (info) {
            var row = (_crd && designManager === void 0 ? (_reportPossibleCrUseOfdesignManager({
              error: Error()
            }), designManager) : designManager).getRowById((_crd && constants === void 0 ? (_reportPossibleCrUseOfconstants({
              error: Error()
            }), constants) : constants).tableName.skill2, info.id);
            return row.p1;
          }

          return 0;
        } // 减少攻击间隔


        getSkill2AtkCdSubPercent() {
          return this.getSkill2Val(12);
        } // 增加伤害


        getSkill2AtkAddPercent() {
          return this.getSkill2Val(11);
        } // 增加道具吸取距离


        getSkill2PropGetAddDis() {
          return this.getSkill2Val(10);
        } // 金币增加


        getSkill2AddCoin() {
          return this.getSkill2Val(9);
        } // 提升攻击范围


        getSkill2RangeAddScale() {
          return this.getSkill2Val(6);
        } // 减少伤害百分比


        getSkill2DamSubPercent() {
          return this.getSkill2Val(5);
        } // 提升技能持续时间


        getSkill2DurationAddPercent() {
          return this.getSkill2Val(4);
        } // 经验值增加


        getSkill2AddExp() {
          return this.getSkill2Val(3);
        } // 提升玩家移动速度


        getSkill2PlayerSpeedAddPercent() {
          return this.getSkill2Val(2);
        } // 提升子弹飞行速度


        getSkill2BulletSpeedAddPercent() {
          return this.getSkill2Val(1);
        }

        updateLogic(dt) {
          (_crd && utilTools === void 0 ? (_reportPossibleCrUseOfutilTools({
            error: Error()
          }), utilTools) : utilTools).forArr(this.node.children, node => {
            node.getComponent(_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
              error: Error()
            }), Skill) : Skill).updateLogic(dt);
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f42c36d53ce76eaaa57a90791d818de8bc9ed848.js.map