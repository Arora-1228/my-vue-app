const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const SECRECT_KEY = "123456";
// app.use(cors());

function createToken() {
  const token = jwt.sign(
    {
      id: 1,
      username: "foo",
      token_type: "TOKEN",
    },
    SECRECT_KEY,
    { expiresIn: 10000000 }
  );
  return token;
}

function createRefreshToken(res) {
  const refresh_token = jwt.sign(
    {
      id: 1,
      token_type: "REFRESH_TOKEN",
    },
    SECRECT_KEY,
    { expiresIn: "5d" }
  );
  res.header("RefreshToken", refresh_token);
  res.header("Access-Control-Expose-Headers", "Authorization, RefreshToken");
}

app.post("/login", (req, res) => {
  // 登录成功，返回token
  let token = createToken();
  res.send({
    code: 0,
    msg: "",
    data: {
      id: 1,
      username: "foo",
      token,
    },
  });
});

app.post("/protected", (req, res) => {
  const authorization = req.headers.authorization;
  const errMsg = {
    code: 401,
    msg: "Unauthorized",
  };
  if (!authorization) {
    res.send(errMsg);
    return;
  }
  const token = authorization.replace("Bearer ", "");
  try {
    const decoded = jwt.verify(token, SECRECT_KEY);
    if (decoded.token_type !== "TOKEN") {
      res.send(errMsg);
      return;
    }
    res.send({
      code: 0,
      msg: "",
      data: {
        content: "提交表单成功以后的资源",
      },
    });
  } catch (err) {
    //jwt过期会报错
    res.send(errMsg);
  }
});

