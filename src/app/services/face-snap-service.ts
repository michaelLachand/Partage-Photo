import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";


@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {
  faceSnaps: FaceSnap[] = [
    {
      id:1,
      title: 'Mike',
      description: 'Le plus fort de tous',
      createdDate: new Date(),
      snaps: 150,
      imageUrl: 'https://pixabay.com/get/gd6d548df047c8f2a8de308cf6336cee8f82c5348cf805dc4def2da971c7206cfd1f73997d589a085c43f69f6bcb47b6294367ae6e1e8e66bb1d53db9dabb7d5e749c3f480bcc89041ad3d0aca025a253_640.jpg',
      location: 'Rennes'
    },
    {
      id:2,
      title: 'Lilie',
      description: 'La plus belle des femmes',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://pixabay.com/get/g615ec1f28853af975bbd901ae900d719042c0ca08329df0c5071b380d0890a25d20f9e378983c8b0a2335aa873503dade10000150bf7f35e308f204cf76d407c6e1dbda36f5b5893535ec0870f27c3a9_640.jpg',

    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(!faceSnap){
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType : 'snap' | 'unsnap'): void {
   const faceSnap = this.getFaceSnapById(faceSnapId);
   snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

}
