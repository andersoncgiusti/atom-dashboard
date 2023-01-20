import { Component, OnInit } from '@angular/core';
import {
  faUser,
  faHome,
  faPen,
  faEnvelope,
  faInbox,
  faPhotoVideo,
  faBars,
  faSignOutAlt,
  faTimes,
  faAngleLeft
 } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // declarations icons fontawesome
  faUser = faUser;
  faHome = faHome;
  faPen = faPen;
  faEnvelope = faEnvelope;
  faInbox = faInbox;
  faPhotoVideo = faPhotoVideo;
  faBars = faBars;
  faSignOutAlt = faSignOutAlt;
  faTimes = faTimes;
  faAngleLeft = faAngleLeft;

  // display for menu
  showFiller = false;

  closeMenu = false;
  openMenu = true;

  open() {
    this.closeMenu = !this.closeMenu;
    this.openMenu = !this.openMenu;
  }

  close() {
    this.openMenu = !this.openMenu;
    this.closeMenu = !this.closeMenu;
  }

  // ! method for used in future
  // links = ['First', 'Second', 'Third'];
  // activeLink = this.links[0];
  // background: ThemePalette = undefined;

  // toggleBackground() {
  //   this.background = this.background ? undefined : 'primary';
  // }

  // addLink() {
  //   this.links.push(`Link ${this.links.length + 1}`);
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
