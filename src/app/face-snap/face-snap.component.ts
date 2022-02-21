import { Component,OnInit, Input } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapService} from "../services/face-snap-service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapService,
              private router: Router) {
  }

  ngOnInit() {
    this.buttonText = 'Oh Snaps!';
  }

  onSnap() {
    if(this.buttonText === 'Oh Snaps!'){
      this.buttonText = 'Oops, unSnap!';
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snaps!';
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
