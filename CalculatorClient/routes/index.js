	
/*
 * GET home page.
 */

var soap = require('soap');
var baseURL = "http://localhost:8080/CalculatorServer/services/CalculatorClass?wsdl";

exports.index = function(req, res){
  res.render('index');
};

exports.add = function(req, res){

	var operator1 = req.body.operator1;
	var operator2 = req.body.operator2;
	var result = 0;
	var args;
	//console.log();
	
	var option = {
			ignoredNamespaces : true	
		};
	
	if(operator1 == null || operator2 == null){
		
		res.end("Enter Some Inputs");
	}
	else if(isNaN(operator1) || isNaN(operator2)){
		
		res.end("Enter a Valid Number");	
	}
	else{
		
		
		  args = {op1: operator1, op2: operator2};
		  soap.createClient(baseURL,option, function(err, client) {
		      client.addition(args, function(err, result) {
		    	  
		    	  res.end(result.additionReturn.toString());
		    	  
		      });
		  });
		
		
	}
}

exports.subtract = function(req, res){
	
	var operator1 = req.body.operator1;
	var operator2 = req.body.operator2;
	var result = 0;
	
	var option = {
			ignoredNamespaces : true	
		};
	
	if(operator1 == null || operator2 == null){
		
		res.end("Enter Some Inputs");
	}
	if(isNaN(operator1) || isNaN(operator2)){
		
		res.end("Enter a Valid Number");	
	}
	else{
		
		var args = {op1: operator1, op2: operator2};
		  soap.createClient(baseURL,option, function(err, client) {
		      client.subtraction(args, function(err, result) {
		    	  
		    	  res.end(result.subtractionReturn.toString());
		    	  
		      });
		  });
		
	}
}

exports.divide = function(req, res){
	
	var operator1 = req.body.operator1;
	var operator2 = req.body.operator2;
	var result = 0;
	
	var option = {
			ignoredNamespaces : true	
		};
	
	if(operator1 == null || operator2 == null){
		
		res.end("Enter Some Inputs");
	}
	else if(isNaN(operator1) || isNaN(operator2)){
		
		res.end("Enter a Valid Number");	
	}
	else if(Number(operator2) == 0){
		
		res.end("Divide by Zero Not Possible");
	}
	else{
		
		var args = {op1: operator1, op2: operator2};
		  soap.createClient(baseURL,option, function(err, client) {
		      client.division(args, function(err, result) {
		    	  
		    	  res.end(result.divisionReturn.toString());
		    	  
		      });
		  });
		
		
	}
}


exports.multiply = function(req, res){
	
	var operator1 = req.body.operator1;
	var operator2 = req.body.operator2;
	var result = 0;
	
	var option = {
			ignoredNamespaces : true	
		};
	
	if(operator1 == null || operator2 == null){
		
		res.end("Enter Some Inputs");
	}
	else if(isNaN(operator1) || isNaN(operator2)){
		
		res.end("Enter a Valid Number");	
	}
	else{
		
		
		var args = {op1: operator1, op2: operator2};
		  soap.createClient(baseURL,option, function(err, client) {
		      client.multiplication(args, function(err, result) {
		    	  
		    	  res.end(result.multiplicationReturn.toString());
		    	  
		      });
		  });
		
	}
}
