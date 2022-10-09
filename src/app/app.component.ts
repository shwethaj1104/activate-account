import { Component, OnInit } from '@angular/core';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'activate';
  constructor(private modal: MatDialog,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void { }

  activate() {
    this.modalService.open(PopUpComponent);
  }
}
