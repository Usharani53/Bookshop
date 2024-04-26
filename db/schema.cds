namespace mybookshop;

using { cuid ,managed } from '@sap/cds/common';


entity Books 
 { 
   key ID : Integer;
  title  : String; 
   descr  : String; 
    stock  : Integer; 
     price  : Decimal;  
     
 }