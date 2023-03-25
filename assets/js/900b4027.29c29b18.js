"use strict";(self.webpackChunknodearch_io=self.webpackChunknodearch_io||[]).push([[3314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={},l="Hello World",s={unversionedId:"hello-world",id:"hello-world",title:"Hello World",description:"Your very first NodeArch app!",source:"@site/docs/hello-world.md",sourceDirName:".",slug:"/hello-world",permalink:"/docs/hello-world",draft:!1,editUrl:"https://github.com/nodearch/nodearch.io/edit/main/docs/hello-world.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Configuration",permalink:"/docs/configuration"}},p={},i=[],c={toc:i},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hello-world"},"Hello World"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Your very first NodeArch app!")),(0,o.kt)("p",null,"We'll build, configure, and extend Apps from scratch in the Guides section, but here, we'll just do our usual introductory piece of code. The good old ",(0,o.kt)("strong",{parentName:"p"},"Hello, world!")),(0,o.kt)("p",null,"We'll generate a template app using the CLI as our playground to take a look at the basic structure of a NodeArch App."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"nodearch new\n")),(0,o.kt)("p",null,"You'll be asked for the project name, which will be used as the directory name for your project. You'll also be asked to choose between one of the available templates. We'll use express just to try things out. Next, the CLI will start generating your new app and install all the required dependencies."),(0,o.kt)("p",null,"Once done, open up the new app directory, and you should see something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-- src\n|   +-- components\n|   |   +-- user.controller.ts\n|   |   +-- user.spec.ts\n|   +-- main.ts\n|   +-- start.ts\n+-- .gitignore\n+-- package.json\n+-- tsconfig.json\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"},(0,o.kt)("inlineCode",{parentName:"a"},"tsconfig.json"))," Specifies the root files and the compiler options required to compile the project."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.dev/learn/the-package-json-guide"},(0,o.kt)("inlineCode",{parentName:"a"},"package.json"))," Your Node.JS package info, like name, version, and dependencies, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/docs/gitignore"},(0,o.kt)("inlineCode",{parentName:"a"},".gitignore"))," Specifies intentionally untracked files to ignore."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"src")," The project source code root directory."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"main.ts")," That is where we define and configure our app. It works as the entry point for the CLI to load and start our app."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"start.js")," Used to start the app directly instead of using the CLI. It's useful in production as it's faster and doesn't require the CLI to be installed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"components")," An optional directory to group the project components away from non-components source code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.spec.ts")," an example suite of test cases."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user.controller.ts")," an example controller.")),(0,o.kt)("p",null,"Let's take a look at how the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.ts")," file looks like."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="main.ts"',title:'"main.ts"'},"import { App, LogLevel } from '@nodearch/core';\nimport { ExpressServer, ExpressHook, OpenAPICli } from '@nodearch/express';\nimport path from 'path';\nimport express from 'express';\nimport http from 'http';\n\n// Extending the base class App to create our new App\nexport default class MyApp extends App {\n\n  constructor() {\n    /**\n     * Create and configure Express instance\n     * to pass it to the Express Extension  \n    */ \n    const app = express();\n    app.use(express.json());\n    app.use(express.urlencoded({ extended: true }));\n    \n    // Create an HTTP server out of the Express instance\n    const server = http.createServer(app);\n\n    /** \n     * The super() call is to init and configure the base class\n     * That we inherited, that is where we configure the new\n     * App instance that will be created. \n    */\n    super({\n      // specify where the framework will look for the components\n      classLoader: {\n        classpath: path.join(__dirname, 'components')\n      },\n      // logging configurations\n      logging: {\n        logLevel: LogLevel.Debug\n      },\n      /**\n       * extensions are also apps provided locally or through\n       * npm modules to extend our app. \n       */ \n      extensions: [\n        { \n          app: new ExpressServer({ \n            expressApp: app,\n            server,\n            port: 3001\n          }), \n          include: [ExpressHook, OpenAPICli] \n        }\n      ]\n    });\n  }\n\n}\n")),(0,o.kt)("p",null,"Now, to start the app"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"nodearch start\n")),(0,o.kt)("p",null,"The app will load and starts an express server. If you go to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/users")," in your browser, you should now see ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello, World!"),"."))}d.isMDXComponent=!0}}]);