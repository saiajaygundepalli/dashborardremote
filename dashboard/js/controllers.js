

angular.module('adminbag')

    .controller('loginCtrl', function ($http, $scope, $rootScope, $state) {
        $scope.getLoggedIn = function () {
            var user_data = {
                "usr_name": $scope.username,
                "password": $scope.password,
            }
            if (user_data.usr_name == 'rotary' && user_data.password == 'rotary@123') {
                $state.go('dashboard');
            } else if (user_data.usr_name == 'amvt' && user_data.password == 'amvt@123') {
                $state.go('dashboard');
            } else {
                alert("Invalid Credentials");
            }
        }
    })
    .controller('MainCtrl', function ($http, $scope, $state, $filter, $rootScope) {
        var club_id = localStorage.getItem("club_id");
        ////console.log(club_id);
        if (club_id == null) {
            club_id = 0;
        }
        if (club_id) {
            $rootScope.checkusr = true;
            ////console.log($rootScope.checkusr)
        } else {
            $rootScope.checkusr = false;
            ////console.log($rootScope.checkusr)
        }

        $scope.logout = function () {
            ////console.log("fdfdfsdf");
            localStorage.removeItem('club_id');
            $state.go('login')

        }
    })
    // ******************************************** add cost start *******************************************  


    .controller('aboutCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {


        //post add category data
        $scope.submitaddcostdata = function (a) {
            console.log(a);
            $http.get('http://localhost:7878/nodeapp/getcatequ/' + a.category + '/' + a.equipement)
                .success(function (resdata, status) {
                    $scope.count_data = resdata.data[0].count;
                    if ($scope.count_data == 0) {
                        $http.post('http://localhost:7878/nodeapp/postcostData', a)
                            .success(function (resdata, status) {
                                if (resdata.status == 200) {
                                    alert('sucess..');
                                    $scope.a = {};
                                    $scope.getdata();
                                } else {
                                    alert('failed..')
                                    $scope.a = {};
                                    $scope.getdata();
                                }
                            })
                            .error(function (data, status, headers, config) {
                                if (status == 500) { }
                            })

                    }
                    else {
                        alert('details already added');
                    }
                })


        }



        //get add cost data for report
        $scope.getdata = function () {
            $http.get('http://localhost:7878/nodeapp/getaddcostdata/')
                .success(function (resdata, status) {
                    $scope.abutd = resdata.data;
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }
        $scope.getdata();




        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end

    })


    // ******************************************** add cost end *******************************************  


    // ******************************************** add patient start *******************************************

    // checking the dulipcation of patient phone number and posting 
    .controller('addpatients', function ($scope, $http, $rootScope, DTOptionsBuilder, $filter) {
        $scope.submitpatientdata = function (a) {
            // console.log(a);
            $http.get('http://localhost:7878/nodeapp/getpatientphnnumData/' + a.phn_num)
                .success(function (resdata, status) {
                    $scope.count_item = resdata.data[0].count;
                    // console.log($scope.count_item);
                    if ($scope.count_item == 0) {
                        $http.post('http://localhost:7878/nodeapp/postpatientData', a)
                            .success(function (resdata, status) {
                                if (resdata.status == 200) {
                                    alert('sucess..');
                                    $scope.a = {};
                                    $scope.getpatientdata();
                                } else {
                                    alert('failed..')
                                    $scope.a = {};
                                    $scope.getpatientdata();
                                }
                            })
                            .error(function (data, status, headers, config) {
                                if (status == 500) { }
                            })
                    }
                    else {
                        alert('already Phone number added');
                    }
                })
        }


        //get the patient data for report
        $scope.getpatientdata = function () {
            $http.get('http://localhost:7878/nodeapp/getpatientdata/')
                .success(function (resdata, status) {
                    $scope.abutd = resdata.data;
                    console.log($scope.abutd);
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        $scope.getpatientdata();


        // for from date and to date
        $scope.search = function (a) {
            $scope.from_date = $filter('date')(a.from_date, "yyyy-MM-dd");
            $scope.end_date = $filter('date')(a.end_date, "yyyy-MM-dd");

            var a = {
                'from_date': $scope.from_date,
                'end_date': $scope.end_date
            }


            $http.post('http://localhost:7878/nodeapp/getdetailsofdate/', a)
                .success(function (resdata, status) {
                    $scope.abutd = resdata.data;

                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }



        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end





    })

    // ******************************************** add patient ends *******************************************

    // ******************************************** Examination Starts *******************************************
    .controller('examination', function ($scope, $http, $rootScope, DTOptionsBuilder, $filter) {

        //get contact num 
        $http.get('http://localhost:7878/nodeapp/getpatientphndata/')
            .success(function (resdata, status) {
                $scope.patient_num = resdata.data;
                //console.log($scope.patient_num);
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })


        //get name and address of  the patient
        $scope.getdata = function (id) {
            console.log(id);
            $http.get('http://localhost:7878/nodeapp/getpatientnameaddressdata/' + id)
                .success(function (resdata, status) {
                    $scope.a.name = resdata.data[0].name;
                    $scope.a.address = resdata.data[0].address;
                    $scope.a.fees = resdata.data[0].fees;

                    console.log($scope.a.name);

                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }

        //post the examination data
        $scope.submitexaminationdata = function (a) {
            console.log(a);
            $http.post('http://localhost:7878/nodeapp/postexaminationdata', a)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert('sucess..');
                        $scope.a = {};
                        $scope.getexaminationreport();
                        //$scope.countofpatients();

                    } else {
                        alert('failed..')
                        $scope.a = {};
                        $scope.getexaminationreport();
                        //$scope.countofpatients();

                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }

        // for from date and to date
        $scope.search = function (a) {
            //console.log(a);
            $scope.from_date = $filter('date')(a.from_date, "yyyy-MM-dd");
            $scope.end_date = $filter('date')(a.end_date, "yyyy-MM-dd");

            var a = {
                'from_date': $scope.from_date,
                'end_date': $scope.end_date
            }

            $http.post('http://localhost:7878/nodeapp/getdetailsofdateexam/', a)
                .success(function (resdata, status) {
                    $scope.abutd = resdata.data;
                    // $scope.getexaminationreport();

                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }


        //get the examination data for report
        $scope.getexaminationreport = function () {
            $http.get('http://localhost:7878/nodeapp/getexaminationdata/')
                .success(function (resdata, status) {
                    $scope.abutd = resdata.data;
                    //console.log($scope.abutd);
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }
        $scope.getexaminationreport();


        //get the count of patients visted 
        // $scope.countofpatients = function () {


        //     $http.get('http://localhost:7878/nodeapp/getpatientcount/')
        //         .success(function (resdata, status) {
        //             $scope.patient_coun = resdata.data[0].count;
        //             //console.log($scope.patient_coun);
        //         })
        //         .error(function (data, status, headers, config) {
        //             if (status == 500) { }
        //         })
        // }

        // $scope.countofpatients();

        // $scope.movetoip = function (data) {
        //     $http.get('http://localhost:7878/nodeapp/movetoip/' + data)
        //         .success(function (resdata, status) {
        //             if (resdata.status == 200) {
        //                 alert('Moved to IP');
        //                 $scope.getexaminationreport();


        //             }
        //             else {
        //                 alert('Not Moved to IP');
        //                 $scope.getexaminationreport();


        //             }

        //         })
        //         .error(function (data, status, headers, config) {

        //         })
        // }


        //to get the count of beds
        $scope.cat = function (a) {
            $http.get('http://localhost:7878/nodeapp/getcatebeds/' + a)
                .success(function (resdata, status) {
                    $scope.a.avail_beds = resdata.data[0].count_of_beds;
                    $scope.a.cost_of_beds = resdata.data[0].cost_equipment;
                    //console.log(resdata.data);
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }



        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end





    })

    // ******************************************** Examination Ends *******************************************


    // ******************************************** IP starts *******************************************


    .controller('ippatients', function ($scope, $http, $rootScope, DTOptionsBuilder, $filter) {




        // to get ip patients data from examination
        $scope.getipdata = function () {


            $http.get('http://localhost:7878/nodeapp/getippatient/')
                .success(function (resdata, status) {
                    $scope.ip_patient = resdata.data;
                    console.log($scope.ip_patient);
                    // for (var i = 0; i < resdata.data.length; i++) {
                    //     $scope.date = resdata.data[i].date_of_joining;
                    //     var currentDate = $filter('date')($scope.date, "dd-MM-yyyy");
                    //     resdata.data[i].date_of_joining = currentDate;
                    // }



                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }
        $scope.getipdata();



        //when edit clicked to bind value in input
        $scope.Editprsntdt = function (a) {
            $scope.ip_data = a;
            console.log($scope.ip_data);
        }

        //post ip patients data
        $scope.submitipdata = function (a) {
            console.log(a);
            $http.post('http://localhost:7878/nodeapp/postipdata', a)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert('sucess..');
                        $scope.a = {};
                        $scope.getipdata();


                    } else {
                        alert('failed..')
                        $scope.a = {};
                        $scope.getipdata();


                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }

        // for from date and to date
        $scope.search = function (a) {

            $scope.from_date = $filter('date')(a.from_date, "yyyy-MM-dd");
            $scope.end_date = $filter('date')(a.end_date, "yyyy-MM-dd");

            var a = {
                'from_date': $scope.from_date,
                'end_date': $scope.end_date
            }
            console.log(a);
            $http.post('http://localhost:7878/nodeapp/getdetailsofdateip/', a)
                .success(function (resdata, status) {
                    $scope.ip_patient = resdata.data;
                    // console.log($scope.abutd);
                    // $scope.getexaminationreport();

                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }

        //$scope.addservice = function (a) {
        //console.log(a);
        // $http.post('http://localhost:7878/nodeapp/postaddservicedata', a)
        //     .success(function (resdata, status) {
        //         if (resdata.status == 200) {
        //             alert('sucess..');
        //             $scope.a = {};


        //         } else {
        //             alert('failed..')
        //             $scope.a = {};


        //         }
        //     })
        //     .error(function (data, status, headers, config) {
        //         if (status == 500) { }
        //     })
        //}

        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)

            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end



    })

    // ******************************************** IP Ends *******************************************


    //*************************************Op bill starts*********************************************** */
    .controller('opbillCtrl', function ($scope, $http, $rootScope, $filter) {

        //get contact num of opbills 

        $http.get('http://localhost:7878/nodeapp/getoppatientphnnum/')
            .success(function (resdata, status) {
                $scope.op_patient_num = resdata.data;
                //console.log($scope.op_patient_num);
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })




        //get name and address of  the patient
        $scope.getdata = function (id) {
            console.log(id);
            $http.get('http://localhost:7878/nodeapp/getpatientnameaddressdata/' + id)
                .success(function (resdata, status) {
                    $scope.a.name = resdata.data[0].name;
                    $scope.a.address = resdata.data[0].address;
                    $scope.a.fees = resdata.data[0].fees;
                    // console.log( $scope.a.fees);

                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }

        $scope.submitopbilldata = function (a) {
            console.log(a);
            $http.post('http://localhost:7878/nodeapp/postopbill', a)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert('sucess..');
                        $scope.a = {};
                        $scope.getopbills();


                    } else {
                        alert('failed..')
                        $scope.a = {};
                        $scope.getopbills();


                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }

        //get op data
        $scope.getopbills = function () {
            $http.get('http://localhost:7878/nodeapp/getopdata/')
                .success(function (resdata, status) {
                    $scope.op_data = resdata.data;
                    console.log($scope.op_data);
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
        $scope.getopbills();

        $scope.search = function (a) {

            $scope.from_date = $filter('date')(a.from_date, "yyyy-MM-dd");
            $scope.end_date = $filter('date')(a.end_date, "yyyy-MM-dd");

            var a = {
                'from_date': $scope.from_date,
                'end_date': $scope.end_date
            }
            console.log(a);
            $http.post('http://localhost:7878/nodeapp/getdetailsofdateopbill/', a)
                .success(function (resdata, status) {
                    $scope.op_data = resdata.data;
                    // console.log($scope.abutd);
                    // $scope.getexaminationreport();

                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }

    })

    //*************************************Op bill ends*********************************************** */

    //************************************Ip bill starts*********************************************/
    .controller('ipbillCtrl', function ($scope, $http, $rootScope, $filter) {
        //get contact num of ipbills 
        $http.get('http://localhost:7878/nodeapp/getippatientphnnum/')
            .success(function (resdata, status) {
                $scope.ip_patient_num = resdata.data;
                //console.log($scope.op_patient_num);
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })


        //get name and address of  the patient
        $scope.getdata = function (id) {
            console.log(id);
            $http.get('http://localhost:7878/nodeapp/getippatientnameaddressdata/' + id)
                .success(function (resdata, status) {
                    $scope.a.name = resdata.data[0].name;
                    $scope.a.address = resdata.data[0].address;
                    //$scope.a.date_of_joining = resdata.data[0].date_of_joining;
                    //console.log($scope.a.date_of_joining);



                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })

        }


        $scope.submitipbilldata = function (a) {
            console.log(a);
            $http.post('http://localhost:7878/nodeapp/postipbill', a)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert('sucess..');
                        $scope.a = {};
                        $scope.getipdata();

                    } else {
                        alert('failed..')
                        $scope.a = {};
                        $scope.getipdata();

                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }


        //get ip data
        $scope.getipdata = function () {


            $http.get('http://localhost:7878/nodeapp/getipbilldata/')
                .success(function (resdata, status) {
                    $scope.ip_data = resdata.data;

                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }

        $scope.getipdata();


        $scope.search = function (a) {

            $scope.from_date = $filter('date')(a.from_date, "yyyy-MM-dd");
            $scope.end_date = $filter('date')(a.end_date, "yyyy-MM-dd");

            var a = {
                'from_date': $scope.from_date,
                'end_date': $scope.end_date
            }
            //console.log(a);
            $http.post('http://localhost:7878/nodeapp/getdetailsofdateipbill/', a)
                .success(function (resdata, status) {
                    $scope.ip_data = resdata.data;
                    // console.log($scope.abutd);
                    // $scope.getexaminationreport();

                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                })
        }
    })


    //************************************Ip bill ends*********************************************/


    //***********************************DashBoard Controller Starts*********************************** */


    .controller('dashboardCtrl', function ($scope, $http, $rootScope) {

        //get count of op and ip patients
        $http.get('http://localhost:7878/nodeapp/getcountoppatient/')
            .success(function (resdata, status) {
                //console.log(resdata.data);
                $scope.op_patient = resdata.data[0];
                //console.log($scope.op_patient);
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })


        //get count of beds in general ward from add_cost table
        $http.get('http://localhost:7878/nodeapp/getcountofgeneralwardbeds/')
            .success(function (resdata, status) {
                $scope.bed_count = resdata.data[0].count_of_beds;


            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })



        //get count of beds in ICU from add_cost table
        $http.get('http://localhost:7878/nodeapp/getcountoficubeds/')
            .success(function (resdata, status) {
                $scope.bed_count_ICU = resdata.data[0].count_of_beds;


            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })



        //get count of beds in NICU from add_cost table
        $http.get('http://localhost:7878/nodeapp/getcountofnicubeds/')
            .success(function (resdata, status) {
                $scope.bed_count_NICU = resdata.data[0].count_of_beds;

            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            })




    })


    //****************************DashBoard Controller ends*********************************** */