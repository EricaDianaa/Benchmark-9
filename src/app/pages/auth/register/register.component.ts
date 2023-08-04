import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/Service/auth.service";
import { IRegister } from "src/app/interface/register";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  form!: FormGroup;
  forms!: FormControl;

  formData: IRegister = {
    nome: "",
    cognome: "",
    email: "",
    password: "",
  };
  constructor(private authSvc: AuthService, private router: Router) {}
  register() {
    this.authSvc.signUp(this.formData).subscribe((res) => {
      console.log("registrato");
      this.router.navigate(["/meteo"]);
    });
  }
}
