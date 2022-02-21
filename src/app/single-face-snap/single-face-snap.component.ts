import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapService} from "../services/face-snap-service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.buttonText = 'Oh Snaps!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
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

}
