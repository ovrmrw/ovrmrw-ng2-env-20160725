

windows環境


node.js, git, 他、別記事リンク
node ver 5.12.0 (node-sass問題)
[]()
nvm-windows


vscode
[]()


github desktop


githubでリポジトリ作成、Puglic, Node, MIT
github desktopでclone


フォルダ移動して

npm init -y

npm i -g typescript@beta firebase-tools
(失敗したら管理者権限で)

npm i -S @angular/core @angular/common @angular/compiler @angular/platform-browser @angular/platform-browser-dynamic @angular/http @angular/router @angular/forms rxjs zone.js reflect-metadata
npm i -S core-js babel-polyfill
npm i -S lodash

npm i -D @types/lodash
npm i -D typescript@beta lite-server concurrently 
npm i -D babel-cli babel-preset-es2015 babel-plugin-espower
npm i -D webpack angular2-template-loader raw-loader json-loader awesome-typescript-loader
npm i -D fs-extra @types/fs-extra
npm i -D mocha power-assert @types/mocha @types/power-assert @types/empower @types/power-assert-formatter
npm i -D karma@0.13.22 karma-mocha karma-mocha-reporter karma-sourcemap-loader karma-phantomjs-launcher phantomjs-prebuilt
npm i -D gulp gulp-mocha gulp-plumber
npm i -D codelyzer tslint


.gitignore に .dest* を追加する。

build, src, configフォルダ作る

copy-files.js

```javascript
const fs = require('fs-extra');

// .destフォルダを削除する。
fs.removeSync('./.dest');
fs.removeSync('./.dest-pre');

// srcフォルダにある『末尾が'.ts'か'.tsx'ではない』ファイルを.destフォルダにコピーする。
fs.copySync('./src', './.dest/src', { filter: /^(?!.*\.ts(x|)$)/ });
```

symlink.js

```javascript
const fs = require('fs-extra');

fs.ensureSymlinkSync('./node_modules', './.dest/node_modules', 'junction');
```

---

package.json scripts

```json
"tsc": "tsc",
"tslint": "tslint -c tslint.json src*/**/*.ts",
"build:client": "webpack",
"build:client:w": "webpack --watch",
"build": "gulp build && npm run build:client",
"build:p": "gulp build && webpack --config webpack.config.production.js",
"prestart": "npm run build",
"start": "concurrently -k \"npm run build:client:w\" \"gulp build:w\" \"npm run ls\" ",
"build:test": "webpack --config test-ng2/webpack.config.test.js",
"build:test:w": "webpack --config test-ng2/webpack.config.test.js --watch",
"ls": "lite-server --config config/browsersync.json",
"ls:e2e": "lite-server --config config/browsersync.e2e.json",
"karma": "npm run build:test && karma start --single-run",
"karma:w": "npm run build:test && concurrently -k \"npm run build:test:w\" \"karma start\" ",
"test": "npm run karma && npm run nightwatch",
"test:w": "concurrently -k \"npm run karma:w\" \"npm run nightwatch:w\" ",
"build:rxjs": "webpack --config test-rxjs/webpack.config.test.js",
"build:rxjs:w": "webpack --config test-rxjs/webpack.config.test.js --watch",
"mocha:rxjs": "npm run build:rxjs && gulp mocha:rxjs",
"mocha:rxjs:w": "npm run build:rxjs && concurrently -k \"npm run build:rxjs:w\" \"gulp mocha:rxjs:w\" ",
"serve": "npm run build:p && firebase serve",
"deploy": "npm run build:p && firebase deploy && firebase open hosting:site"
```

---

$ tsc --init

```json
{
  "compilerOptions": {
    "target": "es2015",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "noImplicitAny": false,
    "sourceMap": false,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "strictNullChecks": true,
    "skipLibCheck": true,
    "outDir": ".dest-tsc"
  },
  "exclude": [
    "node_modules"
  ]
}
```

configフォルダに色々作る

webpack.config.js, webpack.config.production.js作る


.vscodeフォルダ作る

```json:.vscode/settings.json
{
  "typescript.tsdk": "./node_modules/typescript/lib"
}
```