#Webpack-Devserver-Hmr-Start-Sample
> dev-server + HotModuleReplacementPlugin + ES6-Babel + S3 배포설정이 장착된 웹팩 기본 스타트 샘플입니다.

##설치
```
npm install
```

##개발시
```
npm run dev
```

##빌드
```
npm install build
```

##배포
배포는 아래와 같이 실행하되, 설정파일(webpack.config.deploy.js)의 s3 키값을 세팅해야합니다. 옵션관련 정보는 [s3-plugin-webpack](https://github.com/MikaAK/s3-plugin-webpack)를 참고하시길.
```
npm install deploy
```

##참고
- [webpack](http://webpack.github.io/)
- [AriaFallah의  WebpackTutorial](https://github.com/AriaFallah/WebpackTutorial/tree/master/part1) 중 [Example 6 - The Development Server](https://github.com/AriaFallah/WebpackTutorial/tree/master/part1/example)
- [webpack s3 deploy plugin](https://github.com/MikaAK/s3-plugin-webpack)
