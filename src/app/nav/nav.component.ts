import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { ApiserviceService } from '../api.service';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user = faUserCircle;
  collapsed = true;
  searchValue: any;
  member = new User();
  showNavbar = false;
  loginbar = 'nav-login-desktop';
  loggedinUserName: any;
  loginForm: any;
  users: any;
  public totalitem: number = 0;
  public total: number = 0;
  count: any;
  list: any;
  public cartitemlist: any = []


  constructor(private authService: AuthService, private router: Router, private details: ApiserviceService) { }


  ngOnInit() {
    this.details.getcartdetails()
      .subscribe(res => {
        localStorage.setItem('res', JSON.stringify(res))
      })

    this.details.getwishlistdetails()
      .subscribe(data => {
        this.count = data.length;
      })
    this.details.getproducts()
      .subscribe(book => {
        this.list = book
      })
    // this.cart()
    this.data()
  }

  data() {
    let data = JSON.parse(localStorage.getItem('res') as string)
    for (let i = 0; i < data.length; i++) {
      this.totalitem = this.totalitem + data[i].quantity

    }
  }
  onLogin(form: NgForm) {
    let user = this.authService.login(this.member);
    if (user) {
      alert('Successfully logged in');
      form.reset();
    } else {
      alert('User ID or password is wrong');
    }
  }

  onLogout() {
    this.authService.logout();
  alert('Logged out Successful')
  }

  loggedin() {
    const token = localStorage.getItem('token');
    this.loggedinUserName = token;
    return token;
  }
}
    //  getUserData(){
    //    this.details.fetchUserData()
    //    .subscribe((list:any)=>{
    //      console.log(list)
    //      this.visualizeTblData=this.visualizeTblData ? this.visualizeTblData: this.tableData=list
    //    })
    //  }
// searchWithName(name:any){
//   this.searchingWithName=name
//   if(this.searchingWithName!==""||this.searchingWithName!==null ||this.searchingWithName!==undefined){
//     this.filteredtableData =this.tabledata.filter((item:any)=>item.firstName.trim().toLowerCase().includes(name.trim().toLowerCase()));
//   }
//   this.filteredtableData ? this.visualizeTblData =this.filteredtableData : this.visualizeTblData =this.tableData
// }
// cart(){
//   if(localStorage.getItem('res'))
//   {
//     this.cartitemlist=JSON.parse(localStorage.getItem('res')as string)
//     this.totalitem=this.cartitemlist.reduce(function(acc:any,val:any){
//       return acc+val.quantity;
//     },0)
//   }
// }




