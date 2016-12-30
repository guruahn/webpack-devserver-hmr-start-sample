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

##AWS CLI 배포 방법
1. [aws CLI](https://aws.amazon.com/ko/cli/)를 설치.
Mac Sierra 에서 awscli 가 정상적으로 설치가 되지 않는 경우, --ignore-installed six 옵션을 추가하여 설치합니다

```
sudo pip install awscli --ignore-installed six
```

2. cloudfront 캐시삭제를 위한 설정
```
aws configure set preview.cloudfront
```
access key와 secret access key를 요구하면 deploy.sh파일을 보고 복사해서 입력하십시요.
aws cli설정에 관한 자세한 설명은 [Configuring the AWS Command Line Interface](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)를 참고하세요.

4. 배포 명령어
```
sh deploy-sample.sh
```

##참고
- [webpack](http://webpack.github.io/)
- [AriaFallah의  WebpackTutorial](https://github.com/AriaFallah/WebpackTutorial/tree/master/part1) 중 [Example 6 - The Development Server](https://github.com/AriaFallah/WebpackTutorial/tree/master/part1/example)
- [webpack s3 deploy plugin](https://github.com/MikaAK/s3-plugin-webpack)
