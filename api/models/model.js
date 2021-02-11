
var sqldb = require('../config/dbconnect');
var dbutil = require(appRoot + '/utils/dbutils');
var moment = require('moment');

// ************************* add cost  start**********************************

exports.postcostDataMdl = function (data, callback) {
  var cntxtDtls = "in postcostDataMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into add_cost (category,equipement,count_of_beds,cost_equipment)
    values('${data.category}','${data.equipement}','${data.count_of_beds}','${data.cost_equipment}') `;
  //console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getcatequMdl = function (cat, equ, callback) {
  console.log(cat);
  console.log(equ);
  var cntxtDtls = "in getcatequMdl";
  var QRY_TO_EXEC = `select count(id) as count from add_cost where equipement ='${equ}' and category= '${cat}'`;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getaddcostdataMdl = function (callback) {
  var cntxtDtls = "in getaddcostdataMdl";
  var QRY_TO_EXEC = `select * from add_cost order by id desc;`;
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};




// *************************add cost end**********************************


// ************************* add patient  start**********************************

exports.postpatientDataMdl = function (data, callback) {
  var cntxtDtls = "in postpatientDataMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into add_patient (name,phn_num,address,op_num,date_of_joining,fees)
  values('${data.name}','${data.phn_num}','${data.address}','${data.phn_num}','${data.date_of_joining}','${data.fees}') `;
  //console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

//get duplication of patient phone numbers
exports.getpatientphnnumDataMdl = function (itemcount, callback) {
  var cntxtDtls = "in getpatientphnnumDataMdl";
  var QRY_TO_EXEC = `select count(phn_num) as count from add_patient where phn_num ='${itemcount}'`;
  // console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getpatientdataMdl = function (callback) {
  var cntxtDtls = "in getpatientdataMdl";
  var QRY_TO_EXEC = `select * from add_patient order by id desc;`;
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);

};


exports.getdetailsofdateMdl = function (id, callback) {
  var cntxtDtls = "in getdetailsofdateMdl";

  var QRY_TO_EXEC = `select * from add_patient where date_of_joining between '${id.from_date}' and '${id.end_date}' `;

  console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// ************************* add patient  end**********************************


//********************************Examination starts ************************* */


exports.getpatientphndataMdl = function (callback) {
  var cntxtDtls = "in getpatientphndataMdl";
  var QRY_TO_EXEC = `select phn_num from add_patient ;`;
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);

};

exports.getpatientnameaddressMdl = function (id, callback) {
  var cntxtDtls = "in getpatientnameaddressMdl";
  var QRY_TO_EXEC = `select name,address,fees from  add_patient where phn_num ='${id}' order by id desc `;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);

};



exports.postexaminationdataMdl = function (data, callback) {
  //console.log(data);
  var cntxtDtls = "in postexaminationdataMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  if (data.move_ip == true) {
    var QRY_TO_EXEC = `insert into examination (phn_num,name,address,date_of_joining,doc_descrp,fees,category,avail_beds,cost_equipment,move_ip)
    values('${data.phn_num}','${data.name}','${data.address}','${data.date_of_joining}','${data.doc_descrp}','${data.fees}','${data.category}','${data.avail_beds}','${data.cost_of_beds}',1) `;
    console.log(QRY_TO_EXEC)

  }
  else {
    var QRY_TO_EXEC = `insert into examination (phn_num,name,address,date_of_joining,doc_descrp,fees,category,avail_beds,cost_equipment,move_ip)
  values('${data.phn_num}','${data.name}','${data.address}','${data.date_of_joining}','${data.doc_descrp}','${data.fees}','${data.category}','${data.avail_beds}','${data.cost_of_beds}',0) `;
    console.log(QRY_TO_EXEC);

  }

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.getexaminationdataMdl = function (callback) {
  var cntxtDtls = "in getexaminationdataMdl";
  var QRY_TO_EXEC = `select * from examination where move_ip='0' order by id desc`;
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);

};

exports.getcatgeory = function (data, callback) {
  var cntxtDtls = "in getcatgeory";
  var QRY_TO_EXEC = `select count_of_beds from add_cost where category='${data.category}' and equipement = 'bed' `;
  console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);

};

exports.updatecount = function (data, id, callback) {
  var cntxtDtls = "in updatecount";
  var fincount = parseInt(data) - 1;
  var QRY_TO_EXEC = `update  add_cost set count_of_beds='${fincount}' where category='${id.category}' and equipement = 'bed'`;
  console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);

};

