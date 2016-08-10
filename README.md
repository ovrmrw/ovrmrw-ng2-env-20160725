# ovrmrw-ng2-env-20160725

---

[Angular2の開発環境、俺ならこうやる 2016年7月25日版(rc.4)](http://qiita.com/ovrmrw/items/56364a4b673c03e20bba)

[Demo on firebase hosting](https://my-ng2-env-20160725.firebaseapp.com)

||My Environments|
|:--|:--|
|OS|Windows 10 Pro 64bit or 7 Pro 32bit|
|Editor|VSCode (stable)|
|node --version|v6.3.1|
|@angular/core|2.0.0-rc.5|

### Setup
```
$ npm install
```

### Run
```
$ npm start
```

### Check whether your TypeScript codes are correct
```
$ npm run tscheck
```

### Unit Test
```
$ npm run karma
or
$ npm run karma:w
```

### Rxjs5 Marble Test
```
$ npm run testrxjs
or
$ npm run testrxjs:w
```

### Unit Test & Rxjs5 Marble Test at the same time
```
$ npm test
```

### Deploy to firebase hosting
```
$ npm run deploy
```
