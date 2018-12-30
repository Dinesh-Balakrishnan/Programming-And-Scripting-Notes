/*
DEFINITIONS:

	- Polymorphism: Ability for the same code to be used with different types of objects and behave differently with each.
		-- EX: System.out.println() can print out any type of object.

 */
public class Lesson24 {

	//Classes used are at the end of the file.
	public static void main(String[] args) {
		polymorphism();
		objectCasting();
	}

	public static void polymorphism() {
		//A variable can refer to an object of any sub-type of its own type:
		Employee example1 = new Secretary();
		Employee example2 = new LegalSecretary();
		Object example3 = new Employee();

		//A variable CANNOT refer to an object of a type that is it a sub-type of:
		//LegalSecretary example = new Employee(); (SYNTAX ERROR)
		//Employee example = new Object(); (SYNTAX ERROR)

		//A big benefit of polymorphism is that sub-types can all be stored in the same array:
		Employee[] e = {new Employee(), new Secretary(), new LegalSecretary()};
		Object[] obj = {new Object(), new Employee(), new LegalSecretary()};

		//They can all also be be passed as parameters to the same method:
		printType(new Secretary()); //Prints Secretary
		printType(new LegalSecretary()); //Prints Legal Secretary
	}

	public static void objectCasting() {
		//objectCasting involves upcasting and the resulting downcasting, the syntax very similar to primitive casting:
		LegalSecretary example = new LegalSecretary();

		//Upcasting is casting an object to a parent type:
		System.out.println(((Employee) example).employeeOnly); //Prints 99999

		//Downcasting occurs when the example variable goes back to behaving as a LegalSecretary rather than an employee:
		printType(example);

		//It is not possible to physically downcast an object:
		//printType ((Secretary) new Employee()); (SYNTAX ERROR)
	}

	//Notice how the parameter is the generic object type, Employee
	public static void printType(Employee e) {
		System.out.println(e.type);
	}

}

//Classes used for this lesson:
class Employee {
	public int employeeOnly = 99999;
	public String type;
	public Employee() {type = "Employee";}
}

class Secretary extends Employee {
	public Secretary() {type = "Secretary";}
}

class LegalSecretary extends Secretary {
	public LegalSecretary() {type = "Legal Secretary";}
}