System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GNetConf, GNetCmd, GClientEvent, GNetConst, GLoginState;

  _export("GLoginState", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f97e0MoLgtPP5tALE0CHh/1", "conf", undefined);

      _export("GNetConf", GNetConf = {
        //蛋壳的联网地址
        mrtgd_WsUrl: "wss://api.play.xmtyq.com:39001/sh",
        mrtgd_HttpUrl: "https://api.play.xmtyq.com:39001",
        //http服务地址
        mrtgd_jjws_WsUrl: "wss://api.play.xmtyq.com:39002/sh",
        mrtgd_jjws_HttpUrl: "https://api.play.xmtyq.com:39002"
      }); //操作状态


      _export("GNetCmd", GNetCmd = {
        StickPack: 100000,
        // 粘包
        Heartbeat: 101000,
        // 用户心跳
        UserLogin: 101001,
        // 用户登录
        UserRegister: 101002,
        // 用户注册
        AntiAddiction: 101003,
        // 防沉迷认证
        SensitiveWordsCheck: 101004,
        // 用户保存数据
        SaveUserRecord: 102003,
        // 用户保存数据
        GetRegionData: 102004,
        // 查询用户某个分区的数据
        GetRegionList: 102005,
        // 获取分区列表
        SaveUserRecordAll: 102007,
        // 用户保存所有数据
        UploadAvatar: 102008,
        //上传头像
        GetUserDataByKey: 102009,
        // 获得用户数据
        ReqWxSession: 103001,
        // 微信接口返回值
        ReqSendAuthCode: 103002,
        // 请求发送短信验证码
        ReqPhoneLogin: 103003,
        // 请求使用手机登录
        SetFriendCode: 104001,
        //设置好友邀请码
        GetFriendVal: 104002,
        //获得好友相关数据
        GetRankInfo: 201001,
        //请求获得排行数据
        GetInviteCode: 201002,
        //请求邀请码
        GetInviteCodeReward: 201003,
        //新玩家，输入邀请码，获得邀请码奖励，标记为老用户
        GetInviteLevelReward: 201004,
        //老玩家领取奖励
        PushInviteProcess: 201005,
        //推送邀请进度
        IsRankOpen: 201006,
        //是否开启排行榜
        GetSomeonePlayerInfo: 201007,
        //获取其他玩家数据
        GetMidAutumnRank: 301001,
        //中秋活动排行榜
        SetMidAutumnRank: 301002,
        //中秋活动排行榜
        GetWorldBossRank: 301003,
        //世界boss排行榜查看
        SetWorldBossRank: 301004,
        //世界boss排行榜设置
        PushWorldBossSettle: 301005,
        //世界boss结算完后推送消息到本地
        SetWorldBossPlayerStatus: 301006,
        //设置世界boss挑战的状态
        GetWorldBossPlayerStatus: 301007,
        //读取世界boss挑战的状态
        GetEmpireSpotData: 302001,
        //帝国战争的数据读取，每秒
        ActionEmpireSpot: 302002 //帝国战争对地块的行为，1占领 2攻占 3发起掠夺 4参与掠夺 5驱赶

      });

      _export("GClientEvent", GClientEvent = {});

      _export("GNetConst", GNetConst = {
        SaveHead: "game",
        ServerIsNew: "serverIsNew",
        ServerIsOld: "serverIsOld",
        ResSuccess: "success",
        ResFail: "fail",
        DataTypeInt: "int",
        DataTypeString: "string",
        DataTypeBoolean: "boolean",
        DataTypeObject: "object",
        ServerEventHead: "ServerDown_",
        Http_isAlive: "/isAlive"
      });

      (function (GLoginState) {
        GLoginState["noYet"] = "noYet";
        GLoginState["loginFail"] = "loginFail";
        GLoginState["loginWithoutAccount"] = "loginWithoutAccount";
        GLoginState["loginWithAccount"] = "loginWithAccount";
      })(GLoginState || _export("GLoginState", GLoginState = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e4aa1d6125398b7f997df9bdc58bca7837fd0c03.js.map