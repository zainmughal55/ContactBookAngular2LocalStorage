import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./customStyleSheet.css']
})
export class AppComponent {

	name="";
	email="";
	phone="";

	MethodSwaping="Submit";// change Submit Method to Update and Update To Submit
	CurrentIndex:number;// capture index value when edit method call

	i:number= (JSON.parse(localStorage.getItem("iValue")) != null) ? 1 : 0;

	Arr=[];

	public LoadData()
	{
		this.Arr = JSON.parse(localStorage.getItem("ArrayData"));
	}
	public Submit()
	{
		if(this.name !== '' && this.email !== '' && this.phone !== ''){

		this.Arr.push({Name:this.name, Email:this.email, Phone:this.phone});// push object on single index
		
		this.name='';
		this.email='';
		this.phone='';

		this.i=1;

		localStorage.setItem('ArrayData', JSON.stringify(this.Arr));
		localStorage.setItem('iValue', JSON.stringify(this.i));
		
		}
	}
	public Edit(i)
	{
		// assign values to form input  fields 
		this.name=this.Arr[i].Name;
		this.email=this.Arr[i].Email;
		this.phone=this.Arr[i].Phone;

		//getting value of selected index
		this.CurrentIndex=i;
		this.MethodSwaping="UpdateMethod";
	}
	public UpdateMethod()
	{
		//changing the old value with new one 
		this.Arr[this.CurrentIndex].Name=this.name;
		this.Arr[this.CurrentIndex].Email=this.email;
		this.Arr[this.CurrentIndex].Phone=this.phone;

		localStorage.setItem('ArrayData', JSON.stringify(this.Arr));

		this.name='';
		this.email='';
		this.phone='';

		this.MethodSwaping="Submit";
	}
}
