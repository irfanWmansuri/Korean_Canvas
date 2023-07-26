function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       E:/Html/project/korean/img/male0001.png
       E:/Html/project/korean/img/male0002.png
       E:/Html/project/korean/img/male0003.png
       E:/Html/project/korean/img/male0004.png
       E:/Html/project/korean/img/male0005.png
       E:/Html/project/korean/img/male0006.png
       E:/Html/project/korean/img/male0007.png
       E:/Html/project/korean/img/male0008.png
       E:/Html/project/korean/img/male0009.png
       E:/Html/project/korean/img/male0010.png
       E:/Html/project/korean/img/male0011.png
       E:/Html/project/korean/img/male0012.png
       E:/Html/project/korean/img/male0013.png
       E:/Html/project/korean/img/male0014.png
       E:/Html/project/korean/img/male0015.png
       E:/Html/project/korean/img/male0016.png
       E:/Html/project/korean/img/male0017.png
       E:/Html/project/korean/img/male0018.png
       E:/Html/project/korean/img/male0019.png
       E:/Html/project/korean/img/male0020.png
       E:/Html/project/korean/img/male0021.png
       E:/Html/project/korean/img/male0022.png
       E:/Html/project/korean/img/male0023.png
       E:/Html/project/korean/img/male0024.png
       E:/Html/project/korean/img/male0025.png
       E:/Html/project/korean/img/male0026.png
       E:/Html/project/korean/img/male0027.png
       E:/Html/project/korean/img/male0028.png
       E:/Html/project/korean/img/male0029.png
       E:/Html/project/korean/img/male0030.png
       E:/Html/project/korean/img/male0031.png
       E:/Html/project/korean/img/male0032.png
       E:/Html/project/korean/img/male0033.png
       E:/Html/project/korean/img/male0034.png
       E:/Html/project/korean/img/male0035.png
       E:/Html/project/korean/img/male0036.png
       E:/Html/project/korean/img/male0037.png
       E:/Html/project/korean/img/male0038.png
       E:/Html/project/korean/img/male0039.png
       E:/Html/project/korean/img/male0040.png
       E:/Html/project/korean/img/male0041.png
       E:/Html/project/korean/img/male0042.png
       E:/Html/project/korean/img/male0043.png
       E:/Html/project/korean/img/male0044.png
       E:/Html/project/korean/img/male0045.png
       E:/Html/project/korean/img/male0046.png
       E:/Html/project/korean/img/male0047.png
       E:/Html/project/korean/img/male0048.png
       E:/Html/project/korean/img/male0049.png
       E:/Html/project/korean/img/male0050.png
       E:/Html/project/korean/img/male0051.png
       E:/Html/project/korean/img/male0052.png
       E:/Html/project/korean/img/male0053.png
       E:/Html/project/korean/img/male0054.png
       E:/Html/project/korean/img/male0055.png
       E:/Html/project/korean/img/male0056.png
       E:/Html/project/korean/img/male0057.png
       E:/Html/project/korean/img/male0058.png
       E:/Html/project/korean/img/male0059.png
       E:/Html/project/korean/img/male0060.png
       E:/Html/project/korean/img/male0061.png
       E:/Html/project/korean/img/male0062.png
       E:/Html/project/korean/img/male0063.png
       E:/Html/project/korean/img/male0064.png
       E:/Html/project/korean/img/male0065.png
       E:/Html/project/korean/img/male0066.png
       E:/Html/project/korean/img/male0067.png
       E:/Html/project/korean/img/male0068.png
       E:/Html/project/korean/img/male0069.png
       E:/Html/project/korean/img/male0070.png
       E:/Html/project/korean/img/male0071.png
       E:/Html/project/korean/img/male0072.png
       E:/Html/project/korean/img/male0073.png
       E:/Html/project/korean/img/male0074.png
       E:/Html/project/korean/img/male0075.png
       E:/Html/project/korean/img/male0076.png
       E:/Html/project/korean/img/male0077.png
       E:/Html/project/korean/img/male0078.png
       E:/Html/project/korean/img/male0079.png
       E:/Html/project/korean/img/male0080.png
       E:/Html/project/korean/img/male0081.png
       E:/Html/project/korean/img/male0082.png
       E:/Html/project/korean/img/male0083.png
       E:/Html/project/korean/img/male0084.png
       E:/Html/project/korean/img/male0085.png
       E:/Html/project/korean/img/male0086.png
       E:/Html/project/korean/img/male0087.png
       E:/Html/project/korean/img/male0088.png
       E:/Html/project/korean/img/male0089.png
       E:/Html/project/korean/img/male0090.png
       E:/Html/project/korean/img/male0091.png
       E:/Html/project/korean/img/male0092.png
       E:/Html/project/korean/img/male0093.png
       E:/Html/project/korean/img/male0094.png
       E:/Html/project/korean/img/male0095.png
       E:/Html/project/korean/img/male0096.png
       E:/Html/project/korean/img/male0097.png
       E:/Html/project/korean/img/male0098.png
       E:/Html/project/korean/img/male0099.png
       E:/Html/project/korean/img/male0100.png
       E:/Html/project/korean/img/male0101.png
       E:/Html/project/korean/img/male0102.png
       E:/Html/project/korean/img/male0103.png
       E:/Html/project/korean/img/male0104.png
       E:/Html/project/korean/img/male0105.png
       E:/Html/project/korean/img/male0106.png
       E:/Html/project/korean/img/male0107.png
       E:/Html/project/korean/img/male0108.png
       E:/Html/project/korean/img/male0109.png
       E:/Html/project/korean/img/male0110.png
       E:/Html/project/korean/img/male0111.png
       E:/Html/project/korean/img/male0112.png
       E:/Html/project/korean/img/male0113.png
       E:/Html/project/korean/img/male0114.png
       E:/Html/project/korean/img/male0115.png
       E:/Html/project/korean/img/male0116.png
       E:/Html/project/korean/img/male0117.png
       E:/Html/project/korean/img/male0118.png
       E:/Html/project/korean/img/male0119.png
       E:/Html/project/korean/img/male0120.png
       E:/Html/project/korean/img/male0121.png
       E:/Html/project/korean/img/male0122.png
       E:/Html/project/korean/img/male0123.png
       E:/Html/project/korean/img/male0124.png
       E:/Html/project/korean/img/male0125.png
       E:/Html/project/korean/img/male0126.png
       E:/Html/project/korean/img/male0127.png
       E:/Html/project/korean/img/male0128.png
       E:/Html/project/korean/img/male0129.png
       E:/Html/project/korean/img/male0130.png
       E:/Html/project/korean/img/male0131.png
       E:/Html/project/korean/img/male0132.png
       E:/Html/project/korean/img/male0133.png
       E:/Html/project/korean/img/male0134.png
       E:/Html/project/korean/img/male0135.png
       E:/Html/project/korean/img/male0136.png
       E:/Html/project/korean/img/male0137.png
       E:/Html/project/korean/img/male0138.png
       E:/Html/project/korean/img/male0139.png
       E:/Html/project/korean/img/male0140.png
       E:/Html/project/korean/img/male0141.png
       E:/Html/project/korean/img/male0142.png
       E:/Html/project/korean/img/male0143.png
       E:/Html/project/korean/img/male0144.png
       E:/Html/project/korean/img/male0145.png
       E:/Html/project/korean/img/male0146.png
       E:/Html/project/korean/img/male0147.png
       E:/Html/project/korean/img/male0148.png
       E:/Html/project/korean/img/male0149.png
       E:/Html/project/korean/img/male0150.png
       E:/Html/project/korean/img/male0151.png
       E:/Html/project/korean/img/male0152.png
       E:/Html/project/korean/img/male0153.png
       E:/Html/project/korean/img/male0154.png
       E:/Html/project/korean/img/male0155.png
       E:/Html/project/korean/img/male0156.png
       E:/Html/project/korean/img/male0157.png
       E:/Html/project/korean/img/male0158.png
       E:/Html/project/korean/img/male0159.png
       E:/Html/project/korean/img/male0160.png
       E:/Html/project/korean/img/male0161.png
       E:/Html/project/korean/img/male0162.png
       E:/Html/project/korean/img/male0163.png
       E:/Html/project/korean/img/male0164.png
       E:/Html/project/korean/img/male0165.png
       E:/Html/project/korean/img/male0166.png
       E:/Html/project/korean/img/male0167.png
       E:/Html/project/korean/img/male0168.png
       E:/Html/project/korean/img/male0169.png
       E:/Html/project/korean/img/male0170.png
       E:/Html/project/korean/img/male0171.png
       E:/Html/project/korean/img/male0172.png
       E:/Html/project/korean/img/male0173.png
       E:/Html/project/korean/img/male0174.png
       E:/Html/project/korean/img/male0175.png
       E:/Html/project/korean/img/male0176.png
       E:/Html/project/korean/img/male0177.png
       E:/Html/project/korean/img/male0178.png
       E:/Html/project/korean/img/male0179.png
       E:/Html/project/korean/img/male0180.png
       E:/Html/project/korean/img/male0181.png
       E:/Html/project/korean/img/male0182.png
       E:/Html/project/korean/img/male0183.png
       E:/Html/project/korean/img/male0184.png
       E:/Html/project/korean/img/male0185.png
       E:/Html/project/korean/img/male0186.png
       E:/Html/project/korean/img/male0187.png
       E:/Html/project/korean/img/male0188.png
       E:/Html/project/korean/img/male0189.png
       E:/Html/project/korean/img/male0190.png
       E:/Html/project/korean/img/male0191.png
       E:/Html/project/korean/img/male0192.png
       E:/Html/project/korean/img/male0193.png
       E:/Html/project/korean/img/male0194.png
       E:/Html/project/korean/img/male0195.png
       E:/Html/project/korean/img/male0196.png
       E:/Html/project/korean/img/male0197.png
       E:/Html/project/korean/img/male0198.png
       E:/Html/project/korean/img/male0199.png
       E:/Html/project/korean/img/male0200.png
       E:/Html/project/korean/img/male0201.png
       E:/Html/project/korean/img/male0202.png
       E:/Html/project/korean/img/male0203.png
       E:/Html/project/korean/img/male0204.png
       E:/Html/project/korean/img/male0205.png
       E:/Html/project/korean/img/male0206.png
       E:/Html/project/korean/img/male0207.png
       E:/Html/project/korean/img/male0208.png
       E:/Html/project/korean/img/male0209.png
       E:/Html/project/korean/img/male0210.png
       E:/Html/project/korean/img/male0211.png
       E:/Html/project/korean/img/male0212.png
       E:/Html/project/korean/img/male0213.png
       E:/Html/project/korean/img/male0214.png
       E:/Html/project/korean/img/male0215.png
       E:/Html/project/korean/img/male0216.png
       E:/Html/project/korean/img/male0217.png
       E:/Html/project/korean/img/male0218.png
       E:/Html/project/korean/img/male0219.png
       E:/Html/project/korean/img/male0220.png
       E:/Html/project/korean/img/male0221.png
       E:/Html/project/korean/img/male0222.png
       E:/Html/project/korean/img/male0223.png
       E:/Html/project/korean/img/male0224.png
       E:/Html/project/korean/img/male0225.png
       E:/Html/project/korean/img/male0226.png
       E:/Html/project/korean/img/male0227.png
       E:/Html/project/korean/img/male0228.png
       E:/Html/project/korean/img/male0229.png
       E:/Html/project/korean/img/male0230.png
       E:/Html/project/korean/img/male0231.png
       E:/Html/project/korean/img/male0232.png
       E:/Html/project/korean/img/male0233.png
       E:/Html/project/korean/img/male0234.png
       E:/Html/project/korean/img/male0235.png
       E:/Html/project/korean/img/male0236.png
       E:/Html/project/korean/img/male0237.png
       E:/Html/project/korean/img/male0238.png
       E:/Html/project/korean/img/male0239.png
       E:/Html/project/korean/img/male0240.png
       E:/Html/project/korean/img/male0241.png
       E:/Html/project/korean/img/male0242.png
       E:/Html/project/korean/img/male0243.png
       E:/Html/project/korean/img/male0244.png
       E:/Html/project/korean/img/male0245.png
       E:/Html/project/korean/img/male0246.png
       E:/Html/project/korean/img/male0247.png
       E:/Html/project/korean/img/male0248.png
       E:/Html/project/korean/img/male0249.png
       E:/Html/project/korean/img/male0250.png
       E:/Html/project/korean/img/male0251.png
       E:/Html/project/korean/img/male0252.png
       E:/Html/project/korean/img/male0253.png
       E:/Html/project/korean/img/male0254.png
       E:/Html/project/korean/img/male0255.png
       E:/Html/project/korean/img/male0256.png
       E:/Html/project/korean/img/male0257.png
       E:/Html/project/korean/img/male0258.png
       E:/Html/project/korean/img/male0259.png
       E:/Html/project/korean/img/male0260.png
       E:/Html/project/korean/img/male0261.png
       E:/Html/project/korean/img/male0262.png
       E:/Html/project/korean/img/male0263.png
       E:/Html/project/korean/img/male0264.png
       E:/Html/project/korean/img/male0265.png
       E:/Html/project/korean/img/male0266.png
       E:/Html/project/korean/img/male0267.png
       E:/Html/project/korean/img/male0268.png
       E:/Html/project/korean/img/male0269.png
       E:/Html/project/korean/img/male0270.png
       E:/Html/project/korean/img/male0271.png
       E:/Html/project/korean/img/male0272.png
       E:/Html/project/korean/img/male0273.png
       E:/Html/project/korean/img/male0274.png
       E:/Html/project/korean/img/male0275.png
       E:/Html/project/korean/img/male0276.png
       E:/Html/project/korean/img/male0277.png
       E:/Html/project/korean/img/male0278.png
       E:/Html/project/korean/img/male0279.png
       E:/Html/project/korean/img/male0280.png
       E:/Html/project/korean/img/male0281.png
       E:/Html/project/korean/img/male0282.png
       E:/Html/project/korean/img/male0283.png
       E:/Html/project/korean/img/male0284.png
       E:/Html/project/korean/img/male0285.png
       E:/Html/project/korean/img/male0286.png
       E:/Html/project/korean/img/male0287.png
       E:/Html/project/korean/img/male0288.png
       E:/Html/project/korean/img/male0289.png
       E:/Html/project/korean/img/male0290.png
       E:/Html/project/korean/img/male0291.png
       E:/Html/project/korean/img/male0292.png
       E:/Html/project/korean/img/male0293.png
       E:/Html/project/korean/img/male0294.png
       E:/Html/project/korean/img/male0295.png
       E:/Html/project/korean/img/male0296.png
       E:/Html/project/korean/img/male0297.png
       E:/Html/project/korean/img/male0298.png
       E:/Html/project/korean/img/male0299.png
       E:/Html/project/korean/img/male0300.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })