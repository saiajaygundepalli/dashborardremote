/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
router = express.Router();
//Include Controller
var sampleRoutes = require('../controllers/mainCtrl');

// *************************  add cost start**********************************

router.post('/postcostData', sampleRoutes.postcostDataCtrl);


router.get('/getaddcostdata', sampleRoutes.getaddcostdataCtrl);

router.get('/getcatequ/:cat/:equ', sampleRoutes.getcatequCtrl);

// *************************  add cost end**********************************


// *************************  add patient start**********************************

router.post('/postpatientData', sampleRoutes.postpatientDataCtrl);

router.get('/getpatientphnnumData/:itemcount', sampleRoutes.getpatientphnnumDataCtrl);


router.get('/getpatientdata', sampleRoutes.getpatientdataCtrl);

router.post('/getdetailsofdate', sampleRoutes.getdetailsofdateCtrl);


// *************************  add patient end**********************************


//*******************************examination start**************************** */

router.get('/getpatientphndata', sampleRoutes.getpatientphndataCtrl);

router.get('/getpatientnameaddress/:id', sampleRoutes.getpatientnameaddressCtrl);

router.post('/postexaminationdata', sampleRoutes.postexaminationdataCtrl);


router.get('/getexaminationdata', sampleRoutes.getexaminationdataCtrl);

router.post('/getdetailsofdateexam', sampleRoutes.getdetailsofdateexamCtrl);

router.get('/getpatientcount', sampleRoutes.getpatientcountCtrl);

//router.get('/movetoip/:id', sampleRoutes.movetoipCtrl);

router.get('/getcatebeds/:id', sampleRoutes.getcatebedsCtrl);



//*******************************examination end**************************** */




//***************************IP Patient start************************************/

router.get('/getippatient', sampleRoutes.getippatientCtrl);

router.post('/postipdata', sampleRoutes.postipdataCtrl);

router.get('/getipdata', sampleRoutes.getipdataCtrl);

router.post('/getdetailsofdateip', sampleRoutes.getdetailsofdateipCtrl);


//***************************IP Patient ends***************************************/





//****************************op  Bill starts**********************************/

router.get('/getoppatientphnnum', sampleRoutes.getoppatientphnnumCtrl);

router.get('/getpatientnameaddressdata/:id', sampleRoutes.getpatientnameaddressdataCtrl);

router.post('/postopbill', sampleRoutes.postopbillCtrl);

router.get('/getopdata', sampleRoutes.getopdataCtrl);

router.post('/getdetailsofdateopbill', sampleRoutes.getdetailsofdateopbillCtrl);



//*****************************op Bill ends******************************** */

//*************************IP bill starts**********************************/
router.get('/getippatientphnnum', sampleRoutes.getippatientphnnumCtrl);

router.get('/getippatientnameaddressdata/:id', sampleRoutes.getippatientnameaddressdataCtrl);

router.post('/postipbill', sampleRoutes.postipbillCtrl);

router.get('/getipbilldata', sampleRoutes.getipbilldataCtrl);

router.post('/getdetailsofdateipbill', sampleRoutes.getdetailsofdateipbillCtrl);

//****************************IP bills end *************************************/


//******************************Dashboard starts****************************/

router.get('/getcountoppatient', sampleRoutes.getcountoppatientCtrl);

router.get('/getcountofgeneralwardbeds', sampleRoutes.getcountofgeneralwardbedsCtrl);

router.get('/getcountoficubeds', sampleRoutes.getcountoficubedsCtrl);

router.get('/getcountofnicubeds', sampleRoutes.getcountofnicubedsCtrl);

//router.get('/getcountofbedsaddcategory', sampleRoutes.getcountofbedsaddcategoryCtrl);

//*********************************Dashboard ends*************************/
module.exports = router;