exports.getdetailsofdateexamMdl = function (id, callback) {
  var cntxtDtls = "in getdetailsofdateexamMdl";

  var QRY_TO_EXEC = `select * from examination where (date_of_joining between '${id.from_date}' and '${id.end_date}') and move_ip='0' `;

  //console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.ggetpatientcountMdl = function (callback) {
  var cntxtDtls = "in ggetpatientcountMdl";
  var QRY_TO_EXEC = `select count(id) as count from examination  order by id desc`;
  //console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);

};

// exports.movetoipMdl = function (id, callback) {
//   var cntxtDtls = "in movetoipMdl";
//   var QRY_TO_EXEC = `update examination set move_ip ='1' where phn_num = '${id}'`;

//   //console.log(QRY_TO_EXEC);

//   if (callback && typeof callback == "function") {
//     dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
//       callback(err, results);
//       return;
//     });
//   }
//   else
//     return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
// };

exports.getcatebedsMdl = function (id, callback) {
  var cntxtDtls = "in getcatebedsMdl";
  var QRY_TO_EXEC = `select count_of_beds,cost_equipment from add_cost  where  category = '${id}'`;

  console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getbill = function (id, callback) {
  var cntxtDtls = "in getbill";
  var QRY_TO_EXEC = `select cost_equipment,total_bill from examination  where  move_ip= 1  and phn_num = '${id.phn_num}'`;

  console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.updateexambill = function (id, cost_equipment, total_bill, callback) {
  var cntxtDtls = "in updateexambill";
  console.log(cost_equipment);
  console.log(total_bill);
  var totalbill = parseInt(cost_equipment) + parseInt(total_bill) + parseInt(200);
  console.log(totalbill);
  var QRY_TO_EXEC = `update  examination set final_bill='${totalbill}',due_bill='${totalbill}'  where phn_num = '${id.phn_num}'`;

  console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


//********************************Examination ends **************************/


//***************************IP Patient start************************************/

exports.getippatientMdl = function (callback) {
  var cntxtDtls = "in getippatientMdl";
  var QRY_TO_EXEC = `select * from  examination where move_ip  ='1' order by id desc`;

  console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};




exports.getipdataMdl = function (callback) {
  var cntxtDtls = "in getipdataMdl";
  var QRY_TO_EXEC = `select * from  ip_patients`;

  //console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



exports.postipdataMdl = function (data, callback) {
  console.log(data);
  var cntxtDtls = "in postipdataMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  if (data.add_service == true) {
    var QRY_TO_EXEC = `insert into ip_patients (name,phn_num,address,date_of_joining,ip_category,equipement,total_bill,add_service)
  values('${data.name}','${data.phn_num}','${data.address}','${data.date_of_joining}','${data.category}','${data.equipement}','${data.total_bill}',1) `;


  } else {
    var QRY_TO_EXEC = `insert into ip_patients (name,phn_num,address,date_of_joining,ip_category,equipement,total_bill,add_service)
  values('${data.name}','${data.phn_num}','${data.address}','${data.date_of_joining}','${data.category}','${data.equipement}','${data.total_bill}',0) `;

  }

  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getipbill = function (data, callback) {
  var cntxtDtls = "in getipdataMdl";
  var QRY_TO_EXEC = `select total_bill,equipement,paid_bill from  ip_patients where phn_num = '${data.phn_num}'`;

  console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.updateexam = function (data, updata, updata1, updata2, callback) {
  var cntxtDtls = "in updateexam";
  var QRY_TO_EXEC = `update examination set total_bill ='${updata}',equipment = '${updata1}',paid_bill = '${updata2}' where phn_num = '${data.phn_num}'`;

  console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getdetailsofdateipMdl = function (id, callback) {
  var cntxtDtls = "in getdetailsofdateipMdl";

  var QRY_TO_EXEC = `select * from examination where date_of_joining between '${id.from_date}' and '${id.end_date}' and move_ip='1'`;

  console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};







//***************************IP Patient ends***************************************/


//******************************op  Bill starts************************************** */


exports.getoppatientphnnumMdl = function (callback) {
  var cntxtDtls = "in getoppatientphnnumMdl";
  var QRY_TO_EXEC = `select phn_num from add_patient  ;`;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);

};

exports.getpatientnameaddressdataMdl = function (id, callback) {
  var cntxtDtls = "in getpatientnameaddressdataMdl";
  var QRY_TO_EXEC = `select name,address,fees from add_patient  where phn_num ='${id}' order by id desc `;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);

};

exports.postopbillMdl = function (data, callback) {
  var cntxtDtls = "in postopbillMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into op_bill (name,phn_num,address,date_of_joining,fees)
  values('${data.name}','${data.phn_num}','${data.address}','${data.date_of_joining}','${data.paid_fees}') `;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getpaidandduefees = function (data, callback) {
  var cntxtDtls = "in getpaidandduefees";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `select paid_fees,due_fees from add_patient where phn_num ='${data.phn_num}'`;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.updatepaidandduefees = function (data, bal_paid_fees, bal_due_fees, callback) {
  var cntxtDtls = "in updatepaidandduefees";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var upda_paid_amount = parseInt(bal_paid_fees) + parseInt(data.paid_fees);
  var upda_due_amount = parseInt(bal_due_fees) - parseInt(data.paid_fees);

  var QRY_TO_EXEC = `update add_patient set paid_fees = '${upda_paid_amount}' , due_fees ='${upda_due_amount}' where phn_num='${data.phn_num}'`;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getopdataMdl = function (callback) {
  var cntxtDtls = "in getopdataMdl";
  var QRY_TO_EXEC = `select * from  op_bill`;

  //console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getdetailsofdateopbillMdl = function (id, callback) {
  var cntxtDtls = "in getdetailsofdateopbillMdl";

  var QRY_TO_EXEC = `select * from op_bill where date_of_joining between '${id.from_date}' and '${id.end_date}'`;

  console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


//******************************op  Bill ends************************************** */


//***********************ip bill starts********************************************/


exports.getippatientphnnumMdl = function (callback) {
  var cntxtDtls = "in getippatientphnnumMdl";
  var QRY_TO_EXEC = `select phn_num from ip_patients  ;`;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);

};


exports.getippatientnameaddressdataMdl = function (id, callback) {
  var cntxtDtls = "in getippatientnameaddressdataMdl";
  var QRY_TO_EXEC = `select name,address,date_of_joining from ip_patients  where phn_num ='${id}' order by id desc `;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);

};

exports.postipbillMdl = function (data, callback) {
  var cntxtDtls = "in postipbillMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into ip_bill (name,phn_num,address,date_of_joining,paid_fees)
  values('${data.name}','${data.phn_num}','${data.address}','${data.date_of_joining}','${data.paid_fees}') `;
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getduebill = function (data, callback) {
  var cntxtDtls = "in getduebill";
  var QRY_TO_EXEC = `select paid_bill,due_bill from examination  where phn_num = '${data.phn_num}'`;

  console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};





exports.updateduebill = function (data, paidbill, due_bill, callback) {
  var cntxtDtls = "in updateduebill";

  var paidbill1 = parseInt(paidbill) + parseInt(data.paid_fees);
  var duefeees = parseInt(due_bill) - parseInt(data.paid_fees);
  var QRY_TO_EXEC = `update examination set due_bill ='${duefeees}',paid_bill='${paidbill1}' where phn_num = '${data.phn_num}'`;

  console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getipbilldataMdl = function (callback) {
  var cntxtDtls = "in getipbilldataMdl";
  var QRY_TO_EXEC = `select * from  ip_bill`;

  //console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getdetailsofdateipbillMdl = function (id, callback) {
  var cntxtDtls = "in getdetailsofdateipbillMdl";

  var QRY_TO_EXEC = `select * from ip_bill where date_of_joining between '${id.from_date}' and '${id.end_date}'`;

  console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


//***********************ip bill ends************************************************/


//*********************************Dashboard starts*********************************** */

exports.getcountoppatientMdl = function (callback) {
  var cntxtDtls = "in getcountoppatientMdl";
  var QRY_TO_EXEC = `select(select count(id) as count from add_patient)  as patient,
  (select count(id) as count from ip_patients) as ip`;

  //console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getcountofgeneralwardbedsMdl = function (callback) {
  var cntxtDtls = "in getcountofgeneralwardbedsMdl";
  var QRY_TO_EXEC = `select count_of_beds from add_cost where equipement= 'Bed' and category = 'General Ward' `;

  console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getcountoficubedsMdl = function (callback) {
  var cntxtDtls = "in getcountoficubedsMdl";
  var QRY_TO_EXEC = `select count_of_beds from add_cost where equipement= 'Bed' and category = 'ICU' `;

  //console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getcountofnicubedsMdl = function (callback) {
  var cntxtDtls = "in getcountofnicubedsMdl";
  var QRY_TO_EXEC = `select count_of_beds from add_cost where equipement= 'Bed' and category = 'NICU' `;

  //console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.getcountofbedsMdl = function (callback) {
  var cntxtDtls = "in getcountofbedsMdl";
  var QRY_TO_EXEC = `select count(id) as count from add_category where equipement= 'Bed' `;

  console.log(QRY_TO_EXEC);

  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

//*********************************Dashboard ends*********************************** */