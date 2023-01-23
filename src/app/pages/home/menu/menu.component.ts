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
  faAngleLeft,
  faEllipsisV
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
  faEllipsisV = faEllipsisV;

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

  ngOnInit() {
    const url = 'https://api.instagram.com/oauth/authorize?client_id=1542398922939986&redirect_uri=https://localhost:4200/&scope=user_profile,user_media &response_type=code';
    const a = 'https://api.instagram.com/oauth/authorize ?client_id=990602627938098 &redirect_uri=https://socialsizzle.herokuapp.com/auth/ &scope=user_profile,user_media &response_type=code';
    console.log(a);
    console.log(url);
  }

}
