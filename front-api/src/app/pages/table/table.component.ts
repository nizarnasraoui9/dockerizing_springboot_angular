import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public students: any;
    public books: any;
    constructor(private http:HttpClient){}
    ngOnInit(){
        this.http.get("http://localhost:8080/student/StudentList").subscribe((res)=>{
            this.students=res;
        })

        // this.students=[{nom:'ali',prenom:'ben salah',cin:1234,mail:'eee@gmail.com',etablissement:'fst'},
        // {nom:'ali',prenom:'ben salah',cin:1234,mail:'eee@gmail.com',etablissement:'fst'}];
        this.http.get("http://localhost:8081/book/books").subscribe((res)=>{
            this.books=res;
            console.log(res);
        });
        
    }
}
