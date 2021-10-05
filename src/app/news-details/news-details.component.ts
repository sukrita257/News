import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  id:number=0
  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramData)=>{
      this.id=paramData.id;
    })
  }

  myData=[
    {
      pic: "assets/img/trending/trending_top.jpg",
      heading: "Here come the moms in space",
      para: "My hero when I was a kid was my mom. Same for everyone I knew. Moms are untouchable. They’re elegant, smart, beautiful, kind…everything we want to be. At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top, makes me so proud of how far I’ve come, and so thankful for where I come from the refractor telescope uses a convex lens to focus the light on the eyepiece.The reflector telescope has a concave lens which means it bends in. It uses mirrors to focus the image that you eventually see."
    },
    {
      pic: "assets/img/trending/trending_bottom1.jpg",
      heading: "Unordered list style?",
      para: "The reflector telescope has a concave lens which means it bends in. It uses mirrors to focus the image that you eventually see. Collimation is a term for how well tuned the telescope is to give you a good clear image of what you are looking at. You want your telescope to have good collimation so you are not getting a false image of the celestial body.  Aperture is a fancy word for how big the lens of your telescope is. But it’s an important word because the aperture of the lens is the key to how powerful your telescope is. Magnification has nothing to do with it, its all in the aperture."
    },
    {
      pic: "assets/img/trending/trending_bottom2.jpg",
      heading: "Moms are like pizza crusts",
      para: "Focuser is the housing that keeps the eyepiece of the telescope, or what you will look through, in place. The focuser has to be stable and in good repair for you to have an image you can rely on. Mount and Wedge. Both of these terms refer to the tripod your telescope sits on. The mount is the actual tripod and the wedge is the device that lets you attach the telescope to the mount."
    },
    {
      pic: "assets/img/trending/trending_bottom3.jpg",
      heading: "Moms are like…buttons?",
      para: "Moms are like pizza crusts. Moms are the ones who make sure things happen—from birth to school lunch. The refractor telescope uses a convex lens to focus the light on the eyepiece. The reflector telescope has a concave lens which means it bends in. It uses mirrors to focus the image that you eventually see. Collimation is a term for how well tuned the telescope is to give you a good clear image of what you are looking at."
    },
    {
      pic: "assets/img/trending/right1.jpg",
      heading: "Mount and Wedge.",
      para: "Both of these terms refer to the tripod your telescope sits on. The mount is the actual tripod and the wedge is the device that lets you attach the telescope to the mount. Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen—from birth to school lunch."
    },
    {
      pic: "assets/img/trending/right2.jpg",
      heading: "Moms are like pizza crusts.",
      para: "Both of these terms refer to the tripod your telescope sits on. The mount is the actual tripod and the wedge is the device that lets you attach the telescope to the mount. oth of these terms refer to the tripod your telescope sits on. The mount is the actual tripod and the wedge is the device that lets you attach the telescope to the mount. oth of these terms refer to the tripod your telescope sits on. The mount is the actual tripod and the wedge is the device that lets you attach the telescope to the mount."
    },
    {
      pic: "assets/img/trending/right3.jpg",
      heading: "Moms are the ones",
      para: "Mount and Wedge. Both of these terms refer to the tripod your telescope sits on. The mount is the actual tripod and the wedge is the device that lets you attach the telescope to the mount. Moms are like…buttons? Moms are like glue. Moms are like pizza crusts."
    },
    {
      pic: "assets/img/trending/right4.jpg",
      heading: "Things happen",
      para: "The mount is the actual tripod and the wedge is the device that lets you attach the telescope to the mount. Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen—from birth to school lunch."
    },
    {
      pic: "assets/img/trending/right5.jpg",
      heading: "Things happen",
      para: "The mount is the actual tripod and the wedge is the device that lets you attach the telescope to the mount. Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen—from birth to school lunch."
    }
  ]

}
