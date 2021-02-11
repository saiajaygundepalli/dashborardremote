var appmdl = require('../models/model');
// var AWS = require('aws-sdk');
// var awsS3 = 'config/aws.config.json';
var moment = require('moment');

var fs = require('fs');
const { compileFunction } = require('vm');

// *************************add cost  start **********************************

exports.postcostDataCtrl = function (req, res) {
    var std = req.body;
    appmdl.postcostDataMdl(std, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

//duplication check for categories and equipment
exports.getcatequCtrl = function (req, res) {
    var cat = req.params.cat;
    var equ = req.params.equ;
    appmdl.getcatequMdl(cat, equ, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.getaddcostdataCtrl = function (req, res) {

    appmdl.getaddcostdataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

// ************************* add cost  end **********************************


// ************************* add patient start **********************************

exports.postpatientDataCtrl = function (req, res) {
    var std = req.body;
    appmdl.postpatientDataMdl(std, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}


//dulpication of patient phone number
exports.getpatientphnnumDataCtrl = function (req, res) {
    var itemcount = req.params.itemcount;
    console.log(itemcount);
    appmdl.getpatientphnnumDataMdl(itemcount, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.getpatientdataCtrl = function (req, res) {

    appmdl.getpatientdataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.getdetailsofdateCtrl = function (req, res) {
    var id = req.body;
    // console.log(id);
    appmdl.getdetailsofdateMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}



// ************************* add patient end **********************************




//*******************************examination starts**************************** */




exports.getpatientphndataCtrl = function (req, res) {

    appmdl.getpatientphndataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.getpatientnameaddressCtrl = function (req, res) {
    var id = req.params.id;
    // console.log(id);

    appmdl.getpatientnameaddressMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.postexaminationdataCtrl = function (req, res) {
    var std = req.body;
    appmdl.postexaminationdataMdl(std, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        appmdl.getcatgeory(std, function (err, balresults) {
            if (err) {
                res.send({ 'status': 500, 'data': balresults });
                return;
            }
            var bal = balresults[0].count_of_beds;
            //console.log(bal);
            //res.send({ 'status': 200, 'data': balresults });

            appmdl.updatecount(bal, std, function (err, upbalresults) {
                if (err) {
                    res.send({ 'status': 500, 'data': upbalresults });
                    return;
                }
                //console.log(bal);
                res.send({ 'status': 200, 'data': upbalresults });
            });
        });
    });
}


exports.getexaminationdataCtrl = function (req, res) {

    appmdl.getexaminationdataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.getdetailsofdateexamCtrl = function (req, res) {
    var id = req.body;
    // console.log(id);
    appmdl.getdetailsofdateexamMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.getpatientcountCtrl = function (req, res) {

    appmdl.ggetpatientcountMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

// exports.movetoipCtrl = function (req, res) {
//     var id = req.params.id;
//     //console.log(id);

//     appmdl.movetoipMdl(id, function (err, results) {
//         if (err) {
//             res.send({ 'status': 500, 'data': results });
//             return;
//         }
//         res.send({ 'status': 200, 'data': results });
//     });
// }

exports.getcatebedsCtrl = function (req, res) {
    var id = req.params.id;
    //console.log(id);

    appmdl.getcatebedsMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

//*******************************examination ends**************************** */

//***************************IP Patient start************************************/

exports.getippatientCtrl = function (req, res) {

    appmdl.getippatientMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.getipdataCtrl = function (req, res) {

    appmdl.getipdataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}


exports.postipdataCtrl = function (req, res) {
    var std = req.body;
    console.log(std);
    appmdl.postipdataMdl(std, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        appmdl.getipbill(std, function (err, results1) {
            if (err) {
                res.send({ 'status': 500, 'data': results1 });
                return;
            }
            var updata = results1[0].total_bill;
            var updata1 = results1[0].equipement;
            var updata2 = results1[0].paid_bill
            //console.log(updata);
            appmdl.updateexam(std, updata, updata1, updata2, function (err, results2) {
                if (err) {
                    res.send({ 'status': 500, 'data': results2 });
                    return;
                }
                appmdl.getbill(std, function (err, upbalresults1) {
                    if (err) {
                        res.send({ 'status': 500, 'data': upbalresults1 });
                        return;
                    }
                    var cost_equipment = upbalresults1[0].cost_equipment;
                    var total_bill = upbalresults1[0].total_bill;
                    console.log('cost_equipment');
                    console.log(cost_equipment);
                    console.log(total_bill);

                    appmdl.updateexambill(std, cost_equipment, total_bill, function (err, upbalresults2) {
                        if (err) {
                            res.send({ 'status': 500, 'data': upbalresults2 });
                            return;
                        }
                        res.send({ 'status': 200, 'data': upbalresults2 });
                    });
                });
            });
        });
    });
}





exports.getdetailsofdateipCtrl = function (req, res) {
    var id = req.body;
    console.log(id);
    appmdl.getdetailsofdateipMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}




// exports.postaddservicedataCtrl = function (req, res) {
//     var std = req.body;
//     appmdl.postaddservicedataMdl(std, function (err, results) {
//         if (err) {
//             res.send({ 'status': 500, 'data': results });
//             return;
//         }
//         res.send({ 'status': 200, 'data': results });
//     });
// }

//***************************IP Patient ends***************************************/

//**************************op  Bill starts **********************************/



exports.getoppatientphnnumCtrl = function (req, res) {

    appmdl.getoppatientphnnumMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.getpatientnameaddressdataCtrl = function (req, res) {
    var id = req.params.id;
    // console.log(id);

    appmdl.getpatientnameaddressdataMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}


// exports.postopbillCtrl = function (req, res) {
//     var std = req.body;
//     appmdl.postopbillMdl(std, function (err, results) {
//         if (err) {
//             res.send({ 'status': 500, 'data': results });
//             return;
//         }
//         res.send({ 'status': 200, 'data': results });
//     });
// }


exports.postopbillCtrl = function (req, res) {
    var std = req.body;
    appmdl.postopbillMdl(std, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        appmdl.getpaidandduefees(std, function (err, balresults) {
            if (err) {
                res.send({ 'status': 500, 'data': balresults });
                return;
            }
            var bal_paid_fees = balresults[0].paid_fees;
            var bal_due_fees = balresults[0].due_fees;
            appmdl.updatepaidandduefees(std, bal_paid_fees, bal_due_fees, function (err, balresults) {
                if (err) {
                    res.send({ 'status': 500, 'data': balresults });
                    return;
                }
                res.send({ 'status': 200, 'data': balresults });
            });
        });
    });
}

exports.getopdataCtrl = function (req, res) {

    appmdl.getopdataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.getdetailsofdateopbillCtrl = function (req, res) {
    var id = req.body;
    console.log(id);
    appmdl.getdetailsofdateopbillMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}


//**************************op  Bill Ends**********************************/

//***********************ip bill starts*********************** */
exports.getippatientphnnumCtrl = function (req, res) {

    appmdl.getippatientphnnumMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.getippatientnameaddressdataCtrl = function (req, res) {
    var id = req.params.id;
    // console.log(id);

    appmdl.getippatientnameaddressdataMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}


exports.postipbillCtrl = function (req, res) {
    var std = req.body;
    appmdl.postipbillMdl(std, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        appmdl.getduebill(std, function (err, upbalresults3) {
            if (err) {
                res.send({ 'status': 500, 'data': upbalresults3 });
                return;
            }
            var paidbill = upbalresults3[0].paid_bill;
            var due_bill = upbalresults3[0].due_bill;
            appmdl.updateduebill(std, paidbill, due_bill, function (err, upbalresults4) {
                if (err) {
                    res.send({ 'status': 500, 'data': upbalresults4 });
                    return;
                }
                res.send({ 'status': 200, 'data': upbalresults4 });



            });
        });
    });
}

exports.getipbilldataCtrl = function (req, res) {

    appmdl.getipbilldataMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.getdetailsofdateipbillCtrl = function (req, res) {
    var id = req.body;
    //console.log(id);
    appmdl.getdetailsofdateipbillMdl(id, function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

//****************************ip bill ends************************* */
//***************************Dashboard starts*********************************/


exports.getcountoppatientCtrl = function (req, res) {

    appmdl.getcountoppatientMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.getcountofgeneralwardbedsCtrl = function (req, res) {

    appmdl.getcountofgeneralwardbedsMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}


exports.getcountoficubedsCtrl = function (req, res) {

    appmdl.getcountoficubedsMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}


exports.getcountofnicubedsCtrl = function (req, res) {

    appmdl.getcountofnicubedsMdl(function (err, results) {
        if (err) {
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

// exports.getcountofbedsaddcategoryCtrl = function (req, res) {

//     appmdl.getcountofbedsaddcategoryMdl(function (err, results) {
//         if (err) {
//             res.send({ 'status': 500, 'data': results });
//             return;
//         }
//         res.send({ 'status': 200, 'data': results });
//     });
// }

//*************************Dashboard ends******************************* */