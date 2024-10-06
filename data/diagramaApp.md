
# Diagrama flujo de aplicacion:

Este es el diagrama general del proyecto:

[Volver al readme:](../README.md)

```plain
 NomadesWebSite
│
├──data/
├──src/
│  ├── controllers/
│  │   └── userController.js
│  │       
│  ├── models/
│  │   └── user.js
│  │   └── index.js
│  │
│  ├── routes/
│  │   └── apiRoutes.js (experimental)
│  │   └── index.js
│  │   └── userRouter.js
│  │
│  ├── services/
│  │   └── helpers.js 
│  │   └── userServices.js
│  │
│  ├── utils/
│  │   └── errorsHandlers.js
│  │   └── multer.js 
│  │   └──  
│  │ 
│  │
│  ├── views/
│  │   │ └──layouts/
│  │   │       └──mainLayout.pug
│  │   │       └──usersLayout.pug
│  │   │
│  │   └── index.pug
│  │   └── updateUser.pug
│  │   └── userDetail.pug
│  │   └── users.pug
│  │
│  ├── public/
│  │   ├── css/
│  │   │     └── modal.css
│  │   │     └── style.css
│  │   ├── js/
│  │   │   └── indexFunctions.js
│  │   └── images/
│  │
│  ├── envConfig.js
│  ├── db.js
│  └── app.js
│
├──test/
├── .babelrc
├──  index.js
└── package.json
```