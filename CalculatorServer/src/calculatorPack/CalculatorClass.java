package calculatorPack;

import javax.jws.WebService;
import java.lang.*;

public class CalculatorClass {
	
public Double addition(String op1, String op2){
		
		Double operand1 = Double.parseDouble(op1);
		Double operand2 = Double.parseDouble(op2);
		
		Double result = operand1 + operand2;
		
		return result;
	}
	
	public Double subtraction(String op1, String op2){
		
		Double operand1 = Double.parseDouble(op1);
		Double operand2 = Double.parseDouble(op2);
		
		Double result = operand1 - operand2;
		
		return result;

	}
	
	public Double multiplication(String op1, String op2){
		
		Double operand1 = Double.parseDouble(op1);
		Double operand2 = Double.parseDouble(op2);
		
		Double result = operand1 * operand2;
		
		return result;
	}
	

	public Double division(String op1, String op2){
	
		Double operand1 = Double.parseDouble(op1);
		Double operand2 = Double.parseDouble(op2);
		
		Double result = operand1 / operand2;
		
		return result;

	
	}

}