app.get("/home", (req, res) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    res.send(errMsg);
    return;
  }
  const token = authorization.replace("Bearer ", "");
  try {
    const decoded = jwt.verify(token, SECRECT_KEY);
    if (decoded.token_type !== "TOKEN") {
      res.send(errMsg);
      return;
    }
    res.send({
      code: 0,
      msg: "成功",
      data: {
        content: [
          {
            id: "DCdCB7eE-FF3C-aBCC-Bf4c-C278EC64A631",
            name: "袁敏后端返回",
            addr: "河北省 唐山市 滦南县",
            age: 36,
            birth: "1973-02-12",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "e7eDB5ac-c81A-5Ebe-2eA1-aBDDc43Dc9FB",
            name: "陆杰",
            addr: "新疆维吾尔自治区 伊犁哈萨克自治州 尼勒克县",
            age: 30,
            birth: "1983-07-03",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "FcfFcCEA-4cd6-e8cD-bfDE-be8Ec7AbDE2F",
            name: "龙军",
            addr: "湖南省 常德市 澧县",
            age: 46,
            birth: "1994-02-25",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "86dAbB4e-4fAA-5eF9-b1c9-acEcfC7fe2d6",
            name: "邱勇",
            addr: "河北省 邯郸市 馆陶县",
            age: 46,
            birth: "2019-09-10",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "f34cEAEC-4FDd-FFf3-ACc4-BfE85Ad4fFee",
            name: "曾秀英",
            addr: "河北省 保定市 涞水县",
            age: 38,
            birth: "2018-03-14",
            sex: 1,
            sexLabel: "男",
          },
          {
            id: "cFD2EBdc-7542-79D9-dC6A-8Bc59CA8edAb",
            name: "邵静",
            addr: "天津 天津市 河北区",
            age: 57,
            birth: "1973-07-27",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "A6dbcefF-c1Fb-Be9E-DaD7-DebA50739BD6",
            name: "杨艳",
            addr: "青海省 海东市 循化撒拉族自治县",
            age: 32,
            birth: "1995-02-25",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "e5d4d4bE-AF1C-Ae54-9839-8dE4066AceC9",
            name: "蔡丽",
            addr: "广西壮族自治区 贵港市 覃塘区",
            age: 44,
            birth: "2011-10-03",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "FDCAb44c-ddd5-dce7-aABF-8fFCf94f50Ef",
            name: "毛洋",
            addr: "江西省 抚州市 宜黄县",
            age: 26,
            birth: "1988-11-22",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "879fADcD-C933-BcAB-b337-b6e8dc0bA917",
            name: "郝军",
            addr: "宁夏回族自治区 石嘴山市 大武口区",
            age: 38,
            birth: "1988-08-06",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "f1DCE3E2-eEDD-bECb-F663-2fC1CbbdB3cF",
            name: "周平",
            addr: "河北省 石家庄市 新华区",
            age: 42,
            birth: "1990-11-13",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "5608C57B-4F8f-b7A3-92Aa-6D8a29CceF47",
            name: "蔡秀兰",
            addr: "辽宁省 盘锦市 大洼县",
            age: 22,
            birth: "1980-01-16",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "BaF3710b-9B4c-ffd6-E449-Aa3ebDFFAc2D",
            name: "雷秀英",
            addr: "湖南省 湘潭市 岳塘区",
            age: 18,
            birth: "1979-08-24",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "B7C820Ee-a0a1-8D87-eBbb-B1354c2AdcCb",
            name: "吕艳",
            addr: "青海省 海南藏族自治州 贵德县",
            age: 42,
            birth: "2012-05-24",
            sex: 1,
            sexLabel: "男",
          },
          {
            id: "AeaaB896-DeA8-93Fd-6E6E-4Dd459D6b8c1",
            name: "李刚",
            addr: "江西省 九江市 庐山区",
            age: 59,
            birth: "1977-08-24",
            sex: 1,
            sexLabel: "男",
          },
          {
            id: "BE08d845-de31-dC24-7348-dD25CCD5f201",
            name: "郝勇",
            addr: "河北省 张家口市 怀安县",
            age: 46,
            birth: "1984-08-15",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "F6C3DeDE-C4c7-67b1-Ec27-83FECf347FDe",
            name: "林刚",
            addr: "山东省 菏泽市 单县",
            age: 42,
            birth: "2006-08-19",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "9EB17cbC-3Bfd-a1d7-dc0E-a1eAeA2F6915",
            name: "蒋刚",
            addr: "浙江省 衢州市 柯城区",
            age: 36,
            birth: "1997-06-30",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "fe5de719-fe6a-A9B1-B6E1-BBe3EbF8e2bE",
            name: "白洋",
            addr: "吉林省 白城市 大安市",
            age: 43,
            birth: "1989-11-09",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "c2FdAa7B-1E55-0a8A-2E6b-32BebD955A2A",
            name: "蒋娟",
            addr: "河南省 洛阳市 宜阳县",
            age: 58,
            birth: "1998-07-15",
            sex: 0,
            sexLabel: "女",
          },
        ],
      },
    });
  } catch (err) {
    //jwt过期会报错
    res.send(errMsg);
  }
});

