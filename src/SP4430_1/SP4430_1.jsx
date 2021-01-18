import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { userActions } from '../_actions';

import './Appsp4430.css';

import csvDownload from 'json-to-csv-export'

import { CSVLink, CSVDownload } from 'react-csv';



import ReactDOM from "react-dom";

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>

import Popup from "reactjs-popup";

import Logo from './images/logo.jpg';





class SP4430_1 extends React.Component {



constructor(props) {

super(props)

this.state = {

device_id : null,

timestamp : null,

data1 : null,

datavin : [],        

options1 : [],

options2 : [],

students: [

{  "Device ID"   : '',"Serial No": '', "Time stamp": ''  , "Date"              : '', "Model": '' , "Download CSV Result": ''},

]

}

}

componentDidMount() {

let response;



let url;

let test = this.props.location.search;

url = 'https://rq9u5kiuri.execute-api.ap-south-1.amazonaws.com/arkmeas/Device'+test;



fetch(url) .then((response) => {



return response.json();

},function(err){

console.log(err);

}).then((data) =>{

const temp_data = JSON.parse(JSON.stringify(data))

console.log(temp_data);

const count = Number(temp_data.Count) //1234

console.log(count);

const data1 = []

let i;

for(i in temp_data.Items)

{

console.log(temp_data.Items[i])

data1.push(temp_data.Items[i])

}

this.setState({data1:data1})

if(this.state.options1.length>0)

{

console.log(this.state)

}

});

}

renderTableHeader() {

let header = Object.keys(this.state.students[0])

return header.map((key, index) => {

return <th class="topcorner1" key={index}>{key.toUpperCase()}</th>

})

}

renderTableData() {

let i

let j;

let k;

let table;

let buffer =[]



console.log(this.state.data1);

let temp;

let timbuff = []

let mearesult;

let buffer1 =[]

let buffer2 =[]

let buffer3 =[]

let buffersec =[]

let mesurementresultval =[]  

let Timestamparra =[]

let ymarra =[]

let Serialarray =[]

let DeviceIDarray =[]

let Modelarray =[]

let samecheck;





for(j in this.state.data1){

  var test1 = this.state.data1[j].TMS;

  var test3 = this.state.data1[j].Payload;

buffer1.push({"tms": test1,"payload": test3 });



}



var output = [];



buffer1.forEach(function(item) {

var existing = output.filter(function(v, i) {

return v.tms == item.tms;

});

if (existing.length) {

var existingIndex = output.indexOf(existing[0]);

output[existingIndex].payload = output[existingIndex].payload.concat(item.payload);

} else {

if (typeof item.payload == 'string')

item.payload = [item.payload];

output.push(item);

}

});  



console.dir(output);







for(i in output)

{

let fg1 = output[i].payload[1];

let fg2 = output[i].payload[2]

let fg3 = output[i].payload[3]

let tmsval = output[i].tms

let device_id = output[i].payload[0]+""+fg1+""+fg2+""+fg3



var input = device_id;

var fields = input.split('||');

var name = fields[0];

var dseries = fields[1];

var dseriesno = dseries[0]+dseries[1]+dseries[2]+dseries[3];



if(dseriesno=="D-02"){

var mesurementresult = "$$$DECK2 Measurement Result$$$";



}

else if(dseriesno=="D-03"){

var mesurementresult = "$$$DECK3 Measurement Result$$$";



}

else if(dseriesno=="D-04"){

var mesurementresult = "$$$DECK4 Measurement Result$$$";





}

else if(dseriesno=="D-01"){

var  mesurementresult = "$$$DECK1 Measurement Result$$$";



}



var fields = input.split('^');

var serialno = fields[2];





var fields = input.split('DATE^')[1];

var test_id = input.split('TEST_ID^')[1];

   var test_idval = test_id[0]+test_id[1]+test_id[2]+test_id[3]+test_id[4];



var date = fields[5]+fields[6]+"/"+fields[8]+fields[9]+"/"+fields[0]+fields[1]+fields[2]+fields[3];



var fields = input.split('TIME^')[1];



var time = fields[0]+fields[1]+fields[2]+fields[3]+fields[4];





var fields = input.split('NO^')[1];

var zerofields = "0";



var measno = "Meas.No."+zerofields+fields[0]+fields[1]+fields[2]+fields[3];







const slug = input.split('|BAR_CH1_AD^').pop();

var new_str_bar_ch1 = slug.substring(0, slug.indexOf("|12|BAR_CH2_AD^"));

var str_BAR_CH2_array_2 = new_str_bar_ch1.split('$');

for(var l_1 = 0; l_1 < str_BAR_CH2_array_2.length; l_1++) {

str_BAR_CH2_array_2[l_1] = str_BAR_CH2_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}





const slug2 = input.split('|BAR_CH2_AD^').pop();

var new_str_bar_ch2 = slug2.substring(0, slug2.indexOf("|13|BAR_CH3_AD^"));

var str_BAR_CH22_array_2 = new_str_bar_ch2.split('$');

for(var l_1 = 0; l_1 < str_BAR_CH22_array_2.length; l_1++) {

str_BAR_CH22_array_2[l_1] = str_BAR_CH22_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



const slug3 = input.split('|BAR_CH3_AD^').pop();

var new_str_bar_ch3 = slug3.substring(0, slug3.indexOf("|14|BAR_CH4_AD^"));

var str_BAR_CH3_array_2 = new_str_bar_ch3.split('$');

for(var l_1 = 0; l_1 < str_BAR_CH3_array_2.length; l_1++) {

str_BAR_CH3_array_2[l_1] = str_BAR_CH3_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



const slug4 = input.split('|BAR_CH4_AD^').pop();

var new_str_bar_ch4 = slug4.substring(0, slug4.indexOf("|15|BAR_CH5_AD^"));

var str_BAR_CH4_array_2 = new_str_bar_ch4.split('$');

for(var l_1 = 0; l_1 < str_BAR_CH4_array_2.length; l_1++) {

str_BAR_CH4_array_2[l_1] = str_BAR_CH4_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}





const slug5 = input.split('|BAR_CH5_AD^').pop();

var new_str_bar_ch5 = slug5.substring(0, slug5.indexOf("|16|BAR_CH6_AD^"));

var str_BAR_CH5_array_5 = new_str_bar_ch5.split('$');

for(var l_1 = 0; l_1 < str_BAR_CH5_array_5.length; l_1++) {

str_BAR_CH5_array_5[l_1] = str_BAR_CH5_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}







const slug6 = input.split('|BAR_CH6_AD^').pop();

var new_str_bar_ch6 = slug6.substring(0, slug6.indexOf("|17|BAR_CH1_AD2^"));

var str_BAR_CH6_array_6 = new_str_bar_ch6.split('$');

for(var l_1 = 0; l_1 < str_BAR_CH6_array_6.length; l_1++) {

str_BAR_CH6_array_6[l_1] = str_BAR_CH6_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}





const slug_ad2 = input.split('|BAR_CH1_AD2^').pop();

var new_str_BARAD_ch1 = slug_ad2.substring(0, slug_ad2.indexOf("|18|BAR_CH2_AD2^"));

var str_BARAD_CH2_array_2 = new_str_BARAD_ch1.split('$');

for(var l_1 = 0; l_1 < str_BARAD_CH2_array_2.length; l_1++) {

str_BARAD_CH2_array_2[l_1] = str_BARAD_CH2_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}





const slug_ad22 = input.split('|BAR_CH2_AD2^').pop();

var new_str_BARAD_ch2 = slug_ad22.substring(0, slug_ad22.indexOf("|19|BAR_CH3_AD2^"));

var str_BARAD_CH22_array_2 = new_str_BARAD_ch2.split('$');

for(var l_1 = 0; l_1 < str_BARAD_CH22_array_2.length; l_1++) {

str_BARAD_CH22_array_2[l_1] = str_BARAD_CH22_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

const slug_ad23 = input.split('|BAR_CH3_AD2^').pop();

var new_str_BARAD_ch3 = slug_ad23.substring(0, slug_ad23.indexOf("|20|BAR_CH4_AD2^"));

var str_BARAD_CH3_array_2 = new_str_BARAD_ch3.split('$');

for(var l_1 = 0; l_1 < str_BARAD_CH3_array_2.length; l_1++) {

str_BARAD_CH3_array_2[l_1] = str_BARAD_CH3_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



const slug_ad24 = input.split('|BAR_CH4_AD2^').pop();

var new_str_BARAD_ch4 = slug_ad24.substring(0, slug_ad24.indexOf("|21|BAR_CH5_AD2^"));

var str_BARAD_CH4_array_2 = new_str_BARAD_ch4.split('$');

for(var l_1 = 0; l_1 < str_BARAD_CH4_array_2.length; l_1++) {

str_BARAD_CH4_array_2[l_1] = str_BARAD_CH4_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}





const slug_ad25 = input.split('|BAR_CH5_AD2^').pop();

var new_str_BARAD_ch5 = slug_ad25.substring(0, slug_ad25.indexOf("|22|BAR_CH6_AD2^"));

var str_BARAD_CH5_array_5 = new_str_BARAD_ch5.split('$');

for(var l_1 = 0; l_1 < str_BARAD_CH5_array_5.length; l_1++) {

str_BARAD_CH5_array_5[l_1] = str_BARAD_CH5_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}







const slug_ad26 = input.split('|BAR_CH6_AD2^').pop();

var new_str_BARAD_ch6 = slug_ad26.substring(0, slug_ad26.indexOf("|SAMPLE_CHECK"));

var str_BARAD_CH6_array_6 = new_str_BARAD_ch6.split('$');

for(var l_1 = 0; l_1 < str_BARAD_CH6_array_6.length; l_1++) {

str_BARAD_CH6_array_6[l_1] = str_BARAD_CH6_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}





var id = "Id";



var single_ch1_info = input.split('|SINGLE_BAR')[1];

var str_bar_gain__array_6 = [];

if(single_ch1_info == undefined){

str_bar_gain__array_6[0] = "0";

str_bar_gain__array_6[1] = "0";

str_bar_gain__array_6[2] = "0";

str_bar_gain__array_6[3] = "0";

str_bar_gain__array_6[4] = "0";

str_bar_gain__array_6[5] = "0";

str_bar_gain__array_6[6] = "0";

str_bar_gain__array_6[7] = "0";

}



else{

var bar_gain = single_ch1_info.split('|BAR_GAIN^')[1];

var splitted = bar_gain.split('<CR>');

var bar_gain_ = splitted[0];

var str_bar_gain__array_6 = bar_gain_.split('$');

for(var j_1 = 0; j_1 < str_bar_gain__array_6.length; j_1++) {

str_bar_gain__array_6[j_1] = str_bar_gain__array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}





var single_ch1_info = input.split('|SINGLE_BAR')[1];

var str_ch1_bar_gain__array_6 = [];

if(single_ch1_info == undefined){

str_ch1_bar_gain__array_6[0] = "0";

str_ch1_bar_gain__array_6[1] = "0";

str_ch1_bar_gain__array_6[2] = "0";

str_ch1_bar_gain__array_6[3] = "0";

str_ch1_bar_gain__array_6[4] = "0";

str_ch1_bar_gain__array_6[5] = "0";

str_ch1_bar_gain__array_6[6] = "0";

str_ch1_bar_gain__array_6[7] = "0";

}

else{

var bar_ch1_bit_value = single_ch1_info.split('|BAR_CH1_BIT^')[1];

var splitted = bar_ch1_bit_value.split('<CR>');

var bar_ch1_gain_ = splitted[0];

var str_ch1_bar_gain__array_6 = bar_ch1_gain_.split('$');

for(var j_1 = 0; j_1 < str_ch1_bar_gain__array_6.length; j_1++) {

str_ch1_bar_gain__array_6[j_1] = str_ch1_bar_gain__array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

var single_ch1_info = input.split('|SINGLE_BAR')[1];

var str_ch2_bar_gain__array_6 = [];

if(single_ch1_info == undefined){

str_ch2_bar_gain__array_6[0] = "0";

str_ch2_bar_gain__array_6[1] = "0";

str_ch2_bar_gain__array_6[2] = "0";

str_ch2_bar_gain__array_6[3] = "0";

str_ch2_bar_gain__array_6[4] = "0";

str_ch2_bar_gain__array_6[5] = "0";

str_ch2_bar_gain__array_6[6] = "0";

str_ch2_bar_gain__array_6[7] = "0";

}

else{

var bar_ch2_bit_value = single_ch1_info.split('|BAR_CH2_BIT^')[1];

var splitted = bar_ch2_bit_value.split('<CR>');

var bar_ch2_gain_ = splitted[0];

var str_ch2_bar_gain__array_6 = bar_ch2_gain_.split('$');

for(var j_1 = 0; j_1 < str_ch2_bar_gain__array_6.length; j_1++) {

str_ch2_bar_gain__array_6[j_1] = str_ch2_bar_gain__array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}



var single_ch1_info = input.split('|SINGLE_BAR')[1];

var str_ch3_bar_gain__array_6 = [];

if(single_ch1_info == undefined){

str_ch3_bar_gain__array_6[0] = "0";

str_ch3_bar_gain__array_6[1] = "0";

str_ch3_bar_gain__array_6[2] = "0";

str_ch3_bar_gain__array_6[3] = "0";

str_ch3_bar_gain__array_6[4] = "0";

str_ch3_bar_gain__array_6[5] = "0";

str_ch3_bar_gain__array_6[6] = "0";

str_ch3_bar_gain__array_6[7] = "0";

}

else{

var bar_ch3_bit_value = single_ch1_info.split('|BAR_CH3_BIT^')[1];

var splitted = bar_ch3_bit_value.split('<CR>');

var bar_ch3_gain_ = splitted[0];

var str_ch3_bar_gain__array_6 = bar_ch3_gain_.split('$');

for(var j_1 = 0; j_1 < str_ch3_bar_gain__array_6.length; j_1++) {

str_ch3_bar_gain__array_6[j_1] = str_ch3_bar_gain__array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}



var single_ch1_info = input.split('|SINGLE_BAR')[1];

var str_ch4_bar_gain__array_6 = [];

if(single_ch1_info == undefined){

str_ch4_bar_gain__array_6[0] = "0";

str_ch4_bar_gain__array_6[1] = "0";

str_ch4_bar_gain__array_6[2] = "0";

str_ch4_bar_gain__array_6[3] = "0";

str_ch4_bar_gain__array_6[4] = "0";

str_ch4_bar_gain__array_6[5] = "0";

str_ch4_bar_gain__array_6[6] = "0";

str_ch4_bar_gain__array_6[7] = "0";

}

else{

var bar_ch4_bit_value = single_ch1_info.split('|BAR_CH4_BIT^')[1];

var splitted = bar_ch4_bit_value.split('<CR>');

var bar_ch4_gain_ = splitted[0];

var str_ch4_bar_gain__array_6 = bar_ch4_gain_.split('$');

for(var j_1 = 0; j_1 < str_ch4_bar_gain__array_6.length; j_1++) {

str_ch4_bar_gain__array_6[j_1] = str_ch4_bar_gain__array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}



var single_ch1_info = input.split('|SINGLE_BAR')[1];

var str_ch5_bar_gain__array_6 = [];

if(single_ch1_info == undefined){

str_ch5_bar_gain__array_6[0] = "0";

str_ch5_bar_gain__array_6[1] = "0";

str_ch5_bar_gain__array_6[2] = "0";

str_ch5_bar_gain__array_6[3] = "0";

str_ch5_bar_gain__array_6[4] = "0";

str_ch5_bar_gain__array_6[5] = "0";

str_ch5_bar_gain__array_6[6] = "0";

str_ch5_bar_gain__array_6[7] = "0";

}

else{

var bar_ch5_bit_value = single_ch1_info.split('|BAR_CH5_BIT^')[1];

var splitted = bar_ch5_bit_value.split('<CR>');

var bar_ch5_gain_ = splitted[0];

var str_ch5_bar_gain__array_6 = bar_ch5_gain_.split('$');

for(var j_1 = 0; j_1 < str_ch5_bar_gain__array_6.length; j_1++) {

str_ch5_bar_gain__array_6[j_1] = str_ch5_bar_gain__array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}



var single_ch1_info = input.split('|SINGLE_BAR')[1];

var str_ch6_bar_gain__array_6 = [];

if(single_ch1_info == undefined){

str_ch6_bar_gain__array_6[0] = "0";

str_ch6_bar_gain__array_6[1] = "0";

str_ch6_bar_gain__array_6[2] = "0";

str_ch6_bar_gain__array_6[3] = "0";

str_ch6_bar_gain__array_6[4] = "0";

str_ch6_bar_gain__array_6[5] = "0";

str_ch6_bar_gain__array_6[6] = "0";

str_ch6_bar_gain__array_6[7] = "0";

}

else{

var bar_ch6_bit_value = single_ch1_info.split('|BAR_CH6_BIT^')[1];

var splitted = bar_ch6_bit_value.split('|BAR_SLVL^')[0];

if(splitted.includes("$")){
var str_ch6_bar_gain__array_6 = splitted.split('$');

for(var j_1 = 0; j_1 < str_ch6_bar_gain__array_6.length; j_1++) {

str_ch6_bar_gain__array_6[j_1] = str_ch6_bar_gain__array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}
else{
var str_ch6_bar_gain__array_6 = [];

for(var l_1 = 0; l_1 <= 40; l_1++) {

str_ch6_bar_gain__array_6[l_1] ="0";

}

}

}

var bar_bit = input.split('BAR_BIT^')[1];

if(bar_bit==undefined){

var str_bar_bit__array_6              = [];

 str_bar_bit__array_6[0] = "000 00000";
 str_bar_bit__array_6[1] = "0";

 str_bar_bit__array_6[2] = "0";


}

else{

var splitted = bar_bit.split('<CR>');

var bar_bit_ = splitted[0];

var str_bar_bit__array_6 = bar_bit_.split('$');

for(var j_1 = 0; j_1 < str_bar_bit__array_6.length; j_1++) {

str_bar_bit__array_6[j_1] = str_bar_bit__array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

var bar_ch8_ad = input.split('BAR_CH8_AD^')[1];

if(bar_ch8_ad==undefined){

var str_bar_ch8_array_6              = [];

var str_bar_ch8_array_6 = [];

for(var l_1 = 0; l_1 <= 40; l_1++) {

str_bar_ch8_array_6[l_1] ="0";

}


}

else{

var splitted = bar_ch8_ad.split('<CR>');

var bar_ch8_ad = splitted[0];

var str_bar_ch8_array_6 = bar_ch8_ad.split('$');

for(var j_1 = 0; j_1 < str_bar_ch8_array_6.length; j_1++) {

str_bar_ch8_array_6[j_1] = str_bar_ch8_array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

var bar_ch7_ad = input.split('BAR_CH7_AD^')[1];

if(bar_ch7_ad==undefined){



var str_bar_ch7_array_6              = [];
var str_bar_ch7_array_6 = [];

for(var l_1 = 0; l_1 <= 40; l_1++) {

str_bar_ch7_array_6[l_1] ="0";

}
}

else{

var splitted = bar_ch7_ad.split('<CR>');

var bar_ch7_ad = splitted[0];

var str_bar_ch7_array_6 = bar_ch7_ad.split('$');

for(var j_1 = 0; j_1 < str_bar_ch7_array_6.length; j_1++) {

str_bar_ch7_array_6[j_1] = str_bar_ch7_array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

var bar_ch6_ad = input.split('BAR_CH6_AD^')[1];

var splitted = bar_ch6_ad.split('<CR>');

var bar_ch6_ad = splitted[0];

var str_bar_ch6_array_6 = bar_ch6_ad.split('$');

for(var j_1 = 0; j_1 < str_bar_ch6_array_6.length; j_1++) {

str_bar_ch6_array_6[j_1] = str_bar_ch6_array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var bar_ch5_ad = input.split('BAR_CH5_AD^')[1];

var splitted = bar_ch5_ad.split('<CR>');

var bar_ch5_ad = splitted[0];

var str_bar_ch5_array_6 = bar_ch5_ad.split('$');

for(var j_1 = 0; j_1 < str_bar_ch5_array_6.length; j_1++) {

str_bar_ch5_array_6[j_1] = str_bar_ch5_array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var bar_ch4_ad = input.split('BAR_CH4_AD^')[1];

var splitted = bar_ch4_ad.split('<CR>');

var bar_ch4_ad = splitted[0];

var str_bar_ch4_array_6 = bar_ch4_ad.split('$');

for(var j_1 = 0; j_1 < str_bar_ch4_array_6.length; j_1++) {

str_bar_ch4_array_6[j_1] = str_bar_ch4_array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var bar_ch3_ad = input.split('BAR_CH3_AD^')[1];

var splitted = bar_ch3_ad.split('<CR>');

var bar_ch3_ad = splitted[0];

var str_bar_ch3_array_6 = bar_ch3_ad.split('$');

for(var j_1 = 0; j_1 < str_bar_ch3_array_6.length; j_1++) {

str_bar_ch3_array_6[j_1] = str_bar_ch3_array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var bar_ch2_ad = input.split('BAR_CH2_AD^')[1];

var splitted = bar_ch2_ad.split('<CR>');

var bar_ch2_ad = splitted[0];

var str_bar_ch2_array_6 = bar_ch2_ad.split('$');

for(var j_1 = 0; j_1 < str_bar_ch2_array_6.length; j_1++) {

str_bar_ch2_array_6[j_1] = str_bar_ch2_array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var bar_ch1_ad = input.split('BAR_CH1_AD^')[1];

var splitted = bar_ch1_ad.split('<CR>');

var bar_ch1_ad = splitted[0];

var str_bar_ch1_array_6 = bar_ch1_ad.split('$');

for(var j_1 = 0; j_1 < str_bar_ch1_array_6.length; j_1++) {

str_bar_ch1_array_6[j_1] = str_bar_ch1_array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var bar_white = input.split('|BAR_WHITE^')[1];

var splitted = bar_white.split('<CR>');

var bar_white_ = splitted[0];

var str_bar_white__array_6 = bar_white_.split('$');

for(var j_1 = 0; j_1 < str_bar_white__array_6.length; j_1++) {

str_bar_white__array_6[j_1] = str_bar_white__array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var bar_black = input.split('|BAR_BLACK^')[1];

var splitted = bar_black.split('<CR>');

var bar_black_ = splitted[0];

var str_bar_black__array_6 = bar_black_.split('$');

for(var j_1 = 0; j_1 < str_bar_black__array_6.length; j_1++) {

str_bar_black__array_6[j_1] = str_bar_black__array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var bar_slvl = input.split('|BAR_SLVL^')[1];

var splitted = bar_slvl.split('<CR>');

var bar_slvl_ = splitted[0];

var str_bar_slvl__array_6 = bar_slvl_.split('$');

for(var j_1 = 0; j_1 < str_bar_slvl__array_6.length; j_1++) {

str_bar_slvl__array_6[j_1] = str_bar_slvl__array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}





var bar_gain_single = input.split('SINGLE_BAR')[1];

var str_bar_single_gain__array_6 = [];



var splitted_single = bar_gain_single.split('BAR_GAIN^')[1];

var splitted1_single_btn = splitted_single.split('|BAR_WHITE^')[0];

if(splitted1_single_btn.includes("$")){
var str_bar_single_gain__array_6 = splitted1_single_btn.split('$');

for(var j_1 = 0; j_1 < str_bar_single_gain__array_6.length; j_1++) {

str_bar_single_gain__array_6[j_1] = str_bar_single_gain__array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}

else{
var str_bar_single_gain__array_6 = [];

for(var l_1 = 0; l_1 <= 6; l_1++) {

str_bar_single_gain__array_6[l_1] ="0";

}

}






var bar_gain_single = input.split('SINGLE_BAR')[1];

var str_bar_single_white__array_6 = [];





var splitted_white_single = bar_gain_single.split('|BAR_WHITE^')[1];

var splitted1_white_single_btn = splitted_white_single.split('|BAR_BLACK^')[0];

if(splitted1_white_single_btn.includes("$")){
var str_bar_single_white__array_6 = splitted1_white_single_btn.split('$');

for(var j_1 = 0; j_1 < str_bar_single_white__array_6.length; j_1++) {

str_bar_single_white__array_6[j_1] = str_bar_single_white__array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var str_bar_single_white__array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_bar_single_white__array_6[l_1] ="0";

}

}





var bar_gain_single = input.split('SINGLE_BAR')[1];


var str_bar_single_black__array_6 = [];



var splitted_black_single = bar_gain_single.split('BAR_BLACK^')[1];
var splitted_black_single_btn = splitted_black_single.split('|BAR_CH1_BIT^')[0];


if(splitted_black_single_btn.includes("$")){
var str_bar_single_black__array_6 = splitted_black_single_btn.split('$');

for(var j_1 = 0; j_1 < str_bar_single_black__array_6.length; j_1++) {

str_bar_single_black__array_6[j_1] = str_bar_single_black__array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var str_bar_single_black__array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_bar_single_black__array_6[l_1] ="0";

}

}




var bar_gain_single = input.split('SINGLE_BAR')[1];

var str_bar_single_slvl__array_6 = [];



var splitted_slvl_single = bar_gain_single.split('BAR_SLVL^')[1];

var splitted1_slvl_single_btn = splitted_slvl_single.split('|BAR_CH1_AD^')[0];

if(splitted1_slvl_single_btn.includes("$")){
var str_bar_single_slvl__array_6 = splitted1_slvl_single_btn.split('$');

for(var j_1 = 0; j_1 < str_bar_single_slvl__array_6.length; j_1++) {

str_bar_single_slvl__array_6[j_1] = str_bar_single_slvl__array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var str_bar_single_slvl__array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_bar_single_slvl__array_6[l_1] ="0";

}
}






if(input.includes("SINGLE_CH1")){

var single_ch1_info = input.split('SINGLE_CH1_INFO');

var ch1_name_split = single_ch1_info[1];

var ch1_name = ch1_name_split.split('NAME^')[1];

var ch1_namevalue = ch1_name[0]+ch1_name[1]+ch1_name[2]+ch1_name[3];    

var ch1_unit = ch1_name_split.split('UNIT^')[1];

var ch1_unitvalue = ch1_unit[0]+ch1_unit[1]+ch1_unit[2]+ch1_unit[3]+ch1_unit[4];

var ch1_result = ch1_name_split.split('RSLT^')[1];

var ch1_resultvalue = ch1_result[0]+ch1_result[1]+ch1_result[2]+ch1_result[3]+ch1_result[4]+ch1_result[5];

var single_ch1_lotno = input.split('SINGLE_CH1_LOT_INFO');

var ch1_lot_split = single_ch1_lotno[1];

var lot_ch1 = ch1_lot_split.split('LOT^')[1];

var lotvalue_ch1 = lot_ch1[0]+lot_ch1[1]+lot_ch1[2]+lot_ch1[3]+lot_ch1[4]+lot_ch1[5]+lot_ch1[6];

var lotvalue_ch1 =  "<"+lotvalue_ch1+">";



var ch1 = "CH";

var val1= "1";

}

else{



ch1_novalue = "0";

}





if(input.includes("MULTI_INFO")){



var multi_info_name = input.split('MULTI_INFO');

var multi_info_name_split = multi_info_name[1];

var multi_info_name = multi_info_name_split.split('NAME^')[1];

var multi_info_namevalue = multi_info_name[0]+multi_info_name[1]+multi_info_name[2]+multi_info_name[3]+multi_info_name[4]+multi_info_name[5]+multi_info_name[6]+multi_info_name[7];



var multi_info_lot = multi_info_name_split.split('LOT^')[1];

var multi_info_lotvalue = multi_info_lot[0]+multi_info_lot[1]+multi_info_lot[2]+multi_info_lot[3]+multi_info_lot[4]+multi_info_lot[5];    

var multi_info_lotvalue =  "<"+multi_info_lotvalue+">";





}

else{

multi_info_lotvalue="<>";

}









if(input.includes("MULTI_CH1")){





var multi_ch1_info = input.split('MULTI_CH1_INFO');

var multi_ch1_name_split = multi_ch1_info[1];

var multi_ch1_no_split = multi_ch1_info[1];

var multi_ch1_no = multi_ch1_no_split.split('NO^')[1];

var multi_ch1_novalue = multi_ch1_no.split('')[0];        

var multi_ch1_name = multi_ch1_name_split.split('NAME^')[1];

var multi_ch1_namevalue = multi_ch1_name[0]+multi_ch1_name[1]+multi_ch1_name[2]+multi_ch1_name[3];    

var multi_ch1_unit = multi_ch1_name_split.split('UNIT^')[1];

var multi_ch1_unitvalue = multi_ch1_unit[0]+multi_ch1_unit[1]+multi_ch1_unit[2]+multi_ch1_unit[3]+multi_ch1_unit[4];

var multi_ch1_result = multi_ch1_name_split.split('RSLT^')[1];

var multi_ch1_resultvalue = multi_ch1_result[0]+multi_ch1_result[1]+multi_ch1_result[2]+multi_ch1_result[3]+multi_ch1_result[4]+multi_ch1_result[5];

var multi_ch1 = "CH";

var multi_val1= "1";

var multi_ch1_mw = multi_ch1_no_split.split('M_WL^')[1];

var multi_ch1_mwvalue = multi_ch1_mw.split('')[0];



var multi_ch1_mwhtq = multi_ch1_no_split.split('M_WHT_Q^')[1];

var multi_ch1_mwhtqvalue = multi_ch1_mwhtq.split('')[0];





var multi_ch1_mwhtr = multi_ch1_no_split.split('M_WHT_R^')[1];

var multi_ch1_mwhtrvalue = multi_ch1_mwhtr.split('')[0];



var multi_ch1_mblkq = multi_ch1_no_split.split('M_BLK_Q^')[1];

var multi_ch1_mblkqvalue = multi_ch1_mblkq.split('')[0];



var multi_ch1_mblkr = multi_ch1_no_split.split('M_BLK_R^')[1];

var multi_ch1_mblkrvalue = multi_ch1_mblkr.split('')[0];



var multi_ch1_moptcurve = multi_ch1_no_split.split('M_OPT_CURVE^')[1];

var multi_ch1_moptcurvevalue = multi_ch1_moptcurve.split('')[0];



var multi_ch1_boptcurve = multi_ch1_no_split.split('M_OPT_CURVE^')[1];



 if(multi_ch1_boptcurve==undefined){

var multi_ch1_boptcurve1 = "0";

  var multi_ch1_boptcurve2 = "0";

}

else{



var multi_ch1_boptcurve1 = multi_ch1_boptcurve.split('')[0];



  if(multi_ch1_boptcurve1.length == 1){

  var multi_ch1_boptcurve2 = "0";

}else{

		  var multi_ch1_boptcurve2 = multi_ch1_boptcurve1.split('$')[1].split('')[0];

}

}



var multi_ch1_sw = multi_ch1_no_split.split('S_WL^')[1];

var multi_ch1_swvalue = multi_ch1_sw.split('')[0];

var multi_ch1_swhtq = multi_ch1_no_split.split('S_WHT_Q^')[1];

var multi_ch1_swhtqvalue = multi_ch1_swhtq.split('')[0];

var multi_ch1_swhtr = multi_ch1_no_split.split('S_WHT_R^')[1];

var multi_ch1_swhtrvalue = multi_ch1_swhtr.split('')[0];

var multi_ch1_sblkq = multi_ch1_no_split.split('S_BLK_Q^')[1];

var multi_ch1_sblkqvalue = multi_ch1_sblkq.split('')[0];

var multi_ch1_sblkr = multi_ch1_no_split.split('S_BLK_R^')[1];

var multi_ch1_sblkrvalue = multi_ch1_sblkr.split('')[0];

var multi_ch1_soptcurve = multi_ch1_no_split.split('S_OPT_CURVE^')[1];

var multi_ch1_soptcurvevalue =multi_ch1_soptcurve.split('$')[0];



var multi_ch1_soptcurve = multi_ch1_no_split.split('S_OPT_CURVE^')[1];



var multi_ch1_soptcurve1 = multi_ch1_soptcurve.split('')[0];

if(multi_ch1_soptcurve1.length == 1){

var multi_ch1_soptcurve2 = 0;

}

else{

		  var multi_ch1_soptcurve2 = multi_ch1_soptcurve1.split('$')[1].split('')[0];



}



var multi_ch1_dks = multi_ch1_name_split.split('dK/S^')[1];

var multi_ch1_dksvalue = multi_ch1_dks[0]+multi_ch1_dks[1]+multi_ch1_dks[2]+multi_ch1_dks[3]+multi_ch1_dks[4]+multi_ch1_dks[5]+multi_ch1_dks[6]+multi_ch1_dks[7]+multi_ch1_dks[8];    



var multi_ch1_C0 = multi_ch1_name_split.split('C0^')[1];

var multi_ch1_C0value = multi_ch1_C0[0]+multi_ch1_C0[1]+multi_ch1_C0[2]+multi_ch1_C0[3]+multi_ch1_C0[4]+multi_ch1_C0[5]+multi_ch1_C0[6]+multi_ch1_C0[7]+multi_ch1_C0[8];

var multi_ch1_C1 = multi_ch1_name_split.split('C1^')[1];

var multi_ch1_C1value = multi_ch1_C1[0]+multi_ch1_C1[1]+multi_ch1_C1[2]+multi_ch1_C1[3]+multi_ch1_C1[4]+multi_ch1_C1[5]+multi_ch1_C1[6]+multi_ch1_C1[7]+multi_ch1_C1[8];

var multi_ch1_C2 = multi_ch1_name_split.split('C2^')[1];

var multi_ch1_C2value = multi_ch1_C2[0]+multi_ch1_C2[1]+multi_ch1_C2[2]+multi_ch1_C2[3]+multi_ch1_C2[4]+multi_ch1_C2[5]+multi_ch1_C2[6]+multi_ch1_C2[7]+multi_ch1_C2[8];

var multi_ch1_C3 = multi_ch1_name_split.split('C3^')[1];

var multi_ch1_C3value = multi_ch1_C3[0]+multi_ch1_C3[1]+multi_ch1_C3[2]+multi_ch1_C3[3]+multi_ch1_C3[4]+multi_ch1_C3[5]+multi_ch1_C3[6]+multi_ch1_C3[7]+multi_ch1_C3[8];

var multi_ch1_C4 = multi_ch1_name_split.split('C4^')[1];

var multi_ch1_C4value = multi_ch1_C4[0]+multi_ch1_C4[1]+multi_ch1_C4[2]+multi_ch1_C4[3]+multi_ch1_C4[4]+multi_ch1_C4[5]+multi_ch1_C4[6]+multi_ch1_C4[7]+multi_ch1_C4[8];

var multi_ch1_C5 = multi_ch1_name_split.split('C5^')[1];

var multi_ch1_C5value = multi_ch1_C5[0]+multi_ch1_C5[1]+multi_ch1_C5[2]+multi_ch1_C5[3]+multi_ch1_C5[4]+multi_ch1_C5[5]+multi_ch1_C5[6]+multi_ch1_C5[7]+multi_ch1_C5[8];

var multi_ch1_C6 = multi_ch1_name_split.split('C6^')[1];

var multi_ch1_C6value = multi_ch1_C6[0]+multi_ch1_C6[1]+multi_ch1_C6[2]+multi_ch1_C6[3]+multi_ch1_C6[4]+multi_ch1_C6[5]+multi_ch1_C6[6]+multi_ch1_C6[7]+multi_ch1_C6[8];

var multi_ch1_C7 = multi_ch1_name_split.split('C7^')[1];

var multi_ch1_C7value = multi_ch1_C7[0]+multi_ch1_C7[1]+multi_ch1_C7[2]+multi_ch1_C7[3]+multi_ch1_C7[4]+multi_ch1_C7[5]+multi_ch1_C7[6]+multi_ch1_C7[7]+multi_ch1_C7[8];

var multi_ch1_C8 = multi_ch1_name_split.split('C8^')[1];

var multi_ch1_C8value = multi_ch1_C8[0]+multi_ch1_C8[1]+multi_ch1_C8[2]+multi_ch1_C8[3]+multi_ch1_C8[4]+multi_ch1_C8[5]+multi_ch1_C8[6]+multi_ch1_C8[7]+multi_ch1_C8[8];





var multi_ch1_temp = multi_ch1_name_split.split('C1_ENV_TEMP^')[1];

var multi_ch1_tempvalue = multi_ch1_temp[0]+multi_ch1_temp[1]+multi_ch1_temp[2]+multi_ch1_temp[3]+multi_ch1_temp[4]+multi_ch1_temp[5]+multi_ch1_temp[6]+multi_ch1_temp[7]+multi_ch1_temp[8];



var multi_ch1_humidity = multi_ch1_name_split.split('C1_ENV_HUM^')[1];

var multi_ch1_humidityvalue = multi_ch1_humidity[0]+multi_ch1_humidity[1]+multi_ch1_humidity[2]+multi_ch1_humidity[3]+multi_ch1_humidity[4]+multi_ch1_humidity[5]+multi_ch1_humidity[6]+multi_ch1_humidity[7]+multi_ch1_humidity[8];



var multi_ch1_ke = multi_ch1_name_split.split('C1_ENV_Ke^')[1];

var multi_ch1_kevalue = multi_ch1_ke[0]+multi_ch1_ke[1]+multi_ch1_ke[2]+multi_ch1_ke[3]+multi_ch1_ke[4]+multi_ch1_ke[5]+multi_ch1_ke[6]+multi_ch1_ke[7]+multi_ch1_ke[8];



var multi_ch1_ke = multi_ch1_name_split.split('C1_ENV_Ke^')[1];

var multi_ch1_kevalue = multi_ch1_ke[0]+multi_ch1_ke[1]+multi_ch1_ke[2]+multi_ch1_ke[3]+multi_ch1_ke[4]+multi_ch1_ke[5]+multi_ch1_ke[6]+multi_ch1_ke[7]+multi_ch1_ke[8];



var multi_ch1_dev_a = multi_ch1_name_split.split('C2_DEV_A^')[1];

var multi_ch1_dev_a_value = multi_ch1_dev_a[0]+multi_ch1_dev_a[1]+multi_ch1_dev_a[2]+multi_ch1_dev_a[3]+multi_ch1_dev_a[4]+multi_ch1_dev_a[5]+multi_ch1_dev_a[6]+multi_ch1_dev_a[7]+multi_ch1_dev_a[8];



var multi_ch1_dev_b = multi_ch1_name_split.split('C2_DEV_B^')[1];

var multi_ch1_dev_b_value = multi_ch1_dev_b[0]+multi_ch1_dev_b[1]+multi_ch1_dev_b[2]+multi_ch1_dev_b[3]+multi_ch1_dev_b[4]+multi_ch1_dev_b[5]+multi_ch1_dev_b[6]+multi_ch1_dev_b[7]+multi_ch1_dev_b[8];



var multi_ch1_deg_a = multi_ch1_name_split.split('C3_DEG_A^')[1];

var multi_ch1_deg_a_value = multi_ch1_deg_a[0]+multi_ch1_deg_a[1]+multi_ch1_deg_a[2]+multi_ch1_deg_a[3]+multi_ch1_deg_a[4]+multi_ch1_deg_a[5]+multi_ch1_deg_a[6]+multi_ch1_deg_a[7]+multi_ch1_deg_a[8];



var multi_ch1_deg_b = multi_ch1_name_split.split('C3_DEG_B^')[1];

var multi_ch1_deg_b_value = multi_ch1_deg_b[0]+multi_ch1_deg_b[1]+multi_ch1_deg_b[2]+multi_ch1_deg_b[3]+multi_ch1_deg_b[4]+multi_ch1_deg_b[5]+multi_ch1_deg_b[6]+multi_ch1_deg_b[7]+multi_ch1_deg_b[8];





var multi_ch1_lot_ch = multi_ch1_name_split.split('C4_LOT_CH^')[1];

var multi_ch1_lot_ch_value = multi_ch1_lot_ch[0]+multi_ch1_lot_ch[1]+multi_ch1_lot_ch[2]+multi_ch1_lot_ch[3]+multi_ch1_lot_ch[4]+multi_ch1_lot_ch[5]+multi_ch1_lot_ch[6]+multi_ch1_lot_ch[7]+multi_ch1_lot_ch[8];



var multi_ch1_cal_a = multi_ch1_name_split.split('C5_CAL_A^')[1];

var multi_ch1_cal_a_value = multi_ch1_cal_a[0]+multi_ch1_cal_a[1]+multi_ch1_cal_a[2]+multi_ch1_cal_a[3]+multi_ch1_cal_a[4]+multi_ch1_cal_a[5]+multi_ch1_cal_a[6]+multi_ch1_cal_a[7]+multi_ch1_cal_a[8];



var multi_ch1_cal_b = multi_ch1_name_split.split('C5_CAL_B^')[1];

var multi_ch1_cal_b_value = multi_ch1_cal_b[0]+multi_ch1_cal_b[1]+multi_ch1_cal_b[2]+multi_ch1_cal_b[3]+multi_ch1_cal_b[4]+multi_ch1_cal_b[5]+multi_ch1_cal_b[6]+multi_ch1_cal_b[7]+multi_ch1_cal_b[8];





var multi_ch1_ktemp = multi_ch1_name_split.split('C6_Ktemp^')[1];

var multi_ch1_ktemp_value = multi_ch1_ktemp[0]+multi_ch1_ktemp[1]+multi_ch1_ktemp[2]+multi_ch1_ktemp[3]+multi_ch1_ktemp[4]+multi_ch1_ktemp[5]+multi_ch1_ktemp[6]+multi_ch1_ktemp[7]+multi_ch1_ktemp[8];





var multi_ch1_kunit = multi_ch1_name_split.split('C7_Kunit^')[1];

var multi_ch1_kunit_value = multi_ch1_kunit[0]+multi_ch1_kunit[1]+multi_ch1_kunit[2]+multi_ch1_kunit[3]+multi_ch1_kunit[4]+multi_ch1_kunit[5]+multi_ch1_kunit[6]+multi_ch1_kunit[7]+multi_ch1_kunit[8];





var multi_ch1_corr_a = multi_ch1_name_split.split('C8_CORR_A^')[1];

var multi_ch1_corr_a_value = multi_ch1_corr_a[0]+multi_ch1_corr_a[1]+multi_ch1_corr_a[2]+multi_ch1_corr_a[3]+multi_ch1_corr_a[4]+multi_ch1_corr_a[5]+multi_ch1_corr_a[6]+multi_ch1_corr_a[7]+multi_ch1_corr_a[8];





var multi_ch1_corr_b = multi_ch1_name_split.split('C8_CORR_B^')[1];

var multi_ch1_corr_b_value = multi_ch1_corr_b[0]+multi_ch1_corr_b[1]+multi_ch1_corr_b[2]+multi_ch1_corr_b[3]+multi_ch1_corr_b[4]+multi_ch1_corr_b[5]+multi_ch1_corr_b[6]+multi_ch1_corr_b[7]+multi_ch1_corr_b[8];



var single_multi_ch1_k_s = input.split('MULTI_CH1_INFO');

var multi_ch1_k_s_split = single_multi_ch1_k_s[1];

var k_s_multi_ch1 = multi_ch1_k_s_split.split('|K/S^')[1];

var k_s_multi_ch1_btn = k_s_multi_ch1.split('|dK/S^')[0];

if(k_s_multi_ch1_btn.includes("$")){

var multi_str_k_s_array_1 = k_s_multi_ch1_btn.split('$');

for(var j_1 = 0; j_1 < multi_str_k_s_array_1.length; j_1++) {

multi_str_k_s_array_1[j_1] = multi_str_k_s_array_1[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}



else{

var multi_str_k_s_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_k_s_array_1[l_1] ="0";

}



}

var single_multi_ch1_ = input.split('MULTI_CH1_INFO');

var multi_ch1_rm_split = single_multi_ch1_k_s[1];

var rm_multi_ch1 = multi_ch1_rm_split.split('|MAIN_R^')[1];
var rm_multi_ch1_btn = rm_multi_ch1.split('|SUB_R^')[0];


if(rm_multi_ch1_btn.includes("$")){
var multi_str_rm_array_1 = rm_multi_ch1_btn.split('$');

for(var k_1 = 0; k_1 < multi_str_rm_array_1.length; k_1++) {

multi_str_rm_array_1[k_1] = multi_str_rm_array_1[k_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var multi_str_rm_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rm_array_1[l_1] ="0";

}
}




var multi_ch1_rm_split = single_multi_ch1_k_s[1];

var rm_multi_ch1 = multi_ch1_rm_split.split('|MAIN_R^')[1];

var rm_multi_ch1_btn = rm_multi_ch1.split('|SUB_R^')[0];

if(rm_multi_ch1_btn.includes("$")){

var multi_str_rm_array_1 = rm_multi_ch1_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_rm_array_1.length; l_1++) {

multi_str_rm_array_1[l_1] = multi_str_rm_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



}



else{

var multi_str_rm_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rm_array_1[l_1] ="0";

}



}





var multi_ch1_tm_split = single_multi_ch1_k_s[1];

var multi_ch1_tm_split = single_multi_ch1_k_s[1];

var tm_multi_ch1 = multi_ch1_tm_split.split('|MEAS_TIME^')[1];

var tm_multi_ch1_btn = tm_multi_ch1.split('|MAIN_R^')[0];



if(tm_multi_ch1_btn.includes("$")){

var multi_str_tm_array_1 = tm_multi_ch1_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_tm_array_1.length; l_1++) {

multi_str_tm_array_1[l_1] = multi_str_tm_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

else{

var multi_str_tm_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_tm_array_1[l_1] ="0";

}



}



var multi_ch1_rs_split = single_multi_ch1_k_s[1];

var rs_multi_ch1 = multi_ch1_rs_split.split('|SUB_R^')[1];

var rs_multi_ch1_btn = rs_multi_ch1.split('|MEAS_R^')[0];

if(rs_multi_ch1_btn.includes("$")){

var multi_str_rs_array_1 = rs_multi_ch1_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_rs_array_1.length; l_1++) {

multi_str_rs_array_1[l_1] = multi_str_rs_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

else{

var multi_str_rs_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rs_array_1[l_1] ="0";

}

}







var multi_ch1_mr_split = single_multi_ch1_k_s[1];

var mr_multi_ch1 = multi_ch1_mr_split.split('|MEAS_R^')[1];                    

var mr_multi_ch1_btn =mr_multi_ch1.split('|K/S^')[0];      

if(mr_multi_ch1_btn.includes("$")){

var multi_str_mr_array_1 = mr_multi_ch1_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_mr_array_1.length; l_1++) {

multi_str_mr_array_1[l_1] = multi_str_mr_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

else



{



var multi_str_mr_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_mr_array_1[l_1] ="0";

}



}        





var ch1_time_split = single_multi_ch1_k_s[1];

var time_ch1 = ch1_time_split.split('|TIME^')[1];

var splitted = time_ch1.split('F7');

var multi_str_time_array_1 = time_ch1.split('$');

for(var l_1 = 0; l_1 < multi_str_time_array_1.length; l_1++) {

multi_str_time_array_1[l_1] = multi_str_time_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}            



var ch1_mnsmp_split = single_multi_ch1_k_s[1];

var mnsmp_ch1 = ch1_mnsmp_split.split('|M_NSMP^')[1];

var splitted = mnsmp_ch1.split('F7');

var multi_str_mnsmp_array_1 = mnsmp_ch1.split('$');

for(var l_1 = 0; l_1 < multi_str_mnsmp_array_1.length; l_1++) {

multi_str_mnsmp_array_1[l_1] = multi_str_mnsmp_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch1_mdsmp_split = single_multi_ch1_k_s[1];

var mdsmp_ch1 = ch1_mdsmp_split.split('|M_DSMP^')[1];

var splitted = mdsmp_ch1.split('F7');

var multi_str_mdsmp_array_1 = mdsmp_ch1.split('$');

for(var l_1 = 0; l_1 < multi_str_mdsmp_array_1.length; l_1++) {

multi_str_mdsmp_array_1[l_1] = multi_str_mdsmp_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch1_mnref_split = single_multi_ch1_k_s[1];

var mnref_ch1 = ch1_mnref_split.split('|M_NREF^')[1];

var splitted = mnref_ch1.split('F7');

var multi_str_mnref_array_1 = mnref_ch1.split('$');

for(var l_1 = 0; l_1 < multi_str_mnref_array_1.length; l_1++) {

multi_str_mnref_array_1[l_1] = multi_str_mnref_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch1_mdref_split = single_multi_ch1_k_s[1];

var mdref_ch1 = ch1_mdref_split.split('|M_DREF^')[1];

var splitted = mdref_ch1.split('F7');

var multi_str_mdref_array_1 = mdref_ch1.split('$');

for(var l_1 = 0; l_1 < multi_str_mdref_array_1.length; l_1++) {

multi_str_mdref_array_1[l_1] = multi_str_mdref_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch1_snsmp_split = single_multi_ch1_k_s[1];

var snsmp_ch1 = ch1_snsmp_split.split('|S_NSMP^')[1];

var splitted = snsmp_ch1.split('F7');

var multi_str_snsmp_array_1 = snsmp_ch1.split('$');

for(var l_1 = 0; l_1 < multi_str_snsmp_array_1.length; l_1++) {

multi_str_snsmp_array_1[l_1] = multi_str_snsmp_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch1_sdsmp_split = single_multi_ch1_k_s[1];

var sdsmp_ch1 = ch1_sdsmp_split.split('|S_DSMP^')[1];

var splitted = sdsmp_ch1.split('F7');

var multi_str_sdsmp_array_1 = sdsmp_ch1.split('$');

for(var l_1 = 0; l_1 < multi_str_sdsmp_array_1.length; l_1++) {

multi_str_sdsmp_array_1[l_1] = multi_str_sdsmp_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch1_snref_split = single_multi_ch1_k_s[1];

var snref_ch1 = ch1_snref_split.split('|S_NREF^')[1];

var splitted = snref_ch1.split('F7');

var multi_str_snref_array_1 = snref_ch1.split('$');

for(var l_1 = 0; l_1 < multi_str_snref_array_1.length; l_1++) {

multi_str_snref_array_1[l_1] = multi_str_snref_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch1_sderf_split = single_multi_ch1_k_s[1];

var sderf_ch1 = ch1_sderf_split.split('|S_DREF^')[1];

var splitted = sderf_ch1.split('F7');

var multi_str_sderf_array_1 = sderf_ch1.split('$');

for(var l_1 = 0; l_1 < multi_str_sderf_array_1.length; l_1++) {

multi_str_sderf_array_1[l_1] = multi_str_sderf_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}



else{



multi_ch1_novalue = "0";            

multi_ch1_dksvalue=            "0";



multi_ch1_C0value=       "0";

multi_ch1_tempvalue= "0.000";

multi_ch1_humidityvalue=          "0.00";

multi_ch1_kevalue=       "0";

multi_ch1_C1value=       "0";

multi_ch1_dev_a_value=             "0";

multi_ch1_dev_b_value=             "0";

multi_ch1_C2value=       "0";

multi_ch1_deg_a_value=             "0";

multi_ch1_deg_b_value=             "0";

multi_ch1_C3value=       "0";

multi_ch1_lot_ch_value=             "0";

multi_ch1_C4value=       "0";

multi_ch1_cal_a_value=               "0";

multi_ch1_cal_b_value=              "0";

multi_ch1_C5value=       "0";

multi_ch1_ktemp_value=            "0";

multi_ch1_C6value=       "0";

multi_ch1_kunit_value=               "0";

multi_ch1_C7value=       "0";

multi_ch1_corr_a_value=            "0";

multi_ch1_corr_b_value=            "0";

multi_ch1_C8value=       "0";





multi_ch1_mwhtqvalue="0";

multi_ch1_mwhtrvalue="0";

multi_ch1_mblkqvalue="0";

multi_ch1_mblkrvalue="0";

multi_ch1_moptcurvevalue="0";

multi_ch1_swhtqvalue="0";

multi_ch1_swhtrvalue="0";

multi_ch1_sblkqvalue="0";

multi_ch1_sblkrvalue="0";

multi_ch1_soptcurvevalue="0";



multi_ch1_soptcurve2="0";

multi_ch1_boptcurve2="0";



var multi_str_tm_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_tm_array_1[l_1] ="0";

}



var multi_str_rm_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rm_array_1[l_1] ="0";

}



var multi_str_mr_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_mr_array_1[l_1] ="0";

}



var multi_str_rs_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rs_array_1[l_1] ="0";

}

var multi_str_k_s_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_k_s_array_1[l_1] ="0";

}



var multi_str_time_array_1 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_time_array_1[l_1] ="0";

}



var multi_str_mnsmp_array_1 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mnsmp_array_1[l_1] ="0";

}



var multi_str_mdsmp_array_1 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mdsmp_array_1[l_1] ="0";

}



var multi_str_mnref_array_1 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mnref_array_1[l_1] ="0";

}



var multi_str_mdref_array_1 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mdref_array_1[l_1] ="0";

}



var multi_str_snsmp_array_1 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_snsmp_array_1[l_1] ="0";

}



var multi_str_sdsmp_array_1 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_sdsmp_array_1[l_1] ="0";

}



var multi_str_snref_array_1 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_snref_array_1[l_1] ="0";

}

var multi_str_sderf_array_1 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_sderf_array_1[l_1] ="0";

}

}







if(input.includes("MULTI_CH2")){





var multi_ch2_info = input.split('MULTI_CH2_INFO');

var multi_ch2_name_split = multi_ch2_info[1];

var multi_ch2_no_split = multi_ch2_info[1];

var multi_ch2_no = multi_ch2_no_split.split('NO^')[1];

var multi_ch2_novalue = multi_ch2_no.split('')[0];

var multi_ch2_name = multi_ch2_name_split.split('NAME^')[1];

var multi_ch2_namevalue = multi_ch2_name[0]+multi_ch2_name[1]+multi_ch2_name[2]+multi_ch2_name[3];    

var multi_ch2_unit = multi_ch2_name_split.split('UNIT^')[1];

var multi_ch2_unitvalue = multi_ch2_unit[0]+multi_ch2_unit[1]+multi_ch2_unit[2]+multi_ch2_unit[3]+multi_ch2_unit[4];

var multi_ch2_result = multi_ch2_name_split.split('RSLT^')[1];

var multi_ch2_resultvalue = multi_ch2_result[0]+multi_ch2_result[1]+multi_ch2_result[2]+multi_ch2_result[3]+multi_ch2_result[4]+multi_ch2_result[5];

var multi_ch2 = "CH";

var multi_val2= "2";



var multi_ch2_mw = multi_ch2_no_split.split('M_WL^')[1];

var multi_ch2_mwvalue = multi_ch2_mw.split('')[0];



var multi_ch2_mwhtq = multi_ch2_no_split.split('M_WHT_Q^')[1];

var multi_ch2_mwhtqvalue = multi_ch2_mwhtq.split('')[0];





var multi_ch2_mwhtr = multi_ch2_no_split.split('M_WHT_R^')[1];

var multi_ch2_mwhtrvalue = multi_ch2_mwhtr.split('')[0];



var multi_ch2_mblkq = multi_ch2_no_split.split('M_BLK_Q^')[1];

var multi_ch2_mblkqvalue = multi_ch2_mblkq.split('')[0];



var multi_ch2_mblkr = multi_ch2_no_split.split('M_BLK_R^')[1];

var multi_ch2_mblkrvalue = multi_ch2_mblkr.split('')[0];



var multi_ch2_moptcurve = multi_ch1_no_split.split('M_OPT_CURVE^')[1];



var multi_ch2_moptcurvevalue = multi_ch2_moptcurve.split('$')[0];



var ch2_boptcurve1 = multi_ch2_moptcurve.split('')[0];

if(ch2_boptcurve1.length == 1){

var ch2_boptcurve2 ="0";

}else{

var ch2_boptcurve2 = ch2_boptcurve1.split('$')[1].split('')[0];



}





var multi_ch2_boptcurve = multi_ch1_no_split.split('M_OPT_CURVE^')[1];

var multi_ch2_boptcurve1 = multi_ch2_boptcurve.split('')[0];



 if(ch2_boptcurve1.length == 1){

var multi_ch2_boptcurve2 ="0";

}else{

var multi_ch2_boptcurve2 = multi_ch2_boptcurve1.split('$')[1].split('')[0];

}

var multi_ch2_sw = multi_ch2_no_split.split('S_WL^')[1];

var multi_ch2_swvalue = multi_ch2_sw.split('')[0];

var multi_ch2_swhtq = multi_ch2_no_split.split('S_WHT_Q^')[1];

var multi_ch2_swhtqvalue = multi_ch2_swhtq.split('')[0];

var multi_ch2_swhtr = multi_ch2_no_split.split('S_WHT_R^')[1];

var multi_ch2_swhtrvalue = multi_ch2_swhtr.split('')[0];

var multi_ch2_sblkq = multi_ch2_no_split.split('S_BLK_Q^')[1];

var multi_ch2_sblkqvalue = multi_ch2_sblkq.split('')[0];

var multi_ch2_sblkr = multi_ch2_no_split.split('S_BLK_R^')[1];

var multi_ch2_sblkrvalue = multi_ch2_sblkr.split('')[0];

var multi_ch2_soptcurve = multi_ch2_no_split.split('S_OPT_CURVE^')[1];

var multi_ch2_soptcurvevalue = multi_ch2_soptcurve.split('$')[0];



var multi_ch2_soptcurve = multi_ch2_no_split.split('S_OPT_CURVE^')[1];

var multi_ch2_soptcurve1 = multi_ch2_soptcurve.split('')[0];

if(multi_ch2_soptcurve1.length == 1){

var multi_ch2_soptcurve2  = "0";

}

else{

var multi_ch2_soptcurve2 = multi_ch2_soptcurve1.split('$')[1].split('')[0];

}



var multi_ch2_dks = multi_ch2_name_split.split('dK/S^')[1];

var multi_ch2_dksvalue = multi_ch2_dks[0]+multi_ch2_dks[1]+multi_ch2_dks[2]+multi_ch2_dks[3]+multi_ch2_dks[4]+multi_ch2_dks[5]+multi_ch2_dks[6]+multi_ch2_dks[7]+multi_ch2_dks[8];    

var multi_ch2_C0 = multi_ch2_name_split.split('C0^')[1];

var multi_ch2_C0value = multi_ch2_C0[0]+multi_ch2_C0[1]+multi_ch2_C0[2]+multi_ch2_C0[3]+multi_ch2_C0[4]+multi_ch2_C0[5]+multi_ch2_C0[6]+multi_ch2_C0[7]+multi_ch2_C0[8];

var multi_ch2_C1 = multi_ch2_name_split.split('C1^')[1];

var multi_ch2_C1value = multi_ch2_C1[0]+multi_ch2_C1[1]+multi_ch2_C1[2]+multi_ch2_C1[3]+multi_ch2_C1[4]+multi_ch2_C1[5]+multi_ch2_C1[6]+multi_ch2_C1[7]+multi_ch2_C1[8];

var multi_ch2_C2 = multi_ch2_name_split.split('C2^')[1];

var multi_ch2_C2value = multi_ch2_C2[0]+multi_ch2_C2[1]+multi_ch2_C2[2]+multi_ch2_C2[3]+multi_ch2_C2[4]+multi_ch2_C2[5]+multi_ch2_C2[6]+multi_ch2_C2[7]+multi_ch2_C2[8];

var multi_ch2_C3 = multi_ch2_name_split.split('C3^')[1];

var multi_ch2_C3value = multi_ch2_C3[0]+multi_ch2_C3[1]+multi_ch2_C3[2]+multi_ch2_C3[3]+multi_ch2_C3[4]+multi_ch2_C3[5]+multi_ch2_C3[6]+multi_ch2_C3[7]+multi_ch2_C3[8];

var multi_ch2_C4 = multi_ch2_name_split.split('C4^')[1];

var multi_ch2_C4value = multi_ch2_C4[0]+multi_ch2_C4[1]+multi_ch2_C4[2]+multi_ch2_C4[3]+multi_ch2_C4[4]+multi_ch2_C4[5]+multi_ch2_C4[6]+multi_ch2_C4[7]+multi_ch2_C4[8];

var multi_ch2_C5 = multi_ch2_name_split.split('C5^')[1];

var multi_ch2_C5value = multi_ch2_C5[0]+multi_ch2_C5[1]+multi_ch2_C5[2]+multi_ch2_C5[3]+multi_ch2_C5[4]+multi_ch2_C5[5]+multi_ch2_C5[6]+multi_ch2_C5[7]+multi_ch2_C5[8];

var multi_ch2_C6 = multi_ch2_name_split.split('C6^')[1];

var multi_ch2_C6value = multi_ch2_C6[0]+multi_ch2_C6[1]+multi_ch2_C6[2]+multi_ch2_C6[3]+multi_ch2_C6[4]+multi_ch2_C6[5]+multi_ch2_C6[6]+multi_ch2_C6[7]+multi_ch2_C6[8];

var multi_ch2_C7 = multi_ch2_name_split.split('C7^')[1];

var multi_ch2_C7value = multi_ch2_C7[0]+multi_ch2_C7[1]+multi_ch2_C7[2]+multi_ch2_C7[3]+multi_ch2_C7[4]+multi_ch2_C7[5]+multi_ch2_C7[6]+multi_ch2_C7[7]+multi_ch2_C7[8];

var multi_ch2_C8 = multi_ch2_name_split.split('C8^')[1];

var multi_ch2_C8value = multi_ch2_C8[0]+multi_ch2_C8[1]+multi_ch2_C8[2]+multi_ch2_C8[3]+multi_ch2_C8[4]+multi_ch2_C8[5]+multi_ch2_C8[6]+multi_ch2_C8[7]+multi_ch2_C8[8];





var multi_ch2_temp = multi_ch2_name_split.split('C1_ENV_TEMP^')[1];

var multi_ch2_tempvalue = multi_ch2_temp[0]+multi_ch2_temp[1]+multi_ch2_temp[2]+multi_ch2_temp[3]+multi_ch2_temp[4]+multi_ch2_temp[5]+multi_ch2_temp[6]+multi_ch2_temp[7]+multi_ch2_temp[8];



var multi_ch2_humidity = multi_ch2_name_split.split('C1_ENV_HUM^')[1];

var multi_ch2_humidityvalue = multi_ch2_humidity[0]+multi_ch2_humidity[1]+multi_ch2_humidity[2]+multi_ch2_humidity[3]+multi_ch2_humidity[4]+multi_ch2_humidity[5]+multi_ch2_humidity[6]+multi_ch2_humidity[7]+multi_ch2_humidity[8];



var multi_ch2_ke = multi_ch2_name_split.split('C1_ENV_Ke^')[1];

var multi_ch2_kevalue = multi_ch2_ke[0]+multi_ch2_ke[1]+multi_ch2_ke[2]+multi_ch2_ke[3]+multi_ch2_ke[4]+multi_ch2_ke[5]+multi_ch2_ke[6]+multi_ch2_ke[7]+multi_ch2_ke[8];



var multi_ch2_ke = multi_ch2_name_split.split('C1_ENV_Ke^')[1];

var multi_ch2_kevalue = multi_ch2_ke[0]+multi_ch2_ke[1]+multi_ch2_ke[2]+multi_ch2_ke[3]+multi_ch2_ke[4]+multi_ch2_ke[5]+multi_ch2_ke[6]+multi_ch2_ke[7]+multi_ch2_ke[8];



var multi_ch2_dev_a = multi_ch2_name_split.split('C2_DEV_A^')[1];

var multi_ch2_dev_a_value = multi_ch2_dev_a[0]+multi_ch2_dev_a[1]+multi_ch2_dev_a[2]+multi_ch2_dev_a[3]+multi_ch2_dev_a[4]+multi_ch2_dev_a[5]+multi_ch2_dev_a[6]+multi_ch2_dev_a[7]+multi_ch2_dev_a[8];



var multi_ch2_dev_b = multi_ch2_name_split.split('C2_DEV_B^')[1];

var multi_ch2_dev_b_value = multi_ch2_dev_b[0]+multi_ch2_dev_b[1]+multi_ch2_dev_b[2]+multi_ch2_dev_b[3]+multi_ch2_dev_b[4]+multi_ch2_dev_b[5]+multi_ch2_dev_b[6]+multi_ch2_dev_b[7]+multi_ch2_dev_b[8];



var multi_ch2_deg_a = multi_ch2_name_split.split('C3_DEG_A^')[1];

var multi_ch2_deg_a_value = multi_ch2_deg_a[0]+multi_ch2_deg_a[1]+multi_ch2_deg_a[2]+multi_ch2_deg_a[3]+multi_ch2_deg_a[4]+multi_ch2_deg_a[5]+multi_ch2_deg_a[6]+multi_ch2_deg_a[7]+multi_ch2_deg_a[8];



var multi_ch2_deg_b = multi_ch2_name_split.split('C3_DEG_B^')[1];

var multi_ch2_deg_b_value = multi_ch2_deg_b[0]+multi_ch2_deg_b[1]+multi_ch2_deg_b[2]+multi_ch2_deg_b[3]+multi_ch2_deg_b[4]+multi_ch2_deg_b[5]+multi_ch2_deg_b[6]+multi_ch2_deg_b[7]+multi_ch2_deg_b[8];





var multi_ch2_lot_ch = multi_ch2_name_split.split('C4_LOT_CH^')[1];

var multi_ch2_lot_ch_value = multi_ch2_lot_ch[0]+multi_ch2_lot_ch[1]+multi_ch2_lot_ch[2]+multi_ch2_lot_ch[3]+multi_ch2_lot_ch[4]+multi_ch2_lot_ch[5]+multi_ch2_lot_ch[6]+multi_ch2_lot_ch[7]+multi_ch2_lot_ch[8];



var multi_ch2_cal_a = multi_ch2_name_split.split('C5_CAL_A^')[1];

var multi_ch2_cal_a_value = multi_ch2_cal_a[0]+multi_ch2_cal_a[1]+multi_ch2_cal_a[2]+multi_ch2_cal_a[3]+multi_ch2_cal_a[4]+multi_ch2_cal_a[5]+multi_ch2_cal_a[6]+multi_ch2_cal_a[7]+multi_ch2_cal_a[8];



var multi_ch2_cal_b = multi_ch2_name_split.split('C5_CAL_B^')[1];

var multi_ch2_cal_b_value = multi_ch2_cal_b[0]+multi_ch2_cal_b[1]+multi_ch2_cal_b[2]+multi_ch2_cal_b[3]+multi_ch2_cal_b[4]+multi_ch2_cal_b[5]+multi_ch2_cal_b[6]+multi_ch2_cal_b[7]+multi_ch2_cal_b[8];





var multi_ch2_ktemp = multi_ch2_name_split.split('C6_Ktemp^')[1];

var multi_ch2_ktemp_value = multi_ch2_ktemp[0]+multi_ch2_ktemp[1]+multi_ch2_ktemp[2]+multi_ch2_ktemp[3]+multi_ch2_ktemp[4]+multi_ch2_ktemp[5]+multi_ch2_ktemp[6]+multi_ch2_ktemp[7]+multi_ch2_ktemp[8];





var multi_ch2_kunit = multi_ch2_name_split.split('C7_Kunit^')[1];

var multi_ch2_kunit_value = multi_ch2_kunit[0]+multi_ch2_kunit[1]+multi_ch2_kunit[2]+multi_ch2_kunit[3]+multi_ch2_kunit[4]+multi_ch2_kunit[5]+multi_ch2_kunit[6]+multi_ch2_kunit[7]+multi_ch2_kunit[8];





var multi_ch2_corr_a = multi_ch2_name_split.split('C8_CORR_A^')[1];

var multi_ch2_corr_a_value = multi_ch2_corr_a[0]+multi_ch2_corr_a[1]+multi_ch2_corr_a[2]+multi_ch2_corr_a[3]+multi_ch2_corr_a[4]+multi_ch2_corr_a[5]+multi_ch2_corr_a[6]+multi_ch2_corr_a[7]+multi_ch2_corr_a[8];





var multi_ch2_corr_b = multi_ch2_name_split.split('C8_CORR_B^')[1];

var multi_ch2_corr_b_value = multi_ch2_corr_b[0]+multi_ch2_corr_b[1]+multi_ch2_corr_b[2]+multi_ch2_corr_b[3]+multi_ch2_corr_b[4]+multi_ch2_corr_b[5]+multi_ch2_corr_b[6]+multi_ch2_corr_b[7]+multi_ch2_corr_b[8];



var single_multi_ch2_k_s = input.split('MULTI_CH2_INFO');

var multi_ch2_k_s_split = single_multi_ch2_k_s[1];

var k_s_multi_ch2 = multi_ch2_k_s_split.split('|K/S^')[1];

var splitted = k_s_multi_ch2.split('F7');

var k_s = splitted[0];

var multi_str_k_s_array_2 = k_s.split('$');

for(var j_1 = 0; j_1 < multi_str_k_s_array_2.length; j_1++) {

multi_str_k_s_array_2[j_1] = multi_str_k_s_array_2[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var single_multi_ch2_ = input.split('MULTI_CH2_INFO');

var multi_ch2_rm_split = single_multi_ch2_k_s[1];

var rm_multi_ch2 = multi_ch2_rm_split.split('|MAIN_R^')[1];
var rm_multi_ch2_btn = rm_multi_ch2.split('|SUB_R^')[0];
if(rm_multi_ch2_btn.includes("$")){
var multi_str_rm_array_2 = rm_multi_ch2_btn.split('$');

for(var k_1 = 0; k_1 < multi_str_rm_array_2.length; k_1++) {

multi_str_rm_array_2[k_1] = multi_str_rm_array_2[k_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var multi_str_rm_array_2 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rm_array_2[l_1] ="0";

}

}



var multi_ch2_rm_split = single_multi_ch2_k_s[1];

var rm_multi_ch2 = multi_ch2_rm_split.split('|MAIN_R^')[1];

var rm_multi_ch2_btn = rm_multi_ch2.split('|SUB_R^')[0];

if(rm_multi_ch2_btn.includes("$")){
var multi_str_rm_array_2 = rm_multi_ch2_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_rm_array_2.length; l_1++) {

multi_str_rm_array_2[l_1] = multi_str_rm_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var multi_str_rm_array_2 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rm_array_2[l_1] ="0";

}
}





var multi_ch2_tm_split = single_multi_ch2_k_s[1];

var tm_multi_ch2 = multi_ch2_tm_split.split('|MEAS_TIME^')[1];

var tm_multi_ch2_btn = tm_multi_ch2.split('|MAIN_R^')[0];



if(tm_multi_ch2_btn.includes("$")){

var multi_str_tm_array_2 = tm_multi_ch2_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_tm_array_2.length; l_1++) {

multi_str_tm_array_2[l_1] = multi_str_tm_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

else{

var multi_str_tm_array_2 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_tm_array_2[l_1] ="0";

}





}



var multi_ch2_rs_split = single_multi_ch2_k_s[1];

var rs_multi_ch2 = multi_ch2_rs_split.split('|SUB_R^')[1];
var rs_multi_ch2_btn = rs_multi_ch2.split('|MEAS_R^')[0];

if(rs_multi_ch2_btn.includes("$")){
var multi_str_rs_array_2 = rs_multi_ch2_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_rs_array_2.length; l_1++) {

multi_str_rs_array_2[l_1] = multi_str_rs_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
 else{
var multi_str_rs_array_2 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rs_array_2[l_1] ="0";

}
}





var multi_ch2_mr_split = single_multi_ch2_k_s[1];

var mr_multi_ch2 = multi_ch2_mr_split.split('|MEAS_R^')[1];

var mr_multi_ch2_btn = mr_multi_ch2.split('|K/S^')[0];

if(mr_multi_ch2_btn.includes("$")){

var multi_str_mr_array_2 = mr_multi_ch2_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_mr_array_2.length; l_1++) {

multi_str_mr_array_2[l_1] = multi_str_mr_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

else{

var multi_str_mr_array_2 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_mr_array_2[l_1] ="0";

}



}



var ch2_time_split = single_multi_ch2_k_s[1];

var time_ch2 = ch2_time_split.split('|TIME^')[1];

var splitted = time_ch2.split('F7');

var multi_str_time_array_2 = time_ch2.split('$');

for(var l_1 = 0; l_1 < multi_str_time_array_2.length; l_1++) {

multi_str_time_array_2[l_1] = multi_str_time_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}            



var ch2_mnsmp_split = single_multi_ch2_k_s[1];

var mnsmp_ch2 = ch2_mnsmp_split.split('|M_NSMP^')[1];

var splitted = mnsmp_ch2.split('F7');

var multi_str_mnsmp_array_2 = mnsmp_ch2.split('$');

for(var l_1 = 0; l_1 < multi_str_mnsmp_array_2.length; l_1++) {

multi_str_mnsmp_array_2[l_1] = multi_str_mnsmp_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch2_mdsmp_split = single_multi_ch2_k_s[1];

var mdsmp_ch2 = ch2_mdsmp_split.split('|M_DSMP^')[1];

var splitted = mdsmp_ch2.split('F7');

var multi_str_mdsmp_array_2 = mdsmp_ch2.split('$');

for(var l_1 = 0; l_1 < multi_str_mdsmp_array_2.length; l_1++) {

multi_str_mdsmp_array_2[l_1] = multi_str_mdsmp_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch2_mnref_split = single_multi_ch2_k_s[1];

var mnref_ch2 = ch2_mnref_split.split('|M_NREF^')[1];

var splitted = mnref_ch2.split('F7');

var multi_str_mnref_array_2 = mnref_ch2.split('$');

for(var l_1 = 0; l_1 < multi_str_mnref_array_2.length; l_1++) {

multi_str_mnref_array_2[l_1] = multi_str_mnref_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch2_mdref_split = single_multi_ch2_k_s[1];

var mdref_ch2 = ch2_mdref_split.split('|M_DREF^')[1];

var splitted = mdref_ch2.split('F7');

var multi_str_mdref_array_2 = mdref_ch2.split('$');

for(var l_1 = 0; l_1 < multi_str_mdref_array_2.length; l_1++) {

multi_str_mdref_array_2[l_1] = multi_str_mdref_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch2_snsmp_split = single_multi_ch2_k_s[1];

var snsmp_ch2 = ch2_snsmp_split.split('|S_NSMP^')[1];

var splitted = snsmp_ch2.split('F7');

var multi_str_snsmp_array_2 = snsmp_ch2.split('$');

for(var l_1 = 0; l_1 < multi_str_snsmp_array_2.length; l_1++) {

multi_str_snsmp_array_2[l_1] = multi_str_snsmp_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch2_sdsmp_split = single_multi_ch2_k_s[1];

var sdsmp_ch2 = ch2_sdsmp_split.split('|S_DSMP^')[1];

var splitted = sdsmp_ch2.split('F7');

var multi_str_sdsmp_array_2 = sdsmp_ch2.split('$');

for(var l_1 = 0; l_1 < multi_str_sdsmp_array_2.length; l_1++) {

multi_str_sdsmp_array_2[l_1] = multi_str_sdsmp_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch2_snref_split = single_multi_ch2_k_s[1];

var snref_ch2 = ch2_snref_split.split('|S_NREF^')[1];

var splitted = snref_ch2.split('F7');

var multi_str_snref_array_2 = snref_ch2.split('$');

for(var l_1 = 0; l_1 < multi_str_snref_array_2.length; l_1++) {

multi_str_snref_array_2[l_1] = multi_str_snref_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch2_sderf_split = single_multi_ch2_k_s[1];

var sderf_ch2 = ch2_sderf_split.split('|S_DREF^')[1];

var splitted = sderf_ch2.split('F7');

var multi_str_sderf_array_2 = sderf_ch2.split('$');

for(var l_1 = 0; l_1 < multi_str_sderf_array_2.length; l_1++) {

multi_str_sderf_array_2[l_1] = multi_str_sderf_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



}



else{



multi_ch2_novalue = "0";            

multi_ch2_dksvalue=            "0";



multi_ch2_C0value=       "0";

multi_ch2_tempvalue= "0.000";

multi_ch2_humidityvalue=          "0.00";

multi_ch2_kevalue=       "0";

multi_ch2_C1value=       "0";

multi_ch2_dev_a_value=             "0";

multi_ch2_dev_b_value=             "0";

multi_ch2_C2value=       "0";

multi_ch2_deg_a_value=             "0";

multi_ch2_deg_b_value=             "0";

multi_ch2_C3value=       "0";

multi_ch2_lot_ch_value=             "0";

multi_ch2_C4value=       "0";

multi_ch2_cal_a_value=               "0";

multi_ch2_cal_b_value=              "0";

multi_ch2_C5value=       "0";

multi_ch2_ktemp_value=            "0";

multi_ch2_C6value=       "0";

multi_ch2_kunit_value=               "0";

multi_ch2_C7value=       "0";

multi_ch2_corr_a_value=            "0";

multi_ch2_corr_b_value=            "0";

multi_ch2_C8value=       "0";





multi_ch2_mwhtqvalue="0";

multi_ch2_mwhtrvalue="0";

multi_ch2_mblkqvalue="0";

multi_ch2_mblkrvalue="0";

multi_ch2_moptcurvevalue="0";

multi_ch2_swhtqvalue="0";

multi_ch2_swhtrvalue="0";

multi_ch2_sblkqvalue="0";

multi_ch2_sblkrvalue="0";

multi_ch2_soptcurvevalue="0";



multi_ch2_soptcurve2="0";

multi_ch2_boptcurve2="0";



var multi_str_tm_array_2 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_tm_array_2[l_1] ="0";

}



var multi_str_rm_array_2 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rm_array_2[l_1] ="0";

}



var multi_str_mr_array_2 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_mr_array_2[l_1] ="0";

}



var multi_str_rs_array_2 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rs_array_2[l_1] ="0";

}

var multi_str_k_s_array_2 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_k_s_array_2[l_1] ="0";

}



var multi_str_time_array_2 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_time_array_2[l_1] ="0";

}



var multi_str_mnsmp_array_2 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mnsmp_array_2[l_1] ="0";

}



var multi_str_mdsmp_array_2 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mdsmp_array_2[l_1] ="0";

}



var multi_str_mnref_array_2 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mnref_array_2[l_1] ="0";

}



var multi_str_mdref_array_2 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mdref_array_2[l_1] ="0";

}



var multi_str_snsmp_array_2 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_snsmp_array_2[l_1] ="0";

}



var multi_str_sdsmp_array_2 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_sdsmp_array_2[l_1] ="0";

}



var multi_str_snref_array_2 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_snref_array_2[l_1] ="0";

}

var multi_str_sderf_array_2 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_sderf_array_2[l_1] ="0";

}

}





if(input.includes("MULTI_CH3")){





var multi_ch3_info = input.split('MULTI_CH3_INFO');

var multi_ch3_name_split = multi_ch3_info[1];

var multi_ch3_no_split = multi_ch3_info[1];

var multi_ch3_no = multi_ch3_no_split.split('NO^')[1];

var multi_ch3_novalue = multi_ch3_no.split('')[0];;                      

var multi_ch3_name = multi_ch3_name_split.split('NAME^')[1];

var multi_ch3_namevalue = multi_ch3_name[0]+multi_ch3_name[1]+multi_ch3_name[2]+multi_ch3_name[3];    

var multi_ch3_unit = multi_ch3_name_split.split('UNIT^')[1];

var multi_ch3_unitvalue = multi_ch3_unit[0]+multi_ch3_unit[1]+multi_ch3_unit[2]+multi_ch3_unit[3]+multi_ch3_unit[4];

var multi_ch3_result = multi_ch3_name_split.split('RSLT^')[1];

var multi_ch3_resultvalue = multi_ch3_result[0]+multi_ch3_result[1]+multi_ch3_result[2]+multi_ch3_result[3]+multi_ch3_result[4]+multi_ch3_result[5];

var multi_ch3 = "CH";

var multi_val3= "3";



var multi_ch3_mw = multi_ch3_no_split.split('M_WL^')[1];

var multi_ch3_mwvalue = multi_ch3_mw.split('')[0];



var multi_ch3_mwhtq = multi_ch3_no_split.split('M_WHT_Q^')[1];

var multi_ch3_mwhtqvalue = multi_ch3_mwhtq.split('')[0];





var multi_ch3_mwhtr = multi_ch3_no_split.split('M_WHT_R^')[1];

var multi_ch3_mwhtrvalue = multi_ch3_mwhtr.split('')[0];



var multi_ch3_mblkq = multi_ch3_no_split.split('M_BLK_Q^')[1];

var multi_ch3_mblkqvalue = multi_ch3_mblkq.split('')[0];



var multi_ch3_mblkr = multi_ch3_no_split.split('M_BLK_R^')[1];

var multi_ch3_mblkrvalue = multi_ch3_mblkr.split('')[0];



var multi_ch3_moptcurve = multi_ch3_no_split.split('M_OPT_CURVE^')[1];

var multi_ch3_moptcurvevalue = multi_ch3_moptcurve.split('$')[0];





var multi_ch3_boptcurve = multi_ch3_no_split.split('M_OPT_CURVE^')[1];

var multi_ch3_boptcurve1 = multi_ch3_boptcurve.split('')[0];

  if(multi_ch3_boptcurve1.length == 1){

var multi_ch3_boptcurve1  = "0";

}

else{

var multi_ch3_boptcurve2 = multi_ch3_boptcurve1.split('$')[1].split('')[0];

}



var multi_ch3_sw = multi_ch3_no_split.split('S_WL^')[1];

var multi_ch3_swvalue = multi_ch3_sw.split('')[0];

var multi_ch3_swhtq = multi_ch3_no_split.split('S_WHT_Q^')[1];

var multi_ch3_swhtqvalue = multi_ch3_swhtq.split('')[0];

var multi_ch3_swhtr = multi_ch3_no_split.split('S_WHT_R^')[1];

var multi_ch3_swhtrvalue = multi_ch3_swhtr.split('')[0];

var multi_ch3_sblkq = multi_ch3_no_split.split('S_BLK_Q^')[1];

var multi_ch3_sblkqvalue = multi_ch3_sblkq.split('')[0];

var multi_ch3_sblkr = multi_ch3_no_split.split('S_BLK_R^')[1];

var multi_ch3_sblkrvalue =multi_ch3_sblkr.split('')[0];

var multi_ch3_soptcurve = multi_ch3_no_split.split('S_OPT_CURVE^')[1];

var multi_ch3_soptcurvevalue = multi_ch3_soptcurve.split('$')[0];



var multi_ch3_soptcurve = multi_ch3_no_split.split('S_OPT_CURVE^')[1];

var multi_ch3_soptcurve1 = multi_ch3_soptcurve.split('')[0];

  if(multi_ch3_soptcurve1.length == 1){

var multi_ch3_soptcurve2  = "0";

}

else{

var multi_ch3_soptcurve2 = multi_ch3_soptcurve1.split('$')[1].split('')[0];

}



var multi_ch3_dks = multi_ch3_name_split.split('dK/S^')[1];

var multi_ch3_dksvalue = multi_ch3_dks[0]+multi_ch3_dks[1]+multi_ch3_dks[2]+multi_ch3_dks[3]+multi_ch3_dks[4]+multi_ch3_dks[5]+multi_ch3_dks[6]+multi_ch3_dks[7]+multi_ch3_dks[8];    



var multi_ch3_C0 = multi_ch3_name_split.split('C0^')[1];

var multi_ch3_C0value = multi_ch3_C0[0]+multi_ch3_C0[1]+multi_ch3_C0[2]+multi_ch3_C0[3]+multi_ch3_C0[4]+multi_ch3_C0[5]+multi_ch3_C0[6]+multi_ch3_C0[7]+multi_ch3_C0[8];

var multi_ch3_C1 = multi_ch3_name_split.split('C1^')[1];

var multi_ch3_C1value = multi_ch3_C1[0]+multi_ch3_C1[1]+multi_ch3_C1[2]+multi_ch3_C1[3]+multi_ch3_C1[4]+multi_ch3_C1[5]+multi_ch3_C1[6]+multi_ch3_C1[7]+multi_ch3_C1[8];

var multi_ch3_C2 = multi_ch3_name_split.split('C2^')[1];

var multi_ch3_C2value = multi_ch3_C2[0]+multi_ch3_C2[1]+multi_ch3_C2[2]+multi_ch3_C2[3]+multi_ch3_C2[4]+multi_ch3_C2[5]+multi_ch3_C2[6]+multi_ch3_C2[7]+multi_ch3_C2[8];

var multi_ch3_C3 = multi_ch3_name_split.split('C3^')[1];

var multi_ch3_C3value = multi_ch3_C3[0]+multi_ch3_C3[1]+multi_ch3_C3[2]+multi_ch3_C3[3]+multi_ch3_C3[4]+multi_ch3_C3[5]+multi_ch3_C3[6]+multi_ch3_C3[7]+multi_ch3_C3[8];

var multi_ch3_C4 = multi_ch3_name_split.split('C4^')[1];

var multi_ch3_C4value = multi_ch3_C4[0]+multi_ch3_C4[1]+multi_ch3_C4[2]+multi_ch3_C4[3]+multi_ch3_C4[4]+multi_ch3_C4[5]+multi_ch3_C4[6]+multi_ch3_C4[7]+multi_ch3_C4[8];

var multi_ch3_C5 = multi_ch3_name_split.split('C5^')[1];

var multi_ch3_C5value = multi_ch3_C5[0]+multi_ch3_C5[1]+multi_ch3_C5[2]+multi_ch3_C5[3]+multi_ch3_C5[4]+multi_ch3_C5[5]+multi_ch3_C5[6]+multi_ch3_C5[7]+multi_ch3_C5[8];

var multi_ch3_C6 = multi_ch3_name_split.split('C6^')[1];

var multi_ch3_C6value = multi_ch3_C6[0]+multi_ch3_C6[1]+multi_ch3_C6[2]+multi_ch3_C6[3]+multi_ch3_C6[4]+multi_ch3_C6[5]+multi_ch3_C6[6]+multi_ch3_C6[7]+multi_ch3_C6[8];

var multi_ch3_C7 = multi_ch3_name_split.split('C7^')[1];

var multi_ch3_C7value = multi_ch3_C7[0]+multi_ch3_C7[1]+multi_ch3_C7[2]+multi_ch3_C7[3]+multi_ch3_C7[4]+multi_ch3_C7[5]+multi_ch3_C7[6]+multi_ch3_C7[7]+multi_ch3_C7[8];

var multi_ch3_C8 = multi_ch3_name_split.split('C8^')[1];

var multi_ch3_C8value = multi_ch3_C8[0]+multi_ch3_C8[1]+multi_ch3_C8[2]+multi_ch3_C8[3]+multi_ch3_C8[4]+multi_ch3_C8[5]+multi_ch3_C8[6]+multi_ch3_C8[7]+multi_ch3_C8[8];





var multi_ch3_temp = multi_ch3_name_split.split('C1_ENV_TEMP^')[1];

var multi_ch3_tempvalue = multi_ch3_temp[0]+multi_ch3_temp[1]+multi_ch3_temp[2]+multi_ch3_temp[3]+multi_ch3_temp[4]+multi_ch3_temp[5]+multi_ch3_temp[6]+multi_ch3_temp[7]+multi_ch3_temp[8];



var multi_ch3_humidity = multi_ch3_name_split.split('C1_ENV_HUM^')[1];

var multi_ch3_humidityvalue = multi_ch3_humidity[0]+multi_ch3_humidity[1]+multi_ch3_humidity[2]+multi_ch3_humidity[3]+multi_ch3_humidity[4]+multi_ch3_humidity[5]+multi_ch3_humidity[6]+multi_ch3_humidity[7]+multi_ch3_humidity[8];



var multi_ch3_ke = multi_ch3_name_split.split('C1_ENV_Ke^')[1];

var multi_ch3_kevalue = multi_ch3_ke[0]+multi_ch3_ke[1]+multi_ch3_ke[2]+multi_ch3_ke[3]+multi_ch3_ke[4]+multi_ch3_ke[5]+multi_ch3_ke[6]+multi_ch3_ke[7]+multi_ch3_ke[8];



var multi_ch3_ke = multi_ch3_name_split.split('C1_ENV_Ke^')[1];

var multi_ch3_kevalue = multi_ch3_ke[0]+multi_ch3_ke[1]+multi_ch3_ke[2]+multi_ch3_ke[3]+multi_ch3_ke[4]+multi_ch3_ke[5]+multi_ch3_ke[6]+multi_ch3_ke[7]+multi_ch3_ke[8];



var multi_ch3_dev_a = multi_ch3_name_split.split('C2_DEV_A^')[1];

var multi_ch3_dev_a_value = multi_ch3_dev_a[0]+multi_ch3_dev_a[1]+multi_ch3_dev_a[2]+multi_ch3_dev_a[3]+multi_ch3_dev_a[4]+multi_ch3_dev_a[5]+multi_ch3_dev_a[6]+multi_ch3_dev_a[7]+multi_ch3_dev_a[8];



var multi_ch3_dev_b = multi_ch3_name_split.split('C2_DEV_B^')[1];

var multi_ch3_dev_b_value = multi_ch3_dev_b[0]+multi_ch3_dev_b[1]+multi_ch3_dev_b[2]+multi_ch3_dev_b[3]+multi_ch3_dev_b[4]+multi_ch3_dev_b[5]+multi_ch3_dev_b[6]+multi_ch3_dev_b[7]+multi_ch3_dev_b[8];



var multi_ch3_deg_a = multi_ch3_name_split.split('C3_DEG_A^')[1];

var multi_ch3_deg_a_value = multi_ch3_deg_a[0]+multi_ch3_deg_a[1]+multi_ch3_deg_a[2]+multi_ch3_deg_a[3]+multi_ch3_deg_a[4]+multi_ch3_deg_a[5]+multi_ch3_deg_a[6]+multi_ch3_deg_a[7]+multi_ch3_deg_a[8];



var multi_ch3_deg_b = multi_ch3_name_split.split('C3_DEG_B^')[1];

var multi_ch3_deg_b_value = multi_ch3_deg_b[0]+multi_ch3_deg_b[1]+multi_ch3_deg_b[2]+multi_ch3_deg_b[3]+multi_ch3_deg_b[4]+multi_ch3_deg_b[5]+multi_ch3_deg_b[6]+multi_ch3_deg_b[7]+multi_ch3_deg_b[8];





var multi_ch3_lot_ch = multi_ch3_name_split.split('C4_LOT_CH^')[1];

var multi_ch3_lot_ch_value = multi_ch3_lot_ch[0]+multi_ch3_lot_ch[1]+multi_ch3_lot_ch[2]+multi_ch3_lot_ch[3]+multi_ch3_lot_ch[4]+multi_ch3_lot_ch[5]+multi_ch3_lot_ch[6]+multi_ch3_lot_ch[7]+multi_ch3_lot_ch[8];



var multi_ch3_cal_a = multi_ch3_name_split.split('C5_CAL_A^')[1];

var multi_ch3_cal_a_value = multi_ch3_cal_a[0]+multi_ch3_cal_a[1]+multi_ch3_cal_a[2]+multi_ch3_cal_a[3]+multi_ch3_cal_a[4]+multi_ch3_cal_a[5]+multi_ch3_cal_a[6]+multi_ch3_cal_a[7]+multi_ch3_cal_a[8];



var multi_ch3_cal_b = multi_ch3_name_split.split('C5_CAL_B^')[1];

var multi_ch3_cal_b_value = multi_ch3_cal_b[0]+multi_ch3_cal_b[1]+multi_ch3_cal_b[2]+multi_ch3_cal_b[3]+multi_ch3_cal_b[4]+multi_ch3_cal_b[5]+multi_ch3_cal_b[6]+multi_ch3_cal_b[7]+multi_ch3_cal_b[8];





var multi_ch3_ktemp = multi_ch3_name_split.split('C6_Ktemp^')[1];

var multi_ch3_ktemp_value = multi_ch3_ktemp[0]+multi_ch3_ktemp[1]+multi_ch3_ktemp[2]+multi_ch3_ktemp[3]+multi_ch3_ktemp[4]+multi_ch3_ktemp[5]+multi_ch3_ktemp[6]+multi_ch3_ktemp[7]+multi_ch3_ktemp[8];





var multi_ch3_kunit = multi_ch3_name_split.split('C7_Kunit^')[1];

var multi_ch3_kunit_value = multi_ch3_kunit[0]+multi_ch3_kunit[1]+multi_ch3_kunit[2]+multi_ch3_kunit[3]+multi_ch3_kunit[4]+multi_ch3_kunit[5]+multi_ch3_kunit[6]+multi_ch3_kunit[7]+multi_ch3_kunit[8];





var multi_ch3_corr_a = multi_ch3_name_split.split('C8_CORR_A^')[1];

var multi_ch3_corr_a_value = multi_ch3_corr_a[0]+multi_ch3_corr_a[1]+multi_ch3_corr_a[2]+multi_ch3_corr_a[3]+multi_ch3_corr_a[4]+multi_ch3_corr_a[5]+multi_ch3_corr_a[6]+multi_ch3_corr_a[7]+multi_ch3_corr_a[8];





var multi_ch3_corr_b = multi_ch3_name_split.split('C8_CORR_B^')[1];

var multi_ch3_corr_b_value = multi_ch3_corr_b[0]+multi_ch3_corr_b[1]+multi_ch3_corr_b[2]+multi_ch3_corr_b[3]+multi_ch3_corr_b[4]+multi_ch3_corr_b[5]+multi_ch3_corr_b[6]+multi_ch3_corr_b[7]+multi_ch3_corr_b[8];



var single_multi_ch3_k_s = input.split('MULTI_CH3_INFO');

var multi_ch3_k_s_split = single_multi_ch3_k_s[1];

var k_s_multi_ch3 = multi_ch3_k_s_split.split('|K/S^')[1];

var splitted = k_s_multi_ch3.split('F7');

var k_s = splitted[0];

var multi_str_k_s_array_3 = k_s.split('$');

for(var j_1 = 0; j_1 < multi_str_k_s_array_3.length; j_1++) {

multi_str_k_s_array_3[j_1] = multi_str_k_s_array_3[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var single_multi_ch3_ = input.split('MULTI_CH3_INFO');

var multi_ch3_rm_split = single_multi_ch3_k_s[1];

var rm_multi_ch3 = multi_ch3_rm_split.split('|MAIN_R^')[1];
var rm_multi_ch3_btn = rm_multi_ch3.split('|MAIN_R^')[0];

if(rm_multi_ch3_btn.includes("$")){
var multi_str_rm_array_3 = rm_multi_ch3_btn.split('$');

for(var k_1 = 0; k_1 < multi_str_rm_array_3.length; k_1++) {

multi_str_rm_array_3[k_1] = multi_str_rm_array_3[k_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var multi_str_rm_array_3 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rm_array_3[l_1] ="0";

}
}




var multi_ch3_rm_split = single_multi_ch3_k_s[1];

var rm_multi_ch3 = multi_ch3_rm_split.split('|MAIN_R^')[1];
var rm_multi_ch3_btn = rm_multi_ch3.split('|SUB_R^')[0];

 if(rm_multi_ch3_btn.includes("$")){
var multi_str_rm_array_3 = rm.split('$');

for(var l_1 = 0; l_1 < multi_str_rm_array_3.length; l_1++) {

multi_str_rm_array_3[l_1] = multi_str_rm_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var multi_str_rm_array_3 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rm_array_3[l_1] ="0";

}
}






var multi_ch3_tm_split = single_multi_ch3_k_s[1];

var tm_multi_ch3 = multi_ch3_tm_split.split('|MEAS_TIME^')[1];
var tm_multi_ch3_btn = tm_multi_ch3.split('|MAIN_R^')[0];

if(tm_multi_ch3_btn.includes("$")){
var multi_str_tm_array_3 = tm_multi_ch3_btn.split('$');
for(var l_1 = 0; l_1 < multi_str_tm_array_3.length; l_1++) {
multi_str_tm_array_3[l_1] = multi_str_tm_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");
}
}
else{
var multi_str_tm_array_3 = [];
for(var l_1 = 0; l_1 <= 30; l_1++) {
multi_str_tm_array_3[l_1] ="0";
}
}



var multi_ch3_rs_split = single_multi_ch3_k_s[1];

var rs_multi_ch3 = multi_ch3_rs_split.split('|SUB_R^')[1];
var rs_multi_ch3_btn = rs_multi_ch3.split('|MEAS_R^')[0];
if(rs_multi_ch3_btn.includes("$")){
var multi_str_rs_array_3 = rs_multi_ch3_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_rs_array_3.length; l_1++) {

multi_str_rs_array_3[l_1] = multi_str_rs_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}  
}
else{
var multi_str_rs_array_3 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rs_array_3[l_1] ="0";

}

}


var multi_ch3_mr_split = single_multi_ch3_k_s[1];

var mr_multi_ch3 = multi_ch3_mr_split.split('|MEAS_R^')[1];

var mr_multi_ch3_btn = mr_multi_ch3.split('|K/S^')[0];


 if(mr_multi_ch3_btn.includes("$")){
var multi_str_mr_array_3 = mr_multi_ch3_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_mr_array_3.length; l_1++) {

multi_str_mr_array_3[l_1] = multi_str_mr_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}
else{
var multi_str_mr_array_3 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_mr_array_3[l_1] ="0";

}
}





var ch3_time_split = single_multi_ch3_k_s[1];

var time_ch3 = ch3_time_split.split('|TIME^')[1];

var splitted = time_ch3.split('F7');

var multi_str_time_array_3 = time_ch3.split('$');

for(var l_1 = 0; l_1 < multi_str_time_array_3.length; l_1++) {

multi_str_time_array_3[l_1] = multi_str_time_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}            



var ch3_mnsmp_split = single_multi_ch3_k_s[1];

var mnsmp_ch3 = ch3_time_split.split('|M_NSMP^')[1];

var splitted = mnsmp_ch3.split('F7');

var multi_str_mnsmp_array_3 = mnsmp_ch3.split('$');

for(var l_1 = 0; l_1 < multi_str_mnsmp_array_3.length; l_1++) {

multi_str_mnsmp_array_3[l_1] = multi_str_mnsmp_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch3_mdsmp_split = single_multi_ch3_k_s[1];

var mdsmp_ch3 = ch3_mdsmp_split.split('|M_DSMP^')[1];

var splitted = mdsmp_ch3.split('F7');

var multi_str_mdsmp_array_3 = mdsmp_ch3.split('$');

for(var l_1 = 0; l_1 < multi_str_mdsmp_array_3.length; l_1++) {

multi_str_mdsmp_array_3[l_1] = multi_str_mdsmp_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch3_mnref_split = single_multi_ch3_k_s[1];

var mnref_ch3 = ch3_mnref_split.split('|M_NREF^')[1];

var splitted = mnref_ch3.split('F7');

var multi_str_mnref_array_3 = mnref_ch3.split('$');

for(var l_1 = 0; l_1 < multi_str_mnref_array_3.length; l_1++) {

multi_str_mnref_array_3[l_1] = multi_str_mnref_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch3_mdref_split = single_multi_ch3_k_s[1];

var mdref_ch3 = ch3_mdref_split.split('|M_DREF^')[1];

var splitted = mdref_ch3.split('F7');

var multi_str_mdref_array_3 = mdref_ch3.split('$');

for(var l_1 = 0; l_1 < multi_str_mdref_array_3.length; l_1++) {

multi_str_mdref_array_3[l_1] = multi_str_mdref_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch3_snsmp_split = single_multi_ch3_k_s[1];

var snsmp_ch3 = ch3_snsmp_split.split('|S_NSMP^')[1];

var splitted = snsmp_ch3.split('F7');

var multi_str_snsmp_array_3 = snsmp_ch3.split('$');

for(var l_1 = 0; l_1 < multi_str_snsmp_array_3.length; l_1++) {

multi_str_snsmp_array_3[l_1] = multi_str_snsmp_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch3_sdsmp_split = single_multi_ch3_k_s[1];

var sdsmp_ch3 = ch3_sdsmp_split.split('|S_DSMP^')[1];

var splitted = sdsmp_ch3.split('F7');

var multi_str_sdsmp_array_3 = sdsmp_ch3.split('$');

for(var l_1 = 0; l_1 < multi_str_sdsmp_array_3.length; l_1++) {

multi_str_sdsmp_array_3[l_1] = multi_str_sdsmp_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch3_snref_split = single_multi_ch3_k_s[1];

var snref_ch3 = ch3_snref_split.split('|S_NREF^')[1];

var splitted = snref_ch3.split('F7');

var multi_str_snref_array_3 = snref_ch3.split('$');

for(var l_1 = 0; l_1 < multi_str_snref_array_3.length; l_1++) {

multi_str_snref_array_3[l_1] = multi_str_snref_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch3_sderf_split = single_multi_ch3_k_s[1];

var sderf_ch3 = ch3_sderf_split.split('|S_DREF^')[1];

var splitted = sderf_ch3.split('F7');

var multi_str_sderf_array_3 = sderf_ch3.split('$');

for(var l_1 = 0; l_1 < multi_str_sderf_array_3.length; l_1++) {

multi_str_sderf_array_3[l_1] = multi_str_sderf_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}



else{



multi_ch3_novalue = "0";            

multi_ch3_dksvalue=            "0";



multi_ch3_C0value=       "0";

multi_ch3_tempvalue= "0.000";

multi_ch3_humidityvalue=          "0.00";

multi_ch3_kevalue=       "0";

multi_ch3_C1value=       "0";

multi_ch3_dev_a_value=             "0";

multi_ch3_dev_b_value=             "0";

multi_ch3_C2value=       "0";

multi_ch3_deg_a_value=             "0";

multi_ch3_deg_b_value=             "0";

multi_ch3_C3value=       "0";

multi_ch3_lot_ch_value=             "0";

multi_ch3_C4value=       "0";

multi_ch3_cal_a_value=               "0";

multi_ch3_cal_b_value=              "0";

multi_ch3_C5value=       "0";

multi_ch3_ktemp_value=            "0";

multi_ch3_C6value=       "0";

multi_ch3_kunit_value=               "0";

multi_ch3_C7value=       "0";

multi_ch3_corr_a_value=            "0";

multi_ch3_corr_b_value=            "0";

multi_ch3_C8value=       "0";





multi_ch3_mwhtqvalue="0";

multi_ch3_mwhtrvalue="0";

multi_ch3_mblkqvalue="0";

multi_ch3_mblkrvalue="0";

multi_ch3_moptcurvevalue="0";

multi_ch3_swhtqvalue="0";

multi_ch3_swhtrvalue="0";

multi_ch3_sblkqvalue="0";

multi_ch3_sblkrvalue="0";

multi_ch3_soptcurvevalue="0";



multi_ch3_soptcurve2="0";

multi_ch3_boptcurve2="0";



var multi_str_tm_array_3 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_tm_array_3[l_1] ="0";

}



var multi_str_rm_array_3 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rm_array_3[l_1] ="0";

}



var multi_str_mr_array_3 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_mr_array_3[l_1] ="0";

}



var multi_str_rs_array_3 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rs_array_3[l_1] ="0";

}

var multi_str_k_s_array_3 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_k_s_array_3[l_1] ="0";

}

var multi_str_time_array_3 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_time_array_3[l_1] ="0";

}



var multi_str_mnsmp_array_3 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mnsmp_array_3[l_1] ="0";

}



var multi_str_mdsmp_array_3 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mdsmp_array_3[l_1] ="0";

}



var multi_str_mnref_array_3 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mnref_array_3[l_1] ="0";

}



var multi_str_mdref_array_3 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mdref_array_3[l_1] ="0";

}



var multi_str_snsmp_array_3 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_snsmp_array_3[l_1] ="0";

}



var multi_str_sdsmp_array_3 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_sdsmp_array_3[l_1] ="0";

}



var multi_str_snref_array_3 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_snref_array_3[l_1] ="0";

}

var multi_str_sderf_array_3 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_sderf_array_3[l_1] ="0";

}

}





if(input.includes("MULTI_CH4")){

var multi_ch4_info = input.split('MULTI_CH4_INFO');

var multi_ch4_name_split = multi_ch4_info[1];

var multi_ch4_no_split = multi_ch4_info[1];

var multi_ch4_no = multi_ch4_no_split.split('NO^')[1];

var multi_ch4_novalue = multi_ch4_no.split('')[0];        

var multi_ch4_name = multi_ch4_name_split.split('NAME^')[1];

var multi_ch4_namevalue = multi_ch4_name[0]+multi_ch4_name[1]+multi_ch4_name[2]+multi_ch4_name[3];    

var multi_ch4_unit = multi_ch4_name_split.split('UNIT^')[1];

var multi_ch4_unitvalue = multi_ch4_unit[0]+multi_ch4_unit[1]+multi_ch4_unit[2]+multi_ch4_unit[3]+multi_ch4_unit[4];

var multi_ch4_result = multi_ch4_name_split.split('RSLT^')[1];

var multi_ch4_resultvalue = multi_ch4_result[0]+multi_ch4_result[1]+multi_ch4_result[2]+multi_ch4_result[3]+multi_ch4_result[4]+multi_ch4_result[5];

var multi_ch4 = "CH";

var multi_val4= "4";

var multi_ch4_mw = multi_ch4_no_split.split('M_WL^')[1];

var multi_ch4_mwvalue = multi_ch4_mw[0]+multi_ch4_mw[1]+multi_ch4_mw[2]+multi_ch4_mw[3]+multi_ch4_mw[4];



var multi_ch4_mwhtq = multi_ch4_no_split.split('M_WHT_Q^')[1];

var multi_ch4_mwhtqvalue = multi_ch4_mwhtq.split('')[0];





var multi_ch4_mwhtr = multi_ch4_no_split.split('M_WHT_R^')[1];

var multi_ch4_mwhtrvalue = multi_ch4_mwhtr.split('')[0];



var multi_ch4_mblkq = multi_ch4_no_split.split('M_BLK_Q^')[1];

var multi_ch4_mblkqvalue = multi_ch4_mblkq.split('')[0];



var multi_ch4_mblkr = multi_ch4_no_split.split('M_BLK_R^')[1];

var multi_ch4_mblkrvalue = multi_ch4_mblkr.split('')[0];



var multi_ch4_moptcurve = multi_ch4_no_split.split('M_OPT_CURVE^')[1];



if(multi_ch4_moptcurve == undefined ){

var multi_ch4_moptcurvevalue = "0";

}

else{

var multi_ch4_moptcurvevalue = multi_ch4_moptcurve.split('$')[0];

}



var multi_ch4_boptcurve = multi_ch4_no_split.split('M_OPT_CURVE^')[1];

if(multi_ch4_boptcurve == undefined ){



var multi_ch4_boptcurve1 = "0";

var multi_ch4_boptcurve2 = "0";

}

else{

var multi_ch4_boptcurve1 = multi_ch4_boptcurve.split('')[0];

if(multi_ch4_boptcurve2 == undefined){

}

else{

var multi_ch4_boptcurve2 = multi_ch4_boptcurve1.split('$')[1].split('')[0];

}

}

var multi_ch4_sw = multi_ch4_no_split.split('S_WL^')[1];

if(multi_ch4_sw == undefined){

var multi_ch4_swvalue = "0";

}

else{

								var multi_ch4_swvalue = multi_ch4_sw.split('')[0];



}

var multi_ch4_swhtq = multi_ch4_no_split.split('S_WHT_Q^')[1];

if(multi_ch4_swhtq == undefined){

var multi_ch4_swhtqvalue = "0";

}

else{

var multi_ch4_swhtqvalue = multi_ch4_swhtq.split('')[0];

}

var multi_ch4_swhtr = multi_ch4_no_split.split('S_WHT_R^')[1];

if(multi_ch4_swhtr == undefined){

var multi_ch4_swhtrvalue = "0";

}

else{

var multi_ch4_swhtrvalue = multi_ch4_swhtr.split('')[0];

}

var multi_ch4_sblkq = multi_ch4_no_split.split('S_BLK_Q^')[1];

if(multi_ch4_sblkq == undefined){

var multi_ch4_sblkqvalue = "0";

}

else{

var multi_ch4_sblkqvalue =multi_ch4_sblkq.split('')[0];

}

var multi_ch4_sblkr = multi_ch4_no_split.split('S_BLK_R^')[1];

if(multi_ch4_sblkr == undefined){

var multi_ch4_sblkrvalue = "0";

}

else{

var multi_ch4_sblkrvalue = multi_ch4_sblkr.split('')[0];

}

var multi_ch4_soptcurve = multi_ch4_no_split.split('S_OPT_CURVE^')[1];



var multi_ch4_soptcurve = multi_ch4_no_split.split('S_OPT_CURVE^')[1];

if(multi_ch4_soptcurve == undefined){

var multi_ch4_soptcurve1 = "0";

var multi_ch4_soptcurve2 = "0";

var multi_ch4_soptcurvevalue = "0";



}

else{

								var multi_ch4_soptcurvevalue = multi_ch4_soptcurve.split('$')[0];



var multi_ch4_soptcurve1 = multi_ch4_soptcurve.split('')[0];

  if(multi_ch4_soptcurve1 == undefined || multi_ch4_soptcurve1.length == 1){

  var multi_ch4_soptcurve2 = "0";

}

else{

		  var multi_ch4_soptcurve2 = multi_ch4_soptcurve1.split('$')[1].split('')[0];



}



}



var multi_ch4_dks = multi_ch4_name_split.split('dK/S^')[1];

if(multi_ch4_dks == undefined){

var multi_ch4_dksvalue = "0";

}

else{

var multi_ch4_dksvalue = multi_ch4_dks[0]+multi_ch4_dks[1]+multi_ch4_dks[2]+multi_ch4_dks[3]+multi_ch4_dks[4]+multi_ch4_dks[5]+multi_ch4_dks[6]+multi_ch4_dks[7]+multi_ch4_dks[8];    

}

var multi_ch4_C0 = multi_ch4_name_split.split('C0^')[1];

var multi_ch4_C0value = multi_ch4_C0[0]+multi_ch4_C0[1]+multi_ch4_C0[2]+multi_ch4_C0[3]+multi_ch4_C0[4]+multi_ch4_C0[5]+multi_ch4_C0[6]+multi_ch4_C0[7]+multi_ch4_C0[8];

var multi_ch4_C1 = multi_ch4_name_split.split('C1^')[1];

var multi_ch4_C1value = multi_ch4_C1[0]+multi_ch4_C1[1]+multi_ch4_C1[2]+multi_ch4_C1[3]+multi_ch4_C1[4]+multi_ch4_C1[5]+multi_ch4_C1[6]+multi_ch4_C1[7]+multi_ch4_C1[8];

var multi_ch4_C2 = multi_ch4_name_split.split('C2^')[1];

var multi_ch4_C2value = multi_ch4_C2[0]+multi_ch4_C2[1]+multi_ch4_C2[2]+multi_ch4_C2[3]+multi_ch4_C2[4]+multi_ch4_C2[5]+multi_ch4_C2[6]+multi_ch4_C2[7]+multi_ch4_C2[8];

var multi_ch4_C3 = multi_ch4_name_split.split('C3^')[1];

var multi_ch4_C3value = multi_ch4_C3[0]+multi_ch4_C3[1]+multi_ch4_C3[2]+multi_ch4_C3[3]+multi_ch4_C3[4]+multi_ch4_C3[5]+multi_ch4_C3[6]+multi_ch4_C3[7]+multi_ch4_C3[8];

var multi_ch4_C4 = multi_ch4_name_split.split('C4^')[1];

var multi_ch4_C4value = multi_ch4_C4[0]+multi_ch4_C4[1]+multi_ch4_C4[2]+multi_ch4_C4[3]+multi_ch4_C4[4]+multi_ch4_C4[5]+multi_ch4_C4[6]+multi_ch4_C4[7]+multi_ch4_C4[8];

var multi_ch4_C5 = multi_ch4_name_split.split('C5^')[1];

var multi_ch4_C5value = multi_ch4_C5[0]+multi_ch4_C5[1]+multi_ch4_C5[2]+multi_ch4_C5[3]+multi_ch4_C5[4]+multi_ch4_C5[5]+multi_ch4_C5[6]+multi_ch4_C5[7]+multi_ch4_C5[8];

var multi_ch4_C6 = multi_ch4_name_split.split('C6^')[1];

var multi_ch4_C6value = multi_ch4_C6[0]+multi_ch4_C6[1]+multi_ch4_C6[2]+multi_ch4_C6[3]+multi_ch4_C6[4]+multi_ch4_C6[5]+multi_ch4_C6[6]+multi_ch4_C6[7]+multi_ch4_C6[8];

var multi_ch4_C7 = multi_ch4_name_split.split('C7^')[1];

var multi_ch4_C7value = multi_ch4_C7[0]+multi_ch4_C7[1]+multi_ch4_C7[2]+multi_ch4_C7[3]+multi_ch4_C7[4]+multi_ch4_C7[5]+multi_ch4_C7[6]+multi_ch4_C7[7]+multi_ch4_C7[8];

var multi_ch4_C8 = multi_ch4_name_split.split('C8^')[1];

var multi_ch4_C8value = multi_ch4_C8[0]+multi_ch4_C8[1]+multi_ch4_C8[2]+multi_ch4_C8[3]+multi_ch4_C8[4]+multi_ch4_C8[5]+multi_ch4_C8[6]+multi_ch4_C8[7]+multi_ch4_C8[8];





var multi_ch4_temp = multi_ch4_name_split.split('C1_ENV_TEMP^')[1];

var multi_ch4_tempvalue = multi_ch4_temp[0]+multi_ch4_temp[1]+multi_ch4_temp[2]+multi_ch4_temp[3]+multi_ch4_temp[4]+multi_ch4_temp[5]+multi_ch4_temp[6]+multi_ch4_temp[7]+multi_ch4_temp[8];



var multi_ch4_humidity = multi_ch4_name_split.split('C1_ENV_HUM^')[1];

var multi_ch4_humidityvalue = multi_ch4_humidity[0]+multi_ch4_humidity[1]+multi_ch4_humidity[2]+multi_ch4_humidity[3]+multi_ch4_humidity[4]+multi_ch4_humidity[5]+multi_ch4_humidity[6]+multi_ch4_humidity[7]+multi_ch4_humidity[8];



var multi_ch4_ke = multi_ch4_name_split.split('C1_ENV_Ke^')[1];

var multi_ch4_kevalue = multi_ch4_ke[0]+multi_ch4_ke[1]+multi_ch4_ke[2]+multi_ch4_ke[3]+multi_ch4_ke[4]+multi_ch4_ke[5]+multi_ch4_ke[6]+multi_ch4_ke[7]+multi_ch4_ke[8];



var multi_ch4_ke = multi_ch4_name_split.split('C1_ENV_Ke^')[1];

var multi_ch4_kevalue = multi_ch4_ke[0]+multi_ch4_ke[1]+multi_ch4_ke[2]+multi_ch4_ke[3]+multi_ch4_ke[4]+multi_ch4_ke[5]+multi_ch4_ke[6]+multi_ch4_ke[7]+multi_ch4_ke[8];



var multi_ch4_dev_a = multi_ch4_name_split.split('C2_DEV_A^')[1];

var multi_ch4_dev_a_value = multi_ch4_dev_a[0]+multi_ch4_dev_a[1]+multi_ch4_dev_a[2]+multi_ch4_dev_a[3]+multi_ch4_dev_a[4]+multi_ch4_dev_a[5]+multi_ch4_dev_a[6]+multi_ch4_dev_a[7]+multi_ch4_dev_a[8];



var multi_ch4_dev_b = multi_ch4_name_split.split('C2_DEV_B^')[1];

var multi_ch4_dev_b_value = multi_ch4_dev_b[0]+multi_ch4_dev_b[1]+multi_ch4_dev_b[2]+multi_ch4_dev_b[3]+multi_ch4_dev_b[4]+multi_ch4_dev_b[5]+multi_ch4_dev_b[6]+multi_ch4_dev_b[7]+multi_ch4_dev_b[8];



var multi_ch4_deg_a = multi_ch4_name_split.split('C3_DEG_A^')[1];

var multi_ch4_deg_a_value = multi_ch4_deg_a[0]+multi_ch4_deg_a[1]+multi_ch4_deg_a[2]+multi_ch4_deg_a[3]+multi_ch4_deg_a[4]+multi_ch4_deg_a[5]+multi_ch4_deg_a[6]+multi_ch4_deg_a[7]+multi_ch4_deg_a[8];



var multi_ch4_deg_b = multi_ch4_name_split.split('C3_DEG_B^')[1];

var multi_ch4_deg_b_value = multi_ch4_deg_b[0]+multi_ch4_deg_b[1]+multi_ch4_deg_b[2]+multi_ch4_deg_b[3]+multi_ch4_deg_b[4]+multi_ch4_deg_b[5]+multi_ch4_deg_b[6]+multi_ch4_deg_b[7]+multi_ch4_deg_b[8];





var multi_ch4_lot_ch = multi_ch4_name_split.split('C4_LOT_CH^')[1];

var multi_ch4_lot_ch_value = multi_ch4_lot_ch[0]+multi_ch4_lot_ch[1]+multi_ch4_lot_ch[2]+multi_ch4_lot_ch[3]+multi_ch4_lot_ch[4]+multi_ch4_lot_ch[5]+multi_ch4_lot_ch[6]+multi_ch4_lot_ch[7]+multi_ch4_lot_ch[8];



var multi_ch4_cal_a = multi_ch4_name_split.split('C5_CAL_A^')[1];

var multi_ch4_cal_a_value = multi_ch4_cal_a[0]+multi_ch4_cal_a[1]+multi_ch4_cal_a[2]+multi_ch4_cal_a[3]+multi_ch4_cal_a[4]+multi_ch4_cal_a[5]+multi_ch4_cal_a[6]+multi_ch4_cal_a[7]+multi_ch4_cal_a[8];



var multi_ch4_cal_b = multi_ch4_name_split.split('C5_CAL_B^')[1];

var multi_ch4_cal_b_value = multi_ch4_cal_b[0]+multi_ch4_cal_b[1]+multi_ch4_cal_b[2]+multi_ch4_cal_b[3]+multi_ch4_cal_b[4]+multi_ch4_cal_b[5]+multi_ch4_cal_b[6]+multi_ch4_cal_b[7]+multi_ch4_cal_b[8];





var multi_ch4_ktemp = multi_ch4_name_split.split('C6_Ktemp^')[1];

var multi_ch4_ktemp_value = multi_ch4_ktemp[0]+multi_ch4_ktemp[1]+multi_ch4_ktemp[2]+multi_ch4_ktemp[3]+multi_ch4_ktemp[4]+multi_ch4_ktemp[5]+multi_ch4_ktemp[6]+multi_ch4_ktemp[7]+multi_ch4_ktemp[8];





var multi_ch4_kunit = multi_ch4_name_split.split('C7_Kunit^')[1];

var multi_ch4_kunit_value = multi_ch4_kunit[0]+multi_ch4_kunit[1]+multi_ch4_kunit[2]+multi_ch4_kunit[3]+multi_ch4_kunit[4]+multi_ch4_kunit[5]+multi_ch4_kunit[6]+multi_ch4_kunit[7]+multi_ch4_kunit[8];





var multi_ch4_corr_a = multi_ch4_name_split.split('C8_CORR_A^')[1];

var multi_ch4_corr_a_value = multi_ch4_corr_a[0]+multi_ch4_corr_a[1]+multi_ch4_corr_a[2]+multi_ch4_corr_a[3]+multi_ch4_corr_a[4]+multi_ch4_corr_a[5]+multi_ch4_corr_a[6]+multi_ch4_corr_a[7]+multi_ch4_corr_a[8];





var multi_ch4_corr_b = multi_ch4_name_split.split('C8_CORR_B^')[1];

var multi_ch4_corr_b_value = multi_ch4_corr_b[0]+multi_ch4_corr_b[1]+multi_ch4_corr_b[2]+multi_ch4_corr_b[3]+multi_ch4_corr_b[4]+multi_ch4_corr_b[5]+multi_ch4_corr_b[6]+multi_ch4_corr_b[7]+multi_ch4_corr_b[8];



var single_multi_ch4_k_s = input.split('MULTI_CH4_INFO');

var multi_ch4_k_s_split = single_multi_ch4_k_s[1];

var k_s_multi_ch4 = multi_ch4_k_s_split.split('|K/S^')[1];

if(k_s_multi_ch4 == undefined){

var multi_str_k_s_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_k_s_array_4[l_1] ="0";

}

}else{

var splitted = k_s_multi_ch4.split('F7');

var k_s = splitted[0];

var multi_str_k_s_array_4 = k_s.split('$');

for(var j_1 = 0; j_1 < multi_str_k_s_array_4.length; j_1++) {

multi_str_k_s_array_4[j_1] = multi_str_k_s_array_4[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}



var single_multi_ch4_ = input.split('MULTI_CH4_INFO');

var multi_ch4_rm_split = single_multi_ch4_k_s[1];

var rm_multi_ch4 = multi_ch4_rm_split.split('|MAIN_R^')[1];

var rm_multi_ch4_btn = rm_multi_ch4.split('|SUB_R^')[0];


if(rm_multi_ch4_btn.includes("$")){

 var multi_str_rm_array_4 = rm_multi_ch4_btn.split('$');

for(var k_1 = 0; k_1 < multi_str_rm_array_4.length; k_1++) {

multi_str_rm_array_4[k_1] = multi_str_rm_array_4[k_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}

else{
var multi_str_rm_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rm_array_4[l_1] ="0";

}



}



var multi_ch4_rm_split = single_multi_ch4_k_s[1];

var rm_multi_ch4 = multi_ch4_rm_split.split('|MAIN_R^')[1];
var rm_multi_ch4_btn = rm_multi_ch4.split('|SUB_R^')[0];

if(rm_multi_ch4_btn.includes("$")){


var multi_str_rm_array_4 = rm.split('$');

for(var l_1 = 0; l_1 < multi_str_rm_array_4.length; l_1++) {

multi_str_rm_array_4[l_1] = multi_str_rm_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

else{

var multi_str_rm_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rm_array_4[l_1] ="0";

}

}



var multi_ch4_tm_split = single_multi_ch4_k_s[1];

var tm_multi_ch4 = multi_ch4_tm_split.split('|MEAS_TIME^')[1];
var tm_multi_ch4_btn = tm_multi_ch4.split('|MAIN_R^')[0];

if(tm_multi_ch4_btn.includes("$")){
var multi_str_tm_array_4 = tm_multi_ch4_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_tm_array_4.length; l_1++) {

multi_str_tm_array_4[l_1] = multi_str_tm_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

else{

var multi_str_tm_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_tm_array_4[l_1] ="0";

}

}



var multi_ch4_rs_split = single_multi_ch4_k_s[1];

var rs_multi_ch4 = multi_ch4_rs_split.split('|SUB_R^')[1];
var rs_multi_ch4_btn = rs_multi_ch4.split('|MEAS_R^')[0];
if(rs_multi_ch4_btn.includes("$")){

var multi_str_rs_array_4 = rs_multi_ch4_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_rs_array_4.length; l_1++) {

multi_str_rs_array_4[l_1] = multi_str_rs_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}  

}

else{

var multi_str_rs_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rs_array_4[l_1] ="0";

}

}





var multi_ch4_mr_split = single_multi_ch4_k_s[1];

var mr_multi_ch4 = multi_ch4_mr_split.split('|MEAS_R^')[1];

var mr_multi_ch4_btn = mr_multi_ch4.split('|K/S^')[0];



if(mr_multi_ch4_btn.includes("$")){



var multi_str_mr_array_4 = mr_multi_ch4_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_mr_array_4.length; l_1++) {

multi_str_mr_array_4[l_1] = multi_str_mr_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

else{    

var multi_str_mr_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_mr_array_4[l_1] ="0";

}

}



var ch4_time_split = single_multi_ch4_k_s[1];

var time_ch4 = ch4_time_split.split('|TIME^')[1];

if(time_ch4 == undefined){

var multi_str_time_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_time_array_4[l_1] ="0";

}

}

else{

var splitted = time_ch4.split('F7');

var multi_str_time_array_4 = time_ch4.split('$');

for(var l_1 = 0; l_1 < multi_str_time_array_4.length; l_1++) {

multi_str_time_array_4[l_1] = multi_str_time_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}                    



var ch4_mnsmp_split = single_multi_ch4_k_s[1];

var mnsmp_ch4 = ch4_mnsmp_split.split('|M_NSMP^')[1];

if(mnsmp_ch4 == undefined){

var multi_str_mnsmp_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_mnsmp_array_4[l_1] ="0";

}

}

else{

var splitted = mnsmp_ch4.split('F7');

var multi_str_mnsmp_array_4 = mnsmp_ch4.split('$');

for(var l_1 = 0; l_1 < multi_str_mnsmp_array_4.length; l_1++) {

multi_str_mnsmp_array_4[l_1] = multi_str_mnsmp_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}



var ch4_mdsmp_split = single_multi_ch4_k_s[1];

var mdsmp_ch4 = ch4_mdsmp_split.split('|M_DSMP^')[1];

if(mdsmp_ch4 == undefined){

var multi_str_mdsmp_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_mdsmp_array_4[l_1] ="0";

}

}

else{

var splitted = mdsmp_ch4.split('F7');

var multi_str_mdsmp_array_4 = mdsmp_ch4.split('$');

for(var l_1 = 0; l_1 < multi_str_mdsmp_array_4.length; l_1++) {

multi_str_mdsmp_array_4[l_1] = multi_str_mdsmp_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

var ch4_mnref_split = single_multi_ch4_k_s[1];

var mnref_ch4 = ch4_mnref_split.split('|M_NREF^')[1];



if(mnref_ch4 == undefined){

var multi_str_mnref_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_mnref_array_4[l_1] ="0";

}

}

else{

var splitted = mnref_ch4.split('F7');

var multi_str_mnref_array_4 = mnref_ch4.split('$');

for(var l_1 = 0; l_1 < multi_str_mnref_array_4.length; l_1++) {

multi_str_mnref_array_4[l_1] = multi_str_mnref_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



}

var ch4_mdref_split = single_multi_ch4_k_s[1];

var mdref_ch4 = ch4_mdref_split.split('|M_DREF^')[1];

if(mdref_ch4 == undefined){

var multi_str_mdref_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_mdref_array_4[l_1] ="0";

}

}

else{

var splitted = mdref_ch4.split('F7');

var multi_str_mdref_array_4 = mdref_ch4.split('$');

for(var l_1 = 0; l_1 < multi_str_mdref_array_4.length; l_1++) {

multi_str_mdref_array_4[l_1] = multi_str_mdref_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

var ch4_snsmp_split = single_multi_ch4_k_s[1];

var snsmp_ch4 = ch4_snsmp_split.split('|S_NSMP^')[1];

if(snsmp_ch4 == undefined){

var multi_str_snsmp_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_snsmp_array_4[l_1] ="0";

}

}

else{

var splitted = snsmp_ch4.split('F7');

var multi_str_snsmp_array_4 = snsmp_ch4.split('$');

for(var l_1 = 0; l_1 < multi_str_snsmp_array_4.length; l_1++) {

multi_str_snsmp_array_4[l_1] = multi_str_snsmp_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

var ch4_sdsmp_split = single_multi_ch4_k_s[1];

var sdsmp_ch4 = ch4_sdsmp_split.split('|S_DSMP^')[1];

if(sdsmp_ch4 == undefined){

var multi_str_sdsmp_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_sdsmp_array_4[l_1] ="0";

}

}

else{

var splitted = sdsmp_ch4.split('F7');

var multi_str_sdsmp_array_4 = sdsmp_ch4.split('$');

for(var l_1 = 0; l_1 < multi_str_sdsmp_array_4.length; l_1++) {

multi_str_sdsmp_array_4[l_1] = multi_str_sdsmp_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}



var ch4_snref_split = single_multi_ch4_k_s[1];

var snref_ch4 = ch4_snref_split.split('|S_NREF^')[1];

if(snref_ch4 == undefined){

var multi_str_snref_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_snref_array_4[l_1] ="0";

}

}

else{

var splitted = snref_ch4.split('F7');

var multi_str_snref_array_4 = snref_ch4.split('$');

for(var l_1 = 0; l_1 < multi_str_snref_array_4.length; l_1++) {

multi_str_snref_array_4[l_1] = multi_str_snref_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}



var ch4_sderf_split = single_multi_ch4_k_s[1];

var sderf_ch4 = ch4_sderf_split.split('|S_DREF^')[1];

if(sderf_ch4 == undefined){

var multi_str_sderf_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_sderf_array_4[l_1] ="0";

}

}

else{

var splitted = sderf_ch4.split('F7');

var multi_str_sderf_array_4 = sderf_ch4.split('$');

for(var l_1 = 0; l_1 < multi_str_sderf_array_4.length; l_1++) {

multi_str_sderf_array_4[l_1] = multi_str_sderf_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}



}



else{



multi_ch4_novalue = "0";            

multi_ch4_dksvalue=            "0";



multi_ch4_C0value=       "0";

multi_ch4_tempvalue= "0.000";

multi_ch4_humidityvalue=          "0.00";

multi_ch4_kevalue=       "0";

multi_ch4_C1value=       "0";

multi_ch4_dev_a_value=             "0";

multi_ch4_dev_b_value=             "0";

multi_ch4_C2value=       "0";

multi_ch4_deg_a_value=             "0";

multi_ch4_deg_b_value=             "0";

multi_ch4_C3value=       "0";

multi_ch4_lot_ch_value=             "0";

multi_ch4_C4value=       "0";

multi_ch4_cal_a_value=               "0";

multi_ch4_cal_b_value=              "0";

multi_ch4_C5value=       "0";

multi_ch4_ktemp_value=            "0";

multi_ch4_C6value=       "0";

multi_ch4_kunit_value=               "0";

multi_ch4_C7value=       "0";

multi_ch4_corr_a_value=            "0";

multi_ch4_corr_b_value=            "0";

multi_ch4_C8value=       "0";



multi_ch4_mwhtqvalue="0";

multi_ch4_mwhtrvalue="0";

multi_ch4_mblkqvalue="0";

multi_ch4_mblkrvalue="0";

multi_ch4_moptcurvevalue="0";

multi_ch4_swhtqvalue="0";

multi_ch4_swhtrvalue="0";

multi_ch4_sblkqvalue="0";

multi_ch4_sblkrvalue="0";

multi_ch4_soptcurvevalue="0";



multi_ch4_soptcurve2="0";

multi_ch4_boptcurve2="0";



var multi_str_tm_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_tm_array_4[l_1] ="0";

}



var multi_str_rm_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rm_array_4[l_1] ="0";

}



var multi_str_mr_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_mr_array_4[l_1] ="0";

}



var multi_str_rs_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rs_array_4[l_1] ="0";

}

var multi_str_k_s_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_k_s_array_4[l_1] ="0";

}



var multi_str_time_array_4 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_time_array_4[l_1] ="0";

}



var multi_str_mnsmp_array_4 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mnsmp_array_4[l_1] ="0";

}



var multi_str_mdsmp_array_4 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mdsmp_array_4[l_1] ="0";

}



var multi_str_mnref_array_4 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mnref_array_4[l_1] ="0";

}



var multi_str_mdref_array_4 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mdref_array_4[l_1] ="0";

}



var multi_str_snsmp_array_4 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_snsmp_array_4[l_1] ="0";

}



var multi_str_sdsmp_array_4 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_sdsmp_array_4[l_1] ="0";

}



var multi_str_snref_array_4 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_snref_array_4[l_1] ="0";

}

var multi_str_sderf_array_4 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_sderf_array_4[l_1] ="0";

}

}





if(input.includes("MULTI_CH5")){





var multi_ch5_info = input.split('MULTI_CH5_INFO');

var multi_ch5_name_split = multi_ch5_info[1];

var multi_ch5_no_split = multi_ch5_info[1];

var multi_ch5_no = multi_ch5_no_split.split('NO^')[1];

var multi_ch5_novalue = multi_ch5_no.split('')[0];;      

var multi_ch5_name = multi_ch5_name_split.split('NAME^')[1];

var multi_ch5_namevalue = multi_ch5_name[0]+multi_ch5_name[1]+multi_ch5_name[2]+multi_ch5_name[3];    

var multi_ch5_unit = multi_ch5_name_split.split('UNIT^')[1];

var multi_ch5_unitvalue = multi_ch5_unit[0]+multi_ch5_unit[1]+multi_ch5_unit[2]+multi_ch5_unit[3]+multi_ch5_unit[4];

var multi_ch5_result = multi_ch5_name_split.split('RSLT^')[1];

var multi_ch5_resultvalue = multi_ch5_result[0]+multi_ch5_result[1]+multi_ch5_result[2]+multi_ch5_result[3]+multi_ch5_result[4]+multi_ch5_result[5];

var multi_ch5 = "CH";

var multi_val5= "5";

var multi_ch5_mw = multi_ch5_no_split.split('M_WL^')[1];

var multi_ch5_mwvalue = multi_ch5_mw[0]+multi_ch5_mw[1]+multi_ch5_mw[2]+multi_ch5_mw[3]+multi_ch5_mw[4];



var multi_ch5_mwhtq = multi_ch5_no_split.split('M_WHT_Q^')[1];

var multi_ch5_mwhtqvalue = multi_ch5_mwhtq.split('')[0];





var multi_ch5_mwhtr = multi_ch5_no_split.split('M_WHT_R^')[1];

var multi_ch5_mwhtrvalue = multi_ch5_mwhtr.split('')[0];



var multi_ch5_mblkq = multi_ch5_no_split.split('M_BLK_Q^')[1];

var multi_ch5_mblkqvalue = multi_ch5_mblkq.split('')[0];



var multi_ch5_mblkr = multi_ch5_no_split.split('M_BLK_R^')[1];

var multi_ch5_mblkrvalue = multi_ch5_mblkr.split('')[0];



var multi_ch5_moptcurve = multi_ch5_no_split.split('M_OPT_CURVE^')[1];

var multi_ch5_moptcurvevalue = multi_ch5_moptcurve.split('$')[0];



var multi_ch5_boptcurve = multi_ch5_no_split.split('M_OPT_CURVE^')[1];



var multi_ch5_boptcurve1 = multi_ch5_boptcurve.split('')[0];

if(multi_ch5_boptcurve1.length == 1){

var multi_ch5_boptcurve2 = "0";



}else{

var multi_ch5_boptcurve2 = multi_ch5_boptcurve1.split('$')[1].split('')[0];



}



var multi_ch5_sw = multi_ch5_no_split.split('S_WL^')[1];

var multi_ch5_swvalue = multi_ch5_sw[0]+multi_ch5_sw[1]+multi_ch5_sw[2]+multi_ch5_sw[3]+multi_ch5_sw[4];

var multi_ch5_swhtq = multi_ch5_no_split.split('S_WHT_Q^')[1];

var multi_ch5_swhtqvalue = multi_ch5_swhtq.split('')[0];

var multi_ch5_swhtr = multi_ch5_no_split.split('S_WHT_R^')[1];

var multi_ch5_swhtrvalue = multi_ch5_swhtr.split('')[0];

var multi_ch5_sblkq = multi_ch5_no_split.split('S_BLK_Q^')[1];

var multi_ch5_sblkqvalue = multi_ch5_sblkq.split('')[0];

var multi_ch5_sblkr = multi_ch5_no_split.split('S_BLK_R^')[1];

var multi_ch5_sblkrvalue = multi_ch5_sblkr.split('')[0];

var multi_ch5_soptcurve = multi_ch5_no_split.split('S_OPT_CURVE^')[1];

var multi_ch5_soptcurvevalue = multi_ch5_soptcurve.split('$')[0];



var multi_ch5_soptcurve = multi_ch5_no_split.split('S_OPT_CURVE^')[1];

var multi_ch5_soptcurve1 = multi_ch5_soptcurve.split('')[0];

if(multi_ch5_soptcurve1.length == 1){

var multi_ch5_soptcurve2 = "0";

}

else{

var multi_ch5_soptcurve2 = multi_ch5_soptcurve1.split('$')[1].split('')[0];

}



var multi_ch5_dks = multi_ch5_name_split.split('dK/S^')[1];

var multi_ch5_dksvalue = multi_ch5_dks[0]+multi_ch5_dks[1]+multi_ch5_dks[2]+multi_ch5_dks[3]+multi_ch5_dks[4]+multi_ch5_dks[5]+multi_ch5_dks[6]+multi_ch5_dks[7]+multi_ch5_dks[8];    



var multi_ch5_C0 = multi_ch5_name_split.split('C0^')[1];

var multi_ch5_C0value = multi_ch5_C0[0]+multi_ch5_C0[1]+multi_ch5_C0[2]+multi_ch5_C0[3]+multi_ch5_C0[4]+multi_ch5_C0[5]+multi_ch5_C0[6]+multi_ch5_C0[7]+multi_ch5_C0[8];

var multi_ch5_C1 = multi_ch5_name_split.split('C1^')[1];

var multi_ch5_C1value = multi_ch5_C1[0]+multi_ch5_C1[1]+multi_ch5_C1[2]+multi_ch5_C1[3]+multi_ch5_C1[4]+multi_ch5_C1[5]+multi_ch5_C1[6]+multi_ch5_C1[7]+multi_ch5_C1[8];

var multi_ch5_C2 = multi_ch5_name_split.split('C2^')[1];

var multi_ch5_C2value = multi_ch5_C2[0]+multi_ch5_C2[1]+multi_ch5_C2[2]+multi_ch5_C2[3]+multi_ch5_C2[4]+multi_ch5_C2[5]+multi_ch5_C2[6]+multi_ch5_C2[7]+multi_ch5_C2[8];

var multi_ch5_C3 = multi_ch5_name_split.split('C3^')[1];

var multi_ch5_C3value = multi_ch5_C3[0]+multi_ch5_C3[1]+multi_ch5_C3[2]+multi_ch5_C3[3]+multi_ch5_C3[4]+multi_ch5_C3[5]+multi_ch5_C3[6]+multi_ch5_C3[7]+multi_ch5_C3[8];

var multi_ch5_C4 = multi_ch5_name_split.split('C4^')[1];

var multi_ch5_C4value = multi_ch5_C4[0]+multi_ch5_C4[1]+multi_ch5_C4[2]+multi_ch5_C4[3]+multi_ch5_C4[4]+multi_ch5_C4[5]+multi_ch5_C4[6]+multi_ch5_C4[7]+multi_ch5_C4[8];

var multi_ch5_C5 = multi_ch5_name_split.split('C5^')[1];

var multi_ch5_C5value = multi_ch5_C5[0]+multi_ch5_C5[1]+multi_ch5_C5[2]+multi_ch5_C5[3]+multi_ch5_C5[4]+multi_ch5_C5[5]+multi_ch5_C5[6]+multi_ch5_C5[7]+multi_ch5_C5[8];

var multi_ch5_C6 = multi_ch5_name_split.split('C6^')[1];

var multi_ch5_C6value = multi_ch5_C6[0]+multi_ch5_C6[1]+multi_ch5_C6[2]+multi_ch5_C6[3]+multi_ch5_C6[4]+multi_ch5_C6[5]+multi_ch5_C6[6]+multi_ch5_C6[7]+multi_ch5_C6[8];

var multi_ch5_C7 = multi_ch5_name_split.split('C7^')[1];

var multi_ch5_C7value = multi_ch5_C7[0]+multi_ch5_C7[1]+multi_ch5_C7[2]+multi_ch5_C7[3]+multi_ch5_C7[4]+multi_ch5_C7[5]+multi_ch5_C7[6]+multi_ch5_C7[7]+multi_ch5_C7[8];

var multi_ch5_C8 = multi_ch5_name_split.split('C8^')[1];

var multi_ch5_C8value = multi_ch5_C8[0]+multi_ch5_C8[1]+multi_ch5_C8[2]+multi_ch5_C8[3]+multi_ch5_C8[4]+multi_ch5_C8[5]+multi_ch5_C8[6]+multi_ch5_C8[7]+multi_ch5_C8[8];





var multi_ch5_temp = multi_ch5_name_split.split('C1_ENV_TEMP^')[1];

var multi_ch5_tempvalue = multi_ch5_temp[0]+multi_ch5_temp[1]+multi_ch5_temp[2]+multi_ch5_temp[3]+multi_ch5_temp[4]+multi_ch5_temp[5]+multi_ch5_temp[6]+multi_ch5_temp[7]+multi_ch5_temp[8];



var multi_ch5_humidity = multi_ch5_name_split.split('C1_ENV_HUM^')[1];

var multi_ch5_humidityvalue = multi_ch5_humidity[0]+multi_ch5_humidity[1]+multi_ch5_humidity[2]+multi_ch5_humidity[3]+multi_ch5_humidity[4]+multi_ch5_humidity[5]+multi_ch5_humidity[6]+multi_ch5_humidity[7]+multi_ch5_humidity[8];



var multi_ch5_ke = multi_ch5_name_split.split('C1_ENV_Ke^')[1];

var multi_ch5_kevalue = multi_ch5_ke[0]+multi_ch5_ke[1]+multi_ch5_ke[2]+multi_ch5_ke[3]+multi_ch5_ke[4]+multi_ch5_ke[5]+multi_ch5_ke[6]+multi_ch5_ke[7]+multi_ch5_ke[8];



var multi_ch5_ke = multi_ch5_name_split.split('C1_ENV_Ke^')[1];

var multi_ch5_kevalue = multi_ch5_ke[0]+multi_ch5_ke[1]+multi_ch5_ke[2]+multi_ch5_ke[3]+multi_ch5_ke[4]+multi_ch5_ke[5]+multi_ch5_ke[6]+multi_ch5_ke[7]+multi_ch5_ke[8];



var multi_ch5_dev_a = multi_ch5_name_split.split('C2_DEV_A^')[1];

var multi_ch5_dev_a_value = multi_ch5_dev_a[0]+multi_ch5_dev_a[1]+multi_ch5_dev_a[2]+multi_ch5_dev_a[3]+multi_ch5_dev_a[4]+multi_ch5_dev_a[5]+multi_ch5_dev_a[6]+multi_ch5_dev_a[7]+multi_ch5_dev_a[8];



var multi_ch5_dev_b = multi_ch5_name_split.split('C2_DEV_B^')[1];

var multi_ch5_dev_b_value = multi_ch5_dev_b[0]+multi_ch5_dev_b[1]+multi_ch5_dev_b[2]+multi_ch5_dev_b[3]+multi_ch5_dev_b[4]+multi_ch5_dev_b[5]+multi_ch5_dev_b[6]+multi_ch5_dev_b[7]+multi_ch5_dev_b[8];



var multi_ch5_deg_a = multi_ch5_name_split.split('C3_DEG_A^')[1];

var multi_ch5_deg_a_value = multi_ch5_deg_a[0]+multi_ch5_deg_a[1]+multi_ch5_deg_a[2]+multi_ch5_deg_a[3]+multi_ch5_deg_a[4]+multi_ch5_deg_a[5]+multi_ch5_deg_a[6]+multi_ch5_deg_a[7]+multi_ch5_deg_a[8];



var multi_ch5_deg_b = multi_ch5_name_split.split('C3_DEG_B^')[1];

var multi_ch5_deg_b_value = multi_ch5_deg_b[0]+multi_ch5_deg_b[1]+multi_ch5_deg_b[2]+multi_ch5_deg_b[3]+multi_ch5_deg_b[4]+multi_ch5_deg_b[5]+multi_ch5_deg_b[6]+multi_ch5_deg_b[7]+multi_ch5_deg_b[8];





var multi_ch5_lot_ch = multi_ch5_name_split.split('C4_LOT_CH^')[1];

var multi_ch5_lot_ch_value = multi_ch5_lot_ch[0]+multi_ch5_lot_ch[1]+multi_ch5_lot_ch[2]+multi_ch5_lot_ch[3]+multi_ch5_lot_ch[4]+multi_ch5_lot_ch[5]+multi_ch5_lot_ch[6]+multi_ch5_lot_ch[7]+multi_ch5_lot_ch[8];



var multi_ch5_cal_a = multi_ch5_name_split.split('C5_CAL_A^')[1];

var multi_ch5_cal_a_value = multi_ch5_cal_a[0]+multi_ch5_cal_a[1]+multi_ch5_cal_a[2]+multi_ch5_cal_a[3]+multi_ch5_cal_a[4]+multi_ch5_cal_a[5]+multi_ch5_cal_a[6]+multi_ch5_cal_a[7]+multi_ch5_cal_a[8];



var multi_ch5_cal_b = multi_ch5_name_split.split('C5_CAL_B^')[1];

var multi_ch5_cal_b_value = multi_ch5_cal_b[0]+multi_ch5_cal_b[1]+multi_ch5_cal_b[2]+multi_ch5_cal_b[3]+multi_ch5_cal_b[4]+multi_ch5_cal_b[5]+multi_ch5_cal_b[6]+multi_ch5_cal_b[7]+multi_ch5_cal_b[8];





var multi_ch5_ktemp = multi_ch5_name_split.split('C6_Ktemp^')[1];

var multi_ch5_ktemp_value = multi_ch5_ktemp[0]+multi_ch5_ktemp[1]+multi_ch5_ktemp[2]+multi_ch5_ktemp[3]+multi_ch5_ktemp[4]+multi_ch5_ktemp[5]+multi_ch5_ktemp[6]+multi_ch5_ktemp[7]+multi_ch5_ktemp[8];





var multi_ch5_kunit = multi_ch5_name_split.split('C7_Kunit^')[1];

var multi_ch5_kunit_value = multi_ch5_kunit[0]+multi_ch5_kunit[1]+multi_ch5_kunit[2]+multi_ch5_kunit[3]+multi_ch5_kunit[4]+multi_ch5_kunit[5]+multi_ch5_kunit[6]+multi_ch5_kunit[7]+multi_ch5_kunit[8];





var multi_ch5_corr_a = multi_ch5_name_split.split('C8_CORR_A^')[1];

var multi_ch5_corr_a_value = multi_ch5_corr_a[0]+multi_ch5_corr_a[1]+multi_ch5_corr_a[2]+multi_ch5_corr_a[3]+multi_ch5_corr_a[4]+multi_ch5_corr_a[5]+multi_ch5_corr_a[6]+multi_ch5_corr_a[7]+multi_ch5_corr_a[8];





var multi_ch5_corr_b = multi_ch5_name_split.split('C8_CORR_B^')[1];

var multi_ch5_corr_b_value = multi_ch5_corr_b[0]+multi_ch5_corr_b[1]+multi_ch5_corr_b[2]+multi_ch5_corr_b[3]+multi_ch5_corr_b[4]+multi_ch5_corr_b[5]+multi_ch5_corr_b[6]+multi_ch5_corr_b[7]+multi_ch5_corr_b[8];



var single_multi_ch5_k_s = input.split('MULTI_CH5_INFO');

var multi_ch5_k_s_split = single_multi_ch5_k_s[1];

var k_s_multi_ch5 = multi_ch5_k_s_split.split('|K/S^')[1];

var splitted = k_s_multi_ch5.split('F7');

var k_s = splitted[0];

var multi_str_k_s_array_5 = k_s.split('$');

for(var j_1 = 0; j_1 < multi_str_k_s_array_5.length; j_1++) {

multi_str_k_s_array_5[j_1] = multi_str_k_s_array_5[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var single_multi_ch5_ = input.split('MULTI_CH5_INFO');

var multi_ch5_rm_split = single_multi_ch5_k_s[1];

var rm_multi_ch5 = multi_ch5_rm_split.split('|MAIN_R^')[1];

var rm_multi_ch5_btn = rm_multi_ch5.split('|SUB_R^')[0];
if(rm_multi_ch5_btn.includes("$")){
var multi_str_rm_array_5 = rm.split('$');

for(var k_1 = 0; k_1 < multi_str_rm_array_5.length; k_1++) {

multi_str_rm_array_5[k_1] = multi_str_rm_array_5[k_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var multi_str_rm_array_5 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rm_array_5[l_1] ="0";

}
}                          



var multi_ch5_rm_split = single_multi_ch5_k_s[1];

var rm_multi_ch5 = multi_ch5_rm_split.split('|MAIN_R^')[1];
var rm_multi_ch5_btn = rm_multi_ch5.split('|SUB_R^')[0];

if(rm_multi_ch5_btn.includes("$")){
var multi_str_rm_array_5 = rm_multi_ch5_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_rm_array_5.length; l_1++) {

multi_str_rm_array_5[l_1] = multi_str_rm_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var multi_str_rm_array_5 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rm_array_5[l_1] ="0";

}
}
var multi_ch5_tm_split = single_multi_ch5_k_s[1];

var tm_multi_ch5 = multi_ch5_tm_split.split('|MEAS_TIME^')[1];
var tm_multi_ch5_btn = tm_multi_ch5.split('|MAIN_R^')[0];

if(tm_multi_ch5_btn.includes("$")){

var multi_str_tm_array_5 = tm_multi_ch5_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_tm_array_5.length; l_1++) {

multi_str_tm_array_5[l_1] = multi_str_tm_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var multi_str_tm_array_5 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_tm_array_5[l_1] ="0";

}
}



var multi_ch5_rs_split = single_multi_ch5_k_s[1];

var rs_multi_ch5 = multi_ch5_rs_split.split('|SUB_R^')[1];
var rs_multi_ch5_btn = rs_multi_ch5.split('|MEAS_R^')[0];
if(rs_multi_ch5_btn.includes("$")){
var multi_str_rs_array_5 = rs_multi_ch5_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_rs_array_5.length; l_1++) {

multi_str_rs_array_5[l_1] = multi_str_rs_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}  
}
 else{
var multi_str_rs_array_5 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rs_array_5[l_1] ="0";

}
}





var multi_ch5_mr_split = single_multi_ch5_k_s[1];

var mr_multi_ch5 = multi_ch5_mr_split.split('|MEAS_R^')[1];

var mr_multi_ch5_btn = mr_multi_ch5.split('|K/S^')[0];

if(mr_multi_ch5_btn.includes("$")){

var multi_str_mr_array_5 = mr_multi_ch5_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_mr_array_5.length; l_1++) {

multi_str_mr_array_5[l_1] = multi_str_mr_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

else{



 var multi_str_mr_array_5 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_mr_array_5[l_1] ="0";

}



 }

var ch5_time_split = single_multi_ch5_k_s[1];

var time_ch5 = ch5_time_split.split('|TIME^')[1];

var splitted = time_ch5.split('F7');

var multi_str_time_array_5 = time_ch5.split('$');

for(var l_1 = 0; l_1 < multi_str_time_array_5.length; l_1++) {

multi_str_time_array_5[l_1] = multi_str_time_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}            



var ch5_mnsmp_split = single_multi_ch5_k_s[1];

var mnsmp_ch5 = ch5_time_split.split('|M_NSMP^')[1];

var splitted = mnsmp_ch5.split('F7');

var multi_str_mnsmp_array_5 = mnsmp_ch5.split('$');

for(var l_1 = 0; l_1 < multi_str_mnsmp_array_5.length; l_1++) {

multi_str_mnsmp_array_5[l_1] = multi_str_mnsmp_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch5_mdsmp_split = single_multi_ch5_k_s[1];

var mdsmp_ch5 = ch5_mdsmp_split.split('|M_DSMP^')[1];

var splitted = mdsmp_ch5.split('F7');

var multi_str_mdsmp_array_5 = mdsmp_ch5.split('$');

for(var l_1 = 0; l_1 < multi_str_mdsmp_array_5.length; l_1++) {

multi_str_mdsmp_array_5[l_1] = multi_str_mdsmp_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch5_mnref_split = single_multi_ch5_k_s[1];

var mnref_ch5 = ch5_mnref_split.split('|M_NREF^')[1];

var splitted = mnref_ch5.split('F7');

var multi_str_mnref_array_5 = mnref_ch5.split('$');

for(var l_1 = 0; l_1 < multi_str_mnref_array_5.length; l_1++) {

multi_str_mnref_array_5[l_1] = multi_str_mnref_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch5_mdref_split = single_multi_ch5_k_s[1];

var mdref_ch5 = ch5_mdref_split.split('|M_DREF^')[1];

var splitted = mdref_ch5.split('F7');

var multi_str_mdref_array_5 = mdref_ch5.split('$');

for(var l_1 = 0; l_1 < multi_str_mdref_array_5.length; l_1++) {

multi_str_mdref_array_5[l_1] = multi_str_mdref_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch5_snsmp_split = single_multi_ch5_k_s[1];

var snsmp_ch5 = ch5_snsmp_split.split('|S_NSMP^')[1];

var splitted = snsmp_ch5.split('F7');

var multi_str_snsmp_array_5 = snsmp_ch5.split('$');

for(var l_1 = 0; l_1 < multi_str_snsmp_array_5.length; l_1++) {

multi_str_snsmp_array_5[l_1] = multi_str_snsmp_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch5_sdsmp_split = single_multi_ch5_k_s[1];

var sdsmp_ch5 = ch5_sdsmp_split.split('|S_DSMP^')[1];

var splitted = sdsmp_ch5.split('F7');

var multi_str_sdsmp_array_5 = sdsmp_ch5.split('$');

for(var l_1 = 0; l_1 < multi_str_sdsmp_array_5.length; l_1++) {

multi_str_sdsmp_array_5[l_1] = multi_str_sdsmp_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch5_snref_split = single_multi_ch5_k_s[1];

var snref_ch5 = ch5_snref_split.split('|S_NREF^')[1];

var splitted = snref_ch5.split('F7');

var multi_str_snref_array_5 = snref_ch5.split('$');

for(var l_1 = 0; l_1 < multi_str_snref_array_5.length; l_1++) {

multi_str_snref_array_5[l_1] = multi_str_snref_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch5_sderf_split = single_multi_ch5_k_s[1];

var sderf_ch5 = ch5_sderf_split.split('|S_DREF^')[1];

var splitted = sderf_ch5.split('F7');

var multi_str_sderf_array_5 = sderf_ch5.split('$');

for(var l_1 = 0; l_1 < multi_str_sderf_array_5.length; l_1++) {

multi_str_sderf_array_5[l_1] = multi_str_sderf_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

else{



multi_ch5_novalue = "0";            

multi_ch5_dksvalue=            "0";



multi_ch5_C0value=       "0";

multi_ch5_tempvalue= "0.000";

multi_ch5_humidityvalue=          "0.00";

multi_ch5_kevalue=       "0";

multi_ch5_C1value=       "0";

multi_ch5_dev_a_value=             "0";

multi_ch5_dev_b_value=             "0";

multi_ch5_C2value=       "0";

multi_ch5_deg_a_value=             "0";

multi_ch5_deg_b_value=             "0";

multi_ch5_C3value=       "0";

multi_ch5_lot_ch_value=             "0";

multi_ch5_C4value=       "0";

multi_ch5_cal_a_value=               "0";

multi_ch5_cal_b_value=              "0";

multi_ch5_C5value=       "0";

multi_ch5_ktemp_value=            "0";

multi_ch5_C6value=       "0";

multi_ch5_kunit_value=               "0";

multi_ch5_C7value=       "0";

multi_ch5_corr_a_value=            "0";

multi_ch5_corr_b_value=            "0";

multi_ch5_C8value=       "0";



multi_ch5_mwhtqvalue="0";

multi_ch5_mwhtrvalue="0";

multi_ch5_mblkqvalue="0";

multi_ch5_mblkrvalue="0";

multi_ch5_moptcurvevalue="0";

multi_ch5_swhtqvalue="0";

multi_ch5_swhtrvalue="0";

multi_ch5_sblkqvalue="0";

multi_ch5_sblkrvalue="0";

multi_ch5_soptcurvevalue="0";



multi_ch5_soptcurve2="0";

multi_ch5_boptcurve2="0";



var multi_str_tm_array_5 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_tm_array_5[l_1] ="0";

}



var multi_str_rm_array_5 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rm_array_5[l_1] ="0";

}



var multi_str_mr_array_5 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_mr_array_5[l_1] ="0";

}



var multi_str_rs_array_5 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rs_array_5[l_1] ="0";

}

var multi_str_k_s_array_5 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_k_s_array_5[l_1] ="0";

}

var multi_str_time_array_5 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_time_array_5[l_1] ="0";

}



var multi_str_mnsmp_array_5 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mnsmp_array_5[l_1] ="0";

}



var multi_str_mdsmp_array_5 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mdsmp_array_5[l_1] ="0";

}



var multi_str_mnref_array_5 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mnref_array_5[l_1] ="0";

}



var multi_str_mdref_array_5 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mdref_array_5[l_1] ="0";

}



var multi_str_snsmp_array_5 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_snsmp_array_5[l_1] ="0";

}



var multi_str_sdsmp_array_5 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_sdsmp_array_5[l_1] ="0";

}



var multi_str_snref_array_5 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_snref_array_5[l_1] ="0";

}

var multi_str_sderf_array_5 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_sderf_array_5[l_1] ="0";

}

}





if(input.includes("MULTI_CH6")){





var multi_ch6_info = input.split('MULTI_CH6_INFO');

var multi_ch6_name_split = multi_ch6_info[1];

var multi_ch6_no_split = multi_ch6_info[1];

var multi_ch6_no = multi_ch6_no_split.split('NO^')[1];

var multi_ch6_novalue = multi_ch6_no.split('')[0];

var multi_ch6_name = multi_ch6_name_split.split('NAME^')[1];

var multi_ch6_namevalue = multi_ch6_name[0]+multi_ch6_name[1]+multi_ch6_name[2]+multi_ch6_name[3];    

var multi_ch6_unit = multi_ch6_name_split.split('UNIT^')[1];

var multi_ch6_unitvalue = multi_ch6_unit[0]+multi_ch6_unit[1]+multi_ch6_unit[2]+multi_ch6_unit[3]+multi_ch6_unit[4];

var multi_ch6_result = multi_ch6_name_split.split('RSLT^')[1];

var multi_ch6_resultvalue = multi_ch6_result[0]+multi_ch6_result[1]+multi_ch6_result[2]+multi_ch6_result[3]+multi_ch6_result[4]+multi_ch6_result[5];

var multi_ch6 = "CH";

var multi_val6= "6";



var multi_ch6_mw = multi_ch6_no_split.split('M_WL^')[1];

var multi_ch6_mwvalue = multi_ch6_mw.split('')[0];



var multi_ch6_mwhtq = multi_ch6_no_split.split('M_WHT_Q^')[1];

var multi_ch6_mwhtqvalue = multi_ch6_mwhtq.split('')[0];







var multi_ch6_mwhtr = multi_ch6_no_split.split('M_WHT_R^')[1];

var multi_ch6_mwhtrvalue = multi_ch6_mwhtr.split('')[0];



var multi_ch6_mblkq = multi_ch6_no_split.split('M_BLK_Q^')[1];

var multi_ch6_mblkqvalue = multi_ch6_mblkq.split('')[0];



var multi_ch6_mblkr = multi_ch6_no_split.split('M_BLK_R^')[1];

var multi_ch6_mblkrvalue = multi_ch6_mblkr.split('')[0];



var multi_ch6_moptcurve = multi_ch6_no_split.split('M_OPT_CURVE^')[1];

var multi_ch6_moptcurvevalue = multi_ch6_moptcurve.split('$')[0];



var multi_ch6_boptcurve = multi_ch6_no_split.split('M_OPT_CURVE^')[1];

var multi_ch6_boptcurve1 = multi_ch6_boptcurve.split('')[0];

if(multi_ch6_boptcurve1.length == 1){

		  var multi_ch6_boptcurve2 = "0";



}

else{

var multi_ch6_boptcurve2 = multi_ch6_boptcurve1.split('$')[1].split('')[0];



}



var multi_ch6_sw = multi_ch6_no_split.split('S_WL^')[1];

var multi_ch6_swvalue = multi_ch6_sw.split('')[0];

var multi_ch6_swhtq = multi_ch6_no_split.split('S_WHT_Q^')[1];

var multi_ch6_swhtqvalue = multi_ch6_swhtq.split('')[0];

var multi_ch6_swhtr = multi_ch6_no_split.split('S_WHT_R^')[1];

var multi_ch6_swhtrvalue = multi_ch6_swhtr.split('')[0];

var multi_ch6_sblkq = multi_ch6_no_split.split('S_BLK_Q^')[1];

var multi_ch6_sblkqvalue = multi_ch6_sblkq.split('')[0];

var multi_ch6_sblkr = multi_ch6_no_split.split('S_BLK_R^')[1];

var multi_ch6_sblkrvalue = multi_ch6_sblkr.split('')[0];

var multi_ch6_soptcurve = multi_ch6_no_split.split('S_OPT_CURVE^')[1];

var multi_ch6_soptcurvevalue = multi_ch6_soptcurve.split('')[0];



var multi_ch6_soptcurve = multi_ch6_no_split.split('S_OPT_CURVE^')[1];

var multi_ch6_soptcurve1 = multi_ch6_soptcurve.split('')[0];

if(multi_ch6_soptcurve1.length == 1){

var multi_ch6_soptcurve2 = "0";

}

else{

var multi_ch6_soptcurve2 = multi_ch6_soptcurve1.split('$')[1].split('')[0];

}

var multi_ch6_dks = multi_ch6_name_split.split('dK/S^')[1];

var multi_ch6_dksvalue = multi_ch6_dks[0]+multi_ch6_dks[1]+multi_ch6_dks[2]+multi_ch6_dks[3]+multi_ch6_dks[4]+multi_ch6_dks[5]+multi_ch6_dks[6]+multi_ch6_dks[7]+multi_ch6_dks[8];    

var multi_ch6_C0 = multi_ch6_name_split.split('C0^')[1];

var multi_ch6_C0value = multi_ch6_C0[0]+multi_ch6_C0[1]+multi_ch6_C0[2]+multi_ch6_C0[3]+multi_ch6_C0[4]+multi_ch6_C0[5]+multi_ch6_C0[6]+multi_ch6_C0[7]+multi_ch6_C0[8];

var multi_ch6_C1 = multi_ch6_name_split.split('C1^')[1];

var multi_ch6_C1value = multi_ch6_C1[0]+multi_ch6_C1[1]+multi_ch6_C1[2]+multi_ch6_C1[3]+multi_ch6_C1[4]+multi_ch6_C1[5]+multi_ch6_C1[6]+multi_ch6_C1[7]+multi_ch6_C1[8];

var multi_ch6_C2 = multi_ch6_name_split.split('C2^')[1];

var multi_ch6_C2value = multi_ch6_C2[0]+multi_ch6_C2[1]+multi_ch6_C2[2]+multi_ch6_C2[3]+multi_ch6_C2[4]+multi_ch6_C2[5]+multi_ch6_C2[6]+multi_ch6_C2[7]+multi_ch6_C2[8];

var multi_ch6_C3 = multi_ch6_name_split.split('C3^')[1];

var multi_ch6_C3value = multi_ch6_C3[0]+multi_ch6_C3[1]+multi_ch6_C3[2]+multi_ch6_C3[3]+multi_ch6_C3[4]+multi_ch6_C3[5]+multi_ch6_C3[6]+multi_ch6_C3[7]+multi_ch6_C3[8];

var multi_ch6_C4 = multi_ch6_name_split.split('C4^')[1];

var multi_ch6_C4value = multi_ch6_C4[0]+multi_ch6_C4[1]+multi_ch6_C4[2]+multi_ch6_C4[3]+multi_ch6_C4[4]+multi_ch6_C4[5]+multi_ch6_C4[6]+multi_ch6_C4[7]+multi_ch6_C4[8];

var multi_ch6_C5 = multi_ch6_name_split.split('C5^')[1];

var multi_ch6_C5value = multi_ch6_C5[0]+multi_ch6_C5[1]+multi_ch6_C5[2]+multi_ch6_C5[3]+multi_ch6_C5[4]+multi_ch6_C5[5]+multi_ch6_C5[6]+multi_ch6_C5[7]+multi_ch6_C5[8];

var multi_ch6_C6 = multi_ch6_name_split.split('C6^')[1];

var multi_ch6_C6value = multi_ch6_C6[0]+multi_ch6_C6[1]+multi_ch6_C6[2]+multi_ch6_C6[3]+multi_ch6_C6[4]+multi_ch6_C6[5]+multi_ch6_C6[6]+multi_ch6_C6[7]+multi_ch6_C6[8];

var multi_ch6_C7 = multi_ch6_name_split.split('C7^')[1];

var multi_ch6_C7value = multi_ch6_C7[0]+multi_ch6_C7[1]+multi_ch6_C7[2]+multi_ch6_C7[3]+multi_ch6_C7[4]+multi_ch6_C7[5]+multi_ch6_C7[6]+multi_ch6_C7[7]+multi_ch6_C7[8];

var multi_ch6_C8 = multi_ch6_name_split.split('C8^')[1];

var multi_ch6_C8value = multi_ch6_C8[0]+multi_ch6_C8[1]+multi_ch6_C8[2]+multi_ch6_C8[3]+multi_ch6_C8[4]+multi_ch6_C8[5]+multi_ch6_C8[6]+multi_ch6_C8[7]+multi_ch6_C8[8];





var multi_ch6_temp = multi_ch6_name_split.split('C1_ENV_TEMP^')[1];

var multi_ch6_tempvalue = multi_ch6_temp[0]+multi_ch6_temp[1]+multi_ch6_temp[2]+multi_ch6_temp[3]+multi_ch6_temp[4]+multi_ch6_temp[5]+multi_ch6_temp[6]+multi_ch6_temp[7]+multi_ch6_temp[8];



var multi_ch6_humidity = multi_ch6_name_split.split('C1_ENV_HUM^')[1];

var multi_ch6_humidityvalue = multi_ch6_humidity[0]+multi_ch6_humidity[1]+multi_ch6_humidity[2]+multi_ch6_humidity[3]+multi_ch6_humidity[4]+multi_ch6_humidity[5]+multi_ch6_humidity[6]+multi_ch6_humidity[7]+multi_ch6_humidity[8];



var multi_ch6_ke = multi_ch6_name_split.split('C1_ENV_Ke^')[1];

var multi_ch6_kevalue = multi_ch6_ke[0]+multi_ch6_ke[1]+multi_ch6_ke[2]+multi_ch6_ke[3]+multi_ch6_ke[4]+multi_ch6_ke[5]+multi_ch6_ke[6]+multi_ch6_ke[7]+multi_ch6_ke[8];



var multi_ch6_ke = multi_ch6_name_split.split('C1_ENV_Ke^')[1];

var multi_ch6_kevalue = multi_ch6_ke[0]+multi_ch6_ke[1]+multi_ch6_ke[2]+multi_ch6_ke[3]+multi_ch6_ke[4]+multi_ch6_ke[5]+multi_ch6_ke[6]+multi_ch6_ke[7]+multi_ch6_ke[8];



var multi_ch6_dev_a = multi_ch6_name_split.split('C2_DEV_A^')[1];

var multi_ch6_dev_a_value = multi_ch6_dev_a[0]+multi_ch6_dev_a[1]+multi_ch6_dev_a[2]+multi_ch6_dev_a[3]+multi_ch6_dev_a[4]+multi_ch6_dev_a[5]+multi_ch6_dev_a[6]+multi_ch6_dev_a[7]+multi_ch6_dev_a[8];



var multi_ch6_dev_b = multi_ch6_name_split.split('C2_DEV_B^')[1];

var multi_ch6_dev_b_value = multi_ch6_dev_b[0]+multi_ch6_dev_b[1]+multi_ch6_dev_b[2]+multi_ch6_dev_b[3]+multi_ch6_dev_b[4]+multi_ch6_dev_b[5]+multi_ch6_dev_b[6]+multi_ch6_dev_b[7]+multi_ch6_dev_b[8];



var multi_ch6_deg_a = multi_ch6_name_split.split('C3_DEG_A^')[1];

var multi_ch6_deg_a_value = multi_ch6_deg_a[0]+multi_ch6_deg_a[1]+multi_ch6_deg_a[2]+multi_ch6_deg_a[3]+multi_ch6_deg_a[4]+multi_ch6_deg_a[5]+multi_ch6_deg_a[6]+multi_ch6_deg_a[7]+multi_ch6_deg_a[8];



var multi_ch6_deg_b = multi_ch6_name_split.split('C3_DEG_B^')[1];

var multi_ch6_deg_b_value = multi_ch6_deg_b[0]+multi_ch6_deg_b[1]+multi_ch6_deg_b[2]+multi_ch6_deg_b[3]+multi_ch6_deg_b[4]+multi_ch6_deg_b[5]+multi_ch6_deg_b[6]+multi_ch6_deg_b[7]+multi_ch6_deg_b[8];





var multi_ch6_lot_ch = multi_ch6_name_split.split('C4_LOT_CH^')[1];

var multi_ch6_lot_ch_value = multi_ch6_lot_ch[0]+multi_ch6_lot_ch[1]+multi_ch6_lot_ch[2]+multi_ch6_lot_ch[3]+multi_ch6_lot_ch[4]+multi_ch6_lot_ch[5]+multi_ch6_lot_ch[6]+multi_ch6_lot_ch[7]+multi_ch6_lot_ch[8];



var multi_ch6_cal_a = multi_ch6_name_split.split('C5_CAL_A^')[1];

var multi_ch6_cal_a_value = multi_ch6_cal_a[0]+multi_ch6_cal_a[1]+multi_ch6_cal_a[2]+multi_ch6_cal_a[3]+multi_ch6_cal_a[4]+multi_ch6_cal_a[5]+multi_ch6_cal_a[6]+multi_ch6_cal_a[7]+multi_ch6_cal_a[8];



var multi_ch6_cal_b = multi_ch6_name_split.split('C5_CAL_B^')[1];

var multi_ch6_cal_b_value = multi_ch6_cal_b[0]+multi_ch6_cal_b[1]+multi_ch6_cal_b[2]+multi_ch6_cal_b[3]+multi_ch6_cal_b[4]+multi_ch6_cal_b[5]+multi_ch6_cal_b[6]+multi_ch6_cal_b[7]+multi_ch6_cal_b[8];





var multi_ch6_ktemp = multi_ch6_name_split.split('C6_Ktemp^')[1];

var multi_ch6_ktemp_value = multi_ch6_ktemp[0]+multi_ch6_ktemp[1]+multi_ch6_ktemp[2]+multi_ch6_ktemp[3]+multi_ch6_ktemp[4]+multi_ch6_ktemp[5]+multi_ch6_ktemp[6]+multi_ch6_ktemp[7]+multi_ch6_ktemp[8];





var multi_ch6_kunit = multi_ch6_name_split.split('C7_Kunit^')[1];

var multi_ch6_kunit_value = multi_ch6_kunit[0]+multi_ch6_kunit[1]+multi_ch6_kunit[2]+multi_ch6_kunit[3]+multi_ch6_kunit[4]+multi_ch6_kunit[5]+multi_ch6_kunit[6]+multi_ch6_kunit[7]+multi_ch6_kunit[8];





var multi_ch6_corr_a = multi_ch6_name_split.split('C8_CORR_A^')[1];

var multi_ch6_corr_a_value = multi_ch6_corr_a[0]+multi_ch6_corr_a[1]+multi_ch6_corr_a[2]+multi_ch6_corr_a[3]+multi_ch6_corr_a[4]+multi_ch6_corr_a[5]+multi_ch6_corr_a[6]+multi_ch6_corr_a[7]+multi_ch6_corr_a[8];





var multi_ch6_corr_b = multi_ch6_name_split.split('C8_CORR_B^')[1];

var multi_ch6_corr_b_value = multi_ch6_corr_b[0]+multi_ch6_corr_b[1]+multi_ch6_corr_b[2]+multi_ch6_corr_b[3]+multi_ch6_corr_b[4]+multi_ch6_corr_b[5]+multi_ch6_corr_b[6]+multi_ch6_corr_b[7]+multi_ch6_corr_b[8];



var single_multi_ch6_k_s = input.split('MULTI_CH6_INFO');

var multi_ch6_k_s_split = single_multi_ch6_k_s[1];

var k_s_multi_ch6 = multi_ch6_k_s_split.split('|K/S^')[1];

var splitted = k_s_multi_ch6.split('F7');

var k_s = splitted[0];

var multi_str_k_s_array_6 = k_s.split('$');

for(var j_1 = 0; j_1 < multi_str_k_s_array_6.length; j_1++) {

multi_str_k_s_array_6[j_1] = multi_str_k_s_array_6[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var single_multi_ch6_ = input.split('MULTI_CH6_INFO');

var multi_ch6_rm_split = single_multi_ch6_k_s[1];

var rm_multi_ch6 = multi_ch6_rm_split.split('|MAIN_R^')[1];
var rm_multi_ch6_btn = rm_multi_ch6.split('|SUB_R^')[0];
if(rm_multi_ch6_btn.includes("$")){
var multi_str_rm_array_6 = rm_multi_ch6_btn.split('$');

for(var k_1 = 0; k_1 < multi_str_rm_array_6.length; k_1++) {

multi_str_rm_array_6[k_1] = multi_str_rm_array_6[k_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var multi_str_rm_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rm_array_6[l_1] ="0";

}

}



var multi_ch6_rm_split = single_multi_ch6_k_s[1];

var rm_multi_ch6 = multi_ch6_rm_split.split('|MAIN_R^')[1];
var rm_multi_ch6_btn = rm_multi_ch6.split('|SUB_R^')[0];
if(rm_multi_ch6_btn.includes("$")){
var multi_str_rm_array_6 = rm_multi_ch6_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_rm_array_6.length; l_1++) {

multi_str_rm_array_6[l_1] = multi_str_rm_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var multi_str_rm_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rm_array_6[l_1] ="0";

}
}





var multi_ch6_tm_split = single_multi_ch6_k_s[1];

var tm_multi_ch6 = multi_ch6_tm_split.split('|MEAS_TIME^')[1];
var tm_multi_ch6_btn = tm_multi_ch6.split('|MAIN_R^')[0];
if(tm_multi_ch6_btn.includes("$")){
var multi_str_tm_array_6 = tm_multi_ch6_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_tm_array_6.length; l_1++) {

multi_str_tm_array_6[l_1] = multi_str_tm_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var multi_str_tm_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_tm_array_6[l_1] ="0";

}
}



var multi_ch6_rs_split = single_multi_ch6_k_s[1];

var rs_multi_ch6 = multi_ch6_rs_split.split('|SUB_R^')[1];
var rs_multi_ch6_btn = rs_multi_ch6.split('|MEAS_R^')[0];

if(rs_multi_ch6_btn.includes("$")){
var multi_str_rs_array_6 = rs_multi_ch6_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_rs_array_6.length; l_1++) {

multi_str_rs_array_6[l_1] = multi_str_rs_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}  
}
else{
var multi_str_rs_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rs_array_6[l_1] ="0";

}

}





var multi_ch6_mr_split = single_multi_ch6_k_s[1];

var mr_multi_ch6 = multi_ch6_mr_split.split('|MEAS_R^')[1];

var mr_multi_ch6_btn = mr_multi_ch6.split('|K/S^')[0];

if(mr_multi_ch6_btn.includes("$")){

var multi_str_mr_array_6 = mr_multi_ch6_btn.split('$');

for(var l_1 = 0; l_1 < multi_str_mr_array_6.length; l_1++) {

multi_str_mr_array_6[l_1] = multi_str_mr_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

else{

var multi_str_mr_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_mr_array_6[l_1] ="0";

}

}



var ch6_time_split = single_multi_ch6_k_s[1];

var time_ch6 = ch6_time_split.split('|TIME^')[1];

var splitted = time_ch6.split('F7');

var multi_str_time_array_6 = time_ch6.split('$');

for(var l_1 = 0; l_1 < multi_str_time_array_6.length; l_1++) {

multi_str_time_array_6[l_1] = multi_str_time_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}            



var ch6_mnsmp_split = single_multi_ch6_k_s[1];

var mnsmp_ch6 = ch6_time_split.split('|M_NSMP^')[1];

var splitted = mnsmp_ch6.split('F7');

var multi_str_mnsmp_array_6 = mnsmp_ch6.split('$');

for(var l_1 = 0; l_1 < multi_str_mnsmp_array_6.length; l_1++) {

multi_str_mnsmp_array_6[l_1] = multi_str_mnsmp_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch6_mdsmp_split = single_multi_ch6_k_s[1];

var mdsmp_ch6 = ch6_mdsmp_split.split('|M_DSMP^')[1];

var splitted = mdsmp_ch6.split('F7');

var multi_str_mdsmp_array_6 = mdsmp_ch6.split('$');

for(var l_1 = 0; l_1 < multi_str_mdsmp_array_6.length; l_1++) {

multi_str_mdsmp_array_6[l_1] = multi_str_mdsmp_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch6_mnref_split = single_multi_ch6_k_s[1];

var mnref_ch6 = ch6_mnref_split.split('|M_NREF^')[1];

var splitted = mnref_ch6.split('F7');

var multi_str_mnref_array_6 = mnref_ch6.split('$');

for(var l_1 = 0; l_1 < multi_str_mnref_array_6.length; l_1++) {

multi_str_mnref_array_6[l_1] = multi_str_mnref_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch6_mdref_split = single_multi_ch6_k_s[1];

var mdref_ch6 = ch6_time_split.split('|M_DREF^')[1];

var splitted = mdref_ch6.split('F7');

var multi_str_mdref_array_6 = mdref_ch6.split('$');

for(var l_1 = 0; l_1 < multi_str_mdref_array_6.length; l_1++) {

multi_str_mdref_array_6[l_1] = multi_str_mdref_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch6_snsmp_split = single_multi_ch6_k_s[1];

var snsmp_ch6 = ch6_snsmp_split.split('|S_NSMP^')[1];

var splitted = snsmp_ch6.split('F7');

var multi_str_snsmp_array_6 = snsmp_ch6.split('$');

for(var l_1 = 0; l_1 < multi_str_snsmp_array_6.length; l_1++) {

multi_str_snsmp_array_6[l_1] = multi_str_snsmp_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch6_sdsmp_split = single_multi_ch6_k_s[1];

var sdsmp_ch6 = ch6_time_split.split('|S_DSMP^')[1];

var splitted = sdsmp_ch6.split('F7');

var multi_str_sdsmp_array_6 = sdsmp_ch6.split('$');

for(var l_1 = 0; l_1 < multi_str_sdsmp_array_6.length; l_1++) {

multi_str_sdsmp_array_6[l_1] = multi_str_sdsmp_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch6_snref_split = single_multi_ch6_k_s[1];

var snref_ch6 = ch6_snref_split.split('|S_NREF^')[1];

var splitted = snref_ch6.split('F7');

var multi_str_snref_array_6 = snref_ch6.split('$');

for(var l_1 = 0; l_1 < multi_str_snref_array_6.length; l_1++) {

multi_str_snref_array_6[l_1] = multi_str_snref_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch6_sderf_split = single_multi_ch6_k_s[1];

var sderf_ch6 = ch6_sderf_split.split('|S_DREF^')[1];

var splitted = sderf_ch6.split('F7');

var multi_str_sderf_array_6 = sderf_ch6.split('$');

for(var l_1 = 0; l_1 < multi_str_sderf_array_6.length; l_1++) {

multi_str_sderf_array_6[l_1] = multi_str_sderf_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}



else{



multi_ch6_novalue = "0";            

multi_ch6_dksvalue=            "0";



multi_ch6_C0value=       "0";

multi_ch6_tempvalue= "0.000";

multi_ch6_humidityvalue=          "0.00";

multi_ch6_kevalue=       "0";

multi_ch6_C1value=       "0";

multi_ch6_dev_a_value=             "0";

multi_ch6_dev_b_value=             "0";

multi_ch6_C2value=       "0";

multi_ch6_deg_a_value=             "0";

multi_ch6_deg_b_value=             "0";

multi_ch6_C3value=       "0";

multi_ch6_lot_ch_value=             "0";

multi_ch6_C4value=       "0";

multi_ch6_cal_a_value=               "0";

multi_ch6_cal_b_value=              "0";

multi_ch6_C5value=       "0";

multi_ch6_ktemp_value=            "0";

multi_ch6_C6value=       "0";

multi_ch6_kunit_value=               "0";

multi_ch6_C7value=       "0";

multi_ch6_corr_a_value=            "0";

multi_ch6_corr_b_value=            "0";

multi_ch6_C8value=       "0";



multi_ch6_mwhtqvalue="0";

multi_ch6_mwhtrvalue="0";

multi_ch6_mblkqvalue="0";

multi_ch6_mblkrvalue="0";

multi_ch6_moptcurvevalue="0";



multi_ch6_swhtqvalue="0";

multi_ch6_swhtrvalue="0";

multi_ch6_sblkqvalue="0";

multi_ch6_sblkrvalue="0";

multi_ch6_soptcurvevalue="0";





multi_ch6_soptcurve2="0";

multi_ch6_boptcurve2="0";



var multi_str_tm_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_tm_array_6[l_1] ="0";

}



var multi_str_rm_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rm_array_6[l_1] ="0";

}



var multi_str_mr_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_mr_array_6[l_1] ="0";

}



var multi_str_rs_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rs_array_6[l_1] ="0";

}

var multi_str_k_s_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_k_s_array_6[l_1] ="0";

}



var multi_str_time_array_6 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_time_array_6[l_1] ="0";

}



var multi_str_mnsmp_array_6 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mnsmp_array_6[l_1] ="0";

}



var multi_str_mdsmp_array_6 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mdsmp_array_6[l_1] ="0";

}



var multi_str_mnref_array_6 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mnref_array_6[l_1] ="0";

}



var multi_str_mdref_array_6 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_mdref_array_6[l_1] ="0";

}



var multi_str_snsmp_array_6 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_snsmp_array_6[l_1] ="0";

}



var multi_str_sdsmp_array_6 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_sdsmp_array_6[l_1] ="0";

}



var multi_str_snref_array_6 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_snref_array_6[l_1] ="0";

}

var multi_str_sderf_array_6 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

multi_str_sderf_array_6[l_1] ="0";

}

}



if(input.includes("SINGLE_CH1")){





var single_ch1_info = input.split('SINGLE_CH1_INFO');

var ch1_no_split = single_ch1_info[1];

var ch1_no = ch1_no_split.split('NO^')[1];

var ch1_novalue = ch1_no[0];





var ch1_mw = ch1_no_split.split('M_WL^')[1];

var ch1_mwvalue = ch1_mw.split('')[0];



var ch1_mwhtq = ch1_no_split.split('M_WHT_Q^')[1];

var ch1_mwhtqvalue = ch1_mwhtq.split('')[0];





var ch1_mwhtr = ch1_no_split.split('M_WHT_R^')[1];

var ch1_mwhtrvalue = ch1_mwhtr.split('')[0];



var ch1_mblkq = ch1_no_split.split('M_BLK_Q^')[1];

var ch1_mblkqvalue = ch1_mblkq.split('')[0];



var ch1_mblkr = ch1_no_split.split('M_BLK_R^')[1];

var ch1_mblkrvalue = ch1_mblkr.split('')[0];



var ch1_moptcurve = ch1_no_split.split('M_OPT_CURVE^')[1];

var ch1_moptcurvevalue = ch1_moptcurve.split('$')[0];



var ch1_boptcurve = ch1_no_split.split('M_OPT_CURVE^')[1];

var ch1_boptcurve1 = ch1_boptcurve.split('')[0];

if(ch1_boptcurve1.length == 1){

var ch1_boptcurve2 = "0";

}

else{

var ch1_boptcurve2 = ch1_boptcurve1.split('$')[1].split('')[0];

}





var ch1_sw = ch1_no_split.split('S_WL^')[1];

var ch1_swvalue = ch1_sw[0]+ch1_sw[1]+ch1_sw[2]+ch1_sw[3]+ch1_sw[4];

var ch1_swhtq = ch1_no_split.split('S_WHT_Q^')[1];

var ch1_swhtqvalue = ch1_swhtq[0]+ch1_swhtq[1]+ch1_swhtq[2]+ch1_swhtq[3]+ch1_swhtq[4]+ch1_swhtq[5]+ch1_swhtq[6]+ch1_swhtq[7];

var ch1_swhtr = ch1_no_split.split('S_WHT_R^')[1];

var ch1_swhtrvalue = ch1_swhtr[0]+ch1_swhtr[1]+ch1_swhtr[2]+ch1_swhtr[3]+ch1_swhtr[4]+ch1_swhtr[5]+ch1_swhtr[6]+ch1_swhtr[7];

var ch1_sblkq = ch1_no_split.split('S_BLK_Q^')[1];

var ch1_sblkqvalue = ch1_sblkq[0]+ch1_sblkq[1]+ch1_sblkq[2]+ch1_sblkq[3]+ch1_sblkq[4]+ch1_sblkq[5]+ch1_sblkq[6]+ch1_sblkq[7];

var ch1_sblkr = ch1_no_split.split('S_BLK_R^')[1];

var ch1_sblkrvalue = ch1_sblkr[0]+ch1_sblkr[1]+ch1_sblkr[2]+ch1_sblkr[3]+ch1_sblkr[4]+ch1_sblkr[5]+ch1_sblkr[6]+ch1_sblkr[7];

var ch1_soptcurve = ch1_no_split.split('S_OPT_CURVE^')[1];

var ch1_soptcurvevalue = ch1_soptcurve[0]+ch1_soptcurve[1]+ch1_soptcurve[2]+ch1_soptcurve[3]+ch1_soptcurve[4]+ch1_soptcurve[5]+ch1_soptcurve[6]+ch1_soptcurve[7];



var ch1_soptcurve = ch1_no_split.split('S_OPT_CURVE^')[1];

var ch1_soptcurve1 = ch1_soptcurve.split('')[0];



 if(ch1_soptcurve1.length == 1){

var ch1_soptcurve2 = "0";

}

else{

var ch1_soptcurve2 = ch1_soptcurve1.split('$')[1].split('')[0];

}

var ch1_name_split = single_ch1_info[1];

var ch1_name = ch1_name_split.split('NAME^')[1];

var ch1_namevalue = ch1_name[0]+ch1_name[1]+ch1_name[2]+ch1_name[3];    

var ch1_unit = ch1_name_split.split('UNIT^')[1];

var ch1_unitvalue = ch1_unit[0]+ch1_unit[1]+ch1_unit[2]+ch1_unit[3]+ch1_unit[4];

var ch1_result = ch1_name_split.split('RSLT^')[1];

var ch1_resultvalue = ch1_result[0]+ch1_result[1]+ch1_result[2]+ch1_result[3]+ch1_result[4]+ch1_result[5];

var single_ch1_lotno = input.split('SINGLE_CH1_LOT_INFO');

var ch1_lot_split = single_ch1_lotno[1];

var lot_ch1 = ch1_lot_split.split('LOT^')[1];

var lotvalue_ch1 = lot_ch1[0]+lot_ch1[1]+lot_ch1[2]+lot_ch1[3]+lot_ch1[4]+lot_ch1[5]+lot_ch1[6];

var ch1 = "CH";

var val1= "1";

var lotvalue_ch1 =  "<"+lotvalue_ch1+">";



var ch1_dks = ch1_name_split.split('dK/S^')[1];

var ch1_dksvalue = ch1_dks[0]+ch1_dks[1]+ch1_dks[2]+ch1_dks[3]+ch1_dks[4]+ch1_dks[5]+ch1_dks[6]+ch1_dks[7]+ch1_dks[8];    



var ch1_C0 = ch1_name_split.split('C0^')[1];

var ch1_C0value = ch1_C0[0]+ch1_C0[1]+ch1_C0[2]+ch1_C0[3]+ch1_C0[4]+ch1_C0[5]+ch1_C0[6]+ch1_C0[7]+ch1_C0[8];

var ch1_C1 = ch1_name_split.split('C1^')[1];

var ch1_C1value = ch1_C1[0]+ch1_C1[1]+ch1_C1[2]+ch1_C1[3]+ch1_C1[4]+ch1_C1[5]+ch1_C1[6]+ch1_C1[7]+ch1_C1[8];

var ch1_C2 = ch1_name_split.split('C2^')[1];

var ch1_C2value = ch1_C2[0]+ch1_C2[1]+ch1_C2[2]+ch1_C2[3]+ch1_C2[4]+ch1_C2[5]+ch1_C2[6]+ch1_C2[7]+ch1_C2[8];

var ch1_C3 = ch1_name_split.split('C3^')[1];

var ch1_C3value = ch1_C3[0]+ch1_C3[1]+ch1_C3[2]+ch1_C3[3]+ch1_C3[4]+ch1_C3[5]+ch1_C3[6]+ch1_C3[7]+ch1_C3[8];

var ch1_C4 = ch1_name_split.split('C4^')[1];

var ch1_C4value = ch1_C4[0]+ch1_C4[1]+ch1_C4[2]+ch1_C4[3]+ch1_C4[4]+ch1_C4[5]+ch1_C4[6]+ch1_C4[7]+ch1_C4[8];

var ch1_C5 = ch1_name_split.split('C5^')[1];

var ch1_C5value = ch1_C5[0]+ch1_C5[1]+ch1_C5[2]+ch1_C5[3]+ch1_C5[4]+ch1_C5[5]+ch1_C5[6]+ch1_C5[7]+ch1_C5[8];

var ch1_C6 = ch1_name_split.split('C6^')[1];

var ch1_C6value = ch1_C6[0]+ch1_C6[1]+ch1_C6[2]+ch1_C6[3]+ch1_C6[4]+ch1_C6[5]+ch1_C6[6]+ch1_C6[7]+ch1_C6[8];

var ch1_C7 = ch1_name_split.split('C7^')[1];

var ch1_C7value = ch1_C7[0]+ch1_C7[1]+ch1_C7[2]+ch1_C7[3]+ch1_C7[4]+ch1_C7[5]+ch1_C7[6]+ch1_C7[7]+ch1_C7[8];

var ch1_C8 = ch1_name_split.split('C8^')[1];

var ch1_C8value = ch1_C8[0]+ch1_C8[1]+ch1_C8[2]+ch1_C8[3]+ch1_C8[4]+ch1_C8[5]+ch1_C8[6]+ch1_C8[7]+ch1_C8[8];





var ch1_temp = ch1_name_split.split('C1_ENV_TEMP^')[1];

var ch1_tempvalue = ch1_temp[0]+ch1_temp[1]+ch1_temp[2]+ch1_temp[3]+ch1_temp[4]+ch1_temp[5]+ch1_temp[6]+ch1_temp[7]+ch1_temp[8];



var ch1_humidity = ch1_name_split.split('C1_ENV_HUM^')[1];

var ch1_humidityvalue = ch1_humidity[0]+ch1_humidity[1]+ch1_humidity[2]+ch1_humidity[3]+ch1_humidity[4]+ch1_humidity[5]+ch1_humidity[6]+ch1_humidity[7]+ch1_humidity[8];



var ch1_ke = ch1_name_split.split('C1_ENV_Ke^')[1];

var ch1_kevalue = ch1_ke[0]+ch1_ke[1]+ch1_ke[2]+ch1_ke[3]+ch1_ke[4]+ch1_ke[5]+ch1_ke[6]+ch1_ke[7]+ch1_ke[8];



var ch1_ke = ch1_name_split.split('C1_ENV_Ke^')[1];

var ch1_kevalue = ch1_ke[0]+ch1_ke[1]+ch1_ke[2]+ch1_ke[3]+ch1_ke[4]+ch1_ke[5]+ch1_ke[6]+ch1_ke[7]+ch1_ke[8];



var ch1_dev_a = ch1_name_split.split('C2_DEV_A^')[1];

var ch1_dev_a_value = ch1_dev_a[0]+ch1_dev_a[1]+ch1_dev_a[2]+ch1_dev_a[3]+ch1_dev_a[4]+ch1_dev_a[5]+ch1_dev_a[6]+ch1_dev_a[7]+ch1_dev_a[8];



var ch1_dev_b = ch1_name_split.split('C2_DEV_B^')[1];

var ch1_dev_b_value = ch1_dev_b[0]+ch1_dev_b[1]+ch1_dev_b[2]+ch1_dev_b[3]+ch1_dev_b[4]+ch1_dev_b[5]+ch1_dev_b[6]+ch1_dev_b[7]+ch1_dev_b[8];



var ch1_deg_a = ch1_name_split.split('C3_DEG_A^')[1];

var ch1_deg_a_value = ch1_deg_a[0]+ch1_deg_a[1]+ch1_deg_a[2]+ch1_deg_a[3]+ch1_deg_a[4]+ch1_deg_a[5]+ch1_deg_a[6]+ch1_deg_a[7]+ch1_deg_a[8];



var ch1_deg_b = ch1_name_split.split('C3_DEG_B^')[1];

var ch1_deg_b_value = ch1_deg_b[0]+ch1_deg_b[1]+ch1_deg_b[2]+ch1_deg_b[3]+ch1_deg_b[4]+ch1_deg_b[5]+ch1_deg_b[6]+ch1_deg_b[7]+ch1_deg_b[8];





var ch1_lot_ch = ch1_name_split.split('C4_LOT_CH^')[1];

var ch1_lot_ch_value = ch1_lot_ch[0]+ch1_lot_ch[1]+ch1_lot_ch[2]+ch1_lot_ch[3]+ch1_lot_ch[4]+ch1_lot_ch[5]+ch1_lot_ch[6]+ch1_lot_ch[7]+ch1_lot_ch[8];



var ch1_cal_a = ch1_name_split.split('C5_CAL_A^')[1];

var ch1_cal_a_value = ch1_cal_a[0]+ch1_cal_a[1]+ch1_cal_a[2]+ch1_cal_a[3]+ch1_cal_a[4]+ch1_cal_a[5]+ch1_cal_a[6]+ch1_cal_a[7]+ch1_cal_a[8];



var ch1_cal_b = ch1_name_split.split('C5_CAL_B^')[1];

var ch1_cal_b_value = ch1_cal_b[0]+ch1_cal_b[1]+ch1_cal_b[2]+ch1_cal_b[3]+ch1_cal_b[4]+ch1_cal_b[5]+ch1_cal_b[6]+ch1_cal_b[7]+ch1_cal_b[8];





var ch1_ktemp = ch1_name_split.split('C6_Ktemp^')[1];

var ch1_ktemp_value = ch1_ktemp[0]+ch1_ktemp[1]+ch1_ktemp[2]+ch1_ktemp[3]+ch1_ktemp[4]+ch1_ktemp[5]+ch1_ktemp[6]+ch1_ktemp[7]+ch1_ktemp[8];





var ch1_kunit = ch1_name_split.split('C7_Kunit^')[1];

var ch1_kunit_value = ch1_kunit[0]+ch1_kunit[1]+ch1_kunit[2]+ch1_kunit[3]+ch1_kunit[4]+ch1_kunit[5]+ch1_kunit[6]+ch1_kunit[7]+ch1_kunit[8];





var ch1_corr_a = ch1_name_split.split('C8_CORR_A^')[1];

var ch1_corr_a_value = ch1_corr_a[0]+ch1_corr_a[1]+ch1_corr_a[2]+ch1_corr_a[3]+ch1_corr_a[4]+ch1_corr_a[5]+ch1_corr_a[6]+ch1_corr_a[7]+ch1_corr_a[8];





var ch1_corr_b = ch1_name_split.split('C8_CORR_B^')[1];

var ch1_corr_b_value = ch1_corr_b[0]+ch1_corr_b[1]+ch1_corr_b[2]+ch1_corr_b[3]+ch1_corr_b[4]+ch1_corr_b[5]+ch1_corr_b[6]+ch1_corr_b[7]+ch1_corr_b[8];





var single_ch1_k_s = input.split('SINGLE_CH1_LOT_INFO');

var ch1_k_s_split = single_ch1_k_s[1];

var k_s_ch1 = ch1_k_s_split.split('|K/S^')[1];

var splitted = k_s_ch1.split('F7');

var k_s = splitted[0];

var str_k_s_array_1 = k_s.split('$');

for(var j_1 = 0; j_1 < str_k_s_array_1.length; j_1++) {

str_k_s_array_1[j_1] = str_k_s_array_1[j_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var single_ch1_ = input.split('SINGLE_CH1_LOT_INFO');

var ch1_rm_split = single_ch1_k_s[1];

var rm_ch1 = ch1_rm_split.split('|MAIN_R^')[1];
var rm_ch1_btn = rm_ch1.split('|SUB_R^')[0];

if(rm_ch1_btn.includes("$")){
var str_rm_array_1 = rm.split('$');

for(var k_1 = 0; k_1 < str_rm_array_1.length; k_1++) {

str_rm_array_1[k_1] = str_rm_array_1[k_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var str_rm_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rm_array_1[l_1] ="0";

}
}



var ch1_rm_split = single_ch1_k_s[1];

var rm_ch1 = ch1_rm_split.split('|MAIN_R^')[1];
var rm_ch1_btn = rm_ch1.split('|SUB_R^')[0];
if(rm_ch1_btn.includes("$")){
var str_rm_array_1 = rm_ch1_btn.split('$');

for(var l_1 = 0; l_1 < str_rm_array_1.length; l_1++) {

str_rm_array_1[l_1] = str_rm_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var multi_str_rm_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rm_array_1[l_1] ="0";

}
}





var ch1_tm_split = single_ch1_k_s[1];

var tm_ch1 = ch1_tm_split.split('|MEAS_TIME^')[1];
var tm_ch1_btn = tm_ch1.split('|MAIN_R^')[0];
 if(tm_ch1_btn.includes("$")){
var str_tm_array_1 = tm_ch1_btn.split('$');

for(var l_1 = 0; l_1 < str_tm_array_1.length; l_1++) {

str_tm_array_1[l_1] = str_tm_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var str_tm_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_tm_array_1[l_1] ="0";          

}
}



var ch1_rs_split = single_ch1_k_s[1];

var rs_ch1 = ch1_rs_split.split('|SUB_R^')[1];
var rs_ch1_btn = rs_ch1.split('|MEAS_R^')[1];
if(rs_ch1_btn.includes("$")){
var str_rs_array_1 = rs_ch1_btn.split('$');

for(var l_1 = 0; l_1 < str_rs_array_1.length; l_1++) {

str_rs_array_1[l_1] = str_rs_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}  
}
else{
var str_rs_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rs_array_1[l_1] ="0";

}
}





var ch1_mr_split = single_ch1_k_s[1];

var mr_ch1 = ch1_mr_split.split('|MEAS_R^')[1];

var mr_ch1_btn = mr_ch1.split('|K/S^')[0];

if(mr_ch1_btn.includes("$")){

var str_mr_array_1 = mr_ch1_btn.split('$');

for(var l_1 = 0; l_1 < str_mr_array_1.length; l_1++) {

str_mr_array_1[l_1] = str_mr_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

else{



var str_mr_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_mr_array_1[l_1] ="0";

}

}



var ch1_time_split = single_ch1_k_s[1];

var time_ch1 = ch1_time_split.split('|TIME^')[1];

var splitted = time_ch1.split('F7');

var str_time_array_1 = time_ch1.split('$');

for(var l_1 = 0; l_1 < str_time_array_1.length; l_1++) {

str_time_array_1[l_1] = str_time_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}            



var ch1_mnsmp_split = single_ch1_k_s[1];

var mnsmp_ch1 = ch1_time_split.split('|M_NSMP^')[1];

var splitted = mnsmp_ch1.split('F7');

var str_mnsmp_array_1 = mnsmp_ch1.split('$');

for(var l_1 = 0; l_1 < str_mnsmp_array_1.length; l_1++) {

str_mnsmp_array_1[l_1] = str_mnsmp_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch1_mdsmp_split = single_ch1_k_s[1];

var mdsmp_ch1 = ch1_mdsmp_split.split('|M_DSMP^')[1];

var splitted = mdsmp_ch1.split('F7');

var str_mdsmp_array_1 = mdsmp_ch1.split('$');

for(var l_1 = 0; l_1 < str_mdsmp_array_1.length; l_1++) {

str_mdsmp_array_1[l_1] = str_mdsmp_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch1_mnref_split = single_ch1_k_s[1];

var mnref_ch1 = ch1_mnref_split.split('|M_NREF^')[1];

var splitted = mnref_ch1.split('F7');

var str_mnref_array_1 = mnref_ch1.split('$');

for(var l_1 = 0; l_1 < str_mnref_array_1.length; l_1++) {

str_mnref_array_1[l_1] = str_mnref_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch1_mdref_split = single_ch1_k_s[1];

var mdref_ch1 = ch1_time_split.split('|M_DREF^')[1];

var splitted = mdref_ch1.split('F7');

var str_mdref_array_1 = mdref_ch1.split('$');

for(var l_1 = 0; l_1 < str_mdref_array_1.length; l_1++) {

str_mdref_array_1[l_1] = str_mdref_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch1_snsmp_split = single_ch1_k_s[1];

var snsmp_ch1 = ch1_snsmp_split.split('|S_NSMP^')[1];

var splitted = snsmp_ch1.split('F7');

var str_snsmp_array_1 = snsmp_ch1.split('$');

for(var l_1 = 0; l_1 < str_snsmp_array_1.length; l_1++) {

str_snsmp_array_1[l_1] = str_snsmp_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch1_sdsmp_split = single_ch1_k_s[1];

var sdsmp_ch1 = ch1_time_split.split('|S_DSMP^')[1];

var splitted = sdsmp_ch1.split('F7');

var str_sdsmp_array_1 = sdsmp_ch1.split('$');

for(var l_1 = 0; l_1 < str_sdsmp_array_1.length; l_1++) {

str_sdsmp_array_1[l_1] = str_sdsmp_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch1_snref_split = single_ch1_k_s[1];

var snref_ch1 = ch1_snref_split.split('|S_NREF^')[1];

var splitted = snref_ch1.split('F7');

var str_snref_array_1 = snref_ch1.split('$');

for(var l_1 = 0; l_1 < str_snref_array_1.length; l_1++) {

str_snref_array_1[l_1] = str_snref_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch1_sderf_split = single_ch1_k_s[1];

var sderf_ch1 = ch1_sderf_split.split('|S_DREF^')[1];

var splitted = sderf_ch1.split('F7');

var str_sderf_array_1 = sderf_ch1.split('$');

for(var l_1 = 0; l_1 < str_sderf_array_1.length; l_1++) {

str_sderf_array_1[l_1] = str_sderf_array_1[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}



else{



ch1_novalue = "0";

ch1_dksvalue=         "0";



ch1_C0value=    "0";

ch1_tempvalue=              "0.000";

ch1_humidityvalue=       "0.00";

ch1_kevalue=    "0";

ch1_C1value=    "0";

ch1_dev_a_value=          "0";

ch1_dev_b_value=          "0";

ch1_C2value=    "0";

ch1_deg_a_value=          "0";

ch1_deg_b_value=         "0";

ch1_C3value=    "0";

ch1_lot_ch_value=         "0";

ch1_C4value=    "0";

ch1_cal_a_value=            "0";

ch1_cal_b_value=           "0";

ch1_C5value=    "0";

ch1_ktemp_value=         "0";

ch1_C6value=    "0";

ch1_kunit_value=            "0";

ch1_C7value=    "0";

ch1_corr_a_value=         "0";

ch1_corr_b_value=         "0";

ch1_C8value=    "0";



ch1_mwhtqvalue="0";

ch1_mwhtrvalue="0";

ch1_mblkqvalue="0";

ch1_mblkrvalue="0";

ch1_moptcurvevalue="0";



ch1_swhtqvalue="0";

ch1_swhtrvalue="0";

ch1_sblkqvalue="0";

ch1_sblkrvalue="0";

ch1_soptcurvevalue="0";

ch1_soptcurve2="0";

ch1_boptcurve2="0";







var str_tm_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_tm_array_1[l_1] ="0";          

}



var str_rm_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rm_array_1[l_1] ="0";

}



var str_mr_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_mr_array_1[l_1] ="0";

}



var str_rs_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rs_array_1[l_1] ="0";

}

var str_k_s_array_1 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_k_s_array_1[l_1] ="0";

}

var str_time_array_1 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_time_array_1[l_1] ="0";

}



var str_mnsmp_array_1 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mnsmp_array_1[l_1] ="0";

}



var str_mdsmp_array_1 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mdsmp_array_1[l_1] ="0";

}



var str_mnref_array_1 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mnref_array_1[l_1] ="0";

}



var str_mdref_array_1 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mdref_array_1[l_1] ="0";

}



var str_snsmp_array_1 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_snsmp_array_1[l_1] ="0";

}



var str_sdsmp_array_1 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_sdsmp_array_1[l_1] ="0";

}



var str_snref_array_1 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_snref_array_1[l_1] ="0";

}

var str_sderf_array_1 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_sderf_array_1[l_1] ="0";

}





}



if(input.includes("SINGLE_CH2")){





var single_ch2_info = input.split('SINGLE_CH2_INFO');

var ch2_no_split = single_ch2_info[1];

var ch2_no = ch2_no_split.split('NO^')[1];

var ch2_novalue = ch2_no[0];    



var ch2_mw = ch2_no_split.split('M_WL^')[1];

var ch2_mwvalue = ch2_mw[0]+ch2_mw[1]+ch2_mw[2]+ch2_mw[3]+ch2_mw[4];

var ch2_mwhtq = ch2_no_split.split('M_WHT_Q^')[1];

var ch2_mwhtqvalue = ch2_mwhtq[0]+ch2_mwhtq[1]+ch2_mwhtq[2]+ch2_mwhtq[3]+ch2_mwhtq[4]+ch2_mwhtq[5]+ch2_mwhtq[6]+ch2_mwhtq[7];





var ch2_mwhtr = ch2_no_split.split('M_WHT_R^')[1];

var ch2_mwhtrvalue = ch2_mwhtr[0]+ch2_mwhtr[1]+ch2_mwhtr[2]+ch2_mwhtr[3]+ch2_mwhtr[4]+ch2_mwhtr[5]+ch2_mwhtr[6]+ch2_mwhtr[7];



var ch2_mblkq = ch2_no_split.split('M_BLK_Q^')[1];

var ch2_mblkqvalue = ch2_mblkq[0]+ch2_mblkq[1]+ch2_mblkq[2]+ch2_mblkq[3]+ch2_mblkq[4]+ch2_mblkq[5]+ch2_mblkq[6]+ch2_mblkq[7];



var ch2_mblkr = ch2_no_split.split('M_BLK_R^')[1];

var ch2_mblkrvalue = ch2_mblkr[0]+ch2_mblkr[1]+ch2_mblkr[2]+ch2_mblkr[3]+ch2_mblkr[4]+ch2_mblkr[5]+ch2_mblkr[6]+ch2_mblkr[7];



var ch2_moptcurve = ch2_no_split.split('M_OPT_CURVE^')[1];

var ch2_moptcurvevalue = ch2_moptcurve[0]+ch2_moptcurve[1]+ch2_moptcurve[2]+ch2_moptcurve[3]+ch2_moptcurve[4]+ch2_moptcurve[5]+ch2_moptcurve[6]+ch2_moptcurve[7];



var ch2_boptcurve = ch2_no_split.split('M_OPT_CURVE^')[1];

var ch2_boptcurve1 = ch2_boptcurve.split('')[0];



 if(ch2_boptcurve1.length == 1){

var ch2_boptcurve2 = "0";

}

else{

var ch2_boptcurve2 = ch2_boptcurve1.split('$')[1].split('')[0];



}



var ch2_sw = ch2_no_split.split('S_WL^')[1];

var ch2_swvalue = ch2_sw.split('')[0];



var ch2_swhtq = ch2_no_split.split('S_WHT_Q^')[1];

var ch2_swhtqvalue = ch2_swhtq.split('')[0];





var ch2_swhtr = ch2_no_split.split('S_WHT_R^')[1];

var ch2_swhtrvalue = ch2_swhtr.split('')[0];



var ch2_sblkq = ch2_no_split.split('S_BLK_Q^')[1];

var ch2_sblkqvalue = ch2_sblkq.split('')[0];



var ch2_sblkr = ch2_no_split.split('S_BLK_R^')[1];

var ch2_sblkrvalue = ch2_sblkr.split('')[0];



var ch2_soptcurve = ch2_no_split.split('S_OPT_CURVE^')[1];

var ch2_soptcurvevalue = ch2_soptcurve.split('$')[0];





var ch2_soptcurve = ch2_no_split.split('S_OPT_CURVE^')[1];

var ch2_soptcurve1 = ch2_soptcurve.split('')[0];

if(ch2_soptcurve1.length == 1){

var ch2_soptcurve2 = "0";

}

else

{

  var ch2_soptcurve2 = ch2_soptcurve1.split('$')[1].split('')[0];

}





var ch2_name_split = single_ch2_info[1];

var ch2_name = ch2_name_split.split('NAME^')[1];

var ch2_namevalue = ch2_name[0]+ch2_name[1]+ch2_name[2]+ch2_name[3];    

var ch2_unit = ch2_name_split.split('UNIT^')[1];

var ch2_unitvalue = ch2_unit[0]+ch2_unit[1]+ch2_unit[2]+ch2_unit[3]+ch2_unit[4];

var ch2_result = ch2_name_split.split('RSLT^')[1];

var ch2_resultvalue = ch2_result[0]+ch2_result[1]+ch2_result[2]+ch2_result[3]+ch2_result[4]+ch2_result[5];

var single_ch2_lotno = input.split('SINGLE_CH2_LOT_INFO');

var ch2_lot_split = single_ch2_lotno[1];

var lot_ch2 = ch2_lot_split.split('LOT^')[1];

var lotvalue_ch2 = lot_ch2[0]+lot_ch2[1]+lot_ch2[2]+lot_ch2[3]+lot_ch2[4]+lot_ch2[5]+lot_ch2[6];

var ch2 = "CH";

var val2= "2";

var lotvalue_ch2 =  "<"+lotvalue_ch2+">";



var ch2_dks = ch2_name_split.split('dK/S^')[1];

var ch2_dksvalue = ch2_dks[0]+ch2_dks[1]+ch2_dks[2]+ch2_dks[3]+ch2_dks[4]+ch2_dks[5]+ch2_dks[6]+ch2_dks[7]+ch2_dks[8];    



var ch2_C0 = ch2_name_split.split('C0^')[1];

var ch2_C0value = ch2_C0[0]+ch2_C0[1]+ch2_C0[2]+ch2_C0[3]+ch2_C0[4]+ch2_C0[5]+ch2_C0[6]+ch2_C0[7]+ch2_C0[8];

var ch2_C1 = ch2_name_split.split('C1^')[1];

var ch2_C1value = ch2_C1[0]+ch2_C1[1]+ch2_C1[2]+ch2_C1[3]+ch2_C1[4]+ch2_C1[5]+ch2_C1[6]+ch2_C1[7]+ch2_C1[8];

var ch2_C2 = ch2_name_split.split('C2^')[1];

var ch2_C2value = ch2_C2[0]+ch2_C2[1]+ch2_C2[2]+ch2_C2[3]+ch2_C2[4]+ch2_C2[5]+ch2_C2[6]+ch2_C2[7]+ch2_C2[8];

var ch2_C3 = ch2_name_split.split('C3^')[1];

var ch2_C3value = ch2_C3[0]+ch2_C3[1]+ch2_C3[2]+ch2_C3[3]+ch2_C3[4]+ch2_C3[5]+ch2_C3[6]+ch2_C3[7]+ch2_C3[8];

var ch2_C4 = ch2_name_split.split('C4^')[1];

var ch2_C4value = ch2_C4[0]+ch2_C4[1]+ch2_C4[2]+ch2_C4[3]+ch2_C4[4]+ch2_C4[5]+ch2_C4[6]+ch2_C4[7]+ch2_C4[8];

var ch2_C5 = ch2_name_split.split('C5^')[1];

var ch2_C5value = ch2_C5[0]+ch2_C5[1]+ch2_C5[2]+ch2_C5[3]+ch2_C5[4]+ch2_C5[5]+ch2_C5[6]+ch2_C5[7]+ch2_C5[8];

var ch2_C6 = ch2_name_split.split('C6^')[1];

var ch2_C6value = ch2_C6[0]+ch2_C6[1]+ch2_C6[2]+ch2_C6[3]+ch2_C6[4]+ch2_C6[5]+ch2_C6[6]+ch2_C6[7]+ch2_C6[8];

var ch2_C7 = ch2_name_split.split('C7^')[1];

var ch2_C7value = ch2_C7[0]+ch2_C7[1]+ch2_C7[2]+ch2_C7[3]+ch2_C7[4]+ch2_C7[5]+ch2_C7[6]+ch2_C7[7]+ch2_C7[8];

var ch2_C8 = ch2_name_split.split('C8^')[1];

var ch2_C8value = ch2_C8[0]+ch2_C8[1]+ch2_C8[2]+ch2_C8[3]+ch2_C8[4]+ch2_C8[5]+ch2_C8[6]+ch2_C8[7]+ch2_C8[8];





var ch2_temp = ch2_name_split.split('C1_ENV_TEMP^')[1];

var ch2_tempvalue = ch2_temp[0]+ch2_temp[1]+ch2_temp[2]+ch2_temp[3]+ch2_temp[4]+ch2_temp[5]+ch2_temp[6]+ch2_temp[7]+ch2_temp[8];



var ch2_humidity = ch2_name_split.split('C1_ENV_HUM^')[1];

var ch2_humidityvalue = ch2_humidity[0]+ch2_humidity[1]+ch2_humidity[2]+ch2_humidity[3]+ch2_humidity[4]+ch2_humidity[5]+ch2_humidity[6]+ch2_humidity[7]+ch2_humidity[8];



var ch2_ke = ch2_name_split.split('C1_ENV_Ke^')[1];

var ch2_kevalue = ch2_ke[0]+ch2_ke[1]+ch2_ke[2]+ch2_ke[3]+ch2_ke[4]+ch2_ke[5]+ch2_ke[6]+ch2_ke[7]+ch2_ke[8];



var ch2_ke = ch2_name_split.split('C1_ENV_Ke^')[1];

var ch2_kevalue = ch2_ke[0]+ch2_ke[1]+ch2_ke[2]+ch2_ke[3]+ch2_ke[4]+ch2_ke[5]+ch2_ke[6]+ch2_ke[7]+ch2_ke[8];



var ch2_dev_a = ch2_name_split.split('C2_DEV_A^')[1];

var ch2_dev_a_value = ch2_dev_a[0]+ch2_dev_a[1]+ch2_dev_a[2]+ch2_dev_a[3]+ch2_dev_a[4]+ch2_dev_a[5]+ch2_dev_a[6]+ch2_dev_a[7]+ch2_dev_a[8];



var ch2_dev_b = ch2_name_split.split('C2_DEV_B^')[1];

var ch2_dev_b_value = ch2_dev_b[0]+ch2_dev_b[1]+ch2_dev_b[2]+ch2_dev_b[3]+ch2_dev_b[4]+ch2_dev_b[5]+ch2_dev_b[6]+ch2_dev_b[7]+ch2_dev_b[8];



var ch2_deg_a = ch2_name_split.split('C3_DEG_A^')[1];

var ch2_deg_a_value = ch2_deg_a[0]+ch2_deg_a[1]+ch2_deg_a[2]+ch2_deg_a[3]+ch2_deg_a[4]+ch2_deg_a[5]+ch2_deg_a[6]+ch2_deg_a[7]+ch2_deg_a[8];



var ch2_deg_b = ch2_name_split.split('C3_DEG_B^')[1];

var ch2_deg_b_value = ch2_deg_b[0]+ch2_deg_b[1]+ch2_deg_b[2]+ch2_deg_b[3]+ch2_deg_b[4]+ch2_deg_b[5]+ch2_deg_b[6]+ch2_deg_b[7]+ch2_deg_b[8];





var ch2_lot_ch = ch2_name_split.split('C4_LOT_CH^')[1];

var ch2_lot_ch_value = ch2_lot_ch[0]+ch2_lot_ch[1]+ch2_lot_ch[2]+ch2_lot_ch[3]+ch2_lot_ch[4]+ch2_lot_ch[5]+ch2_lot_ch[6]+ch2_lot_ch[7]+ch2_lot_ch[8];



var ch2_cal_a = ch2_name_split.split('C5_CAL_A^')[1];

var ch2_cal_a_value = ch2_cal_a[0]+ch2_cal_a[1]+ch2_cal_a[2]+ch2_cal_a[3]+ch2_cal_a[4]+ch2_cal_a[5]+ch2_cal_a[6]+ch2_cal_a[7]+ch2_cal_a[8];



var ch2_cal_b = ch2_name_split.split('C5_CAL_B^')[1];

var ch2_cal_b_value = ch2_cal_b[0]+ch2_cal_b[1]+ch2_cal_b[2]+ch2_cal_b[3]+ch2_cal_b[4]+ch2_cal_b[5]+ch2_cal_b[6]+ch2_cal_b[7]+ch2_cal_b[8];





var ch2_ktemp = ch2_name_split.split('C6_Ktemp^')[1];

var ch2_ktemp_value = ch2_ktemp[0]+ch2_ktemp[1]+ch2_ktemp[2]+ch2_ktemp[3]+ch2_ktemp[4]+ch2_ktemp[5]+ch2_ktemp[6]+ch2_ktemp[7]+ch2_ktemp[8];





var ch2_kunit = ch2_name_split.split('C7_Kunit^')[1];

var ch2_kunit_value = ch2_kunit[0]+ch2_kunit[1]+ch2_kunit[2]+ch2_kunit[3]+ch2_kunit[4]+ch2_kunit[5]+ch2_kunit[6]+ch2_kunit[7]+ch2_kunit[8];





var ch2_corr_a = ch2_name_split.split('C8_CORR_A^')[1];

var ch2_corr_a_value = ch2_corr_a[0]+ch2_corr_a[1]+ch2_corr_a[2]+ch2_corr_a[3]+ch2_corr_a[4]+ch2_corr_a[5]+ch2_corr_a[6]+ch2_corr_a[7]+ch2_corr_a[8];





var ch2_corr_b = ch2_name_split.split('C8_CORR_B^')[1];

var ch2_corr_b_value = ch2_corr_b[0]+ch2_corr_b[1]+ch2_corr_b[2]+ch2_corr_b[3]+ch2_corr_b[4]+ch2_corr_b[5]+ch2_corr_b[6]+ch2_corr_b[7]+ch2_corr_b[8];





var single_ch2_k_s = input.split('SINGLE_CH2_LOT_INFO');

var ch2_k_s_split = single_ch2_k_s[1];

var k_s_ch2 = ch2_k_s_split.split('|K/S^')[1];

var splitted = k_s_ch2.split('F7');

var k_s = splitted[0];

var str_k_s_array_2 = k_s.split('$');

for(var j_2 = 0; j_2 < str_k_s_array_2.length; j_2++) {

str_k_s_array_2[j_2] = str_k_s_array_2[j_2].replace(/^\s*/, "").replace(/\s*$/, "");

}

var single_ch2_ = input.split('SINGLE_CH2_LOT_INFO');

var ch2_rm_split = single_ch2_k_s[1];

var rm_ch2 = ch2_rm_split.split('|MAIN_R')[1];

var splitted = rm_ch2.split('F7');

var rm = splitted[0];

var str_rm_array_2 = rm.split('$');

for(var k_2 = 0; k_2 < str_rm_array_2.length; k_2++) {

str_rm_array_2[k_2] = str_rm_array_2[k_2].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch2_rm_split = single_ch2_k_s[1];

var rm_ch2 = ch2_rm_split.split('|MAIN_R')[1];

var splitted = rm_ch2.split('F7');

var rm = splitted[0];

var str_rm_array_2 = rm.split('$');

for(var l_2 = 0; l_2 < str_rm_array_2.length; l_2++) {

str_rm_array_2[l_2] = str_rm_array_2[l_2].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch2_tm_split = single_ch2_k_s[1];

var tm_ch2 = ch2_tm_split.split('|MEAS_TIME^')[1];
var tm_ch2_btn = tm_ch2.split('|MAIN_R^')[0];
if(tm_ch2_btn.includes("$")){
var tm_ch2_btn = tm_ch2_btn.split('$');

for(var l_1 = 0; l_1 < str_tm_array_2.length; l_1++) {

str_tm_array_2[l_1] = str_tm_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var str_tm_array_2 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_tm_array_2[l_1] ="0";

}
}



var ch2_rs_split = single_ch2_k_s[1];

var rs_ch2 = ch2_rs_split.split('|SUB_R^')[1];
var rs_ch2_btn = rs_ch2.split('|MEAS_R^')[0];
if(rs_ch2_btn.includes("$")){
var str_rs_array_2 = rs_ch2_btn.split('$');

for(var l_1 = 0; l_1 < str_rs_array_2.length; l_1++) {

str_rs_array_2[l_1] = str_rs_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
 else{
var str_rs_array_2 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rs_array_2[l_1] ="0";

}
}





var ch2_mr_split = single_ch2_k_s[1];

var mr_ch2 = ch2_mr_split.split('|MEAS_R^')[1];

var mr_ch2_btn = mr_ch2.split('|K/S^')[0];

if(mr_ch2_btn.includes("$")){

var str_mr_array_2 = mr_ch2_btn.split('$');

for(var l_1 = 0; l_1 < str_mr_array_2.length; l_1++) {

str_mr_array_2[l_1] = str_mr_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

else{

var str_mr_array_2 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_mr_array_2[l_1] ="0";

}

}







var ch2_time_split = single_ch2_k_s[1];

var time_ch2 = ch2_time_split.split('|TIME^')[1];

var splitted = time_ch2.split('F7');

var str_time_array_2 = time_ch2.split('$');

for(var l_1 = 0; l_1 < str_time_array_2.length; l_1++) {

str_time_array_2[l_1] = str_time_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}            



var ch2_mnsmp_split = single_ch2_k_s[1];

var mnsmp_ch2 = ch2_time_split.split('|M_NSMP^')[1];

var splitted = mnsmp_ch2.split('F7');

var str_mnsmp_array_2 = mnsmp_ch2.split('$');

for(var l_1 = 0; l_1 < str_mnsmp_array_2.length; l_1++) {

str_mnsmp_array_2[l_1] = str_mnsmp_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch2_mdsmp_split = single_ch2_k_s[1];

var mdsmp_ch2 = ch2_mdsmp_split.split('|M_DSMP^')[1];

var splitted = mdsmp_ch2.split('F7');

var str_mdsmp_array_2 = mdsmp_ch2.split('$');

for(var l_1 = 0; l_1 < str_mdsmp_array_2.length; l_1++) {

str_mdsmp_array_2[l_1] = str_mdsmp_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch2_mnref_split = single_ch2_k_s[1];

var mnref_ch2 = ch2_mnref_split.split('|M_NREF^')[1];

var splitted = mnref_ch2.split('F7');

var str_mnref_array_2 = mnref_ch2.split('$');

for(var l_1 = 0; l_1 < str_mnref_array_2.length; l_1++) {

str_mnref_array_2[l_1] = str_mnref_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch2_mdref_split = single_ch2_k_s[1];

var mdref_ch2 = ch2_time_split.split('|M_DREF^')[1];

var splitted = mdref_ch2.split('F7');

var str_mdref_array_2 = mdref_ch2.split('$');

for(var l_1 = 0; l_1 < str_mdref_array_2.length; l_1++) {

str_mdref_array_2[l_1] = str_mdref_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch2_snsmp_split = single_ch2_k_s[1];

var snsmp_ch2 = ch2_snsmp_split.split('|S_NSMP^')[1];

var splitted = snsmp_ch2.split('F7');

var str_snsmp_array_2 = snsmp_ch2.split('$');

for(var l_1 = 0; l_1 < str_snsmp_array_2.length; l_1++) {

str_snsmp_array_2[l_1] = str_snsmp_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch2_sdsmp_split = single_ch2_k_s[1];

var sdsmp_ch2 = ch2_time_split.split('|S_DSMP^')[1];

var splitted = sdsmp_ch2.split('F7');

var str_sdsmp_array_2 = sdsmp_ch2.split('$');

for(var l_1 = 0; l_1 < str_sdsmp_array_2.length; l_1++) {

str_sdsmp_array_2[l_1] = str_sdsmp_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch2_snref_split = single_ch2_k_s[1];

var snref_ch2 = ch2_snref_split.split('|S_NREF^')[1];

var splitted = snref_ch2.split('F7');

var str_snref_array_2 = snref_ch2.split('$');

for(var l_1 = 0; l_1 < str_snref_array_2.length; l_1++) {

str_snref_array_2[l_1] = str_snref_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch2_sderf_split = single_ch2_k_s[1];

var sderf_ch2 = ch2_sderf_split.split('|S_DREF^')[1];

var splitted = sderf_ch2.split('F7');

var str_sderf_array_2 = sderf_ch2.split('$');

for(var l_1 = 0; l_1 < str_sderf_array_2.length; l_1++) {

str_sderf_array_2[l_1] = str_sderf_array_2[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}



else{



ch2_novalue = "0";        

ch2_dksvalue=         "0";



ch2_C0value=    "0";

ch2_tempvalue=              "0.000";

ch2_humidityvalue=       "0.00";

ch2_kevalue=    "0";

ch2_C1value=    "0";

ch2_dev_a_value=          "0";

ch2_dev_b_value=          "0";

ch2_C2value=    "0";

ch2_deg_a_value=          "0";

ch2_deg_b_value=         "0";

ch2_C3value=    "0";

ch2_lot_ch_value=         "0";

ch2_C4value=    "0";

ch2_cal_a_value=            "0";

ch2_cal_b_value=           "0";

ch2_C5value=    "0";

ch2_ktemp_value=         "0";

ch2_C6value=    "0";

ch2_kunit_value=            "0";

ch2_C7value=    "0";

ch2_corr_a_value=         "0";

ch2_corr_b_value=         "0";

ch2_C8value=    "0";



ch2_mwhtqvalue="0";

ch2_mwhtrvalue="0";

ch2_mblkqvalue="0";

ch2_mblkrvalue="0";

ch2_moptcurvevalue="0";



ch2_swhtqvalue="0";

ch2_swhtrvalue="0";

ch2_sblkqvalue="0";

ch2_sblkrvalue="0";

ch2_soptcurvevalue="0";



ch2_soptcurve2="0";

ch2_boptcurve2="0";



var str_tm_array_2 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_tm_array_2[l_1] ="0";

}



var str_rm_array_2 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rm_array_2[l_1] ="0";

}



var str_mr_array_2 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_mr_array_2[l_1] ="0";

}



var str_rs_array_2 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rs_array_2[l_1] ="0";

}

var str_k_s_array_2 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_k_s_array_2[l_1] ="0";

}



var str_time_array_2 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_time_array_2[l_1] ="0";

}



var str_mnsmp_array_2 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mnsmp_array_2[l_1] ="0";

}



var str_mdsmp_array_2 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mdsmp_array_2[l_1] ="0";

}



var str_mnref_array_2 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mnref_array_2[l_1] ="0";

}



var str_mdref_array_2 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mdref_array_2[l_1] ="0";

}



var str_snsmp_array_2 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_snsmp_array_2[l_1] ="0";

}



var str_sdsmp_array_2 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_sdsmp_array_2[l_1] ="0";

}



var str_snref_array_2 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_snref_array_2[l_1] ="0";

}

var str_sderf_array_2 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_sderf_array_2[l_1] ="0";

}

}



if(input.includes("SINGLE_CH3")){



var single_ch3_info = input.split('SINGLE_CH3_INFO');

var ch3_no_split = single_ch3_info[1];

var ch3_no = ch3_no_split.split('NO^')[1];

var ch3_novalue = ch3_no[0];    

var ch3_name_split = single_ch3_info[1];





var ch3_mw = ch3_no_split.split('M_WL^')[1];

var ch3_mwvalue = ch3_mw[0]+ch3_mw[1]+ch3_mw[2]+ch3_mw[3]+ch3_mw[4];

var ch3_mwhtq = ch3_no_split.split('M_WHT_Q^')[1];

var ch3_mwhtqvalue = ch3_mwhtq[0]+ch3_mwhtq[1]+ch3_mwhtq[2]+ch3_mwhtq[3]+ch3_mwhtq[4]+ch3_mwhtq[5]+ch3_mwhtq[6]+ch3_mwhtq[7];





var ch3_mwhtr = ch3_no_split.split('M_WHT_R^')[1];

var ch3_mwhtrvalue = ch3_mwhtr[0]+ch3_mwhtr[1]+ch3_mwhtr[2]+ch3_mwhtr[3]+ch3_mwhtr[4]+ch3_mwhtr[5]+ch3_mwhtr[6]+ch3_mwhtr[7];



var ch3_mblkq = ch3_no_split.split('M_BLK_Q^')[1];

var ch3_mblkqvalue = ch3_mblkq[0]+ch3_mblkq[1]+ch3_mblkq[2]+ch3_mblkq[3]+ch3_mblkq[4]+ch3_mblkq[5]+ch3_mblkq[6]+ch3_mblkq[7];



var ch3_mblkr = ch3_no_split.split('M_BLK_R^')[1];

var ch3_mblkrvalue = ch3_mblkr[0]+ch3_mblkr[1]+ch3_mblkr[2]+ch3_mblkr[3]+ch3_mblkr[4]+ch3_mblkr[5]+ch3_mblkr[6]+ch3_mblkr[7];



var ch3_moptcurve = ch3_no_split.split('M_OPT_CURVE^')[1];

var ch3_moptcurvevalue = ch3_moptcurve[0]+ch3_moptcurve[1]+ch3_moptcurve[2]+ch3_moptcurve[3]+ch3_moptcurve[4]+ch3_moptcurve[5]+ch3_moptcurve[6]+ch3_moptcurve[7];



var ch3_boptcurve = ch3_no_split.split('M_OPT_CURVE^')[1];

var ch3_boptcurve1 = ch3_boptcurve.split('')[0];

if(ch3_boptcurve1.length == 1){

var ch3_boptcurve2 = "0";

}

else{

var ch3_boptcurve2 = ch3_boptcurve1.split('$')[1].split('')[0];

}



var ch3_sw = ch3_no_split.split('S_WL^')[1];

var ch3_swvalue = ch3_sw.split('')[0];

var ch3_swhtq = ch3_no_split.split('S_WHT_Q^')[1];

var ch3_swhtqvalue = ch3_swhtq.split('')[0];                    

var ch3_swhtr = ch3_no_split.split('S_WHT_R^')[1];

var ch3_swhtrvalue = ch3_soptcurve.split('')[0];

var ch3_sblkq = ch3_no_split.split('S_BLK_Q^')[1];

var ch3_sblkqvalue = ch3_soptcurve.split('')[0];

var ch3_sblkr = ch3_no_split.split('S_BLK_R^')[1];

var ch3_sblkrvalue = ch3_soptcurve.split('')[0];

var ch3_soptcurve = ch3_no_split.split('S_OPT_CURVE^')[1];

var ch3_soptcurvevalue = ch3_soptcurve.split('$')[0];



var ch3_soptcurve = ch3_no_split.split('S_OPT_CURVE^')[1];

var ch3_soptcurve1 = ch3_soptcurve.split('')[0];

var ch3_soptcurve2 = ch3_soptcurve1.split('$')[1].split('')[0];



var ch3_name = ch3_name_split.split('NAME^')[1];

var ch3_namevalue = ch3_name[0]+ch3_name[1]+ch3_name[2]+ch3_name[3];    

var ch3_unit = ch3_name_split.split('UNIT^')[1];

var ch3_unitvalue = ch3_unit[0]+ch3_unit[1]+ch3_unit[2]+ch3_unit[3]+ch3_unit[4];

var ch3_result = ch3_name_split.split('RSLT^')[1];

var ch3_resultvalue = ch3_result[0]+ch3_result[1]+ch3_result[2]+ch3_result[3]+ch3_result[4]+ch3_result[5];

var single_ch3_lotno = input.split('SINGLE_CH3_LOT_INFO');

var ch3_lot_split = single_ch3_lotno[1];

var lot_ch3 = ch3_lot_split.split('LOT^')[1];

var lotvalue_ch3 = lot_ch3[0]+lot_ch3[1]+lot_ch3[2]+lot_ch3[3]+lot_ch3[4]+lot_ch3[5]+lot_ch3[6];

var ch3 = "CH";

var val3= "3";

var lotvalue_ch3 =  "<"+lotvalue_ch3+">";





var ch3_dks = ch3_name_split.split('dK/S^')[1];

var ch3_dksvalue = ch3_dks[0]+ch3_dks[1]+ch3_dks[2]+ch3_dks[3]+ch3_dks[4]+ch3_dks[5]+ch3_dks[6]+ch3_dks[7]+ch3_dks[8];    



var ch3_C0 = ch3_name_split.split('C0^')[1];

var ch3_C0value = ch3_C0[0]+ch3_C0[1]+ch3_C0[2]+ch3_C0[3]+ch3_C0[4]+ch3_C0[5]+ch3_C0[6]+ch3_C0[7]+ch3_C0[8];

var ch3_C1 = ch3_name_split.split('C1^')[1];

var ch3_C1value = ch3_C1[0]+ch3_C1[1]+ch3_C1[2]+ch3_C1[3]+ch3_C1[4]+ch3_C1[5]+ch3_C1[6]+ch3_C1[7]+ch3_C1[8];

var ch3_C2 = ch3_name_split.split('C2^')[1];

var ch3_C2value = ch3_C2[0]+ch3_C2[1]+ch3_C2[2]+ch3_C2[3]+ch3_C2[4]+ch3_C2[5]+ch3_C2[6]+ch3_C2[7]+ch3_C2[8];

var ch3_C3 = ch3_name_split.split('C3^')[1];

var ch3_C3value = ch3_C3[0]+ch3_C3[1]+ch3_C3[2]+ch3_C3[3]+ch3_C3[4]+ch3_C3[5]+ch3_C3[6]+ch3_C3[7]+ch3_C3[8];

var ch3_C4 = ch3_name_split.split('C4^')[1];

var ch3_C4value = ch3_C4[0]+ch3_C4[1]+ch3_C4[2]+ch3_C4[3]+ch3_C4[4]+ch3_C4[5]+ch3_C4[6]+ch3_C4[7]+ch3_C4[8];

var ch3_C5 = ch3_name_split.split('C5^')[1];

var ch3_C5value = ch3_C5[0]+ch3_C5[1]+ch3_C5[2]+ch3_C5[3]+ch3_C5[4]+ch3_C5[5]+ch3_C5[6]+ch3_C5[7]+ch3_C5[8];

var ch3_C6 = ch3_name_split.split('C6^')[1];

var ch3_C6value = ch3_C6[0]+ch3_C6[1]+ch3_C6[2]+ch3_C6[3]+ch3_C6[4]+ch3_C6[5]+ch3_C6[6]+ch3_C6[7]+ch3_C6[8];

var ch3_C7 = ch3_name_split.split('C7^')[1];

var ch3_C7value = ch3_C7[0]+ch3_C7[1]+ch3_C7[2]+ch3_C7[3]+ch3_C7[4]+ch3_C7[5]+ch3_C7[6]+ch3_C7[7]+ch3_C7[8];

var ch3_C8 = ch3_name_split.split('C8^')[1];

var ch3_C8value = ch3_C8[0]+ch3_C8[1]+ch3_C8[2]+ch3_C8[3]+ch3_C8[4]+ch3_C8[5]+ch3_C8[6]+ch3_C8[7]+ch3_C8[8];





var ch3_temp = ch3_name_split.split('C1_ENV_TEMP^')[1];

var ch3_tempvalue = ch3_temp[0]+ch3_temp[1]+ch3_temp[2]+ch3_temp[3]+ch3_temp[4]+ch3_temp[5]+ch3_temp[6]+ch3_temp[7]+ch3_temp[8];



var ch3_humidity = ch3_name_split.split('C1_ENV_HUM^')[1];

var ch3_humidityvalue = ch3_humidity[0]+ch3_humidity[1]+ch3_humidity[2]+ch3_humidity[3]+ch3_humidity[4]+ch3_humidity[5]+ch3_humidity[6]+ch3_humidity[7]+ch3_humidity[8];



var ch3_ke = ch3_name_split.split('C1_ENV_Ke^')[1];

var ch3_kevalue = ch3_ke[0]+ch3_ke[1]+ch3_ke[2]+ch3_ke[3]+ch3_ke[4]+ch3_ke[5]+ch3_ke[6]+ch3_ke[7]+ch3_ke[8];



var ch3_ke = ch3_name_split.split('C1_ENV_Ke^')[1];

var ch3_kevalue = ch3_ke[0]+ch3_ke[1]+ch3_ke[2]+ch3_ke[3]+ch3_ke[4]+ch3_ke[5]+ch3_ke[6]+ch3_ke[7]+ch3_ke[8];



var ch3_dev_a = ch3_name_split.split('C2_DEV_A^')[1];

var ch3_dev_a_value = ch3_dev_a[0]+ch3_dev_a[1]+ch3_dev_a[2]+ch3_dev_a[3]+ch3_dev_a[4]+ch3_dev_a[5]+ch3_dev_a[6]+ch3_dev_a[7]+ch3_dev_a[8];



var ch3_dev_b = ch3_name_split.split('C2_DEV_B^')[1];

var ch3_dev_b_value = ch3_dev_b[0]+ch3_dev_b[1]+ch3_dev_b[2]+ch3_dev_b[3]+ch3_dev_b[4]+ch3_dev_b[5]+ch3_dev_b[6]+ch3_dev_b[7]+ch3_dev_b[8];



var ch3_deg_a = ch3_name_split.split('C3_DEG_A^')[1];

var ch3_deg_a_value = ch3_deg_a[0]+ch3_deg_a[1]+ch3_deg_a[2]+ch3_deg_a[3]+ch3_deg_a[4]+ch3_deg_a[5]+ch3_deg_a[6]+ch3_deg_a[7]+ch3_deg_a[8];



var ch3_deg_b = ch3_name_split.split('C3_DEG_B^')[1];

var ch3_deg_b_value = ch3_deg_b[0]+ch3_deg_b[1]+ch3_deg_b[2]+ch3_deg_b[3]+ch3_deg_b[4]+ch3_deg_b[5]+ch3_deg_b[6]+ch3_deg_b[7]+ch3_deg_b[8];





var ch3_lot_ch = ch3_name_split.split('C4_LOT_CH^')[1];

var ch3_lot_ch_value = ch3_lot_ch[0]+ch3_lot_ch[1]+ch3_lot_ch[2]+ch3_lot_ch[3]+ch3_lot_ch[4]+ch3_lot_ch[5]+ch3_lot_ch[6]+ch3_lot_ch[7]+ch3_lot_ch[8];



var ch3_cal_a = ch3_name_split.split('C5_CAL_A^')[1];

var ch3_cal_a_value = ch3_cal_a[0]+ch3_cal_a[1]+ch3_cal_a[2]+ch3_cal_a[3]+ch3_cal_a[4]+ch3_cal_a[5]+ch3_cal_a[6]+ch3_cal_a[7]+ch3_cal_a[8];



var ch3_cal_b = ch3_name_split.split('C5_CAL_B^')[1];

var ch3_cal_b_value = ch3_cal_b[0]+ch3_cal_b[1]+ch3_cal_b[2]+ch3_cal_b[3]+ch3_cal_b[4]+ch3_cal_b[5]+ch3_cal_b[6]+ch3_cal_b[7]+ch3_cal_b[8];





var ch3_ktemp = ch3_name_split.split('C6_Ktemp^')[1];

var ch3_ktemp_value = ch3_ktemp[0]+ch3_ktemp[1]+ch3_ktemp[2]+ch3_ktemp[3]+ch3_ktemp[4]+ch3_ktemp[5]+ch3_ktemp[6]+ch3_ktemp[7]+ch3_ktemp[8];





var ch3_kunit = ch3_name_split.split('C7_Kunit^')[1];

var ch3_kunit_value = ch3_kunit[0]+ch3_kunit[1]+ch3_kunit[2]+ch3_kunit[3]+ch3_kunit[4]+ch3_kunit[5]+ch3_kunit[6]+ch3_kunit[7]+ch3_kunit[8];





var ch3_corr_a = ch3_name_split.split('C8_CORR_A^')[1];

var ch3_corr_a_value = ch3_corr_a[0]+ch3_corr_a[1]+ch3_corr_a[2]+ch3_corr_a[3]+ch3_corr_a[4]+ch3_corr_a[5]+ch3_corr_a[6]+ch3_corr_a[7]+ch3_corr_a[8];





var ch3_corr_b = ch3_name_split.split('C8_CORR_B^')[1];

var ch3_corr_b_value = ch3_corr_b[0]+ch3_corr_b[1]+ch3_corr_b[2]+ch3_corr_b[3]+ch3_corr_b[4]+ch3_corr_b[5]+ch3_corr_b[6]+ch3_corr_b[7]+ch3_corr_b[8];





var single_ch3_k_s = input.split('SINGLE_CH3_LOT_INFO');

var ch3_k_s_split = single_ch3_k_s[1];

var k_s_ch3 = ch3_k_s_split.split('|K/S^')[1];

var splitted = k_s_ch3.split('F7');

var k_s = splitted[0];

var str_k_s_array_3 = k_s.split('$');

for(var j_3 = 0; j_3 < str_k_s_array_3.length; j_3++) {

str_k_s_array_3[j_3] = str_k_s_array_3[j_3].replace(/^\s*/, "").replace(/\s*$/, "");

}

var single_ch3_ = input.split('SINGLE_CH3_LOT_INFO');

var ch3_rm_split = single_ch3_k_s[1];

var rm_ch3 = ch3_rm_split.split('|MAIN_R')[1];

var splitted = rm_ch3.split('F7');

var rm = splitted[0];

var str_rm_array_3 = rm.split('$');

for(var k_3 = 0; k_3 < str_rm_array_3.length; k_3++) {

str_rm_array_3[k_3] = str_rm_array_3[k_3].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch3_rm_split = single_ch3_k_s[1];

var rm_ch3 = ch3_rm_split.split('|MAIN_R')[1];

var splitted = rm_ch3.split('F7');

var rm = splitted[0];

var str_rm_array_3 = rm.split('$');

for(var l_3 = 0; l_3 < str_rm_array_3.length; l_3++) {

str_rm_array_3[l_3] = str_rm_array_3[l_3].replace(/^\s*/, "").replace(/\s*$/, "");

}





var ch3_tm_split = single_ch3_k_s[1];

var tm_ch3 = ch3_tm_split.split('|MEAS_TIME^')[1];
var tm_ch3_btn = tm_ch3.split('|MAIN_R^')[0];

if(tm_ch3_btn.includes("$")){
var str_tm_array_3 = tm_ch3_btn.split('$');

for(var l_1 = 0; l_1 < str_tm_array_3.length; l_1++) {

str_tm_array_3[l_1] = str_tm_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var str_tm_array_3 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_tm_array_3[l_1] ="0";

}
}




var ch3_rs_split = single_ch3_k_s[1];

var rs_ch3 = ch3_rs_split.split('|SUB_R^')[1];
var rs_ch3_btn = rs_ch3.split('|MEAS_R^')[0];
if(rs_ch3_btn.includes("$")){
var str_rs_array_3 = rs_ch3_btn.split('$');

for(var l_1 = 0; l_1 < str_rs_array_3.length; l_1++) {

str_rs_array_3[l_1] = str_rs_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}  
}
else{
var multi_str_rs_array_3 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rs_array_3[l_1] ="0";

}
}

var ch3_mr_split = single_ch3_k_s[1];

var mr_ch3 = ch3_mr_split.split('|MEAS_R^')[1];

var mr_ch3_btn = mr_ch3.split('|K/S^')[0];

if(mr_ch3_btn.includes("$")){

var str_mr_array_3 = mr_ch3_btn.split('$');

for(var l_1 = 0; l_1 < str_mr_array_3.length; l_1++) {

str_mr_array_3[l_1] = str_mr_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}else{

var str_mr_array_3 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_mr_array_3[l_1] ="0";

}

}







var ch3_time_split = single_ch3_k_s[1];

var time_ch3 = ch3_time_split.split('|TIME^')[1];

var splitted = time_ch3.split('F7');

var str_time_array_3 = time_ch3.split('$');

for(var l_1 = 0; l_1 < str_time_array_3.length; l_1++) {

str_time_array_3[l_1] = str_time_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}            



var ch3_mnsmp_split = single_ch3_k_s[1];

var mnsmp_ch3 = ch3_time_split.split('|M_NSMP^')[1];

var splitted = mnsmp_ch3.split('F7');

var str_mnsmp_array_3 = mnsmp_ch3.split('$');

for(var l_1 = 0; l_1 < str_mnsmp_array_3.length; l_1++) {

str_mnsmp_array_3[l_1] = str_mnsmp_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch3_mdsmp_split = single_ch3_k_s[1];

var mdsmp_ch3 = ch3_mdsmp_split.split('|M_DSMP^')[1];

var splitted = mdsmp_ch3.split('F7');

var str_mdsmp_array_3 = mdsmp_ch3.split('$');

for(var l_1 = 0; l_1 < str_mdsmp_array_3.length; l_1++) {

str_mdsmp_array_3[l_1] = str_mdsmp_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch3_mnref_split = single_ch3_k_s[1];

var mnref_ch3 = ch3_mnref_split.split('|M_NREF^')[1];

var splitted = mnref_ch3.split('F7');

var str_mnref_array_3 = mnref_ch3.split('$');

for(var l_1 = 0; l_1 < str_mnref_array_3.length; l_1++) {

str_mnref_array_3[l_1] = str_mnref_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch3_mdref_split = single_ch3_k_s[1];

var mdref_ch3 = ch3_time_split.split('|M_DREF^')[1];

var splitted = mdref_ch3.split('F7');

var str_mdref_array_3 = mdref_ch3.split('$');

for(var l_1 = 0; l_1 < str_mdref_array_3.length; l_1++) {

str_mdref_array_3[l_1] = str_mdref_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch3_snsmp_split = single_ch3_k_s[1];

var snsmp_ch3 = ch3_snsmp_split.split('|S_NSMP^')[1];

var splitted = snsmp_ch3.split('F7');

var str_snsmp_array_3 = snsmp_ch3.split('$');

for(var l_1 = 0; l_1 < str_snsmp_array_3.length; l_1++) {

str_snsmp_array_3[l_1] = str_snsmp_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch3_sdsmp_split = single_ch3_k_s[1];

var sdsmp_ch3 = ch3_time_split.split('|S_DSMP^')[1];

var splitted = sdsmp_ch3.split('F7');

var str_sdsmp_array_3 = sdsmp_ch3.split('$');

for(var l_1 = 0; l_1 < str_sdsmp_array_3.length; l_1++) {

str_sdsmp_array_3[l_1] = str_sdsmp_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch3_snref_split = single_ch3_k_s[1];

var snref_ch3 = ch3_snref_split.split('|S_NREF^')[1];

var splitted = snref_ch3.split('F7');

var str_snref_array_3 = snref_ch3.split('$');

for(var l_1 = 0; l_1 < str_snref_array_3.length; l_1++) {

str_snref_array_3[l_1] = str_snref_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch3_sderf_split = single_ch3_k_s[1];

var sderf_ch3 = ch3_sderf_split.split('|S_DREF^')[1];

var splitted = sderf_ch3.split('F7');

var str_sderf_array_3 = sderf_ch3.split('$');

for(var l_1 = 0; l_1 < str_sderf_array_3.length; l_1++) {

str_sderf_array_3[l_1] = str_sderf_array_3[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}





else{

ch3_novalue = "0";        

ch3_dksvalue=         "0";



ch3_C0value=    "0";

ch3_tempvalue=              "0.000";

ch3_humidityvalue=       "0.00";

ch3_kevalue=    "0";

ch3_C1value=    "0";

ch3_dev_a_value=          "0";

ch3_dev_b_value=          "0";

ch3_C2value=    "0";

ch3_deg_a_value=          "0";

ch3_deg_b_value=         "0";

ch3_C3value=    "0";

ch3_lot_ch_value=         "0";

ch3_C4value=    "0";

ch3_cal_a_value=            "0";

ch3_cal_b_value=           "0";

ch3_C5value=    "0";

ch3_ktemp_value=         "0";

ch3_C6value=    "0";

ch3_kunit_value=            "0";

ch3_C7value=    "0";

ch3_corr_a_value=         "0";

ch3_corr_b_value=         "0";

ch3_C8value=    "0";



ch3_mwhtqvalue="0";

ch3_mwhtrvalue="0";

ch3_mblkqvalue="0";

ch3_mblkrvalue="0";

ch3_moptcurvevalue="0";



ch3_swhtqvalue="0";

ch3_swhtrvalue="0";

ch3_sblkqvalue="0";

ch3_sblkrvalue="0";

ch3_soptcurvevalue="0";



ch3_soptcurve2="0";

ch3_boptcurve2="0";



var str_tm_array_3 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_tm_array_3[l_1] ="0";

}



var str_rm_array_3 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rm_array_3[l_1] ="0";

}



var str_mr_array_3 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_mr_array_3[l_1] ="0";

}



var str_rs_array_3 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rs_array_3[l_1] ="0";

}

var str_k_s_array_3 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_k_s_array_3[l_1] ="0";

}



var str_time_array_3 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_time_array_3[l_1] ="0";

}



var str_mnsmp_array_3 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mnsmp_array_3[l_1] ="0";

}



var str_mdsmp_array_3 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mdsmp_array_3[l_1] ="0";

}



var str_mnref_array_3 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mnref_array_3[l_1] ="0";

}



var str_mdref_array_3 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mdref_array_3[l_1] ="0";

}



var str_snsmp_array_3 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_snsmp_array_3[l_1] ="0";

}



var str_sdsmp_array_3 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_sdsmp_array_3[l_1] ="0";

}



var str_snref_array_3 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_snref_array_3[l_1] ="0";

}

var str_sderf_array_3 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_sderf_array_3[l_1] ="0";

}

}





if(input.includes("SINGLE_CH4")){





var single_ch4_info = input.split('SINGLE_CH4_INFO');

var ch4_no_split = single_ch4_info[1];

var ch4_no = ch4_no_split.split('NO^')[1];

var ch4_novalue = ch4_no[0];    





var ch4_mw = ch4_no_split.split('M_WL^')[1];

var ch4_mwvalue = ch4_mw[0]+ch4_mw[1]+ch4_mw[2]+ch4_mw[3]+ch4_mw[4];

var ch4_mwhtq = ch4_no_split.split('M_WHT_Q^')[1];

var ch4_mwhtqvalue = ch4_mwhtq[0]+ch4_mwhtq[1]+ch4_mwhtq[2]+ch4_mwhtq[3]+ch4_mwhtq[4]+ch4_mwhtq[5]+ch4_mwhtq[6]+ch4_mwhtq[7];

var ch4_mwhtr = ch4_no_split.split('M_WHT_R^')[1];

var ch4_mwhtrvalue = ch4_mwhtr[0]+ch4_mwhtr[1]+ch4_mwhtr[2]+ch4_mwhtr[3]+ch4_mwhtr[4]+ch4_mwhtr[5]+ch4_mwhtr[6]+ch4_mwhtr[7];

var ch4_mblkq = ch4_no_split.split('M_BLK_Q^')[1];

var ch4_mblkqvalue = ch4_mblkq[0]+ch4_mblkq[1]+ch4_mblkq[2]+ch4_mblkq[3]+ch4_mblkq[4]+ch4_mblkq[5]+ch4_mblkq[6]+ch4_mblkq[7];

var ch4_mblkr = ch4_no_split.split('M_BLK_R^')[1];

var ch4_mblkrvalue = ch4_mblkr[0]+ch4_mblkr[1]+ch4_mblkr[2]+ch4_mblkr[3]+ch4_mblkr[4]+ch4_mblkr[5]+ch4_mblkr[6]+ch4_mblkr[7];

var ch4_moptcurve = ch4_no_split.split('M_OPT_CURVE^')[1];

var ch4_moptcurvevalue = ch4_moptcurve[0]+ch4_moptcurve[1]+ch4_moptcurve[2]+ch4_moptcurve[3]+ch4_moptcurve[4]+ch4_moptcurve[5]+ch4_moptcurve[6]+ch4_moptcurve[7];



var ch4_boptcurve = ch4_no_split.split('M_OPT_CURVE^')[1];

var ch4_boptcurve1 = ch4_boptcurve.split('')[0];

var ch4_boptcurve2 = ch4_boptcurve1.split('$')[1].split('')[0];





var ch4_sw = ch4_no_split.split('S_WL^')[1];

var ch4_swvalue = ch4_sw.split('')[0];

var ch4_swhtq = ch4_no_split.split('S_WHT_Q^')[1];

var ch4_swhtqvalue = ch4_swhtq.split('')[0];

var ch4_swhtr = ch4_no_split.split('S_WHT_R^')[1];

var ch4_swhtrvalue = ch4_swhtr.split('')[0];

var ch4_sblkq = ch4_no_split.split('S_BLK_Q^')[1];

var ch4_sblkqvalue = ch4_sblkq.split('')[0];

var ch4_sblkr = ch4_no_split.split('S_BLK_R^')[1];

var ch4_sblkrvalue = ch4_sblkr.split('')[0];

var ch4_soptcurve = ch4_no_split.split('S_OPT_CURVE^')[1];

var ch4_soptcurvevalue = ch4_soptcurve.split('$')[0];



var ch4_soptcurve = ch4_no_split.split('S_OPT_CURVE^')[1];

var ch4_soptcurve1 = ch4_soptcurve.split('')[0];

var ch4_soptcurve2 = ch4_soptcurve1.split('$')[1].split('')[0];



var ch4_name_split = single_ch4_info[1];

var ch4_name = ch4_name_split.split('NAME^')[1];

var ch4_namevalue = ch4_name[0]+ch4_name[1]+ch4_name[2]+ch4_name[3];    

var ch4_unit = ch4_name_split.split('UNIT^')[1];

var ch4_unitvalue = ch4_unit[0]+ch4_unit[1]+ch4_unit[2]+ch4_unit[3]+ch4_unit[4];

var ch4_result = ch4_name_split.split('RSLT^')[1];

var ch4_resultvalue = ch4_result[0]+ch4_result[1]+ch4_result[2]+ch4_result[3]+ch4_result[4]+ch4_result[5];

var single_ch4_lotno = input.split('SINGLE_CH4_LOT_INFO');

var ch4_lot_split = single_ch4_lotno[1];

var lot_ch4 = ch4_lot_split.split('LOT^')[1];

var lotvalue_ch4 = lot_ch4[0]+lot_ch4[1]+lot_ch4[2]+lot_ch4[3]+lot_ch4[4]+lot_ch4[5]+lot_ch4[6];

var ch4 = "CH";

var val4= "4";

var lotvalue_ch4 =  "<"+lotvalue_ch4+">";



var ch4_dks = ch4_name_split.split('dK/S^')[1];

var ch4_dksvalue = ch4_dks[0]+ch4_dks[1]+ch4_dks[2]+ch4_dks[3]+ch4_dks[4]+ch4_dks[5]+ch4_dks[6]+ch4_dks[7]+ch4_dks[8];    



var ch4_C0 = ch4_name_split.split('C0^')[1];

var ch4_C0value = ch4_C0[0]+ch4_C0[1]+ch4_C0[2]+ch4_C0[3]+ch4_C0[4]+ch4_C0[5]+ch4_C0[6]+ch4_C0[7]+ch4_C0[8];

var ch4_C1 = ch4_name_split.split('C1^')[1];

var ch4_C1value = ch4_C1[0]+ch4_C1[1]+ch4_C1[2]+ch4_C1[3]+ch4_C1[4]+ch4_C1[5]+ch4_C1[6]+ch4_C1[7]+ch4_C1[8];

var ch4_C2 = ch4_name_split.split('C2^')[1];

var ch4_C2value = ch4_C2[0]+ch4_C2[1]+ch4_C2[2]+ch4_C2[3]+ch4_C2[4]+ch4_C2[5]+ch4_C2[6]+ch4_C2[7]+ch4_C2[8];

var ch4_C3 = ch4_name_split.split('C3^')[1];

var ch4_C3value = ch4_C3[0]+ch4_C3[1]+ch4_C3[2]+ch4_C3[3]+ch4_C3[4]+ch4_C3[5]+ch4_C3[6]+ch4_C3[7]+ch4_C3[8];

var ch4_C4 = ch4_name_split.split('C4^')[1];

var ch4_C4value = ch4_C4[0]+ch4_C4[1]+ch4_C4[2]+ch4_C4[3]+ch4_C4[4]+ch4_C4[5]+ch4_C4[6]+ch4_C4[7]+ch4_C4[8];

var ch4_C5 = ch4_name_split.split('C5^')[1];

var ch4_C5value = ch4_C5[0]+ch4_C5[1]+ch4_C5[2]+ch4_C5[3]+ch4_C5[4]+ch4_C5[5]+ch4_C5[6]+ch4_C5[7]+ch4_C5[8];

var ch4_C6 = ch4_name_split.split('C6^')[1];

var ch4_C6value = ch4_C6[0]+ch4_C6[1]+ch4_C6[2]+ch4_C6[3]+ch4_C6[4]+ch4_C6[5]+ch4_C6[6]+ch4_C6[7]+ch4_C6[8];

var ch4_C7 = ch4_name_split.split('C7^')[1];

var ch4_C7value = ch4_C7[0]+ch4_C7[1]+ch4_C7[2]+ch4_C7[3]+ch4_C7[4]+ch4_C7[5]+ch4_C7[6]+ch4_C7[7]+ch4_C7[8];

var ch4_C8 = ch4_name_split.split('C8^')[1];

var ch4_C8value = ch4_C8[0]+ch4_C8[1]+ch4_C8[2]+ch4_C8[3]+ch4_C8[4]+ch4_C8[5]+ch4_C8[6]+ch4_C8[7]+ch4_C8[8];





var ch4_temp = ch4_name_split.split('C1_ENV_TEMP^')[1];

var ch4_tempvalue = ch4_temp[0]+ch4_temp[1]+ch4_temp[2]+ch4_temp[3]+ch4_temp[4]+ch4_temp[5]+ch4_temp[6]+ch4_temp[7]+ch4_temp[8];



var ch4_humidity = ch4_name_split.split('C1_ENV_HUM^')[1];

var ch4_humidityvalue = ch4_humidity[0]+ch4_humidity[1]+ch4_humidity[2]+ch4_humidity[3]+ch4_humidity[4]+ch4_humidity[5]+ch4_humidity[6]+ch4_humidity[7]+ch4_humidity[8];



var ch4_ke = ch4_name_split.split('C1_ENV_Ke^')[1];

var ch4_kevalue = ch4_ke[0]+ch4_ke[1]+ch4_ke[2]+ch4_ke[3]+ch4_ke[4]+ch4_ke[5]+ch4_ke[6]+ch4_ke[7]+ch4_ke[8];



var ch4_ke = ch4_name_split.split('C1_ENV_Ke^')[1];

var ch4_kevalue = ch4_ke[0]+ch4_ke[1]+ch4_ke[2]+ch4_ke[3]+ch4_ke[4]+ch4_ke[5]+ch4_ke[6]+ch4_ke[7]+ch4_ke[8];



var ch4_dev_a = ch4_name_split.split('C2_DEV_A^')[1];

var ch4_dev_a_value = ch4_dev_a[0]+ch4_dev_a[1]+ch4_dev_a[2]+ch4_dev_a[3]+ch4_dev_a[4]+ch4_dev_a[5]+ch4_dev_a[6]+ch4_dev_a[7]+ch4_dev_a[8];



var ch4_dev_b = ch4_name_split.split('C2_DEV_B^')[1];

var ch4_dev_b_value = ch4_dev_b[0]+ch4_dev_b[1]+ch4_dev_b[2]+ch4_dev_b[3]+ch4_dev_b[4]+ch4_dev_b[5]+ch4_dev_b[6]+ch4_dev_b[7]+ch4_dev_b[8];



var ch4_deg_a = ch4_name_split.split('C3_DEG_A^')[1];

var ch4_deg_a_value = ch4_deg_a[0]+ch4_deg_a[1]+ch4_deg_a[2]+ch4_deg_a[3]+ch4_deg_a[4]+ch4_deg_a[5]+ch4_deg_a[6]+ch4_deg_a[7]+ch4_deg_a[8];



var ch4_deg_b = ch4_name_split.split('C3_DEG_B^')[1];

var ch4_deg_b_value = ch4_deg_b[0]+ch4_deg_b[1]+ch4_deg_b[2]+ch4_deg_b[3]+ch4_deg_b[4]+ch4_deg_b[5]+ch4_deg_b[6]+ch4_deg_b[7]+ch4_deg_b[8];





var ch4_lot_ch = ch4_name_split.split('C4_LOT_CH^')[1];

var ch4_lot_ch_value = ch4_lot_ch[0]+ch4_lot_ch[1]+ch4_lot_ch[2]+ch4_lot_ch[3]+ch4_lot_ch[4]+ch4_lot_ch[5]+ch4_lot_ch[6]+ch4_lot_ch[7]+ch4_lot_ch[8];



var ch4_cal_a = ch4_name_split.split('C5_CAL_A^')[1];

var ch4_cal_a_value = ch4_cal_a[0]+ch4_cal_a[1]+ch4_cal_a[2]+ch4_cal_a[3]+ch4_cal_a[4]+ch4_cal_a[5]+ch4_cal_a[6]+ch4_cal_a[7]+ch4_cal_a[8];



var ch4_cal_b = ch4_name_split.split('C5_CAL_B^')[1];

var ch4_cal_b_value = ch4_cal_b[0]+ch4_cal_b[1]+ch4_cal_b[2]+ch4_cal_b[3]+ch4_cal_b[4]+ch4_cal_b[5]+ch4_cal_b[6]+ch4_cal_b[7]+ch4_cal_b[8];





var ch4_ktemp = ch4_name_split.split('C6_Ktemp^')[1];

var ch4_ktemp_value = ch4_ktemp[0]+ch4_ktemp[1]+ch4_ktemp[2]+ch4_ktemp[3]+ch4_ktemp[4]+ch4_ktemp[5]+ch4_ktemp[6]+ch4_ktemp[7]+ch4_ktemp[8];





var ch4_kunit = ch4_name_split.split('C7_Kunit^')[1];

var ch4_kunit_value = ch4_kunit[0]+ch4_kunit[1]+ch4_kunit[2]+ch4_kunit[3]+ch4_kunit[4]+ch4_kunit[5]+ch4_kunit[6]+ch4_kunit[7]+ch4_kunit[8];





var ch4_corr_a = ch4_name_split.split('C8_CORR_A^')[1];

var ch4_corr_a_value = ch4_corr_a[0]+ch4_corr_a[1]+ch4_corr_a[2]+ch4_corr_a[3]+ch4_corr_a[4]+ch4_corr_a[5]+ch4_corr_a[6]+ch4_corr_a[7]+ch4_corr_a[8];





var ch4_corr_b = ch4_name_split.split('C8_CORR_B^')[1];

var ch4_corr_b_value = ch4_corr_b[0]+ch4_corr_b[1]+ch4_corr_b[2]+ch4_corr_b[3]+ch4_corr_b[4]+ch4_corr_b[5]+ch4_corr_b[6]+ch4_corr_b[7]+ch4_corr_b[8];



var single_ch4_k_s = input.split('SINGLE_CH4_LOT_INFO');

var ch4_k_s_split = single_ch4_k_s[1];

var k_s_ch4 = ch4_k_s_split.split('|K/S^')[1];

var splitted = k_s_ch4.split('F7');

var k_s = splitted[0];

var str_k_s_array_4 = k_s.split('$');

for(var j_4 = 0; j_4 < str_k_s_array_4.length; j_4++) {

str_k_s_array_4[j_4] = str_k_s_array_4[j_4].replace(/^\s*/, "").replace(/\s*$/, "");

}

var single_ch4_ = input.split('SINGLE_CH4_LOT_INFO');

var ch4_rm_split = single_ch4_k_s[1];

var rm_ch4 = ch4_rm_split.split('|MAIN_R')[1];

var splitted = rm_ch4.split('F7');

var rm = splitted[0];

var str_rm_array_4 = rm.split('$');

for(var k_4 = 0; k_4 < str_rm_array_4.length; k_4++) {

str_rm_array_4[k_4] = str_rm_array_4[k_4].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch6_rm_split = single_ch4_k_s[1];

var rm_ch6 = ch6_rm_split.split('|MAIN_R')[1];

var splitted = rm_ch6.split('F7');

var rm = splitted[0];

var str_rm_array_4 = rm.split('$');

for(var l_4 = 0; l_4 < str_rm_array_4.length; l_4++) {

str_rm_array_4[l_4] = str_rm_array_4[l_4].replace(/^\s*/, "").replace(/\s*$/, "");

}





var ch4_tm_split = single_ch4_k_s[1];

var tm_ch4 = ch4_tm_split.split('|MEAS_TIME^')[1];
var tm_ch4_btn = tm_ch4.split('|MAIN_R^')[0];
if(tm_ch4_btn.includes("$")){      
var str_tm_array_4 = tm_ch4_btn.split('$');

for(var l_1 = 0; l_1 < str_tm_array_4.length; l_1++) {

str_tm_array_4[l_1] = str_tm_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var str_tm_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_tm_array_4[l_1] ="0";

}

}



var ch4_rs_split = single_ch4_k_s[1];

var rs_ch4 = ch4_rs_split.split('|SUB_R^')[1];
var rs_ch4_btn = rs_ch4.split('|MEAS_R^')[0];

if(rs_ch4_btn.includes("$")){
var str_rs_array_4 = rs_ch4_btn.split('$');

for(var l_1 = 0; l_1 < str_rs_array_4.length; l_1++) {  

str_rs_array_4[l_1] = str_rs_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
 else{
 var multi_str_rs_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

multi_str_rs_array_4[l_1] ="0";

}
}





var ch4_mr_split = single_ch4_k_s[1];

var mr_ch4 = ch4_mr_split.split('|MEAS_R^')[1];

var mr_ch4_btn = mr_ch4.split('|K/S^')[0];

if(mr_ch4_btn.includes("$")){

var str_mr_array_4 = mr_ch4_btn.split('$');

for(var l_1 = 0; l_1 < str_mr_array_4.length; l_1++) {

str_mr_array_4[l_1] = str_mr_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

else{

var str_mr_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_mr_array_4[l_1] ="0";

}

}





var ch4_time_split = single_ch4_k_s[1];

var time_ch4 = ch4_time_split.split('|TIME^')[1];

var splitted = time_ch4.split('F7');

var str_time_array_4 = time_ch4.split('$');

for(var l_1 = 0; l_1 < str_time_array_4.length; l_1++) {

str_time_array_4[l_1] = str_time_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}            



var ch4_mnsmp_split = single_ch4_k_s[1];

var mnsmp_ch4 = ch4_time_split.split('|M_NSMP^')[1];

var splitted = mnsmp_ch4.split('F7');

var str_mnsmp_array_4 = mnsmp_ch4.split('$');

for(var l_1 = 0; l_1 < str_mnsmp_array_4.length; l_1++) {

str_mnsmp_array_4[l_1] = str_mnsmp_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch4_mdsmp_split = single_ch4_k_s[1];

var mdsmp_ch4 = ch4_mdsmp_split.split('|M_DSMP^')[1];

var splitted = mdsmp_ch4.split('F7');

var str_mdsmp_array_4 = mdsmp_ch4.split('$');

for(var l_1 = 0; l_1 < str_mdsmp_array_4.length; l_1++) {

str_mdsmp_array_4[l_1] = str_mdsmp_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch4_mnref_split = single_ch4_k_s[1];

var mnref_ch4 = ch4_mnref_split.split('|M_NREF^')[1];

var splitted = mnref_ch4.split('F7');

var str_mnref_array_4 = mnref_ch4.split('$');

for(var l_1 = 0; l_1 < str_mnref_array_4.length; l_1++) {

str_mnref_array_4[l_1] = str_mnref_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch4_mdref_split = single_ch4_k_s[1];

var mdref_ch4 = ch4_time_split.split('|M_DREF^')[1];

var splitted = mdref_ch4.split('F7');

var str_mdref_array_4 = mdref_ch4.split('$');

for(var l_1 = 0; l_1 < str_mdref_array_4.length; l_1++) {

str_mdref_array_4[l_1] = str_mdref_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch4_snsmp_split = single_ch4_k_s[1];

var snsmp_ch4 = ch4_snsmp_split.split('|S_NSMP^')[1];

var splitted = snsmp_ch4.split('F7');

var str_snsmp_array_4 = snsmp_ch4.split('$');

for(var l_1 = 0; l_1 < str_snsmp_array_4.length; l_1++) {

str_snsmp_array_4[l_1] = str_snsmp_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch4_sdsmp_split = single_ch4_k_s[1];

var sdsmp_ch4 = ch4_time_split.split('|S_DSMP^')[1];

var splitted = sdsmp_ch4.split('F7');

var str_sdsmp_array_4 = sdsmp_ch4.split('$');

for(var l_1 = 0; l_1 < str_sdsmp_array_4.length; l_1++) {

str_sdsmp_array_4[l_1] = str_sdsmp_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch4_snref_split = single_ch4_k_s[1];

var snref_ch4 = ch4_snref_split.split('|S_NREF^')[1];

var splitted = snref_ch4.split('F7');

var str_snref_array_4 = snref_ch4.split('$');

for(var l_1 = 0; l_1 < str_snref_array_4.length; l_1++) {

str_snref_array_4[l_1] = str_snref_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch4_sderf_split = single_ch4_k_s[1];

var sderf_ch4 = ch4_sderf_split.split('|S_DREF^')[1];

var splitted = sderf_ch4.split('F7');

var str_sderf_array_4 = sderf_ch4.split('$');

for(var l_1 = 0; l_1 < str_sderf_array_4.length; l_1++) {

str_sderf_array_4[l_1] = str_sderf_array_4[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}



else{



ch4_novalue = "0";        

ch4_dksvalue=         "0";



ch4_C0value=    "0";

ch4_tempvalue=              "0.000";

ch4_humidityvalue=       "0.00";

ch4_kevalue=    "0";

ch4_C1value=    "0";

ch4_dev_a_value=          "0";

ch4_dev_b_value=          "0";

ch4_C2value=    "0";

ch4_deg_a_value=          "0";

ch4_deg_b_value=         "0";

ch4_C3value=    "0";

ch4_lot_ch_value=         "0";

ch4_C4value=    "0";

ch4_cal_a_value=            "0";

ch4_cal_b_value=           "0";

ch4_C5value=    "0";

ch4_ktemp_value=         "0";

ch4_C6value=    "0";

ch4_kunit_value=            "0";

ch4_C7value=    "0";

ch4_corr_a_value=         "0";

ch4_corr_b_value=         "0";

ch4_C8value=    "0";



ch4_mwhtqvalue="0";

ch4_mwhtrvalue="0";

ch4_mblkqvalue="0";

ch4_mblkrvalue="0";

ch4_moptcurvevalue="0";



ch4_swhtqvalue="0";

ch4_swhtrvalue="0";

ch4_sblkqvalue="0";

ch4_sblkrvalue="0";

ch4_soptcurvevalue="0";

ch4_soptcurve2="0";

ch4_boptcurve2="0";



var str_tm_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_tm_array_4[l_1] ="0";

}



var str_rm_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rm_array_4[l_1] ="0";

}



var str_mr_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_mr_array_4[l_1] ="0";

}



var str_rs_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rs_array_4[l_1] ="0";

}

var str_k_s_array_4 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_k_s_array_4[l_1] ="0";

}

var str_time_array_4 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_time_array_4[l_1] ="0";

}



var str_mnsmp_array_4 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mnsmp_array_4[l_1] ="0";

}



var str_mdsmp_array_4 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mdsmp_array_4[l_1] ="0";

}



var str_mnref_array_4 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mnref_array_4[l_1] ="0";

}



var str_mdref_array_4 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mdref_array_4[l_1] ="0";

}



var str_snsmp_array_4 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_snsmp_array_4[l_1] ="0";

}



var str_sdsmp_array_4 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_sdsmp_array_4[l_1] ="0";

}



var str_snref_array_4 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_snref_array_4[l_1] ="0";

}

var str_sderf_array_4 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_sderf_array_4[l_1] ="0";

}



}





if(input.includes("SINGLE_CH5")){



var single_ch5_info = input.split('SINGLE_CH5_INFO');

var ch5_no_split = single_ch5_info[1];

var ch5_no = ch5_no_split.split('NO^')[1];

var ch5_mw = ch5_no_split.split('M_WL^')[1];

if(ch5_mw==undefined){

var ch5_mwvalue = "0";

}

else{

var ch5_mwvalue = ch5_mw.split('')[0];

}

var ch5_mwhtq = ch5_no_split.split('M_WHT_Q^')[1];

if(ch5_mwhtq==undefined){



								var ch5_mwhtqvalue = "0";



}

else{

								var ch5_mwhtqvalue = ch5_mwhtq.split('')[0];



}





var ch5_mwhtr = ch5_no_split.split('M_WHT_R^')[1];

if(ch5_mwhtr==undefined){



								var ch5_mwhtrvalue = "0";



}

else{

var ch5_mwhtrvalue = ch5_mwhtr.split('')[0];



}



var ch5_mblkq = ch5_no_split.split('M_BLK_Q^')[1];



if(ch5_mblkq==undefined){



								var ch5_mblkqvalue = "0";



}

else{

var ch5_mblkqvalue = ch5_mblkq.split('')[0];



}





var ch5_mblkr = ch5_no_split.split('M_BLK_R^')[1];



if(ch5_mblkr==undefined){



								var ch5_mblkrvalue = "0";



}

else{

var ch5_mblkrvalue = ch5_mblkr.split('')[0];



}





var ch5_moptcurve = ch5_no_split.split('M_OPT_CURVE^')[1];



				if(ch5_moptcurve==undefined){



								var ch5_moptcurvevalue = "0";



}

else{

var ch5_moptcurvevalue = ch5_moptcurve.split('$')[0];



}



var ch5_boptcurve = ch5_no_split.split('M_OPT_CURVE^')[1];



if(ch5_boptcurve == undefined){

		  var ch5_boptcurve1 = "0";



}

else{

var ch5_boptcurve1 = ch5_boptcurve.split('')[0];



}



if(ch5_boptcurve1.length == 1){

var ch5_boptcurve2 = "0";



}

else{

var ch5_boptcurve2 = ch5_boptcurve1.split('$')[1].split('')[0];



}

var ch5_sw = ch5_no_split.split('S_WL^')[1];

if(ch5_sw == undefined){

var ch5_swvalue = "0";

}

else{

var ch5_swvalue = ch5_sw.split('')[0];

}

var ch5_swhtq = ch5_no_split.split('S_WHT_Q^')[1];

if(ch5_swhtq == undefined){

var ch5_swhtqvalue = "0";

}

else{

var ch5_swhtqvalue = ch5_swhtq.split('')[0];

}

var ch5_swhtr = ch5_no_split.split('S_WHT_R^')[1];

if(ch5_swhtr == undefined){

var ch5_swhtrvalue = "0";

}

else{

var ch5_swhtrvalue = ch5_swhtr.split('')[0];

}

var ch5_sblkq = ch5_no_split.split('S_BLK_Q^')[1];

if(ch5_sblkq == undefined){

var ch5_sblkqvalue = "0";

}

else{

var ch5_sblkqvalue = ch5_sblkq.split('')[0];

}

var ch5_sblkr = ch5_no_split.split('S_BLK_R^')[1];

if(ch5_sblkr == undefined){

var ch5_sblkrvalue = "0";

}

else{

var ch5_sblkrvalue = ch5_sblkr.split('')[0];

}

var ch5_soptcurve = ch5_no_split.split('S_OPT_CURVE^')[1];

if(ch5_soptcurve == undefined){

var ch5_soptcurvevalue = "0";

}

else{

var ch5_soptcurvevalue = ch5_soptcurve.split('$')[0];

}



var ch5_soptcurve = ch5_no_split.split('S_OPT_CURVE^')[1];

if(ch5_soptcurve == undefined){

var ch5_soptcurve1 = "0";

}

else{

var ch5_soptcurve1 = ch5_soptcurve.split('')[0];

}



 if(ch5_soptcurve1.length == 1){

		  var ch5_soptcurve1 = "0";



}

else{

var ch5_soptcurve2 = ch5_soptcurve1.split('$')[1].split('')[0];

}

var ch5_novalue = ch5_no[0]+ch5_no[1];    

var ch5_name_split = single_ch5_info[1];

var ch5_name = ch5_name_split.split('NAME^')[1];

var ch5_namevalue = ch5_name[0]+ch5_name[1]+ch5_name[2]+ch5_name[3];

var ch5_unit = ch5_name_split.split('UNIT^')[1];

var ch5_unitvalue = ch5_unit[0]+ch5_unit[1]+ch5_unit[2]+ch5_unit[3]+ch5_unit[4];

var ch5_result = ch5_name_split.split('RSLT^')[1];

var ch5_resultvalue = ch5_result[0]+ch5_result[1]+ch5_result[2]+ch5_result[3]+ch5_result[4]+ch5_result[5];

var single_ch5_lotno = input.split('SINGLE_CH5_LOT_INFO');

var ch5_lot_split = single_ch5_lotno[1];

var lot_ch5 = ch5_lot_split.split('LOT^')[1];

var lotvalue_ch5 = lot_ch5[0]+lot_ch5[1]+lot_ch5[2]+lot_ch5[3]+lot_ch5[4]+lot_ch5[5]+lot_ch5[6];

var ch5 = "CH";

var val5= "5";

var lotvalue_ch5 =  "<"+lotvalue_ch5+">";



var ch5_dks = ch5_name_split.split('dK/S^')[1];

var ch5_dksvalue = ch5_dks[0]+ch5_dks[1]+ch5_dks[2]+ch5_dks[3]+ch5_dks[4]+ch5_dks[5]+ch5_dks[6]+ch5_dks[7]+ch5_dks[8];    

var ch5_C0 = ch5_name_split.split('C0^')[1];

var ch5_C0value = ch5_C0[0]+ch5_C0[1]+ch5_C0[2]+ch5_C0[3]+ch5_C0[4]+ch5_C0[5]+ch5_C0[6]+ch5_C0[7]+ch5_C0[8];

var ch5_C1 = ch5_name_split.split('C1^')[1];

var ch5_C1value = ch5_C1[0]+ch5_C1[1]+ch5_C1[2]+ch5_C1[3]+ch5_C1[4]+ch5_C1[5]+ch5_C1[6]+ch5_C1[7]+ch5_C1[8];

var ch5_C2 = ch5_name_split.split('C2^')[1];

var ch5_C2value = ch5_C2[0]+ch5_C2[1]+ch5_C2[2]+ch5_C2[3]+ch5_C2[4]+ch5_C2[5]+ch5_C2[6]+ch5_C2[7]+ch5_C2[8];

var ch5_C3 = ch5_name_split.split('C3^')[1];

var ch5_C3value = ch5_C3[0]+ch5_C3[1]+ch5_C3[2]+ch5_C3[3]+ch5_C3[4]+ch5_C3[5]+ch5_C3[6]+ch5_C3[7]+ch5_C3[8];

var ch5_C4 = ch5_name_split.split('C4^')[1];

var ch5_C4value = ch5_C4[0]+ch5_C4[1]+ch5_C4[2]+ch5_C4[3]+ch5_C4[4]+ch5_C4[5]+ch5_C4[6]+ch5_C4[7]+ch5_C4[8];

var ch5_C5 = ch5_name_split.split('C5^')[1];

var ch5_C5value = ch5_C5[0]+ch5_C5[1]+ch5_C5[2]+ch5_C5[3]+ch5_C5[4]+ch5_C5[5]+ch5_C5[6]+ch5_C5[7]+ch5_C5[8];

var ch5_C6 = ch5_name_split.split('C6^')[1];

var ch5_C6value = ch5_C6[0]+ch5_C6[1]+ch5_C6[2]+ch5_C6[3]+ch5_C6[4]+ch5_C6[5]+ch5_C6[6]+ch5_C6[7]+ch5_C6[8];

var ch5_C7 = ch5_name_split.split('C7^')[1];

var ch5_C7value = ch5_C7[0]+ch5_C7[1]+ch5_C7[2]+ch5_C7[3]+ch5_C7[4]+ch5_C7[5]+ch5_C7[6]+ch5_C7[7]+ch5_C7[8];

var ch5_C8 = ch5_name_split.split('C8^')[1];

var ch5_C8value = ch5_C8[0]+ch5_C8[1]+ch5_C8[2]+ch5_C8[3]+ch5_C8[4]+ch5_C8[5]+ch5_C8[6]+ch5_C8[7]+ch5_C8[8];





var ch5_temp = ch5_name_split.split('C1_ENV_TEMP^')[1];

var ch5_tempvalue = ch5_temp[0]+ch5_temp[1]+ch5_temp[2]+ch5_temp[3]+ch5_temp[4]+ch5_temp[5]+ch5_temp[6]+ch5_temp[7]+ch5_temp[8];



var ch5_humidity = ch5_name_split.split('C1_ENV_HUM^')[1];

var ch5_humidityvalue = ch5_humidity[0]+ch5_humidity[1]+ch5_humidity[2]+ch5_humidity[3]+ch5_humidity[4]+ch5_humidity[5]+ch5_humidity[6]+ch5_humidity[7]+ch5_humidity[8];



var ch5_ke = ch5_name_split.split('C1_ENV_Ke^')[1];

var ch5_kevalue = ch5_ke[0]+ch5_ke[1]+ch5_ke[2]+ch5_ke[3]+ch5_ke[4]+ch5_ke[5]+ch5_ke[6]+ch5_ke[7]+ch5_ke[8];



var ch5_ke = ch5_name_split.split('C1_ENV_Ke^')[1];

var ch5_kevalue = ch5_ke[0]+ch5_ke[1]+ch5_ke[2]+ch5_ke[3]+ch5_ke[4]+ch5_ke[5]+ch5_ke[6]+ch5_ke[7]+ch5_ke[8];



var ch5_dev_a = ch5_name_split.split('C2_DEV_A^')[1];

var ch5_dev_a_value = ch5_dev_a[0]+ch5_dev_a[1]+ch5_dev_a[2]+ch5_dev_a[3]+ch5_dev_a[4]+ch5_dev_a[5]+ch5_dev_a[6]+ch5_dev_a[7]+ch5_dev_a[8];



var ch5_dev_b = ch5_name_split.split('C2_DEV_B^')[1];

var ch5_dev_b_value = ch5_dev_b[0]+ch5_dev_b[1]+ch5_dev_b[2]+ch5_dev_b[3]+ch5_dev_b[4]+ch5_dev_b[5]+ch5_dev_b[6]+ch5_dev_b[7]+ch5_dev_b[8];



var ch5_deg_a = ch5_name_split.split('C3_DEG_A^')[1];

var ch5_deg_a_value = ch5_deg_a[0]+ch5_deg_a[1]+ch5_deg_a[2]+ch5_deg_a[3]+ch5_deg_a[4]+ch5_deg_a[5]+ch5_deg_a[6]+ch5_deg_a[7]+ch5_deg_a[8];



var ch5_deg_b = ch5_name_split.split('C3_DEG_B^')[1];

var ch5_deg_b_value = ch5_deg_b[0]+ch5_deg_b[1]+ch5_deg_b[2]+ch5_deg_b[3]+ch5_deg_b[4]+ch5_deg_b[5]+ch5_deg_b[6]+ch5_deg_b[7]+ch5_deg_b[8];





var ch5_lot_ch = ch5_name_split.split('C4_LOT_CH^')[1];

var ch5_lot_ch_value = ch5_lot_ch[0]+ch5_lot_ch[1]+ch5_lot_ch[2]+ch5_lot_ch[3]+ch5_lot_ch[4]+ch5_lot_ch[5]+ch5_lot_ch[6]+ch5_lot_ch[7]+ch5_lot_ch[8];



var ch5_cal_a = ch5_name_split.split('C5_CAL_A^')[1];

var ch5_cal_a_value = ch5_cal_a[0]+ch5_cal_a[1]+ch5_cal_a[2]+ch5_cal_a[3]+ch5_cal_a[4]+ch5_cal_a[5]+ch5_cal_a[6]+ch5_cal_a[7]+ch5_cal_a[8];



var ch5_cal_b = ch5_name_split.split('C5_CAL_B^')[1];

var ch5_cal_b_value = ch5_cal_b[0]+ch5_cal_b[1]+ch5_cal_b[2]+ch5_cal_b[3]+ch5_cal_b[4]+ch5_cal_b[5]+ch5_cal_b[6]+ch5_cal_b[7]+ch5_cal_b[8];





var ch5_ktemp = ch5_name_split.split('C6_Ktemp^')[1];

var ch5_ktemp_value = ch5_ktemp[0]+ch5_ktemp[1]+ch5_ktemp[2]+ch5_ktemp[3]+ch5_ktemp[4]+ch5_ktemp[5]+ch5_ktemp[6]+ch5_ktemp[7]+ch5_ktemp[8];





var ch5_kunit = ch5_name_split.split('C7_Kunit^')[1];

var ch5_kunit_value = ch5_kunit[0]+ch5_kunit[1]+ch5_kunit[2]+ch5_kunit[3]+ch5_kunit[4]+ch5_kunit[5]+ch5_kunit[6]+ch5_kunit[7]+ch5_kunit[8];





var ch5_corr_a = ch5_name_split.split('C8_CORR_A^')[1];

var ch5_corr_a_value = ch5_corr_a[0]+ch5_corr_a[1]+ch5_corr_a[2]+ch5_corr_a[3]+ch5_corr_a[4]+ch5_corr_a[5]+ch5_corr_a[6]+ch5_corr_a[7]+ch5_corr_a[8];





var ch5_corr_b = ch5_name_split.split('C8_CORR_B^')[1];

var ch5_corr_b_value = ch5_corr_b[0]+ch5_corr_b[1]+ch5_corr_b[2]+ch5_corr_b[3]+ch5_corr_b[4]+ch5_corr_b[5]+ch5_corr_b[6]+ch5_corr_b[7]+ch5_corr_b[8];





var single_ch5_k_s = input.split('SINGLE_CH5_LOT_INFO');

var ch5_k_s_split = single_ch5_k_s[1];

var k_s_ch5 = ch5_k_s_split.split('|K/S^')[1];

var splitted = k_s_ch5.split('F7');

var k_s = splitted[0];

var str_k_s_array_5 = k_s.split('$');

for(var j_5 = 0; j_5 < str_k_s_array_5.length; j_5++) {

str_k_s_array_5[j_5] = str_k_s_array_5[j_5].replace(/^\s*/, "").replace(/\s*$/, "");

}

var single_ch5_ = input.split('SINGLE_CH5_LOT_INFO');

var ch5_rm_split = single_ch5_k_s[1];

var rm_ch5 = ch5_rm_split.split('|MAIN_R')[1];

var splitted = rm_ch5.split('F7');

var rm = splitted[0];

var str_rm_array_5 = rm.split('$');

for(var k_5 = 0; k_5 < str_rm_array_5.length; k_5++) {

str_rm_array_5[k_5] = str_rm_array_5[k_5].replace(/^\s*/, "").replace(/\s*$/, "");

}





var ch5_rm_split = single_ch5_k_s[1];

var rm_ch5 = ch5_rm_split.split('|MAIN_R^')[1];  
var rm_ch5_btn = rm_ch5.split('|SUB_R^')[0];  
if(rm_ch5_btn.includes("$")){
var str_rm_array_5 = rm.split('$');

for(var l_5 = 0; l_5 < str_rm_array_5.length; l_5++) {

str_rm_array_5[l_5] = str_rm_array_5[l_5].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var str_rm_array_5 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rm_array_5[l_1] ="0";

}
}







var ch5_tm_split = single_ch5_k_s[1];

var tm_ch5 = ch5_tm_split.split('|MEAS_TIME^')[1];
var tm_ch5_btn = tm_ch5.split('|MAIN_R^')[0];
if(tm_ch5_btn.includes("$")){
var str_tm_array_5 = tm_ch5_btn.split('$');

for(var l_1 = 0; l_1 < str_tm_array_5.length; l_1++) {

str_tm_array_5[l_1] = str_tm_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var str_tm_array_5 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_tm_array_5[l_1] ="0";

}


}



var ch5_rs_split = single_ch5_k_s[1];

var rs_ch5 = ch5_rs_split.split('|SUB_R^')[1];
var rs_ch5_btn = rs_ch5.split('|MEAS_R^')[0];
if(rs_ch5_btn.includes("$")){
var str_rs_array_5 = rs_ch5_btn.split('$');

for(var l_1 = 0; l_1 < str_rs_array_5.length; l_1++) {

str_rs_array_5[l_1] = str_rs_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}  
}
else{
var str_rs_array_5 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rs_array_5[l_1] ="0";

}
}





var ch5_mr_split = single_ch5_k_s[1];

var mr_ch5 = ch5_mr_split.split('|MEAS_R^')[1];

var mr_ch5_btn = mr_ch5.split('|K/S^')[0];

if(mr_ch5_btn.includes("$")){

var str_mr_array_5 = mr_ch5_btn.split('$');

for(var l_1 = 0; l_1 < str_mr_array_5.length; l_1++) {

str_mr_array_5[l_1] = str_mr_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

else{

var str_mr_array_5 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_mr_array_5[l_1] ="0";

}

}



var ch5_time_split = single_ch5_k_s[1];

var time_ch5 = ch5_time_split.split('|TIME^')[1];
var time_ch5_btn = time_ch5.split('|M_NSMP^')[0];
if(time_ch5_btn.includes("$")){
var str_time_array_5 = time_ch5_btn.split('$');

for(var l_1 = 0; l_1 < str_time_array_5.length; l_1++) {

str_time_array_5[l_1] = str_time_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}  
}
else{
var str_time_array_5 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_time_array_5[l_1] ="0";

}
}
		   



var ch5_mnsmp_split = single_ch5_k_s[1];

var mnsmp_ch5 = ch5_time_split.split('|M_NSMP^')[1];

var splitted = mnsmp_ch5.split('F7');

var str_mnsmp_array_5 = mnsmp_ch5.split('$');

for(var l_1 = 0; l_1 < str_mnsmp_array_5.length; l_1++) {

str_mnsmp_array_5[l_1] = str_mnsmp_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch5_mdsmp_split = single_ch5_k_s[1];

var mdsmp_ch5 = ch5_mdsmp_split.split('|M_DSMP^')[1];

var splitted = mdsmp_ch5.split('F7');

var str_mdsmp_array_5 = mdsmp_ch5.split('$');

for(var l_1 = 0; l_1 < str_mdsmp_array_5.length; l_1++) {

str_mdsmp_array_5[l_1] = str_mdsmp_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch5_mnref_split = single_ch5_k_s[1];

var mnref_ch5 = ch5_mnref_split.split('|M_NREF^')[1];

var splitted = mnref_ch5.split('F7');

var str_mnref_array_5 = mnref_ch5.split('$');

for(var l_1 = 0; l_1 < str_mnref_array_5.length; l_1++) {

str_mnref_array_5[l_1] = str_mnref_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch5_mdref_split = single_ch5_k_s[1];

var mdref_ch5 = ch5_time_split.split('|M_DREF^')[1];

var splitted = mdref_ch5.split('F7');

var str_mdref_array_5 = mdref_ch5.split('$');

for(var l_1 = 0; l_1 < str_mdref_array_5.length; l_1++) {

str_mdref_array_5[l_1] = str_mdref_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch5_snsmp_split = single_ch5_k_s[1];

var snsmp_ch5 = ch5_snsmp_split.split('|S_NSMP^')[1];

var splitted = snsmp_ch5.split('F7');

var str_snsmp_array_5 = snsmp_ch5.split('$');

for(var l_1 = 0; l_1 < str_snsmp_array_5.length; l_1++) {

str_snsmp_array_5[l_1] = str_snsmp_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch5_sdsmp_split = single_ch5_k_s[1];

var sdsmp_ch5 = ch5_time_split.split('|S_DSMP^')[1];

var splitted = sdsmp_ch5.split('F7');

var str_sdsmp_array_5 = sdsmp_ch5.split('$');

for(var l_1 = 0; l_1 < str_sdsmp_array_5.length; l_1++) {

str_sdsmp_array_5[l_1] = str_sdsmp_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch5_snref_split = single_ch5_k_s[1];

var snref_ch5 = ch5_snref_split.split('|S_NREF^')[1];

var splitted = snref_ch5.split('F7');

var str_snref_array_5 = snref_ch5.split('$');

for(var l_1 = 0; l_1 < str_snref_array_5.length; l_1++) {

str_snref_array_5[l_1] = str_snref_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch5_sderf_split = single_ch5_k_s[1];

var sderf_ch5 = ch5_sderf_split.split('|S_DREF^')[1];

var splitted = sderf_ch5.split('F7');

var str_sderf_array_5 = sderf_ch5.split('$');

for(var l_1 = 0; l_1 < str_sderf_array_5.length; l_1++) {

str_sderf_array_5[l_1] = str_sderf_array_5[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}





else{



ch5_novalue = "0";        

ch5_dksvalue=         "0";



ch5_C0value=    "0";

ch5_tempvalue=              "0.000";

ch5_humidityvalue=       "0.00";

ch5_kevalue=    "0";

ch5_C1value=    "0";

ch5_dev_a_value=          "0";

ch5_dev_b_value=          "0";

ch5_C2value=    "0";

ch5_deg_a_value=          "0";

ch5_deg_b_value=         "0";

ch5_C3value=    "0";

ch5_lot_ch_value=         "0";

ch5_C4value=    "0";

ch5_cal_a_value=            "0";

ch5_cal_b_value=           "0";

ch5_C5value=    "0";

ch5_ktemp_value=         "0";

ch5_C6value=    "0";

ch5_kunit_value=            "0";

ch5_C7value=    "0";

ch5_corr_a_value=         "0";

ch5_corr_b_value=         "0";

ch5_C8value=    "0";



ch5_mwhtqvalue="0";

ch5_mwhtrvalue="0";

ch5_mblkqvalue="0";

ch5_mblkrvalue="0";

ch5_moptcurvevalue="0";



ch5_swhtqvalue="0";

ch5_swhtrvalue="0";

ch5_sblkqvalue="0";

ch5_sblkrvalue="0";

ch5_soptcurvevalue="0";

ch5_soptcurvevalue="0";





ch5_soptcurve2="0";

ch5_boptcurve2="0";



var str_tm_array_5 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_tm_array_5[l_1] ="0";

}



var str_rm_array_5 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rm_array_5[l_1] ="0";

}



var str_mr_array_5 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_mr_array_5[l_1] ="0";

}



var str_rs_array_5 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rs_array_5[l_1] ="0";

}

var str_k_s_array_5 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_k_s_array_5[l_1] ="0";

}

var str_time_array_5 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_time_array_5[l_1] ="0";

}



var str_mnsmp_array_5 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mnsmp_array_5[l_1] ="0";

}



var str_mdsmp_array_5 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mdsmp_array_5[l_1] ="0";

}



var str_mnref_array_5 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mnref_array_5[l_1] ="0";

}



var str_mdref_array_5 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mdref_array_5[l_1] ="0";

}



var str_snsmp_array_5 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_snsmp_array_5[l_1] ="0";

}



var str_sdsmp_array_5 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_sdsmp_array_5[l_1] ="0";

}



var str_snref_array_5 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_snref_array_5[l_1] ="0";

}

var str_sderf_array_5 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_sderf_array_5[l_1] ="0";

}



}



if(input.includes("SINGLE_CH6")){



var single_ch6_info = input.split('SINGLE_CH6_INFO');

var ch6_no_split = single_ch6_info[1];

var ch6_no = ch6_no_split.split('NO^')[1];

var ch6_novalue = ch6_no[0]+ch6_no[1];    





var ch6_mw = ch6_no_split.split('M_WL^')[1];

var ch6_mwvalue = ch6_mw.split('')[0];

var ch6_mwhtq = ch6_no_split.split('M_WHT_Q^')[1];

var ch6_mwhtqvalue = ch6_mwhtq.split('')[0];





var ch6_mwhtr = ch6_no_split.split('M_WHT_R^')[1];

var ch6_mwhtrvalue =ch6_mwhtr.split('')[0];



var ch6_mblkq = ch6_no_split.split('M_BLK_Q^')[1];

var ch6_mblkqvalue = ch6_mblkq.split('')[0];



var ch6_mblkr = ch6_no_split.split('M_BLK_R^')[1];

var ch6_mblkrvalue = ch6_mblkr.split('')[0];



var ch6_moptcurve = ch6_no_split.split('M_OPT_CURVE^')[1];

var ch6_moptcurvevalue = ch6_moptcurve.split('$')[0];



				var ch6_boptcurve = ch6_no_split.split('M_OPT_CURVE^')[1];

var ch6_boptcurve1 = ch6_boptcurve.split('')[0];

if(ch6_boptcurve1.length == 1){

		  var ch6_boptcurve1 = "0";



}

else{

var ch6_boptcurve2 = ch6_boptcurve1.split('$')[1].split('')[0];



}



var ch6_sw = ch6_no_split.split('S_WL^')[1];

var ch6_swvalue = ch6_sw.split('')[0];



var ch6_swhtq = ch6_no_split.split('S_WHT_Q^')[1];

var ch6_swhtqvalue = ch6_swhtq.split('')[0];





var ch6_swhtr = ch6_no_split.split('S_WHT_R^')[1];

var ch6_swhtrvalue = ch6_swhtr.split('')[0];



var ch6_sblkq = ch6_no_split.split('S_BLK_Q^')[1];

var ch6_sblkqvalue = ch6_sblkq.split('')[0];



var ch6_sblkr = ch6_no_split.split('S_BLK_R^')[1];

var ch6_sblkrvalue = ch6_sblkr.split('')[0];



var ch6_soptcurve = ch6_no_split.split('S_OPT_CURVE^')[1];

var ch6_soptcurvevalue = ch6_soptcurve.split('$')[0];



var ch6_soptcurve = ch6_no_split.split('S_OPT_CURVE^')[1];

var ch6_soptcurve1 = ch6_soptcurve.split('')[0];

if(ch6_soptcurve1.length == 1){

		  var ch6_soptcurve1 = "0";



}

else{

var ch6_soptcurve2 = ch6_soptcurve1.split('$')[1].split('')[0];

}

var ch6_name_split = single_ch6_info[1];

var ch6_name = ch6_name_split.split('NAME^')[1];

var ch6_namevalue = ch6_name[0]+ch6_name[1]+ch6_name[2]+ch6_name[3];

var ch6_unit = ch6_name_split.split('UNIT^')[1];

var ch6_unitvalue = ch6_unit[0]+ch6_unit[1]+ch6_unit[2]+ch6_unit[3]+ch6_unit[4];

var ch6_result = ch6_name_split.split('RSLT^')[1];

var ch6_resultvalue = ch6_result[0]+ch6_result[1]+ch6_result[2]+ch6_result[3]+ch6_result[4]+ch6_result[5];

var single_ch6_lotno = input.split('SINGLE_CH6_LOT_INFO');

var ch6_lot_split = single_ch6_lotno[1];

var lot_ch6 = ch6_lot_split.split('LOT^')[1];

var lotvalue_ch6 = lot_ch6[0]+lot_ch6[1]+lot_ch6[2]+lot_ch6[3]+lot_ch6[4]+lot_ch6[5]+lot_ch6[6];

var ch6 = "CH";

var val6= "6";

var lotvalue_ch6 =  "<"+lotvalue_ch6+">";

var ch6_dks = ch6_name_split.split('dK/S^')[1];

var ch6_dksvalue = ch6_dks[0]+ch6_dks[1]+ch6_dks[2]+ch6_dks[3]+ch6_dks[4]+ch6_dks[5]+ch6_dks[6]+ch6_dks[7]+ch6_dks[8];    



var ch6_C0 = ch6_name_split.split('C0^')[1];

var ch6_C0value = ch6_C0[0]+ch6_C0[1]+ch6_C0[2]+ch6_C0[3]+ch6_C0[4]+ch6_C0[5]+ch6_C0[6]+ch6_C0[7]+ch6_C0[8];

var ch6_C1 = ch6_name_split.split('C1^')[1];

var ch6_C1value = ch6_C1[0]+ch6_C1[1]+ch6_C1[2]+ch6_C1[3]+ch6_C1[4]+ch6_C1[5]+ch6_C1[6]+ch6_C1[7]+ch6_C1[8];

var ch6_C2 = ch6_name_split.split('C2^')[1];

var ch6_C2value = ch6_C2[0]+ch6_C2[1]+ch6_C2[2]+ch6_C2[3]+ch6_C2[4]+ch6_C2[5]+ch6_C2[6]+ch6_C2[7]+ch6_C2[8];

var ch6_C3 = ch6_name_split.split('C3^')[1];

var ch6_C3value = ch6_C3[0]+ch6_C3[1]+ch6_C3[2]+ch6_C3[3]+ch6_C3[4]+ch6_C3[5]+ch6_C3[6]+ch6_C3[7]+ch6_C3[8];

var ch6_C4 = ch6_name_split.split('C4^')[1];

var ch6_C4value = ch6_C4[0]+ch6_C4[1]+ch6_C4[2]+ch6_C4[3]+ch6_C4[4]+ch6_C4[5]+ch6_C4[6]+ch6_C4[7]+ch6_C4[8];

var ch6_C5 = ch6_name_split.split('C5^')[1];

var ch6_C5value = ch6_C5[0]+ch6_C5[1]+ch6_C5[2]+ch6_C5[3]+ch6_C5[4]+ch6_C5[5]+ch6_C5[6]+ch6_C5[7]+ch6_C5[8];

var ch6_C6 = ch6_name_split.split('C6^')[1];

var ch6_C6value = ch6_C6[0]+ch6_C6[1]+ch6_C6[2]+ch6_C6[3]+ch6_C6[4]+ch6_C6[5]+ch6_C6[6]+ch6_C6[7]+ch6_C6[8];

var ch6_C7 = ch6_name_split.split('C7^')[1];

var ch6_C7value = ch6_C7[0]+ch6_C7[1]+ch6_C7[2]+ch6_C7[3]+ch6_C7[4]+ch6_C7[5]+ch6_C7[6]+ch6_C7[7]+ch6_C7[8];

var ch6_C8 = ch6_name_split.split('C8^')[1];

var ch6_C8value = ch6_C8[0]+ch6_C8[1]+ch6_C8[2]+ch6_C8[3]+ch6_C8[4]+ch6_C8[5]+ch6_C8[6]+ch6_C8[7]+ch6_C8[8];





var ch6_temp = ch6_name_split.split('C1_ENV_TEMP^')[1];

var ch6_tempvalue = ch6_temp[0]+ch6_temp[1]+ch6_temp[2]+ch6_temp[3]+ch6_temp[4]+ch6_temp[5]+ch6_temp[6]+ch6_temp[7]+ch6_temp[8];



var ch6_humidity = ch6_name_split.split('C1_ENV_HUM^')[1];

var ch6_humidityvalue = ch6_humidity[0]+ch6_humidity[1]+ch6_humidity[2]+ch6_humidity[3]+ch6_humidity[4]+ch6_humidity[5]+ch6_humidity[6]+ch6_humidity[7]+ch6_humidity[8];



var ch6_ke = ch6_name_split.split('C1_ENV_Ke^')[1];

var ch6_kevalue = ch6_ke[0]+ch6_ke[1]+ch6_ke[2]+ch6_ke[3]+ch6_ke[4]+ch6_ke[5]+ch6_ke[6]+ch6_ke[7]+ch6_ke[8];



var ch6_ke = ch6_name_split.split('C1_ENV_Ke^')[1];

var ch6_kevalue = ch6_ke[0]+ch6_ke[1]+ch6_ke[2]+ch6_ke[3]+ch6_ke[4]+ch6_ke[5]+ch6_ke[6]+ch6_ke[7]+ch6_ke[8];



var ch6_dev_a = ch6_name_split.split('C2_DEV_A^')[1];

var ch6_dev_a_value = ch6_dev_a[0]+ch6_dev_a[1]+ch6_dev_a[2]+ch6_dev_a[3]+ch6_dev_a[4]+ch6_dev_a[5]+ch6_dev_a[6]+ch6_dev_a[7]+ch6_dev_a[8];



var ch6_dev_b = ch6_name_split.split('C2_DEV_B^')[1];

var ch6_dev_b_value = ch6_dev_b[0]+ch6_dev_b[1]+ch6_dev_b[2]+ch6_dev_b[3]+ch6_dev_b[4]+ch6_dev_b[5]+ch6_dev_b[6]+ch6_dev_b[7]+ch6_dev_b[8];



var ch6_deg_a = ch6_name_split.split('C3_DEG_A^')[1];

var ch6_deg_a_value = ch6_deg_a[0]+ch6_deg_a[1]+ch6_deg_a[2]+ch6_deg_a[3]+ch6_deg_a[4]+ch6_deg_a[5]+ch6_deg_a[6]+ch6_deg_a[7]+ch6_deg_a[8];



var ch6_deg_b = ch6_name_split.split('C3_DEG_B^')[1];

var ch6_deg_b_value = ch6_deg_b[0]+ch6_deg_b[1]+ch6_deg_b[2]+ch6_deg_b[3]+ch6_deg_b[4]+ch6_deg_b[5]+ch6_deg_b[6]+ch6_deg_b[7]+ch6_deg_b[8];





var ch6_lot_ch = ch6_name_split.split('C4_LOT_CH^')[1];

var ch6_lot_ch_value = ch6_lot_ch[0]+ch6_lot_ch[1]+ch6_lot_ch[2]+ch6_lot_ch[3]+ch6_lot_ch[4]+ch6_lot_ch[5]+ch6_lot_ch[6]+ch6_lot_ch[7]+ch6_lot_ch[8];



var ch6_cal_a = ch6_name_split.split('C5_CAL_A^')[1];

var ch6_cal_a_value = ch6_cal_a[0]+ch6_cal_a[1]+ch6_cal_a[2]+ch6_cal_a[3]+ch6_cal_a[4]+ch6_cal_a[5]+ch6_cal_a[6]+ch6_cal_a[7]+ch6_cal_a[8];



var ch6_cal_b = ch6_name_split.split('C5_CAL_B^')[1];

var ch6_cal_b_value = ch6_cal_b[0]+ch6_cal_b[1]+ch6_cal_b[2]+ch6_cal_b[3]+ch6_cal_b[4]+ch6_cal_b[5]+ch6_cal_b[6]+ch6_cal_b[7]+ch6_cal_b[8];





var ch6_ktemp = ch6_name_split.split('C6_Ktemp^')[1];

var ch6_ktemp_value = ch6_ktemp[0]+ch6_ktemp[1]+ch6_ktemp[2]+ch6_ktemp[3]+ch6_ktemp[4]+ch6_ktemp[5]+ch6_ktemp[6]+ch6_ktemp[7]+ch6_ktemp[8];





var ch6_kunit = ch6_name_split.split('C7_Kunit^')[1];

var ch6_kunit_value = ch6_kunit[0]+ch6_kunit[1]+ch6_kunit[2]+ch6_kunit[3]+ch6_kunit[4]+ch6_kunit[5]+ch6_kunit[6]+ch6_kunit[7]+ch6_kunit[8];





var ch6_corr_a = ch6_name_split.split('C8_CORR_A^')[1];

var ch6_corr_a_value = ch6_corr_a[0]+ch6_corr_a[1]+ch6_corr_a[2]+ch6_corr_a[3]+ch6_corr_a[4]+ch6_corr_a[5]+ch6_corr_a[6]+ch6_corr_a[7]+ch6_corr_a[8];





var ch6_corr_b = ch6_name_split.split('C8_CORR_B^')[1];

var ch6_corr_b_value = ch6_corr_b[0]+ch6_corr_b[1]+ch6_corr_b[2]+ch6_corr_b[3]+ch6_corr_b[4]+ch6_corr_b[5]+ch6_corr_b[6]+ch6_corr_b[7]+ch6_corr_b[8];



var single_ch6_k_s = input.split('SINGLE_CH6_LOT_INFO');

var ch6_k_s_split = single_ch6_k_s[1];

var k_s_ch6 = ch6_k_s_split.split('|K/S^')[1];

var splitted = k_s_ch6.split('F7');

var k_s = splitted[0];

var str_k_s_array_6 = k_s.split('$');

for(var j_6 = 0; j_6 < str_k_s_array_6.length; j_6++) {

str_k_s_array_6[j_6] = str_k_s_array_6[j_6].replace(/^\s*/, "").replace(/\s*$/, "");

}

var single_ch6_ = input.split('SINGLE_CH6_LOT_INFO');

var ch6_rm_split = single_ch6_k_s[1];

var rm_ch6 = ch6_rm_split.split('|MAIN_R^')[1];
var rm_ch6_btn = rm_ch6.split('|SUB_R^')[0];

if(rm_ch6_btn.includes("$")){
var str_rm_array_6 = rm_ch6_btn.split('$');

for(var k_6 = 0; k_6 < str_rm_array_6.length; k_6++) {

str_rm_array_6[k_6] = str_rm_array_6[k_6].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var str_rm_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rm_array_6[l_1] ="0";

}
}



var ch6_rm_split = single_ch6_k_s[1];

var rm_ch6 = ch6_rm_split.split('|MAIN_R^')[1];
var rm_ch6_btn = rm_ch6.split('|SUB_R^')[0];
if(rm_ch6_btn.includes("$")){
var str_rm_array_6 = rm_ch6_btn.split('$');

for(var l_6 = 0; l_6 < str_rm_array_6.length; l_6++) {

str_rm_array_6[l_6] = str_rm_array_6[l_6].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var str_rm_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rm_array_6[l_1] ="0";

}
}





var ch6_tm_split = single_ch6_k_s[1];

var tm_ch6 = ch6_tm_split.split('|MEAS_TIME^')[1];
var tm_ch6_btn = tm_ch6.split('|MAIN_R^')[0];
if(tm_ch6_btn.includes("$")){
var str_tm_array_6 = tm_ch6_btn.split('$');

for(var l_1 = 0; l_1 < str_tm_array_6.length; l_1++) {

str_tm_array_6[l_1] = str_tm_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}
}
else{
var str_tm_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_tm_array_6[l_1] ="0";

}
}



var ch6_rs_split = single_ch6_k_s[1];

var rs_ch6 = ch6_rs_split.split('|SUB_R^')[1];

var rs_ch6_btn = rs_ch6.split('|MEAS_R^')[0];

if(rs_ch6_btn.includes("$")){

var str_rs_array_6 = rs_ch6_btn.split('$');

for(var l_1 = 0; l_1 < str_rs_array_6.length; l_1++) {

str_rs_array_6[l_1] = str_rs_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

else{

var str_rs_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rs_array_6[l_1] ="0";

}



}



var ch6_mr_split = single_ch6_k_s[1];

var mr_ch6 = ch6_mr_split.split('|MEAS_R^')[1];

var mr_ch6_btn = mr_ch6.split('|K/S^')[0];

if(mr_ch6_btn.includes("$")){

var str_mr_array_6 = mr_ch6_btn.split('$');

for(var l_1 = 0; l_1 < str_mr_array_6.length; l_1++) {

str_mr_array_6[l_1] = str_mr_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}

else{

var str_mr_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_mr_array_6[l_1] ="0";

}



}







var ch5_time_split = single_ch6_k_s[1];

var time_ch5 = ch5_time_split.split('|TIME^')[1];

var splitted = time_ch5.split('F7');

var str_time_array_6 = time_ch5.split('$');

for(var l_1 = 0; l_1 < str_time_array_6.length; l_1++) {

str_time_array_6[l_1] = str_time_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}            



var ch5_mnsmp_split = single_ch6_k_s[1];

var mnsmp_ch5 = ch5_time_split.split('|M_NSMP^')[1];

var splitted = mnsmp_ch5.split('F7');

var str_mnsmp_array_6 = mnsmp_ch5.split('$');

for(var l_1 = 0; l_1 < str_mnsmp_array_6.length; l_1++) {

str_mnsmp_array_6[l_1] = str_mnsmp_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch5_mdsmp_split = single_ch6_k_s[1];

var mdsmp_ch5 = ch5_mdsmp_split.split('|M_DSMP^')[1];

var splitted = mdsmp_ch5.split('F7');

var str_mdsmp_array_6 = mdsmp_ch5.split('$');

for(var l_1 = 0; l_1 < str_mdsmp_array_6.length; l_1++) {

str_mdsmp_array_6[l_1] = str_mdsmp_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch5_mnref_split = single_ch6_k_s[1];

var mnref_ch5 = ch5_mnref_split.split('|M_NREF^')[1];

var splitted = mnref_ch5.split('F7');

var str_mnref_array_6 = mnref_ch5.split('$');

for(var l_1 = 0; l_1 < str_mnref_array_6.length; l_1++) {

str_mnref_array_6[l_1] = str_mnref_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch5_mdref_split = single_ch6_k_s[1];

var mdref_ch5 = ch5_time_split.split('|M_DREF^')[1];

var splitted = mdref_ch5.split('F7');

var str_mdref_array_6 = mdref_ch5.split('$');

for(var l_1 = 0; l_1 < str_mdref_array_6.length; l_1++) {

str_mdref_array_6[l_1] = str_mdref_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch5_snsmp_split = single_ch6_k_s[1];

var snsmp_ch5 = ch5_snsmp_split.split('|S_NSMP^')[1];

var splitted = snsmp_ch5.split('F7');

var str_snsmp_array_6 = snsmp_ch5.split('$');

for(var l_1 = 0; l_1 < str_snsmp_array_6.length; l_1++) {

str_snsmp_array_6[l_1] = str_snsmp_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

var ch5_sdsmp_split = single_ch6_k_s[1];

var sdsmp_ch5 = ch5_time_split.split('|S_DSMP^')[1];

var splitted = sdsmp_ch5.split('F7');

var str_sdsmp_array_6 = sdsmp_ch5.split('$');

for(var l_1 = 0; l_1 < str_sdsmp_array_6.length; l_1++) {

str_sdsmp_array_6[l_1] = str_sdsmp_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch5_snref_split = single_ch6_k_s[1];

var snref_ch5 = ch5_snref_split.split('|S_NREF^')[1];

var splitted = snref_ch5.split('F7');

var str_snref_array_6 = snref_ch5.split('$');

for(var l_1 = 0; l_1 < str_snref_array_6.length; l_1++) {

str_snref_array_6[l_1] = str_snref_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}



var ch5_sderf_split = single_ch6_k_s[1];

var sderf_ch5 = ch5_sderf_split.split('|S_DREF^')[1];

var splitted = sderf_ch5.split('F7');

var str_sderf_array_6 = sderf_ch5.split('$');

for(var l_1 = 0; l_1 < str_sderf_array_6.length; l_1++) {

str_sderf_array_6[l_1] = str_sderf_array_6[l_1].replace(/^\s*/, "").replace(/\s*$/, "");

}

}  



else{





ch6_novalue = "0";        

ch6_dksvalue=         "0";



ch6_C0value=    "0";

ch6_tempvalue=              "0.000";

ch6_humidityvalue=       "0.00";

ch6_kevalue=    "0";

ch6_C1value=    "0";

ch6_dev_a_value=          "0";

ch6_dev_b_value=          "0";

ch6_C2value=    "0";

ch6_deg_a_value=          "0";

ch6_deg_b_value=         "0";

ch6_C3value=    "0";

ch6_lot_ch_value=         "0";

ch6_C4value=    "0";

ch6_cal_a_value=            "0";

ch6_cal_b_value=           "0";

ch6_C5value=    "0";

ch6_ktemp_value=         "0";

ch6_C6value=    "0";

ch6_kunit_value=            "0";

ch6_C7value=    "0";

ch6_corr_a_value=         "0";

ch6_corr_b_value=         "0";

ch6_C8value=    "0";



ch6_mwhtqvalue="0";

ch6_mwhtrvalue="0";

ch6_mblkqvalue="0";

ch6_mblkrvalue="0";

ch6_moptcurvevalue="0";



ch6_swhtqvalue="0";

ch6_swhtrvalue="0";

ch6_sblkqvalue="0";

ch6_sblkrvalue="0";

ch6_soptcurvevalue="0";



ch6_soptcurve2="0";

ch6_boptcurve2="0";



var str_tm_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_tm_array_6[l_1] ="0";

}



var str_rm_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rm_array_6[l_1] ="0";

}



var str_mr_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_mr_array_6[l_1] ="0";

}



var str_rs_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_rs_array_6[l_1] ="0";

}

var str_k_s_array_6 = [];

for(var l_1 = 0; l_1 <= 30; l_1++) {

str_k_s_array_6[l_1] ="0";

}

var str_time_array_6 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_time_array_6[l_1] ="0";

}



var str_mnsmp_array_6 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mnsmp_array_6[l_1] ="0";

}



var str_mdsmp_array_6 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mdsmp_array_6[l_1] ="0";

}



var str_mnref_array_6 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mnref_array_6[l_1] ="0";

}



var str_mdref_array_6 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_mdref_array_6[l_1] ="0";

}



var str_snsmp_array_6 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_snsmp_array_6[l_1] ="0";

}



var str_sdsmp_array_6 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_sdsmp_array_6[l_1] ="0";

}



var str_snref_array_6 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_snref_array_6[l_1] ="0";

}

var str_sderf_array_6 = [];

for(var l_1 = 0; l_1 <= 32; l_1++) {

str_sderf_array_6[l_1] ="0";

}



}





var myObj;



myObj = {

"Result": [

[

mesurementresult

],

[

dseriesno,

serialno

],

[



],

[

date,

time

],

[



],

[

measno,

id,

test_idval

],

[



],

[

"***** ↓↓↓ 測定結果データ ↓↓↓ *****",

],

[



],



[

"SINGLE",

"",

"",

"",

"",

"",

"",

"MULTI",

multi_info_namevalue,

multi_info_lotvalue,

"",

"",

"",

"",

"PLATE",

"",

"<>"

],

[

"",

ch1,

val1,

ch1_namevalue,

ch1_resultvalue,

ch1_unitvalue,

lotvalue_ch1,

"",

multi_ch1,

multi_val1,

multi_ch1_namevalue,

multi_ch1_resultvalue,

multi_ch1_unitvalue,

"",

"",

""

],

[

"",

ch2,

val2,

ch2_namevalue,

ch2_resultvalue,

ch2_unitvalue,

lotvalue_ch2,

"",

multi_ch2,

multi_val2,

multi_ch2_namevalue,

multi_ch2_resultvalue,

multi_ch2_unitvalue,

"",

"",

""

],

[

"",

ch3,

val3,

ch3_namevalue,

ch3_resultvalue,

ch3_unitvalue,

lotvalue_ch3,

"",

multi_ch3,

multi_val3,

multi_ch3_namevalue,

multi_ch3_resultvalue,

multi_ch3_unitvalue,

"",

"",

"",

""

],

[

"",

ch4,

val4,

ch4_namevalue,

ch4_resultvalue,

ch4_unitvalue,

lotvalue_ch4,

"",

multi_ch4,

multi_val4,

multi_ch4_namevalue,

multi_ch4_resultvalue,

multi_ch4_unitvalue,

"",

"",

"",

""

],

[

"",

ch5,

val5,

ch5_namevalue,

ch5_resultvalue,

ch5_unitvalue,

lotvalue_ch5,

"",

multi_ch5,

multi_val5,

multi_ch5_namevalue,

multi_ch5_resultvalue,

multi_ch5_unitvalue,

"",

"",

""

],

[

"",

ch6,

val6,

ch6_namevalue,

ch6_resultvalue,

ch6_unitvalue,

lotvalue_ch6,

"",

multi_ch6,

multi_val6,

multi_ch6_namevalue,

multi_ch6_resultvalue,

multi_ch6_unitvalue,

"",

"",

""

],



[



],

[

"***** ↑↑↑ 測定結果データ ↑↑↑ *****",

],

[



],

[



],

[

"***** ↓↓↓ タイムコースK/Sデータ ↓↓↓ *****",

],

[



],

[

"[SINGLE]",

"CH",

"1",

ch1_novalue,

ch1_namevalue

],

[

"",

"",

"USED",

str_tm_array_1[0],

"Rm",

str_rm_array_1[0],

"Rs",

str_rs_array_1[0],

"R",

str_mr_array_1[0],

"K/S",

str_k_s_array_1[0]

],

[

"",

"",

"TC01",

str_tm_array_1[1],

"Rm",

str_rm_array_1[1],

"Rs",

str_rs_array_1[1],

"R",

str_mr_array_1[1],

"K/S",

str_k_s_array_1[1]

],

[

"",

"",

"TC02",

str_tm_array_1[2],

"Rm",

str_rm_array_1[2],

"Rs",

str_rs_array_1[2],

"R",

str_mr_array_1[2],

"K/S",

str_k_s_array_1[2]

],

[

"",

"",

"TC03",

str_tm_array_1[3],

"Rm",

str_rm_array_1[3],

"Rs",

str_rs_array_1[3],

"R",

str_mr_array_1[3],

"K/S",

str_k_s_array_1[3]

],

[

"",

"",

"TC04",

str_tm_array_1[4],

"Rm",

str_rm_array_1[4],

"Rs",

str_rs_array_1[4],

"R",

str_mr_array_1[4],

"K/S",

str_k_s_array_1[4]

],

[

"",

"",

"TC05",

str_tm_array_1[5],

"Rm",

str_rm_array_1[5],

"Rs",

str_rs_array_1[5],

"R",

str_mr_array_1[5],

"K/S",

str_k_s_array_1[5]

],

[

"",

"",

"TC06",

str_tm_array_1[6],

"Rm",

str_rm_array_1[6],

"Rs",

str_rs_array_1[6],

"R",

str_mr_array_1[6],

"K/S",

str_k_s_array_1[6]

],

[

"",

"",

"TC07",

str_tm_array_1[7],

"Rm",

str_rm_array_1[7],

"Rs",

str_rs_array_1[7],

"R",

str_mr_array_1[7],

"K/S",

str_k_s_array_1[7]

],

[

"",

"",

"TC08",

str_tm_array_1[8],

"Rm",

str_rm_array_1[8],

"Rs",

str_rs_array_1[8],

"R",

str_mr_array_1[8],

"K/S",

str_k_s_array_1[8]

],

[

"",

"",

"TC09",

str_tm_array_1[9],

"Rm",

str_rm_array_1[9],

"Rs",

str_rs_array_1[9],

"R",

str_mr_array_1[9],

"K/S",

str_k_s_array_1[9]

],

[

"",

"",

"TC10",

str_tm_array_1[10],

"Rm",

str_rm_array_1[10],

"Rs",

str_rs_array_1[10],

"R",

str_mr_array_1[10],

"K/S",

str_k_s_array_1[10]

],

[

"",

"",

"TC011",

str_tm_array_1[11],

"Rm",

str_rm_array_1[11],

"Rs",

str_rs_array_1[11],

"R",

str_mr_array_1[11],

"K/S",

str_k_s_array_1[11]

],

[

"",

"",

"TC012",

str_tm_array_1[12],

"Rm",

str_rm_array_1[12],

"Rs",

str_rs_array_1[12],

"R",

str_mr_array_1[12],

"K/S",

str_k_s_array_1[12]

],

[

"",

"",

"TC013",

str_tm_array_1[13],

"Rm",

str_rm_array_1[13],

"Rs",

str_rs_array_1[13],

"R",

str_mr_array_1[13],

"K/S",

str_k_s_array_1[13]

],

[

"",

"",

"TC014",

str_tm_array_1[14],

"Rm",

str_rm_array_1[14],

"Rs",

str_rs_array_1[14],

"R",

str_mr_array_1[14],

"K/S",

str_k_s_array_1[14]

],

[

"",

"",

"TC015",

str_tm_array_1[15],

"Rm",

str_rm_array_1[15],

"Rs",

str_rs_array_1[15],

"R",

str_mr_array_1[15],

"K/S",

str_k_s_array_1[15]

],

[

"",

"",

"TC016",

str_tm_array_1[16],

"Rm",

str_rm_array_1[16],

"Rs",

str_rs_array_1[16],

"R",

str_mr_array_1[16],

"K/S",

str_k_s_array_1[16]

],

[

"",

"",

"TC017",

str_tm_array_1[17],

"Rm",

str_rm_array_1[17],

"Rs",

str_rs_array_1[17],

"R",

str_mr_array_1[17],

"K/S",

str_k_s_array_1[17]

],

[

"",

"",

"TC018",

str_tm_array_1[18],

"Rm",

str_rm_array_1[18],

"Rs",

str_rs_array_1[18],

"R",

str_mr_array_1[18],

"K/S",

str_k_s_array_1[18]

],

[

"",

"",

"TC019",

str_tm_array_1[19],

"Rm",

str_rm_array_1[19],

"Rs",

str_rs_array_1[19],

"R",

str_mr_array_1[19],

"K/S",

str_k_s_array_1[19]

],

[

"",

"",

"TC020",

str_tm_array_1[20],

"Rm",

str_rm_array_1[20],

"Rs",

str_rs_array_1[20],

"R",

str_mr_array_1[20],

"K/S",

str_k_s_array_1[20]

],

[

"",

"",

"TC021",

str_tm_array_1[21],

"Rm",

str_rm_array_1[21],

"Rs",

str_rs_array_1[21],

"R",

str_mr_array_1[21],

"K/S",

str_k_s_array_1[21]

],

[

"",

"",

"TC022",

str_tm_array_1[22],

"Rm",

removeCR(str_rm_array_1[22]),

"Rs",

removeCR(str_rs_array_1[22]),

"R",

removeCR(str_mr_array_1[22]),

"K/S",

str_k_s_array_1[22],

],

[

"",

"",

"TC023",

str_tm_array_1[23],

"Rm",

str_rm_array_1[23],

"Rs",

str_rs_array_1[23],

"R",

str_mr_array_1[23],

"K/S",

removeCRTC23(str_k_s_array_1[23]),

],

[

"",

"",

"TC024",

str_tm_array_1[24],

"Rm",

str_rm_array_1[24],

"Rs",

str_rs_array_1[24],

"R",

str_mr_array_1[24],

"K/S",

str_k_s_array_1[24]

],

[

"",

"",

"TC025",

str_tm_array_1[25],

"Rm",

str_rm_array_1[25],

"Rs",

str_rs_array_1[25],

"R",

str_mr_array_1[25],

"K/S",

str_k_s_array_1[25]

],

[

"",

"",

"TC026",

str_tm_array_1[26],

"Rm",

str_rm_array_1[26],

"Rs",

str_rs_array_1[26],

"R",

str_mr_array_1[26],

"K/S",

str_k_s_array_1[26]

],

[

"",

"",

"TC027",

str_tm_array_1[27],

"Rm",

str_rm_array_1[27],

"Rs",

str_rs_array_1[27],

"R",

str_mr_array_1[27],

"K/S",

str_k_s_array_1[27]

],

[

"",

"",

"TC028",

str_tm_array_1[28],

"Rm",

str_rm_array_1[28],

"Rs",

str_rs_array_1[28],

"R",

str_mr_array_1[28],

"K/S",

str_k_s_array_1[28]

],

[

"",

"",

"TC029",

str_tm_array_1[29],

"Rm",

str_rm_array_1[29],

"Rs",

str_rs_array_1[29],

"R",

str_mr_array_1[29],

"K/S",

str_k_s_array_1[29]

],

[

"",

"",

"TC030",

singleremoveapce30(str_tm_array_1[30]),

"Rm",

singleremoveapce30(str_rm_array_1[30]),

"Rs",

singleremoveapce30(str_rs_array_1[30]),

"R",

singleremoveapce30(str_mr_array_1[30]),

"K/S",

singleremoveapce30(str_k_s_array_1[30]),

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"dK/S",

ch1_dksvalue,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"C0",

ch1_C0value,

],

[

"",

"",

"",

"",

"Temp",

ch1_tempvalue+"゜C",

"Hmdty",

ch1_humidityvalue+"%",

"Ke",

ch1_kevalue,

"C1",

ch1_C1value,

],

[

"",

"",

"",

"",

"",

"",

"Adev",

ch1_dev_a_value,

"Bdev",

ch1_dev_b_value,

"C2",

ch1_C2value,

],

[

"",

"",

"",

"",

"",

"",

"Adegr",

ch1_deg_a_value,

"Bdegr",

ch1_deg_b_value,

"C3",

ch1_C3value,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"LotCh",

ch1_lot_ch_value,

"C4",

ch1_C4value,

],

[

"",

"",

"",

"",

"",

"[----]",

"Acal",

ch1_cal_a_value,

"Bcal",

ch1_cal_b_value,

"C5",

ch1_C5value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Ktemp",

ch1_ktemp_value,

"C6",

ch1_C6value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Kunit",

ch1_kunit_value,

"C7",

ch1_C7value,

],[

"",

"",

"",

"",

"",

"",

"Acorr",

ch1_corr_a_value,

"Bcorr",

ch1_corr_b_value,

"C8",

ch1_C8value,

],

[

"[SINGLE]",

"CH",

"2",

ch2_novalue,

ch2_namevalue

],

[

"",

"",

"USED",

str_tm_array_2[0],

"Rm",

str_rm_array_2[0],

"Rs",

str_rs_array_2[0],

"R",

str_mr_array_2[0],

"K/S",

str_k_s_array_2[0]

],

[

"",

"",

"TC01",

str_tm_array_2[1],

"Rm",

str_rm_array_2[1],

"Rs",

str_rs_array_2[1],

"R",

str_mr_array_2[1],

"K/S",

str_k_s_array_2[1]

],

[

"",

"",

"TC02",

str_tm_array_2[2],

"Rm",

str_rm_array_2[2],

"Rs",

str_rs_array_2[2],

"R",

str_mr_array_2[2],

"K/S",

str_k_s_array_2[2]

],

[

"",

"",

"TC03",

str_tm_array_2[3],

"Rm",

str_rm_array_2[3],

"Rs",

str_rs_array_2[3],

"R",

str_mr_array_2[3],

"K/S",

str_k_s_array_2[3]

],

[

"",

"",

"TC04",

str_tm_array_2[4],

"Rm",

str_rm_array_2[4],

"Rs",

str_rs_array_2[4],

"R",

str_mr_array_2[4],

"K/S",

str_k_s_array_2[4]

],

[

"",

"",

"TC05",

str_tm_array_2[5],

"Rm",

str_rm_array_2[5],

"Rs",

str_rs_array_2[5],

"R",

str_mr_array_2[5],

"K/S",

str_k_s_array_2[5]

],

[

"",

"",

"TC06",

str_tm_array_2[6],

"Rm",

str_rm_array_2[6],

"Rs",

str_rs_array_2[6],

"R",

str_mr_array_2[6],

"K/S",

str_k_s_array_2[6]

],

[

"",

"",

"TC07",

str_tm_array_2[7],

"Rm",

str_rm_array_2[7],

"Rs",

str_rs_array_2[7],

"R",

str_mr_array_2[7],

"K/S",

str_k_s_array_2[7]

],

[

"",

"",

"TC08",

str_tm_array_2[8],

"Rm",

str_rm_array_2[8],

"Rs",

str_rs_array_2[8],

"R",

str_mr_array_2[8],

"K/S",

str_k_s_array_2[8]

],

[

"",

"",

"TC09",

str_tm_array_2[9],

"Rm",

str_rm_array_2[9],

"Rs",

str_rs_array_2[9],

"R",

str_mr_array_2[9],

"K/S",

str_k_s_array_2[9]

],

[

"",

"",

"TC10",

str_tm_array_2[10],

"Rm",

str_rm_array_2[10],

"Rs",

str_rs_array_2[10],

"R",

str_mr_array_2[10],

"K/S",

str_k_s_array_2[10]

],

[

"",

"",

"TC011",

str_tm_array_2[11],

"Rm",

str_rm_array_2[11],

"Rs",

str_rs_array_2[11],

"R",

str_mr_array_2[11],

"K/S",

str_k_s_array_2[11]

],

[

"",

"",

"TC012",

str_tm_array_2[12],

"Rm",

str_rm_array_2[12],

"Rs",

str_rs_array_2[12],

"R",

str_mr_array_2[12],

"K/S",

str_k_s_array_2[12]

],

[

"",

"",

"TC013",

str_tm_array_2[13],

"Rm",

str_rm_array_2[13],

"Rs",

str_rs_array_2[13],

"R",

str_mr_array_2[13],

"K/S",

str_k_s_array_2[13]

],

[

"",

"",

"TC014",

str_tm_array_2[14],

"Rm",

str_rm_array_2[14],

"Rs",

str_rs_array_2[14],

"R",

str_mr_array_2[14],

"K/S",

str_k_s_array_2[14]

],

[

"",

"",

"TC015",

str_tm_array_2[15],

"Rm",

str_rm_array_2[15],

"Rs",

str_rs_array_2[15],

"R",

str_mr_array_2[15],

"K/S",

str_k_s_array_2[15]

],

[

"",

"",

"TC016",

str_tm_array_2[16],

"Rm",

str_rm_array_2[16],

"Rs",

str_rs_array_2[16],

"R",

str_mr_array_2[16],

"K/S",

str_k_s_array_2[16]

],

[

"",

"",

"TC017",

str_tm_array_2[17],

"Rm",

str_rm_array_2[17],

"Rs",

str_rs_array_2[17],

"R",

str_mr_array_2[17],

"K/S",

str_k_s_array_2[17]

],

[

"",

"",

"TC018",

str_tm_array_2[18],

"Rm",

str_rm_array_2[18],

"Rs",

str_rs_array_2[18],

"R",

str_mr_array_2[18],

"K/S",

str_k_s_array_2[18]

],

[

"",

"",

"TC019",

str_tm_array_2[19],

"Rm",

str_rm_array_2[19],

"Rs",

str_rs_array_2[19],

"R",

str_mr_array_2[19],

"K/S",

str_k_s_array_2[19]

],

[

"",

"",

"TC020",

str_tm_array_2[20],

"Rm",

str_rm_array_2[20],

"Rs",

str_rs_array_2[20],

"R",

str_mr_array_2[20],

"K/S",

str_k_s_array_2[20]

],

[

"",

"",

"TC021",

str_tm_array_2[21],

"Rm",

str_rm_array_2[21],

"Rs",

str_rs_array_2[21],

"R",

str_mr_array_2[21],

"K/S",

str_k_s_array_2[21]

],

[

"",

"",

"TC022",

str_tm_array_2[22],

"Rm",

removeCR(str_rm_array_2[22]),

"Rs",

removeCR(str_rs_array_2[22]),

"R",

removeCR(str_mr_array_2[22]),

"K/S",

str_k_s_array_2[22]

],

[

"",

"",

"TC023",

str_tm_array_2[23],

"Rm",

str_rm_array_2[23],

"Rs",

str_rs_array_2[23],

"R",

str_mr_array_2[23],

"K/S",

removeCRTC23(str_k_s_array_2[23]),

],

[

"",

"",

"TC024",

str_tm_array_2[24],

"Rm",

str_rm_array_2[24],

"Rs",

str_rs_array_2[24],

"R",

str_mr_array_2[24],

"K/S",

str_k_s_array_2[24]

],

[

"",

"",

"TC025",

str_tm_array_2[25],

"Rm",

str_rm_array_2[25],

"Rs",

str_rs_array_2[25],

"R",

str_mr_array_2[25],

"K/S",

str_k_s_array_2[25]

],

[

"",

"",

"TC026",

str_tm_array_2[26],

"Rm",

str_rm_array_2[26],

"Rs",

str_rs_array_2[26],

"R",

str_mr_array_2[26],

"K/S",

str_k_s_array_2[26]

],

[

"",

"",

"TC027",

str_tm_array_2[27],

"Rm",

str_rm_array_2[27],

"Rs",

str_rs_array_2[27],

"R",

str_mr_array_2[27],

"K/S",

str_k_s_array_2[27]

],

[

"",

"",

"TC028",

str_tm_array_2[28],

"Rm",

str_rm_array_2[28],

"Rs",

str_rs_array_2[28],

"R",

str_mr_array_2[28],

"K/S",

str_k_s_array_2[28]

],

[

"",

"",

"TC029",

str_tm_array_2[29],

"Rm",

str_rm_array_2[29],

"Rs",

str_rs_array_2[29],

"R",

str_mr_array_2[29],

"K/S",

str_k_s_array_2[29]

],

[

"",

"",

"TC030",

singleremoveapce30(str_tm_array_2[30]),

"Rm",

singleremoveapce30(str_rm_array_2[30]),

"Rs",

singleremoveapce30(str_rs_array_2[30]),

"R",

singleremoveapce30(str_mr_array_2[30]),

"K/S",

singleremoveapce30(str_k_s_array_2[30]),

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"dK/S",

ch2_dksvalue,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"C0",

ch2_C0value,

],

[

"",

"",

"",

"",

"Temp",

ch2_tempvalue+"゜C",

"Hmdty",

ch2_humidityvalue+"%",

"Ke",

ch2_kevalue,

"C1",

ch2_C1value,

],

[

"",

"",

"",

"",

"",

"",

"Adev",

ch2_dev_a_value,

"Bdev",

ch2_dev_b_value,

"C2",

ch2_C2value,

],

[

"",

"",

"",

"",

"",

"",

"Adegr",

ch2_deg_a_value,

"Bdegr",

ch2_deg_b_value,

"C3",

ch2_C3value,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"LotCh",

ch2_lot_ch_value,

"C4",

ch2_C4value,

],

[

"",

"",

"",

"",

"",

"[----]",

"Acal",

ch2_cal_a_value,

"Bcal",

ch2_cal_b_value,

"C5",

ch2_C5value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Ktemp",

ch2_ktemp_value,

"C6",

ch2_C6value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Kunit",

ch2_kunit_value,

"C7",

ch2_C7value,

],[

"",

"",

"",

"",

"",

"",

"Acorr",

ch2_corr_a_value,

"Bcorr",

ch2_corr_b_value,

"C8",

ch2_C8value,

],

[

"[SINGLE]",

"CH",

"3",

ch3_novalue,

ch3_namevalue

],

[

"",

"",

"USED",

str_tm_array_3[0],

"Rm",

str_rm_array_3[0],

"Rs",

str_rs_array_3[0],

"R",

str_mr_array_3[0],

"K/S",

str_k_s_array_3[0]

],

[

"",

"",

"TC01",

str_tm_array_3[1],

"Rm",

str_rm_array_3[1],

"Rs",

str_rs_array_3[1],

"R",

str_mr_array_3[1],

"K/S",

str_k_s_array_3[1]

],

[

"",

"",

"TC02",

str_tm_array_3[2],

"Rm",

str_rm_array_3[2],

"Rs",

str_rs_array_3[2],

"R",

str_mr_array_3[2],

"K/S",

str_k_s_array_3[2]

],

[

"",

"",

"TC03",

str_tm_array_3[3],

"Rm",

str_rm_array_3[3],

"Rs",

str_rs_array_3[3],

"R",

str_mr_array_3[3],

"K/S",

str_k_s_array_3[3]

],

[

"",

"",

"TC04",

str_tm_array_3[4],

"Rm",

str_rm_array_3[4],

"Rs",

str_rs_array_3[4],

"R",

str_mr_array_3[4],

"K/S",

str_k_s_array_3[4]

],

[

"",

"",

"TC05",

str_tm_array_3[5],

"Rm",

str_rm_array_3[5],

"Rs",

str_rs_array_3[5],

"R",

str_mr_array_3[5],

"K/S",

str_k_s_array_3[5]

],

[

"",

"",

"TC06",

str_tm_array_3[6],

"Rm",

str_rm_array_3[6],

"Rs",

str_rs_array_3[6],

"R",

str_mr_array_3[6],

"K/S",

str_k_s_array_3[6]

],

[

"",

"",

"TC07",

str_tm_array_3[7],

"Rm",

str_rm_array_3[7],

"Rs",

str_rs_array_3[7],

"R",

str_mr_array_3[7],

"K/S",

str_k_s_array_3[7]

],

[

"",

"",

"TC08",

str_tm_array_3[8],

"Rm",

str_rm_array_3[8],

"Rs",

str_rs_array_3[8],

"R",

str_mr_array_3[8],

"K/S",

str_k_s_array_3[8]

],

[

"",

"",

"TC09",

str_tm_array_3[9],

"Rm",

str_rm_array_3[9],

"Rs",

str_rs_array_3[9],

"R",

str_mr_array_3[9],

"K/S",

str_k_s_array_3[9]

],

[

"",

"",

"TC10",

str_tm_array_3[10],

"Rm",

str_rm_array_3[10],

"Rs",

str_rs_array_3[10],

"R",

str_mr_array_3[10],

"K/S",

str_k_s_array_3[10]

],

[

"",

"",

"TC011",

str_tm_array_3[11],

"Rm",

str_rm_array_3[11],

"Rs",

str_rs_array_3[11],

"R",

str_mr_array_3[11],

"K/S",

str_k_s_array_3[11]

],

[

"",

"",

"TC012",

str_tm_array_3[12],

"Rm",

str_rm_array_3[12],

"Rs",

str_rs_array_3[12],

"R",

str_mr_array_3[12],

"K/S",

str_k_s_array_3[12]

],

[

"",

"",

"TC013",

str_tm_array_3[13],

"Rm",

str_rm_array_3[13],

"Rs",

str_rs_array_3[13],

"R",

str_mr_array_3[13],

"K/S",

str_k_s_array_3[13]

],

[

"",

"",

"TC014",

str_tm_array_3[14],

"Rm",

str_rm_array_3[14],

"Rs",

str_rs_array_3[14],

"R",

str_mr_array_3[14],

"K/S",

str_k_s_array_3[14]

],

[

"",

"",

"TC015",

str_tm_array_3[15],

"Rm",

str_rm_array_3[15],

"Rs",

str_rs_array_3[15],

"R",

str_mr_array_3[15],

"K/S",

str_k_s_array_3[15]

],

[

"",

"",

"TC016",

str_tm_array_3[16],

"Rm",

str_rm_array_3[16],

"Rs",

str_rs_array_3[16],

"R",

str_mr_array_3[16],

"K/S",

str_k_s_array_3[16]

],

[

"",

"",

"TC017",

str_tm_array_3[17],

"Rm",

str_rm_array_3[17],

"Rs",

str_rs_array_3[17],

"R",

str_mr_array_3[17],

"K/S",

str_k_s_array_3[17]

],

[

"",

"",

"TC018",

str_tm_array_3[18],

"Rm",

str_rm_array_3[18],

"Rs",

str_rs_array_3[18],

"R",

str_mr_array_3[18],

"K/S",

str_k_s_array_3[18]

],

[

"",

"",

"TC019",

str_tm_array_3[19],

"Rm",

str_rm_array_3[19],

"Rs",

str_rs_array_3[19],

"R",

str_mr_array_3[19],

"K/S",

str_k_s_array_3[19]

],

[

"",

"",

"TC020",

str_tm_array_3[20],

"Rm",

str_rm_array_3[20],

"Rs",

str_rs_array_3[20],

"R",

str_mr_array_3[20],

"K/S",

str_k_s_array_3[20]

],

[

"",

"",

"TC021",

str_tm_array_3[21],

"Rm",

str_rm_array_3[21],

"Rs",

str_rs_array_3[21],

"R",

str_mr_array_3[21],

"K/S",

str_k_s_array_3[21]

],

[

"",

"",

"TC022",

str_tm_array_3[22],

"Rm",

removeCR(str_rm_array_3[22]),

"Rs",

removeCR(str_rs_array_3[22]),

"R",

removeCR(str_mr_array_3[22]),

"K/S",

str_k_s_array_3[22]

],

[

"",

"",

"TC023",

str_tm_array_3[23],

"Rm",

str_rm_array_3[23],

"Rs",

str_rs_array_3[23],

"R",

str_mr_array_3[23],

"K/S",

removeCRTC23(str_k_s_array_3[23]),

],

[

"",

"",

"TC024",

str_tm_array_3[24],

"Rm",

str_rm_array_3[24],

"Rs",

str_rs_array_3[24],

"R",

str_mr_array_3[24],

"K/S",

str_k_s_array_3[24]

],

[

"",

"",

"TC025",

str_tm_array_3[25],

"Rm",

str_rm_array_3[25],

"Rs",

str_rs_array_3[25],

"R",

str_mr_array_3[25],

"K/S",

str_k_s_array_3[25]

],

[

"",

"",

"TC026",

str_tm_array_3[26],

"Rm",

str_rm_array_3[26],

"Rs",

str_rs_array_3[26],

"R",

str_mr_array_3[26],

"K/S",

str_k_s_array_3[26]

],

[

"",

"",

"TC027",

str_tm_array_3[27],

"Rm",

str_rm_array_3[27],

"Rs",

str_rs_array_3[27],

"R",

str_mr_array_3[27],

"K/S",

str_k_s_array_3[27]

],

[

"",

"",

"TC028",

str_tm_array_3[28],

"Rm",

str_rm_array_3[28],

"Rs",

str_rs_array_3[28],

"R",

str_mr_array_3[28],

"K/S",

str_k_s_array_3[28]

],

[

"",

"",

"TC029",

str_tm_array_3[29],

"Rm",

str_rm_array_3[29],

"Rs",

str_rs_array_3[29],

"R",

str_mr_array_3[29],

"K/S",

str_k_s_array_3[29]

],

[

"",

"",

"TC030",

singleremoveapce30(str_tm_array_3[30]),

"Rm",

singleremoveapce30(str_rm_array_3[30]),

"Rs",

singleremoveapce30(str_rs_array_3[30]),

"R",

singleremoveapce30(str_mr_array_3[30]),

"K/S",

singleremoveapce30(str_k_s_array_3[30]),

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"dK/S",

ch3_dksvalue,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"C0",

ch3_C0value,

],

[

"",

"",

"",

"",

"Temp",

ch3_tempvalue+"゜C",

"Hmdty",

ch3_humidityvalue+"%",

"Ke",

ch3_kevalue,

"C1",

ch3_C1value,

],

[

"",

"",

"",

"",

"",

"",

"Adev",

ch3_dev_a_value,

"Bdev",

ch3_dev_b_value,

"C2",

ch3_C2value,

],

[

"",

"",

"",

"",

"",

"",

"Adegr",

ch3_deg_a_value,

"Bdegr",

ch3_deg_b_value,

"C3",

ch3_C3value,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"LotCh",

ch3_lot_ch_value,

"C4",

ch3_C4value,

],

[

"",

"",

"",

"",

"",

"[----]",

"Acal",

ch3_cal_a_value,

"Bcal",

ch3_cal_b_value,

"C5",

ch3_C5value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Ktemp",

ch3_ktemp_value,

"C6",

ch3_C6value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Kunit",

ch3_kunit_value,

"C7",

ch3_C7value,

],[

"",

"",

"",

"",

"",

"",

"Acorr",

ch3_corr_a_value,

"Bcorr",

ch3_corr_b_value,

"C8",

ch3_C8value,

],

[

"[SINGLE]",

"CH",

"4",

ch4_novalue,

ch4_namevalue

],

[

"",

"",

"USED",

str_tm_array_4[0],

"Rm",

str_rm_array_4[0],

"Rs",

str_rs_array_4[0],

"R",

str_mr_array_4[0],

"K/S",

str_k_s_array_4[0]

],

[

"",

"",

"TC01",

str_tm_array_4[1],

"Rm",

str_rm_array_4[1],

"Rs",

str_rs_array_4[1],

"R",

str_mr_array_4[1],

"K/S",

str_k_s_array_4[1]

],

[

"",

"",

"TC02",

str_tm_array_4[2],

"Rm",

str_rm_array_4[2],

"Rs",

str_rs_array_4[2],

"R",

str_mr_array_4[2],

"K/S",

str_k_s_array_4[2]

],

[

"",

"",

"TC03",

str_tm_array_4[3],

"Rm",

str_rm_array_4[3],

"Rs",

str_rs_array_4[3],

"R",

str_mr_array_4[3],

"K/S",

str_k_s_array_4[3]

],

[

"",

"",

"TC04",

str_tm_array_4[4],

"Rm",

str_rm_array_4[4],

"Rs",

str_rs_array_4[4],

"R",

str_mr_array_4[4],

"K/S",

str_k_s_array_4[4]

],

[

"",

"",

"TC05",

str_tm_array_4[5],

"Rm",

str_rm_array_4[5],

"Rs",

str_rs_array_4[5],

"R",

str_mr_array_4[5],

"K/S",

str_k_s_array_4[5]

],

[

"",

"",

"TC06",

str_tm_array_4[6],

"Rm",

str_rm_array_4[6],

"Rs",

str_rs_array_4[6],

"R",

str_mr_array_4[6],

"K/S",

str_k_s_array_4[6]

],

[

"",

"",

"TC07",

str_tm_array_4[7],

"Rm",

str_rm_array_4[7],

"Rs",

str_rs_array_4[7],

"R",

str_mr_array_4[7],

"K/S",

str_k_s_array_4[7]

],

[

"",

"",

"TC08",

str_tm_array_4[8],

"Rm",

str_rm_array_4[8],

"Rs",

str_rs_array_4[8],

"R",

str_mr_array_4[8],

"K/S",

str_k_s_array_4[8]

],

[

"",

"",

"TC09",

str_tm_array_4[9],

"Rm",

str_rm_array_4[9],

"Rs",

str_rs_array_4[9],

"R",

str_mr_array_4[9],

"K/S",

str_k_s_array_4[9]

],

[

"",

"",

"TC10",

str_tm_array_4[10],

"Rm",

str_rm_array_4[10],

"Rs",

str_rs_array_4[10],

"R",

str_mr_array_4[10],

"K/S",

str_k_s_array_4[10]

],

[

"",

"",

"TC011",

str_tm_array_4[11],

"Rm",

str_rm_array_4[11],

"Rs",

str_rs_array_4[11],

"R",

str_mr_array_4[11],

"K/S",

str_k_s_array_4[11]

],

[

"",

"",

"TC012",

str_tm_array_4[12],

"Rm",

str_rm_array_4[12],

"Rs",

str_rs_array_4[12],

"R",

str_mr_array_4[12],

"K/S",

str_k_s_array_4[12]

],

[

"",

"",

"TC013",

str_tm_array_4[13],

"Rm",

str_rm_array_4[13],

"Rs",

str_rs_array_4[13],

"R",

str_mr_array_4[13],

"K/S",

str_k_s_array_4[13]

],

[

"",

"",

"TC014",

str_tm_array_4[14],

"Rm",

str_rm_array_4[14],

"Rs",

str_rs_array_4[14],

"R",

str_mr_array_4[14],

"K/S",

str_k_s_array_4[14]

],

[

"",

"",

"TC015",

str_tm_array_4[15],

"Rm",

str_rm_array_4[15],

"Rs",

str_rs_array_4[15],

"R",

str_mr_array_4[15],

"K/S",

str_k_s_array_4[15]

],

[

"",

"",

"TC016",

str_tm_array_4[16],

"Rm",

str_rm_array_4[16],

"Rs",

str_rs_array_4[16],

"R",

str_mr_array_4[16],

"K/S",

str_k_s_array_4[16]

],

[

"",

"",

"TC017",

str_tm_array_4[17],

"Rm",

str_rm_array_4[17],

"Rs",

str_rs_array_4[17],

"R",

str_mr_array_4[17],

"K/S",

str_k_s_array_4[17]

],

[

"",

"",

"TC018",

str_tm_array_4[18],

"Rm",

str_rm_array_4[18],

"Rs",

str_rs_array_4[18],

"R",

str_mr_array_4[18],

"K/S",

str_k_s_array_4[18]

],

[

"",

"",

"TC019",

str_tm_array_4[19],

"Rm",

str_rm_array_4[19],

"Rs",

str_rs_array_4[19],

"R",

str_mr_array_4[19],

"K/S",

str_k_s_array_4[19]

],

[

"",

"",

"TC020",

str_tm_array_4[20],

"Rm",

str_rm_array_4[20],

"Rs",

str_rs_array_4[20],

"R",

str_mr_array_4[20],

"K/S",

str_k_s_array_4[20]

],

[

"",

"",

"TC021",

str_tm_array_4[21],

"Rm",

str_rm_array_4[21],

"Rs",

str_rs_array_4[21],

"R",

str_mr_array_4[21],

"K/S",

str_k_s_array_4[21]

],

[

"",

"",

"TC022",

str_tm_array_4[22],

"Rm",

removeCR(str_rm_array_4[22]),

"Rs",

removeCR(str_rs_array_4[22]),

"R",

removeCR(str_mr_array_4[22]),

"K/S",

str_k_s_array_4[22]

],

[

"",

"",

"TC023",

str_tm_array_4[23],

"Rm",

str_rm_array_4[23],

"Rs",

str_rs_array_4[23],

"R",

str_mr_array_4[23],

"K/S",

removeCRTC23(str_k_s_array_4[23]),

],

[

"",

"",

"TC024",

str_tm_array_4[24],

"Rm",

str_rm_array_4[24],

"Rs",

str_rs_array_4[24],

"R",

str_mr_array_4[24],

"K/S",

str_k_s_array_4[24]

],

[

"",

"",

"TC025",

str_tm_array_4[25],

"Rm",

str_rm_array_4[25],

"Rs",

str_rs_array_4[25],

"R",

str_mr_array_4[25],

"K/S",

str_k_s_array_4[25]

],

[

"",

"",

"TC026",

str_tm_array_4[26],

"Rm",

str_rm_array_4[26],

"Rs",

str_rs_array_4[26],

"R",

str_mr_array_4[26],

"K/S",

str_k_s_array_4[26]

],

[

"",

"",

"TC027",

str_tm_array_4[27],

"Rm",

str_rm_array_4[27],

"Rs",

str_rs_array_4[27],

"R",

str_mr_array_4[27],

"K/S",

str_k_s_array_4[27]

],

[

"",

"",

"TC028",

str_tm_array_4[28],

"Rm",

str_rm_array_4[28],

"Rs",

str_rs_array_4[28],

"R",

str_mr_array_4[28],

"K/S",

str_k_s_array_4[28]

],

[

"",

"",

"TC029",

str_tm_array_4[29],

"Rm",

str_rm_array_4[29],

"Rs",

str_rs_array_4[29],

"R",

str_mr_array_4[29],

"K/S",

str_k_s_array_4[29]

],

[

"",

"",

"TC030",

singleremoveapce30(str_tm_array_4[30]),

"Rm",

singleremoveapce30(str_rm_array_4[30]),

"Rs",

singleremoveapce30(str_rs_array_4[30]),

"R",

singleremoveapce30(str_mr_array_4[30]),

"K/S",

singleremoveapce30(str_k_s_array_4[30]),

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"dK/S",

ch4_dksvalue,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"C0",

ch4_C0value,

],

[

"",

"",

"",

"",

"Temp",

ch4_tempvalue+"゜C",

"Hmdty",

ch4_humidityvalue+"%",

"Ke",

ch4_kevalue,

"C1",

ch4_C1value,

],

[

"",

"",

"",

"",

"",

"",

"Adev",

ch4_dev_a_value,

"Bdev",

ch4_dev_b_value,

"C2",

ch4_C2value,

],

[

"",

"",

"",

"",

"",

"",

"Adegr",

ch4_deg_a_value,

"Bdegr",

ch4_deg_b_value,

"C3",

ch4_C3value,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"LotCh",

ch4_lot_ch_value,

"C4",

ch4_C4value,

],

[

"",

"",

"",

"",

"",

"[----]",

"Acal",

ch4_cal_a_value,

"Bcal",

ch4_cal_b_value,

"C5",

ch4_C5value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Ktemp",

ch4_ktemp_value,

"C6",

ch4_C6value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Kunit",

ch4_kunit_value,

"C7",

ch4_C7value,

],[

"",

"",

"",

"",

"",

"",

"Acorr",

ch4_corr_a_value,

"Bcorr",

ch4_corr_b_value,

"C8",

ch4_C8value,

],

[

"[SINGLE]",

"CH",

"5",

ch5_novalue,

ch5_namevalue

],

[

"",

"",

"USED",

str_tm_array_5[0],

"Rm",

removeCap(str_rm_array_5[0]),

"Rs",

str_rs_array_5[0],

"R",

str_mr_array_5[0],

"K/S",

str_k_s_array_5[0]

],

[

"",

"",

"TC01",

str_tm_array_5[1],

"Rm",

str_rm_array_5[1],

"Rs",

str_rs_array_5[1],

"R",

str_mr_array_5[1],

"K/S",

str_k_s_array_5[1]

],

[

"",

"",

"TC02",

str_tm_array_5[2],

"Rm",

str_rm_array_5[2],

"Rs",

str_rs_array_5[2],

"R",

str_mr_array_5[2],

"K/S",

str_k_s_array_5[2]

],

[

"",

"",

"TC03",

str_tm_array_5[3],

"Rm",

str_rm_array_5[3],

"Rs",

str_rs_array_5[3],

"R",

str_mr_array_5[3],

"K/S",

str_k_s_array_5[3]

],

[

"",

"",

"TC04",

str_tm_array_5[4],

"Rm",

str_rm_array_5[4],

"Rs",

str_rs_array_5[4],

"R",

str_mr_array_5[4],

"K/S",

str_k_s_array_5[4]

],

[

"",

"",

"TC05",

str_tm_array_5[5],

"Rm",

str_rm_array_5[5],

"Rs",

str_rs_array_5[5],

"R",

str_mr_array_5[5],

"K/S",

str_k_s_array_5[5]

],

[

"",

"",

"TC06",

str_tm_array_5[6],

"Rm",

str_rm_array_5[6],

"Rs",

str_rs_array_5[6],

"R",

str_mr_array_5[6],

"K/S",

str_k_s_array_5[6]

],

[

"",

"",

"TC07",

str_tm_array_5[7],

"Rm",

str_rm_array_5[7],

"Rs",

str_rs_array_5[7],

"R",

str_mr_array_5[7],

"K/S",

str_k_s_array_5[7]

],

[

"",

"",

"TC08",

str_tm_array_5[8],

"Rm",

str_rm_array_5[8],

"Rs",

str_rs_array_5[8],

"R",

str_mr_array_5[8],

"K/S",

str_k_s_array_5[8]

],

[

"",

"",

"TC09",

str_tm_array_5[9],

"Rm",

str_rm_array_5[9],

"Rs",

str_rs_array_5[9],

"R",

str_mr_array_5[9],

"K/S",

str_k_s_array_5[9]

],

[

"",

"",

"TC10",

str_tm_array_5[10],

"Rm",

str_rm_array_5[10],

"Rs",

str_rs_array_5[10],

"R",

str_mr_array_5[10],

"K/S",

str_k_s_array_5[10]

],

[

"",

"",

"TC011",

str_tm_array_5[11],

"Rm",

str_rm_array_5[11],

"Rs",

str_rs_array_5[11],

"R",

str_mr_array_5[11],

"K/S",

str_k_s_array_5[11]

],

[

"",

"",

"TC012",

str_tm_array_5[12],

"Rm",

str_rm_array_5[12],

"Rs",

str_rs_array_5[12],

"R",

str_mr_array_5[12],

"K/S",

str_k_s_array_5[12]

],

[

"",

"",

"TC013",

str_tm_array_5[13],

"Rm",

str_rm_array_5[13],

"Rs",

str_rs_array_5[13],

"R",

str_mr_array_5[13],

"K/S",

str_k_s_array_5[13]

],

[

"",

"",

"TC014",

str_tm_array_5[14],

"Rm",

str_rm_array_5[14],

"Rs",

str_rs_array_5[14],

"R",

str_mr_array_5[14],

"K/S",

str_k_s_array_5[14]

],

[

"",

"",

"TC015",

str_tm_array_5[15],

"Rm",

str_rm_array_5[15],

"Rs",

str_rs_array_5[15],

"R",

str_mr_array_5[15],

"K/S",

str_k_s_array_5[15]

],

[

"",

"",

"TC016",

str_tm_array_5[16],

"Rm",

str_rm_array_5[16],

"Rs",

str_rs_array_5[16],

"R",

str_mr_array_5[16],

"K/S",

str_k_s_array_5[16]

],

[

"",

"",

"TC017",

str_tm_array_5[17],

"Rm",

str_rm_array_5[17],

"Rs",

str_rs_array_5[17],

"R",

str_mr_array_5[17],

"K/S",

str_k_s_array_5[17]

],

[

"",

"",

"TC018",

str_tm_array_5[18],

"Rm",

str_rm_array_5[18],

"Rs",

str_rs_array_5[18],

"R",

str_mr_array_5[18],

"K/S",

str_k_s_array_5[18]

],

[

"",

"",

"TC019",

str_tm_array_5[19],

"Rm",

str_rm_array_5[19],

"Rs",

str_rs_array_5[19],

"R",

str_mr_array_5[19],

"K/S",

str_k_s_array_5[19]

],

[

"",

"",

"TC020",

str_tm_array_5[20],

"Rm",

str_rm_array_5[20],

"Rs",

str_rs_array_5[20],

"R",

str_mr_array_5[20],

"K/S",

str_k_s_array_5[20]

],

[

"",

"",

"TC021",

str_tm_array_5[21],

"Rm",

str_rm_array_5[21],

"Rs",

str_rs_array_5[21],

"R",

str_mr_array_5[21],

"K/S",

str_k_s_array_5[21]

],

[

"",

"",

"TC022",

str_tm_array_5[22],

"Rm",

removeCR(str_rm_array_5[22]),

"Rs",

removeCR(str_rs_array_5[22]),

"R",

removeCR(str_mr_array_5[22]),

"K/S",

str_k_s_array_5[22]

],

[

"",

"",

"TC023",

str_tm_array_5[23],

"Rm",

str_rm_array_5[23],

"Rs",

str_rs_array_5[23],

"R",

str_mr_array_5[23],

"K/S",

removeCRTC23(str_k_s_array_5[23]),

],

[

"",

"",

"TC024",

str_tm_array_5[24],

"Rm",

str_rm_array_5[24],

"Rs",

str_rs_array_5[24],

"R",

str_mr_array_5[24],

"K/S",

str_k_s_array_5[24]

],

[

"",

"",

"TC025",

str_tm_array_5[25],

"Rm",

str_rm_array_5[25],

"Rs",

str_rs_array_5[25],

"R",

str_mr_array_5[25],

"K/S",

str_k_s_array_5[25]

],

[

"",

"",

"TC026",

str_tm_array_5[26],

"Rm",

str_rm_array_5[26],

"Rs",

str_rs_array_5[26],

"R",

str_mr_array_5[26],

"K/S",

str_k_s_array_5[26]

],

[

"",

"",

"TC027",

str_tm_array_5[27],

"Rm",

str_rm_array_5[27],

"Rs",

str_rs_array_5[27],

"R",

str_mr_array_5[27],

"K/S",

str_k_s_array_5[27]

],

[

"",

"",

"TC028",

str_tm_array_5[28],

"Rm",

str_rm_array_5[28],

"Rs",

str_rs_array_5[28],

"R",

str_mr_array_5[28],

"K/S",

str_k_s_array_5[28]

],

[

"",

"",

"TC029",

str_tm_array_5[29],

"Rm",

str_rm_array_5[29],

"Rs",

str_rs_array_5[29],

"R",

str_mr_array_5[29],

"K/S",

str_k_s_array_5[29]

],

[

"",

"",

"TC030",

singleremoveapce30(str_tm_array_5[30]),

"Rm",

singleremoveapce30(str_rm_array_5[30]),

"Rs",

singleremoveapce30(str_rs_array_5[30]),

"R",

singleremoveapce30(str_mr_array_5[30]),

"K/S",

singleremoveapce30(str_k_s_array_5[30]),

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"dK/S",

ch5_dksvalue,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"C0",

ch5_C0value,

],

[

"",

"",

"",

"",

"Temp",

ch5_tempvalue+"゜C",

"Hmdty",

ch5_humidityvalue+"%",

"Ke",

ch5_kevalue,

"C1",

ch5_C1value,

],

[

"",

"",

"",

"",

"",

"",

"Adev",

ch5_dev_a_value,

"Bdev",

ch5_dev_b_value,

"C2",

ch5_C2value,

],

[

"",

"",

"",

"",

"",

"",

"Adegr",

ch5_deg_a_value,

"Bdegr",

ch5_deg_b_value,

"C3",

ch5_C3value,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"LotCh",

ch5_lot_ch_value,

"C4",

ch5_C4value,

],

[

"",

"",

"",

"",

"",

"[----]",

"Acal",

ch5_cal_a_value,

"Bcal",

ch5_cal_b_value,

"C5",

ch5_C5value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Ktemp",

ch5_ktemp_value,

"C6",

ch5_C6value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Kunit",

ch5_kunit_value,

"C7",

ch5_C7value,

],[

"",

"",

"",

"",

"",

"",

"Acorr",

ch5_corr_a_value,

"Bcorr",

ch5_corr_b_value,

"C8",

ch5_C8value,

],

[

"[SINGLE]",

"CH",

"6",

ch6_novalue,

ch6_namevalue

],

[

"",

"",

"USED",

str_tm_array_6[0],

"Rm",

str_rm_array_6[0],

"Rs",

str_rs_array_6[0],

"R",

str_mr_array_6[0],

"K/S",

str_k_s_array_6[0]

],

[

"",

"",

"TC01",

str_tm_array_6[1],

"Rm",

str_rm_array_6[1],

"Rs",

str_rs_array_6[1],

"R",

str_mr_array_6[1],

"K/S",

str_k_s_array_6[1]

],

[

"",

"",

"TC02",

str_tm_array_6[2],

"Rm",

str_rm_array_6[2],

"Rs",

str_rs_array_6[2],

"R",

str_mr_array_6[2],

"K/S",

str_k_s_array_6[2]

],

[

"",

"",

"TC03",

str_tm_array_6[3],

"Rm",

str_rm_array_6[3],

"Rs",

str_rs_array_6[3],

"R",

str_mr_array_6[3],

"K/S",

str_k_s_array_6[3]

],

[

"",

"",

"TC04",

str_tm_array_6[4],

"Rm",

str_rm_array_6[4],

"Rs",

str_rs_array_6[4],

"R",

str_mr_array_6[4],

"K/S",

str_k_s_array_6[4]

],

[

"",

"",

"TC05",

str_tm_array_6[5],

"Rm",

str_rm_array_6[5],

"Rs",

str_rs_array_6[5],

"R",

str_mr_array_6[5],

"K/S",

str_k_s_array_6[5]

],

[

"",

"",

"TC06",

str_tm_array_6[6],

"Rm",

str_rm_array_6[6],

"Rs",

str_rs_array_6[6],

"R",

str_mr_array_6[6],

"K/S",

str_k_s_array_6[6]

],

[

"",

"",

"TC07",

str_tm_array_6[7],

"Rm",

str_rm_array_6[7],

"Rs",

str_rs_array_6[7],

"R",

str_mr_array_6[7],

"K/S",

str_k_s_array_6[7]

],

[

"",

"",

"TC08",

str_tm_array_6[8],

"Rm",

str_rm_array_6[8],

"Rs",

str_rs_array_6[8],

"R",

str_mr_array_6[8],

"K/S",

str_k_s_array_6[8]

],

[

"",

"",

"TC09",

str_tm_array_6[9],

"Rm",

str_rm_array_6[9],

"Rs",

str_rs_array_6[9],

"R",

str_mr_array_6[9],

"K/S",

str_k_s_array_6[9]

],

[

"",

"",

"TC10",

str_tm_array_6[10],

"Rm",

str_rm_array_6[10],

"Rs",

str_rs_array_6[10],

"R",

str_mr_array_6[10],

"K/S",

str_k_s_array_6[10]

],

[

"",

"",

"TC011",

str_tm_array_6[11],

"Rm",

str_rm_array_6[11],

"Rs",

str_rs_array_6[11],

"R",

str_mr_array_6[11],

"K/S",

str_k_s_array_6[11]

],

[

"",

"",

"TC012",

str_tm_array_6[12],

"Rm",

str_rm_array_6[12],

"Rs",

str_rs_array_6[12],

"R",

str_mr_array_6[12],

"K/S",

str_k_s_array_6[12]

],

[

"",

"",

"TC013",

str_tm_array_6[13],

"Rm",

str_rm_array_6[13],

"Rs",

str_rs_array_6[13],

"R",

str_mr_array_6[13],

"K/S",

str_k_s_array_6[13]

],

[

"",

"",

"TC014",

str_tm_array_6[14],

"Rm",

str_rm_array_6[14],

"Rs",

str_rs_array_6[14],

"R",

str_mr_array_6[14],

"K/S",

str_k_s_array_6[14]

],

[

"",

"",

"TC015",

str_tm_array_6[15],

"Rm",

str_rm_array_6[15],

"Rs",

str_rs_array_6[15],

"R",

str_mr_array_6[15],

"K/S",

str_k_s_array_6[15]

],

[

"",

"",

"TC016",

str_tm_array_6[16],

"Rm",

str_rm_array_6[16],

"Rs",

str_rs_array_6[16],

"R",

str_mr_array_6[16],

"K/S",

str_k_s_array_6[16]

],

[

"",

"",

"TC017",

str_tm_array_6[17],

"Rm",

str_rm_array_6[17],

"Rs",

str_rs_array_6[17],

"R",

str_mr_array_6[17],

"K/S",

str_k_s_array_6[17]

],

[

"",

"",

"TC018",

str_tm_array_6[18],

"Rm",

str_rm_array_6[18],

"Rs",

str_rs_array_6[18],

"R",

str_mr_array_6[18],

"K/S",

str_k_s_array_6[18]

],

[

"",

"",

"TC019",

str_tm_array_6[19],

"Rm",

str_rm_array_6[19],

"Rs",

str_rs_array_6[19],

"R",

str_mr_array_6[19],

"K/S",

str_k_s_array_6[19]

],

[

"",

"",

"TC020",

str_tm_array_6[20],

"Rm",

str_rm_array_6[20],

"Rs",

str_rs_array_6[20],

"R",

str_mr_array_6[20],

"K/S",

str_k_s_array_6[20]

],

[

"",

"",

"TC021",

str_tm_array_6[21],

"Rm",

str_rm_array_6[21],

"Rs",

str_rs_array_6[21],

"R",

str_mr_array_6[21],

"K/S",

str_k_s_array_6[21]

],

[

"",

"",

"TC022",

str_tm_array_6[22],

"Rm",

removeCR(str_rm_array_6[22]),

"Rs",

removeCR(str_rs_array_6[22]),

"R",

removeCR(str_mr_array_6[22]),

"K/S",

str_k_s_array_6[22]

],

[

"",

"",

"TC023",

str_tm_array_6[23],

"Rm",

str_rm_array_6[23],

"Rs",

str_rs_array_6[23],

"R",

str_mr_array_6[23],

"K/S",

removeCRTC23(str_k_s_array_6[23]),

],

[

"",

"",

"TC024",

str_tm_array_6[24],

"Rm",

str_rm_array_6[24],

"Rs",

str_rs_array_6[24],

"R",

str_mr_array_6[24],

"K/S",

str_k_s_array_6[24]

],

[

"",

"",

"TC025",

str_tm_array_6[25],

"Rm",

str_rm_array_6[25],

"Rs",

str_rs_array_6[25],

"R",

str_mr_array_6[25],

"K/S",

str_k_s_array_6[25]

],

[

"",

"",

"TC026",

str_tm_array_6[26],

"Rm",

str_rm_array_6[26],

"Rs",

str_rs_array_6[26],

"R",

str_mr_array_6[26],

"K/S",

str_k_s_array_6[26]

],

[

"",

"",

"TC027",

str_tm_array_6[27],

"Rm",

str_rm_array_6[27],

"Rs",

str_rs_array_6[27],

"R",

str_mr_array_6[27],

"K/S",

str_k_s_array_6[27]

],

[

"",

"",

"TC028",

str_tm_array_6[28],

"Rm",

str_rm_array_6[28],

"Rs",

str_rs_array_6[28],

"R",

str_mr_array_6[28],

"K/S",

str_k_s_array_6[28]

],

[

"",

"",

"TC029",

str_tm_array_6[29],

"Rm",

str_rm_array_6[29],

"Rs",

str_rs_array_6[29],

"R",

str_mr_array_6[29],

"K/S",

str_k_s_array_6[29]

],

[

"",

"",

"TC030",

singleremoveapce30(str_tm_array_6[30]),

"Rm",

singleremoveapce30(str_rm_array_6[30]),

"Rs",

singleremoveapce30(str_rs_array_6[30]),

"R",

singleremoveapce30(str_mr_array_6[30]),

"K/S",

singleremoveapce30(str_k_s_array_6[30]),

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"dK/S",

ch6_dksvalue,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"C0",

ch6_C0value,

],

[

"",

"",

"",

"",

"Temp",

ch6_tempvalue+"゜C",

"Hmdty",

ch6_humidityvalue+"%",

"Ke",

ch6_kevalue,

"C1",

ch6_C1value,

],

[

"",

"",

"",

"",

"",

"",

"Adev",

ch6_dev_a_value,

"Bdev",

ch6_dev_b_value,

"C2",

ch6_C2value,

],

[

"",

"",

"",

"",

"",

"",

"Adegr",

ch6_deg_a_value,

"Bdegr",

ch6_deg_b_value,

"C3",

ch6_C3value,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"LotCh",

ch6_lot_ch_value,

"C4",

ch6_C4value,

],

[

"",

"",

"",

"",

"",

"[CARD]",

"Acal",

ch6_cal_a_value,

"Bcal",

ch6_cal_b_value,

"C5",

ch6_C5value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Ktemp",

ch6_ktemp_value,

"C6",

ch6_C6value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Kunit",

ch6_kunit_value,

"C7",

ch6_C7value,

],[

"",

"",

"",

"",

"",

"",

"Acorr",

ch6_corr_a_value,

"Bcorr",

ch6_corr_b_value,

"C8",

ch6_C8value,

] ,

[

"[MULTI]",

"CH",

"7",

multi_ch1_novalue,

multi_ch1_namevalue

],

[

"",

"",

"USED",

multi_str_tm_array_1[0],

"Rm",

multi_str_rm_array_1[0],

"Rs",

multi_str_rs_array_1[0],

"R",

multi_str_mr_array_1[0],

"K/S",

multi_str_k_s_array_1[0]

],

[

"",

"",

"TC01",

multi_str_tm_array_1[1],

"Rm",

multi_str_rm_array_1[1],

"Rs",

multi_str_rs_array_1[1],

"R",

multi_str_mr_array_1[1],

"K/S",

multi_str_k_s_array_1[1]

],

[

"",

"",

"TC02",

multi_str_tm_array_1[2],

"Rm",

multi_str_rm_array_1[2],

"Rs",

multi_str_rs_array_1[2],

"R",

multi_str_mr_array_1[2],

"K/S",

multi_str_k_s_array_1[2]

],

[

"",

"",

"TC03",

multi_str_tm_array_1[3],

"Rm",

multi_str_rm_array_1[3],

"Rs",

multi_str_rs_array_1[3],

"R",

multi_str_mr_array_1[3],

"K/S",

multi_str_k_s_array_1[3]

],

[

"",

"",

"TC04",

multi_str_tm_array_1[4],

"Rm",

multi_str_rm_array_1[4],

"Rs",

multi_str_rs_array_1[4],

"R",

multi_str_mr_array_1[4],

"K/S",

multi_str_k_s_array_1[4]

],

[

"",

"",

"TC05",

multi_str_tm_array_1[5],

"Rm",

multi_str_rm_array_1[5],

"Rs",

multi_str_rs_array_1[5],

"R",

multi_str_mr_array_1[5],

"K/S",

multi_str_k_s_array_1[5]

],

[

"",

"",

"TC06",

multi_str_tm_array_1[6],

"Rm",

multi_str_rm_array_1[6],

"Rs",

multi_str_rs_array_1[6],

"R",

multi_str_mr_array_1[6],

"K/S",

multi_str_k_s_array_1[6]

],

[

"",

"",

"TC07",

multi_str_tm_array_1[7],

"Rm",

multi_str_rm_array_1[7],

"Rs",

multi_str_rs_array_1[7],

"R",

multi_str_mr_array_1[7],

"K/S",

multi_str_k_s_array_1[7]

],

[

"",

"",

"TC08",

multi_str_tm_array_1[8],

"Rm",

multi_str_rm_array_1[8],

"Rs",

multi_str_rs_array_1[8],

"R",

multi_str_mr_array_1[8],

"K/S",

multi_str_k_s_array_1[8]

],

[

"",

"",

"TC09",

multi_str_tm_array_1[9],

"Rm",

multi_str_rm_array_1[9],

"Rs",

multi_str_rs_array_1[9],

"R",

multi_str_mr_array_1[9],

"K/S",

multi_str_k_s_array_1[9]

],

[

"",

"",

"TC10",

multi_str_tm_array_1[10],

"Rm",

multi_str_rm_array_1[10],

"Rs",

multi_str_rs_array_1[10],

"R",

multi_str_mr_array_1[10],

"K/S",

multi_str_k_s_array_1[10]

],

[

"",

"",

"TC011",

multi_str_tm_array_1[11],

"Rm",

multi_str_rm_array_1[11],

"Rs",

multi_str_rs_array_1[11],

"R",

multi_str_mr_array_1[11],

"K/S",

multi_str_k_s_array_1[11]

],

[

"",

"",

"TC012",

multi_str_tm_array_1[12],

"Rm",

multi_str_rm_array_1[12],

"Rs",

multi_str_rs_array_1[12],

"R",

multi_str_mr_array_1[12],

"K/S",

multi_str_k_s_array_1[12]

],

[

"",

"",

"TC013",

multi_str_tm_array_1[13],

"Rm",

multi_str_rm_array_1[13],

"Rs",

multi_str_rs_array_1[13],

"R",

multi_str_mr_array_1[13],

"K/S",

multi_str_k_s_array_1[13]

],

[

"",

"",

"TC014",

multi_str_tm_array_1[14],

"Rm",

multi_str_rm_array_1[14],

"Rs",

multi_str_rs_array_1[14],

"R",

multi_str_mr_array_1[14],

"K/S",

multi_str_k_s_array_1[14]

],

[

"",

"",

"TC015",

multi_str_tm_array_1[15],

"Rm",

multi_str_rm_array_1[15],

"Rs",

multi_str_rs_array_1[15],

"R",

multi_str_mr_array_1[15],

"K/S",

multi_str_k_s_array_1[15]

],

[

"",

"",

"TC016",

multi_str_tm_array_1[16],

"Rm",

multi_str_rm_array_1[16],

"Rs",

multi_str_rs_array_1[16],

"R",

multi_str_mr_array_1[16],

"K/S",

multi_str_k_s_array_1[16]

],

[

"",

"",

"TC017",

multi_str_tm_array_1[17],

"Rm",

multi_str_rm_array_1[17],

"Rs",

multi_str_rs_array_1[17],

"R",

multi_str_mr_array_1[17],

"K/S",

multi_str_k_s_array_1[17]

],

[

"",

"",

"TC018",

multi_str_tm_array_1[18],

"Rm",

multi_str_rm_array_1[18],

"Rs",

multi_str_rs_array_1[18],

"R",

multi_str_mr_array_1[18],

"K/S",

multi_str_k_s_array_1[18]

],

[

"",

"",

"TC019",

multi_str_tm_array_1[19],

"Rm",

multi_str_rm_array_1[19],

"Rs",

multi_str_rs_array_1[19],

"R",

multi_str_mr_array_1[19],

"K/S",

multi_str_k_s_array_1[19]

],

[

"",

"",

"TC020",

multi_str_tm_array_1[20],

"Rm",

multi_str_rm_array_1[20],

"Rs",

multi_str_rs_array_1[20],

"R",

multi_str_mr_array_1[20],

"K/S",

multi_str_k_s_array_1[20]

],

[

"",

"",

"TC021",

multi_str_tm_array_1[21],

"Rm",

multi_str_rm_array_1[21],

"Rs",

multi_str_rs_array_1[21],

"R",

multi_str_mr_array_1[21],

"K/S",

multi_str_k_s_array_1[21]

],

[

"",

"",

"TC022",

multi_str_tm_array_1[22],

"Rm",

removeCR(multi_str_rm_array_1[22]),

"Rs",

removeCR(multi_str_rs_array_1[22]),

"R",

removeCR(multi_str_mr_array_1[22]),

"K/S",

multi_str_k_s_array_1[22]

],

[

"",

"",

"TC023",

multi_str_tm_array_1[23],

"Rm",

multi_str_rm_array_1[23],

"Rs",

multi_str_rs_array_1[23],

"R",

multi_str_mr_array_1[23],

"K/S",

removeCRTC23(multi_str_k_s_array_1[23]),

],

[

"",

"",

"TC024",

multi_str_tm_array_1[24],

"Rm",

multi_str_rm_array_1[24],

"Rs",

multi_str_rs_array_1[24],

"R",

multi_str_mr_array_1[24],

"K/S",

multi_str_k_s_array_1[24]

],

[

"",

"",

"TC025",

multi_str_tm_array_1[25],

"Rm",

multi_str_rm_array_1[25],

"Rs",

multi_str_rs_array_1[25],

"R",

multi_str_mr_array_1[25],

"K/S",

multi_str_k_s_array_1[25]

],

[

"",

"",

"TC026",

multi_str_tm_array_1[26],

"Rm",

multi_str_rm_array_1[26],

"Rs",

multi_str_rs_array_1[26],

"R",

multi_str_mr_array_1[26],

"K/S",

multi_str_k_s_array_1[26]

],

[

"",

"",

"TC027",

multi_str_tm_array_1[27],

"Rm",

multi_str_rm_array_1[27],

"Rs",

multi_str_rs_array_1[27],

"R",

multi_str_mr_array_1[27],

"K/S",

multi_str_k_s_array_1[27]

],

[

"",

"",

"TC028",

multi_str_tm_array_1[28],

"Rm",

multi_str_rm_array_1[28],

"Rs",

multi_str_rs_array_1[28],

"R",

multi_str_mr_array_1[28],

"K/S",

multi_str_k_s_array_1[28]

],

[

"",

"",

"TC029",

multi_str_tm_array_1[29],

"Rm",

multi_str_rm_array_1[29],

"Rs",

multi_str_rs_array_1[29],

"R",

multi_str_mr_array_1[29],

"K/S",

multi_str_k_s_array_1[29]

],

[

"",

"",

"TC030",

removeCR30(multi_str_tm_array_1[30]),

"Rm",

removeCR30(multi_str_rm_array_1[30]),

"Rs",

removeCR30(multi_str_rs_array_1[30]),

"R",

removeCR30(multi_str_mr_array_1[30]),

"K/S",

removeCR30(multi_str_k_s_array_1[30]),

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"dK/S",

multi_ch1_dksvalue,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"C0",

multi_ch1_C0value,

],

[

"",

"",

"",

"",

"Temp",

multi_ch1_tempvalue+"゜C",

"Hmdty",

multi_ch1_humidityvalue+"%",

"Ke",

multi_ch1_kevalue,

"C1",

multi_ch1_C1value,

],

[

"",

"",

"",

"",

"",

"",

"Adev",

multi_ch1_dev_a_value,

"Bdev",

multi_ch1_dev_b_value,

"C2",

multi_ch1_C2value,

],

[

"",

"",

"",

"",

"",

"",

"Adegr",

multi_ch1_deg_a_value,

"Bdegr",

multi_ch1_deg_b_value,

"C3",

multi_ch1_C3value,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"LotCh",

multi_ch1_lot_ch_value,

"C4",

multi_ch1_C4value,

],

[

"",

"",

"",

"",

"",

"[----]",

"Acal",

multi_ch1_cal_a_value,

"Bcal",

multi_ch1_cal_b_value,

"C5",

multi_ch1_C5value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Ktemp",

multi_ch1_ktemp_value,

"C6",

multi_ch1_C6value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Kunit",

multi_ch1_kunit_value,

"C7",

multi_ch1_C7value,

],[

"",

"",

"",

"",

"",

"",

"Acorr",

multi_ch1_corr_a_value,

"Bcorr",

multi_ch1_corr_b_value,

"C8",

multi_ch1_C8value,

]              ,[

"[MULTI]",

"CH",

"8",

multi_ch2_novalue,

multi_ch2_namevalue

],

[

"",

"",

"USED",

multi_str_tm_array_2[0],

"Rm",

multi_str_rm_array_2[0],

"Rs",

multi_str_rs_array_2[0],

"R",

multi_str_mr_array_2[0],

"K/S",

multi_str_k_s_array_2[0]

],

[

"",

"",

"TC01",

multi_str_tm_array_2[1],

"Rm",

multi_str_rm_array_2[1],

"Rs",

multi_str_rs_array_2[1],

"R",

multi_str_mr_array_2[1],

"K/S",

multi_str_k_s_array_2[1]

],

[

"",

"",

"TC02",

multi_str_tm_array_2[2],

"Rm",

multi_str_rm_array_2[2],

"Rs",

multi_str_rs_array_2[2],

"R",

multi_str_mr_array_2[2],

"K/S",

multi_str_k_s_array_2[2]

],

[

"",

"",

"TC03",

multi_str_tm_array_2[3],

"Rm",

multi_str_rm_array_2[3],

"Rs",

multi_str_rs_array_2[3],

"R",

multi_str_mr_array_2[3],

"K/S",

multi_str_k_s_array_2[3]

],

[

"",

"",

"TC04",

multi_str_tm_array_2[4],

"Rm",

multi_str_rm_array_2[4],

"Rs",

multi_str_rs_array_2[4],

"R",

multi_str_mr_array_2[4],

"K/S",

multi_str_k_s_array_2[4]

],

[

"",

"",

"TC05",

multi_str_tm_array_2[5],

"Rm",

multi_str_rm_array_2[5],

"Rs",

multi_str_rs_array_2[5],

"R",

multi_str_mr_array_2[5],

"K/S",

multi_str_k_s_array_2[5]

],

[

"",

"",

"TC06",

multi_str_tm_array_2[6],

"Rm",

multi_str_rm_array_2[6],

"Rs",

multi_str_rs_array_2[6],

"R",

multi_str_mr_array_2[6],

"K/S",

multi_str_k_s_array_2[6]

],

[

"",

"",

"TC07",

multi_str_tm_array_2[7],

"Rm",

multi_str_rm_array_2[7],

"Rs",

multi_str_rs_array_2[7],

"R",

multi_str_mr_array_2[7],

"K/S",

multi_str_k_s_array_2[7]

],

[

"",

"",

"TC08",

multi_str_tm_array_2[8],

"Rm",

multi_str_rm_array_2[8],

"Rs",

multi_str_rs_array_2[8],

"R",

multi_str_mr_array_2[8],

"K/S",

multi_str_k_s_array_2[8]

],

[

"",

"",

"TC09",

multi_str_tm_array_2[9],

"Rm",

multi_str_rm_array_2[9],

"Rs",

multi_str_rs_array_2[9],

"R",

multi_str_mr_array_2[9],

"K/S",

multi_str_k_s_array_2[9]

],

[

"",

"",

"TC10",

multi_str_tm_array_2[10],

"Rm",

multi_str_rm_array_2[10],

"Rs",

multi_str_rs_array_2[10],

"R",

multi_str_mr_array_2[10],

"K/S",

multi_str_k_s_array_2[10]

],

[

"",

"",

"TC011",

multi_str_tm_array_2[11],

"Rm",

multi_str_rm_array_2[11],

"Rs",

multi_str_rs_array_2[11],

"R",

multi_str_mr_array_2[11],

"K/S",

multi_str_k_s_array_2[11]

],

[

"",

"",

"TC012",

multi_str_tm_array_2[12],

"Rm",

multi_str_rm_array_2[12],

"Rs",

multi_str_rs_array_2[12],

"R",

multi_str_mr_array_2[12],

"K/S",

multi_str_k_s_array_2[12]

],

[

"",

"",

"TC013",

multi_str_tm_array_2[13],

"Rm",

multi_str_rm_array_2[13],

"Rs",

multi_str_rs_array_2[13],

"R",

multi_str_mr_array_2[13],

"K/S",

multi_str_k_s_array_2[13]

],

[

"",

"",

"TC014",

multi_str_tm_array_2[14],

"Rm",

multi_str_rm_array_2[14],

"Rs",

multi_str_rs_array_2[14],

"R",

multi_str_mr_array_2[14],

"K/S",

multi_str_k_s_array_2[14]

],

[

"",

"",

"TC015",

multi_str_tm_array_2[15],

"Rm",

multi_str_rm_array_2[15],

"Rs",

multi_str_rs_array_2[15],

"R",

multi_str_mr_array_2[15],

"K/S",

multi_str_k_s_array_2[15]

],

[

"",

"",

"TC016",

multi_str_tm_array_2[16],

"Rm",

multi_str_rm_array_2[16],

"Rs",

multi_str_rs_array_2[16],

"R",

multi_str_mr_array_2[16],

"K/S",

multi_str_k_s_array_2[16]

],

[

"",

"",

"TC017",

multi_str_tm_array_2[17],

"Rm",

multi_str_rm_array_2[17],

"Rs",

multi_str_rs_array_2[17],

"R",

multi_str_mr_array_2[17],

"K/S",

multi_str_k_s_array_2[17]

],

[

"",

"",

"TC018",

multi_str_tm_array_2[18],

"Rm",

multi_str_rm_array_2[18],

"Rs",

multi_str_rs_array_2[18],

"R",

multi_str_mr_array_2[18],

"K/S",

multi_str_k_s_array_2[18]

],

[

"",

"",

"TC019",

multi_str_tm_array_2[19],

"Rm",

multi_str_rm_array_2[19],

"Rs",

multi_str_rs_array_2[19],

"R",

multi_str_mr_array_2[19],

"K/S",

multi_str_k_s_array_2[19]

],

[

"",

"",

"TC020",

multi_str_tm_array_2[20],

"Rm",

multi_str_rm_array_2[20],

"Rs",

multi_str_rs_array_2[20],

"R",

multi_str_mr_array_2[20],

"K/S",

multi_str_k_s_array_2[20]

],

[

"",

"",

"TC021",

multi_str_tm_array_2[21],

"Rm",

multi_str_rm_array_2[21],

"Rs",

multi_str_rs_array_2[21],

"R",

multi_str_mr_array_2[21],

"K/S",

multi_str_k_s_array_2[21]

],

[

"",

"",

"TC022",

multi_str_tm_array_2[22],

"Rm",

removeCR(multi_str_rm_array_2[22]),

"Rs",

removeCR(multi_str_rs_array_2[22]),

"R",

removeCR(multi_str_mr_array_2[22]),

"K/S",

multi_str_k_s_array_2[22]

],

[

"",

"",

"TC023",

multi_str_tm_array_2[23],

"Rm",

multi_str_rm_array_2[23],

"Rs",

multi_str_rs_array_2[23],

"R",

multi_str_mr_array_2[23],

"K/S",

removeCRTC23(multi_str_k_s_array_2[23]),

],

[

"",

"",

"TC024",

multi_str_tm_array_2[24],

"Rm",

multi_str_rm_array_2[24],

"Rs",

multi_str_rs_array_2[24],

"R",

multi_str_mr_array_2[24],

"K/S",

multi_str_k_s_array_2[24]

],

[

"",

"",

"TC025",

multi_str_tm_array_2[25],

"Rm",

multi_str_rm_array_2[25],

"Rs",

multi_str_rs_array_2[25],

"R",

multi_str_mr_array_2[25],

"K/S",

multi_str_k_s_array_2[25]

],

[

"",

"",

"TC026",

multi_str_tm_array_2[26],

"Rm",

multi_str_rm_array_2[26],

"Rs",

multi_str_rs_array_2[26],

"R",

multi_str_mr_array_2[26],

"K/S",

multi_str_k_s_array_2[26]

],

[

"",

"",

"TC027",

multi_str_tm_array_2[27],

"Rm",

multi_str_rm_array_2[27],

"Rs",

multi_str_rs_array_2[27],

"R",

multi_str_mr_array_2[27],

"K/S",

multi_str_k_s_array_2[27]

],

[

"",

"",

"TC028",

multi_str_tm_array_2[28],

"Rm",

multi_str_rm_array_2[28],

"Rs",

multi_str_rs_array_2[28],

"R",

multi_str_mr_array_2[28],

"K/S",

multi_str_k_s_array_2[28]

],

[

"",

"",

"TC029",

multi_str_tm_array_2[29],

"Rm",

multi_str_rm_array_2[29],

"Rs",

multi_str_rs_array_2[29],

"R",

multi_str_mr_array_2[29],

"K/S",

multi_str_k_s_array_2[29]

],

[

"",

"",

"TC030",

removeCR30(multi_str_tm_array_2[30]),

"Rm",

removeCR30(multi_str_rm_array_2[30]),

"Rs",

removeCR30(multi_str_rs_array_2[30]),

"R",

removeCR30(multi_str_mr_array_2[30]),

"K/S",

removeCR30(multi_str_k_s_array_2[30]),

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"dK/S",

multi_ch2_dksvalue,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"C0",

multi_ch2_C0value,

],

[

"",

"",

"",

"",

"Temp",

multi_ch2_tempvalue+"゜C",

"Hmdty",

multi_ch2_humidityvalue+"%",

"Ke",

multi_ch2_kevalue,

"C1",

multi_ch2_C1value,

],

[

"",

"",

"",

"",

"",

"",

"Adev",

multi_ch2_dev_a_value,

"Bdev",

multi_ch2_dev_b_value,

"C2",

multi_ch2_C2value,

],

[

"",

"",

"",

"",

"",

"",

"Adegr",

multi_ch2_deg_a_value,

"Bdegr",

multi_ch2_deg_b_value,

"C3",

multi_ch2_C3value,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"LotCh",

multi_ch2_lot_ch_value,

"C4",

multi_ch2_C4value,

],

[

"",

"",

"",

"",

"",

"[----]",

"Acal",

multi_ch2_cal_a_value,

"Bcal",

multi_ch2_cal_b_value,

"C5",

multi_ch2_C5value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Ktemp",

multi_ch2_ktemp_value,

"C6",

multi_ch2_C6value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Kunit",

multi_ch2_kunit_value,

"C7",

multi_ch2_C7value,

],[

"",

"",

"",

"",

"",

"",

"Acorr",

multi_ch2_corr_a_value,

"Bcorr",

multi_ch2_corr_b_value,

"C8",

multi_ch2_C8value,

]              ,[

"[MULTI]",

"CH",

"9",

multi_ch3_novalue,

multi_ch3_namevalue

],

[

"",

"",

"USED",

multi_str_tm_array_3[0],

"Rm",

multi_str_rm_array_3[0],

"Rs",

multi_str_rs_array_3[0],

"R",

multi_str_mr_array_3[0],

"K/S",

multi_str_k_s_array_3[0]

],

[

"",

"",

"TC01",

multi_str_tm_array_3[1],

"Rm",

multi_str_rm_array_3[1],

"Rs",

multi_str_rs_array_3[1],

"R",

multi_str_mr_array_3[1],

"K/S",

multi_str_k_s_array_3[1]

],

[

"",

"",

"TC02",

multi_str_tm_array_3[2],

"Rm",

multi_str_rm_array_3[2],

"Rs",

multi_str_rs_array_3[2],

"R",

multi_str_mr_array_3[2],

"K/S",

multi_str_k_s_array_3[2]

],

[

"",

"",

"TC03",

multi_str_tm_array_3[3],

"Rm",

multi_str_rm_array_3[3],

"Rs",

multi_str_rs_array_3[3],

"R",

multi_str_mr_array_3[3],

"K/S",

multi_str_k_s_array_3[3]

],

[

"",

"",

"TC04",

multi_str_tm_array_3[4],

"Rm",

multi_str_rm_array_3[4],

"Rs",

multi_str_rs_array_3[4],

"R",

multi_str_mr_array_3[4],

"K/S",

multi_str_k_s_array_3[4]

],

[

"",

"",

"TC05",

multi_str_tm_array_3[5],

"Rm",

multi_str_rm_array_3[5],

"Rs",

multi_str_rs_array_3[5],

"R",

multi_str_mr_array_3[5],

"K/S",

multi_str_k_s_array_3[5]

],

[

"",

"",

"TC06",

multi_str_tm_array_3[6],

"Rm",

multi_str_rm_array_3[6],

"Rs",

multi_str_rs_array_3[6],

"R",

multi_str_mr_array_3[6],

"K/S",

multi_str_k_s_array_3[6]

],

[

"",

"",

"TC07",

multi_str_tm_array_3[7],

"Rm",

multi_str_rm_array_3[7],

"Rs",

multi_str_rs_array_3[7],

"R",

multi_str_mr_array_3[7],

"K/S",

multi_str_k_s_array_3[7]

],

[

"",

"",

"TC08",

multi_str_tm_array_3[8],

"Rm",

multi_str_rm_array_3[8],

"Rs",

multi_str_rs_array_3[8],

"R",

multi_str_mr_array_3[8],

"K/S",

multi_str_k_s_array_3[8]

],

[

"",

"",

"TC09",

multi_str_tm_array_3[9],

"Rm",

multi_str_rm_array_3[9],

"Rs",

multi_str_rs_array_3[9],

"R",

multi_str_mr_array_3[9],

"K/S",

multi_str_k_s_array_3[9]

],

[

"",

"",

"TC10",

multi_str_tm_array_3[10],

"Rm",

multi_str_rm_array_3[10],

"Rs",

multi_str_rs_array_3[10],

"R",

multi_str_mr_array_3[10],

"K/S",

multi_str_k_s_array_3[10]

],

[

"",

"",

"TC011",

multi_str_tm_array_3[11],

"Rm",

multi_str_rm_array_3[11],

"Rs",

multi_str_rs_array_3[11],

"R",

multi_str_mr_array_3[11],

"K/S",

multi_str_k_s_array_3[11]

],

[

"",

"",

"TC012",

multi_str_tm_array_3[12],

"Rm",

multi_str_rm_array_3[12],

"Rs",

multi_str_rs_array_3[12],

"R",

multi_str_mr_array_3[12],

"K/S",

multi_str_k_s_array_3[12]

],

[

"",

"",

"TC013",

multi_str_tm_array_3[13],

"Rm",

multi_str_rm_array_3[13],

"Rs",

multi_str_rs_array_3[13],

"R",

multi_str_mr_array_3[13],

"K/S",

multi_str_k_s_array_3[13]

],

[

"",

"",

"TC014",

multi_str_tm_array_3[14],

"Rm",

multi_str_rm_array_3[14],

"Rs",

multi_str_rs_array_3[14],

"R",

multi_str_mr_array_3[14],

"K/S",

multi_str_k_s_array_3[14]

],

[

"",

"",

"TC015",

multi_str_tm_array_3[15],

"Rm",

multi_str_rm_array_3[15],

"Rs",

multi_str_rs_array_3[15],

"R",

multi_str_mr_array_3[15],

"K/S",

multi_str_k_s_array_3[15]

],

[

"",

"",

"TC016",

multi_str_tm_array_3[16],

"Rm",

multi_str_rm_array_3[16],

"Rs",

multi_str_rs_array_3[16],

"R",

multi_str_mr_array_3[16],

"K/S",

multi_str_k_s_array_3[16]

],

[

"",

"",

"TC017",

multi_str_tm_array_3[17],

"Rm",

multi_str_rm_array_3[17],

"Rs",

multi_str_rs_array_3[17],

"R",

multi_str_mr_array_3[17],

"K/S",

multi_str_k_s_array_3[17]

],

[

"",

"",

"TC018",

multi_str_tm_array_3[18],

"Rm",

multi_str_rm_array_3[18],

"Rs",

multi_str_rs_array_3[18],

"R",

multi_str_mr_array_3[18],

"K/S",

multi_str_k_s_array_3[18]

],

[

"",

"",

"TC019",

multi_str_tm_array_3[19],

"Rm",

multi_str_rm_array_3[19],

"Rs",

multi_str_rs_array_3[19],

"R",

multi_str_mr_array_3[19],

"K/S",

multi_str_k_s_array_3[19]

],

[

"",

"",

"TC020",

multi_str_tm_array_3[20],

"Rm",

multi_str_rm_array_3[20],

"Rs",

multi_str_rs_array_3[20],

"R",

multi_str_mr_array_3[20],

"K/S",

multi_str_k_s_array_3[20]

],

[

"",

"",

"TC021",

multi_str_tm_array_3[21],

"Rm",

multi_str_rm_array_3[21],

"Rs",

multi_str_rs_array_3[21],

"R",

multi_str_mr_array_3[21],

"K/S",

multi_str_k_s_array_3[21]

],

[

"",

"",

"TC022",

multi_str_tm_array_3[22],

"Rm",

removeCR(multi_str_rm_array_3[22]),

"Rs",

removeCR(multi_str_rs_array_3[22]),

"R",

removeCR(multi_str_mr_array_3[22]),

"K/S",

multi_str_k_s_array_3[22]

],

[

"",

"",

"TC023",

multi_str_tm_array_3[23],

"Rm",

multi_str_rm_array_3[23],

"Rs",

multi_str_rs_array_3[23],

"R",

multi_str_mr_array_3[23],

"K/S",

removeCRTC23(multi_str_k_s_array_3[23]),

],

[

"",

"",

"TC024",

multi_str_tm_array_3[24],

"Rm",

multi_str_rm_array_3[24],

"Rs",

multi_str_rs_array_3[24],

"R",

multi_str_mr_array_3[24],

"K/S",

multi_str_k_s_array_3[24]

],

[

"",

"",

"TC025",

multi_str_tm_array_3[25],

"Rm",

multi_str_rm_array_3[25],

"Rs",

multi_str_rs_array_3[25],

"R",

multi_str_mr_array_3[25],

"K/S",

multi_str_k_s_array_3[25]

],

[

"",

"",

"TC026",

multi_str_tm_array_3[26],

"Rm",

multi_str_rm_array_3[26],

"Rs",

multi_str_rs_array_3[26],

"R",

multi_str_mr_array_3[26],

"K/S",

multi_str_k_s_array_3[26]

],

[

"",

"",

"TC027",

multi_str_tm_array_3[27],

"Rm",

multi_str_rm_array_3[27],

"Rs",

multi_str_rs_array_3[27],

"R",

multi_str_mr_array_3[27],

"K/S",

multi_str_k_s_array_3[27]

],

[

"",

"",

"TC028",

multi_str_tm_array_3[28],

"Rm",

multi_str_rm_array_3[28],

"Rs",

multi_str_rs_array_3[28],

"R",

multi_str_mr_array_3[28],

"K/S",

multi_str_k_s_array_3[28]

],

[

"",

"",

"TC029",

multi_str_tm_array_3[29],

"Rm",

multi_str_rm_array_3[29],

"Rs",

multi_str_rs_array_3[29],

"R",

multi_str_mr_array_3[29],

"K/S",

multi_str_k_s_array_3[29]

],

[

"",

"",

"TC030",

removeCR30(multi_str_tm_array_3[30]),

"Rm",

removeCR30(multi_str_rm_array_3[30]),

"Rs",

removeCR30(multi_str_rs_array_3[30]),

"R",

removeCR30(multi_str_mr_array_3[30]),

"K/S",

removeCR30(multi_str_k_s_array_3[30]),

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"dK/S",

multi_ch3_dksvalue,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"C0",

multi_ch3_C0value,

],

[

"",

"",

"",

"",

"Temp",

multi_ch3_tempvalue+"゜C",

"Hmdty",

multi_ch3_humidityvalue+"%",

"Ke",

multi_ch3_kevalue,

"C1",

multi_ch3_C1value,

],

[

"",

"",

"",

"",

"",

"",

"Adev",

multi_ch3_dev_a_value,

"Bdev",

multi_ch3_dev_b_value,

"C2",

multi_ch3_C2value,

],

[

"",

"",

"",

"",

"",

"",

"Adegr",

multi_ch3_deg_a_value,

"Bdegr",

multi_ch3_deg_b_value,

"C3",

multi_ch3_C3value,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"LotCh",

multi_ch3_lot_ch_value,

"C4",

multi_ch3_C4value,

],

[

"",

"",

"",

"",

"",

"[----]",

"Acal",

multi_ch3_cal_a_value,

"Bcal",

multi_ch3_cal_b_value,

"C5",

multi_ch3_C5value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Ktemp",

multi_ch3_ktemp_value,

"C6",

multi_ch3_C6value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Kunit",

multi_ch3_kunit_value,

"C7",

multi_ch3_C7value,

],[

"",

"",

"",

"",

"",

"",

"Acorr",

multi_ch3_corr_a_value,

"Bcorr",

multi_ch3_corr_b_value,

"C8",

multi_ch3_C8value,

],[

"[MULTI]",

"CH",

"10",

multi_ch4_novalue,

multi_ch4_namevalue

],

[

"",

"",

"USED",

multi_str_tm_array_4[0],

"Rm",

multi_str_rm_array_4[0],

"Rs",

multi_str_rs_array_4[0],

"R",

multi_str_mr_array_4[0],

"K/S",

multi_str_k_s_array_4[0]

],

[

"",

"",

"TC01",

multi_str_tm_array_4[1],

"Rm",

multi_str_rm_array_4[1],

"Rs",

multi_str_rs_array_4[1],

"R",

multi_str_mr_array_4[1],

"K/S",

multi_str_k_s_array_4[1]

],

[

"",

"",

"TC02",

multi_str_tm_array_4[2],

"Rm",

multi_str_rm_array_4[2],

"Rs",

multi_str_rs_array_4[2],

"R",

multi_str_mr_array_4[2],

"K/S",

multi_str_k_s_array_4[2]

],

[

"",

"",

"TC03",

multi_str_tm_array_4[3],

"Rm",

multi_str_rm_array_4[3],

"Rs",

multi_str_rs_array_4[3],

"R",

multi_str_mr_array_4[3],

"K/S",

multi_str_k_s_array_4[3]

],

[

"",

"",

"TC04",

multi_str_tm_array_4[4],

"Rm",

multi_str_rm_array_4[4],

"Rs",

multi_str_rs_array_4[4],

"R",

multi_str_mr_array_4[4],

"K/S",

multi_str_k_s_array_4[4]

],

[

"",

"",

"TC05",

multi_str_tm_array_4[5],

"Rm",

multi_str_rm_array_4[5],

"Rs",

multi_str_rs_array_4[5],

"R",

multi_str_mr_array_4[5],

"K/S",

multi_str_k_s_array_4[5]

],

[

"",

"",

"TC06",

multi_str_tm_array_4[6],

"Rm",

multi_str_rm_array_4[6],

"Rs",

multi_str_rs_array_4[6],

"R",

multi_str_mr_array_4[6],

"K/S",

multi_str_k_s_array_4[6]

],

[

"",

"",

"TC07",

multi_str_tm_array_4[7],

"Rm",

multi_str_rm_array_4[7],

"Rs",

multi_str_rs_array_4[7],

"R",

multi_str_mr_array_4[7],

"K/S",

multi_str_k_s_array_4[7]

],

[

"",

"",

"TC08",

multi_str_tm_array_4[8],

"Rm",

multi_str_rm_array_4[8],

"Rs",

multi_str_rs_array_4[8],

"R",

multi_str_mr_array_4[8],

"K/S",

multi_str_k_s_array_4[8]

],

[

"",

"",

"TC09",

multi_str_tm_array_4[9],

"Rm",

multi_str_rm_array_4[9],

"Rs",

multi_str_rs_array_4[9],

"R",

multi_str_mr_array_4[9],

"K/S",

multi_str_k_s_array_4[9]

],

[

"",

"",

"TC10",

multi_str_tm_array_4[10],

"Rm",

multi_str_rm_array_4[10],

"Rs",

multi_str_rs_array_4[10],

"R",

multi_str_mr_array_4[10],

"K/S",

multi_str_k_s_array_4[10]

],

[

"",

"",

"TC011",

multi_str_tm_array_4[11],

"Rm",

multi_str_rm_array_4[11],

"Rs",

multi_str_rs_array_4[11],

"R",

multi_str_mr_array_4[11],

"K/S",

multi_str_k_s_array_4[11]

],

[

"",

"",

"TC012",

multi_str_tm_array_4[12],

"Rm",

multi_str_rm_array_4[12],

"Rs",

multi_str_rs_array_4[12],

"R",

multi_str_mr_array_4[12],

"K/S",

multi_str_k_s_array_4[12]

],

[

"",

"",

"TC013",

multi_str_tm_array_4[13],

"Rm",

multi_str_rm_array_4[13],

"Rs",

multi_str_rs_array_4[13],

"R",

multi_str_mr_array_4[13],

"K/S",

multi_str_k_s_array_4[13]

],

[

"",

"",

"TC014",

multi_str_tm_array_4[14],

"Rm",

multi_str_rm_array_4[14],

"Rs",

multi_str_rs_array_4[14],

"R",

multi_str_mr_array_4[14],

"K/S",

multi_str_k_s_array_4[14]

],

[

"",

"",

"TC015",

multi_str_tm_array_4[15],

"Rm",

multi_str_rm_array_4[15],

"Rs",

multi_str_rs_array_4[15],

"R",

multi_str_mr_array_4[15],

"K/S",

multi_str_k_s_array_4[15]

],

[

"",

"",

"TC016",

multi_str_tm_array_4[16],

"Rm",

multi_str_rm_array_4[16],

"Rs",

multi_str_rs_array_4[16],

"R",

multi_str_mr_array_4[16],

"K/S",

multi_str_k_s_array_4[16]

],

[

"",

"",

"TC017",

multi_str_tm_array_4[17],

"Rm",

multi_str_rm_array_4[17],

"Rs",

multi_str_rs_array_4[17],

"R",

multi_str_mr_array_4[17],

"K/S",

multi_str_k_s_array_4[17]

],

[

"",

"",

"TC018",

multi_str_tm_array_4[18],

"Rm",

multi_str_rm_array_4[18],

"Rs",

multi_str_rs_array_4[18],

"R",

multi_str_mr_array_4[18],

"K/S",

multi_str_k_s_array_4[18]

],

[

"",

"",

"TC019",

multi_str_tm_array_4[19],

"Rm",

multi_str_rm_array_4[19],

"Rs",

multi_str_rs_array_4[19],

"R",

multi_str_mr_array_4[19],

"K/S",

multi_str_k_s_array_4[19]

],

[

"",

"",

"TC020",

multi_str_tm_array_4[20],

"Rm",

multi_str_rm_array_4[20],

"Rs",

multi_str_rs_array_4[20],

"R",

multi_str_mr_array_4[20],

"K/S",

multi_str_k_s_array_4[20]

],

[

"",

"",

"TC021",

multi_str_tm_array_4[21],

"Rm",

multi_str_rm_array_4[21],

"Rs",

multi_str_rs_array_4[21],

"R",

multi_str_mr_array_4[21],

"K/S",

multi_str_k_s_array_4[21]

],

[

"",

"",

"TC022",

multi_str_tm_array_4[22],

"Rm",

removeCR(multi_str_rm_array_4[22]),

"Rs",

removeCR(multi_str_rs_array_4[22]),

"R",

removeCR(multi_str_mr_array_4[22]),

"K/S",

multi_str_k_s_array_4[22]

],

[

"",

"",

"TC023",

multi_str_tm_array_4[23],

"Rm",

multi_str_rm_array_4[23],

"Rs",

multi_str_rs_array_4[23],

"R",

multi_str_mr_array_4[23],

"K/S",

removeCRTC23(multi_str_k_s_array_4[23]),

],

[

"",

"",

"TC024",

multi_str_tm_array_4[24],

"Rm",

multi_str_rm_array_4[24],

"Rs",

multi_str_rs_array_4[24],

"R",

multi_str_mr_array_4[24],

"K/S",

multi_str_k_s_array_4[24]

],

[

"",

"",

"TC025",

multi_str_tm_array_4[25],

"Rm",

multi_str_rm_array_4[25],

"Rs",

multi_str_rs_array_4[25],

"R",

multi_str_mr_array_4[25],

"K/S",

multi_str_k_s_array_4[25]

],

[

"",

"",

"TC026",

multi_str_tm_array_4[26],

"Rm",

multi_str_rm_array_4[26],

"Rs",

multi_str_rs_array_4[26],

"R",

multi_str_mr_array_4[26],

"K/S",

multi_str_k_s_array_4[26]

],

[

"",

"",

"TC027",

multi_str_tm_array_4[27],

"Rm",

multi_str_rm_array_4[27],

"Rs",

multi_str_rs_array_4[27],

"R",

multi_str_mr_array_4[27],

"K/S",

multi_str_k_s_array_4[27]

],

[

"",

"",

"TC028",

multi_str_tm_array_4[28],

"Rm",

multi_str_rm_array_4[28],

"Rs",

multi_str_rs_array_4[28],

"R",

multi_str_mr_array_4[28],

"K/S",

multi_str_k_s_array_4[28]

],

[

"",

"",

"TC029",

multi_str_tm_array_4[29],

"Rm",

multi_str_rm_array_4[29],

"Rs",

multi_str_rs_array_4[29],

"R",

multi_str_mr_array_4[29],

"K/S",

multi_str_k_s_array_4[29]

],

[

"",

"",

"TC030",

removeCR30(multi_str_tm_array_4[30]),

"Rm",

removeCR30(multi_str_rm_array_4[30]),

"Rs",

removeCR30(multi_str_rs_array_4[30]),

"R",

removeCR30(multi_str_mr_array_4[30]),

"K/S",

removeCR30(multi_str_k_s_array_4[30]),

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"dK/S",

multi_ch4_dksvalue,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"C0",

multi_ch4_C0value,

],

[

"",

"",

"",

"",

"Temp",

multi_ch4_tempvalue+"゜C",

"Hmdty",

multi_ch4_humidityvalue+"%",

"Ke",

multi_ch4_kevalue,

"C1",

multi_ch4_C1value,

],

[

"",

"",

"",

"",

"",

"",

"Adev",

multi_ch4_dev_a_value,

"Bdev",

multi_ch4_dev_b_value,

"C2",

multi_ch4_C2value,

],

[

"",

"",

"",

"",

"",

"",

"Adegr",

multi_ch4_deg_a_value,

"Bdegr",

multi_ch4_deg_b_value,

"C3",

multi_ch4_C3value,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"LotCh",

multi_ch4_lot_ch_value,

"C4",

multi_ch4_C4value,

],

[

"",

"",

"",

"",

"",

"[----]",

"Acal",

multi_ch4_cal_a_value,

"Bcal",

multi_ch4_cal_b_value,

"C5",

multi_ch4_C5value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Ktemp",

multi_ch4_ktemp_value,

"C6",

multi_ch4_C6value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Kunit",

multi_ch4_kunit_value,

"C7",

multi_ch4_C7value,

],[

"",

"",

"",

"",

"",

"",

"Acorr",

multi_ch4_corr_a_value,

"Bcorr",

multi_ch4_corr_b_value,

"C8",

multi_ch4_C8value,

],[

"[MULTI]",

"CH",

"11",

multi_ch5_novalue,

multi_ch5_namevalue

],

[

"",

"",

"USED",

multi_str_tm_array_5[0],

"Rm",

multi_str_rm_array_5[0],

"Rs",

multi_str_rs_array_5[0],

"R",

multi_str_mr_array_5[0],

"K/S",

multi_str_k_s_array_5[0]

],

[

"",

"",

"TC01",

multi_str_tm_array_5[1],

"Rm",

multi_str_rm_array_5[1],

"Rs",

multi_str_rs_array_5[1],

"R",

multi_str_mr_array_5[1],

"K/S",

multi_str_k_s_array_5[1]

],

[

"",

"",

"TC02",

multi_str_tm_array_5[2],

"Rm",

multi_str_rm_array_5[2],

"Rs",

multi_str_rs_array_5[2],

"R",

multi_str_mr_array_5[2],

"K/S",

multi_str_k_s_array_5[2]

],

[

"",

"",

"TC03",

multi_str_tm_array_5[3],

"Rm",

multi_str_rm_array_5[3],

"Rs",

multi_str_rs_array_5[3],

"R",

multi_str_mr_array_5[3],

"K/S",

multi_str_k_s_array_5[3]

],

[

"",

"",

"TC04",

multi_str_tm_array_5[4],

"Rm",

multi_str_rm_array_5[4],

"Rs",

multi_str_rs_array_5[4],

"R",

multi_str_mr_array_5[4],

"K/S",

multi_str_k_s_array_5[4]

],

[

"",

"",

"TC05",

multi_str_tm_array_5[5],

"Rm",

multi_str_rm_array_5[5],

"Rs",

multi_str_rs_array_5[5],

"R",

multi_str_mr_array_5[5],

"K/S",

multi_str_k_s_array_5[5]

],

[

"",

"",

"TC06",

multi_str_tm_array_5[6],

"Rm",

multi_str_rm_array_5[6],

"Rs",

multi_str_rs_array_5[6],

"R",

multi_str_mr_array_5[6],

"K/S",

multi_str_k_s_array_5[6]

],

[

"",

"",

"TC07",

multi_str_tm_array_5[7],

"Rm",

multi_str_rm_array_5[7],

"Rs",

multi_str_rs_array_5[7],

"R",

multi_str_mr_array_5[7],

"K/S",

multi_str_k_s_array_5[7]

],

[

"",

"",

"TC08",

multi_str_tm_array_5[8],

"Rm",

multi_str_rm_array_5[8],

"Rs",

multi_str_rs_array_5[8],

"R",

multi_str_mr_array_5[8],

"K/S",

multi_str_k_s_array_5[8]

],

[

"",

"",

"TC09",

multi_str_tm_array_5[9],

"Rm",

multi_str_rm_array_5[9],

"Rs",

multi_str_rs_array_5[9],

"R",

multi_str_mr_array_5[9],

"K/S",

multi_str_k_s_array_5[9]

],

[

"",

"",

"TC10",

multi_str_tm_array_5[10],

"Rm",

multi_str_rm_array_5[10],

"Rs",

multi_str_rs_array_5[10],

"R",

multi_str_mr_array_5[10],

"K/S",

multi_str_k_s_array_5[10]

],

[

"",

"",

"TC011",

multi_str_tm_array_5[11],

"Rm",

multi_str_rm_array_5[11],

"Rs",

multi_str_rs_array_5[11],

"R",

multi_str_mr_array_5[11],

"K/S",

multi_str_k_s_array_5[11]

],

[

"",

"",

"TC012",

multi_str_tm_array_5[12],

"Rm",

multi_str_rm_array_5[12],

"Rs",

multi_str_rs_array_5[12],

"R",

multi_str_mr_array_5[12],

"K/S",

multi_str_k_s_array_5[12]

],

[

"",

"",

"TC013",

multi_str_tm_array_5[13],

"Rm",

multi_str_rm_array_5[13],

"Rs",

multi_str_rs_array_5[13],

"R",

multi_str_mr_array_5[13],

"K/S",

multi_str_k_s_array_5[13]

],

[

"",

"",

"TC014",

multi_str_tm_array_5[14],

"Rm",

multi_str_rm_array_5[14],

"Rs",

multi_str_rs_array_5[14],

"R",

multi_str_mr_array_5[14],

"K/S",

multi_str_k_s_array_5[14]

],

[

"",

"",

"TC015",

multi_str_tm_array_5[15],

"Rm",

multi_str_rm_array_5[15],

"Rs",

multi_str_rs_array_5[15],

"R",

multi_str_mr_array_5[15],

"K/S",

multi_str_k_s_array_5[15]

],

[

"",

"",

"TC016",

multi_str_tm_array_5[16],

"Rm",

multi_str_rm_array_5[16],

"Rs",

multi_str_rs_array_5[16],

"R",

multi_str_mr_array_5[16],

"K/S",

multi_str_k_s_array_5[16]

],

[

"",

"",

"TC017",

multi_str_tm_array_5[17],

"Rm",

multi_str_rm_array_5[17],

"Rs",

multi_str_rs_array_5[17],

"R",

multi_str_mr_array_5[17],

"K/S",

multi_str_k_s_array_5[17]

],

[

"",

"",

"TC018",

multi_str_tm_array_5[18],

"Rm",

multi_str_rm_array_5[18],

"Rs",

multi_str_rs_array_5[18],

"R",

multi_str_mr_array_5[18],

"K/S",

multi_str_k_s_array_5[18]

],

[

"",

"",

"TC019",

multi_str_tm_array_5[19],

"Rm",

multi_str_rm_array_5[19],

"Rs",

multi_str_rs_array_5[19],

"R",

multi_str_mr_array_5[19],

"K/S",

multi_str_k_s_array_5[19]

],

[

"",

"",

"TC020",

multi_str_tm_array_5[20],

"Rm",

multi_str_rm_array_5[20],

"Rs",

multi_str_rs_array_5[20],

"R",

multi_str_mr_array_5[20],

"K/S",

multi_str_k_s_array_5[20]

],

[

"",

"",

"TC021",

multi_str_tm_array_5[21],

"Rm",

multi_str_rm_array_5[21],

"Rs",

multi_str_rs_array_5[21],

"R",

multi_str_mr_array_5[21],

"K/S",

multi_str_k_s_array_5[21]

],

[

"",

"",

"TC022",

multi_str_tm_array_5[22],

"Rm",

removeCR(multi_str_rm_array_5[22]),

"Rs",

removeCR(multi_str_rs_array_5[22]),

"R",

removeCR(multi_str_mr_array_5[22]),

"K/S",

multi_str_k_s_array_5[22]

],

[

"",

"",

"TC023",

multi_str_tm_array_5[23],

"Rm",

multi_str_rm_array_5[23],

"Rs",

multi_str_rs_array_5[23],

"R",

multi_str_mr_array_5[23],

"K/S",

removeCRTC23(multi_str_k_s_array_5[23]),

],

[

"",

"",

"TC024",

multi_str_tm_array_5[24],

"Rm",

multi_str_rm_array_5[24],

"Rs",

multi_str_rs_array_5[24],

"R",

multi_str_mr_array_5[24],

"K/S",

multi_str_k_s_array_5[24]

],

[

"",

"",

"TC025",

multi_str_tm_array_5[25],

"Rm",

multi_str_rm_array_5[25],

"Rs",

multi_str_rs_array_5[25],

"R",

multi_str_mr_array_5[25],

"K/S",

multi_str_k_s_array_5[25]

],

[

"",

"",

"TC026",

multi_str_tm_array_5[26],

"Rm",

multi_str_rm_array_5[26],

"Rs",

multi_str_rs_array_5[26],

"R",

multi_str_mr_array_5[26],

"K/S",

multi_str_k_s_array_5[26]

],

[

"",

"",

"TC027",

multi_str_tm_array_5[27],

"Rm",

multi_str_rm_array_5[27],

"Rs",

multi_str_rs_array_5[27],

"R",

multi_str_mr_array_5[27],

"K/S",

multi_str_k_s_array_5[27]

],

[

"",

"",

"TC028",

multi_str_tm_array_5[28],

"Rm",

multi_str_rm_array_5[28],

"Rs",

multi_str_rs_array_5[28],

"R",

multi_str_mr_array_5[28],

"K/S",

multi_str_k_s_array_5[28]

],

[

"",

"",

"TC029",

multi_str_tm_array_5[29],

"Rm",

multi_str_rm_array_5[29],

"Rs",

multi_str_rs_array_5[29],

"R",

multi_str_mr_array_5[29],

"K/S",

multi_str_k_s_array_5[29]

],

[

"",

"",

"TC030",

removeCR30(multi_str_tm_array_5[30]),

"Rm",

removeCR30(multi_str_rm_array_5[30]),

"Rs",

removeCR30(multi_str_rs_array_5[30]),

"R",

removeCR30(multi_str_mr_array_5[30]),

"K/S",

removeCR30(multi_str_k_s_array_5[30]),

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"dK/S",

multi_ch5_dksvalue,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"C0",

multi_ch5_C0value,

],

[

"",

"",

"",

"",

"Temp",

multi_ch5_tempvalue+"゜C",

"Hmdty",

multi_ch5_humidityvalue+"%",

"Ke",

multi_ch5_kevalue,

"C1",

multi_ch5_C1value,

],

[

"",

"",

"",

"",

"",

"",

"Adev",

multi_ch5_dev_a_value,

"Bdev",

multi_ch5_dev_b_value,

"C2",

multi_ch5_C2value,

],

[

"",

"",

"",

"",

"",

"",

"Adegr",

multi_ch5_deg_a_value,

"Bdegr",

multi_ch5_deg_b_value,

"C3",

multi_ch5_C3value,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"LotCh",

multi_ch5_lot_ch_value,

"C4",

multi_ch5_C4value,

],

[

"",

"",

"",

"",

"",

"[----]",

"Acal",

multi_ch5_cal_a_value,

"Bcal",

multi_ch5_cal_b_value,

"C5",

multi_ch5_C5value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Ktemp",

multi_ch5_ktemp_value,

"C6",

multi_ch5_C6value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Kunit",

multi_ch5_kunit_value,

"C7",

multi_ch5_C7value,

],[

"",

"",

"",

"",

"",

"",

"Acorr",

multi_ch5_corr_a_value,

"Bcorr",

multi_ch5_corr_b_value,

"C8",

multi_ch5_C8value,

]              ,[

"[MULTI]",

"CH",

"12",

multi_ch6_novalue,

multi_ch6_namevalue

],

[

"",

"",

"USED",

multi_str_tm_array_6[0],

"Rm",

multi_str_rm_array_6[0],

"Rs",

multi_str_rs_array_6[0],

"R",

multi_str_mr_array_6[0],

"K/S",

multi_str_k_s_array_6[0]

],

[

"",

"",

"TC01",

multi_str_tm_array_6[1],

"Rm",

multi_str_rm_array_6[1],

"Rs",

multi_str_rs_array_6[1],

"R",

multi_str_mr_array_6[1],

"K/S",

multi_str_k_s_array_6[1]

],

[

"",

"",

"TC02",

multi_str_tm_array_6[2],

"Rm",

multi_str_rm_array_6[2],

"Rs",

multi_str_rs_array_6[2],

"R",

multi_str_mr_array_6[2],

"K/S",

multi_str_k_s_array_6[2]

],

[

"",

"",

"TC03",

multi_str_tm_array_6[3],

"Rm",

multi_str_rm_array_6[3],

"Rs",

multi_str_rs_array_6[3],

"R",

multi_str_mr_array_6[3],

"K/S",

multi_str_k_s_array_6[3]

],

[

"",

"",

"TC04",

multi_str_tm_array_6[4],

"Rm",

multi_str_rm_array_6[4],

"Rs",

multi_str_rs_array_6[4],

"R",

multi_str_mr_array_6[4],

"K/S",

multi_str_k_s_array_6[4]

],

[

"",

"",

"TC05",

multi_str_tm_array_6[5],

"Rm",

multi_str_rm_array_6[5],

"Rs",

multi_str_rs_array_6[5],

"R",

multi_str_mr_array_6[5],

"K/S",

multi_str_k_s_array_6[5]

],

[

"",

"",

"TC06",

multi_str_tm_array_6[6],

"Rm",

multi_str_rm_array_6[6],

"Rs",

multi_str_rs_array_6[6],

"R",

multi_str_mr_array_6[6],

"K/S",

multi_str_k_s_array_6[6]

],

[

"",

"",

"TC07",

multi_str_tm_array_6[7],

"Rm",

multi_str_rm_array_6[7],

"Rs",

multi_str_rs_array_6[7],

"R",

multi_str_mr_array_6[7],

"K/S",

multi_str_k_s_array_6[7]

],

[

"",

"",

"TC08",

multi_str_tm_array_6[8],

"Rm",

multi_str_rm_array_6[8],

"Rs",

multi_str_rs_array_6[8],

"R",

multi_str_mr_array_6[8],

"K/S",

multi_str_k_s_array_6[8]

],

[

"",

"",

"TC09",

multi_str_tm_array_6[9],

"Rm",

multi_str_rm_array_6[9],

"Rs",

multi_str_rs_array_6[9],

"R",

multi_str_mr_array_6[9],

"K/S",

multi_str_k_s_array_6[9]

],

[

"",

"",

"TC10",

multi_str_tm_array_6[10],

"Rm",

multi_str_rm_array_6[10],

"Rs",

multi_str_rs_array_6[10],

"R",

multi_str_mr_array_6[10],

"K/S",

multi_str_k_s_array_6[10]

],

[

"",

"",

"TC011",

multi_str_tm_array_6[11],

"Rm",

multi_str_rm_array_6[11],

"Rs",

multi_str_rs_array_6[11],

"R",

multi_str_mr_array_6[11],

"K/S",

multi_str_k_s_array_6[11]

],

[

"",

"",

"TC012",

multi_str_tm_array_6[12],

"Rm",

multi_str_rm_array_6[12],

"Rs",

multi_str_rs_array_6[12],

"R",

multi_str_mr_array_6[12],

"K/S",

multi_str_k_s_array_6[12]

],

[

"",

"",

"TC013",

multi_str_tm_array_6[13],

"Rm",

multi_str_rm_array_6[13],

"Rs",

multi_str_rs_array_6[13],

"R",

multi_str_mr_array_6[13],

"K/S",

multi_str_k_s_array_6[13]

],

[

"",

"",

"TC014",

multi_str_tm_array_6[14],

"Rm",

multi_str_rm_array_6[14],

"Rs",

multi_str_rs_array_6[14],

"R",

multi_str_mr_array_6[14],

"K/S",

multi_str_k_s_array_6[14]

],

[

"",

"",

"TC015",

multi_str_tm_array_6[15],

"Rm",

multi_str_rm_array_6[15],

"Rs",

multi_str_rs_array_6[15],

"R",

multi_str_mr_array_6[15],

"K/S",

multi_str_k_s_array_6[15]

],

[

"",

"",

"TC016",

multi_str_tm_array_6[16],

"Rm",

multi_str_rm_array_6[16],

"Rs",

multi_str_rs_array_6[16],

"R",

multi_str_mr_array_6[16],

"K/S",

multi_str_k_s_array_6[16]

],

[

"",

"",

"TC017",

multi_str_tm_array_6[17],

"Rm",

multi_str_rm_array_6[17],

"Rs",

multi_str_rs_array_6[17],

"R",

multi_str_mr_array_6[17],

"K/S",

multi_str_k_s_array_6[17]

],

[

"",

"",

"TC018",

multi_str_tm_array_6[18],

"Rm",

multi_str_rm_array_6[18],

"Rs",

multi_str_rs_array_6[18],

"R",

multi_str_mr_array_6[18],

"K/S",

multi_str_k_s_array_6[18]

],

[

"",

"",

"TC019",

multi_str_tm_array_6[19],

"Rm",

multi_str_rm_array_6[19],

"Rs",

multi_str_rs_array_6[19],

"R",

multi_str_mr_array_6[19],

"K/S",

multi_str_k_s_array_6[19]

],

[

"",

"",

"TC020",

multi_str_tm_array_6[20],

"Rm",

multi_str_rm_array_6[20],

"Rs",

multi_str_rs_array_6[20],

"R",

multi_str_mr_array_6[20],

"K/S",

multi_str_k_s_array_6[20]

],

[

"",

"",

"TC021",

multi_str_tm_array_6[21],

"Rm",

multi_str_rm_array_6[21],

"Rs",

multi_str_rs_array_6[21],

"R",

multi_str_mr_array_6[21],

"K/S",

multi_str_k_s_array_6[21]

],

[

"",

"",

"TC022",

multi_str_tm_array_6[22],

"Rm",

removeCR(multi_str_rm_array_6[22]),

"Rs",

removeCR(multi_str_rs_array_6[22]),

"R",

removeCR(multi_str_mr_array_6[22]),

"K/S",

multi_str_k_s_array_6[22]

],

[

"",

"",

"TC023",

multi_str_tm_array_6[23],

"Rm",

multi_str_rm_array_6[23],

"Rs",

multi_str_rs_array_6[23],

"R",

multi_str_mr_array_6[23],

"K/S",

removeCRTC23(multi_str_k_s_array_6[23]),

],

[

"",

"",

"TC024",

multi_str_tm_array_6[24],

"Rm",

multi_str_rm_array_6[24],

"Rs",

multi_str_rs_array_6[24],

"R",

multi_str_mr_array_6[24],

"K/S",

multi_str_k_s_array_6[24]

],

[

"",

"",

"TC025",

multi_str_tm_array_6[25],

"Rm",

multi_str_rm_array_6[25],

"Rs",

multi_str_rs_array_6[25],

"R",

multi_str_mr_array_6[25],

"K/S",

multi_str_k_s_array_6[25]

],

[

"",

"",

"TC026",

multi_str_tm_array_6[26],

"Rm",

multi_str_rm_array_6[26],

"Rs",

multi_str_rs_array_6[26],

"R",

multi_str_mr_array_6[26],

"K/S",

multi_str_k_s_array_6[26]

],

[

"",

"",

"TC027",

multi_str_tm_array_6[27],

"Rm",

multi_str_rm_array_6[27],

"Rs",

multi_str_rs_array_6[27],

"R",

multi_str_mr_array_6[27],

"K/S",

multi_str_k_s_array_6[27]

],

[

"",

"",

"TC028",

multi_str_tm_array_6[28],

"Rm",

multi_str_rm_array_6[28],

"Rs",

multi_str_rs_array_6[28],

"R",

multi_str_mr_array_6[28],

"K/S",

multi_str_k_s_array_6[28]

],

[

"",

"",

"TC029",

multi_str_tm_array_6[29],

"Rm",

multi_str_rm_array_6[29],

"Rs",

multi_str_rs_array_6[29],

"R",

multi_str_mr_array_6[29],

"K/S",

multi_str_k_s_array_6[29]

],

[

"",

"",

"TC030",

removeCR30(multi_str_tm_array_6[30]),

"Rm",

removeCR30(multi_str_rm_array_6[30]),

"Rs",

removeCR30(multi_str_rs_array_6[30]),

"R",

removeCR30(multi_str_mr_array_6[30]),

"K/S",

removeCR30(multi_str_k_s_array_6[30]),

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"dK/S",

multi_ch6_dksvalue,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"",

"",

"C0",

multi_ch6_C0value,

],

[

"",

"",

"",

"",

"Temp",

multi_ch6_tempvalue+"゜C",

"Hmdty",

multi_ch6_humidityvalue+"%",

"Ke",

multi_ch6_kevalue,

"C1",

multi_ch6_C1value,

],

[

"",

"",

"",

"",

"",

"",

"Adev",

multi_ch6_dev_a_value,

"Bdev",

multi_ch6_dev_b_value,

"C2",

multi_ch6_C2value,

],

[

"",

"",

"",

"",

"",

"",

"Adegr",

multi_ch6_deg_a_value,

"Bdegr",

multi_ch6_deg_b_value,

"C3",

multi_ch6_C3value,

],

[

"",

"",

"",

"",

"",

"",

"",

"",

"LotCh",

multi_ch6_lot_ch_value,

"C4",

multi_ch6_C4value,

],

[

"",

"",

"",

"",

"",

"[----]",

"Acal",

multi_ch6_cal_a_value,

"Bcal",

multi_ch6_cal_b_value,

"C5",

multi_ch6_C5value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Ktemp",

multi_ch6_ktemp_value,

"C6",

multi_ch6_C6value,

],[

"",

"",

"",

"",

"",

"",

"",

"",

"Kunit",

multi_ch6_kunit_value,

"C7",

multi_ch6_C7value,

],[

"",

"",

"",

"",

"",

"",

"Acorr",

multi_ch6_corr_a_value,

"Bcorr",

multi_ch6_corr_b_value,

"C8",

multi_ch6_C8value,

]

,[

""

]

,[

"***** ↑↑↑ タイムコースK/Sデータ ↑↑↑ *****"

]

,[



]

,[



]

,[

"***** ↓↓↓ 光学検量線情報 ↓↓↓ *****"

]

,[



]

,[

"",

"",

"QW",

"RW",

"QB",

"RB",

"a_opt",

"b_opt",

]

,[

"CH01",

ch1_mwvalue,

ch1_mwhtqvalue,

ch1_mwhtrvalue,

ch1_mblkqvalue,

ch1_mblkrvalue,

ch1_moptcurvevalue,

ch1_boptcurve2,

]

,[

"",

ch1_swvalue,

ch1_swhtqvalue,

ch1_swhtrvalue,

ch1_sblkqvalue,

ch1_sblkrvalue,

ch1_soptcurvevalue,

ch1_soptcurve2,

]

,[

"CH02",

ch2_mwvalue,

ch2_mwhtqvalue,

ch2_mwhtrvalue,

ch2_mblkqvalue,

ch2_mblkrvalue,

ch2_moptcurvevalue,

ch2_boptcurve2,

] ,[

"",

ch2_swvalue,

ch2_swhtqvalue,

ch2_swhtrvalue,

ch2_sblkqvalue,

ch2_sblkrvalue,

ch2_soptcurvevalue,

ch2_soptcurve2,

]

,[

"CH03",

ch3_mwvalue,

ch3_mwhtqvalue,

ch3_mwhtrvalue,

ch3_mblkqvalue,

ch3_mblkrvalue,

ch3_moptcurvevalue,

ch3_boptcurve2,

] ,[

"",

ch3_swvalue,

ch3_swhtqvalue,

ch3_swhtrvalue,

ch3_sblkqvalue,

ch3_sblkrvalue,

ch3_soptcurvevalue,

ch3_soptcurve2,

]

,[

"CH04",

ch4_mwvalue,

ch4_mwhtqvalue,

ch4_mwhtrvalue,

ch4_mblkqvalue,

ch4_mblkrvalue,

ch4_moptcurvevalue,

ch4_boptcurve2,

] ,[

"",

ch4_swvalue,

ch4_swhtqvalue,

ch4_swhtrvalue,

ch4_sblkqvalue,

ch4_sblkrvalue,

ch4_soptcurvevalue,

ch4_soptcurve2,

]

,[

"CH05",

ch5_mwvalue,

ch5_mwhtqvalue,

ch5_mwhtrvalue,

ch5_mblkqvalue,

ch5_mblkrvalue,

ch5_moptcurvevalue,

ch5_boptcurve2,

] ,[

"",

ch5_swvalue,

ch5_swhtqvalue,

ch5_swhtrvalue,

ch5_sblkqvalue,

ch5_sblkrvalue,

ch5_soptcurvevalue,

ch5_soptcurve2,

]

,[

"CH06",

ch6_mwvalue,

ch6_mwhtqvalue,

ch6_mwhtrvalue,

ch6_mblkqvalue,

ch6_mblkrvalue,

ch6_moptcurvevalue,

ch6_boptcurve2,

] ,[

"",

ch6_swvalue,

ch6_swhtqvalue,

ch6_swhtrvalue,

ch6_sblkqvalue,

ch6_sblkrvalue,

ch6_soptcurvevalue,

ch6_soptcurve2,

]

,[

"CH07",

multi_ch1_mwvalue,

multi_ch1_mwhtqvalue,

multi_ch1_mwhtrvalue,

multi_ch1_mblkqvalue,

multi_ch1_mblkrvalue,

multi_ch1_moptcurvevalue,

multi_ch1_boptcurve2,

] ,[

"",

multi_ch1_swvalue,

multi_ch1_swhtqvalue,

multi_ch1_swhtrvalue,

multi_ch1_sblkqvalue,

multi_ch1_sblkrvalue,

multi_ch1_soptcurvevalue,

multi_ch1_soptcurve2,

]

,[

"CH08",

multi_ch2_mwvalue,

multi_ch2_mwhtqvalue,

multi_ch2_mwhtrvalue,

multi_ch2_mblkqvalue,

multi_ch2_mblkrvalue,

multi_ch2_moptcurvevalue,

multi_ch2_boptcurve2,

] ,[

"",

multi_ch2_swvalue,

multi_ch2_swhtqvalue,

multi_ch2_swhtrvalue,

multi_ch2_sblkqvalue,

multi_ch2_sblkrvalue,

multi_ch2_soptcurvevalue,

multi_ch2_soptcurve2,

]

,[

"CH09",

multi_ch3_mwvalue,

multi_ch3_mwhtqvalue,

multi_ch3_mwhtrvalue,

multi_ch3_mblkqvalue,

multi_ch3_mblkrvalue,

multi_ch3_moptcurvevalue,

multi_ch3_boptcurve2,

] ,[

"",

multi_ch3_swvalue,

multi_ch3_swhtqvalue,

multi_ch3_swhtrvalue,

multi_ch3_sblkqvalue,

multi_ch3_sblkrvalue,

multi_ch3_soptcurvevalue,

multi_ch3_soptcurve2,

]

,[

"CH010",

multi_ch4_mwvalue,

multi_ch4_mwhtqvalue,

multi_ch4_mwhtrvalue,

multi_ch4_mblkqvalue,

multi_ch4_mblkrvalue,

multi_ch4_moptcurvevalue,

multi_ch4_boptcurve2,

] ,[

"",

multi_ch4_swvalue,

multi_ch4_swhtqvalue,

multi_ch4_swhtrvalue,

multi_ch4_sblkqvalue,

multi_ch4_sblkrvalue,

multi_ch4_soptcurvevalue,

multi_ch4_soptcurve2,

]

,[

"CH011",

multi_ch5_mwvalue,

multi_ch5_mwhtqvalue,

multi_ch5_mwhtrvalue,

multi_ch5_mblkqvalue,

multi_ch5_mblkrvalue,

multi_ch5_moptcurvevalue,

multi_ch5_boptcurve2,

] ,[

"",

multi_ch5_swvalue,

multi_ch5_swhtqvalue,

multi_ch5_swhtrvalue,

multi_ch5_sblkqvalue,

multi_ch5_sblkrvalue,

multi_ch5_soptcurvevalue,

multi_ch5_soptcurve2,

]

,[

"CH012",

multi_ch6_mwvalue,

multi_ch6_mwhtqvalue,

multi_ch6_mwhtrvalue,

multi_ch6_mblkqvalue,

multi_ch6_mblkrvalue,

multi_ch6_moptcurvevalue,

multi_ch6_boptcurve2,

]

,[

"",

multi_ch6_swvalue,

multi_ch6_swhtqvalue,

multi_ch6_swhtrvalue,

multi_ch6_sblkqvalue,

multi_ch6_sblkrvalue,

multi_ch6_soptcurvevalue,

multi_ch6_soptcurve2,

]

,[



]

,[

"***** ↑↑↑ 光学検量線情報 ↑↑↑ *****",

]

,[



]

,[



]

,[

"***** ↓↓↓ タイムコースA/Dデータ ↓↓↓ *****",

]

,[



]

,[



]

,[

"[SINGLE]",

"CH1"

]

,[

"",

"Main",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

"Sub",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

],[

"WHITE",            

str_time_array_1[0],

str_mnsmp_array_1[0],

str_mdsmp_array_1[0],

str_mnref_array_1[0],

str_mdref_array_1[0],

str_time_array_1[0],

str_snsmp_array_1[0],

str_sdsmp_array_1[0],

str_snref_array_1[0],

str_sderf_array_1[0],

],[

"BLACK",            

str_time_array_1[1],

str_mnsmp_array_1[1],

str_mdsmp_array_1[1],

str_mnref_array_1[1],

str_mdref_array_1[1],

str_time_array_1[1],

str_snsmp_array_1[1],

str_sdsmp_array_1[1],

str_snref_array_1[1],

str_sderf_array_1[1],

],[

"TC01",

str_time_array_1[2],

str_mnsmp_array_1[2],

str_mdsmp_array_1[2],

str_mnref_array_1[2],

str_mdref_array_1[2],

str_time_array_1[2],

str_snsmp_array_1[2],

str_sdsmp_array_1[2],

str_snref_array_1[2],

str_sderf_array_1[2],

],[

"TC02",

str_time_array_1[3],

str_mnsmp_array_1[3],

str_mdsmp_array_1[3],

str_mnref_array_1[3],

str_mdref_array_1[3],

str_time_array_1[3],

str_snsmp_array_1[3],

str_sdsmp_array_1[3],

str_snref_array_1[3],

str_sderf_array_1[3],

]

,[

"TC03",

str_time_array_1[4],

str_mnsmp_array_1[4],

str_mdsmp_array_1[4],

str_mnref_array_1[4],

str_mdref_array_1[4],

str_time_array_1[4],

str_snsmp_array_1[4],

str_sdsmp_array_1[4],

str_snref_array_1[4],

str_sderf_array_1[4],

],[

"TC04",

str_time_array_1[5],

str_mnsmp_array_1[5],

str_mdsmp_array_1[5],

str_mnref_array_1[5],

str_mdref_array_1[5],

str_time_array_1[5],

str_snsmp_array_1[5],

str_sdsmp_array_1[5],

str_snref_array_1[5],

str_sderf_array_1[5],

],[

"TC05",

str_time_array_1[6],

str_mnsmp_array_1[6],

str_mdsmp_array_1[6],

str_mnref_array_1[6],

str_mdref_array_1[6],

str_time_array_1[6],

str_snsmp_array_1[6],

str_sdsmp_array_1[6],

str_snref_array_1[6],

str_sderf_array_1[6],

],[

"TC06",

str_time_array_1[7],

str_mnsmp_array_1[7],

str_mdsmp_array_1[7],

str_mnref_array_1[7],

str_mdref_array_1[7],

str_time_array_1[7],

str_snsmp_array_1[7],

str_sdsmp_array_1[7],

str_snref_array_1[7],

str_sderf_array_1[7],

],[

"TC07",

str_time_array_1[8],

str_mnsmp_array_1[8],

str_mdsmp_array_1[8],

str_mnref_array_1[8],

str_mdref_array_1[8],

str_time_array_1[8],

str_snsmp_array_1[8],

str_sdsmp_array_1[8],

str_snref_array_1[8],

str_sderf_array_1[8],

],[

"TC08",

str_time_array_1[9],

str_mnsmp_array_1[9],

str_mdsmp_array_1[9],

str_mnref_array_1[9],

str_mdref_array_1[9],

str_time_array_1[9],

str_snsmp_array_1[9],

str_sdsmp_array_1[9],

str_snref_array_1[9],

str_sderf_array_1[9],

],[

"TC09",

str_time_array_1[10],

str_mnsmp_array_1[10],

str_mdsmp_array_1[10],

str_mnref_array_1[10],

str_mdref_array_1[10],

str_time_array_1[10],

str_snsmp_array_1[10],

str_sdsmp_array_1[10],

str_snref_array_1[10],

str_sderf_array_1[10],

],[

"TC10",

str_time_array_1[11],

str_mnsmp_array_1[11],

str_mdsmp_array_1[11],

str_mnref_array_1[11],

str_mdref_array_1[11],

str_time_array_1[11],

str_snsmp_array_1[11],

str_sdsmp_array_1[11],

str_snref_array_1[11],

str_sderf_array_1[11],

],[

"TC11",

str_time_array_1[12],

str_mnsmp_array_1[12],

str_mdsmp_array_1[12],

str_mnref_array_1[12],

str_mdref_array_1[12],

str_time_array_1[12],

str_snsmp_array_1[12],

str_sdsmp_array_1[12],

str_snref_array_1[12],

str_sderf_array_1[12],

],[

"TC12",

str_time_array_1[13],

str_mnsmp_array_1[13],

str_mdsmp_array_1[13],

str_mnref_array_1[13],

str_mdref_array_1[13],

str_time_array_1[13],

str_snsmp_array_1[13],

str_sdsmp_array_1[13],

str_snref_array_1[13],

str_sderf_array_1[13],

],[

"TC13",

str_time_array_1[14],

str_mnsmp_array_1[14],

str_mdsmp_array_1[14],

str_mnref_array_1[14],

str_mdref_array_1[14],

str_time_array_1[14],

str_snsmp_array_1[14],

str_sdsmp_array_1[14],

str_snref_array_1[14],

str_sderf_array_1[14],

],[

"TC14",

str_time_array_1[15],

str_mnsmp_array_1[15],

str_mdsmp_array_1[15],

str_mnref_array_1[15],

str_mdref_array_1[15],

str_time_array_1[15],

str_snsmp_array_1[15],

str_sdsmp_array_1[15],

str_snref_array_1[15],

str_sderf_array_1[15],

],[

"TC15",

str_time_array_1[16],

str_mnsmp_array_1[16],

str_mdsmp_array_1[16],

str_mnref_array_1[16],

str_mdref_array_1[16],

str_time_array_1[16],

str_snsmp_array_1[16],

str_sdsmp_array_1[16],

str_snref_array_1[16],

str_sderf_array_1[16],

],[

"TC16",

str_time_array_1[17],

str_mnsmp_array_1[17],

str_mdsmp_array_1[17],

str_mnref_array_1[17],

str_mdref_array_1[17],

str_time_array_1[17],

str_snsmp_array_1[17],

str_sdsmp_array_1[17],

str_snref_array_1[17],

str_sderf_array_1[17],

],[

"TC17",

str_time_array_1[18],

str_mnsmp_array_1[18],

str_mdsmp_array_1[18],

str_mnref_array_1[18],

str_mdref_array_1[18],

str_time_array_1[18],

str_snsmp_array_1[18],

str_sdsmp_array_1[18],

str_snref_array_1[18],

str_sderf_array_1[18],

],[

"TC18",

str_time_array_1[19],

str_mnsmp_array_1[19],

str_mdsmp_array_1[19],

str_mnref_array_1[19],

str_mdref_array_1[19],

str_time_array_1[19],

str_snsmp_array_1[19],

str_sdsmp_array_1[19],

str_snref_array_1[19],

str_sderf_array_1[19],

],[

"TC19",

str_time_array_1[20],

str_mnsmp_array_1[20],

str_mdsmp_array_1[20],

str_mnref_array_1[20],

str_mdref_array_1[20],

str_time_array_1[20],

str_snsmp_array_1[20],

str_sdsmp_array_1[20],

str_snref_array_1[20],

str_sderf_array_1[20],

],[

"TC20",

str_time_array_1[21],

str_mnsmp_array_1[21],

str_mdsmp_array_1[21],

str_mnref_array_1[21],

str_mdref_array_1[21],

str_time_array_1[21],

str_snsmp_array_1[21],

str_sdsmp_array_1[21],

str_snref_array_1[21],

str_sderf_array_1[21],

],[

"TC21",

str_time_array_1[22],

str_mnsmp_array_1[22],

str_mdsmp_array_1[22],

str_mnref_array_1[22],

str_mdref_array_1[22],

str_time_array_1[22],

str_snsmp_array_1[22],

str_sdsmp_array_1[22],

str_snref_array_1[22],

str_sderf_array_1[22],

],[

"TC22",

str_time_array_1[23],

str_mnsmp_array_1[23],

str_mdsmp_array_1[23],

str_mnref_array_1[23],

str_mdref_array_1[23],

str_time_array_1[23],

str_snsmp_array_1[23],

str_sdsmp_array_1[23],

str_snref_array_1[23],

str_sderf_array_1[23],

],[

"TC23",

str_time_array_1[24],

str_mnsmp_array_1[24],

str_mdsmp_array_1[24],

str_mnref_array_1[24],

str_mdref_array_1[24],

str_time_array_1[24],

str_snsmp_array_1[24],

str_sdsmp_array_1[24],

str_snref_array_1[24],

str_sderf_array_1[24],

],[

"TC24",

str_time_array_1[25],

str_mnsmp_array_1[25],

str_mdsmp_array_1[25],

str_mnref_array_1[25],

str_mdref_array_1[25],

str_time_array_1[25],

str_snsmp_array_1[25],

str_sdsmp_array_1[25],

str_snref_array_1[25],

str_sderf_array_1[25],

],[

"TC25",

str_time_array_1[26],

str_mnsmp_array_1[26],

str_mdsmp_array_1[26],

str_mnref_array_1[26],

str_mdref_array_1[26],

str_time_array_1[26],

str_snsmp_array_1[26],

str_sdsmp_array_1[26],

str_snref_array_1[26],

str_sderf_array_1[26],

],[

"TC26",

str_time_array_1[27],

str_mnsmp_array_1[27],

str_mdsmp_array_1[27],

str_mnref_array_1[27],

str_mdref_array_1[27],

str_time_array_1[27],

str_snsmp_array_1[27],

str_sdsmp_array_1[27],

str_snref_array_1[27],

str_sderf_array_1[27],

],[

"TC27",

str_time_array_1[28],

str_mnsmp_array_1[28],

str_mdsmp_array_1[28],

str_mnref_array_1[28],

str_mdref_array_1[28],

str_time_array_1[28],

str_snsmp_array_1[28],

str_sdsmp_array_1[28],

str_snref_array_1[28],

str_sderf_array_1[28],

],[

"TC28",

str_time_array_1[29],

str_mnsmp_array_1[29],

str_mdsmp_array_1[29],

str_mnref_array_1[29],

str_mdref_array_1[29],

str_time_array_1[29],

str_snsmp_array_1[29],

str_sdsmp_array_1[29],

str_snref_array_1[29],

str_sderf_array_1[29],

],[

"TC29",

str_time_array_1[30],

str_mnsmp_array_1[30],

str_mdsmp_array_1[30],

str_mnref_array_1[30],

str_mdref_array_1[30],

str_time_array_1[30],

str_snsmp_array_1[30],

str_sdsmp_array_1[30],

str_snref_array_1[30],

str_sderf_array_1[30],

],[

"TC30",

removeCR30(str_time_array_1[31]),

removeCR30(str_mnsmp_array_1[31]),

removeCR30(str_mdsmp_array_1[31]),

removeCR30(str_mnref_array_1[31]),

removeCR30(str_mdref_array_1[31]),

removeCR30(str_time_array_1[31]),

removeCR30(str_snsmp_array_1[31]),

removeCR30(str_sdsmp_array_1[31]),

removeCR30(str_snref_array_1[31]),

removeCR30(str_sderf_array_1[31]),

],[



],[

"[SINGLE]",

"CH2"

]

,[

"",

"Main",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

"Sub",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

],[

"WHITE",            

str_time_array_2[0],

str_mnsmp_array_2[0],

str_mdsmp_array_2[0],

str_mnref_array_2[0],

str_mdref_array_2[0],

str_time_array_2[0],

str_snsmp_array_2[0],

str_sdsmp_array_2[0],

str_snref_array_2[0],

str_sderf_array_2[0],

],[

"BLACK",            

str_time_array_2[1],

str_mnsmp_array_2[1],

str_mdsmp_array_2[1],

str_mnref_array_2[1],

str_mdref_array_2[1],

str_time_array_2[1],

str_snsmp_array_2[1],

str_sdsmp_array_2[1],

str_snref_array_2[1],

str_sderf_array_2[1],

],[

"TC01",

str_time_array_2[2],

str_mnsmp_array_2[2],

str_mdsmp_array_2[2],

str_mnref_array_2[2],

str_mdref_array_2[2],

str_time_array_2[2],

str_snsmp_array_2[2],

str_sdsmp_array_2[2],

str_snref_array_2[2],

str_sderf_array_2[2],

],[

"TC02",

str_time_array_2[3],

str_mnsmp_array_2[3],

str_mdsmp_array_2[3],

str_mnref_array_2[3],

str_mdref_array_2[3],

str_time_array_2[3],

str_snsmp_array_2[3],

str_sdsmp_array_2[3],

str_snref_array_2[3],

str_sderf_array_2[3],

]

,[

"TC03",

str_time_array_2[4],

str_mnsmp_array_2[4],

str_mdsmp_array_2[4],

str_mnref_array_2[4],

str_mdref_array_2[4],

str_time_array_2[4],

str_snsmp_array_2[4],

str_sdsmp_array_2[4],

str_snref_array_2[4],

str_sderf_array_2[4],

],[

"TC04",

str_time_array_2[5],

str_mnsmp_array_2[5],

str_mdsmp_array_2[5],

str_mnref_array_2[5],

str_mdref_array_2[5],

str_time_array_2[5],

str_snsmp_array_2[5],

str_sdsmp_array_2[5],

str_snref_array_2[5],

str_sderf_array_2[5],

],[

"TC05",

str_time_array_2[6],

str_mnsmp_array_2[6],

str_mdsmp_array_2[6],

str_mnref_array_2[6],

str_mdref_array_2[6],

str_time_array_2[6],

str_snsmp_array_2[6],

str_sdsmp_array_2[6],

str_snref_array_2[6],

str_sderf_array_2[6],

],[

"TC06",

str_time_array_2[7],

str_mnsmp_array_2[7],

str_mdsmp_array_2[7],

str_mnref_array_2[7],

str_mdref_array_2[7],

str_time_array_2[7],

str_snsmp_array_2[7],

str_sdsmp_array_2[7],

str_snref_array_2[7],

str_sderf_array_2[7],

],[

"TC07",

str_time_array_2[8],

str_mnsmp_array_2[8],

str_mdsmp_array_2[8],

str_mnref_array_2[8],

str_mdref_array_2[8],

str_time_array_2[8],

str_snsmp_array_2[8],

str_sdsmp_array_2[8],

str_snref_array_2[8],

str_sderf_array_2[8],

],[

"TC08",

str_time_array_2[9],

str_mnsmp_array_2[9],

str_mdsmp_array_2[9],

str_mnref_array_2[9],

str_mdref_array_2[9],

str_time_array_2[9],

str_snsmp_array_2[9],

str_sdsmp_array_2[9],

str_snref_array_2[9],

str_sderf_array_2[9],

],[

"TC09",

str_time_array_2[10],

str_mnsmp_array_2[10],

str_mdsmp_array_2[10],

str_mnref_array_2[10],

str_mdref_array_2[10],

str_time_array_2[10],

str_snsmp_array_2[10],

str_sdsmp_array_2[10],

str_snref_array_2[10],

str_sderf_array_2[10],

],[

"TC10",

str_time_array_2[11],

str_mnsmp_array_2[11],

str_mdsmp_array_2[11],

str_mnref_array_2[11],

str_mdref_array_2[11],

str_time_array_2[11],

str_snsmp_array_2[11],

str_sdsmp_array_2[11],

str_snref_array_2[11],

str_sderf_array_2[11],

],[

"TC11",

str_time_array_2[12],

str_mnsmp_array_2[12],

str_mdsmp_array_2[12],

str_mnref_array_2[12],

str_mdref_array_2[12],

str_time_array_2[12],

str_snsmp_array_2[12],

str_sdsmp_array_2[12],

str_snref_array_2[12],

str_sderf_array_2[12],

],[

"TC12",

str_time_array_2[13],

str_mnsmp_array_2[13],

str_mdsmp_array_2[13],

str_mnref_array_2[13],

str_mdref_array_2[13],

str_time_array_2[13],

str_snsmp_array_2[13],

str_sdsmp_array_2[13],

str_snref_array_2[13],

str_sderf_array_2[13],

],[

"TC13",

str_time_array_2[14],

str_mnsmp_array_2[14],

str_mdsmp_array_2[14],

str_mnref_array_2[14],

str_mdref_array_2[14],

str_time_array_2[14],

str_snsmp_array_2[14],

str_sdsmp_array_2[14],

str_snref_array_2[14],

str_sderf_array_2[14],

],[

"TC14",

str_time_array_2[15],

str_mnsmp_array_2[15],

str_mdsmp_array_2[15],

str_mnref_array_2[15],

str_mdref_array_2[15],

str_time_array_2[15],

str_snsmp_array_2[15],

str_sdsmp_array_2[15],

str_snref_array_2[15],

str_sderf_array_2[15],

],[

"TC15",

str_time_array_2[16],

str_mnsmp_array_2[16],

str_mdsmp_array_2[16],

str_mnref_array_2[16],

str_mdref_array_2[16],

str_time_array_2[16],

str_snsmp_array_2[16],

str_sdsmp_array_2[16],

str_snref_array_2[16],

str_sderf_array_2[16],

],[

"TC16",

str_time_array_2[17],

str_mnsmp_array_2[17],

str_mdsmp_array_2[17],

str_mnref_array_2[17],

str_mdref_array_2[17],

str_time_array_2[17],

str_snsmp_array_2[17],

str_sdsmp_array_2[17],

str_snref_array_2[17],

str_sderf_array_2[17],

],[

"TC17",

str_time_array_2[18],

str_mnsmp_array_2[18],

str_mdsmp_array_2[18],

str_mnref_array_2[18],

str_mdref_array_2[18],

str_time_array_2[18],

str_snsmp_array_2[18],

str_sdsmp_array_2[18],

str_snref_array_2[18],

str_sderf_array_2[18],

],[

"TC18",

str_time_array_2[19],

str_mnsmp_array_2[19],

str_mdsmp_array_2[19],

str_mnref_array_2[19],

str_mdref_array_2[19],

str_time_array_2[19],

str_snsmp_array_2[19],

str_sdsmp_array_2[19],

str_snref_array_2[19],

str_sderf_array_2[19],

],[

"TC19",

str_time_array_2[20],

str_mnsmp_array_2[20],

str_mdsmp_array_2[20],

str_mnref_array_2[20],

str_mdref_array_2[20],

str_time_array_2[20],

str_snsmp_array_2[20],

str_sdsmp_array_2[20],

str_snref_array_2[20],

str_sderf_array_2[20],

],[

"TC20",

str_time_array_2[21],

str_mnsmp_array_2[21],

str_mdsmp_array_2[21],

str_mnref_array_2[21],

str_mdref_array_2[21],

str_time_array_2[21],

str_snsmp_array_2[21],

str_sdsmp_array_2[21],

str_snref_array_2[21],

str_sderf_array_2[21],

],[

"TC21",

str_time_array_2[22],

str_mnsmp_array_2[22],

str_mdsmp_array_2[22],

str_mnref_array_2[22],

str_mdref_array_2[22],

str_time_array_2[22],

str_snsmp_array_2[22],

str_sdsmp_array_2[22],

str_snref_array_2[22],

str_sderf_array_2[22],

],[

"TC22",

str_time_array_2[23],

str_mnsmp_array_2[23],

str_mdsmp_array_2[23],

str_mnref_array_2[23],

str_mdref_array_2[23],

str_time_array_2[23],

str_snsmp_array_2[23],

str_sdsmp_array_2[23],

str_snref_array_2[23],

str_sderf_array_2[23],

],[

"TC23",

str_time_array_2[24],

str_mnsmp_array_2[24],

str_mdsmp_array_2[24],

str_mnref_array_2[24],

str_mdref_array_2[24],

str_time_array_2[24],

str_snsmp_array_2[24],

str_sdsmp_array_2[24],

str_snref_array_2[24],

str_sderf_array_2[24],

],[

"TC24",

str_time_array_2[25],

str_mnsmp_array_2[25],

str_mdsmp_array_2[25],

str_mnref_array_2[25],

str_mdref_array_2[25],

str_time_array_2[25],

str_snsmp_array_2[25],

str_sdsmp_array_2[25],

str_snref_array_2[25],

str_sderf_array_2[25],

],[

"TC25",

str_time_array_2[26],

str_mnsmp_array_2[26],

str_mdsmp_array_2[26],

str_mnref_array_2[26],

str_mdref_array_2[26],

str_time_array_2[26],

str_snsmp_array_2[26],

str_sdsmp_array_2[26],

str_snref_array_2[26],

str_sderf_array_2[26],

],[

"TC26",

str_time_array_2[27],

str_mnsmp_array_2[27],

str_mdsmp_array_2[27],

str_mnref_array_2[27],

str_mdref_array_2[27],

str_time_array_2[27],

str_snsmp_array_2[27],

str_sdsmp_array_2[27],

str_snref_array_2[27],

str_sderf_array_2[27],

],[

"TC27",

str_time_array_2[28],

str_mnsmp_array_2[28],

str_mdsmp_array_2[28],

str_mnref_array_2[28],

str_mdref_array_2[28],

str_time_array_2[28],

str_snsmp_array_2[28],

str_sdsmp_array_2[28],

str_snref_array_2[28],

str_sderf_array_2[28],

],[

"TC28",

str_time_array_2[29],

str_mnsmp_array_2[29],

str_mdsmp_array_2[29],

str_mnref_array_2[29],

str_mdref_array_2[29],

str_time_array_2[29],

str_snsmp_array_2[29],

str_sdsmp_array_2[29],

str_snref_array_2[29],

str_sderf_array_2[29],

],[

"TC29",

str_time_array_2[30],

str_mnsmp_array_2[30],

str_mdsmp_array_2[30],

str_mnref_array_2[30],

str_mdref_array_2[30],

str_time_array_2[30],

str_snsmp_array_2[30],

str_sdsmp_array_2[30],

str_snref_array_2[30],

str_sderf_array_2[30],

],[

"TC30",

removeCR30(str_time_array_2[31]),

removeCR30(str_mnsmp_array_2[31]),

removeCR30(str_mdsmp_array_2[31]),

removeCR30(str_mnref_array_2[31]),

removeCR30(str_mdref_array_2[31]),

removeCR30(str_time_array_2[31]),

removeCR30(str_snsmp_array_2[31]),

removeCR30(str_sdsmp_array_2[31]),

removeCR30(str_snref_array_2[31]),

removeCR30(str_sderf_array_2[31]),

],[



]

,[

"[SINGLE]",

"CH3"

]

,[

"",

"Main",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

"Sub",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

],[

"WHITE",            

str_time_array_3[0],

str_mnsmp_array_3[0],

str_mdsmp_array_3[0],

str_mnref_array_3[0],

str_mdref_array_3[0],

str_time_array_3[0],

str_snsmp_array_3[0],

str_sdsmp_array_3[0],

str_snref_array_3[0],

str_sderf_array_3[0],

],[

"BLACK",            

str_time_array_3[1],

str_mnsmp_array_3[1],

str_mdsmp_array_3[1],

str_mnref_array_3[1],

str_mdref_array_3[1],

str_time_array_3[1],

str_snsmp_array_3[1],

str_sdsmp_array_3[1],

str_snref_array_3[1],

str_sderf_array_3[1],

],[

"TC01",

str_time_array_3[2],

str_mnsmp_array_3[2],

str_mdsmp_array_3[2],

str_mnref_array_3[2],

str_mdref_array_3[2],

str_time_array_3[2],

str_snsmp_array_3[2],

str_sdsmp_array_3[2],

str_snref_array_3[2],

str_sderf_array_3[2],

],[

"TC02",

str_time_array_3[3],

str_mnsmp_array_3[3],

str_mdsmp_array_3[3],

str_mnref_array_3[3],

str_mdref_array_3[3],

str_time_array_3[3],

str_snsmp_array_3[3],

str_sdsmp_array_3[3],

str_snref_array_3[3],

str_sderf_array_3[3],

]

,[

"TC03",

str_time_array_3[4],

str_mnsmp_array_3[4],

str_mdsmp_array_3[4],

str_mnref_array_3[4],

str_mdref_array_3[4],

str_time_array_3[4],

str_snsmp_array_3[4],

str_sdsmp_array_3[4],

str_snref_array_3[4],

str_sderf_array_3[4],

],[

"TC04",

str_time_array_3[5],

str_mnsmp_array_3[5],

str_mdsmp_array_3[5],

str_mnref_array_3[5],

str_mdref_array_3[5],

str_time_array_3[5],

str_snsmp_array_3[5],

str_sdsmp_array_3[5],

str_snref_array_3[5],

str_sderf_array_3[5],

],[

"TC05",

str_time_array_3[6],

str_mnsmp_array_3[6],

str_mdsmp_array_3[6],

str_mnref_array_3[6],

str_mdref_array_3[6],

str_time_array_3[6],

str_snsmp_array_3[6],

str_sdsmp_array_3[6],

str_snref_array_3[6],

str_sderf_array_3[6],

],[

"TC06",

str_time_array_3[7],

str_mnsmp_array_3[7],

str_mdsmp_array_3[7],

str_mnref_array_3[7],

str_mdref_array_3[7],

str_time_array_3[7],

str_snsmp_array_3[7],

str_sdsmp_array_3[7],

str_snref_array_3[7],

str_sderf_array_3[7],

],[

"TC07",

str_time_array_3[8],

str_mnsmp_array_3[8],

str_mdsmp_array_3[8],

str_mnref_array_3[8],

str_mdref_array_3[8],

str_time_array_3[8],

str_snsmp_array_3[8],

str_sdsmp_array_3[8],

str_snref_array_3[8],

str_sderf_array_3[8],

],[

"TC08",

str_time_array_3[9],

str_mnsmp_array_3[9],

str_mdsmp_array_3[9],

str_mnref_array_3[9],

str_mdref_array_3[9],

str_time_array_3[9],

str_snsmp_array_3[9],

str_sdsmp_array_3[9],

str_snref_array_3[9],

str_sderf_array_3[9],

],[

"TC09",

str_time_array_3[10],

str_mnsmp_array_3[10],

str_mdsmp_array_3[10],

str_mnref_array_3[10],

str_mdref_array_3[10],

str_time_array_3[10],

str_snsmp_array_3[10],

str_sdsmp_array_3[10],

str_snref_array_3[10],

str_sderf_array_3[10],

],[

"TC10",

str_time_array_3[11],

str_mnsmp_array_3[11],

str_mdsmp_array_3[11],

str_mnref_array_3[11],

str_mdref_array_3[11],

str_time_array_3[11],

str_snsmp_array_3[11],

str_sdsmp_array_3[11],

str_snref_array_3[11],

str_sderf_array_3[11],

],[

"TC11",

str_time_array_3[12],

str_mnsmp_array_3[12],

str_mdsmp_array_3[12],

str_mnref_array_3[12],

str_mdref_array_3[12],

str_time_array_3[12],

str_snsmp_array_3[12],

str_sdsmp_array_3[12],

str_snref_array_3[12],

str_sderf_array_3[12],

],[

"TC12",

str_time_array_3[13],

str_mnsmp_array_3[13],

str_mdsmp_array_3[13],

str_mnref_array_3[13],

str_mdref_array_3[13],

str_time_array_3[13],

str_snsmp_array_3[13],

str_sdsmp_array_3[13],

str_snref_array_3[13],

str_sderf_array_3[13],

],[

"TC13",

str_time_array_3[14],

str_mnsmp_array_3[14],

str_mdsmp_array_3[14],

str_mnref_array_3[14],

str_mdref_array_3[14],

str_time_array_3[14],

str_snsmp_array_3[14],

str_sdsmp_array_3[14],

str_snref_array_3[14],

str_sderf_array_3[14],

],[

"TC14",

str_time_array_3[15],

str_mnsmp_array_3[15],

str_mdsmp_array_3[15],

str_mnref_array_3[15],

str_mdref_array_3[15],

str_time_array_3[15],

str_snsmp_array_3[15],

str_sdsmp_array_3[15],

str_snref_array_3[15],

str_sderf_array_3[15],

],[

"TC15",

str_time_array_3[16],

str_mnsmp_array_3[16],

str_mdsmp_array_3[16],

str_mnref_array_3[16],

str_mdref_array_3[16],

str_time_array_3[16],

str_snsmp_array_3[16],

str_sdsmp_array_3[16],

str_snref_array_3[16],

str_sderf_array_3[16],

],[

"TC16",

str_time_array_3[17],

str_mnsmp_array_3[17],

str_mdsmp_array_3[17],

str_mnref_array_3[17],

str_mdref_array_3[17],

str_time_array_3[17],

str_snsmp_array_3[17],

str_sdsmp_array_3[17],

str_snref_array_3[17],

str_sderf_array_3[17],

],[

"TC17",

str_time_array_3[18],

str_mnsmp_array_3[18],

str_mdsmp_array_3[18],

str_mnref_array_3[18],

str_mdref_array_3[18],

str_time_array_3[18],

str_snsmp_array_3[18],

str_sdsmp_array_3[18],

str_snref_array_3[18],

str_sderf_array_3[18],

],[

"TC18",

str_time_array_3[19],

str_mnsmp_array_3[19],

str_mdsmp_array_3[19],

str_mnref_array_3[19],

str_mdref_array_3[19],

str_time_array_3[19],

str_snsmp_array_3[19],

str_sdsmp_array_3[19],

str_snref_array_3[19],

str_sderf_array_3[19],

],[

"TC19",

str_time_array_3[20],

str_mnsmp_array_3[20],

str_mdsmp_array_3[20],

str_mnref_array_3[20],

str_mdref_array_3[20],

str_time_array_3[20],

str_snsmp_array_3[20],

str_sdsmp_array_3[20],

str_snref_array_3[20],

str_sderf_array_3[20],

],[

"TC20",

str_time_array_3[21],

str_mnsmp_array_3[21],

str_mdsmp_array_3[21],

str_mnref_array_3[21],

str_mdref_array_3[21],

str_time_array_3[21],

str_snsmp_array_3[21],

str_sdsmp_array_3[21],

str_snref_array_3[21],

str_sderf_array_3[21],

],[

"TC21",

str_time_array_3[22],

str_mnsmp_array_3[22],

str_mdsmp_array_3[22],

str_mnref_array_3[22],

str_mdref_array_3[22],

str_time_array_3[22],

str_snsmp_array_3[22],

str_sdsmp_array_3[22],

str_snref_array_3[22],

str_sderf_array_3[22],

],[

"TC22",

str_time_array_3[23],

str_mnsmp_array_3[23],

str_mdsmp_array_3[23],

str_mnref_array_3[23],

str_mdref_array_3[23],

str_time_array_3[23],

str_snsmp_array_3[23],

str_sdsmp_array_3[23],

str_snref_array_3[23],

str_sderf_array_3[23],

],[

"TC23",

str_time_array_3[24],

str_mnsmp_array_3[24],

str_mdsmp_array_3[24],

str_mnref_array_3[24],

str_mdref_array_3[24],

str_time_array_3[24],

str_snsmp_array_3[24],

str_sdsmp_array_3[24],

str_snref_array_3[24],

str_sderf_array_3[24],

],[

"TC24",

str_time_array_3[25],

str_mnsmp_array_3[25],

str_mdsmp_array_3[25],

str_mnref_array_3[25],

str_mdref_array_3[25],

str_time_array_3[25],

str_snsmp_array_3[25],

str_sdsmp_array_3[25],

str_snref_array_3[25],

str_sderf_array_3[25],

],[

"TC25",

str_time_array_3[26],

str_mnsmp_array_3[26],

str_mdsmp_array_3[26],

str_mnref_array_3[26],

str_mdref_array_3[26],

str_time_array_3[26],

str_snsmp_array_3[26],

str_sdsmp_array_3[26],

str_snref_array_3[26],

str_sderf_array_3[26],

],[

"TC26",

str_time_array_3[27],

str_mnsmp_array_3[27],

str_mdsmp_array_3[27],

str_mnref_array_3[27],

str_mdref_array_3[27],

str_time_array_3[27],

str_snsmp_array_3[27],

str_sdsmp_array_3[27],

str_snref_array_3[27],

str_sderf_array_3[27],

],[

"TC27",

str_time_array_3[28],

str_mnsmp_array_3[28],

str_mdsmp_array_3[28],

str_mnref_array_3[28],

str_mdref_array_3[28],

str_time_array_3[28],

str_snsmp_array_3[28],

str_sdsmp_array_3[28],

str_snref_array_3[28],

str_sderf_array_3[28],

],[

"TC28",

str_time_array_3[29],

str_mnsmp_array_3[29],

str_mdsmp_array_3[29],

str_mnref_array_3[29],

str_mdref_array_3[29],

str_time_array_3[29],

str_snsmp_array_3[29],

str_sdsmp_array_3[29],

str_snref_array_3[29],

str_sderf_array_3[29],

],[

"TC29",

str_time_array_3[30],

str_mnsmp_array_3[30],

str_mdsmp_array_3[30],

str_mnref_array_3[30],

str_mdref_array_3[30],

str_time_array_3[30],

str_snsmp_array_3[30],

str_sdsmp_array_3[30],

str_snref_array_3[30],

str_sderf_array_3[30],

],[

"TC30",

removeCR30(str_time_array_3[31]),

removeCR30(str_mnsmp_array_3[31]),

removeCR30(str_mdsmp_array_3[31]),

removeCR30(str_mnref_array_3[31]),

removeCR30(str_mdref_array_3[31]),

removeCR30(str_time_array_3[31]),

removeCR30(str_snsmp_array_3[31]),

removeCR30(str_sdsmp_array_3[31]),

removeCR30(str_snref_array_3[31]),

removeCR30(str_sderf_array_3[31]),

],[



]

,[

"[SINGLE]",

"CH4"

]

,[

"",

"Main",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

"Sub",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

],[

"WHITE",            

str_time_array_4[0],

str_mnsmp_array_4[0],

str_mdsmp_array_4[0],

str_mnref_array_4[0],

str_mdref_array_4[0],

str_time_array_4[0],

str_snsmp_array_4[0],

str_sdsmp_array_4[0],

str_snref_array_4[0],

str_sderf_array_4[0],

],[

"BLACK",            

str_time_array_4[1],

str_mnsmp_array_4[1],

str_mdsmp_array_4[1],

str_mnref_array_4[1],

str_mdref_array_4[1],

str_time_array_4[1],

str_snsmp_array_4[1],

str_sdsmp_array_4[1],

str_snref_array_4[1],

str_sderf_array_4[1],

],[

"TC01",

str_time_array_4[2],

str_mnsmp_array_4[2],

str_mdsmp_array_4[2],

str_mnref_array_4[2],

str_mdref_array_4[2],

str_time_array_4[2],

str_snsmp_array_4[2],

str_sdsmp_array_4[2],

str_snref_array_4[2],

str_sderf_array_4[2],

],[

"TC02",

str_time_array_4[3],

str_mnsmp_array_4[3],

str_mdsmp_array_4[3],

str_mnref_array_4[3],

str_mdref_array_4[3],

str_time_array_4[3],

str_snsmp_array_4[3],

str_sdsmp_array_4[3],

str_snref_array_4[3],

str_sderf_array_4[3],

]

,[

"TC03",

str_time_array_4[4],

str_mnsmp_array_4[4],

str_mdsmp_array_4[4],

str_mnref_array_4[4],

str_mdref_array_4[4],

str_time_array_4[4],

str_snsmp_array_4[4],

str_sdsmp_array_4[4],

str_snref_array_4[4],

str_sderf_array_4[4],

],[

"TC04",

str_time_array_4[5],

str_mnsmp_array_4[5],

str_mdsmp_array_4[5],

str_mnref_array_4[5],

str_mdref_array_4[5],

str_time_array_4[5],

str_snsmp_array_4[5],

str_sdsmp_array_4[5],

str_snref_array_4[5],

str_sderf_array_4[5],

],[

"TC05",

str_time_array_4[6],

str_mnsmp_array_4[6],

str_mdsmp_array_4[6],

str_mnref_array_4[6],

str_mdref_array_4[6],

str_time_array_4[6],

str_snsmp_array_4[6],

str_sdsmp_array_4[6],

str_snref_array_4[6],

str_sderf_array_4[6],

],[

"TC06",

str_time_array_4[7],

str_mnsmp_array_4[7],

str_mdsmp_array_4[7],

str_mnref_array_4[7],

str_mdref_array_4[7],

str_time_array_4[7],

str_snsmp_array_4[7],

str_sdsmp_array_4[7],

str_snref_array_4[7],

str_sderf_array_4[7],

],[

"TC07",

str_time_array_4[8],

str_mnsmp_array_4[8],

str_mdsmp_array_4[8],

str_mnref_array_4[8],

str_mdref_array_4[8],

str_time_array_4[8],

str_snsmp_array_4[8],

str_sdsmp_array_4[8],

str_snref_array_4[8],

str_sderf_array_4[8],

],[

"TC08",

str_time_array_4[9],

str_mnsmp_array_4[9],

str_mdsmp_array_4[9],

str_mnref_array_4[9],

str_mdref_array_4[9],

str_time_array_4[9],

str_snsmp_array_4[9],

str_sdsmp_array_4[9],

str_snref_array_4[9],

str_sderf_array_4[9],

],[

"TC09",

str_time_array_4[10],

str_mnsmp_array_4[10],

str_mdsmp_array_4[10],

str_mnref_array_4[10],

str_mdref_array_4[10],

str_time_array_4[10],

str_snsmp_array_4[10],

str_sdsmp_array_4[10],

str_snref_array_4[10],

str_sderf_array_4[10],

],[

"TC10",

str_time_array_4[11],

str_mnsmp_array_4[11],

str_mdsmp_array_4[11],

str_mnref_array_4[11],

str_mdref_array_4[11],

str_time_array_4[11],

str_snsmp_array_4[11],

str_sdsmp_array_4[11],

str_snref_array_4[11],

str_sderf_array_4[11],

],[

"TC11",

str_time_array_4[12],

str_mnsmp_array_4[12],

str_mdsmp_array_4[12],

str_mnref_array_4[12],

str_mdref_array_4[12],

str_time_array_4[12],

str_snsmp_array_4[12],

str_sdsmp_array_4[12],

str_snref_array_4[12],

str_sderf_array_4[12],

],[

"TC12",

str_time_array_4[13],

str_mnsmp_array_4[13],

str_mdsmp_array_4[13],

str_mnref_array_4[13],

str_mdref_array_4[13],

str_time_array_4[13],

str_snsmp_array_4[13],

str_sdsmp_array_4[13],

str_snref_array_4[13],

str_sderf_array_4[13],

],[

"TC13",

str_time_array_4[14],

str_mnsmp_array_4[14],

str_mdsmp_array_4[14],

str_mnref_array_4[14],

str_mdref_array_4[14],

str_time_array_4[14],

str_snsmp_array_4[14],

str_sdsmp_array_4[14],

str_snref_array_4[14],

str_sderf_array_4[14],

],[

"TC14",

str_time_array_4[15],

str_mnsmp_array_4[15],

str_mdsmp_array_4[15],

str_mnref_array_4[15],

str_mdref_array_4[15],

str_time_array_4[15],

str_snsmp_array_4[15],

str_sdsmp_array_4[15],

str_snref_array_4[15],

str_sderf_array_4[15],

],[

"TC15",

str_time_array_4[16],

str_mnsmp_array_4[16],

str_mdsmp_array_4[16],

str_mnref_array_4[16],

str_mdref_array_4[16],

str_time_array_4[16],

str_snsmp_array_4[16],

str_sdsmp_array_4[16],

str_snref_array_4[16],

str_sderf_array_4[16],

],[

"TC16",

str_time_array_4[17],

str_mnsmp_array_4[17],

str_mdsmp_array_4[17],

str_mnref_array_4[17],

str_mdref_array_4[17],

str_time_array_4[17],

str_snsmp_array_4[17],

str_sdsmp_array_4[17],

str_snref_array_4[17],

str_sderf_array_4[17],

],[

"TC17",

str_time_array_4[18],

str_mnsmp_array_4[18],

str_mdsmp_array_4[18],

str_mnref_array_4[18],

str_mdref_array_4[18],

str_time_array_4[18],

str_snsmp_array_4[18],

str_sdsmp_array_4[18],

str_snref_array_4[18],

str_sderf_array_4[18],

],[

"TC18",

str_time_array_4[19],

str_mnsmp_array_4[19],

str_mdsmp_array_4[19],

str_mnref_array_4[19],

str_mdref_array_4[19],

str_time_array_4[19],

str_snsmp_array_4[19],

str_sdsmp_array_4[19],

str_snref_array_4[19],

str_sderf_array_4[19],

],[

"TC19",

str_time_array_4[20],

str_mnsmp_array_4[20],

str_mdsmp_array_4[20],

str_mnref_array_4[20],

str_mdref_array_4[20],

str_time_array_4[20],

str_snsmp_array_4[20],

str_sdsmp_array_4[20],

str_snref_array_4[20],

str_sderf_array_4[20],

],[

"TC20",

str_time_array_4[21],

str_mnsmp_array_4[21],

str_mdsmp_array_4[21],

str_mnref_array_4[21],

str_mdref_array_4[21],

str_time_array_4[21],

str_snsmp_array_4[21],

str_sdsmp_array_4[21],

str_snref_array_4[21],

str_sderf_array_4[21],

],[

"TC21",

str_time_array_4[22],

str_mnsmp_array_4[22],

str_mdsmp_array_4[22],

str_mnref_array_4[22],

str_mdref_array_4[22],

str_time_array_4[22],

str_snsmp_array_4[22],

str_sdsmp_array_4[22],

str_snref_array_4[22],

str_sderf_array_4[22],

],[

"TC22",

str_time_array_4[23],

str_mnsmp_array_4[23],

str_mdsmp_array_4[23],

str_mnref_array_4[23],

str_mdref_array_4[23],

str_time_array_4[23],

str_snsmp_array_4[23],

str_sdsmp_array_4[23],

str_snref_array_4[23],

str_sderf_array_4[23],

],[

"TC23",

str_time_array_4[24],

str_mnsmp_array_4[24],

str_mdsmp_array_4[24],

str_mnref_array_4[24],

str_mdref_array_4[24],

str_time_array_4[24],

str_snsmp_array_4[24],

str_sdsmp_array_4[24],

str_snref_array_4[24],

str_sderf_array_4[24],

],[

"TC24",

str_time_array_4[25],

str_mnsmp_array_4[25],

str_mdsmp_array_4[25],

str_mnref_array_4[25],

str_mdref_array_4[25],

str_time_array_4[25],

str_snsmp_array_4[25],

str_sdsmp_array_4[25],

str_snref_array_4[25],

str_sderf_array_4[25],

],[

"TC25",

str_time_array_4[26],

str_mnsmp_array_4[26],

str_mdsmp_array_4[26],

str_mnref_array_4[26],

str_mdref_array_4[26],

str_time_array_4[26],

str_snsmp_array_4[26],

str_sdsmp_array_4[26],

str_snref_array_4[26],

str_sderf_array_4[26],

],[

"TC26",

str_time_array_4[27],

str_mnsmp_array_4[27],

str_mdsmp_array_4[27],

str_mnref_array_4[27],

str_mdref_array_4[27],

str_time_array_4[27],

str_snsmp_array_4[27],

str_sdsmp_array_4[27],

str_snref_array_4[27],

str_sderf_array_4[27],

],[

"TC27",

str_time_array_4[28],

str_mnsmp_array_4[28],

str_mdsmp_array_4[28],

str_mnref_array_4[28],

str_mdref_array_4[28],

str_time_array_4[28],

str_snsmp_array_4[28],

str_sdsmp_array_4[28],

str_snref_array_4[28],

str_sderf_array_4[28],

],[

"TC28",

str_time_array_4[29],

str_mnsmp_array_4[29],

str_mdsmp_array_4[29],

str_mnref_array_4[29],

str_mdref_array_4[29],

str_time_array_4[29],

str_snsmp_array_4[29],

str_sdsmp_array_4[29],

str_snref_array_4[29],

str_sderf_array_4[29],

],[

"TC29",

str_time_array_4[30],

str_mnsmp_array_4[30],

str_mdsmp_array_4[30],

str_mnref_array_4[30],

str_mdref_array_4[30],

str_time_array_4[30],

str_snsmp_array_4[30],

str_sdsmp_array_4[30],

str_snref_array_4[30],

str_sderf_array_4[30],

],[

"TC30",

removeCR30(str_time_array_4[31]),

removeCR30(str_mnsmp_array_4[31]),

removeCR30(str_mdsmp_array_4[31]),

removeCR30(str_mnref_array_4[31]),

removeCR30(str_mdref_array_4[31]),

removeCR30(str_time_array_4[31]),

removeCR30(str_snsmp_array_4[31]),

removeCR30(str_sdsmp_array_4[31]),

removeCR30(str_snref_array_4[31]),

removeCR30(str_sderf_array_4[31]),

],[



]

,[

"[SINGLE]",

"CH5"

]

,[

"",

"Main",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

"Sub",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

],[

"WHITE",            

str_time_array_5[0],

str_mnsmp_array_5[0],

str_mdsmp_array_5[0],

str_mnref_array_5[0],

str_mdref_array_5[0],

str_time_array_5[0],

str_snsmp_array_5[0],

str_sdsmp_array_5[0],

str_snref_array_5[0],

str_sderf_array_5[0],

],[

"BLACK",            

str_time_array_5[1],

str_mnsmp_array_5[1],

str_mdsmp_array_5[1],

str_mnref_array_5[1],

str_mdref_array_5[1],

str_time_array_5[1],

str_snsmp_array_5[1],

str_sdsmp_array_5[1],

str_snref_array_5[1],

str_sderf_array_5[1],

],[

"TC01",

str_time_array_5[2],

str_mnsmp_array_5[2],

str_mdsmp_array_5[2],

str_mnref_array_5[2],

str_mdref_array_5[2],

str_time_array_5[2],

str_snsmp_array_5[2],

str_sdsmp_array_5[2],

str_snref_array_5[2],

str_sderf_array_5[2],

],[

"TC02",

str_time_array_5[3],

str_mnsmp_array_5[3],

str_mdsmp_array_5[3],

str_mnref_array_5[3],

str_mdref_array_5[3],

str_time_array_5[3],

str_snsmp_array_5[3],

str_sdsmp_array_5[3],

str_snref_array_5[3],

str_sderf_array_5[3],

]

,[

"TC03",

str_time_array_5[4],

str_mnsmp_array_5[4],

str_mdsmp_array_5[4],

str_mnref_array_5[4],

str_mdref_array_5[4],

str_time_array_5[4],

str_snsmp_array_5[4],

str_sdsmp_array_5[4],

str_snref_array_5[4],

str_sderf_array_5[4],

],[

"TC04",

str_time_array_5[5],

str_mnsmp_array_5[5],

str_mdsmp_array_5[5],

str_mnref_array_5[5],

str_mdref_array_5[5],

str_time_array_5[5],

str_snsmp_array_5[5],

str_sdsmp_array_5[5],

str_snref_array_5[5],

str_sderf_array_5[5],

],[

"TC05",

str_time_array_5[6],

str_mnsmp_array_5[6],

str_mdsmp_array_5[6],

str_mnref_array_5[6],

str_mdref_array_5[6],

str_time_array_5[6],

str_snsmp_array_5[6],

str_sdsmp_array_5[6],

str_snref_array_5[6],

str_sderf_array_5[6],

],[

"TC06",

str_time_array_5[7],

str_mnsmp_array_5[7],

str_mdsmp_array_5[7],

str_mnref_array_5[7],

str_mdref_array_5[7],

str_time_array_5[7],

str_snsmp_array_5[7],

str_sdsmp_array_5[7],

str_snref_array_5[7],

str_sderf_array_5[7],

],[

"TC07",

str_time_array_5[8],

str_mnsmp_array_5[8],

str_mdsmp_array_5[8],

str_mnref_array_5[8],

str_mdref_array_5[8],

str_time_array_5[8],

str_snsmp_array_5[8],

str_sdsmp_array_5[8],

str_snref_array_5[8],

str_sderf_array_5[8],

],[

"TC08",

str_time_array_5[9],

str_mnsmp_array_5[9],

str_mdsmp_array_5[9],

str_mnref_array_5[9],

str_mdref_array_5[9],

str_time_array_5[9],

str_snsmp_array_5[9],

str_sdsmp_array_5[9],

str_snref_array_5[9],

str_sderf_array_5[9],

],[

"TC09",

str_time_array_5[10],

str_mnsmp_array_5[10],

str_mdsmp_array_5[10],

str_mnref_array_5[10],

str_mdref_array_5[10],

str_time_array_5[10],

str_snsmp_array_5[10],

str_sdsmp_array_5[10],

str_snref_array_5[10],

str_sderf_array_5[10],

],[

"TC10",

str_time_array_5[11],

str_mnsmp_array_5[11],

str_mdsmp_array_5[11],

str_mnref_array_5[11],

str_mdref_array_5[11],

str_time_array_5[11],

str_snsmp_array_5[11],

str_sdsmp_array_5[11],

str_snref_array_5[11],

str_sderf_array_5[11],

],[

"TC11",

str_time_array_5[12],

str_mnsmp_array_5[12],

str_mdsmp_array_5[12],

str_mnref_array_5[12],

str_mdref_array_5[12],

str_time_array_5[12],

str_snsmp_array_5[12],

str_sdsmp_array_5[12],

str_snref_array_5[12],

str_sderf_array_5[12],

],[

"TC12",

str_time_array_5[13],

str_mnsmp_array_5[13],

str_mdsmp_array_5[13],

str_mnref_array_5[13],

str_mdref_array_5[13],

str_time_array_5[13],

str_snsmp_array_5[13],

str_sdsmp_array_5[13],

str_snref_array_5[13],

str_sderf_array_5[13],

],[

"TC13",

str_time_array_5[14],

str_mnsmp_array_5[14],

str_mdsmp_array_5[14],

str_mnref_array_5[14],

str_mdref_array_5[14],

str_time_array_5[14],

str_snsmp_array_5[14],

str_sdsmp_array_5[14],

str_snref_array_5[14],

str_sderf_array_5[14],

],[

"TC14",

str_time_array_5[15],

str_mnsmp_array_5[15],

str_mdsmp_array_5[15],

str_mnref_array_5[15],

str_mdref_array_5[15],

str_time_array_5[15],

str_snsmp_array_5[15],

str_sdsmp_array_5[15],

str_snref_array_5[15],

str_sderf_array_5[15],

],[

"TC15",

str_time_array_5[16],

str_mnsmp_array_5[16],

str_mdsmp_array_5[16],

str_mnref_array_5[16],

str_mdref_array_5[16],

str_time_array_5[16],

str_snsmp_array_5[16],

str_sdsmp_array_5[16],

str_snref_array_5[16],

str_sderf_array_5[16],

],[

"TC16",

str_time_array_5[17],

str_mnsmp_array_5[17],

str_mdsmp_array_5[17],

str_mnref_array_5[17],

str_mdref_array_5[17],

str_time_array_5[17],

str_snsmp_array_5[17],

str_sdsmp_array_5[17],

str_snref_array_5[17],

str_sderf_array_5[17],

],[

"TC17",

str_time_array_5[18],

str_mnsmp_array_5[18],

str_mdsmp_array_5[18],

str_mnref_array_5[18],

str_mdref_array_5[18],

str_time_array_5[18],

str_snsmp_array_5[18],

str_sdsmp_array_5[18],

str_snref_array_5[18],

str_sderf_array_5[18],

],[

"TC18",

str_time_array_5[19],

str_mnsmp_array_5[19],

str_mdsmp_array_5[19],

str_mnref_array_5[19],

str_mdref_array_5[19],

str_time_array_5[19],

str_snsmp_array_5[19],

str_sdsmp_array_5[19],

str_snref_array_5[19],

str_sderf_array_5[19],

],[

"TC19",

str_time_array_5[20],

str_mnsmp_array_5[20],

str_mdsmp_array_5[20],

str_mnref_array_5[20],

str_mdref_array_5[20],

str_time_array_5[20],

str_snsmp_array_5[20],

str_sdsmp_array_5[20],

str_snref_array_5[20],

str_sderf_array_5[20],

],[

"TC20",

str_time_array_5[21],

str_mnsmp_array_5[21],

str_mdsmp_array_5[21],

str_mnref_array_5[21],

str_mdref_array_5[21],

str_time_array_5[21],

str_snsmp_array_5[21],

str_sdsmp_array_5[21],

str_snref_array_5[21],

str_sderf_array_5[21],

],[

"TC21",

str_time_array_5[22],

str_mnsmp_array_5[22],

str_mdsmp_array_5[22],

str_mnref_array_5[22],

str_mdref_array_5[22],

str_time_array_5[22],

str_snsmp_array_5[22],

str_sdsmp_array_5[22],

str_snref_array_5[22],

str_sderf_array_5[22],

],[

"TC22",

str_time_array_5[23],

str_mnsmp_array_5[23],

str_mdsmp_array_5[23],

str_mnref_array_5[23],

str_mdref_array_5[23],

str_time_array_5[23],

str_snsmp_array_5[23],

str_sdsmp_array_5[23],

str_snref_array_5[23],

str_sderf_array_5[23],

],[

"TC23",

str_time_array_5[24],

str_mnsmp_array_5[24],

str_mdsmp_array_5[24],

str_mnref_array_5[24],

str_mdref_array_5[24],

str_time_array_5[24],

str_snsmp_array_5[24],

str_sdsmp_array_5[24],

str_snref_array_5[24],

str_sderf_array_5[24],

],[

"TC24",

str_time_array_5[25],

str_mnsmp_array_5[25],

str_mdsmp_array_5[25],

str_mnref_array_5[25],

str_mdref_array_5[25],

str_time_array_5[25],

str_snsmp_array_5[25],

str_sdsmp_array_5[25],

str_snref_array_5[25],

str_sderf_array_5[25],

],[

"TC25",

str_time_array_5[26],

str_mnsmp_array_5[26],

str_mdsmp_array_5[26],

str_mnref_array_5[26],

str_mdref_array_5[26],

str_time_array_5[26],

str_snsmp_array_5[26],

str_sdsmp_array_5[26],

str_snref_array_5[26],

str_sderf_array_5[26],

],[

"TC26",

str_time_array_5[27],

str_mnsmp_array_5[27],

str_mdsmp_array_5[27],

str_mnref_array_5[27],

str_mdref_array_5[27],

str_time_array_5[27],

str_snsmp_array_5[27],

str_sdsmp_array_5[27],

str_snref_array_5[27],

str_sderf_array_5[27],

],[

"TC27",

str_time_array_5[28],

str_mnsmp_array_5[28],

str_mdsmp_array_5[28],

str_mnref_array_5[28],

str_mdref_array_5[28],

str_time_array_5[28],

str_snsmp_array_5[28],

str_sdsmp_array_5[28],

str_snref_array_5[28],

str_sderf_array_5[28],

],[

"TC28",

str_time_array_5[29],

str_mnsmp_array_5[29],

str_mdsmp_array_5[29],

str_mnref_array_5[29],

str_mdref_array_5[29],

str_time_array_5[29],

str_snsmp_array_5[29],

str_sdsmp_array_5[29],

str_snref_array_5[29],

str_sderf_array_5[29],

],[

"TC29",

str_time_array_5[30],

str_mnsmp_array_5[30],

str_mdsmp_array_5[30],

str_mnref_array_5[30],

str_mdref_array_5[30],

str_time_array_5[30],

str_snsmp_array_5[30],

str_sdsmp_array_5[30],

str_snref_array_5[30],

str_sderf_array_5[30],

],[

"TC30",

singleremoveapce30(str_time_array_5[31]),

singleremoveapce30(str_mnsmp_array_5[31]),

singleremoveapce30(str_mdsmp_array_5[31]),

singleremoveapce30(str_mnref_array_5[31]),

singleremoveapce30(str_mdref_array_5[31]),

singleremoveapce30(str_time_array_5[31]),

singleremoveapce30(str_snsmp_array_5[31]),

singleremoveapce30(str_sdsmp_array_5[31]),

singleremoveapce30(str_snref_array_5[31]),

singleremoveapce30(str_sderf_array_5[31]),

],[



]

,[

"[SINGLE]",

"CH6"

]

,[

"",

"Main",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

"Sub",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

],[

"WHITE",            

str_time_array_6[0],

str_mnsmp_array_6[0],

str_mdsmp_array_6[0],

str_mnref_array_6[0],

str_mdref_array_6[0],

str_time_array_6[0],

str_snsmp_array_6[0],

str_sdsmp_array_6[0],

str_snref_array_6[0],

str_sderf_array_6[0],

],[

"BLACK",            

str_time_array_6[1],

str_mnsmp_array_6[1],

str_mdsmp_array_6[1],

str_mnref_array_6[1],

str_mdref_array_6[1],

str_time_array_6[1],

str_snsmp_array_6[1],

str_sdsmp_array_6[1],

str_snref_array_6[1],

str_sderf_array_6[1],

],[

"TC01",

str_time_array_6[2],

str_mnsmp_array_6[2],

str_mdsmp_array_6[2],

str_mnref_array_6[2],

str_mdref_array_6[2],

str_time_array_6[2],

str_snsmp_array_6[2],

str_sdsmp_array_6[2],

str_snref_array_6[2],

str_sderf_array_6[2],

],[

"TC02",

str_time_array_6[3],

str_mnsmp_array_6[3],

str_mdsmp_array_6[3],

str_mnref_array_6[3],

str_mdref_array_6[3],

str_time_array_6[3],

str_snsmp_array_6[3],

str_sdsmp_array_6[3],

str_snref_array_6[3],

str_sderf_array_6[3],

]

,[

"TC03",

str_time_array_6[4],

str_mnsmp_array_6[4],

str_mdsmp_array_6[4],

str_mnref_array_6[4],

str_mdref_array_6[4],

str_time_array_6[4],

str_snsmp_array_6[4],

str_sdsmp_array_6[4],

str_snref_array_6[4],

str_sderf_array_6[4],

],[

"TC04",

str_time_array_6[5],

str_mnsmp_array_6[5],

str_mdsmp_array_6[5],

str_mnref_array_6[5],

str_mdref_array_6[5],

str_time_array_6[5],

str_snsmp_array_6[5],

str_sdsmp_array_6[5],

str_snref_array_6[5],

str_sderf_array_6[5],

],[

"TC05",

str_time_array_6[6],

str_mnsmp_array_6[6],

str_mdsmp_array_6[6],

str_mnref_array_6[6],

str_mdref_array_6[6],

str_time_array_6[6],

str_snsmp_array_6[6],

str_sdsmp_array_6[6],

str_snref_array_6[6],

str_sderf_array_6[6],

],[

"TC06",

str_time_array_6[7],

str_mnsmp_array_6[7],

str_mdsmp_array_6[7],

str_mnref_array_6[7],

str_mdref_array_6[7],

str_time_array_6[7],

str_snsmp_array_6[7],

str_sdsmp_array_6[7],

str_snref_array_6[7],

str_sderf_array_6[7],

],[

"TC07",

str_time_array_6[8],

str_mnsmp_array_6[8],

str_mdsmp_array_6[8],

str_mnref_array_6[8],

str_mdref_array_6[8],

str_time_array_6[8],

str_snsmp_array_6[8],

str_sdsmp_array_6[8],

str_snref_array_6[8],

str_sderf_array_6[8],

],[

"TC08",

str_time_array_6[9],

str_mnsmp_array_6[9],

str_mdsmp_array_6[9],

str_mnref_array_6[9],

str_mdref_array_6[9],

str_time_array_6[9],

str_snsmp_array_6[9],

str_sdsmp_array_6[9],

str_snref_array_6[9],

str_sderf_array_6[9],

],[

"TC09",

str_time_array_6[10],

str_mnsmp_array_6[10],

str_mdsmp_array_6[10],

str_mnref_array_6[10],

str_mdref_array_6[10],

str_time_array_6[10],

str_snsmp_array_6[10],

str_sdsmp_array_6[10],

str_snref_array_6[10],

str_sderf_array_6[10],

],[

"TC10",

str_time_array_6[11],

str_mnsmp_array_6[11],

str_mdsmp_array_6[11],

str_mnref_array_6[11],

str_mdref_array_6[11],

str_time_array_6[11],

str_snsmp_array_6[11],

str_sdsmp_array_6[11],

str_snref_array_6[11],

str_sderf_array_6[11],

],[

"TC11",

str_time_array_6[12],

str_mnsmp_array_6[12],

str_mdsmp_array_6[12],

str_mnref_array_6[12],

str_mdref_array_6[12],

str_time_array_6[12],

str_snsmp_array_6[12],

str_sdsmp_array_6[12],

str_snref_array_6[12],

str_sderf_array_6[12],

],[

"TC12",

str_time_array_6[13],

str_mnsmp_array_6[13],

str_mdsmp_array_6[13],

str_mnref_array_6[13],

str_mdref_array_6[13],

str_time_array_6[13],

str_snsmp_array_6[13],

str_sdsmp_array_6[13],

str_snref_array_6[13],

str_sderf_array_6[13],

],[

"TC13",

str_time_array_6[14],

str_mnsmp_array_6[14],

str_mdsmp_array_6[14],

str_mnref_array_6[14],

str_mdref_array_6[14],

str_time_array_6[14],

str_snsmp_array_6[14],

str_sdsmp_array_6[14],

str_snref_array_6[14],

str_sderf_array_6[14],

],[

"TC14",

str_time_array_6[15],

str_mnsmp_array_6[15],

str_mdsmp_array_6[15],

str_mnref_array_6[15],

str_mdref_array_6[15],

str_time_array_6[15],

str_snsmp_array_6[15],

str_sdsmp_array_6[15],

str_snref_array_6[15],

str_sderf_array_6[15],

],[

"TC15",

str_time_array_6[16],

str_mnsmp_array_6[16],

str_mdsmp_array_6[16],

str_mnref_array_6[16],

str_mdref_array_6[16],

str_time_array_6[16],

str_snsmp_array_6[16],

str_sdsmp_array_6[16],

str_snref_array_6[16],

str_sderf_array_6[16],

],[

"TC16",

str_time_array_6[17],

str_mnsmp_array_6[17],

str_mdsmp_array_6[17],

str_mnref_array_6[17],

str_mdref_array_6[17],

str_time_array_6[17],

str_snsmp_array_6[17],

str_sdsmp_array_6[17],

str_snref_array_6[17],

str_sderf_array_6[17],

],[

"TC17",

str_time_array_6[18],

str_mnsmp_array_6[18],

str_mdsmp_array_6[18],

str_mnref_array_6[18],

str_mdref_array_6[18],

str_time_array_6[18],

str_snsmp_array_6[18],

str_sdsmp_array_6[18],

str_snref_array_6[18],

str_sderf_array_6[18],

],[

"TC18",

str_time_array_6[19],

str_mnsmp_array_6[19],

str_mdsmp_array_6[19],

str_mnref_array_6[19],

str_mdref_array_6[19],

str_time_array_6[19],

str_snsmp_array_6[19],

str_sdsmp_array_6[19],

str_snref_array_6[19],

str_sderf_array_6[19],

],[

"TC19",

str_time_array_6[20],

str_mnsmp_array_6[20],

str_mdsmp_array_6[20],

str_mnref_array_6[20],

str_mdref_array_6[20],

str_time_array_6[20],

str_snsmp_array_6[20],

str_sdsmp_array_6[20],

str_snref_array_6[20],

str_sderf_array_6[20],

],[

"TC20",

str_time_array_6[21],

str_mnsmp_array_6[21],

str_mdsmp_array_6[21],

str_mnref_array_6[21],

str_mdref_array_6[21],

str_time_array_6[21],

str_snsmp_array_6[21],

str_sdsmp_array_6[21],

str_snref_array_6[21],

str_sderf_array_6[21],

],[

"TC21",

str_time_array_6[22],

str_mnsmp_array_6[22],

str_mdsmp_array_6[22],

str_mnref_array_6[22],

str_mdref_array_6[22],

str_time_array_6[22],

str_snsmp_array_6[22],

str_sdsmp_array_6[22],

str_snref_array_6[22],

str_sderf_array_6[22],

],[

"TC22",

str_time_array_6[23],

str_mnsmp_array_6[23],

str_mdsmp_array_6[23],

str_mnref_array_6[23],

str_mdref_array_6[23],

str_time_array_6[23],

str_snsmp_array_6[23],

str_sdsmp_array_6[23],

str_snref_array_6[23],

str_sderf_array_6[23],

],[

"TC23",

str_time_array_6[24],

str_mnsmp_array_6[24],

str_mdsmp_array_6[24],

str_mnref_array_6[24],

str_mdref_array_6[24],

str_time_array_6[24],

str_snsmp_array_6[24],

str_sdsmp_array_6[24],

str_snref_array_6[24],

str_sderf_array_6[24],

],[

"TC24",

str_time_array_6[25],

str_mnsmp_array_6[25],

str_mdsmp_array_6[25],

str_mnref_array_6[25],

str_mdref_array_6[25],

str_time_array_6[25],

str_snsmp_array_6[25],

str_sdsmp_array_6[25],

str_snref_array_6[25],

str_sderf_array_6[25],

],[

"TC25",

str_time_array_6[26],

str_mnsmp_array_6[26],

str_mdsmp_array_6[26],

str_mnref_array_6[26],

str_mdref_array_6[26],

str_time_array_6[26],

str_snsmp_array_6[26],

str_sdsmp_array_6[26],

str_snref_array_6[26],

str_sderf_array_6[26],

],[

"TC26",

str_time_array_6[27],

str_mnsmp_array_6[27],

str_mdsmp_array_6[27],

str_mnref_array_6[27],

str_mdref_array_6[27],

str_time_array_6[27],

str_snsmp_array_6[27],

str_sdsmp_array_6[27],

str_snref_array_6[27],

str_sderf_array_6[27],

],[

"TC27",

str_time_array_6[28],

str_mnsmp_array_6[28],

str_mdsmp_array_6[28],

str_mnref_array_6[28],

str_mdref_array_6[28],

str_time_array_6[28],

str_snsmp_array_6[28],

str_sdsmp_array_6[28],

str_snref_array_6[28],

str_sderf_array_6[28],

],[

"TC28",

str_time_array_6[29],

str_mnsmp_array_6[29],

str_mdsmp_array_6[29],

str_mnref_array_6[29],

str_mdref_array_6[29],

str_time_array_6[29],

str_snsmp_array_6[29],

str_sdsmp_array_6[29],

str_snref_array_6[29],

str_sderf_array_6[29],

],[

"TC29",

str_time_array_6[30],

str_mnsmp_array_6[30],

str_mdsmp_array_6[30],

str_mnref_array_6[30],

str_mdref_array_6[30],

str_time_array_6[30],

str_snsmp_array_6[30],

str_sdsmp_array_6[30],

str_snref_array_6[30],

str_sderf_array_6[30],

],[

"TC30",

singleremoveapce30(str_time_array_6[31]),

singleremoveapce30(str_mnsmp_array_6[31]),

singleremoveapce30(str_mdsmp_array_6[31]),

singleremoveapce30(str_mnref_array_6[31]),

singleremoveapce30(str_mdref_array_6[31]),

singleremoveapce30(str_time_array_6[31]),

singleremoveapce30(str_snsmp_array_6[31]),

singleremoveapce30(str_sdsmp_array_6[31]),

singleremoveapce30(str_snref_array_6[31]),

singleremoveapce30(str_sderf_array_6[31]),

],[



]

,[

"[MULTI]",

"CH7"

]

,[

"",

"Main",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

"Sub",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

],[

"WHITE",            

multi_str_time_array_1[0],

multi_str_mnsmp_array_1[0],

multi_str_mdsmp_array_1[0],

multi_str_mnref_array_1[0],

multi_str_mdref_array_1[0],

multi_str_time_array_1[0],

multi_str_snsmp_array_1[0],

multi_str_sdsmp_array_1[0],

multi_str_snref_array_1[0],

multi_str_sderf_array_1[0],

],[

"BLACK",            

multi_str_time_array_1[1],

multi_str_mnsmp_array_1[1],

multi_str_mdsmp_array_1[1],

multi_str_mnref_array_1[1],

multi_str_mdref_array_1[1],

multi_str_time_array_1[1],

multi_str_snsmp_array_1[1],

multi_str_sdsmp_array_1[1],

multi_str_snref_array_1[1],

multi_str_sderf_array_1[1],

],[

"TC01",

multi_str_time_array_1[2],

multi_str_mnsmp_array_1[2],

multi_str_mdsmp_array_1[2],

multi_str_mnref_array_1[2],

multi_str_mdref_array_1[2],

multi_str_time_array_1[2],

multi_str_snsmp_array_1[2],

multi_str_sdsmp_array_1[2],

multi_str_snref_array_1[2],

multi_str_sderf_array_1[2],

],[

"TC02",

multi_str_time_array_1[3],

multi_str_mnsmp_array_1[3],

multi_str_mdsmp_array_1[3],

multi_str_mnref_array_1[3],

multi_str_mdref_array_1[3],

multi_str_time_array_1[3],

multi_str_snsmp_array_1[3],

multi_str_sdsmp_array_1[3],

multi_str_snref_array_1[3],

multi_str_sderf_array_1[3],

]

,[

"TC03",

multi_str_time_array_1[4],

multi_str_mnsmp_array_1[4],

multi_str_mdsmp_array_1[4],

multi_str_mnref_array_1[4],

multi_str_mdref_array_1[4],

multi_str_time_array_1[4],

multi_str_snsmp_array_1[4],

multi_str_sdsmp_array_1[4],

multi_str_snref_array_1[4],

multi_str_sderf_array_1[4],

],[

"TC04",

multi_str_time_array_1[5],

multi_str_mnsmp_array_1[5],

multi_str_mdsmp_array_1[5],

multi_str_mnref_array_1[5],

multi_str_mdref_array_1[5],

multi_str_time_array_1[5],

multi_str_snsmp_array_1[5],

multi_str_sdsmp_array_1[5],

multi_str_snref_array_1[5],

multi_str_sderf_array_1[5],

],[

"TC05",

multi_str_time_array_1[6],

multi_str_mnsmp_array_1[6],

multi_str_mdsmp_array_1[6],

multi_str_mnref_array_1[6],

multi_str_mdref_array_1[6],

multi_str_time_array_1[6],

multi_str_snsmp_array_1[6],

multi_str_sdsmp_array_1[6],

multi_str_snref_array_1[6],

multi_str_sderf_array_1[6],

],[

"TC06",

multi_str_time_array_1[7],

multi_str_mnsmp_array_1[7],

multi_str_mdsmp_array_1[7],

multi_str_mnref_array_1[7],

multi_str_mdref_array_1[7],

multi_str_time_array_1[7],

multi_str_snsmp_array_1[7],

multi_str_sdsmp_array_1[7],

multi_str_snref_array_1[7],

multi_str_sderf_array_1[7],

],[

"TC07",

multi_str_time_array_1[8],

multi_str_mnsmp_array_1[8],

multi_str_mdsmp_array_1[8],

multi_str_mnref_array_1[8],

multi_str_mdref_array_1[8],

multi_str_time_array_1[8],

multi_str_snsmp_array_1[8],

multi_str_sdsmp_array_1[8],

multi_str_snref_array_1[8],

multi_str_sderf_array_1[8],

],[

"TC08",

multi_str_time_array_1[9],

multi_str_mnsmp_array_1[9],

multi_str_mdsmp_array_1[9],

multi_str_mnref_array_1[9],

multi_str_mdref_array_1[9],

multi_str_time_array_1[9],

multi_str_snsmp_array_1[9],

multi_str_sdsmp_array_1[9],

multi_str_snref_array_1[9],

multi_str_sderf_array_1[9],

],[

"TC09",

multi_str_time_array_1[10],

multi_str_mnsmp_array_1[10],

multi_str_mdsmp_array_1[10],

multi_str_mnref_array_1[10],

multi_str_mdref_array_1[10],

multi_str_time_array_1[10],

multi_str_snsmp_array_1[10],

multi_str_sdsmp_array_1[10],

multi_str_snref_array_1[10],

multi_str_sderf_array_1[10],

],[

"TC10",

multi_str_time_array_1[11],

multi_str_mnsmp_array_1[11],

multi_str_mdsmp_array_1[11],

multi_str_mnref_array_1[11],

multi_str_mdref_array_1[11],

multi_str_time_array_1[11],

multi_str_snsmp_array_1[11],

multi_str_sdsmp_array_1[11],

multi_str_snref_array_1[11],

multi_str_sderf_array_1[11],

],[

"TC11",

multi_str_time_array_1[12],

multi_str_mnsmp_array_1[12],

multi_str_mdsmp_array_1[12],

multi_str_mnref_array_1[12],

multi_str_mdref_array_1[12],

multi_str_time_array_1[12],

multi_str_snsmp_array_1[12],

multi_str_sdsmp_array_1[12],

multi_str_snref_array_1[12],

multi_str_sderf_array_1[12],

],[

"TC12",

multi_str_time_array_1[13],

multi_str_mnsmp_array_1[13],

multi_str_mdsmp_array_1[13],

multi_str_mnref_array_1[13],

multi_str_mdref_array_1[13],

multi_str_time_array_1[13],

multi_str_snsmp_array_1[13],

multi_str_sdsmp_array_1[13],

multi_str_snref_array_1[13],

multi_str_sderf_array_1[13],

],[

"TC13",

multi_str_time_array_1[14],

multi_str_mnsmp_array_1[14],

multi_str_mdsmp_array_1[14],

multi_str_mnref_array_1[14],

multi_str_mdref_array_1[14],

multi_str_time_array_1[14],

multi_str_snsmp_array_1[14],

multi_str_sdsmp_array_1[14],

multi_str_snref_array_1[14],

multi_str_sderf_array_1[14],

],[

"TC14",

multi_str_time_array_1[15],

multi_str_mnsmp_array_1[15],

multi_str_mdsmp_array_1[15],

multi_str_mnref_array_1[15],

multi_str_mdref_array_1[15],

multi_str_time_array_1[15],

multi_str_snsmp_array_1[15],

multi_str_sdsmp_array_1[15],

multi_str_snref_array_1[15],

multi_str_sderf_array_1[15],

],[

"TC15",

multi_str_time_array_1[16],

multi_str_mnsmp_array_1[16],

multi_str_mdsmp_array_1[16],

multi_str_mnref_array_1[16],

multi_str_mdref_array_1[16],

multi_str_time_array_1[16],

multi_str_snsmp_array_1[16],

multi_str_sdsmp_array_1[16],

multi_str_snref_array_1[16],

multi_str_sderf_array_1[16],

],[

"TC16",

multi_str_time_array_1[17],

multi_str_mnsmp_array_1[17],

multi_str_mdsmp_array_1[17],

multi_str_mnref_array_1[17],

multi_str_mdref_array_1[17],

multi_str_time_array_1[17],

multi_str_snsmp_array_1[17],

multi_str_sdsmp_array_1[17],

multi_str_snref_array_1[17],

multi_str_sderf_array_1[17],

],[

"TC17",

multi_str_time_array_1[18],

multi_str_mnsmp_array_1[18],

multi_str_mdsmp_array_1[18],

multi_str_mnref_array_1[18],

multi_str_mdref_array_1[18],

multi_str_time_array_1[18],

multi_str_snsmp_array_1[18],

multi_str_sdsmp_array_1[18],

multi_str_snref_array_1[18],

multi_str_sderf_array_1[18],

],[

"TC18",

multi_str_time_array_1[19],

multi_str_mnsmp_array_1[19],

multi_str_mdsmp_array_1[19],

multi_str_mnref_array_1[19],

multi_str_mdref_array_1[19],

multi_str_time_array_1[19],

multi_str_snsmp_array_1[19],

multi_str_sdsmp_array_1[19],

multi_str_snref_array_1[19],

multi_str_sderf_array_1[19],

],[

"TC19",

multi_str_time_array_1[20],

multi_str_mnsmp_array_1[20],

multi_str_mdsmp_array_1[20],

multi_str_mnref_array_1[20],

multi_str_mdref_array_1[20],

multi_str_time_array_1[20],

multi_str_snsmp_array_1[20],

multi_str_sdsmp_array_1[20],

multi_str_snref_array_1[20],

multi_str_sderf_array_1[20],

],[

"TC20",

multi_str_time_array_1[21],

multi_str_mnsmp_array_1[21],

multi_str_mdsmp_array_1[21],

multi_str_mnref_array_1[21],

multi_str_mdref_array_1[21],

multi_str_time_array_1[21],

multi_str_snsmp_array_1[21],

multi_str_sdsmp_array_1[21],

multi_str_snref_array_1[21],

multi_str_sderf_array_1[21],

],[

"TC21",

multi_str_time_array_1[22],

multi_str_mnsmp_array_1[22],

multi_str_mdsmp_array_1[22],

multi_str_mnref_array_1[22],

multi_str_mdref_array_1[22],

multi_str_time_array_1[22],

multi_str_snsmp_array_1[22],

multi_str_sdsmp_array_1[22],

multi_str_snref_array_1[22],

multi_str_sderf_array_1[22],

],[

"TC22",

multi_str_time_array_1[23],

multi_str_mnsmp_array_1[23],

multi_str_mdsmp_array_1[23],

multi_str_mnref_array_1[23],

multi_str_mdref_array_1[23],

multi_str_time_array_1[23],

multi_str_snsmp_array_1[23],

multi_str_sdsmp_array_1[23],

multi_str_snref_array_1[23],

multi_str_sderf_array_1[23],

],[

"TC23",

multi_str_time_array_1[24],

multi_str_mnsmp_array_1[24],

multi_str_mdsmp_array_1[24],

multi_str_mnref_array_1[24],

multi_str_mdref_array_1[24],

multi_str_time_array_1[24],

multi_str_snsmp_array_1[24],

multi_str_sdsmp_array_1[24],

multi_str_snref_array_1[24],

multi_str_sderf_array_1[24],

],[

"TC24",

multi_str_time_array_1[25],

multi_str_mnsmp_array_1[25],

multi_str_mdsmp_array_1[25],

multi_str_mnref_array_1[25],

multi_str_mdref_array_1[25],

multi_str_time_array_1[25],

multi_str_snsmp_array_1[25],

multi_str_sdsmp_array_1[25],

multi_str_snref_array_1[25],

multi_str_sderf_array_1[25],

],[

"TC25",

multi_str_time_array_1[26],

multi_str_mnsmp_array_1[26],

multi_str_mdsmp_array_1[26],

multi_str_mnref_array_1[26],

multi_str_mdref_array_1[26],

multi_str_time_array_1[26],

multi_str_snsmp_array_1[26],

multi_str_sdsmp_array_1[26],

multi_str_snref_array_1[26],

multi_str_sderf_array_1[26],

],[

"TC26",

multi_str_time_array_1[27],

multi_str_mnsmp_array_1[27],

multi_str_mdsmp_array_1[27],

multi_str_mnref_array_1[27],

multi_str_mdref_array_1[27],

multi_str_time_array_1[27],

multi_str_snsmp_array_1[27],

multi_str_sdsmp_array_1[27],

multi_str_snref_array_1[27],

multi_str_sderf_array_1[27],

],[

"TC27",

multi_str_time_array_1[28],

multi_str_mnsmp_array_1[28],

multi_str_mdsmp_array_1[28],

multi_str_mnref_array_1[28],

multi_str_mdref_array_1[28],

multi_str_time_array_1[28],

multi_str_snsmp_array_1[28],

multi_str_sdsmp_array_1[28],

multi_str_snref_array_1[28],

multi_str_sderf_array_1[28],

],[

"TC28",

multi_str_time_array_1[29],

multi_str_mnsmp_array_1[29],

multi_str_mdsmp_array_1[29],

multi_str_mnref_array_1[29],

multi_str_mdref_array_1[29],

multi_str_time_array_1[29],

multi_str_snsmp_array_1[29],

multi_str_sdsmp_array_1[29],

multi_str_snref_array_1[29],

multi_str_sderf_array_1[29],

],[

"TC29",

multi_str_time_array_1[30],

multi_str_mnsmp_array_1[30],

multi_str_mdsmp_array_1[30],

multi_str_mnref_array_1[30],

multi_str_mdref_array_1[30],

multi_str_time_array_1[30],

multi_str_snsmp_array_1[30],

multi_str_sdsmp_array_1[30],

multi_str_snref_array_1[30],

multi_str_sderf_array_1[30],

],[

"TC30",

removeCR30(multi_str_time_array_1[31]),

removeCR30(multi_str_mnsmp_array_1[31]),

removeCR30(multi_str_mdsmp_array_1[31]),

removeCR30(multi_str_mnref_array_1[31]),

removeCR30(multi_str_mdref_array_1[31]),

removeCR30(multi_str_time_array_1[31]),

removeCR30(multi_str_snsmp_array_1[31]),

removeCR30(multi_str_sdsmp_array_1[31]),

removeCR30(multi_str_snref_array_1[31]),

removeCR30(multi_str_sderf_array_1[31]),

],[



],[

"[MULTI]",

"CH8"

]

,[

"",

"Main",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

"Sub",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

],[

"WHITE",            

multi_str_time_array_2[0],

multi_str_mnsmp_array_2[0],

multi_str_mdsmp_array_2[0],

multi_str_mnref_array_2[0],

multi_str_mdref_array_2[0],

multi_str_time_array_2[0],

multi_str_snsmp_array_2[0],

multi_str_sdsmp_array_2[0],

multi_str_snref_array_2[0],

multi_str_sderf_array_2[0],

],[

"BLACK",            

multi_str_time_array_2[1],

multi_str_mnsmp_array_2[1],

multi_str_mdsmp_array_2[1],

multi_str_mnref_array_2[1],

multi_str_mdref_array_2[1],

multi_str_time_array_2[1],

multi_str_snsmp_array_2[1],

multi_str_sdsmp_array_2[1],

multi_str_snref_array_2[1],

multi_str_sderf_array_2[1],

],[

"TC01",

multi_str_time_array_2[2],

multi_str_mnsmp_array_2[2],

multi_str_mdsmp_array_2[2],

multi_str_mnref_array_2[2],

multi_str_mdref_array_2[2],

multi_str_time_array_2[2],

multi_str_snsmp_array_2[2],

multi_str_sdsmp_array_2[2],

multi_str_snref_array_2[2],

multi_str_sderf_array_2[2],

],[

"TC02",

multi_str_time_array_2[3],

multi_str_mnsmp_array_2[3],

multi_str_mdsmp_array_2[3],

multi_str_mnref_array_2[3],

multi_str_mdref_array_2[3],

multi_str_time_array_2[3],

multi_str_snsmp_array_2[3],

multi_str_sdsmp_array_2[3],

multi_str_snref_array_2[3],

multi_str_sderf_array_2[3],

]

,[

"TC03",

multi_str_time_array_2[4],

multi_str_mnsmp_array_2[4],

multi_str_mdsmp_array_2[4],

multi_str_mnref_array_2[4],

multi_str_mdref_array_2[4],

multi_str_time_array_2[4],

multi_str_snsmp_array_2[4],

multi_str_sdsmp_array_2[4],

multi_str_snref_array_2[4],

multi_str_sderf_array_2[4],

],[

"TC04",

multi_str_time_array_2[5],

multi_str_mnsmp_array_2[5],

multi_str_mdsmp_array_2[5],

multi_str_mnref_array_2[5],

multi_str_mdref_array_2[5],

multi_str_time_array_2[5],

multi_str_snsmp_array_2[5],

multi_str_sdsmp_array_2[5],

multi_str_snref_array_2[5],

multi_str_sderf_array_2[5],

],[

"TC05",

multi_str_time_array_2[6],

multi_str_mnsmp_array_2[6],

multi_str_mdsmp_array_2[6],

multi_str_mnref_array_2[6],

multi_str_mdref_array_2[6],

multi_str_time_array_2[6],

multi_str_snsmp_array_2[6],

multi_str_sdsmp_array_2[6],

multi_str_snref_array_2[6],

multi_str_sderf_array_2[6],

],[

"TC06",

multi_str_time_array_2[7],

multi_str_mnsmp_array_2[7],

multi_str_mdsmp_array_2[7],

multi_str_mnref_array_2[7],

multi_str_mdref_array_2[7],

multi_str_time_array_2[7],

multi_str_snsmp_array_2[7],

multi_str_sdsmp_array_2[7],

multi_str_snref_array_2[7],

multi_str_sderf_array_2[7],

],[

"TC07",

multi_str_time_array_2[8],

multi_str_mnsmp_array_2[8],

multi_str_mdsmp_array_2[8],

multi_str_mnref_array_2[8],

multi_str_mdref_array_2[8],

multi_str_time_array_2[8],

multi_str_snsmp_array_2[8],

multi_str_sdsmp_array_2[8],

multi_str_snref_array_2[8],

multi_str_sderf_array_2[8],

],[

"TC08",

multi_str_time_array_2[9],

multi_str_mnsmp_array_2[9],

multi_str_mdsmp_array_2[9],

multi_str_mnref_array_2[9],

multi_str_mdref_array_2[9],

multi_str_time_array_2[9],

multi_str_snsmp_array_2[9],

multi_str_sdsmp_array_2[9],

multi_str_snref_array_2[9],

multi_str_sderf_array_2[9],

],[

"TC09",

multi_str_time_array_2[10],

multi_str_mnsmp_array_2[10],

multi_str_mdsmp_array_2[10],

multi_str_mnref_array_2[10],

multi_str_mdref_array_2[10],

multi_str_time_array_2[10],

multi_str_snsmp_array_2[10],

multi_str_sdsmp_array_2[10],

multi_str_snref_array_2[10],

multi_str_sderf_array_2[10],

],[

"TC10",

multi_str_time_array_2[11],

multi_str_mnsmp_array_2[11],

multi_str_mdsmp_array_2[11],

multi_str_mnref_array_2[11],

multi_str_mdref_array_2[11],

multi_str_time_array_2[11],

multi_str_snsmp_array_2[11],

multi_str_sdsmp_array_2[11],

multi_str_snref_array_2[11],

multi_str_sderf_array_2[11],

],[

"TC11",

multi_str_time_array_2[12],

multi_str_mnsmp_array_2[12],

multi_str_mdsmp_array_2[12],

multi_str_mnref_array_2[12],

multi_str_mdref_array_2[12],

multi_str_time_array_2[12],

multi_str_snsmp_array_2[12],

multi_str_sdsmp_array_2[12],

multi_str_snref_array_2[12],

multi_str_sderf_array_2[12],

],[

"TC12",

multi_str_time_array_2[13],

multi_str_mnsmp_array_2[13],

multi_str_mdsmp_array_2[13],

multi_str_mnref_array_2[13],

multi_str_mdref_array_2[13],

multi_str_time_array_2[13],

multi_str_snsmp_array_2[13],

multi_str_sdsmp_array_2[13],

multi_str_snref_array_2[13],

multi_str_sderf_array_2[13],

],[

"TC13",

multi_str_time_array_2[14],

multi_str_mnsmp_array_2[14],

multi_str_mdsmp_array_2[14],

multi_str_mnref_array_2[14],

multi_str_mdref_array_2[14],

multi_str_time_array_2[14],

multi_str_snsmp_array_2[14],

multi_str_sdsmp_array_2[14],

multi_str_snref_array_2[14],

multi_str_sderf_array_2[14],

],[

"TC14",

multi_str_time_array_2[15],

multi_str_mnsmp_array_2[15],

multi_str_mdsmp_array_2[15],

multi_str_mnref_array_2[15],

multi_str_mdref_array_2[15],

multi_str_time_array_2[15],

multi_str_snsmp_array_2[15],

multi_str_sdsmp_array_2[15],

multi_str_snref_array_2[15],

multi_str_sderf_array_2[15],

],[

"TC15",

multi_str_time_array_2[16],

multi_str_mnsmp_array_2[16],

multi_str_mdsmp_array_2[16],

multi_str_mnref_array_2[16],

multi_str_mdref_array_2[16],

multi_str_time_array_2[16],

multi_str_snsmp_array_2[16],

multi_str_sdsmp_array_2[16],

multi_str_snref_array_2[16],

multi_str_sderf_array_2[16],

],[

"TC16",

multi_str_time_array_2[17],

multi_str_mnsmp_array_2[17],

multi_str_mdsmp_array_2[17],

multi_str_mnref_array_2[17],

multi_str_mdref_array_2[17],

multi_str_time_array_2[17],

multi_str_snsmp_array_2[17],

multi_str_sdsmp_array_2[17],

multi_str_snref_array_2[17],

multi_str_sderf_array_2[17],

],[

"TC17",

multi_str_time_array_2[18],

multi_str_mnsmp_array_2[18],

multi_str_mdsmp_array_2[18],

multi_str_mnref_array_2[18],

multi_str_mdref_array_2[18],

multi_str_time_array_2[18],

multi_str_snsmp_array_2[18],

multi_str_sdsmp_array_2[18],

multi_str_snref_array_2[18],

multi_str_sderf_array_2[18],

],[

"TC18",

multi_str_time_array_2[19],

multi_str_mnsmp_array_2[19],

multi_str_mdsmp_array_2[19],

multi_str_mnref_array_2[19],

multi_str_mdref_array_2[19],

multi_str_time_array_2[19],

multi_str_snsmp_array_2[19],

multi_str_sdsmp_array_2[19],

multi_str_snref_array_2[19],

multi_str_sderf_array_2[19],

],[

"TC19",

multi_str_time_array_2[20],

multi_str_mnsmp_array_2[20],

multi_str_mdsmp_array_2[20],

multi_str_mnref_array_2[20],

multi_str_mdref_array_2[20],

multi_str_time_array_2[20],

multi_str_snsmp_array_2[20],

multi_str_sdsmp_array_2[20],

multi_str_snref_array_2[20],

multi_str_sderf_array_2[20],

],[

"TC20",

multi_str_time_array_2[21],

multi_str_mnsmp_array_2[21],

multi_str_mdsmp_array_2[21],

multi_str_mnref_array_2[21],

multi_str_mdref_array_2[21],

multi_str_time_array_2[21],

multi_str_snsmp_array_2[21],

multi_str_sdsmp_array_2[21],

multi_str_snref_array_2[21],

multi_str_sderf_array_2[21],

],[

"TC21",

multi_str_time_array_2[22],

multi_str_mnsmp_array_2[22],

multi_str_mdsmp_array_2[22],

multi_str_mnref_array_2[22],

multi_str_mdref_array_2[22],

multi_str_time_array_2[22],

multi_str_snsmp_array_2[22],

multi_str_sdsmp_array_2[22],

multi_str_snref_array_2[22],

multi_str_sderf_array_2[22],

],[

"TC22",

multi_str_time_array_2[23],

multi_str_mnsmp_array_2[23],

multi_str_mdsmp_array_2[23],

multi_str_mnref_array_2[23],

multi_str_mdref_array_2[23],

multi_str_time_array_2[23],

multi_str_snsmp_array_2[23],

multi_str_sdsmp_array_2[23],

multi_str_snref_array_2[23],

multi_str_sderf_array_2[23],

],[

"TC23",

multi_str_time_array_2[24],

multi_str_mnsmp_array_2[24],

multi_str_mdsmp_array_2[24],

multi_str_mnref_array_2[24],

multi_str_mdref_array_2[24],

multi_str_time_array_2[24],

multi_str_snsmp_array_2[24],

multi_str_sdsmp_array_2[24],

multi_str_snref_array_2[24],

multi_str_sderf_array_2[24],

],[

"TC24",

multi_str_time_array_2[25],

multi_str_mnsmp_array_2[25],

multi_str_mdsmp_array_2[25],

multi_str_mnref_array_2[25],

multi_str_mdref_array_2[25],

multi_str_time_array_2[25],

multi_str_snsmp_array_2[25],

multi_str_sdsmp_array_2[25],

multi_str_snref_array_2[25],

multi_str_sderf_array_2[25],

],[

"TC25",

multi_str_time_array_2[26],

multi_str_mnsmp_array_2[26],

multi_str_mdsmp_array_2[26],

multi_str_mnref_array_2[26],

multi_str_mdref_array_2[26],

multi_str_time_array_2[26],

multi_str_snsmp_array_2[26],

multi_str_sdsmp_array_2[26],

multi_str_snref_array_2[26],

multi_str_sderf_array_2[26],

],[

"TC26",

multi_str_time_array_2[27],

multi_str_mnsmp_array_2[27],

multi_str_mdsmp_array_2[27],

multi_str_mnref_array_2[27],

multi_str_mdref_array_2[27],

multi_str_time_array_2[27],

multi_str_snsmp_array_2[27],

multi_str_sdsmp_array_2[27],

multi_str_snref_array_2[27],

multi_str_sderf_array_2[27],

],[

"TC27",

multi_str_time_array_2[28],

multi_str_mnsmp_array_2[28],

multi_str_mdsmp_array_2[28],

multi_str_mnref_array_2[28],

multi_str_mdref_array_2[28],

multi_str_time_array_2[28],

multi_str_snsmp_array_2[28],

multi_str_sdsmp_array_2[28],

multi_str_snref_array_2[28],

multi_str_sderf_array_2[28],

],[

"TC28",

multi_str_time_array_2[29],

multi_str_mnsmp_array_2[29],

multi_str_mdsmp_array_2[29],

multi_str_mnref_array_2[29],

multi_str_mdref_array_2[29],

multi_str_time_array_2[29],

multi_str_snsmp_array_2[29],

multi_str_sdsmp_array_2[29],

multi_str_snref_array_2[29],

multi_str_sderf_array_2[29],

],[

"TC29",

multi_str_time_array_2[30],

multi_str_mnsmp_array_2[30],

multi_str_mdsmp_array_2[30],

multi_str_mnref_array_2[30],

multi_str_mdref_array_2[30],

multi_str_time_array_2[30],

multi_str_snsmp_array_2[30],

multi_str_sdsmp_array_2[30],

multi_str_snref_array_2[30],

multi_str_sderf_array_2[30],

],[

"TC30",

removeCR30(multi_str_time_array_2[31]),

removeCR30(multi_str_mnsmp_array_2[31]),

removeCR30(multi_str_mdsmp_array_2[31]),

removeCR30(multi_str_mnref_array_2[31]),

removeCR30(multi_str_mdref_array_2[31]),

removeCR30(multi_str_time_array_2[31]),

removeCR30(multi_str_snsmp_array_2[31]),

removeCR30(multi_str_sdsmp_array_2[31]),

removeCR30(multi_str_snref_array_2[31]),

removeCR30(multi_str_sderf_array_2[31]),

],[



],[

"[MULTI]",

"CH9"

]

,[

"",

"Main",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

"Sub",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

],[

"WHITE",            

multi_str_time_array_3[0],

multi_str_mnsmp_array_3[0],

multi_str_mdsmp_array_3[0],

multi_str_mnref_array_3[0],

multi_str_mdref_array_3[0],

multi_str_time_array_3[0],

multi_str_snsmp_array_3[0],

multi_str_sdsmp_array_3[0],

multi_str_snref_array_3[0],

multi_str_sderf_array_3[0],

],[

"BLACK",            

multi_str_time_array_3[1],

multi_str_mnsmp_array_3[1],

multi_str_mdsmp_array_3[1],

multi_str_mnref_array_3[1],

multi_str_mdref_array_3[1],

multi_str_time_array_3[1],

multi_str_snsmp_array_3[1],

multi_str_sdsmp_array_3[1],

multi_str_snref_array_3[1],

multi_str_sderf_array_3[1],

],[

"TC01",

multi_str_time_array_3[2],

multi_str_mnsmp_array_3[2],

multi_str_mdsmp_array_3[2],

multi_str_mnref_array_3[2],

multi_str_mdref_array_3[2],

multi_str_time_array_3[2],

multi_str_snsmp_array_3[2],

multi_str_sdsmp_array_3[2],

multi_str_snref_array_3[2],

multi_str_sderf_array_3[2],

],[

"TC02",

multi_str_time_array_3[3],

multi_str_mnsmp_array_3[3],

multi_str_mdsmp_array_3[3],

multi_str_mnref_array_3[3],

multi_str_mdref_array_3[3],

multi_str_time_array_3[3],

multi_str_snsmp_array_3[3],

multi_str_sdsmp_array_3[3],

multi_str_snref_array_3[3],

multi_str_sderf_array_3[3],

]

,[

"TC03",

multi_str_time_array_3[4],

multi_str_mnsmp_array_3[4],

multi_str_mdsmp_array_3[4],

multi_str_mnref_array_3[4],

multi_str_mdref_array_3[4],

multi_str_time_array_3[4],

multi_str_snsmp_array_3[4],

multi_str_sdsmp_array_3[4],

multi_str_snref_array_3[4],

multi_str_sderf_array_3[4],

],[

"TC04",

multi_str_time_array_3[5],

multi_str_mnsmp_array_3[5],

multi_str_mdsmp_array_3[5],

multi_str_mnref_array_3[5],

multi_str_mdref_array_3[5],

multi_str_time_array_3[5],

multi_str_snsmp_array_3[5],

multi_str_sdsmp_array_3[5],

multi_str_snref_array_3[5],

multi_str_sderf_array_3[5],

],[

"TC05",

multi_str_time_array_3[6],

multi_str_mnsmp_array_3[6],

multi_str_mdsmp_array_3[6],

multi_str_mnref_array_3[6],

multi_str_mdref_array_3[6],

multi_str_time_array_3[6],

multi_str_snsmp_array_3[6],

multi_str_sdsmp_array_3[6],

multi_str_snref_array_3[6],

multi_str_sderf_array_3[6],

],[

"TC06",

multi_str_time_array_3[7],

multi_str_mnsmp_array_3[7],

multi_str_mdsmp_array_3[7],

multi_str_mnref_array_3[7],

multi_str_mdref_array_3[7],

multi_str_time_array_3[7],

multi_str_snsmp_array_3[7],

multi_str_sdsmp_array_3[7],

multi_str_snref_array_3[7],

multi_str_sderf_array_3[7],

],[

"TC07",

multi_str_time_array_3[8],

multi_str_mnsmp_array_3[8],

multi_str_mdsmp_array_3[8],

multi_str_mnref_array_3[8],

multi_str_mdref_array_3[8],

multi_str_time_array_3[8],

multi_str_snsmp_array_3[8],

multi_str_sdsmp_array_3[8],

multi_str_snref_array_3[8],

multi_str_sderf_array_3[8],

],[

"TC08",

multi_str_time_array_3[9],

multi_str_mnsmp_array_3[9],

multi_str_mdsmp_array_3[9],

multi_str_mnref_array_3[9],

multi_str_mdref_array_3[9],

multi_str_time_array_3[9],

multi_str_snsmp_array_3[9],

multi_str_sdsmp_array_3[9],

multi_str_snref_array_3[9],

multi_str_sderf_array_3[9],

],[

"TC09",

multi_str_time_array_3[10],

multi_str_mnsmp_array_3[10],

multi_str_mdsmp_array_3[10],

multi_str_mnref_array_3[10],

multi_str_mdref_array_3[10],

multi_str_time_array_3[10],

multi_str_snsmp_array_3[10],

multi_str_sdsmp_array_3[10],

multi_str_snref_array_3[10],

multi_str_sderf_array_3[10],

],[

"TC10",

multi_str_time_array_3[11],

multi_str_mnsmp_array_3[11],

multi_str_mdsmp_array_3[11],

multi_str_mnref_array_3[11],

multi_str_mdref_array_3[11],

multi_str_time_array_3[11],

multi_str_snsmp_array_3[11],

multi_str_sdsmp_array_3[11],

multi_str_snref_array_3[11],

multi_str_sderf_array_3[11],

],[

"TC11",

multi_str_time_array_3[12],

multi_str_mnsmp_array_3[12],

multi_str_mdsmp_array_3[12],

multi_str_mnref_array_3[12],

multi_str_mdref_array_3[12],

multi_str_time_array_3[12],

multi_str_snsmp_array_3[12],

multi_str_sdsmp_array_3[12],

multi_str_snref_array_3[12],

multi_str_sderf_array_3[12],

],[

"TC12",

multi_str_time_array_3[13],

multi_str_mnsmp_array_3[13],

multi_str_mdsmp_array_3[13],

multi_str_mnref_array_3[13],

multi_str_mdref_array_3[13],

multi_str_time_array_3[13],

multi_str_snsmp_array_3[13],

multi_str_sdsmp_array_3[13],

multi_str_snref_array_3[13],

multi_str_sderf_array_3[13],

],[

"TC13",

multi_str_time_array_3[14],

multi_str_mnsmp_array_3[14],

multi_str_mdsmp_array_3[14],

multi_str_mnref_array_3[14],

multi_str_mdref_array_3[14],

multi_str_time_array_3[14],

multi_str_snsmp_array_3[14],

multi_str_sdsmp_array_3[14],

multi_str_snref_array_3[14],

multi_str_sderf_array_3[14],

],[

"TC14",

multi_str_time_array_3[15],

multi_str_mnsmp_array_3[15],

multi_str_mdsmp_array_3[15],

multi_str_mnref_array_3[15],

multi_str_mdref_array_3[15],

multi_str_time_array_3[15],

multi_str_snsmp_array_3[15],

multi_str_sdsmp_array_3[15],

multi_str_snref_array_3[15],

multi_str_sderf_array_3[15],

],[

"TC15",

multi_str_time_array_3[16],

multi_str_mnsmp_array_3[16],

multi_str_mdsmp_array_3[16],

multi_str_mnref_array_3[16],

multi_str_mdref_array_3[16],

multi_str_time_array_3[16],

multi_str_snsmp_array_3[16],

multi_str_sdsmp_array_3[16],

multi_str_snref_array_3[16],

multi_str_sderf_array_3[16],

],[

"TC16",

multi_str_time_array_3[17],

multi_str_mnsmp_array_3[17],

multi_str_mdsmp_array_3[17],

multi_str_mnref_array_3[17],

multi_str_mdref_array_3[17],

multi_str_time_array_3[17],

multi_str_snsmp_array_3[17],

multi_str_sdsmp_array_3[17],

multi_str_snref_array_3[17],

multi_str_sderf_array_3[17],

],[

"TC17",

multi_str_time_array_3[18],

multi_str_mnsmp_array_3[18],

multi_str_mdsmp_array_3[18],

multi_str_mnref_array_3[18],

multi_str_mdref_array_3[18],

multi_str_time_array_3[18],

multi_str_snsmp_array_3[18],

multi_str_sdsmp_array_3[18],

multi_str_snref_array_3[18],

multi_str_sderf_array_3[18],

],[

"TC18",

multi_str_time_array_3[19],

multi_str_mnsmp_array_3[19],

multi_str_mdsmp_array_3[19],

multi_str_mnref_array_3[19],

multi_str_mdref_array_3[19],

multi_str_time_array_3[19],

multi_str_snsmp_array_3[19],

multi_str_sdsmp_array_3[19],

multi_str_snref_array_3[19],

multi_str_sderf_array_3[19],

],[

"TC19",

multi_str_time_array_3[20],

multi_str_mnsmp_array_3[20],

multi_str_mdsmp_array_3[20],

multi_str_mnref_array_3[20],

multi_str_mdref_array_3[20],

multi_str_time_array_3[20],

multi_str_snsmp_array_3[20],

multi_str_sdsmp_array_3[20],

multi_str_snref_array_3[20],

multi_str_sderf_array_3[20],

],[

"TC20",

multi_str_time_array_3[21],

multi_str_mnsmp_array_3[21],

multi_str_mdsmp_array_3[21],

multi_str_mnref_array_3[21],

multi_str_mdref_array_3[21],

multi_str_time_array_3[21],

multi_str_snsmp_array_3[21],

multi_str_sdsmp_array_3[21],

multi_str_snref_array_3[21],

multi_str_sderf_array_3[21],

],[

"TC21",

multi_str_time_array_3[22],

multi_str_mnsmp_array_3[22],

multi_str_mdsmp_array_3[22],

multi_str_mnref_array_3[22],

multi_str_mdref_array_3[22],

multi_str_time_array_3[22],

multi_str_snsmp_array_3[22],

multi_str_sdsmp_array_3[22],

multi_str_snref_array_3[22],

multi_str_sderf_array_3[22],

],[

"TC22",

multi_str_time_array_3[23],

multi_str_mnsmp_array_3[23],

multi_str_mdsmp_array_3[23],

multi_str_mnref_array_3[23],

multi_str_mdref_array_3[23],

multi_str_time_array_3[23],

multi_str_snsmp_array_3[23],

multi_str_sdsmp_array_3[23],

multi_str_snref_array_3[23],

multi_str_sderf_array_3[23],

],[

"TC23",

multi_str_time_array_3[24],

multi_str_mnsmp_array_3[24],

multi_str_mdsmp_array_3[24],

multi_str_mnref_array_3[24],

multi_str_mdref_array_3[24],

multi_str_time_array_3[24],

multi_str_snsmp_array_3[24],

multi_str_sdsmp_array_3[24],

multi_str_snref_array_3[24],

multi_str_sderf_array_3[24],

],[

"TC24",

multi_str_time_array_3[25],

multi_str_mnsmp_array_3[25],

multi_str_mdsmp_array_3[25],

multi_str_mnref_array_3[25],

multi_str_mdref_array_3[25],

multi_str_time_array_3[25],

multi_str_snsmp_array_3[25],

multi_str_sdsmp_array_3[25],

multi_str_snref_array_3[25],

multi_str_sderf_array_3[25],

],[

"TC25",

multi_str_time_array_3[26],

multi_str_mnsmp_array_3[26],

multi_str_mdsmp_array_3[26],

multi_str_mnref_array_3[26],

multi_str_mdref_array_3[26],

multi_str_time_array_3[26],

multi_str_snsmp_array_3[26],

multi_str_sdsmp_array_3[26],

multi_str_snref_array_3[26],

multi_str_sderf_array_3[26],

],[

"TC26",

multi_str_time_array_3[27],

multi_str_mnsmp_array_3[27],

multi_str_mdsmp_array_3[27],

multi_str_mnref_array_3[27],

multi_str_mdref_array_3[27],

multi_str_time_array_3[27],

multi_str_snsmp_array_3[27],

multi_str_sdsmp_array_3[27],

multi_str_snref_array_3[27],

multi_str_sderf_array_3[27],

],[

"TC27",

multi_str_time_array_3[28],

multi_str_mnsmp_array_3[28],

multi_str_mdsmp_array_3[28],

multi_str_mnref_array_3[28],

multi_str_mdref_array_3[28],

multi_str_time_array_3[28],

multi_str_snsmp_array_3[28],

multi_str_sdsmp_array_3[28],

multi_str_snref_array_3[28],

multi_str_sderf_array_3[28],

],[

"TC28",

multi_str_time_array_3[29],

multi_str_mnsmp_array_3[29],

multi_str_mdsmp_array_3[29],

multi_str_mnref_array_3[29],

multi_str_mdref_array_3[29],

multi_str_time_array_3[29],

multi_str_snsmp_array_3[29],

multi_str_sdsmp_array_3[29],

multi_str_snref_array_3[29],

multi_str_sderf_array_3[29],

],[

"TC29",

multi_str_time_array_3[30],

multi_str_mnsmp_array_3[30],

multi_str_mdsmp_array_3[30],

multi_str_mnref_array_3[30],

multi_str_mdref_array_3[30],

multi_str_time_array_3[30],

multi_str_snsmp_array_3[30],

multi_str_sdsmp_array_3[30],

multi_str_snref_array_3[30],

multi_str_sderf_array_3[30],

],[

"TC30",

removeCR30(multi_str_time_array_3[31]),

removeCR30(multi_str_mnsmp_array_3[31]),

removeCR30(multi_str_mdsmp_array_3[31]),

removeCR30(multi_str_mnref_array_3[31]),

removeCR30(multi_str_mdref_array_3[31]),

removeCR30(multi_str_time_array_3[31]),

removeCR30(multi_str_snsmp_array_3[31]),

removeCR30(multi_str_sdsmp_array_3[31]),

removeCR30(multi_str_snref_array_3[31]),

removeCR30(multi_str_sderf_array_3[31]),

],[



]

,[

"[MULTI]",

"CH10"

]

,[

"",

"Main",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

"Sub",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

],[

"WHITE",            

multi_str_time_array_4[0],

multi_str_mnsmp_array_4[0],

multi_str_mdsmp_array_4[0],

multi_str_mnref_array_4[0],

multi_str_mdref_array_4[0],

multi_str_time_array_4[0],

multi_str_snsmp_array_4[0],

multi_str_sdsmp_array_4[0],

multi_str_snref_array_4[0],

multi_str_sderf_array_4[0],

],[

"BLACK",            

multi_str_time_array_4[1],

multi_str_mnsmp_array_4[1],

multi_str_mdsmp_array_4[1],

multi_str_mnref_array_4[1],

multi_str_mdref_array_4[1],

multi_str_time_array_4[1],

multi_str_snsmp_array_4[1],

multi_str_sdsmp_array_4[1],

multi_str_snref_array_4[1],

multi_str_sderf_array_4[1],

],[

"TC01",

multi_str_time_array_4[2],

multi_str_mnsmp_array_4[2],

multi_str_mdsmp_array_4[2],

multi_str_mnref_array_4[2],

multi_str_mdref_array_4[2],

multi_str_time_array_4[2],

multi_str_snsmp_array_4[2],

multi_str_sdsmp_array_4[2],

multi_str_snref_array_4[2],

multi_str_sderf_array_4[2],

],[

"TC02",

multi_str_time_array_4[3],

multi_str_mnsmp_array_4[3],

multi_str_mdsmp_array_4[3],

multi_str_mnref_array_4[3],

multi_str_mdref_array_4[3],

multi_str_time_array_4[3],

multi_str_snsmp_array_4[3],

multi_str_sdsmp_array_4[3],

multi_str_snref_array_4[3],

multi_str_sderf_array_4[3],

]

,[

"TC03",

multi_str_time_array_4[4],

multi_str_mnsmp_array_4[4],

multi_str_mdsmp_array_4[4],

multi_str_mnref_array_4[4],

multi_str_mdref_array_4[4],

multi_str_time_array_4[4],

multi_str_snsmp_array_4[4],

multi_str_sdsmp_array_4[4],

multi_str_snref_array_4[4],

multi_str_sderf_array_4[4],

],[

"TC04",

multi_str_time_array_4[5],

multi_str_mnsmp_array_4[5],

multi_str_mdsmp_array_4[5],

multi_str_mnref_array_4[5],

multi_str_mdref_array_4[5],

multi_str_time_array_4[5],

multi_str_snsmp_array_4[5],

multi_str_sdsmp_array_4[5],

multi_str_snref_array_4[5],

multi_str_sderf_array_4[5],

],[

"TC05",

multi_str_time_array_4[6],

multi_str_mnsmp_array_4[6],

multi_str_mdsmp_array_4[6],

multi_str_mnref_array_4[6],

multi_str_mdref_array_4[6],

multi_str_time_array_4[6],

multi_str_snsmp_array_4[6],

multi_str_sdsmp_array_4[6],

multi_str_snref_array_4[6],

multi_str_sderf_array_4[6],

],[

"TC06",

multi_str_time_array_4[7],

multi_str_mnsmp_array_4[7],

multi_str_mdsmp_array_4[7],

multi_str_mnref_array_4[7],

multi_str_mdref_array_4[7],

multi_str_time_array_4[7],

multi_str_snsmp_array_4[7],

multi_str_sdsmp_array_4[7],

multi_str_snref_array_4[7],

multi_str_sderf_array_4[7],

],[

"TC07",

multi_str_time_array_4[8],

multi_str_mnsmp_array_4[8],

multi_str_mdsmp_array_4[8],

multi_str_mnref_array_4[8],

multi_str_mdref_array_4[8],

multi_str_time_array_4[8],

multi_str_snsmp_array_4[8],

multi_str_sdsmp_array_4[8],

multi_str_snref_array_4[8],

multi_str_sderf_array_4[8],

],[

"TC08",

multi_str_time_array_4[9],

multi_str_mnsmp_array_4[9],

multi_str_mdsmp_array_4[9],

multi_str_mnref_array_4[9],

multi_str_mdref_array_4[9],

multi_str_time_array_4[9],

multi_str_snsmp_array_4[9],

multi_str_sdsmp_array_4[9],

multi_str_snref_array_4[9],

multi_str_sderf_array_4[9],

],[

"TC09",

multi_str_time_array_4[10],

multi_str_mnsmp_array_4[10],

multi_str_mdsmp_array_4[10],

multi_str_mnref_array_4[10],

multi_str_mdref_array_4[10],

multi_str_time_array_4[10],

multi_str_snsmp_array_4[10],

multi_str_sdsmp_array_4[10],

multi_str_snref_array_4[10],

multi_str_sderf_array_4[10],

],[

"TC10",

multi_str_time_array_4[11],

multi_str_mnsmp_array_4[11],

multi_str_mdsmp_array_4[11],

multi_str_mnref_array_4[11],

multi_str_mdref_array_4[11],

multi_str_time_array_4[11],

multi_str_snsmp_array_4[11],

multi_str_sdsmp_array_4[11],

multi_str_snref_array_4[11],

multi_str_sderf_array_4[11],

],[

"TC11",

multi_str_time_array_4[12],

multi_str_mnsmp_array_4[12],

multi_str_mdsmp_array_4[12],

multi_str_mnref_array_4[12],

multi_str_mdref_array_4[12],

multi_str_time_array_4[12],

multi_str_snsmp_array_4[12],

multi_str_sdsmp_array_4[12],

multi_str_snref_array_4[12],

multi_str_sderf_array_4[12],

],[

"TC12",

multi_str_time_array_4[13],

multi_str_mnsmp_array_4[13],

multi_str_mdsmp_array_4[13],

multi_str_mnref_array_4[13],

multi_str_mdref_array_4[13],

multi_str_time_array_4[13],

multi_str_snsmp_array_4[13],

multi_str_sdsmp_array_4[13],

multi_str_snref_array_4[13],

multi_str_sderf_array_4[13],

],[

"TC13",

multi_str_time_array_4[14],

multi_str_mnsmp_array_4[14],

multi_str_mdsmp_array_4[14],

multi_str_mnref_array_4[14],

multi_str_mdref_array_4[14],

multi_str_time_array_4[14],

multi_str_snsmp_array_4[14],

multi_str_sdsmp_array_4[14],

multi_str_snref_array_4[14],

multi_str_sderf_array_4[14],

],[

"TC14",

multi_str_time_array_4[15],

multi_str_mnsmp_array_4[15],

multi_str_mdsmp_array_4[15],

multi_str_mnref_array_4[15],

multi_str_mdref_array_4[15],

multi_str_time_array_4[15],

multi_str_snsmp_array_4[15],

multi_str_sdsmp_array_4[15],

multi_str_snref_array_4[15],

multi_str_sderf_array_4[15],

],[

"TC15",

multi_str_time_array_4[16],

multi_str_mnsmp_array_4[16],

multi_str_mdsmp_array_4[16],

multi_str_mnref_array_4[16],

multi_str_mdref_array_4[16],

multi_str_time_array_4[16],

multi_str_snsmp_array_4[16],

multi_str_sdsmp_array_4[16],

multi_str_snref_array_4[16],

multi_str_sderf_array_4[16],

],[

"TC16",

multi_str_time_array_4[17],

multi_str_mnsmp_array_4[17],

multi_str_mdsmp_array_4[17],

multi_str_mnref_array_4[17],

multi_str_mdref_array_4[17],

multi_str_time_array_4[17],

multi_str_snsmp_array_4[17],

multi_str_sdsmp_array_4[17],

multi_str_snref_array_4[17],

multi_str_sderf_array_4[17],

],[

"TC17",

multi_str_time_array_4[18],

multi_str_mnsmp_array_4[18],

multi_str_mdsmp_array_4[18],

multi_str_mnref_array_4[18],

multi_str_mdref_array_4[18],

multi_str_time_array_4[18],

multi_str_snsmp_array_4[18],

multi_str_sdsmp_array_4[18],

multi_str_snref_array_4[18],

multi_str_sderf_array_4[18],

],[

"TC18",

multi_str_time_array_4[19],

multi_str_mnsmp_array_4[19],

multi_str_mdsmp_array_4[19],

multi_str_mnref_array_4[19],

multi_str_mdref_array_4[19],

multi_str_time_array_4[19],

multi_str_snsmp_array_4[19],

multi_str_sdsmp_array_4[19],

multi_str_snref_array_4[19],

multi_str_sderf_array_4[19],

],[

"TC19",

multi_str_time_array_4[20],

multi_str_mnsmp_array_4[20],

multi_str_mdsmp_array_4[20],

multi_str_mnref_array_4[20],

multi_str_mdref_array_4[20],

multi_str_time_array_4[20],

multi_str_snsmp_array_4[20],

multi_str_sdsmp_array_4[20],

multi_str_snref_array_4[20],

multi_str_sderf_array_4[20],

],[

"TC20",

multi_str_time_array_4[21],

multi_str_mnsmp_array_4[21],

multi_str_mdsmp_array_4[21],

multi_str_mnref_array_4[21],

multi_str_mdref_array_4[21],

multi_str_time_array_4[21],

multi_str_snsmp_array_4[21],

multi_str_sdsmp_array_4[21],

multi_str_snref_array_4[21],

multi_str_sderf_array_4[21],

],[

"TC21",

multi_str_time_array_4[22],

multi_str_mnsmp_array_4[22],

multi_str_mdsmp_array_4[22],

multi_str_mnref_array_4[22],

multi_str_mdref_array_4[22],

multi_str_time_array_4[22],

multi_str_snsmp_array_4[22],

multi_str_sdsmp_array_4[22],

multi_str_snref_array_4[22],

multi_str_sderf_array_4[22],

],[

"TC22",

multi_str_time_array_4[23],

multi_str_mnsmp_array_4[23],

multi_str_mdsmp_array_4[23],

multi_str_mnref_array_4[23],

multi_str_mdref_array_4[23],

multi_str_time_array_4[23],

multi_str_snsmp_array_4[23],

multi_str_sdsmp_array_4[23],

multi_str_snref_array_4[23],

multi_str_sderf_array_4[23],

],[

"TC23",

multi_str_time_array_4[24],

multi_str_mnsmp_array_4[24],

multi_str_mdsmp_array_4[24],

multi_str_mnref_array_4[24],

multi_str_mdref_array_4[24],

multi_str_time_array_4[24],

multi_str_snsmp_array_4[24],

multi_str_sdsmp_array_4[24],

multi_str_snref_array_4[24],

multi_str_sderf_array_4[24],

],[

"TC24",

multi_str_time_array_4[25],

multi_str_mnsmp_array_4[25],

multi_str_mdsmp_array_4[25],

multi_str_mnref_array_4[25],

multi_str_mdref_array_4[25],

multi_str_time_array_4[25],

multi_str_snsmp_array_4[25],

multi_str_sdsmp_array_4[25],

multi_str_snref_array_4[25],

multi_str_sderf_array_4[25],

],[

"TC25",

multi_str_time_array_4[26],

multi_str_mnsmp_array_4[26],

multi_str_mdsmp_array_4[26],

multi_str_mnref_array_4[26],

multi_str_mdref_array_4[26],

multi_str_time_array_4[26],

multi_str_snsmp_array_4[26],

multi_str_sdsmp_array_4[26],

multi_str_snref_array_4[26],

multi_str_sderf_array_4[26],

],[

"TC26",

multi_str_time_array_4[27],

multi_str_mnsmp_array_4[27],

multi_str_mdsmp_array_4[27],

multi_str_mnref_array_4[27],

multi_str_mdref_array_4[27],

multi_str_time_array_4[27],

multi_str_snsmp_array_4[27],

multi_str_sdsmp_array_4[27],

multi_str_snref_array_4[27],

multi_str_sderf_array_4[27],

],[

"TC27",

multi_str_time_array_4[28],

multi_str_mnsmp_array_4[28],

multi_str_mdsmp_array_4[28],

multi_str_mnref_array_4[28],

multi_str_mdref_array_4[28],

multi_str_time_array_4[28],

multi_str_snsmp_array_4[28],

multi_str_sdsmp_array_4[28],

multi_str_snref_array_4[28],

multi_str_sderf_array_4[28],

],[

"TC28",

multi_str_time_array_4[29],

multi_str_mnsmp_array_4[29],

multi_str_mdsmp_array_4[29],

multi_str_mnref_array_4[29],

multi_str_mdref_array_4[29],

multi_str_time_array_4[29],

multi_str_snsmp_array_4[29],

multi_str_sdsmp_array_4[29],

multi_str_snref_array_4[29],

multi_str_sderf_array_4[29],

],[

"TC29",

multi_str_time_array_4[30],

multi_str_mnsmp_array_4[30],

multi_str_mdsmp_array_4[30],

multi_str_mnref_array_4[30],

multi_str_mdref_array_4[30],

multi_str_time_array_4[30],

multi_str_snsmp_array_4[30],

multi_str_sdsmp_array_4[30],

multi_str_snref_array_4[30],

multi_str_sderf_array_4[30],

],[

"TC30",

removeCR30(multi_str_time_array_4[31]),

removeCR30(multi_str_mnsmp_array_4[31]),

removeCR30(multi_str_mdsmp_array_4[31]),

removeCR30(multi_str_mnref_array_4[31]),

removeCR30(multi_str_mdref_array_4[31]),

removeCR30(multi_str_time_array_4[31]),

removeCR30(multi_str_snsmp_array_4[31]),

removeCR30(multi_str_sdsmp_array_4[31]),

removeCR30(multi_str_snref_array_4[31]),

removeCR30(multi_str_sderf_array_4[31]),

],[



],[

"[MULTI]",

"CH11"

]

,[

"",

"Main",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

"Sub",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

],[

"WHITE",            

multi_str_time_array_5[0],

multi_str_mnsmp_array_5[0],

multi_str_mdsmp_array_5[0],

multi_str_mnref_array_5[0],

multi_str_mdref_array_5[0],

multi_str_time_array_5[0],

multi_str_snsmp_array_5[0],

multi_str_sdsmp_array_5[0],

multi_str_snref_array_5[0],

multi_str_sderf_array_5[0],

],[

"BLACK",            

multi_str_time_array_5[1],

multi_str_mnsmp_array_5[1],

multi_str_mdsmp_array_5[1],

multi_str_mnref_array_5[1],

multi_str_mdref_array_5[1],

multi_str_time_array_5[1],

multi_str_snsmp_array_5[1],

multi_str_sdsmp_array_5[1],

multi_str_snref_array_5[1],

multi_str_sderf_array_5[1],

],[

"TC01",

multi_str_time_array_5[2],

multi_str_mnsmp_array_5[2],

multi_str_mdsmp_array_5[2],

multi_str_mnref_array_5[2],

multi_str_mdref_array_5[2],

multi_str_time_array_5[2],

multi_str_snsmp_array_5[2],

multi_str_sdsmp_array_5[2],

multi_str_snref_array_5[2],

multi_str_sderf_array_5[2],

],[

"TC02",

multi_str_time_array_5[3],

multi_str_mnsmp_array_5[3],

multi_str_mdsmp_array_5[3],

multi_str_mnref_array_5[3],

multi_str_mdref_array_5[3],

multi_str_time_array_5[3],

multi_str_snsmp_array_5[3],

multi_str_sdsmp_array_5[3],

multi_str_snref_array_5[3],

multi_str_sderf_array_5[3],

]

,[

"TC03",

multi_str_time_array_5[4],

multi_str_mnsmp_array_5[4],

multi_str_mdsmp_array_5[4],

multi_str_mnref_array_5[4],

multi_str_mdref_array_5[4],

multi_str_time_array_5[4],

multi_str_snsmp_array_5[4],

multi_str_sdsmp_array_5[4],

multi_str_snref_array_5[4],

multi_str_sderf_array_5[4],

],[

"TC04",

multi_str_time_array_5[5],

multi_str_mnsmp_array_5[5],

multi_str_mdsmp_array_5[5],

multi_str_mnref_array_5[5],

multi_str_mdref_array_5[5],

multi_str_time_array_5[5],

multi_str_snsmp_array_5[5],

multi_str_sdsmp_array_5[5],

multi_str_snref_array_5[5],

multi_str_sderf_array_5[5],

],[

"TC05",

multi_str_time_array_5[6],

multi_str_mnsmp_array_5[6],

multi_str_mdsmp_array_5[6],

multi_str_mnref_array_5[6],

multi_str_mdref_array_5[6],

multi_str_time_array_5[6],

multi_str_snsmp_array_5[6],

multi_str_sdsmp_array_5[6],

multi_str_snref_array_5[6],

multi_str_sderf_array_5[6],

],[

"TC06",

multi_str_time_array_5[7],

multi_str_mnsmp_array_5[7],

multi_str_mdsmp_array_5[7],

multi_str_mnref_array_5[7],

multi_str_mdref_array_5[7],

multi_str_time_array_5[7],

multi_str_snsmp_array_5[7],

multi_str_sdsmp_array_5[7],

multi_str_snref_array_5[7],

multi_str_sderf_array_5[7],

],[

"TC07",

multi_str_time_array_5[8],

multi_str_mnsmp_array_5[8],

multi_str_mdsmp_array_5[8],

multi_str_mnref_array_5[8],

multi_str_mdref_array_5[8],

multi_str_time_array_5[8],

multi_str_snsmp_array_5[8],

multi_str_sdsmp_array_5[8],

multi_str_snref_array_5[8],

multi_str_sderf_array_5[8],

],[

"TC08",

multi_str_time_array_5[9],

multi_str_mnsmp_array_5[9],

multi_str_mdsmp_array_5[9],

multi_str_mnref_array_5[9],

multi_str_mdref_array_5[9],

multi_str_time_array_5[9],

multi_str_snsmp_array_5[9],

multi_str_sdsmp_array_5[9],

multi_str_snref_array_5[9],

multi_str_sderf_array_5[9],

],[

"TC09",

multi_str_time_array_5[10],

multi_str_mnsmp_array_5[10],

multi_str_mdsmp_array_5[10],

multi_str_mnref_array_5[10],

multi_str_mdref_array_5[10],

multi_str_time_array_5[10],

multi_str_snsmp_array_5[10],

multi_str_sdsmp_array_5[10],

multi_str_snref_array_5[10],

multi_str_sderf_array_5[10],

],[

"TC10",

multi_str_time_array_5[11],

multi_str_mnsmp_array_5[11],

multi_str_mdsmp_array_5[11],

multi_str_mnref_array_5[11],

multi_str_mdref_array_5[11],

multi_str_time_array_5[11],

multi_str_snsmp_array_5[11],

multi_str_sdsmp_array_5[11],

multi_str_snref_array_5[11],

multi_str_sderf_array_5[11],

],[

"TC11",

multi_str_time_array_5[12],

multi_str_mnsmp_array_5[12],

multi_str_mdsmp_array_5[12],

multi_str_mnref_array_5[12],

multi_str_mdref_array_5[12],

multi_str_time_array_5[12],

multi_str_snsmp_array_5[12],

multi_str_sdsmp_array_5[12],

multi_str_snref_array_5[12],

multi_str_sderf_array_5[12],

],[

"TC12",

multi_str_time_array_5[13],

multi_str_mnsmp_array_5[13],

multi_str_mdsmp_array_5[13],

multi_str_mnref_array_5[13],

multi_str_mdref_array_5[13],

multi_str_time_array_5[13],

multi_str_snsmp_array_5[13],

multi_str_sdsmp_array_5[13],

multi_str_snref_array_5[13],

multi_str_sderf_array_5[13],

],[

"TC13",

multi_str_time_array_5[14],

multi_str_mnsmp_array_5[14],

multi_str_mdsmp_array_5[14],

multi_str_mnref_array_5[14],

multi_str_mdref_array_5[14],

multi_str_time_array_5[14],

multi_str_snsmp_array_5[14],

multi_str_sdsmp_array_5[14],

multi_str_snref_array_5[14],

multi_str_sderf_array_5[14],

],[

"TC14",

multi_str_time_array_5[15],

multi_str_mnsmp_array_5[15],

multi_str_mdsmp_array_5[15],

multi_str_mnref_array_5[15],

multi_str_mdref_array_5[15],

multi_str_time_array_5[15],

multi_str_snsmp_array_5[15],

multi_str_sdsmp_array_5[15],

multi_str_snref_array_5[15],

multi_str_sderf_array_5[15],

],[

"TC15",

multi_str_time_array_5[16],

multi_str_mnsmp_array_5[16],

multi_str_mdsmp_array_5[16],

multi_str_mnref_array_5[16],

multi_str_mdref_array_5[16],

multi_str_time_array_5[16],

multi_str_snsmp_array_5[16],

multi_str_sdsmp_array_5[16],

multi_str_snref_array_5[16],

multi_str_sderf_array_5[16],

],[

"TC16",

multi_str_time_array_5[17],

multi_str_mnsmp_array_5[17],

multi_str_mdsmp_array_5[17],

multi_str_mnref_array_5[17],

multi_str_mdref_array_5[17],

multi_str_time_array_5[17],

multi_str_snsmp_array_5[17],

multi_str_sdsmp_array_5[17],

multi_str_snref_array_5[17],

multi_str_sderf_array_5[17],

],[

"TC17",

multi_str_time_array_5[18],

multi_str_mnsmp_array_5[18],

multi_str_mdsmp_array_5[18],

multi_str_mnref_array_5[18],

multi_str_mdref_array_5[18],

multi_str_time_array_5[18],

multi_str_snsmp_array_5[18],

multi_str_sdsmp_array_5[18],

multi_str_snref_array_5[18],

multi_str_sderf_array_5[18],

],[

"TC18",

multi_str_time_array_5[19],

multi_str_mnsmp_array_5[19],

multi_str_mdsmp_array_5[19],

multi_str_mnref_array_5[19],

multi_str_mdref_array_5[19],

multi_str_time_array_5[19],

multi_str_snsmp_array_5[19],

multi_str_sdsmp_array_5[19],

multi_str_snref_array_5[19],

multi_str_sderf_array_5[19],

],[

"TC19",

multi_str_time_array_5[20],

multi_str_mnsmp_array_5[20],

multi_str_mdsmp_array_5[20],

multi_str_mnref_array_5[20],

multi_str_mdref_array_5[20],

multi_str_time_array_5[20],

multi_str_snsmp_array_5[20],

multi_str_sdsmp_array_5[20],

multi_str_snref_array_5[20],

multi_str_sderf_array_5[20],

],[

"TC20",

multi_str_time_array_5[21],

multi_str_mnsmp_array_5[21],

multi_str_mdsmp_array_5[21],

multi_str_mnref_array_5[21],

multi_str_mdref_array_5[21],

multi_str_time_array_5[21],

multi_str_snsmp_array_5[21],

multi_str_sdsmp_array_5[21],

multi_str_snref_array_5[21],

multi_str_sderf_array_5[21],

],[

"TC21",

multi_str_time_array_5[22],

multi_str_mnsmp_array_5[22],

multi_str_mdsmp_array_5[22],

multi_str_mnref_array_5[22],

multi_str_mdref_array_5[22],

multi_str_time_array_5[22],

multi_str_snsmp_array_5[22],

multi_str_sdsmp_array_5[22],

multi_str_snref_array_5[22],

multi_str_sderf_array_5[22],

],[

"TC22",

multi_str_time_array_5[23],

multi_str_mnsmp_array_5[23],

multi_str_mdsmp_array_5[23],

multi_str_mnref_array_5[23],

multi_str_mdref_array_5[23],

multi_str_time_array_5[23],

multi_str_snsmp_array_5[23],

multi_str_sdsmp_array_5[23],

multi_str_snref_array_5[23],

multi_str_sderf_array_5[23],

],[

"TC23",

multi_str_time_array_5[24],

multi_str_mnsmp_array_5[24],

multi_str_mdsmp_array_5[24],

multi_str_mnref_array_5[24],

multi_str_mdref_array_5[24],

multi_str_time_array_5[24],

multi_str_snsmp_array_5[24],

multi_str_sdsmp_array_5[24],

multi_str_snref_array_5[24],

multi_str_sderf_array_5[24],

],[

"TC24",

multi_str_time_array_5[25],

multi_str_mnsmp_array_5[25],

multi_str_mdsmp_array_5[25],

multi_str_mnref_array_5[25],

multi_str_mdref_array_5[25],

multi_str_time_array_5[25],

multi_str_snsmp_array_5[25],

multi_str_sdsmp_array_5[25],

multi_str_snref_array_5[25],

multi_str_sderf_array_5[25],

],[

"TC25",

multi_str_time_array_5[26],

multi_str_mnsmp_array_5[26],

multi_str_mdsmp_array_5[26],

multi_str_mnref_array_5[26],

multi_str_mdref_array_5[26],

multi_str_time_array_5[26],

multi_str_snsmp_array_5[26],

multi_str_sdsmp_array_5[26],

multi_str_snref_array_5[26],

multi_str_sderf_array_5[26],

],[

"TC26",

multi_str_time_array_5[27],

multi_str_mnsmp_array_5[27],

multi_str_mdsmp_array_5[27],

multi_str_mnref_array_5[27],

multi_str_mdref_array_5[27],

multi_str_time_array_5[27],

multi_str_snsmp_array_5[27],

multi_str_sdsmp_array_5[27],

multi_str_snref_array_5[27],

multi_str_sderf_array_5[27],

],[

"TC27",

multi_str_time_array_5[28],

multi_str_mnsmp_array_5[28],

multi_str_mdsmp_array_5[28],

multi_str_mnref_array_5[28],

multi_str_mdref_array_5[28],

multi_str_time_array_5[28],

multi_str_snsmp_array_5[28],

multi_str_sdsmp_array_5[28],

multi_str_snref_array_5[28],

multi_str_sderf_array_5[28],

],[

"TC28",

multi_str_time_array_5[29],

multi_str_mnsmp_array_5[29],

multi_str_mdsmp_array_5[29],

multi_str_mnref_array_5[29],

multi_str_mdref_array_5[29],

multi_str_time_array_5[29],

multi_str_snsmp_array_5[29],

multi_str_sdsmp_array_5[29],

multi_str_snref_array_5[29],

multi_str_sderf_array_5[29],

],[

"TC29",

multi_str_time_array_5[30],

multi_str_mnsmp_array_5[30],

multi_str_mdsmp_array_5[30],

multi_str_mnref_array_5[30],

multi_str_mdref_array_5[30],

multi_str_time_array_5[30],

multi_str_snsmp_array_5[30],

multi_str_sdsmp_array_5[30],

multi_str_snref_array_5[30],

multi_str_sderf_array_5[30],

],[

"TC30",

removeCR30(multi_str_time_array_5[31]),

removeCR30(multi_str_mnsmp_array_5[31]),

removeCR30(multi_str_mdsmp_array_5[31]),

removeCR30(multi_str_mnref_array_5[31]),

removeCR30(multi_str_mdref_array_5[31]),

removeCR30(multi_str_time_array_5[31]),

removeCR30(multi_str_snsmp_array_5[31]),

removeCR30(multi_str_sdsmp_array_5[31]),

removeCR30(multi_str_snref_array_5[31]),

removeCR30(multi_str_sderf_array_5[31]),

],[



]

,[

"[MULTI]",

"CH12"

]

,[

"",

"Main",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

"Sub",

"Nsmp",

"Dsmp",

"Nref",

"Dref",

],[

"WHITE",            

multi_str_time_array_6[0],

multi_str_mnsmp_array_6[0],

multi_str_mdsmp_array_6[0],

multi_str_mnref_array_6[0],

multi_str_mdref_array_6[0],

multi_str_time_array_6[0],

multi_str_snsmp_array_6[0],

multi_str_sdsmp_array_6[0],

multi_str_snref_array_6[0],

multi_str_sderf_array_6[0],

],[

"BLACK",            

multi_str_time_array_6[1],

multi_str_mnsmp_array_6[1],

multi_str_mdsmp_array_6[1],

multi_str_mnref_array_6[1],

multi_str_mdref_array_6[1],

multi_str_time_array_6[1],

multi_str_snsmp_array_6[1],

multi_str_sdsmp_array_6[1],

multi_str_snref_array_6[1],

multi_str_sderf_array_6[1],

],[

"TC01",

multi_str_time_array_6[2],

multi_str_mnsmp_array_6[2],

multi_str_mdsmp_array_6[2],

multi_str_mnref_array_6[2],

multi_str_mdref_array_6[2],

multi_str_time_array_6[2],

multi_str_snsmp_array_6[2],

multi_str_sdsmp_array_6[2],

multi_str_snref_array_6[2],

multi_str_sderf_array_6[2],

],[

"TC02",

multi_str_time_array_6[3],

multi_str_mnsmp_array_6[3],

multi_str_mdsmp_array_6[3],

multi_str_mnref_array_6[3],

multi_str_mdref_array_6[3],

multi_str_time_array_6[3],

multi_str_snsmp_array_6[3],

multi_str_sdsmp_array_6[3],

multi_str_snref_array_6[3],

multi_str_sderf_array_6[3],

]

,[

"TC03",

multi_str_time_array_6[4],

multi_str_mnsmp_array_6[4],

multi_str_mdsmp_array_6[4],

multi_str_mnref_array_6[4],

multi_str_mdref_array_6[4],

multi_str_time_array_6[4],

multi_str_snsmp_array_6[4],

multi_str_sdsmp_array_6[4],

multi_str_snref_array_6[4],

multi_str_sderf_array_6[4],

],[

"TC04",

multi_str_time_array_6[5],

multi_str_mnsmp_array_6[5],

multi_str_mdsmp_array_6[5],

multi_str_mnref_array_6[5],

multi_str_mdref_array_6[5],

multi_str_time_array_6[5],

multi_str_snsmp_array_6[5],

multi_str_sdsmp_array_6[5],

multi_str_snref_array_6[5],

multi_str_sderf_array_6[5],

],[

"TC05",

multi_str_time_array_6[6],

multi_str_mnsmp_array_6[6],

multi_str_mdsmp_array_6[6],

multi_str_mnref_array_6[6],

multi_str_mdref_array_6[6],

multi_str_time_array_6[6],

multi_str_snsmp_array_6[6],

multi_str_sdsmp_array_6[6],

multi_str_snref_array_6[6],

multi_str_sderf_array_6[6],

],[

"TC06",

multi_str_time_array_6[7],

multi_str_mnsmp_array_6[7],

multi_str_mdsmp_array_6[7],

multi_str_mnref_array_6[7],

multi_str_mdref_array_6[7],

multi_str_time_array_6[7],

multi_str_snsmp_array_6[7],

multi_str_sdsmp_array_6[7],

multi_str_snref_array_6[7],

multi_str_sderf_array_6[7],

],[

"TC07",

multi_str_time_array_6[8],

multi_str_mnsmp_array_6[8],

multi_str_mdsmp_array_6[8],

multi_str_mnref_array_6[8],

multi_str_mdref_array_6[8],

multi_str_time_array_6[8],

multi_str_snsmp_array_6[8],

multi_str_sdsmp_array_6[8],

multi_str_snref_array_6[8],

multi_str_sderf_array_6[8],

],[

"TC08",

multi_str_time_array_6[9],

multi_str_mnsmp_array_6[9],

multi_str_mdsmp_array_6[9],

multi_str_mnref_array_6[9],

multi_str_mdref_array_6[9],

multi_str_time_array_6[9],

multi_str_snsmp_array_6[9],

multi_str_sdsmp_array_6[9],

multi_str_snref_array_6[9],

multi_str_sderf_array_6[9],

],[

"TC09",

multi_str_time_array_6[10],

multi_str_mnsmp_array_6[10],

multi_str_mdsmp_array_6[10],

multi_str_mnref_array_6[10],

multi_str_mdref_array_6[10],

multi_str_time_array_6[10],

multi_str_snsmp_array_6[10],

multi_str_sdsmp_array_6[10],

multi_str_snref_array_6[10],

multi_str_sderf_array_6[10],

],[

"TC10",

multi_str_time_array_6[11],

multi_str_mnsmp_array_6[11],

multi_str_mdsmp_array_6[11],

multi_str_mnref_array_6[11],

multi_str_mdref_array_6[11],

multi_str_time_array_6[11],

multi_str_snsmp_array_6[11],

multi_str_sdsmp_array_6[11],

multi_str_snref_array_6[11],

multi_str_sderf_array_6[11],

],[

"TC11",

multi_str_time_array_6[12],

multi_str_mnsmp_array_6[12],

multi_str_mdsmp_array_6[12],

multi_str_mnref_array_6[12],

multi_str_mdref_array_6[12],

multi_str_time_array_6[12],

multi_str_snsmp_array_6[12],

multi_str_sdsmp_array_6[12],

multi_str_snref_array_6[12],

multi_str_sderf_array_6[12],

],[

"TC12",

multi_str_time_array_6[13],

multi_str_mnsmp_array_6[13],

multi_str_mdsmp_array_6[13],

multi_str_mnref_array_6[13],

multi_str_mdref_array_6[13],

multi_str_time_array_6[13],

multi_str_snsmp_array_6[13],

multi_str_sdsmp_array_6[13],

multi_str_snref_array_6[13],

multi_str_sderf_array_6[13],

],[

"TC13",

multi_str_time_array_6[14],

multi_str_mnsmp_array_6[14],

multi_str_mdsmp_array_6[14],

multi_str_mnref_array_6[14],

multi_str_mdref_array_6[14],

multi_str_time_array_6[14],

multi_str_snsmp_array_6[14],

multi_str_sdsmp_array_6[14],

multi_str_snref_array_6[14],

multi_str_sderf_array_6[14],

],[

"TC14",

multi_str_time_array_6[15],

multi_str_mnsmp_array_6[15],

multi_str_mdsmp_array_6[15],

multi_str_mnref_array_6[15],

multi_str_mdref_array_6[15],

multi_str_time_array_6[15],

multi_str_snsmp_array_6[15],

multi_str_sdsmp_array_6[15],

multi_str_snref_array_6[15],

multi_str_sderf_array_6[15],

],[

"TC15",

multi_str_time_array_6[16],

multi_str_mnsmp_array_6[16],

multi_str_mdsmp_array_6[16],

multi_str_mnref_array_6[16],

multi_str_mdref_array_6[16],

multi_str_time_array_6[16],

multi_str_snsmp_array_6[16],

multi_str_sdsmp_array_6[16],

multi_str_snref_array_6[16],

multi_str_sderf_array_6[16],

],[

"TC16",

multi_str_time_array_6[17],

multi_str_mnsmp_array_6[17],

multi_str_mdsmp_array_6[17],

multi_str_mnref_array_6[17],

multi_str_mdref_array_6[17],

multi_str_time_array_6[17],

multi_str_snsmp_array_6[17],

multi_str_sdsmp_array_6[17],

multi_str_snref_array_6[17],

multi_str_sderf_array_6[17],

],[

"TC17",

multi_str_time_array_6[18],

multi_str_mnsmp_array_6[18],

multi_str_mdsmp_array_6[18],

multi_str_mnref_array_6[18],

multi_str_mdref_array_6[18],

multi_str_time_array_6[18],

multi_str_snsmp_array_6[18],

multi_str_sdsmp_array_6[18],

multi_str_snref_array_6[18],

multi_str_sderf_array_6[18],

],[

"TC18",

multi_str_time_array_6[19],

multi_str_mnsmp_array_6[19],

multi_str_mdsmp_array_6[19],

multi_str_mnref_array_6[19],

multi_str_mdref_array_6[19],

multi_str_time_array_6[19],

multi_str_snsmp_array_6[19],

multi_str_sdsmp_array_6[19],

multi_str_snref_array_6[19],

multi_str_sderf_array_6[19],

],[

"TC19",

multi_str_time_array_6[20],

multi_str_mnsmp_array_6[20],

multi_str_mdsmp_array_6[20],

multi_str_mnref_array_6[20],

multi_str_mdref_array_6[20],

multi_str_time_array_6[20],

multi_str_snsmp_array_6[20],

multi_str_sdsmp_array_6[20],

multi_str_snref_array_6[20],

multi_str_sderf_array_6[20],

],[

"TC20",

multi_str_time_array_6[21],

multi_str_mnsmp_array_6[21],

multi_str_mdsmp_array_6[21],

multi_str_mnref_array_6[21],

multi_str_mdref_array_6[21],

multi_str_time_array_6[21],

multi_str_snsmp_array_6[21],

multi_str_sdsmp_array_6[21],

multi_str_snref_array_6[21],

multi_str_sderf_array_6[21],

],[

"TC21",

multi_str_time_array_6[22],

multi_str_mnsmp_array_6[22],

multi_str_mdsmp_array_6[22],

multi_str_mnref_array_6[22],

multi_str_mdref_array_6[22],

multi_str_time_array_6[22],

multi_str_snsmp_array_6[22],

multi_str_sdsmp_array_6[22],

multi_str_snref_array_6[22],

multi_str_sderf_array_6[22],

],[

"TC22",

multi_str_time_array_6[23],

multi_str_mnsmp_array_6[23],

multi_str_mdsmp_array_6[23],

multi_str_mnref_array_6[23],

multi_str_mdref_array_6[23],

multi_str_time_array_6[23],

multi_str_snsmp_array_6[23],

multi_str_sdsmp_array_6[23],

multi_str_snref_array_6[23],

multi_str_sderf_array_6[23],

],[

"TC23",

multi_str_time_array_6[24],

multi_str_mnsmp_array_6[24],

multi_str_mdsmp_array_6[24],

multi_str_mnref_array_6[24],

multi_str_mdref_array_6[24],

multi_str_time_array_6[24],

multi_str_snsmp_array_6[24],

multi_str_sdsmp_array_6[24],

multi_str_snref_array_6[24],

multi_str_sderf_array_6[24],

],[

"TC24",

multi_str_time_array_6[25],

multi_str_mnsmp_array_6[25],

multi_str_mdsmp_array_6[25],

multi_str_mnref_array_6[25],

multi_str_mdref_array_6[25],

multi_str_time_array_6[25],

multi_str_snsmp_array_6[25],

multi_str_sdsmp_array_6[25],

multi_str_snref_array_6[25],

multi_str_sderf_array_6[25],

],[

"TC25",

multi_str_time_array_6[26],

multi_str_mnsmp_array_6[26],

multi_str_mdsmp_array_6[26],

multi_str_mnref_array_6[26],

multi_str_mdref_array_6[26],

multi_str_time_array_6[26],

multi_str_snsmp_array_6[26],

multi_str_sdsmp_array_6[26],

multi_str_snref_array_6[26],

multi_str_sderf_array_6[26],

],[

"TC26",

multi_str_time_array_6[27],

multi_str_mnsmp_array_6[27],

multi_str_mdsmp_array_6[27],

multi_str_mnref_array_6[27],

multi_str_mdref_array_6[27],

multi_str_time_array_6[27],

multi_str_snsmp_array_6[27],

multi_str_sdsmp_array_6[27],

multi_str_snref_array_6[27],

multi_str_sderf_array_6[27],

],[

"TC27",

multi_str_time_array_6[28],

multi_str_mnsmp_array_6[28],

multi_str_mdsmp_array_6[28],

multi_str_mnref_array_6[28],

multi_str_mdref_array_6[28],

multi_str_time_array_6[28],

multi_str_snsmp_array_6[28],

multi_str_sdsmp_array_6[28],

multi_str_snref_array_6[28],

multi_str_sderf_array_6[28],

],[

"TC28",

multi_str_time_array_6[29],

multi_str_mnsmp_array_6[29],

multi_str_mdsmp_array_6[29],

multi_str_mnref_array_6[29],

multi_str_mdref_array_6[29],

multi_str_time_array_6[29],

multi_str_snsmp_array_6[29],

multi_str_sdsmp_array_6[29],

multi_str_snref_array_6[29],

multi_str_sderf_array_6[29],

],[

"TC29",

multi_str_time_array_6[30],

multi_str_mnsmp_array_6[30],

multi_str_mdsmp_array_6[30],

multi_str_mnref_array_6[30],

multi_str_mdref_array_6[30],

multi_str_time_array_6[30],

multi_str_snsmp_array_6[30],

multi_str_sdsmp_array_6[30],

multi_str_snref_array_6[30],

multi_str_sderf_array_6[30],

],[

"TC30",

singleremoveapce30(multi_str_time_array_6[31]),

singleremoveapce30(multi_str_mnsmp_array_6[31]),

singleremoveapce30(multi_str_mdsmp_array_6[31]),

singleremoveapce30(multi_str_mnref_array_6[31]),

singleremoveapce30(multi_str_mdref_array_6[31]),

singleremoveapce30(multi_str_time_array_6[31]),

singleremoveapce30(multi_str_snsmp_array_6[31]),

singleremoveapce30(multi_str_sdsmp_array_6[31]),

singleremoveapce30(multi_str_snref_array_6[31]),

singleremoveapce30(multi_str_sderf_array_6[31]),

],[



],[

"***** ↑↑↑ タイムコースA/Dデータ ↑↑↑ *****",

],[



],[



],[

"***** ↓↓↓ EZ側バーコード ゲイン設定情報 ↓↓↓ *****",

],[



],[



],[

"[マルチ  ]",

"",

"CH8",

"CH7",

"CH6",

"CH5",

"CH4",

"CH3",

"CH2",

"CH1",

]

,[

"",

"[Gain]",

str_bar_gain__array_6[7],

str_bar_gain__array_6[6],

str_bar_gain__array_6[5],

str_bar_gain__array_6[4],

str_bar_gain__array_6[3],

str_bar_gain__array_6[2],

str_bar_gain__array_6[1],

str_bar_gain__array_6[0],

],[

"",

"[WHT ]",

singleremoveapce30(str_bar_white__array_6[7]),

singleremoveapce30(str_bar_white__array_6[6]),

singleremoveapce30(str_bar_white__array_6[5]),

singleremoveapce30(str_bar_white__array_6[4]),

singleremoveapce30(str_bar_white__array_6[3]),

singleremoveapce30(str_bar_white__array_6[2]),

singleremoveapce30(str_bar_white__array_6[1]),

singleremoveapce30(str_bar_white__array_6[0]),

],[

"",

"[BLK ]",

singleremoveapce30(str_bar_black__array_6[7]),

singleremoveapce30(str_bar_black__array_6[6]),

singleremoveapce30(str_bar_black__array_6[5]),

singleremoveapce30(str_bar_black__array_6[4]),

singleremoveapce30(str_bar_black__array_6[3]),

singleremoveapce30(str_bar_black__array_6[2]),

singleremoveapce30(str_bar_black__array_6[1]),

singleremoveapce30(str_bar_black__array_6[0]),

],[

"",

"[Slvl]",

singleremoveapce30(str_bar_slvl__array_6[7]),

singleremoveapce30(str_bar_slvl__array_6[6]),

singleremoveapce30(str_bar_slvl__array_6[5]),

singleremoveapce30(str_bar_slvl__array_6[4]),

singleremoveapce30(str_bar_slvl__array_6[3]),

singleremoveapce30(str_bar_slvl__array_6[2]),

singleremoveapce30(str_bar_slvl__array_6[1]),

singleremoveapce30(str_bar_slvl__array_6[0]),

],[



],[



],[

"[シングル]",

"",

"CH6",

"CH5",

"CH4",

"CH3",

"CH2",

"CH2"

],[

"",

"[Gain]",

singleremoveapce30(str_bar_single_gain__array_6[5]),

singleremoveapce30(str_bar_single_gain__array_6[4]),

singleremoveapce30(str_bar_single_gain__array_6[3]),

singleremoveapce30(str_bar_single_gain__array_6[2]),

singleremoveapce30(str_bar_single_gain__array_6[1]),

singleremoveapce30(str_bar_single_gain__array_6[0]),

],[

"",

"[WHT ]",

removeCR30(str_bar_single_white__array_6[5]),

str_bar_single_white__array_6[4],

str_bar_single_white__array_6[3],

str_bar_single_white__array_6[2],

str_bar_single_white__array_6[1],

removeCR30(str_bar_single_white__array_6[0]),

],[

"",

"[BLK ]",

removeCR30(str_bar_single_black__array_6[5]),

str_bar_single_black__array_6[4],

str_bar_single_black__array_6[3],

str_bar_single_black__array_6[2],

str_bar_single_black__array_6[1],

str_bar_single_black__array_6[0],

],[

"",

"[Slvl]",

removeCR30(str_bar_single_slvl__array_6[5]),

str_bar_single_slvl__array_6[4],

str_bar_single_slvl__array_6[3],

str_bar_single_slvl__array_6[2],

str_bar_single_slvl__array_6[1],

str_bar_single_slvl__array_6[0],

],[



],[

"***** ↑↑↑ EZ側バーコード ゲイン設定情報 ↑↑↑ *****",

]

,[



],[



],[

"***** ↓↓↓ EZ側バーコード 測定時データ ↓↓↓ *****"

],[



],[



],[

"[マルチ  ]",

],

[

"",

"[BIT]",

str_bar_bit__array_6[0],

"[ITEM]",

str_bar_bit__array_6[1],

"[LOT]",

str_bar_bit__array_6[2],

],

[



],

[

"",

"",

"CH8",

"CH7",

"CH6",

"CH5",

"CH4",

"CH3",

"CH2",

"CH1",

] ,

[

"",

"",

str_bar_ch8_array_6[0],

str_bar_ch7_array_6[0],

str_bar_ch6_array_6[0],

str_bar_ch5_array_6[0],

str_bar_ch4_array_6[0],

str_bar_ch3_array_6[0],

str_bar_ch2_array_6[0],

str_bar_ch1_array_6[0],

],

[

"",

"",

str_bar_ch8_array_6[1],

str_bar_ch7_array_6[1],

str_bar_ch6_array_6[1],

str_bar_ch5_array_6[1],

str_bar_ch4_array_6[1],

str_bar_ch3_array_6[1],

str_bar_ch2_array_6[1],

str_bar_ch1_array_6[1],



],

[

"",

"",

str_bar_ch8_array_6[2],

str_bar_ch7_array_6[2],

str_bar_ch6_array_6[2],

str_bar_ch5_array_6[2],

str_bar_ch4_array_6[2],

str_bar_ch3_array_6[2],

str_bar_ch2_array_6[2],

str_bar_ch1_array_6[2],

],

[

"",

"",

str_bar_ch8_array_6[3],

str_bar_ch7_array_6[3],

str_bar_ch6_array_6[3],

str_bar_ch5_array_6[3],

str_bar_ch4_array_6[3],

str_bar_ch3_array_6[3],

str_bar_ch2_array_6[3],

str_bar_ch1_array_6[3],

],

[

"",

"",

str_bar_ch8_array_6[4],

str_bar_ch7_array_6[4],

str_bar_ch6_array_6[4],

str_bar_ch5_array_6[4],

str_bar_ch4_array_6[4],

str_bar_ch3_array_6[4],

str_bar_ch2_array_6[4],

str_bar_ch1_array_6[4],



],

[

"",

"",

str_bar_ch8_array_6[5],

str_bar_ch7_array_6[5],

str_bar_ch6_array_6[5],

str_bar_ch5_array_6[5],

str_bar_ch4_array_6[5],

str_bar_ch3_array_6[5],

str_bar_ch2_array_6[5],

str_bar_ch1_array_6[5],



],

[

"",

"",

str_bar_ch8_array_6[6],

str_bar_ch7_array_6[6],

str_bar_ch6_array_6[6],

str_bar_ch5_array_6[6],

str_bar_ch4_array_6[6],

str_bar_ch3_array_6[6],

str_bar_ch2_array_6[6],

str_bar_ch1_array_6[6],



],

[

"",

"",

str_bar_ch8_array_6[7],

str_bar_ch7_array_6[7],

str_bar_ch6_array_6[7],

str_bar_ch5_array_6[7],

str_bar_ch4_array_6[7],

str_bar_ch3_array_6[7],

str_bar_ch2_array_6[7],

str_bar_ch1_array_6[7],





],

[

"",

"",

str_bar_ch8_array_6[8],

str_bar_ch7_array_6[8],

str_bar_ch6_array_6[8],

str_bar_ch5_array_6[8],

str_bar_ch4_array_6[8],

str_bar_ch3_array_6[8],

str_bar_ch2_array_6[8],

str_bar_ch1_array_6[8],



]      ,

[

"",

"",

str_bar_ch8_array_6[9],

str_bar_ch7_array_6[9],

str_bar_ch6_array_6[9],

str_bar_ch5_array_6[9],

str_bar_ch4_array_6[9],

str_bar_ch3_array_6[9],

str_bar_ch2_array_6[9],

str_bar_ch1_array_6[9],



] ,

[

"",

"",

str_bar_ch8_array_6[10],

str_bar_ch7_array_6[10],

str_bar_ch6_array_6[10],

str_bar_ch5_array_6[10],

str_bar_ch4_array_6[10],

str_bar_ch3_array_6[10],

str_bar_ch2_array_6[10],

str_bar_ch1_array_6[10],



] ,

[

"",

"",

str_bar_ch8_array_6[11],

str_bar_ch7_array_6[11],

str_bar_ch6_array_6[11],

str_bar_ch5_array_6[11],

str_bar_ch4_array_6[11],

str_bar_ch3_array_6[11],

str_bar_ch2_array_6[11],

str_bar_ch1_array_6[11],



] ,

[

"",

"",

str_bar_ch8_array_6[12],

str_bar_ch7_array_6[12],

str_bar_ch6_array_6[12],

str_bar_ch5_array_6[12],

str_bar_ch4_array_6[12],

str_bar_ch3_array_6[12],

str_bar_ch2_array_6[12],

str_bar_ch1_array_6[12],



] ,

[

"",

"",

str_bar_ch8_array_6[13],

str_bar_ch7_array_6[13],

str_bar_ch6_array_6[13],

str_bar_ch5_array_6[13],

str_bar_ch4_array_6[13],

str_bar_ch3_array_6[13],

str_bar_ch2_array_6[13],

str_bar_ch1_array_6[13],



] ,

[

"",

"",

str_bar_ch8_array_6[14],

str_bar_ch7_array_6[14],

str_bar_ch6_array_6[14],

str_bar_ch5_array_6[14],

str_bar_ch4_array_6[14],

str_bar_ch3_array_6[14],

str_bar_ch2_array_6[14],

str_bar_ch1_array_6[14],



] ,

[

"",

"",

str_bar_ch8_array_6[15],

str_bar_ch7_array_6[15],

str_bar_ch6_array_6[15],

str_bar_ch5_array_6[15],

str_bar_ch4_array_6[15],

str_bar_ch3_array_6[15],

str_bar_ch2_array_6[15],

str_bar_ch1_array_6[15],



] ,

[

"",

"",

str_bar_ch8_array_6[16],

str_bar_ch7_array_6[16],

str_bar_ch6_array_6[16],

str_bar_ch5_array_6[16],

str_bar_ch4_array_6[16],

str_bar_ch3_array_6[16],

str_bar_ch2_array_6[16],

str_bar_ch1_array_6[16],



] ,

[

"",

"",

str_bar_ch8_array_6[17],

str_bar_ch7_array_6[17],

str_bar_ch6_array_6[17],

str_bar_ch5_array_6[17],

str_bar_ch4_array_6[17],

str_bar_ch3_array_6[17],

str_bar_ch2_array_6[17],

str_bar_ch1_array_6[17],



] ,

[

"",

"",

str_bar_ch8_array_6[18],

str_bar_ch7_array_6[18],

str_bar_ch6_array_6[18],

str_bar_ch5_array_6[18],

str_bar_ch4_array_6[18],

str_bar_ch3_array_6[18],

str_bar_ch2_array_6[18],

str_bar_ch1_array_6[18],



] ,

[

"",

"",

str_bar_ch8_array_6[19],

str_bar_ch7_array_6[19],

str_bar_ch6_array_6[19],

str_bar_ch5_array_6[19],

str_bar_ch4_array_6[19],

str_bar_ch3_array_6[19],

str_bar_ch2_array_6[19],

str_bar_ch1_array_6[19],



] ,

[

"",

"",

str_bar_ch8_array_6[20],

str_bar_ch7_array_6[20],

str_bar_ch6_array_6[20],

str_bar_ch5_array_6[20],

str_bar_ch4_array_6[20],

str_bar_ch3_array_6[20],

str_bar_ch2_array_6[20],

str_bar_ch1_array_6[20],



] ,

[

"",

"",

str_bar_ch8_array_6[21],

str_bar_ch7_array_6[21],

str_bar_ch6_array_6[21],

str_bar_ch5_array_6[21],

str_bar_ch4_array_6[21],

str_bar_ch3_array_6[21],

str_bar_ch2_array_6[21],

str_bar_ch1_array_6[21],



] ,

[

"",

"",

str_bar_ch8_array_6[22],

str_bar_ch7_array_6[22],

str_bar_ch6_array_6[22],

str_bar_ch5_array_6[22],

str_bar_ch4_array_6[22],

str_bar_ch3_array_6[22],

str_bar_ch2_array_6[22],

str_bar_ch1_array_6[22],



] ,

[

"",

"",

str_bar_ch8_array_6[23],

str_bar_ch7_array_6[23],

str_bar_ch6_array_6[23],

str_bar_ch5_array_6[23],

str_bar_ch4_array_6[23],

str_bar_ch3_array_6[23],

str_bar_ch2_array_6[23],

str_bar_ch1_array_6[23],



] ,

[

"",

"",

str_bar_ch8_array_6[24],

str_bar_ch7_array_6[24],

str_bar_ch6_array_6[24],

str_bar_ch5_array_6[24],

str_bar_ch4_array_6[24],

str_bar_ch3_array_6[24],

str_bar_ch2_array_6[24],

str_bar_ch1_array_6[24],



] ,

[

"",

"",

str_bar_ch8_array_6[25],

str_bar_ch7_array_6[25],

str_bar_ch6_array_6[25],

str_bar_ch5_array_6[25],

str_bar_ch4_array_6[25],

str_bar_ch3_array_6[25],

str_bar_ch2_array_6[25],

str_bar_ch1_array_6[25],



] ,

[

"",

"",

str_bar_ch8_array_6[26],

str_bar_ch7_array_6[26],

str_bar_ch6_array_6[26],

str_bar_ch5_array_6[26],

str_bar_ch4_array_6[26],

str_bar_ch3_array_6[26],

str_bar_ch2_array_6[26],

str_bar_ch1_array_6[26],



] ,

[

"",

"",

str_bar_ch8_array_6[27],

str_bar_ch7_array_6[27],

str_bar_ch6_array_6[27],

str_bar_ch5_array_6[27],

str_bar_ch4_array_6[27],

str_bar_ch3_array_6[27],

str_bar_ch2_array_6[27],

str_bar_ch1_array_6[27],



] ,

[

"",

"",

str_bar_ch8_array_6[28],

str_bar_ch7_array_6[28],

str_bar_ch6_array_6[28],

str_bar_ch5_array_6[28],

str_bar_ch4_array_6[28],

str_bar_ch3_array_6[28],

str_bar_ch2_array_6[28],

str_bar_ch1_array_6[28],



] ,

[

"",

"",

str_bar_ch8_array_6[29],

str_bar_ch7_array_6[29],

str_bar_ch6_array_6[29],

str_bar_ch5_array_6[29],

str_bar_ch4_array_6[29],

str_bar_ch3_array_6[29],

str_bar_ch2_array_6[29],

str_bar_ch1_array_6[29],



] ,

[

"",

"",

str_bar_ch8_array_6[30],

str_bar_ch7_array_6[30],

str_bar_ch6_array_6[30],

str_bar_ch5_array_6[30],

str_bar_ch4_array_6[30],

str_bar_ch3_array_6[30],

str_bar_ch2_array_6[30],

str_bar_ch1_array_6[30],



] ,

[

"",

"",

str_bar_ch8_array_6[31],

str_bar_ch7_array_6[31],

str_bar_ch6_array_6[31],

str_bar_ch5_array_6[31],

str_bar_ch4_array_6[31],

str_bar_ch3_array_6[31],

str_bar_ch2_array_6[31],

str_bar_ch1_array_6[31],



] ,

[

"",

"",

str_bar_ch8_array_6[32],

str_bar_ch7_array_6[32],

str_bar_ch6_array_6[32],

str_bar_ch5_array_6[32],

str_bar_ch4_array_6[32],

str_bar_ch3_array_6[32],

str_bar_ch2_array_6[32],

str_bar_ch1_array_6[32],



] ,

[

"",

"",

str_bar_ch8_array_6[33],

str_bar_ch7_array_6[33],

str_bar_ch6_array_6[33],

str_bar_ch5_array_6[33],

str_bar_ch4_array_6[33],

str_bar_ch3_array_6[33],

str_bar_ch2_array_6[33],

str_bar_ch1_array_6[33],



],

[

"",

"",

str_bar_ch8_array_6[34],

str_bar_ch7_array_6[34],

str_bar_ch6_array_6[34],

str_bar_ch5_array_6[34],

str_bar_ch4_array_6[34],

str_bar_ch3_array_6[34],

str_bar_ch2_array_6[34],

str_bar_ch1_array_6[34],



],

[

"",

"",

str_bar_ch8_array_6[35],

str_bar_ch7_array_6[35],

str_bar_ch6_array_6[35],

str_bar_ch5_array_6[35],

str_bar_ch4_array_6[35],

str_bar_ch3_array_6[35],

str_bar_ch2_array_6[35],

str_bar_ch1_array_6[35],



],

[

"",

"",

str_bar_ch8_array_6[36],

str_bar_ch7_array_6[36],

str_bar_ch6_array_6[36],

str_bar_ch5_array_6[36],

str_bar_ch4_array_6[36],

str_bar_ch3_array_6[36],

str_bar_ch2_array_6[36],

str_bar_ch1_array_6[36],



],

[

"",

"",

str_bar_ch8_array_6[37],

str_bar_ch7_array_6[37],

str_bar_ch6_array_6[37],

str_bar_ch5_array_6[37],

str_bar_ch4_array_6[37],

str_bar_ch3_array_6[37],

str_bar_ch2_array_6[37],

str_bar_ch1_array_6[37],



],

[

"",

"",

str_bar_ch8_array_6[38],

str_bar_ch7_array_6[38],

str_bar_ch6_array_6[38],

str_bar_ch5_array_6[38],

str_bar_ch4_array_6[38],

str_bar_ch3_array_6[38],

str_bar_ch2_array_6[38],

str_bar_ch1_array_6[38],



],

[

"",

"",

str_bar_ch8_array_6[39],

str_bar_ch7_array_6[39],

str_bar_ch6_array_6[39],

str_bar_ch5_array_6[39],

str_bar_ch4_array_6[39],

str_bar_ch3_array_6[39],

str_bar_ch2_array_6[39],

str_bar_ch1_array_6[39],



],[



],

[

"[シングル]",

],

[

"CH1",

"[BIT]",

str_ch1_bar_gain__array_6[0],

"[ITEM]",

str_ch1_bar_gain__array_6[1],

"[LOT]",

removeCR30(str_ch1_bar_gain__array_6[2]),

],

[

"CH2",

"[BIT]",

str_ch2_bar_gain__array_6[0],

"[ITEM]",

str_ch2_bar_gain__array_6[1],

"[LOT]",

removeCR30(str_ch2_bar_gain__array_6[2]),

],

[

"CH3",

"[BIT]",

str_ch3_bar_gain__array_6[0],

"[ITEM]",

str_ch3_bar_gain__array_6[1],

"[LOT]",

removeCR30(str_ch3_bar_gain__array_6[2]),

],

[

"CH4",

"[BIT]",

str_ch4_bar_gain__array_6[0],

"[ITEM]",

str_ch4_bar_gain__array_6[1],

"[LOT]",

removeCR30(str_ch4_bar_gain__array_6[2]),

],

[

"CH5",

"[BIT]",

str_ch5_bar_gain__array_6[0],

"[ITEM]",

str_ch5_bar_gain__array_6[1],

"[LOT]",

removeCR30(str_ch5_bar_gain__array_6[2]),

],

[

"CH6",

"[BIT]",

str_ch6_bar_gain__array_6[0],

"[ITEM]",

str_ch6_bar_gain__array_6[1],

"[LOT]",

removeCR30(str_ch6_bar_gain__array_6[2]),

],

[



],

[

"[Forward]",

" ",

"CH6",

"CH5",

"CH4",

"CH3",

"CH2",

"CH1",

],

[

"",

"",

str_BAR_CH6_array_6[0],

str_BAR_CH5_array_5[0],

str_BAR_CH4_array_2[0],

str_BAR_CH3_array_2[0],

str_BAR_CH22_array_2[0],

str_BAR_CH2_array_2[0],

],

[

"",

"",

str_BAR_CH6_array_6[1],

str_BAR_CH5_array_5[1],

str_BAR_CH4_array_2[1],

str_BAR_CH3_array_2[1],

str_BAR_CH22_array_2[1],

str_BAR_CH2_array_2[1],

],

[

"",

"",

str_BAR_CH6_array_6[2],

str_BAR_CH5_array_5[2],

str_BAR_CH4_array_2[2],

str_BAR_CH3_array_2[2],

str_BAR_CH22_array_2[2],

str_BAR_CH2_array_2[2],

],

[

"",

"",

str_BAR_CH6_array_6[3],

str_BAR_CH5_array_5[3],

str_BAR_CH4_array_2[3],

str_BAR_CH3_array_2[3],

str_BAR_CH22_array_2[3],

str_BAR_CH2_array_2[3],

],

[

"",

"",

str_BAR_CH6_array_6[4],

str_BAR_CH5_array_5[4],

str_BAR_CH4_array_2[4],

str_BAR_CH3_array_2[4],

str_BAR_CH22_array_2[4],

str_BAR_CH2_array_2[4],

],

[

"",

"",

str_BAR_CH6_array_6[5],

str_BAR_CH5_array_5[5],

str_BAR_CH4_array_2[5],

str_BAR_CH3_array_2[5],

str_BAR_CH22_array_2[5],

str_BAR_CH2_array_2[5],

],

[

"",

"",

str_BAR_CH6_array_6[6],

str_BAR_CH5_array_5[6],

str_BAR_CH4_array_2[6],

str_BAR_CH3_array_2[6],

str_BAR_CH22_array_2[6],

str_BAR_CH2_array_2[6],

],

[

"",

"",

str_BAR_CH6_array_6[7],

str_BAR_CH5_array_5[7],

str_BAR_CH4_array_2[7],

str_BAR_CH3_array_2[7],

str_BAR_CH22_array_2[7],

str_BAR_CH2_array_2[7],

],

[

"",

"",

str_BAR_CH6_array_6[8],

str_BAR_CH5_array_5[8],

str_BAR_CH4_array_2[8],

str_BAR_CH3_array_2[8],

str_BAR_CH22_array_2[8],

str_BAR_CH2_array_2[8],

],

[

"",

"",

str_BAR_CH6_array_6[9],

str_BAR_CH5_array_5[9],

str_BAR_CH4_array_2[9],

str_BAR_CH3_array_2[9],

str_BAR_CH22_array_2[9],

str_BAR_CH2_array_2[9],

],

[

"",

"",

str_BAR_CH6_array_6[10],

str_BAR_CH5_array_5[10],

str_BAR_CH4_array_2[10],

str_BAR_CH3_array_2[10],

str_BAR_CH22_array_2[10],

str_BAR_CH2_array_2[10],

],

[

"",

"",

str_BAR_CH6_array_6[11],

str_BAR_CH5_array_5[11],

str_BAR_CH4_array_2[11],

str_BAR_CH3_array_2[11],

str_BAR_CH22_array_2[11],

str_BAR_CH2_array_2[11],

],

[

"",

"",

str_BAR_CH6_array_6[12],

str_BAR_CH5_array_5[12],

str_BAR_CH4_array_2[12],

str_BAR_CH3_array_2[12],

str_BAR_CH22_array_2[12],

str_BAR_CH2_array_2[12],

],

[

"",

"",

str_BAR_CH6_array_6[13],

str_BAR_CH5_array_5[13],

str_BAR_CH4_array_2[13],

str_BAR_CH3_array_2[13],

str_BAR_CH22_array_2[13],

str_BAR_CH2_array_2[13],

],

[

"",

"",

str_BAR_CH6_array_6[14],

str_BAR_CH5_array_5[14],

str_BAR_CH4_array_2[14],

str_BAR_CH3_array_2[14],

str_BAR_CH22_array_2[14],

str_BAR_CH2_array_2[14],

],

[

"",

"",

str_BAR_CH6_array_6[15],

str_BAR_CH5_array_5[15],

str_BAR_CH4_array_2[15],

str_BAR_CH3_array_2[15],

str_BAR_CH22_array_2[15],

str_BAR_CH2_array_2[15],

],

[

"",

"",

str_BAR_CH6_array_6[16],

str_BAR_CH5_array_5[16],

str_BAR_CH4_array_2[16],

str_BAR_CH3_array_2[16],

str_BAR_CH22_array_2[16],

str_BAR_CH2_array_2[16],

],

[

"",

"",

str_BAR_CH6_array_6[17],

str_BAR_CH5_array_5[17],

str_BAR_CH4_array_2[17],

str_BAR_CH3_array_2[17],

str_BAR_CH22_array_2[17],

str_BAR_CH2_array_2[17],

],

[

"",

"",

str_BAR_CH6_array_6[18],

str_BAR_CH5_array_5[18],

str_BAR_CH4_array_2[18],

str_BAR_CH3_array_2[18],

str_BAR_CH22_array_2[18],

str_BAR_CH2_array_2[18],

],

[

"",

"",

str_BAR_CH6_array_6[19],

str_BAR_CH5_array_5[19],

str_BAR_CH4_array_2[19],

str_BAR_CH3_array_2[19],

str_BAR_CH22_array_2[19],

str_BAR_CH2_array_2[19],

],

[

"",

"",

str_BAR_CH6_array_6[20],

str_BAR_CH5_array_5[20],

str_BAR_CH4_array_2[20],

str_BAR_CH3_array_2[20],

str_BAR_CH22_array_2[20],

str_BAR_CH2_array_2[20],

],

[

"",

"",

str_BAR_CH6_array_6[21],

str_BAR_CH5_array_5[21],

str_BAR_CH4_array_2[21],

str_BAR_CH3_array_2[21],

str_BAR_CH22_array_2[21],

str_BAR_CH2_array_2[21],

],

[

"",

"",

str_BAR_CH6_array_6[22],

str_BAR_CH5_array_5[22],

str_BAR_CH4_array_2[22],

str_BAR_CH3_array_2[22],

str_BAR_CH22_array_2[22],

str_BAR_CH2_array_2[22],

],

[

"",

"",

str_BAR_CH6_array_6[23],

str_BAR_CH5_array_5[23],

str_BAR_CH4_array_2[23],

str_BAR_CH3_array_2[23],

str_BAR_CH22_array_2[23],

str_BAR_CH2_array_2[23],

],

[

"",

"",

str_BAR_CH6_array_6[24],

str_BAR_CH5_array_5[24],

str_BAR_CH4_array_2[24],

str_BAR_CH3_array_2[24],

str_BAR_CH22_array_2[24],

str_BAR_CH2_array_2[24],

],

[

"",

"",

str_BAR_CH6_array_6[25],

str_BAR_CH5_array_5[25],

str_BAR_CH4_array_2[25],

str_BAR_CH3_array_2[25],

str_BAR_CH22_array_2[25],

str_BAR_CH2_array_2[25],

],

[

"",

"",

str_BAR_CH6_array_6[26],

str_BAR_CH5_array_5[26],

str_BAR_CH4_array_2[26],

str_BAR_CH3_array_2[26],

str_BAR_CH22_array_2[26],

str_BAR_CH2_array_2[26],

],

[

"",

"",

str_BAR_CH6_array_6[27],

str_BAR_CH5_array_5[27],

str_BAR_CH4_array_2[27],

str_BAR_CH3_array_2[27],

str_BAR_CH22_array_2[27],

str_BAR_CH2_array_2[27],

],

[

"",

"",

str_BAR_CH6_array_6[28],

str_BAR_CH5_array_5[28],

str_BAR_CH4_array_2[28],

str_BAR_CH3_array_2[28],

str_BAR_CH22_array_2[28],

str_BAR_CH2_array_2[28],

],

[

"",

"",

str_BAR_CH6_array_6[29],

str_BAR_CH5_array_5[29],

str_BAR_CH4_array_2[29],

str_BAR_CH3_array_2[29],

str_BAR_CH22_array_2[29],

str_BAR_CH2_array_2[29],

],

[

"",

"",

str_BAR_CH6_array_6[30],

str_BAR_CH5_array_5[30],

str_BAR_CH4_array_2[30],

str_BAR_CH3_array_2[30],

str_BAR_CH22_array_2[30],

str_BAR_CH2_array_2[30],

],

[

"",

"",

str_BAR_CH6_array_6[31],

str_BAR_CH5_array_5[31],

str_BAR_CH4_array_2[31],

str_BAR_CH3_array_2[31],

str_BAR_CH22_array_2[31],

str_BAR_CH2_array_2[31],

],

[

"",

"",

str_BAR_CH6_array_6[32],

str_BAR_CH5_array_5[32],

str_BAR_CH4_array_2[32],

str_BAR_CH3_array_2[32],

str_BAR_CH22_array_2[32],

str_BAR_CH2_array_2[32],

],

[

"",

"",

str_BAR_CH6_array_6[33],

str_BAR_CH5_array_5[33],

str_BAR_CH4_array_2[33],

str_BAR_CH3_array_2[33],

str_BAR_CH22_array_2[33],

str_BAR_CH2_array_2[33],

],

[

"",

"",

str_BAR_CH6_array_6[34],

str_BAR_CH5_array_5[34],

str_BAR_CH4_array_2[34],

str_BAR_CH3_array_2[34],

str_BAR_CH22_array_2[34],

str_BAR_CH2_array_2[34],

],

[

"",

"",

str_BAR_CH6_array_6[35],

str_BAR_CH5_array_5[35],

str_BAR_CH4_array_2[35],

str_BAR_CH3_array_2[35],

str_BAR_CH22_array_2[35],

str_BAR_CH2_array_2[35],

],

[

"",

"",

str_BAR_CH6_array_6[36],

str_BAR_CH5_array_5[36],

str_BAR_CH4_array_2[36],

str_BAR_CH3_array_2[36],

str_BAR_CH22_array_2[36],

str_BAR_CH2_array_2[36],

],

[

"",

"",

str_BAR_CH6_array_6[37],

str_BAR_CH5_array_5[37],

str_BAR_CH4_array_2[37],

str_BAR_CH3_array_2[37],

str_BAR_CH22_array_2[37],

str_BAR_CH2_array_2[37],

],

[

"",

"",

str_BAR_CH6_array_6[38],

str_BAR_CH5_array_5[38],

str_BAR_CH4_array_2[38],

str_BAR_CH3_array_2[38],

str_BAR_CH22_array_2[38],

str_BAR_CH2_array_2[38],

],

[

"",

"",

str_BAR_CH6_array_6[39],

str_BAR_CH5_array_5[39],

str_BAR_CH4_array_2[39],

str_BAR_CH3_array_2[39],

str_BAR_CH22_array_2[39],

str_BAR_CH2_array_2[39],

],

[

"",

"",

str_BAR_CH6_array_6[40],

str_BAR_CH5_array_5[40],

str_BAR_CH4_array_2[40],

str_BAR_CH3_array_2[40],

str_BAR_CH22_array_2[40],

str_BAR_CH2_array_2[40],

],

[

"",

"",

str_BAR_CH6_array_6[41],

str_BAR_CH5_array_5[41],

str_BAR_CH4_array_2[41],

str_BAR_CH3_array_2[41],

str_BAR_CH22_array_2[41],

str_BAR_CH2_array_2[41],

],

[

"",

"",

str_BAR_CH6_array_6[42],

str_BAR_CH5_array_5[42],

str_BAR_CH4_array_2[42],

str_BAR_CH3_array_2[42],

str_BAR_CH22_array_2[42],

str_BAR_CH2_array_2[42],

],

[

"",

"",

str_BAR_CH6_array_6[43],

str_BAR_CH5_array_5[43],

str_BAR_CH4_array_2[43],

str_BAR_CH3_array_2[43],

str_BAR_CH22_array_2[43],

str_BAR_CH2_array_2[43],

],

[

"",

"",

str_BAR_CH6_array_6[44],

str_BAR_CH5_array_5[44],

str_BAR_CH4_array_2[44],

str_BAR_CH3_array_2[44],

str_BAR_CH22_array_2[44],

str_BAR_CH2_array_2[44],

],

[

"",

"",

str_BAR_CH6_array_6[45],

str_BAR_CH5_array_5[45],

str_BAR_CH4_array_2[45],

str_BAR_CH3_array_2[45],

str_BAR_CH22_array_2[45],

str_BAR_CH2_array_2[45],

],

[

"",

"",

str_BAR_CH6_array_6[46],

str_BAR_CH5_array_5[46],

str_BAR_CH4_array_2[46],

str_BAR_CH3_array_2[46],

str_BAR_CH22_array_2[46],

str_BAR_CH2_array_2[46],

],

[

"",

"",

str_BAR_CH6_array_6[47],

str_BAR_CH5_array_5[47],

str_BAR_CH4_array_2[47],

str_BAR_CH3_array_2[47],

str_BAR_CH22_array_2[47],

str_BAR_CH2_array_2[47],

],

[

"",

"",

str_BAR_CH6_array_6[48],

str_BAR_CH5_array_5[48],

str_BAR_CH4_array_2[48],

str_BAR_CH3_array_2[48],

str_BAR_CH22_array_2[48],

str_BAR_CH2_array_2[48],

],

[

"",

"",

str_BAR_CH6_array_6[49],

str_BAR_CH5_array_5[49],

str_BAR_CH4_array_2[49],

str_BAR_CH3_array_2[49],

str_BAR_CH22_array_2[49],

str_BAR_CH2_array_2[49],

],

[

"",

"",

str_BAR_CH6_array_6[50],

str_BAR_CH5_array_5[50],

str_BAR_CH4_array_2[50],

str_BAR_CH3_array_2[50],

str_BAR_CH22_array_2[50],

str_BAR_CH2_array_2[50],

],

[

"",

"",

str_BAR_CH6_array_6[51],

str_BAR_CH5_array_5[51],

str_BAR_CH4_array_2[51],

str_BAR_CH3_array_2[51],

str_BAR_CH22_array_2[51],

str_BAR_CH2_array_2[51],

],

[

"",

"",

str_BAR_CH6_array_6[52],

str_BAR_CH5_array_5[52],

str_BAR_CH4_array_2[52],

str_BAR_CH3_array_2[52],

str_BAR_CH22_array_2[52],

str_BAR_CH2_array_2[52],

],

[

"",

"",

str_BAR_CH6_array_6[53],

str_BAR_CH5_array_5[53],

str_BAR_CH4_array_2[53],

str_BAR_CH3_array_2[53],

str_BAR_CH22_array_2[53],

str_BAR_CH2_array_2[53],

],

[

"",

"",

str_BAR_CH6_array_6[54],

str_BAR_CH5_array_5[54],

str_BAR_CH4_array_2[54],

str_BAR_CH3_array_2[54],

str_BAR_CH22_array_2[54],

str_BAR_CH2_array_2[54],

],

[

"",

"",

str_BAR_CH6_array_6[55],

str_BAR_CH5_array_5[55],

str_BAR_CH4_array_2[55],

str_BAR_CH3_array_2[55],

str_BAR_CH22_array_2[55],

str_BAR_CH2_array_2[55],

],

[

"",

"",

str_BAR_CH6_array_6[56],

str_BAR_CH5_array_5[56],

str_BAR_CH4_array_2[56],

str_BAR_CH3_array_2[56],

str_BAR_CH22_array_2[56],

str_BAR_CH2_array_2[56],

],

[

"",

"",

str_BAR_CH6_array_6[57],

str_BAR_CH5_array_5[57],

str_BAR_CH4_array_2[57],

str_BAR_CH3_array_2[57],

str_BAR_CH22_array_2[57],

str_BAR_CH2_array_2[57],

],

[

"",

"",

str_BAR_CH6_array_6[58],

str_BAR_CH5_array_5[58],

str_BAR_CH4_array_2[58],

str_BAR_CH3_array_2[58],

str_BAR_CH22_array_2[58],

str_BAR_CH2_array_2[58],

],

[

"",

"",

str_BAR_CH6_array_6[59],

str_BAR_CH5_array_5[59],

str_BAR_CH4_array_2[59],

str_BAR_CH3_array_2[59],

str_BAR_CH22_array_2[59],

str_BAR_CH2_array_2[59],

],

[

"",

"",

str_BAR_CH6_array_6[60],

str_BAR_CH5_array_5[60],

str_BAR_CH4_array_2[60],

str_BAR_CH3_array_2[60],

str_BAR_CH22_array_2[60],

str_BAR_CH2_array_2[60],

],

[

"",

"",

str_BAR_CH6_array_6[61],

str_BAR_CH5_array_5[61],

str_BAR_CH4_array_2[61],

str_BAR_CH3_array_2[61],

str_BAR_CH22_array_2[61],

str_BAR_CH2_array_2[61],

],

[

"",

"",

str_BAR_CH6_array_6[62 ],

str_BAR_CH5_array_5[62],

str_BAR_CH4_array_2[62],

str_BAR_CH3_array_2[62],

str_BAR_CH22_array_2[62],

str_BAR_CH2_array_2[62],

],

[

"",

"",

str_BAR_CH6_array_6[63],

str_BAR_CH5_array_5[63],

str_BAR_CH4_array_2[63],

str_BAR_CH3_array_2[63],

str_BAR_CH22_array_2[63],

str_BAR_CH2_array_2[63],

],

[

"",

"",

str_BAR_CH6_array_6[64],

str_BAR_CH5_array_5[64],

str_BAR_CH4_array_2[64],

str_BAR_CH3_array_2[64],

str_BAR_CH22_array_2[64],

str_BAR_CH2_array_2[64],

],

[

"",

"",

str_BAR_CH6_array_6[65],

str_BAR_CH5_array_5[65],

str_BAR_CH4_array_2[65],

str_BAR_CH3_array_2[65],

str_BAR_CH22_array_2[65],

str_BAR_CH2_array_2[65],

],

[

"",

"",

str_BAR_CH6_array_6[66],

str_BAR_CH5_array_5[66],

str_BAR_CH4_array_2[66],

str_BAR_CH3_array_2[66],

str_BAR_CH22_array_2[66],

str_BAR_CH2_array_2[66],

],

[

"",

"",

str_BAR_CH6_array_6[67],

str_BAR_CH5_array_5[67],

str_BAR_CH4_array_2[67],

str_BAR_CH3_array_2[67],

str_BAR_CH22_array_2[67],

str_BAR_CH2_array_2[67],

],

[

"",

"",

str_BAR_CH6_array_6[68],

str_BAR_CH5_array_5[68],

str_BAR_CH4_array_2[68],

str_BAR_CH3_array_2[68],

str_BAR_CH22_array_2[68],

str_BAR_CH2_array_2[68],

],

[

"",

"",

str_BAR_CH6_array_6[69],

str_BAR_CH5_array_5[69],

str_BAR_CH4_array_2[69],

str_BAR_CH3_array_2[69],

str_BAR_CH22_array_2[69],

str_BAR_CH2_array_2[69],

],

[

"",

"",

str_BAR_CH6_array_6[70],

str_BAR_CH5_array_5[70],

str_BAR_CH4_array_2[70],

str_BAR_CH3_array_2[70],

str_BAR_CH22_array_2[70],

str_BAR_CH2_array_2[70],

],

[

"",

"",

str_BAR_CH6_array_6[71],

str_BAR_CH5_array_5[71],

str_BAR_CH4_array_2[71],

str_BAR_CH3_array_2[71],

str_BAR_CH22_array_2[71],

str_BAR_CH2_array_2[71],

],

[

"",

"",

str_BAR_CH6_array_6[72],

str_BAR_CH5_array_5[72],

str_BAR_CH4_array_2[72],

str_BAR_CH3_array_2[72],

str_BAR_CH22_array_2[72],

str_BAR_CH2_array_2[72],

],

[

"",

"",

str_BAR_CH6_array_6[73],

str_BAR_CH5_array_5[73],

str_BAR_CH4_array_2[73],

str_BAR_CH3_array_2[73],

str_BAR_CH22_array_2[73],

str_BAR_CH2_array_2[73],

],

[

"",

"",

str_BAR_CH6_array_6[74],

str_BAR_CH5_array_5[74],

str_BAR_CH4_array_2[74],

str_BAR_CH3_array_2[74],

str_BAR_CH22_array_2[74],

str_BAR_CH2_array_2[74],

],

[

"",

"",

str_BAR_CH6_array_6[75],

str_BAR_CH5_array_5[75],

str_BAR_CH4_array_2[75],

str_BAR_CH3_array_2[75],

str_BAR_CH22_array_2[75],

str_BAR_CH2_array_2[75],

],

[

"",

"",

str_BAR_CH6_array_6[76],

str_BAR_CH5_array_5[76],

str_BAR_CH4_array_2[76],

str_BAR_CH3_array_2[76],

str_BAR_CH22_array_2[76],

str_BAR_CH2_array_2[76],

],

[

"",

"",

str_BAR_CH6_array_6[77],

str_BAR_CH5_array_5[77],

str_BAR_CH4_array_2[77],

str_BAR_CH3_array_2[77],

str_BAR_CH22_array_2[77],

str_BAR_CH2_array_2[77],

],

[

"",

"",

str_BAR_CH6_array_6[78],

str_BAR_CH5_array_5[78],

str_BAR_CH4_array_2[78],

str_BAR_CH3_array_2[78],

str_BAR_CH22_array_2[78],

str_BAR_CH2_array_2[78],

],

[

"",

"",

str_BAR_CH6_array_6[79],

str_BAR_CH5_array_5[79],

str_BAR_CH4_array_2[79],

str_BAR_CH3_array_2[79],

str_BAR_CH22_array_2[79],

str_BAR_CH2_array_2[79],

],

[

"",

"",

str_BAR_CH6_array_6[80],

str_BAR_CH5_array_5[80],

str_BAR_CH4_array_2[80],

str_BAR_CH3_array_2[80],

str_BAR_CH22_array_2[80],

str_BAR_CH2_array_2[80],

],

[

"",

"",

str_BAR_CH6_array_6[81],

str_BAR_CH5_array_5[81],

str_BAR_CH4_array_2[81],

str_BAR_CH3_array_2[81],

str_BAR_CH22_array_2[81],

str_BAR_CH2_array_2[81],

],

[

"",

"",

str_BAR_CH6_array_6[82],

str_BAR_CH5_array_5[82],

str_BAR_CH4_array_2[82],

str_BAR_CH3_array_2[82],

str_BAR_CH22_array_2[82],

str_BAR_CH2_array_2[82],

],

[

"",

"",

str_BAR_CH6_array_6[83],

str_BAR_CH5_array_5[83],

str_BAR_CH4_array_2[83],

str_BAR_CH3_array_2[83],

str_BAR_CH22_array_2[83],

str_BAR_CH2_array_2[83],

],

[

"",

"",

str_BAR_CH6_array_6[84],

str_BAR_CH5_array_5[84],

str_BAR_CH4_array_2[84],

str_BAR_CH3_array_2[84],

str_BAR_CH22_array_2[84],

str_BAR_CH2_array_2[84],

],

[

"",

"",

str_BAR_CH6_array_6[85],

str_BAR_CH5_array_5[85],

str_BAR_CH4_array_2[85],

str_BAR_CH3_array_2[85],

str_BAR_CH22_array_2[85],

str_BAR_CH2_array_2[85],

],

[

"",

"",

str_BAR_CH6_array_6[86],

str_BAR_CH5_array_5[86],

str_BAR_CH4_array_2[86],

str_BAR_CH3_array_2[86],

str_BAR_CH22_array_2[86],

str_BAR_CH2_array_2[86],

],

[

"",

"",

str_BAR_CH6_array_6[87],

str_BAR_CH5_array_5[87],

str_BAR_CH4_array_2[87],

str_BAR_CH3_array_2[87],

str_BAR_CH22_array_2[87],

str_BAR_CH2_array_2[87],

],

[

"",

"",

str_BAR_CH6_array_6[88],

str_BAR_CH5_array_5[88],

str_BAR_CH4_array_2[88],

str_BAR_CH3_array_2[88],

str_BAR_CH22_array_2[88],

str_BAR_CH2_array_2[88],

],

[

"",

"",

str_BAR_CH6_array_6[89],

str_BAR_CH5_array_5[89],

str_BAR_CH4_array_2[89],

str_BAR_CH3_array_2[89],

str_BAR_CH22_array_2[89],

str_BAR_CH2_array_2[89],

],

[

"",

"",

str_BAR_CH6_array_6[90],

str_BAR_CH5_array_5[90],

str_BAR_CH4_array_2[90],

str_BAR_CH3_array_2[90],

str_BAR_CH22_array_2[90],

str_BAR_CH2_array_2[90],

],

[

"",

"",

str_BAR_CH6_array_6[91],

str_BAR_CH5_array_5[91],

str_BAR_CH4_array_2[91],

str_BAR_CH3_array_2[91],

str_BAR_CH22_array_2[91],

str_BAR_CH2_array_2[91],

],

[

"",

"",

str_BAR_CH6_array_6[92],

str_BAR_CH5_array_5[92],

str_BAR_CH4_array_2[92],

str_BAR_CH3_array_2[92],

str_BAR_CH22_array_2[92],

str_BAR_CH2_array_2[92],

],

[

"",

"",

str_BAR_CH6_array_6[93],

str_BAR_CH5_array_5[93],

str_BAR_CH4_array_2[93],

str_BAR_CH3_array_2[93],

str_BAR_CH22_array_2[93],

str_BAR_CH2_array_2[93],

],

[

"",

"",

str_BAR_CH6_array_6[94],

str_BAR_CH5_array_5[94],

str_BAR_CH4_array_2[94],

str_BAR_CH3_array_2[94],

str_BAR_CH22_array_2[94],

str_BAR_CH2_array_2[94],

],

[

"",

"",

str_BAR_CH6_array_6[95],

str_BAR_CH5_array_5[95],

str_BAR_CH4_array_2[95],

str_BAR_CH3_array_2[95],

str_BAR_CH22_array_2[95],

str_BAR_CH2_array_2[95],

],

[

"",

"",

str_BAR_CH6_array_6[96],

str_BAR_CH5_array_5[96 ],

str_BAR_CH4_array_2[96],

str_BAR_CH3_array_2[96],

str_BAR_CH22_array_2[96],

str_BAR_CH2_array_2[96],

],

[

"",

"",

str_BAR_CH6_array_6[97],

str_BAR_CH5_array_5[97],

str_BAR_CH4_array_2[97],

str_BAR_CH3_array_2[97],

str_BAR_CH22_array_2[97],

str_BAR_CH2_array_2[97],

],

[

"",

"",

str_BAR_CH6_array_6[98],

str_BAR_CH5_array_5[98],

str_BAR_CH4_array_2[98],

str_BAR_CH3_array_2[98],

str_BAR_CH22_array_2[98],

str_BAR_CH2_array_2[98],

],

[

"",

"",

str_BAR_CH6_array_6[99],

str_BAR_CH5_array_5[99],

str_BAR_CH4_array_2[99],

str_BAR_CH3_array_2[99],

str_BAR_CH22_array_2[99],

str_BAR_CH2_array_2[99],

],

[

"",

"",

str_BAR_CH6_array_6[100],

str_BAR_CH5_array_5[100],

str_BAR_CH4_array_2[100],

str_BAR_CH3_array_2[100],

str_BAR_CH22_array_2[100],

str_BAR_CH2_array_2[100],

],

[

"",

"",

str_BAR_CH6_array_6[101],

str_BAR_CH5_array_5[101],

str_BAR_CH4_array_2[101],

str_BAR_CH3_array_2[101],

str_BAR_CH22_array_2[101],

str_BAR_CH2_array_2[101],

],

[

"",

"",

str_BAR_CH6_array_6[102],

str_BAR_CH5_array_5[102],

str_BAR_CH4_array_2[102],

str_BAR_CH3_array_2[102],

str_BAR_CH22_array_2[102],

str_BAR_CH2_array_2[102],

],

[

"",

"",

str_BAR_CH6_array_6[103],

str_BAR_CH5_array_5[103],

str_BAR_CH4_array_2[103],

str_BAR_CH3_array_2[103],

str_BAR_CH22_array_2[103],

str_BAR_CH2_array_2[103],

],

[

"",

"",

str_BAR_CH6_array_6[104],

str_BAR_CH5_array_5[104],

str_BAR_CH4_array_2[104],

str_BAR_CH3_array_2[104],

str_BAR_CH22_array_2[104],

str_BAR_CH2_array_2[104],

],

[

"",

"",

str_BAR_CH6_array_6[105],

str_BAR_CH5_array_5[105],

str_BAR_CH4_array_2[105],

str_BAR_CH3_array_2[105],

str_BAR_CH22_array_2[105],

str_BAR_CH2_array_2[105],

],

[

"",

"",

str_BAR_CH6_array_6[106],

str_BAR_CH5_array_5[106],

str_BAR_CH4_array_2[106],

str_BAR_CH3_array_2[106],

str_BAR_CH22_array_2[106],

str_BAR_CH2_array_2[106],

],

[

"",

"",

str_BAR_CH6_array_6[107],

str_BAR_CH5_array_5[107],

str_BAR_CH4_array_2[107],

str_BAR_CH3_array_2[107],

str_BAR_CH22_array_2[107],

str_BAR_CH2_array_2[107],

],

[

"",

"",

str_BAR_CH6_array_6[108],

str_BAR_CH5_array_5[108],

str_BAR_CH4_array_2[108],

str_BAR_CH3_array_2[108],

str_BAR_CH22_array_2[108],

str_BAR_CH2_array_2[108],

],

[

"",

"",

str_BAR_CH6_array_6[109],

str_BAR_CH5_array_5[109],

str_BAR_CH4_array_2[109],

str_BAR_CH3_array_2[109],

str_BAR_CH22_array_2[109],

str_BAR_CH2_array_2[109],

],

[

"",

"",

str_BAR_CH6_array_6[110],

str_BAR_CH5_array_5[110],

str_BAR_CH4_array_2[110],

str_BAR_CH3_array_2[110],

str_BAR_CH22_array_2[110],

str_BAR_CH2_array_2[110],

],

[

"",

"",

str_BAR_CH6_array_6[111],

str_BAR_CH5_array_5[111],

str_BAR_CH4_array_2[111],

str_BAR_CH3_array_2[111],

str_BAR_CH22_array_2[111],

str_BAR_CH2_array_2[111],

],

[

"",

"",

str_BAR_CH6_array_6[112],

str_BAR_CH5_array_5[112],

str_BAR_CH4_array_2[112],

str_BAR_CH3_array_2[112],

str_BAR_CH22_array_2[112],

str_BAR_CH2_array_2[112],

],

[

"",

"",

str_BAR_CH6_array_6[113],

str_BAR_CH5_array_5[113],

str_BAR_CH4_array_2[113],

str_BAR_CH3_array_2[113],

str_BAR_CH22_array_2[113],

str_BAR_CH2_array_2[113],

],

[

"",

"",

str_BAR_CH6_array_6[114],

str_BAR_CH5_array_5[114],

str_BAR_CH4_array_2[114],

str_BAR_CH3_array_2[114],

str_BAR_CH22_array_2[114],

str_BAR_CH2_array_2[114],

],

[

"",

"",

str_BAR_CH6_array_6[115],

str_BAR_CH5_array_5[115],

str_BAR_CH4_array_2[115],

str_BAR_CH3_array_2[115],

str_BAR_CH22_array_2[115],

str_BAR_CH2_array_2[115],

],

[

"",

"",

str_BAR_CH6_array_6[116],

str_BAR_CH5_array_5[116],

str_BAR_CH4_array_2[116],

str_BAR_CH3_array_2[116],

str_BAR_CH22_array_2[116],

str_BAR_CH2_array_2[116],

],

[

"",

"",

str_BAR_CH6_array_6[117],

str_BAR_CH5_array_5[117],

str_BAR_CH4_array_2[117],

str_BAR_CH3_array_2[117],

str_BAR_CH22_array_2[117],

str_BAR_CH2_array_2[117],

],

[

"",

"",

str_BAR_CH6_array_6[118],

str_BAR_CH5_array_5[118],

str_BAR_CH4_array_2[118],

str_BAR_CH3_array_2[118],

str_BAR_CH22_array_2[118],

str_BAR_CH2_array_2[118],

],

[

"",

"",

str_BAR_CH6_array_6[119],

str_BAR_CH5_array_5[119],

str_BAR_CH4_array_2[119],

str_BAR_CH3_array_2[119],

str_BAR_CH22_array_2[119],

str_BAR_CH2_array_2[119],

],

[

"",

"",

str_BAR_CH6_array_6[120],

str_BAR_CH5_array_5[120],

str_BAR_CH4_array_2[120],

str_BAR_CH3_array_2[120],

str_BAR_CH22_array_2[120],

str_BAR_CH2_array_2[120],

],

[

"",

"",

str_BAR_CH6_array_6[121],

str_BAR_CH5_array_5[121],

str_BAR_CH4_array_2[121],

str_BAR_CH3_array_2[121],

str_BAR_CH22_array_2[121],

str_BAR_CH2_array_2[121],

],

[

"",

"",

str_BAR_CH6_array_6[122],

str_BAR_CH5_array_5[122],

str_BAR_CH4_array_2[122],

str_BAR_CH3_array_2[122],

str_BAR_CH22_array_2[122],

str_BAR_CH2_array_2[122],

],

[

"",

"",

str_BAR_CH6_array_6[123],

str_BAR_CH5_array_5[123],

str_BAR_CH4_array_2[123],

str_BAR_CH3_array_2[123],

str_BAR_CH22_array_2[123],

str_BAR_CH2_array_2[123],

],

[

"",

"",

str_BAR_CH6_array_6[124],

str_BAR_CH5_array_5[124],

str_BAR_CH4_array_2[124],

str_BAR_CH3_array_2[124],

str_BAR_CH22_array_2[124],

str_BAR_CH2_array_2[124],

],

[

"",

"",

str_BAR_CH6_array_6[125],

str_BAR_CH5_array_5[125],

str_BAR_CH4_array_2[125],

str_BAR_CH3_array_2[125],

str_BAR_CH22_array_2[125],

str_BAR_CH2_array_2[125],

],

[

"",

"",

str_BAR_CH6_array_6[126],

str_BAR_CH5_array_5[126],

str_BAR_CH4_array_2[126],

str_BAR_CH3_array_2[126],

str_BAR_CH22_array_2[126],

str_BAR_CH2_array_2[126],

],

[

"",

"",

str_BAR_CH6_array_6[127],

str_BAR_CH5_array_5[127],

str_BAR_CH4_array_2[127],

str_BAR_CH3_array_2[127],

str_BAR_CH22_array_2[127],

str_BAR_CH2_array_2[127],

],

[

"",

"",

str_BAR_CH6_array_6[128],

str_BAR_CH5_array_5[128],

str_BAR_CH4_array_2[128],

str_BAR_CH3_array_2[128],

str_BAR_CH22_array_2[128],

str_BAR_CH2_array_2[128],

],

[

"",

"",

str_BAR_CH6_array_6[129],

str_BAR_CH5_array_5[129],

str_BAR_CH4_array_2[129],

str_BAR_CH3_array_2[129],

str_BAR_CH22_array_2[129],

str_BAR_CH2_array_2[129],

],

[

"",

"",

str_BAR_CH6_array_6[130],

str_BAR_CH5_array_5[130],

str_BAR_CH4_array_2[130],

str_BAR_CH3_array_2[130],

str_BAR_CH22_array_2[130],

str_BAR_CH2_array_2[130],

],

[

"",

"",

str_BAR_CH6_array_6[131],

str_BAR_CH5_array_5[131],

str_BAR_CH4_array_2[131],

str_BAR_CH3_array_2[131],

str_BAR_CH22_array_2[131],

str_BAR_CH2_array_2[131],

],

[

"",

"",

str_BAR_CH6_array_6[132],

str_BAR_CH5_array_5[132],

str_BAR_CH4_array_2[132],

str_BAR_CH3_array_2[132],

str_BAR_CH22_array_2[132],

str_BAR_CH2_array_2[132],

],

[

"",

"",

str_BAR_CH6_array_6[133],

str_BAR_CH5_array_5[133],

str_BAR_CH4_array_2[133],

str_BAR_CH3_array_2[133],

str_BAR_CH22_array_2[133],

str_BAR_CH2_array_2[133],

],

[

"",

"",

str_BAR_CH6_array_6[134],

str_BAR_CH5_array_5[134],

str_BAR_CH4_array_2[134],

str_BAR_CH3_array_2[134],

str_BAR_CH22_array_2[134],

str_BAR_CH2_array_2[134],

],

[

"",

"",

str_BAR_CH6_array_6[135],

str_BAR_CH5_array_5[135],

str_BAR_CH4_array_2[135],

str_BAR_CH3_array_2[135],

str_BAR_CH22_array_2[135],

str_BAR_CH2_array_2[135],

],

[

"",

"",

str_BAR_CH6_array_6[136],

str_BAR_CH5_array_5[136],

str_BAR_CH4_array_2[136],

str_BAR_CH3_array_2[136],

str_BAR_CH22_array_2[136],

str_BAR_CH2_array_2[136],

],

[

"",

"",

str_BAR_CH6_array_6[137],

str_BAR_CH5_array_5[137],

str_BAR_CH4_array_2[137],

str_BAR_CH3_array_2[137],

str_BAR_CH22_array_2[137],

str_BAR_CH2_array_2[137],

],

[

"",

"",

str_BAR_CH6_array_6[138],

str_BAR_CH5_array_5[138],

str_BAR_CH4_array_2[138],

str_BAR_CH3_array_2[138],

str_BAR_CH22_array_2[138],

str_BAR_CH2_array_2[138],

],

[

"[Backward]",

" ",

"CH6",

"CH5",

"CH4",

"CH3",

"CH2",

"CH1",

],

[

"",

"",

str_BARAD_CH6_array_6[0],

str_BARAD_CH5_array_5[0],

str_BARAD_CH4_array_2[0],

str_BARAD_CH3_array_2[0],

str_BARAD_CH22_array_2[0],

str_BARAD_CH2_array_2[0],

],

[

"",

"",

str_BARAD_CH6_array_6[1],

str_BARAD_CH5_array_5[1],

str_BARAD_CH4_array_2[1],

str_BARAD_CH3_array_2[1],

str_BARAD_CH22_array_2[1],

str_BARAD_CH2_array_2[1],

],

[

"",

"",

str_BARAD_CH6_array_6[2],

str_BARAD_CH5_array_5[2],

str_BARAD_CH4_array_2[2],

str_BARAD_CH3_array_2[2],

str_BARAD_CH22_array_2[2],

str_BARAD_CH2_array_2[2],

],

[

"",

"",

str_BARAD_CH6_array_6[3],

str_BARAD_CH5_array_5[3],

str_BARAD_CH4_array_2[3],

str_BARAD_CH3_array_2[3],

str_BARAD_CH22_array_2[3],

str_BARAD_CH2_array_2[3],

],

[

"",

"",

str_BARAD_CH6_array_6[4],

str_BARAD_CH5_array_5[4],

str_BARAD_CH4_array_2[4],

str_BARAD_CH3_array_2[4],

str_BARAD_CH22_array_2[4],

str_BARAD_CH2_array_2[4],

],

[

"",

"",

str_BARAD_CH6_array_6[5],

str_BARAD_CH5_array_5[5],

str_BARAD_CH4_array_2[5],

str_BARAD_CH3_array_2[5],

str_BARAD_CH22_array_2[5],

str_BARAD_CH2_array_2[5],

],

[

"",

"",

str_BARAD_CH6_array_6[6],

str_BARAD_CH5_array_5[6],

str_BARAD_CH4_array_2[6],

str_BARAD_CH3_array_2[6],

str_BARAD_CH22_array_2[6],

str_BARAD_CH2_array_2[6],

],

[

"",

"",

str_BARAD_CH6_array_6[7],

str_BARAD_CH5_array_5[7],

str_BARAD_CH4_array_2[7],

str_BARAD_CH3_array_2[7],

str_BARAD_CH22_array_2[7],

str_BARAD_CH2_array_2[7],

],

[

"",

"",

str_BARAD_CH6_array_6[8],

str_BARAD_CH5_array_5[8],

str_BARAD_CH4_array_2[8],

str_BARAD_CH3_array_2[8],

str_BARAD_CH22_array_2[8],

str_BARAD_CH2_array_2[8],

],

[

"",

"",

str_BARAD_CH6_array_6[9],

str_BARAD_CH5_array_5[9],

str_BARAD_CH4_array_2[9],

str_BARAD_CH3_array_2[9],

str_BARAD_CH22_array_2[9],

str_BARAD_CH2_array_2[9],

],

[

"",

"",

str_BARAD_CH6_array_6[10],

str_BARAD_CH5_array_5[10],

str_BARAD_CH4_array_2[10],

str_BARAD_CH3_array_2[10],

str_BARAD_CH22_array_2[10],

str_BARAD_CH2_array_2[10],

],

[

"",

"",

str_BARAD_CH6_array_6[11],

str_BARAD_CH5_array_5[11],

str_BARAD_CH4_array_2[11],

str_BARAD_CH3_array_2[11],

str_BARAD_CH22_array_2[11],

str_BARAD_CH2_array_2[11],

],

[

"",

"",

str_BARAD_CH6_array_6[12],

str_BARAD_CH5_array_5[12],

str_BARAD_CH4_array_2[12],

str_BARAD_CH3_array_2[12],

str_BARAD_CH22_array_2[12],

str_BARAD_CH2_array_2[12],

],

[

"",

"",

str_BARAD_CH6_array_6[13],

str_BARAD_CH5_array_5[13],

str_BARAD_CH4_array_2[13],

str_BARAD_CH3_array_2[13],

str_BARAD_CH22_array_2[13],

str_BARAD_CH2_array_2[13],

],

[

"",

"",

str_BARAD_CH6_array_6[14],

str_BARAD_CH5_array_5[14],

str_BARAD_CH4_array_2[14],

str_BARAD_CH3_array_2[14],

str_BARAD_CH22_array_2[14],

str_BARAD_CH2_array_2[14],

],

[

"",

"",

str_BARAD_CH6_array_6[15],

str_BARAD_CH5_array_5[15],

str_BARAD_CH4_array_2[15],

str_BARAD_CH3_array_2[15],

str_BARAD_CH22_array_2[15],

str_BARAD_CH2_array_2[15],

],

[

"",

"",

str_BARAD_CH6_array_6[16],

str_BARAD_CH5_array_5[16],

str_BARAD_CH4_array_2[16],

str_BARAD_CH3_array_2[16],

str_BARAD_CH22_array_2[16],

str_BARAD_CH2_array_2[16],

],

[

"",

"",

str_BARAD_CH6_array_6[17],

str_BARAD_CH5_array_5[17],

str_BARAD_CH4_array_2[17],

str_BARAD_CH3_array_2[17],

str_BARAD_CH22_array_2[17],

str_BARAD_CH2_array_2[17],

],

[

"",

"",

str_BARAD_CH6_array_6[18],

str_BARAD_CH5_array_5[18],

str_BARAD_CH4_array_2[18],

str_BARAD_CH3_array_2[18],

str_BARAD_CH22_array_2[18],

str_BARAD_CH2_array_2[18],

],

[

"",

"",

str_BARAD_CH6_array_6[19],

str_BARAD_CH5_array_5[19],

str_BARAD_CH4_array_2[19],

str_BARAD_CH3_array_2[19],

str_BARAD_CH22_array_2[19],

str_BARAD_CH2_array_2[19],

],

[

"",

"",

str_BARAD_CH6_array_6[20],

str_BARAD_CH5_array_5[20],

str_BARAD_CH4_array_2[20],

str_BARAD_CH3_array_2[20],

str_BARAD_CH22_array_2[20],

str_BARAD_CH2_array_2[20],

],

[

"",

"",

str_BARAD_CH6_array_6[21],

str_BARAD_CH5_array_5[21],

str_BARAD_CH4_array_2[21],

str_BARAD_CH3_array_2[21],

str_BARAD_CH22_array_2[21],

str_BARAD_CH2_array_2[21],

],

[

"",

"",

str_BARAD_CH6_array_6[22],

str_BARAD_CH5_array_5[22],

str_BARAD_CH4_array_2[22],

str_BARAD_CH3_array_2[22],

str_BARAD_CH22_array_2[22],

str_BARAD_CH2_array_2[22],

],

[

"",

"",

str_BARAD_CH6_array_6[23],

str_BARAD_CH5_array_5[23],

str_BARAD_CH4_array_2[23],

str_BARAD_CH3_array_2[23],

str_BARAD_CH22_array_2[23],

str_BARAD_CH2_array_2[23],

],

[

"",

"",

str_BARAD_CH6_array_6[24],

str_BARAD_CH5_array_5[24],

str_BARAD_CH4_array_2[24],

str_BARAD_CH3_array_2[24],

str_BARAD_CH22_array_2[24],

str_BARAD_CH2_array_2[24],

],

[

"",

"",

str_BARAD_CH6_array_6[25],

str_BARAD_CH5_array_5[25],

str_BARAD_CH4_array_2[25],

str_BARAD_CH3_array_2[25],

str_BARAD_CH22_array_2[25],

str_BARAD_CH2_array_2[25],

],

[

"",

"",

str_BARAD_CH6_array_6[26],

str_BARAD_CH5_array_5[26],

str_BARAD_CH4_array_2[26],

str_BARAD_CH3_array_2[26],

str_BARAD_CH22_array_2[26],

str_BARAD_CH2_array_2[26],

],

[

"",

"",

str_BARAD_CH6_array_6[27],

str_BARAD_CH5_array_5[27],

str_BARAD_CH4_array_2[27],

str_BARAD_CH3_array_2[27],

str_BARAD_CH22_array_2[27],

str_BARAD_CH2_array_2[27],

],

[

"",

"",

str_BARAD_CH6_array_6[28],

str_BARAD_CH5_array_5[28],

str_BARAD_CH4_array_2[28],

str_BARAD_CH3_array_2[28],

str_BARAD_CH22_array_2[28],

str_BARAD_CH2_array_2[28],

],

[

"",

"",

str_BARAD_CH6_array_6[29],

str_BARAD_CH5_array_5[29],

str_BARAD_CH4_array_2[29],

str_BARAD_CH3_array_2[29],

str_BARAD_CH22_array_2[29],

str_BARAD_CH2_array_2[29],

],

[

"",

"",

str_BARAD_CH6_array_6[30],

str_BARAD_CH5_array_5[30],

str_BARAD_CH4_array_2[30],

str_BARAD_CH3_array_2[30],

str_BARAD_CH22_array_2[30],

str_BARAD_CH2_array_2[30],

],

[

"",

"",

str_BARAD_CH6_array_6[31],

str_BARAD_CH5_array_5[31],

str_BARAD_CH4_array_2[31],

str_BARAD_CH3_array_2[31],

str_BARAD_CH22_array_2[31],

str_BARAD_CH2_array_2[31],

],

[

"",

"",

str_BARAD_CH6_array_6[32],

str_BARAD_CH5_array_5[32],

str_BARAD_CH4_array_2[32],

str_BARAD_CH3_array_2[32],

str_BARAD_CH22_array_2[32],

str_BARAD_CH2_array_2[32],

],

[

"",

"",

str_BARAD_CH6_array_6[33],

str_BARAD_CH5_array_5[33],

str_BARAD_CH4_array_2[33],

str_BARAD_CH3_array_2[33],

str_BARAD_CH22_array_2[33],

str_BARAD_CH2_array_2[33],

],

[

"",

"",

str_BARAD_CH6_array_6[34],

str_BARAD_CH5_array_5[34],

str_BARAD_CH4_array_2[34],

str_BARAD_CH3_array_2[34],

str_BARAD_CH22_array_2[34],

str_BARAD_CH2_array_2[34],

],

[

"",

"",

str_BARAD_CH6_array_6[35],

str_BARAD_CH5_array_5[35],

str_BARAD_CH4_array_2[35],

str_BARAD_CH3_array_2[35],

str_BARAD_CH22_array_2[35],

str_BARAD_CH2_array_2[35],

],

[

"",

"",

str_BARAD_CH6_array_6[36],

str_BARAD_CH5_array_5[36],

str_BARAD_CH4_array_2[36],

str_BARAD_CH3_array_2[36],

str_BARAD_CH22_array_2[36],

str_BARAD_CH2_array_2[36],

],

[

"",

"",

str_BARAD_CH6_array_6[37],

str_BARAD_CH5_array_5[37],

str_BARAD_CH4_array_2[37],

str_BARAD_CH3_array_2[37],

str_BARAD_CH22_array_2[37],

str_BARAD_CH2_array_2[37],

],

[

"",

"",

str_BARAD_CH6_array_6[38],

str_BARAD_CH5_array_5[38],

str_BARAD_CH4_array_2[38],

str_BARAD_CH3_array_2[38],

str_BARAD_CH22_array_2[38],

str_BARAD_CH2_array_2[38],

],

[

"",

"",

str_BARAD_CH6_array_6[39],

str_BARAD_CH5_array_5[39],

str_BARAD_CH4_array_2[39],

str_BARAD_CH3_array_2[39],

str_BARAD_CH22_array_2[39],

str_BARAD_CH2_array_2[39],

],

[

"",

"",

str_BARAD_CH6_array_6[40],

str_BARAD_CH5_array_5[40],

str_BARAD_CH4_array_2[40],

str_BARAD_CH3_array_2[40],

str_BARAD_CH22_array_2[40],

str_BARAD_CH2_array_2[40],

],

[

"",

"",

str_BARAD_CH6_array_6[41],

str_BARAD_CH5_array_5[41],

str_BARAD_CH4_array_2[41],

str_BARAD_CH3_array_2[41],

str_BARAD_CH22_array_2[41],

str_BARAD_CH2_array_2[41],

],

[

"",

"",

str_BARAD_CH6_array_6[42],

str_BARAD_CH5_array_5[42],

str_BARAD_CH4_array_2[42],

str_BARAD_CH3_array_2[42],

str_BARAD_CH22_array_2[42],

str_BARAD_CH2_array_2[42],

],

[

"",

"",

str_BARAD_CH6_array_6[43],

str_BARAD_CH5_array_5[43],

str_BARAD_CH4_array_2[43],

str_BARAD_CH3_array_2[43],

str_BARAD_CH22_array_2[43],

str_BARAD_CH2_array_2[43],

],

[

"",

"",

str_BARAD_CH6_array_6[44],

str_BARAD_CH5_array_5[44],

str_BARAD_CH4_array_2[44],

str_BARAD_CH3_array_2[44],

str_BARAD_CH22_array_2[44],

str_BARAD_CH2_array_2[44],

],

[

"",

"",

str_BARAD_CH6_array_6[45],

str_BARAD_CH5_array_5[45],

str_BARAD_CH4_array_2[45],

str_BARAD_CH3_array_2[45],

str_BARAD_CH22_array_2[45],

str_BARAD_CH2_array_2[45],

],

[

"",

"",

str_BARAD_CH6_array_6[46],

str_BARAD_CH5_array_5[46],

str_BARAD_CH4_array_2[46],

str_BARAD_CH3_array_2[46],

str_BARAD_CH22_array_2[46],

str_BARAD_CH2_array_2[46],

],

[

"",

"",

str_BARAD_CH6_array_6[47],

str_BARAD_CH5_array_5[47],

str_BARAD_CH4_array_2[47],

str_BARAD_CH3_array_2[47],

str_BARAD_CH22_array_2[47],

str_BARAD_CH2_array_2[47],

],

[

"",

"",

str_BARAD_CH6_array_6[48],

str_BARAD_CH5_array_5[48],

str_BARAD_CH4_array_2[48],

str_BARAD_CH3_array_2[48],

str_BARAD_CH22_array_2[48],

str_BARAD_CH2_array_2[48],

],

[

"",

"",

str_BARAD_CH6_array_6[49],

str_BARAD_CH5_array_5[49],

str_BARAD_CH4_array_2[49],

str_BARAD_CH3_array_2[49],

str_BARAD_CH22_array_2[49],

str_BARAD_CH2_array_2[49],

],

[

"",

"",

str_BARAD_CH6_array_6[50],

str_BARAD_CH5_array_5[50],

str_BARAD_CH4_array_2[50],

str_BARAD_CH3_array_2[50],

str_BARAD_CH22_array_2[50],

str_BARAD_CH2_array_2[50],

],

[

"",

"",

str_BARAD_CH6_array_6[51],

str_BARAD_CH5_array_5[51],

str_BARAD_CH4_array_2[51],

str_BARAD_CH3_array_2[51],

str_BARAD_CH22_array_2[51],

str_BARAD_CH2_array_2[51],

],

[

"",

"",

str_BARAD_CH6_array_6[52],

str_BARAD_CH5_array_5[52],

str_BARAD_CH4_array_2[52],

str_BARAD_CH3_array_2[52],

str_BARAD_CH22_array_2[52],

str_BARAD_CH2_array_2[52],

],

[

"",

"",

str_BARAD_CH6_array_6[53],

str_BARAD_CH5_array_5[53],

str_BARAD_CH4_array_2[53],

str_BARAD_CH3_array_2[53],

str_BARAD_CH22_array_2[53],

str_BARAD_CH2_array_2[53],

],

[

"",

"",

str_BARAD_CH6_array_6[54],

str_BARAD_CH5_array_5[54],

str_BARAD_CH4_array_2[54],

str_BARAD_CH3_array_2[54],

str_BARAD_CH22_array_2[54],

str_BARAD_CH2_array_2[54],

],

[

"",

"",

str_BARAD_CH6_array_6[55],

str_BARAD_CH5_array_5[55],

str_BARAD_CH4_array_2[55],

str_BARAD_CH3_array_2[55],

str_BARAD_CH22_array_2[55],

str_BARAD_CH2_array_2[55],

],

[

"",

"",

str_BARAD_CH6_array_6[56],

str_BARAD_CH5_array_5[56],

str_BARAD_CH4_array_2[56],

str_BARAD_CH3_array_2[56],

str_BARAD_CH22_array_2[56],

str_BARAD_CH2_array_2[56],

],

[

"",

"",

str_BARAD_CH6_array_6[57],

str_BARAD_CH5_array_5[57],

str_BARAD_CH4_array_2[57],

str_BARAD_CH3_array_2[57],

str_BARAD_CH22_array_2[57],

str_BARAD_CH2_array_2[57],

],

[

"",

"",

str_BARAD_CH6_array_6[58],

str_BARAD_CH5_array_5[58],

str_BARAD_CH4_array_2[58],

str_BARAD_CH3_array_2[58],

str_BARAD_CH22_array_2[58],

str_BARAD_CH2_array_2[58],

],

[

"",

"",

str_BARAD_CH6_array_6[59],

str_BARAD_CH5_array_5[59],

str_BARAD_CH4_array_2[59],

str_BARAD_CH3_array_2[59],

str_BARAD_CH22_array_2[59],

str_BARAD_CH2_array_2[59],

],

[

"",

"",

str_BARAD_CH6_array_6[60],

str_BARAD_CH5_array_5[60],

str_BARAD_CH4_array_2[60],

str_BARAD_CH3_array_2[60],

str_BARAD_CH22_array_2[60],

str_BARAD_CH2_array_2[60],

],

[

"",

"",

str_BARAD_CH6_array_6[61],

str_BARAD_CH5_array_5[61],

str_BARAD_CH4_array_2[61],

str_BARAD_CH3_array_2[61],

str_BARAD_CH22_array_2[61],

str_BARAD_CH2_array_2[61],

],

[

"",

"",

str_BARAD_CH6_array_6[62 ],

str_BARAD_CH5_array_5[62],

str_BARAD_CH4_array_2[62],

str_BARAD_CH3_array_2[62],

str_BARAD_CH22_array_2[62],

str_BARAD_CH2_array_2[62],

],

[

"",

"",

str_BARAD_CH6_array_6[63],

str_BARAD_CH5_array_5[63],

str_BARAD_CH4_array_2[63],

str_BARAD_CH3_array_2[63],

str_BARAD_CH22_array_2[63],

str_BARAD_CH2_array_2[63],

],

[

"",

"",

str_BARAD_CH6_array_6[64],

str_BARAD_CH5_array_5[64],

str_BARAD_CH4_array_2[64],

str_BARAD_CH3_array_2[64],

str_BARAD_CH22_array_2[64],

str_BARAD_CH2_array_2[64],

],

[

"",

"",

str_BARAD_CH6_array_6[65],

str_BARAD_CH5_array_5[65],

str_BARAD_CH4_array_2[65],

str_BARAD_CH3_array_2[65],

str_BARAD_CH22_array_2[65],

str_BARAD_CH2_array_2[65],

],

[

"",

"",

str_BARAD_CH6_array_6[66],

str_BARAD_CH5_array_5[66],

str_BARAD_CH4_array_2[66],

str_BARAD_CH3_array_2[66],

str_BARAD_CH22_array_2[66],

str_BARAD_CH2_array_2[66],

],

[

"",

"",

str_BARAD_CH6_array_6[67],

str_BARAD_CH5_array_5[67],

str_BARAD_CH4_array_2[67],

str_BARAD_CH3_array_2[67],

str_BARAD_CH22_array_2[67],

str_BARAD_CH2_array_2[67],

],

[

"",

"",

str_BARAD_CH6_array_6[68],

str_BARAD_CH5_array_5[68],

str_BARAD_CH4_array_2[68],

str_BARAD_CH3_array_2[68],

str_BARAD_CH22_array_2[68],

str_BARAD_CH2_array_2[68],

],

[

"",

"",

str_BARAD_CH6_array_6[69],

str_BARAD_CH5_array_5[69],

str_BARAD_CH4_array_2[69],

str_BARAD_CH3_array_2[69],

str_BARAD_CH22_array_2[69],

str_BARAD_CH2_array_2[69],

],

[

"",

"",

str_BARAD_CH6_array_6[70],

str_BARAD_CH5_array_5[70],

str_BARAD_CH4_array_2[70],

str_BARAD_CH3_array_2[70],

str_BARAD_CH22_array_2[70],

str_BARAD_CH2_array_2[70],

],

[

"",

"",

str_BARAD_CH6_array_6[71],

str_BARAD_CH5_array_5[71],

str_BARAD_CH4_array_2[71],

str_BARAD_CH3_array_2[71],

str_BARAD_CH22_array_2[71],

str_BARAD_CH2_array_2[71],

],

[

"",

"",

str_BARAD_CH6_array_6[72],

str_BARAD_CH5_array_5[72],

str_BARAD_CH4_array_2[72],

str_BARAD_CH3_array_2[72],

str_BARAD_CH22_array_2[72],

str_BARAD_CH2_array_2[72],

],

[

"",

"",

str_BARAD_CH6_array_6[73],

str_BARAD_CH5_array_5[73],

str_BARAD_CH4_array_2[73],

str_BARAD_CH3_array_2[73],

str_BARAD_CH22_array_2[73],

str_BARAD_CH2_array_2[73],

],

[

"",

"",

str_BARAD_CH6_array_6[74],

str_BARAD_CH5_array_5[74],

str_BARAD_CH4_array_2[74],

str_BARAD_CH3_array_2[74],

str_BARAD_CH22_array_2[74],

str_BARAD_CH2_array_2[74],

],

[

"",

"",

str_BARAD_CH6_array_6[75],

str_BARAD_CH5_array_5[75],

str_BARAD_CH4_array_2[75],

str_BARAD_CH3_array_2[75],

str_BARAD_CH22_array_2[75],

str_BARAD_CH2_array_2[75],

],

[

"",

"",

str_BARAD_CH6_array_6[76],

str_BARAD_CH5_array_5[76],

str_BARAD_CH4_array_2[76],

str_BARAD_CH3_array_2[76],

str_BARAD_CH22_array_2[76],

str_BARAD_CH2_array_2[76],

],

[

"",

"",

str_BARAD_CH6_array_6[77],

str_BARAD_CH5_array_5[77],

str_BARAD_CH4_array_2[77],

str_BARAD_CH3_array_2[77],

str_BARAD_CH22_array_2[77],

str_BARAD_CH2_array_2[77],

],

[

"",

"",

str_BARAD_CH6_array_6[78],

str_BARAD_CH5_array_5[78],

str_BARAD_CH4_array_2[78],

str_BARAD_CH3_array_2[78],

str_BARAD_CH22_array_2[78],

str_BARAD_CH2_array_2[78],

],

[

"",

"",

str_BARAD_CH6_array_6[79],

str_BARAD_CH5_array_5[79],

str_BARAD_CH4_array_2[79],

str_BARAD_CH3_array_2[79],

str_BARAD_CH22_array_2[79],

str_BARAD_CH2_array_2[79],

],

[

"",

"",

str_BARAD_CH6_array_6[80],

str_BARAD_CH5_array_5[80],

str_BARAD_CH4_array_2[80],

str_BARAD_CH3_array_2[80],

str_BARAD_CH22_array_2[80],

str_BARAD_CH2_array_2[80],

],

[

"",

"",

str_BARAD_CH6_array_6[81],

str_BARAD_CH5_array_5[81],

str_BARAD_CH4_array_2[81],

str_BARAD_CH3_array_2[81],

str_BARAD_CH22_array_2[81],

str_BARAD_CH2_array_2[81],

],

[

"",

"",

str_BARAD_CH6_array_6[82],

str_BARAD_CH5_array_5[82],

str_BARAD_CH4_array_2[82],

str_BARAD_CH3_array_2[82],

str_BARAD_CH22_array_2[82],

str_BARAD_CH2_array_2[82],

],

[

"",

"",

str_BARAD_CH6_array_6[83],

str_BARAD_CH5_array_5[83],

str_BARAD_CH4_array_2[83],

str_BARAD_CH3_array_2[83],

str_BARAD_CH22_array_2[83],

str_BARAD_CH2_array_2[83],

],

[

"",

"",

str_BARAD_CH6_array_6[84],

str_BARAD_CH5_array_5[84],

str_BARAD_CH4_array_2[84],

str_BARAD_CH3_array_2[84],

str_BARAD_CH22_array_2[84],

str_BARAD_CH2_array_2[84],

],

[

"",

"",

str_BARAD_CH6_array_6[85],

str_BARAD_CH5_array_5[85],

str_BARAD_CH4_array_2[85],

str_BARAD_CH3_array_2[85],

str_BARAD_CH22_array_2[85],

str_BARAD_CH2_array_2[85],

],

[

"",

"",

str_BARAD_CH6_array_6[86],

str_BARAD_CH5_array_5[86],

str_BARAD_CH4_array_2[86],

str_BARAD_CH3_array_2[86],

str_BARAD_CH22_array_2[86],

str_BARAD_CH2_array_2[86],

],

[

"",

"",

str_BARAD_CH6_array_6[87],

str_BARAD_CH5_array_5[87],

str_BARAD_CH4_array_2[87],

str_BARAD_CH3_array_2[87],

str_BARAD_CH22_array_2[87],

str_BARAD_CH2_array_2[87],

],

[

"",

"",

str_BARAD_CH6_array_6[88],

str_BARAD_CH5_array_5[88],

str_BARAD_CH4_array_2[88],

str_BARAD_CH3_array_2[88],

str_BARAD_CH22_array_2[88],

str_BARAD_CH2_array_2[88],

],

[

"",

"",

str_BARAD_CH6_array_6[89],

str_BARAD_CH5_array_5[89],

str_BARAD_CH4_array_2[89],

str_BARAD_CH3_array_2[89],

str_BARAD_CH22_array_2[89],

str_BARAD_CH2_array_2[89],

],

[

"",

"",

str_BARAD_CH6_array_6[90],

str_BARAD_CH5_array_5[90],

str_BARAD_CH4_array_2[90],

str_BARAD_CH3_array_2[90],

str_BARAD_CH22_array_2[90],

str_BARAD_CH2_array_2[90],

],

[

"",

"",

str_BARAD_CH6_array_6[91],

str_BARAD_CH5_array_5[91],

str_BARAD_CH4_array_2[91],

str_BARAD_CH3_array_2[91],

str_BARAD_CH22_array_2[91],

str_BARAD_CH2_array_2[91],

],

[

"",

"",

str_BARAD_CH6_array_6[92],

str_BARAD_CH5_array_5[92],

str_BARAD_CH4_array_2[92],

str_BARAD_CH3_array_2[92],

str_BARAD_CH22_array_2[92],

str_BARAD_CH2_array_2[92],

],

[

"",

"",

str_BARAD_CH6_array_6[93],

str_BARAD_CH5_array_5[93],

str_BARAD_CH4_array_2[93],

str_BARAD_CH3_array_2[93],

str_BARAD_CH22_array_2[93],

str_BARAD_CH2_array_2[93],

],

[

"",

"",

str_BARAD_CH6_array_6[94],

str_BARAD_CH5_array_5[94],

str_BARAD_CH4_array_2[94],

str_BARAD_CH3_array_2[94],

str_BARAD_CH22_array_2[94],

str_BARAD_CH2_array_2[94],

],

[

"",

"",

str_BARAD_CH6_array_6[95],

str_BARAD_CH5_array_5[95],

str_BARAD_CH4_array_2[95],

str_BARAD_CH3_array_2[95],

str_BARAD_CH22_array_2[95],

str_BARAD_CH2_array_2[95],

],

[

"",

"",

str_BARAD_CH6_array_6[96],

str_BARAD_CH5_array_5[96 ],

str_BARAD_CH4_array_2[96],

str_BARAD_CH3_array_2[96],

str_BARAD_CH22_array_2[96],

str_BARAD_CH2_array_2[96],

],

[

"",

"",

str_BARAD_CH6_array_6[97],

str_BARAD_CH5_array_5[97],

str_BARAD_CH4_array_2[97],

str_BARAD_CH3_array_2[97],

str_BARAD_CH22_array_2[97],

str_BARAD_CH2_array_2[97],

],

[

"",

"",

str_BARAD_CH6_array_6[98],

str_BARAD_CH5_array_5[98],

str_BARAD_CH4_array_2[98],

str_BARAD_CH3_array_2[98],

str_BARAD_CH22_array_2[98],

str_BARAD_CH2_array_2[98],

],

[

"",

"",

str_BARAD_CH6_array_6[99],

str_BARAD_CH5_array_5[99],

str_BARAD_CH4_array_2[99],

str_BARAD_CH3_array_2[99],

str_BARAD_CH22_array_2[99],

str_BARAD_CH2_array_2[99],

],

[

"",

"",

str_BARAD_CH6_array_6[100],

str_BARAD_CH5_array_5[100],

str_BARAD_CH4_array_2[100],

str_BARAD_CH3_array_2[100],

str_BARAD_CH22_array_2[100],

str_BARAD_CH2_array_2[100],

],

[

"",

"",

str_BARAD_CH6_array_6[101],

str_BARAD_CH5_array_5[101],

str_BARAD_CH4_array_2[101],

str_BARAD_CH3_array_2[101],

str_BARAD_CH22_array_2[101],

str_BARAD_CH2_array_2[101],

],

[

"",

"",

str_BARAD_CH6_array_6[102],

str_BARAD_CH5_array_5[102],

str_BARAD_CH4_array_2[102],

str_BARAD_CH3_array_2[102],

str_BARAD_CH22_array_2[102],

str_BARAD_CH2_array_2[102],

],

[

"",

"",

str_BARAD_CH6_array_6[103],

str_BARAD_CH5_array_5[103],

str_BARAD_CH4_array_2[103],

str_BARAD_CH3_array_2[103],

str_BARAD_CH22_array_2[103],

str_BARAD_CH2_array_2[103],

],

[

"",

"",

str_BARAD_CH6_array_6[104],

str_BARAD_CH5_array_5[104],

str_BARAD_CH4_array_2[104],

str_BARAD_CH3_array_2[104],

str_BARAD_CH22_array_2[104],

str_BARAD_CH2_array_2[104],

],

[

"",

"",

str_BARAD_CH6_array_6[105],

str_BARAD_CH5_array_5[105],

str_BARAD_CH4_array_2[105],

str_BARAD_CH3_array_2[105],

str_BARAD_CH22_array_2[105],

str_BARAD_CH2_array_2[105],

],

[

"",

"",

str_BARAD_CH6_array_6[106],

str_BARAD_CH5_array_5[106],

str_BARAD_CH4_array_2[106],

str_BARAD_CH3_array_2[106],

str_BARAD_CH22_array_2[106],

str_BARAD_CH2_array_2[106],

],

[

"",

"",

str_BARAD_CH6_array_6[107],

str_BARAD_CH5_array_5[107],

str_BARAD_CH4_array_2[107],

str_BARAD_CH3_array_2[107],

str_BARAD_CH22_array_2[107],

str_BARAD_CH2_array_2[107],

],

[

"",

"",

str_BARAD_CH6_array_6[108],

str_BARAD_CH5_array_5[108],

str_BARAD_CH4_array_2[108],

str_BARAD_CH3_array_2[108],

str_BARAD_CH22_array_2[108],

str_BARAD_CH2_array_2[108],

],

[

"",

"",

str_BARAD_CH6_array_6[109],

str_BARAD_CH5_array_5[109],

str_BARAD_CH4_array_2[109],

str_BARAD_CH3_array_2[109],

str_BARAD_CH22_array_2[109],

str_BARAD_CH2_array_2[109],

],

[

"",

"",

str_BARAD_CH6_array_6[110],

str_BARAD_CH5_array_5[110],

str_BARAD_CH4_array_2[110],

str_BARAD_CH3_array_2[110],

str_BARAD_CH22_array_2[110],

str_BARAD_CH2_array_2[110],

],

[

"",

"",

str_BARAD_CH6_array_6[111],

str_BARAD_CH5_array_5[111],

str_BARAD_CH4_array_2[111],

str_BARAD_CH3_array_2[111],

str_BARAD_CH22_array_2[111],

str_BARAD_CH2_array_2[111],

],

[

"",

"",

str_BARAD_CH6_array_6[112],

str_BARAD_CH5_array_5[112],

str_BARAD_CH4_array_2[112],

str_BARAD_CH3_array_2[112],

str_BARAD_CH22_array_2[112],

str_BARAD_CH2_array_2[112],

],

[

"",

"",

str_BARAD_CH6_array_6[113],

str_BARAD_CH5_array_5[113],

str_BARAD_CH4_array_2[113],

str_BARAD_CH3_array_2[113],

str_BARAD_CH22_array_2[113],

str_BARAD_CH2_array_2[113],

],

[

"",

"",

str_BARAD_CH6_array_6[114],

str_BARAD_CH5_array_5[114],

str_BARAD_CH4_array_2[114],

str_BARAD_CH3_array_2[114],

str_BARAD_CH22_array_2[114],

str_BARAD_CH2_array_2[114],

],

[

"",

"",

str_BARAD_CH6_array_6[115],

str_BARAD_CH5_array_5[115],

str_BARAD_CH4_array_2[115],

str_BARAD_CH3_array_2[115],

str_BARAD_CH22_array_2[115],

str_BARAD_CH2_array_2[115],

],

[

"",

"",

str_BARAD_CH6_array_6[116],

str_BARAD_CH5_array_5[116],

str_BARAD_CH4_array_2[116],

str_BARAD_CH3_array_2[116],

str_BARAD_CH22_array_2[116],

str_BARAD_CH2_array_2[116],

],

[

"",

"",

str_BARAD_CH6_array_6[117],

str_BARAD_CH5_array_5[117],

str_BARAD_CH4_array_2[117],

str_BARAD_CH3_array_2[117],

str_BARAD_CH22_array_2[117],

str_BARAD_CH2_array_2[117],

],

[

"",

"",

str_BARAD_CH6_array_6[118],

str_BARAD_CH5_array_5[118],

str_BARAD_CH4_array_2[118],

str_BARAD_CH3_array_2[118],

str_BARAD_CH22_array_2[118],

str_BARAD_CH2_array_2[118],

],

[

"",

"",

str_BARAD_CH6_array_6[119],

str_BARAD_CH5_array_5[119],

str_BARAD_CH4_array_2[119],

str_BARAD_CH3_array_2[119],

str_BARAD_CH22_array_2[119],

str_BARAD_CH2_array_2[119],

],

[

"",

"",

str_BARAD_CH6_array_6[120],

str_BARAD_CH5_array_5[120],

str_BARAD_CH4_array_2[120],

str_BARAD_CH3_array_2[120],

str_BARAD_CH22_array_2[120],

str_BARAD_CH2_array_2[120],

],

[

"",

"",

str_BARAD_CH6_array_6[121],

str_BARAD_CH5_array_5[121],

str_BARAD_CH4_array_2[121],

str_BARAD_CH3_array_2[121],

str_BARAD_CH22_array_2[121],

str_BARAD_CH2_array_2[121],

],

[

"",

"",

str_BARAD_CH6_array_6[122],

str_BARAD_CH5_array_5[122],

str_BARAD_CH4_array_2[122],

str_BARAD_CH3_array_2[122],

str_BARAD_CH22_array_2[122],

str_BARAD_CH2_array_2[122],

],

[

"",

"",

str_BARAD_CH6_array_6[123],

str_BARAD_CH5_array_5[123],

str_BARAD_CH4_array_2[123],

str_BARAD_CH3_array_2[123],

str_BARAD_CH22_array_2[123],

str_BARAD_CH2_array_2[123],

],

[

"",

"",

str_BARAD_CH6_array_6[124],

str_BARAD_CH5_array_5[124],

str_BARAD_CH4_array_2[124],

str_BARAD_CH3_array_2[124],

str_BARAD_CH22_array_2[124],

str_BARAD_CH2_array_2[124],

],

[

"",

"",

str_BARAD_CH6_array_6[125],

str_BARAD_CH5_array_5[125],

str_BARAD_CH4_array_2[125],

str_BARAD_CH3_array_2[125],

str_BARAD_CH22_array_2[125],

str_BARAD_CH2_array_2[125],

],

[

"",

"",

str_BARAD_CH6_array_6[126],

str_BARAD_CH5_array_5[126],

str_BARAD_CH4_array_2[126],

str_BARAD_CH3_array_2[126],

str_BARAD_CH22_array_2[126],

str_BARAD_CH2_array_2[126],

],

[

"",

"",

str_BARAD_CH6_array_6[127],

str_BARAD_CH5_array_5[127],

str_BARAD_CH4_array_2[127],

str_BARAD_CH3_array_2[127],

str_BARAD_CH22_array_2[127],

str_BARAD_CH2_array_2[127],

],

[

"",

"",

str_BARAD_CH6_array_6[128],

str_BARAD_CH5_array_5[128],

str_BARAD_CH4_array_2[128],

str_BARAD_CH3_array_2[128],

str_BARAD_CH22_array_2[128],

str_BARAD_CH2_array_2[128],

],

[

"",

"",

str_BARAD_CH6_array_6[129],

str_BARAD_CH5_array_5[129],

str_BARAD_CH4_array_2[129],

str_BARAD_CH3_array_2[129],

str_BARAD_CH22_array_2[129],

str_BARAD_CH2_array_2[129],

],

[

"",

"",

str_BARAD_CH6_array_6[130],

str_BARAD_CH5_array_5[130],

str_BARAD_CH4_array_2[130],

str_BARAD_CH3_array_2[130],

str_BARAD_CH22_array_2[130],

str_BARAD_CH2_array_2[130],

],

[

"",

"",

str_BARAD_CH6_array_6[131],

str_BARAD_CH5_array_5[131],

str_BARAD_CH4_array_2[131],

str_BARAD_CH3_array_2[131],

str_BARAD_CH22_array_2[131],

str_BARAD_CH2_array_2[131],

],

[

"",

"",

str_BARAD_CH6_array_6[132],

str_BARAD_CH5_array_5[132],

str_BARAD_CH4_array_2[132],

str_BARAD_CH3_array_2[132],

str_BARAD_CH22_array_2[132],

str_BARAD_CH2_array_2[132],

],

[

"",

"",

str_BARAD_CH6_array_6[133],

str_BARAD_CH5_array_5[133],

str_BARAD_CH4_array_2[133],

str_BARAD_CH3_array_2[133],

str_BARAD_CH22_array_2[133],

str_BARAD_CH2_array_2[133],

],

[

"",

"",

str_BARAD_CH6_array_6[134],

str_BARAD_CH5_array_5[134],

str_BARAD_CH4_array_2[134],

str_BARAD_CH3_array_2[134],

str_BARAD_CH22_array_2[134],

str_BARAD_CH2_array_2[134],

],

[

"",

"",

str_BARAD_CH6_array_6[135],

str_BARAD_CH5_array_5[135],

str_BARAD_CH4_array_2[135],

str_BARAD_CH3_array_2[135],

str_BARAD_CH22_array_2[135],

str_BARAD_CH2_array_2[135],

],

[

"",

"",

str_BARAD_CH6_array_6[136],

str_BARAD_CH5_array_5[136],

str_BARAD_CH4_array_2[136],

str_BARAD_CH3_array_2[136],

str_BARAD_CH22_array_2[136],

str_BARAD_CH2_array_2[136],

],

[

"",

"",

str_BARAD_CH6_array_6[137],

str_BARAD_CH5_array_5[137],

str_BARAD_CH4_array_2[137],

str_BARAD_CH3_array_2[137],

str_BARAD_CH22_array_2[137],

str_BARAD_CH2_array_2[137],

],

[

"",

"",

str_BARAD_CH6_array_6[138],

str_BARAD_CH5_array_5[138],  

str_BARAD_CH4_array_2[138],

str_BARAD_CH3_array_2[138],

str_BARAD_CH22_array_2[138],

str_BARAD_CH2_array_2[138],

]





]



};

var today = new Date(),

date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

table = <tr  class="topcorner">

<td class="topcorner1">{this.state.data1[i].DeviceID}</td>

<td class="topcorner1" >{this.state.data1[i].Serial}</td>

<td class="topcorner1">{tmsval}</td>

<td class="topcorner1">{<a href={'test'}> {this.state.data1[i].Date} </a>}</td>

<td class="topcorner1">{<a href="#"  onClick={(event => this.popup(this.state.data1[i].Payload.Device_ID))}> {this.state.data1[i].Model}

</a>}</td>

<td> <CSVLink   filename={date+" "+time+'.csv'}  data={myObj.Result} >Click here to download CSV</CSVLink> </td>

</tr>

buffer.push(table)

}



return (





<div>



{buffer}



</div>



)





}

DeviceIdClickHandler (i){

event.preventDefault();

console.log(event.target.value)

let device_id = this.state.data1[i].payload.Device_ID

let timestamp = tmsval;

let enviro_data = this.state.data1[i].payload.Device_ID

csvDownload(enviro_data)

};





render() {





return (

<div>          

<p>

<Link to="/login">Logout</Link>

</p>

<table id='students'>





<tr><td>{this.renderTableHeader()}</td></tr>

<tr><td>{this.renderTableData()}</td></tr>





</table>

<div className="form-group">



<Link to="/" className="btn btn-link"></Link>

</div>

											   

												<div className="form-group">



<Link to="/" className="btn btn-link"></Link>

</div>

												<div className="form-group">



<Link to="/" className="btn btn-link"></Link>

</div>

												<div className="form-group">



<Link to="/" className="btn btn-link"></Link>

</div><div className="form-group">



<Link to="/" className="btn btn-link"></Link>

</div>

												<div className="form-group">



<Link to="/" className="btn btn-link"></Link>

</div>

											   

												<div className="form-group">



<Link to="/" className="btn btn-link"></Link>

</div>

											   

												<div className="form-group">



<Link to="/" className="btn btn-link"></Link>

</div>

</div>





)

}



}



function removeCR30(value) {

if(value == undefined){

}

else{

var d30= value.replace(/\s+/g, " ").replace(/^\s|\s$/g, "");

var splitted1_slvl_single = d30.split('');

return splitted1_slvl_single[0];

}



}





function singleremoveapce30(value) {

if(value == undefined){

}

else{

var d30= value.replace(/\s+/g, " ").replace(/^\s|\s$/g, "");

var splitted1_slvl_single = d30.split("");

return splitted1_slvl_single[0];

}



}



function removeCR30electric(value) {

if(value == undefined){

}

else{

var d30= value.replace(/\s+/g, " ").replace(/^\s|\s$/g, "");

var splitted1_slvl_single = d30.split('');

return splitted1_slvl_single[0];



}

}





function removeCR(value) {

if(value == undefined){



}

else{

var d= value.replace(/\s+/g, " ").replace(/^\s|\s$/g, "");

var strs2 = d.split(' ')[0];

var strs3 = d.split(' ')[1];

var strs4 = strs2.substring(0, strs2.length -10);

if(value==0){

								var s2 = "0";

var strs4 = "0";

}

else{

	if(strs3==undefined){

				strs3="0";

				}

				else{

				}

								var s2 = strs3.substring(1);



}

}

return strs4+s2;

}



function removeCRTC23(value) {

if(value == undefined){



}

else{



var d1= value.replace(/\s+/g, " ").replace(/^\s|\s$/g, "");

var str1 = d1.substring(d1.indexOf(" ") + 1);

return str1;

}

}



function mapState(state) {

const { users, authentication } = state;

const { user } = authentication;

return { user, users };

}

function removeCap(value) { 

var newString = value.replace('^', ''); 

 return newString;
} 



const actionCreators = {

getUsers: userActions.getAll,

deleteUser: userActions.delete

}





const connectedSP4430_1 = connect(mapState, actionCreators)(SP4430_1);

export { connectedSP4430_1 as SP4430_1 };