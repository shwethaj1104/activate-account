import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  phonenumber: any;
  emailid: any;
  form = new FormGroup({
    phone: new FormControl(),
    name: new FormControl(),
    pan: new FormControl(),
    email: new FormControl(),
  })

  constructor(private modalService: NgbActiveModal) { }

  ngOnInit(): void {
  }
  activate() {
    this.modalService.close()
  }
  inputChangeemail(event: any) {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (pattern.test(this.form.value.email)) {
      this.emailid = true
    } else {
      this.emailid = false
    }
  }
  inputChangePhone(event: any) {
    if (this.form.value.phone.length === 10) {
      this.phonenumber = true
    } else {
      this.phonenumber = false
    }

  }

}