app.get("/home/getUserData", (req, res) => {

    res.send({
      code: 200,
      msg: "成功",
      data: {
        list: [
          {
            id: "DCdCB7eE-FF3C-aBCC-Bf4c-C278EC64A631",
            name: "袁敏后端返回",
            addr: "河北省 唐山市 滦南县",
            age: 36,
            birth: "1973-02-12",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "e7eDB5ac-c81A-5Ebe-2eA1-aBDDc43Dc9FB",
            name: "陆杰",
            addr: "新疆维吾尔自治区 伊犁哈萨克自治州 尼勒克县",
            age: 30,
            birth: "1983-07-03",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "FcfFcCEA-4cd6-e8cD-bfDE-be8Ec7AbDE2F",
            name: "龙军",
            addr: "湖南省 常德市 澧县",
            age: 46,
            birth: "1994-02-25",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "86dAbB4e-4fAA-5eF9-b1c9-acEcfC7fe2d6",
            name: "邱勇",
            addr: "河北省 邯郸市 馆陶县",
            age: 46,
            birth: "2019-09-10",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "f34cEAEC-4FDd-FFf3-ACc4-BfE85Ad4fFee",
            name: "曾秀英",
            addr: "河北省 保定市 涞水县",
            age: 38,
            birth: "2018-03-14",
            sex: 1,
            sexLabel: "男",
          },
          {
            id: "cFD2EBdc-7542-79D9-dC6A-8Bc59CA8edAb",
            name: "邵静",
            addr: "天津 天津市 河北区",
            age: 57,
            birth: "1973-07-27",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "A6dbcefF-c1Fb-Be9E-DaD7-DebA50739BD6",
            name: "杨艳",
            addr: "青海省 海东市 循化撒拉族自治县",
            age: 32,
            birth: "1995-02-25",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "e5d4d4bE-AF1C-Ae54-9839-8dE4066AceC9",
            name: "蔡丽",
            addr: "广西壮族自治区 贵港市 覃塘区",
            age: 44,
            birth: "2011-10-03",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "FDCAb44c-ddd5-dce7-aABF-8fFCf94f50Ef",
            name: "毛洋",
            addr: "江西省 抚州市 宜黄县",
            age: 26,
            birth: "1988-11-22",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "879fADcD-C933-BcAB-b337-b6e8dc0bA917",
            name: "郝军",
            addr: "宁夏回族自治区 石嘴山市 大武口区",
            age: 38,
            birth: "1988-08-06",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "f1DCE3E2-eEDD-bECb-F663-2fC1CbbdB3cF",
            name: "周平",
            addr: "河北省 石家庄市 新华区",
            age: 42,
            birth: "1990-11-13",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "5608C57B-4F8f-b7A3-92Aa-6D8a29CceF47",
            name: "蔡秀兰",
            addr: "辽宁省 盘锦市 大洼县",
            age: 22,
            birth: "1980-01-16",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "BaF3710b-9B4c-ffd6-E449-Aa3ebDFFAc2D",
            name: "雷秀英",
            addr: "湖南省 湘潭市 岳塘区",
            age: 18,
            birth: "1979-08-24",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "B7C820Ee-a0a1-8D87-eBbb-B1354c2AdcCb",
            name: "吕艳",
            addr: "青海省 海南藏族自治州 贵德县",
            age: 42,
            birth: "2012-05-24",
            sex: 1,
            sexLabel: "男",
          },
          {
            id: "AeaaB896-DeA8-93Fd-6E6E-4Dd459D6b8c1",
            name: "李刚",
            addr: "江西省 九江市 庐山区",
            age: 59,
            birth: "1977-08-24",
            sex: 1,
            sexLabel: "男",
          },
          {
            id: "BE08d845-de31-dC24-7348-dD25CCD5f201",
            name: "郝勇",
            addr: "河北省 张家口市 怀安县",
            age: 46,
            birth: "1984-08-15",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "F6C3DeDE-C4c7-67b1-Ec27-83FECf347FDe",
            name: "林刚",
            addr: "山东省 菏泽市 单县",
            age: 42,
            birth: "2006-08-19",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "9EB17cbC-3Bfd-a1d7-dc0E-a1eAeA2F6915",
            name: "蒋刚",
            addr: "浙江省 衢州市 柯城区",
            age: 36,
            birth: "1997-06-30",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "fe5de719-fe6a-A9B1-B6E1-BBe3EbF8e2bE",
            name: "白洋",
            addr: "吉林省 白城市 大安市",
            age: 43,
            birth: "1989-11-09",
            sex: 0,
            sexLabel: "女",
          },
          {
            id: "c2FdAa7B-1E55-0a8A-2E6b-32BebD955A2A",
            name: "蒋娟",
            addr: "河南省 洛阳市 宜阳县",
            age: 58,
            birth: "1998-07-15",
            sex: 0,
            sexLabel: "女",
          },
        ],
        count:50
      },
    });

});
app.get("/refresh_token", (req, res) => {
  const authorization = req.headers.authorization;
  const errMsg = {
    code: 401,
    msg: "Unauthorized",
  };
  if (!authorization) {
    res.send(errMsg);
    return;
  }
  const token = authorization.replace("Bearer ", "");
  try {
    const decoded = jwt.verify(token, SECRECT_KEY);
    if (decoded.token_type !== "REFRESH_TOKEN") {
      res.send(errMsg);
      return;
    }
    createToken(res);
    res.send({
      code: 0,
      msg: "",
      data: {
        content: "刷新token成功",
      },
    });
  } catch {
    res.send(errMsg);
  }
});

const PORT = 9527;

app.listen(PORT, () => {
  console.log(`server start on port ${PORT}`);
});
