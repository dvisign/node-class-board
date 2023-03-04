const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const app = express();

// template 설정
const hbsSet = hbs.create();
// hbs 엔진 설정
app.engine("handlebars", hbsSet.engine);
// 템플릿 엔진 설정
app.set("view engine", "handlebars");
app.set("views", __dirname + "/template");

// middleware
// 미들웨어: 라우트를 생성하기 직전에 실행되는 함수로, 해당 라우트에 접근 하기전에 거치는 인증절차
// json 정렬
app.use(express.json());
// url 인코딩
app.use(express.urlencoded({ extended: false }));
// 정적 파일 루트 설정
app.use("/", express.static(path.join(__dirname, "/")));

// route
// method: get, post
app.get("/", (req, res, next) => {
  // req : request 들어온 요청
  // res : response
  // next: 라우트 패스
  return res.send("라우트 생성");
});
app.get("/test", (req, res, next) => {
  return res.render("index");
});

app.listen("5000", () => {
  console.log("server start");
});
