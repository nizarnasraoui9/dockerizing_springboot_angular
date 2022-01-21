import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    studentForm:FormGroup;
    bookForm:FormGroup;
    cin!:number;
    name!:string;
    email!:string;
    lastName!:string;
    tel!:string;
    university!:string;
    bookName!:string;
    price!:number;
    category!:string;
    state!:string;
    author!:string;
    constructor(private http:HttpClient){}

    ngOnInit(){
        // this.studentForm=new FormGroup({
        //     'name':new FormControl(''),
        //     'subname':new FormControl(''),
        //     'cin':new FormControl(''),
        //     'mail':new FormControl(''),
        //     'etablissement':new FormControl('')

        // });
        // this.bookForm=new FormGroup({
        //     'name':new FormControl(''),
        //     'auteur':new FormControl(''),
        //     'category':new FormControl(''),
        //     'state':new FormControl('')
        // })

    }
    submitStudentForm(){
        var student={
            "cin": this.cin,
            "establishment": this.university,
            "lastName": this.lastName,
            "mail": this.email,
            "name": this.name,
            "phone": this.tel
          };
          console.log(student);
          
          this.http.post("http://localhost:8080/student/createStudent",student).subscribe((res)=>{
              console.log(res);
          });
    }
    submitBookForm(){
        var book={
            "name":this.bookName,
            "authorName": this.author,
            "price": this.price,
            "state": this.state,
            "category":this.category
          };
          console.log(book);
          
          this.http.post("http://localhost:8081/book/addBook",book).subscribe((res)=>{
              console.log(res);
          });
    }
}
