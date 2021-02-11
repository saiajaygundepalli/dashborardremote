function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/login");
    $ocLazyLoadProvider.config({
        debug: false
    });
    $stateProvider
       
        .state('forgotpassword', {
            url: "/forgotpassword",
            templateUrl: "views/Amvt/forgotpassword.html",
            data: {
                pageTitle: 'forgotpassword',
                specialClass: 'page-header-fixed'
            }
        })
// rotary club dashboard start
.state('dashboard', {
    url: "/dashboard",
    templateUrl: "views/Amvt/dashboard.html",
    data: {
        pageTitle: 'dashboard',
        specialClass: 'page-header-fixed'
    }
})

//add cost start
.state('about', {
    url: "/About",
    templateUrl: "views/Amvt/about.html",
    data: {
        pageTitle: 'About',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})
//add cost end

//add patient starts

.state('addpatients', {
    url: "/addpatients",
    templateUrl: "views/Amvt/addpatients.html",
    data: {
        pageTitle: 'Addpatients',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})

//add patient ends

//examination starts

.state('examination', {
    url: "/examination",
    templateUrl: "views/Amvt/examinatons.html",
    data: {
        pageTitle: 'Examination',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})

//examination ends

//ip starts

.state('ippatients', {
    url: "/ippatients",
    templateUrl: "views/Amvt/ippatients.html",
    data: {
        pageTitle: 'IPpatients',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})



//ip ends

//opbill bill starts

.state('opbills', {
    url: "/opbills",
    templateUrl: "views/Amvt/opbills.html",
    data: {
        pageTitle: 'Opbill',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})


//opbill bill ends

//ipbill bill starts

.state('ipbills', {
    url: "/ipbills",
    templateUrl: "views/Amvt/ipbills.html",
    data: {
        pageTitle: 'Ipbill',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})


//ipbill bill ends



.state('login', {
    url: "/login",
    templateUrl: "views/Amvt/login.html",
    data: {
        pageTitle: 'login',
        specialClass: 'header-none sidebar-none footer-none green-bg  login'
    }
})


        


}
angular
    .module('adminbag')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });