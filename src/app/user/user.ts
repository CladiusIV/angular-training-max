import { Component } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: "app-user",
  imports: [],
  templateUrl: "./user.html",
  styleUrl: "./user.scss",
})
export class User {
  // in a class, you could define it as "private" and will be
  // just accesible within the class and not the template.
  selectedUser = DUMMY_USERS[randomIndex];
}
