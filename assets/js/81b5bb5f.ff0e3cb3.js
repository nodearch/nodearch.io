"use strict";(self.webpackChunknodearch_github_io=self.webpackChunknodearch_github_io||[]).push([[416],{7637:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var n=i(7462),o=i(3366),a=(i(7294),i(3905)),r=["components"],s={sidebar_position:1,keywords:["vision","stack","node","typescript","inversify"],description:"NodeArch introduction and vision",image:"https://nodearch.io/img/logo.png"},c="Introduction",d={unversionedId:"architecture/introduction",id:"architecture/introduction",isDocsHomePage:!1,title:"Introduction",description:"NodeArch introduction and vision",source:"@site/docs/architecture/introduction.md",sourceDirName:"architecture",slug:"/architecture/introduction",permalink:"/docs/architecture/introduction",editUrl:"https://github.com/nodearch/nodearch.github.io/edit/source/website/docs/architecture/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,keywords:["vision","stack","node","typescript","inversify"],description:"NodeArch introduction and vision",image:"https://nodearch.io/img/logo.png"},sidebar:"tutorialSidebar",previous:{title:"Socket.IO",permalink:"/docs/backend/socket-io"},next:{title:"Architecture",permalink:"/docs/architecture/architecture"}},l=[{value:"Vision",id:"vision",children:[],level:2},{value:"How it works",id:"how-it-works",children:[],level:2},{value:"Stack",id:"stack",children:[{value:"Node.js",id:"nodejs",children:[],level:3},{value:"Typescript",id:"typescript",children:[],level:3},{value:"Inversify",id:"inversify",children:[],level:3}],level:2}],h={toc:l};function u(e){var t=e.components,i=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The documentation is still a work in progress. If you can't find what you're looking for, don't hesitate to ask for help through ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/BlueMax-IO/nodearch/issues"},"Github Issues"),"."))),(0,a.kt)("h2",{id:"vision"},"Vision"),(0,a.kt)("p",null,"NodeArch is a Node.js backend framework targeting to solve the design and architectural problems when creating Node.js APPs for the backend. "),(0,a.kt)("p",null,"Using Typescript and dependency injection, we bring the concepts we used to in languages like Java, C# etc. While still getting the best out of Javascript flexibility and Node.js non-blocking I/O model. "),(0,a.kt)("p",null,"There is also a big focus on wiring everything together, so our intention is not to reinvent/rewrite the tools/frameworks we already know and use. Instead, our target is to wire everything together and leverage the opensource community behind Node.js and Javascript. "),(0,a.kt)("p",null,"You can think of NodeArch as the glue that links all your tools and libraries together and helps create a readable, maintainable and scalable application architecture."),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"Built-in a modular way, NodeArch allows you only to pick what you need to get the job done. No unnecessary dependencies and libraries."),(0,a.kt)("h2",{id:"stack"},"Stack"),(0,a.kt)("p",null,"NodeArch is the glue for existing open-source technologies. The following is a list of the key technologies and libraries running and powering the framework."),(0,a.kt)("h3",{id:"nodejs"},"Node.js"),(0,a.kt)("p",null,"We love Node.js and use it extensively in production. It's easy to get started with, get the job done fast, and yet very flexible and powerful."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop. Typically, behavior is defined through callbacks at the beginning of a script, and at the end a server is started through a blocking call like EventMachine::run(). In Node.js, there is no such start-the-event-loop call. Node.js simply enters the event loop after executing the input script. Node.js exits the event loop when there are no more callbacks to perform. This behavior is like browser JavaScript \u2014 the event loop is hidden from the user.")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For more info, visit the official ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org"},"website")," for node.js"))),(0,a.kt)("h3",{id:"typescript"},"Typescript"),(0,a.kt)("p",null,"Dynamically-typed languages such as Javascript are great powerful tools in every programmer toolchain due to their flexible nature. But that, of course, comes at a high cost. Run-time errors, poor ide support, code structure that doesn't scale well, and is not easy to maintain."),(0,a.kt)("p",null,"Typescript comes to the rescue. "),(0,a.kt)("h3",{id:"inversify"},"Inversify"),(0,a.kt)("p",null,"TODO"))}u.isMDXComponent=!0}}]);