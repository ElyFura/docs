(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),r=(n(0),n(132)),i={id:"security",title:"Security & Authentication",sidebar_label:"Security & Authentication"},l={unversionedId:"security",id:"security",isDocsHomePage:!1,title:"Security & Authentication",description:"Is NodeCG secure by default?",source:"@site/docs/security.md",slug:"/security",permalink:"/docs/security",editUrl:"https://github.com/nodecg/docs/edit/master/docs/security.md",version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1601347023,sidebar_label:"Security & Authentication",sidebar:"mainSidebar",previous:{title:"Mount folders as endpoints",permalink:"/docs/mounts"},next:{title:"Screenshot Testing Graphics",permalink:"/docs/screenshot-testing"}},c=[{value:"Is NodeCG secure by default?",id:"is-nodecg-secure-by-default",children:[]},{value:"What levels of authorization does NodeCG have?",id:"what-levels-of-authorization-does-nodecg-have",children:[]},{value:"How are users authorized?",id:"how-are-users-authorized",children:[]},{value:"What do I do if one of my keys got leaked?",id:"what-do-i-do-if-one-of-my-keys-got-leaked",children:[]},{value:"How do I enable login security?",id:"how-do-i-enable-login-security",children:[{value:"Local Auth",id:"local-auth",children:[]},{value:"Twitch Auth",id:"twitch-auth",children:[]},{value:"Steam Auth",id:"steam-auth",children:[]}]},{value:"How do I enable HTTPS/SSL encryption?",id:"how-do-i-enable-httpsssl-encryption",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"is-nodecg-secure-by-default"},"Is NodeCG secure by default?"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"No.")," By default, NodeCG has no authorization or authentication of any kind. To enable basic authentication, see the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#how-do-i-enable-login-security"}),"How do I enable login security?")," section."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Do not")," put an unsecured NodeCG instance on the internet or a public network. Unsecured instances should only be used for local development and on trusted LANs."),Object(r.b)("h2",{id:"what-levels-of-authorization-does-nodecg-have"},"What levels of authorization does NodeCG have?"),Object(r.b)("p",null,"NodeCG has a fairly naive permissions model. There are only two permission levels:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Completely unauthorized, with no access to anything"),Object(r.b)("li",{parentName:"ol"},"Completely authorized, with full access to everything")),Object(r.b)("p",null,"This is something we want to improve in the future, but right now this is how things are in NodeCG."),Object(r.b)("p",null,'"Full access to everything" includes:'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Read/write access to every Replicant in every bundle")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Read/write access to every message in every bundle")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Read access to the full config of every bundle"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Your bundle configs may include sensitive API keys and passwords. Every user of your NodeCG deployment will have full access to these config values.")))),Object(r.b)("p",null,"Therefore, untrusted users must never be given any degree of authorization in your NodeCG instance. They must never be allowed to successfully authenticate with the socket server. If they do, they will have full control over your entire NodeCG instance."),Object(r.b)("h2",{id:"how-are-users-authorized"},"How are users authorized?"),Object(r.b)("p",null,"NodeCG has two ways of authorizing a user:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Reading the value of their ",Object(r.b)("inlineCode",{parentName:"li"},"socketToken")," cookie."),Object(r.b)("li",{parentName:"ol"},"Reading the value of their ",Object(r.b)("inlineCode",{parentName:"li"},"key")," URL query parameter.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'This is why the "COPY URL" buttons on the "Graphics" tab of the dashboard include a ',Object(r.b)("inlineCode",{parentName:"li"},"?key=YOUR_KEY")," at the end of them. It is necessary for the pages to load successfully in OBS.")))),Object(r.b)("p",null,"Anyone who gets sent a link which includes a ",Object(r.b)("inlineCode",{parentName:"p"},"key")," will have full authorization and access to your NodeCG instance. Treat these links with the same secrecy as you would a password, because that's essentially what they are."),Object(r.b)("h2",{id:"what-do-i-do-if-one-of-my-keys-got-leaked"},"What do I do if one of my keys got leaked?"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},'Have the owner of the leaked key navigate to the "Settings" tab on the Dashboard.'),Object(r.b)("li",{parentName:"ol"},'Click "RESET KEY", and accept the confirmation dialog.')),Object(r.b)("p",null,"If you are unable to reach the owner of the leaked key:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Shutdown your NodeCG instance."),Object(r.b)("li",{parentName:"ol"},"Locate the ",Object(r.b)("inlineCode",{parentName:"li"},"nodecg/db/tokens.db")," file."),Object(r.b)("li",{parentName:"ol"},"Either completely delete this file (which will log out every user and reset their keys), or edit out the specific line containing the key which was leaked."),Object(r.b)("li",{parentName:"ol"},"Restart NodeCG.")),Object(r.b)("h2",{id:"how-do-i-enable-login-security"},"How do I enable login security?"),Object(r.b)("p",null,"NodeCG has support for three authentication providers:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#local-auth"}),"Local Username/Password Auth")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#twitch-auth"}),"Twitch Auth")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#steam-auth"}),"Steam Auth"))),Object(r.b)("p",null,"You may have multiple authentication providers enabled simultaneously."),Object(r.b)("h3",{id:"local-auth"},"Local Auth"),Object(r.b)("p",null,"Configure your ",Object(r.b)("inlineCode",{parentName:"p"},"nodecg/cfg/nodecg.json")," as such:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "login": {\n    "enabled": true,\n    "sessionSecret": "Make this a random string, like one from https://randomkeygen.com/",\n    "local": {\n      "enabled": true,\n      "allowedUsers": [\n        {\n          "username": "example1",\n          "password": "password_example"\n        },\n        {\n          "username": "example2",\n          "password": "anotherExample-password1234"\n        }\n      ]\n    }\n  }\n}\n')),Object(r.b)("p",null,"Local authentication also support password hashing by using HMAC. In order to use a password hash, fill the ",Object(r.b)("inlineCode",{parentName:"p"},"password")," property with the format ",Object(r.b)("inlineCode",{parentName:"p"},"<type>:<hash>")," where ",Object(r.b)("inlineCode",{parentName:"p"},"<type>")," is the type (SHA-256, RIPEMD, Whirlpool, ...) and ",Object(r.b)("inlineCode",{parentName:"p"},"<hash>")," a valid password hash."),Object(r.b)("p",null,"For generating a valid password hash, you must use ",Object(r.b)("inlineCode",{parentName:"p"},"sessionSecret")," as secret key.\nIf you're looking for a HMAC hash generator, you can use tools like ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://wtools.io/generate-hmac-hash"}),"wtools.io")," for example."),Object(r.b)("p",null,"Currently, only native Node.js algorithms are supported."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "login": {\n    "enabled": true,\n    "sessionSecret": "Make this a random string, like one from https://randomkeygen.com/",\n    "local": {\n      "enabled": true,\n      "allowedUsers": [\n        {\n          "username": "admin",\n          "password": "sha256:ac679e332d4eee340b74eb0581225686f2736d58df7ea30c87a0d2cd5bfd1329"\n        },\n        {\n          "username": "other_admin",\n          "password": "ripemd:6f00f0c4c18fb563921b689876e98b61"\n        }\n      ]\n    }\n  }\n}\n')),Object(r.b)("h3",{id:"twitch-auth"},"Twitch Auth"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://glass.twitch.tv/console/apps/create"}),"Create a new application on your Twitch Developer Dashboard")),Object(r.b)("li",{parentName:"ol"},"Give it whatever values you want for Name, Category, and Other Details"),Object(r.b)("li",{parentName:"ol"},"Set the OAuth Redirect URL to ",Object(r.b)("inlineCode",{parentName:"li"},"https://YOUR_DEPLOYMENT_URL/login/auth/twitch"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If you're testing locally, use ",Object(r.b)("inlineCode",{parentName:"li"},"http://localhost:9090/login/auth/twitch")))),Object(r.b)("li",{parentName:"ol"},"Save your Client ID for the next step"),Object(r.b)("li",{parentName:"ol"},'Click "New Secret", and save your client secret for the next step'),Object(r.b)("li",{parentName:"ol"},"Configure your ",Object(r.b)("inlineCode",{parentName:"li"},"nodecg/cfg/nodecg.json")," as such:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"See the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://dev.twitch.tv/docs/authentication/#scopes"}),"Twitch Dev docs for the list of available scopes"),".")))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "login": {\n    "enabled": true,\n    "sessionSecret": "Make this a random string, like one from https://randomkeygen.com/",\n    "twitch": {\n      "enabled": true,\n      "clientID": "YOUR_TWITCH_APP_CLIENT_ID",\n      "clientSecret": "YOUR_TWITCH_APP_CLIENT_SECRET",\n      "scope": "user:read:email",\n      "allowedUsernames": [\n        "your_twitch_username",\n        "other_twitch_username",\n        "can_have_as_many_as_you_want"\n      ]\n    }\n  }\n}\n')),Object(r.b)("h3",{id:"steam-auth"},"Steam Auth"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://steamcommunity.com/dev/apikey"}),"Create/copy your Steam Web API Key")),Object(r.b)("li",{parentName:"ol"},"Obtain the SteamID64 string for each of the accounts you wish to allow.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://steamid.io/"}),"https://steamid.io/")," is one tool for looking these up."))),Object(r.b)("li",{parentName:"ol"},"Configure your ",Object(r.b)("inlineCode",{parentName:"li"},"nodecg/cfg/nodecg.json")," as such:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "login": {\n    "enabled": true,\n    "sessionSecret": "Make this a random string, like one from https://randomkeygen.com/",\n    "steam": {\n      "enabled": true,\n      "apiKey": "YOUR_STEAM_WEB_API_KEY",\n      "allowedIds": [\n        "paste the SteamId64s you want to allow here",\n        "they look like this",\n        "76561197974943998"\n      ]\n    }\n  }\n}\n')),Object(r.b)("h2",{id:"how-do-i-enable-httpsssl-encryption"},"How do I enable HTTPS/SSL encryption?"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create an SSL certificate if you don't already have one."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Creating an SSL cert is out of the scope of this tutorial. You may need to do some Googling if you are unfamiliar with this process."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Configure your ",Object(r.b)("inlineCode",{parentName:"p"},"nodecg/cfg/nodecg.json")," as such (passphrase is only required if you created your key with one):")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Restart NodeCG, and confirm that your instance is accessible via HTTPS."))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "ssl": {\n    "enabled": true,\n    "keyPath": "C:\\\\example\\\\path\\\\your-cert-key.key",\n    "certificatePath": "C:\\\\example\\\\path\\\\your-cert.crt",\n    "passphrase": "this is my example passphrase"\n  }\n}\n')))}b.isMDXComponent=!0},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,h=u["".concat(i,".").concat(p)]||u[p]||d[p]||r;return n?o.a.createElement(h,l(l({ref:t},s),{},{components:n})):o.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);