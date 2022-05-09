import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMe_login: boolean = false;
  showMe_register: boolean = true;
  showMe_profile: boolean = true;
  title = 'project-ass2cwad';
  reg_val: Array<string> = [];
  log_val: Array<string> = [];
  getValues(val: any) {
    console.log(val);
    this.reg_val.push(val.username);
    this.reg_val.push(val.password);
    this.reg_val.push(val.mobile);
  
    window.alert("Registration successfull!");
  }
  getValues_login(val: any) {
    this.log_val.push(val.uname);
    this.log_val.push(val.pass);
    console.log(val);
    if ((this.log_val[0] == this.reg_val[0]) && (this.log_val[1] == this.reg_val[1])) {
      window.alert("Login Successfull");
    }
    else {
      window.alert("Invalid username or password");
    }
  }

  toggleform() {
    if (this.reg_val.length == 0) {
      window.alert("Please register before logging in");
    }
    else {
      this.showMe_login = !this.showMe_login;
      this.showMe_register = !this.showMe_register;
    }
  }
  view_profile() {
    this.showMe_login = false;
    if (this.log_val.length == 0) {
      window.alert("Please login to view profile.");
    }
    else {
      var usr = document.getElementById('usern');
      usr!.innerText = "Username: " + this.reg_val[0];

      var pwa = document.getElementById('passw');
      pwa!.innerText = "Password: " + this.reg_val[1];

      var mobile = document.getElementById('mobb');
      mobile!.innerText = "First Name: " + this.reg_val[2];

      var title = document.getElementById('title');
      title!.innerText = "Profile";

    }
  }

}

