//Find the roots of a Quadratic equation and separate Odd even numbers from an Array 


#include <iostream>
#include <cmath>
using namespace std;


int main(){
	int a,b,c,d,e,f;
	cout<<"Enter the value of a,b,c:";
	cin>>a>>b>>c;
	d=pow(b,2)-(4*a*c);
	e=sqrt(d);
	f=e/2;
	cout<<"The roots of the quadratic equation are:";
	cout<<(-b+f)/(2*a)<<" "<<(-b-f)/(2*a);
	cout<<endl;
	
	cout<<"The Odd numbers are:";
	for(int i=1;i<=100;i+=2){
		cout<<i<<" ";
	}
	cout<<endl;
	cout<<"The Even numbers are:";
	for(int i=2;i<=100;i+=2){
		cout<<i<<" ";
	}
	cout<<endl;
	return 0;
}





